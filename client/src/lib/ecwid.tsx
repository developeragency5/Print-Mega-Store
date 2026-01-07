import { createContext, useContext, useEffect, useState, useCallback, ReactNode } from "react";

export const STORE_ID = "128774264";

export interface EcwidCategory {
  id: string;
  name: string;
  slug: string;
}

export const STORE_CATEGORIES: EcwidCategory[] = [
  { id: "193853315", name: "Home Printers", slug: "Home-Printers" },
  { id: "193853316", name: "Office Printers", slug: "Office-Printers" },
  { id: "193853317", name: "Inkjet Printers", slug: "Inkjet-Printers" },
  { id: "193853318", name: "Laser Printers", slug: "Laser-Printers" },
  { id: "193853319", name: "Document Scanners", slug: "Document-Scanners" },
];

export function getCategoryUrl(category: EcwidCategory): string {
  return `/shop#!/${category.slug}/c/${category.id}`;
}

export function getCategoryUrlById(id: string, name: string): string {
  const slug = name.replace(/\s+/g, "-");
  return `/shop#!/${slug}/c/${id}`;
}

export function getProductUrl(productId: string, productName: string): string {
  const slug = productName.replace(/\s+/g, "-").replace(/[^a-zA-Z0-9-]/g, "");
  return `/shop#!/${slug}/p/${productId}`;
}

interface EcwidContextType {
  isReady: boolean;
  categories: EcwidCategory[];
  openCategory: (categoryId: string) => void;
  openProduct: (productId: string) => void;
  navigateToCategory: (category: EcwidCategory) => void;
}

const EcwidContext = createContext<EcwidContextType>({
  isReady: false,
  categories: STORE_CATEGORIES,
  openCategory: () => {},
  openProduct: () => {},
  navigateToCategory: () => {},
});

export function useEcwid() {
  return useContext(EcwidContext);
}

declare global {
  interface Window {
    Ecwid: any;
    xProductBrowser: (...args: string[]) => void;
    ecwid_script_defer: boolean;
    ecwid_dynamic_widgets: boolean;
    _xnext_initialization_scripts: any[];
    ec: any;
  }
}

interface EcwidProviderProps {
  children: ReactNode;
}

export function EcwidProvider({ children }: EcwidProviderProps) {
  const [isReady, setIsReady] = useState(false);

  const openCategory = useCallback((categoryId: string) => {
    if (typeof window.Ecwid !== "undefined" && window.Ecwid.openPage) {
      window.Ecwid.openPage("category", { id: parseInt(categoryId) });
    } else {
      const category = STORE_CATEGORIES.find(c => c.id === categoryId);
      if (category) {
        window.location.href = getCategoryUrl(category);
      }
    }
  }, []);

  const openProduct = useCallback((productId: string) => {
    if (typeof window.Ecwid !== "undefined" && window.Ecwid.openPage) {
      window.Ecwid.openPage("product", { id: parseInt(productId) });
    }
  }, []);

  const navigateToCategory = useCallback((category: EcwidCategory) => {
    window.location.href = getCategoryUrl(category);
  }, []);

  useEffect(() => {
    window.ecwid_script_defer = true;
    window.ecwid_dynamic_widgets = true;

    const initEcwid = () => {
      if (typeof window.Ecwid !== "undefined") {
        if (window.Ecwid.OnAPILoaded) {
          window.Ecwid.OnAPILoaded.add(() => {
            setIsReady(true);
          });
        }
        if (window.Ecwid.OnPageLoaded) {
          window.Ecwid.OnPageLoaded.add(() => {
            setIsReady(true);
          });
        }
      }
    };

    const existingScript = document.getElementById("ecwid-script");
    if (existingScript) {
      initEcwid();
    } else {
      const script = document.createElement("script");
      script.id = "ecwid-script";
      script.type = "text/javascript";
      script.src = `https://app.ecwid.com/script.js?${STORE_ID}&data_platform=code`;
      script.async = true;
      script.onload = initEcwid;
      document.body.appendChild(script);
    }

    const timeout = setTimeout(() => {
      setIsReady(true);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <EcwidContext.Provider value={{ 
      isReady, 
      categories: STORE_CATEGORIES, 
      openCategory, 
      openProduct,
      navigateToCategory 
    }}>
      {children}
    </EcwidContext.Provider>
  );
}
