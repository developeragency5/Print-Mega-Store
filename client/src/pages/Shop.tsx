import { useEffect, useState, useRef } from "react";
import { Loader2 } from "lucide-react";
import { STORE_ID } from "@/lib/ecwid";
import { CategoryBanner } from "@/components/CategoryBanner";

declare global {
  interface Window {
    xProductBrowser: (...args: string[]) => void;
    Ecwid: any;
    ecwid_script_defer: boolean;
    ecwid_dynamic_widgets: boolean;
  }
}

export default function Shop() {
  const [isLoading, setIsLoading] = useState(true);
  const widgetInitialized = useRef(false);

  useEffect(() => {
    window.ecwid_script_defer = true;
    window.ecwid_dynamic_widgets = true;

    const initWidget = () => {
      if (widgetInitialized.current) return;
      
      if (typeof window.xProductBrowser === "function") {
        widgetInitialized.current = true;
        window.xProductBrowser(
          "categoriesPerRow=3",
          "views=grid(20,3) list(60) table(60)",
          "categoryView=grid",
          "searchView=list",
          `id=my-store-${STORE_ID}`
        );
        setIsLoading(false);
      }
    };

    const loadEcwidScript = () => {
      const existingScript = document.getElementById("ecwid-script");
      
      if (existingScript) {
        initWidget();
        if (typeof window.Ecwid !== "undefined") {
          window.Ecwid.OnAPILoaded.add(() => {
            initWidget();
          });
        }
      } else {
        const script = document.createElement("script");
        script.id = "ecwid-script";
        script.type = "text/javascript";
        script.src = `https://app.ecwid.com/script.js?${STORE_ID}&data_platform=code`;
        script.async = true;
        script.onload = () => {
          if (typeof window.Ecwid !== "undefined") {
            window.Ecwid.OnAPILoaded.add(() => {
              initWidget();
            });
          }
          initWidget();
        };
        document.body.appendChild(script);
      }
    };

    loadEcwidScript();

    const checkInterval = setInterval(() => {
      if (typeof window.xProductBrowser === "function" && !widgetInitialized.current) {
        initWidget();
        clearInterval(checkInterval);
      }
    }, 200);

    const timeout = setTimeout(() => {
      clearInterval(checkInterval);
      setIsLoading(false);
    }, 8000);

    return () => {
      clearInterval(checkInterval);
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      if (typeof window.Ecwid !== "undefined" && window.Ecwid.init) {
        window.Ecwid.init();
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <CategoryBanner />
        
        {/* Catalog Introduction Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 mb-6">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Print Mega Store is a U.S.-based independent online retailer specializing in HP® printers and document scanners for home, office, and business use.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We offer a curated selection of HP inkjet printers, laser printers, and professional scanners designed for everyday printing, home offices, small businesses, and enterprise environments.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Every product listed in our catalog is new, factory-sealed, and covered by the manufacturer's warranty. Orders are shipped directly from authorized distribution partners within the United States to ensure fast delivery and authentic products.
            </p>
          </div>
        </div>

        {/* How to Choose Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 mb-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">How to Choose the Right Printer or Scanner</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900">Home Printers</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Ideal for everyday printing, homework, photos, and occasional scanning. These models are compact, affordable, and designed for light to moderate use.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900">Office Printers</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Built for higher workloads, shared use, and business environments. These models support faster speeds, larger paper trays, and higher monthly duty cycles.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900">Inkjet Printers</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Best for color printing, photos, and mixed media. Inkjet printers are popular for homes, students, and creative projects.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900">Laser Printers</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Designed for fast, high-volume text printing. Laser printers are more cost-efficient for offices and businesses that print frequently.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900">Document Scanners</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Professional scanners for digitizing paperwork, invoices, contracts, and archives. Ideal for offices and document management.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 sm:p-8 min-h-[600px]">
          {isLoading && (
            <div className="flex flex-col items-center justify-center h-96 text-muted-foreground">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
                <Loader2 className="relative w-12 h-12 animate-spin text-primary" data-testid="loading-spinner" />
              </div>
              <p className="mt-6 text-lg font-medium">Loading store...</p>
              <p className="text-sm text-muted-foreground mt-1">Please wait while we prepare your shopping experience</p>
            </div>
          )}
          <div id={`my-store-${STORE_ID}`} data-testid="ecwid-store-container"></div>
        </div>
      </div>
    </div>
  );
}
