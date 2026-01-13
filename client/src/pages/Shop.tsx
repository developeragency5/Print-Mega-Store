import { useEffect, useState, useRef } from "react";
import { Loader2, ShieldCheck, ArrowDown } from "lucide-react";
import { STORE_ID } from "@/lib/ecwid";
import { CategoryBanner } from "@/components/CategoryBanner";
import { motion } from "framer-motion";
import shopBannerImg from "@assets/HP_OfficeJet_8015e_All-in-One_Printer_with_6_Months_of_Instant_1767897902002.jpg";

function parseCategorySlugFromHash(hash: string): string | null {
  const match = hash.match(/^#!\/([^/]+)\/c\//);
  return match ? match[1] : null;
}

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
  const [categorySlug, setCategorySlug] = useState<string | null>(() => 
    parseCategorySlugFromHash(window.location.hash)
  );
  const widgetInitialized = useRef(false);

  useEffect(() => {
    const handleHashChange = () => {
      setCategorySlug(parseCategorySlugFromHash(window.location.hash));
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

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

  const scrollToProducts = () => {
    const storeContainer = document.querySelector('[id^="my-store-"]');
    if (storeContainer) {
      storeContainer.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Shop Page Hero Banner - shows when no category selected */}
        {!categorySlug && (
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl border border-gray-100 p-6 md:p-10 mb-6"
            data-testid="shop-hero-banner"
          >
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="w-full md:w-3/5 text-center md:text-left">
                <h1 
                  className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                  data-testid="shop-banner-title"
                >
                  Printers & Scanners
                </h1>
                <p 
                  className="text-gray-600 leading-relaxed mb-6 text-base md:text-lg"
                  data-testid="shop-banner-description"
                >
                  Explore our complete collection of HP printers and document scanners. From compact home printers to high-performance office equipment, find the perfect solution for all your printing and scanning needs.
                </p>
                <button
                  onClick={scrollToProducts}
                  className="inline-flex items-center gap-2 bg-[#33cccc] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#29a3a3] transition-all"
                  data-testid="shop-banner-browse-button"
                >
                  Browse Products
                  <ArrowDown className="w-4 h-4" />
                </button>
              </div>
              <div className="w-full md:w-2/5 flex justify-center">
                <img
                  src={shopBannerImg}
                  alt="Printers and Scanners"
                  className="max-h-[220px] md:max-h-[260px] w-auto object-contain"
                  data-testid="shop-banner-image"
                />
              </div>
            </div>
          </motion.section>
        )}

        <CategoryBanner />
        
        {/* Catalog Introduction Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-10 mb-6"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">About Print Mega Store</h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed text-lg">
                Print Mega Store is a U.S.-based independent online retailer specializing in HP® printers and document scanners for home, office, and business use.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We offer a curated selection of HP inkjet printers, laser printers, and professional scanners designed for everyday printing, home offices, small businesses, and enterprise environments.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Every product listed in our catalog is new and factory-sealed. Orders are shipped from U.S.-based fulfillment partners to ensure fast delivery and authentic products.
              </p>
            </div>
          </div>
        </motion.div>

        {/* How to Choose Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-10 mb-6"
        >
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">How to Choose the Right Printer or Scanner</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-[#33cccc] hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-[#33cccc]/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-[#33cccc] text-xl font-bold">1</span>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Home Printers</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Ideal for everyday printing, homework, photos, and occasional scanning. Compact, affordable, and designed for light to moderate use.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-[#33cccc] hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-[#33cccc]/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-[#33cccc] text-xl font-bold">2</span>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Office Printers</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Built for higher workloads and business environments. Faster speeds, larger paper trays, and higher monthly duty cycles.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-[#33cccc] hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-[#33cccc]/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-[#33cccc] text-xl font-bold">3</span>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Inkjet Printers</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Best for color printing, photos, and mixed media. Popular for homes, students, and creative projects.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-[#33cccc] hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-[#33cccc]/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-[#33cccc] text-xl font-bold">4</span>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Laser Printers</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Designed for fast, high-volume text printing. More cost-efficient for offices and businesses that print frequently.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-[#33cccc] hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-[#33cccc]/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-[#33cccc] text-xl font-bold">5</span>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Document Scanners</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Professional scanners for digitizing paperwork, invoices, contracts, and archives. Ideal for offices and document management.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

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

        {/* Ordering, Shipping & Support Summary */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-[#33cccc]/5 to-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-10 mt-6"
        >
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">Ordering, Shipping & Warranty</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <div className="w-10 h-10 bg-[#33cccc]/10 rounded-lg flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5 text-[#33cccc]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Secure Orders</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Orders are processed securely online and shipped within the United States.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <div className="w-10 h-10 bg-[#33cccc]/10 rounded-lg flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5 text-[#33cccc]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Order Tracking</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Tracking information is provided after purchase for all shipments.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <div className="w-10 h-10 bg-[#33cccc]/10 rounded-lg flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5 text-[#33cccc]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Returns & Refunds</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Handled according to our <a href="/returns" className="text-[#33cccc] hover:underline font-medium">Return & Refund Policy</a>.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <div className="w-10 h-10 bg-[#33cccc]/10 rounded-lg flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5 text-[#33cccc]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Warranty Coverage</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Warranty and technical support are provided by the manufacturer in accordance with their warranty policies.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <div className="w-10 h-10 bg-[#33cccc]/10 rounded-lg flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5 text-[#33cccc]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Order Assistance</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Our team is available to assist with order status, billing, and product information.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Product Authenticity & Warranty Block - Shows on category pages */}
        {categorySlug && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl border border-gray-200 p-8 sm:p-10 mt-6 shadow-sm" 
            data-testid="warranty-authenticity-block"
          >
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#33cccc]/10 rounded-full flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-[#33cccc]" />
                </div>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 text-center mb-4">Product Authenticity & Warranty</h2>
              <div className="space-y-4 text-center">
                <p className="text-gray-700 leading-relaxed">
                  All products sold by Print Mega Store are new, factory-sealed products sourced from independent U.S. distributors.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Manufacturer warranty coverage may be available and is provided by the manufacturer according to their terms.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
