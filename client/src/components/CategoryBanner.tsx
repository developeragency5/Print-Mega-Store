import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

import homePrintersImg from "@assets/HP_DeskJet_4255e_All-in-One_Printer_with_3_Months_of_Instant_I_1767897872063.jpg";
import officePrintersImg from "@assets/HP_OfficeJet_8015e_All-in-One_Printer_with_6_Months_of_Instant_1767897902002.jpg";
import inkjetPrintersImg from "@assets/HP_Smart_Tank_7301_All-in-One_Printer2_1767897946107.png";
import laserPrintersImg from "@assets/Horizon_Skyreach_FB_M234dw_LightBasalt_Catalog_FrontLeft_M1563_1767897994205.jpg";
import documentScannersImg from "@assets/n9120fn3_1767898053716.png";

interface CategoryBannerData {
  title: string;
  description: string;
  image: string;
}

const categoryBanners: Record<string, CategoryBannerData> = {
  "Home-Printers": {
    title: "Home Printers",
    description: "Discover our range of compact, reliable home printers perfect for everyday printing needs. From wireless all-in-one solutions to budget-friendly options, find the ideal printer for photos, documents, and school projects.",
    image: homePrintersImg
  },
  "Office-Printers": {
    title: "Office Printers",
    description: "Power your business with professional-grade office printers built for high-volume printing. Enjoy fast speeds, automatic document feeders, and advanced security features designed for demanding work environments.",
    image: officePrintersImg
  },
  "Inkjet-Printers": {
    title: "Inkjet Printers",
    description: "Experience vibrant color printing with our premium inkjet printers. Ideal for photos, graphics, and creative projects with exceptional color accuracy and cost-effective ink tank systems.",
    image: inkjetPrintersImg
  },
  "Laser-Printers": {
    title: "Laser Printers",
    description: "Get lightning-fast, professional-quality prints with our laser printer collection. Perfect for offices needing high-speed document printing with crisp text and low cost per page.",
    image: laserPrintersImg
  },
  "Document-Scanners": {
    title: "Document Scanners",
    description: "Digitize your documents efficiently with our high-performance scanners. From flatbed to automatic document feeders, find scanners with advanced OCR, cloud connectivity, and professional scanning capabilities.",
    image: documentScannersImg
  }
};

function parseCategorySlugFromHash(hash: string): string | null {
  const match = hash.match(/^#!\/([^/]+)\/c\//);
  return match ? match[1] : null;
}

export function CategoryBanner() {
  const [categorySlug, setCategorySlug] = useState<string | null>(() => 
    parseCategorySlugFromHash(window.location.hash)
  );

  useEffect(() => {
    const handleHashChange = () => {
      const newSlug = parseCategorySlugFromHash(window.location.hash);
      setCategorySlug(newSlug);
      
      if (newSlug && categoryBanners[newSlug]) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  if (!categorySlug || !categoryBanners[categorySlug]) {
    return null;
  }

  const banner = categoryBanners[categorySlug];

  const scrollToProducts = () => {
    const storeContainer = document.querySelector('[id^="my-store-"]');
    if (storeContainer) {
      storeContainer.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section 
      className="bg-white rounded-xl border border-gray-100 p-6 md:p-10 mb-8"
      data-testid={`category-banner-${categorySlug}`}
    >
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="w-full md:w-3/5 text-center md:text-left">
          <h1 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            data-testid="category-banner-title"
          >
            {banner.title}
          </h1>
          <p 
            className="text-gray-600 leading-relaxed mb-6 text-base md:text-lg"
            data-testid="category-banner-description"
          >
            {banner.description}
          </p>
          <button
            onClick={scrollToProducts}
            className="inline-flex items-center gap-2 bg-[#FFD93D] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#E6C135] transition-all"
            data-testid="category-banner-browse-button"
          >
            Browse Collection
            <ArrowDown className="w-4 h-4" />
          </button>
        </div>
        <div className="w-full md:w-2/5 flex justify-center">
          <img
            src={banner.image}
            alt={banner.title}
            className="max-h-[220px] md:max-h-[260px] w-auto object-contain"
            data-testid="category-banner-image"
          />
        </div>
      </div>
    </section>
  );
}
