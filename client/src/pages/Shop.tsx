import { useEffect, useState, useRef } from "react";
import { Loader2 } from "lucide-react";
import { STORE_ID } from "@/lib/ecwid";

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
  const containerRef = useRef<HTMLDivElement>(null);

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
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={containerRef}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border p-4 sm:p-6 min-h-[600px]"
        >
          {isLoading && (
            <div className="flex flex-col items-center justify-center h-96 text-muted-foreground">
              <Loader2 className="w-10 h-10 animate-spin mb-4 text-primary" data-testid="loading-spinner" />
              <p>Loading store...</p>
            </div>
          )}
          <div id={`my-store-${STORE_ID}`} data-testid="ecwid-store-container"></div>
        </div>
      </div>
    </div>
  );
}
