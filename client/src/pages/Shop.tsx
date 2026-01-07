import { useEffect, useRef } from "react";
import { Loader2 } from "lucide-react";

export default function Shop() {
  const storeRef = useRef<HTMLDivElement>(null);
  const storeId = "128774264";

  useEffect(() => {
    // This function will re-initialize the product browser if we navigate back to this page
    if (window.xProductBrowser && storeRef.current) {
      // Clear any existing content to prevent duplication if re-rendering aggressively
      storeRef.current.innerHTML = "";
      
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.text = `xProductBrowser("categoriesPerRow=3","views=grid(20,3) list(60) table(60)","categoryView=grid","searchView=list","id=my-store-${storeId}");`;
      storeRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Our Catalog</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our wide selection of printers, scanners, and accessories.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border p-4 sm:p-8 min-h-[600px]">
          {/* Ecwid Store Container */}
          <div id={`my-store-${storeId}`} ref={storeRef}>
             {/* Loading State Placeholder */}
            <div className="flex flex-col items-center justify-center h-96 text-muted-foreground">
               <Loader2 className="w-10 h-10 animate-spin mb-4 text-primary" />
               <p>Loading catalog...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
