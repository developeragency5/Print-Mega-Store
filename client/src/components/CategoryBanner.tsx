import { useEffect, useState } from "react";
import { ArrowDown, CheckCircle, Layers } from "lucide-react";
import { motion } from "framer-motion";

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

interface BuyerGuideData {
  title: string;
  paragraphs: string[];
}

interface ProductRangeData {
  title: string;
  intro: string;
  items: { name: string; description: string }[];
}

const categoryProductRanges: Record<string, ProductRangeData> = {
  "Home-Printers": {
    title: "Our Home Printer Selection",
    intro: "We stock a range of HP DeskJet, Envy, and Smart Tank printers to match different home printing needs:",
    items: [
      { name: "DeskJet models", description: "are budget-friendly all-in-one printers for light everyday use." },
      { name: "Envy models", description: "are ideal for families and photo printing with higher print quality." },
      { name: "Smart Tank printers", description: "are designed for high-volume home printing with refillable ink tanks that reduce long-term ink costs." }
    ]
  },
  "Office-Printers": {
    title: "Our Office Printer Selection",
    intro: "We stock a range of HP OfficeJet and LaserJet printers to match different business printing needs:",
    items: [
      { name: "OfficeJet models", description: "are versatile all-in-one printers for small offices and home businesses." },
      { name: "OfficeJet Pro models", description: "offer faster speeds, higher capacity, and professional-quality output for busy offices." },
      { name: "LaserJet models", description: "are designed for high-volume text printing with low cost per page and fast output." }
    ]
  },
  "Inkjet-Printers": {
    title: "Our Inkjet Printer Selection",
    intro: "We stock a range of HP inkjet printers to match different color printing needs:",
    items: [
      { name: "DeskJet models", description: "are compact and affordable for everyday home printing." },
      { name: "ENVY models", description: "offer enhanced photo quality and stylish designs for creative users." },
      { name: "Smart Tank models", description: "feature refillable ink tanks for high-volume printing at a lower cost per page." }
    ]
  },
  "Laser-Printers": {
    title: "Our Laser Printer Selection",
    intro: "We stock a range of HP LaserJet printers to match different business printing needs:",
    items: [
      { name: "LaserJet models", description: "are compact monochrome printers ideal for home offices and small workgroups." },
      { name: "LaserJet Pro models", description: "offer faster speeds and higher capacity for demanding business environments." },
      { name: "LaserJet Enterprise models", description: "are built for high-volume, mission-critical printing with advanced security features." }
    ]
  },
  "Document-Scanners": {
    title: "Our Document Scanner Selection",
    intro: "We stock a range of HP ScanJet scanners to match different document digitization needs:",
    items: [
      { name: "ScanJet Pro models", description: "are compact scanners for small offices and individual users." },
      { name: "ScanJet Enterprise models", description: "offer high-speed scanning with automatic document feeders for busy offices." },
      { name: "ScanJet Enterprise Flow models", description: "are designed for enterprise-level document capture and workflow integration." }
    ]
  }
};

const categoryBuyerGuides: Record<string, BuyerGuideData> = {
  "Home-Printers": {
    title: "Choosing the Right Home Printer",
    paragraphs: [
      "Home printers are designed for everyday printing, scanning, and copying tasks such as schoolwork, bills, photos, and personal documents. When selecting a home printer, it's important to consider print volume, ink efficiency, wireless connectivity, and whether you need scanning and copying features.",
      "Our Home Printer collection includes compact HP inkjet and Smart Tank models that provide reliable print quality, easy setup, and affordable long-term operation for families, students, and home offices."
    ]
  },
  "Office-Printers": {
    title: "Choosing the Right Office Printer",
    paragraphs: [
      "Office printers are built for higher workloads, shared use, and business environments. When selecting an office printer, consider monthly print volume, print speed, paper capacity, duplex printing, and network connectivity options.",
      "Our Office Printer collection includes HP OfficeJet and LaserJet models designed for productivity, reliability, and cost-efficiency in home offices, small businesses, and corporate environments."
    ]
  },
  "Inkjet-Printers": {
    title: "Choosing the Right Inkjet Printer",
    paragraphs: [
      "Inkjet printers are ideal for color printing, photos, and mixed media. They use liquid ink to produce vibrant colors and are popular for homes, students, and creative projects requiring high-quality photo and graphics output.",
      "Our Inkjet Printer collection includes HP DeskJet, ENVY, and Smart Tank models offering wireless connectivity, mobile printing support, and cost-effective ink solutions for everyday and specialty printing needs."
    ]
  },
  "Laser-Printers": {
    title: "Choosing the Right Laser Printer",
    paragraphs: [
      "Laser printers are designed for fast, high-volume text printing with crisp, professional-quality output. They use toner instead of ink, making them more cost-efficient for offices and businesses that print frequently.",
      "Our Laser Printer collection includes HP LaserJet models optimized for speed, durability, and low cost per page, ideal for business documents, reports, and high-volume printing environments."
    ]
  },
  "Document-Scanners": {
    title: "Choosing the Right Document Scanner",
    paragraphs: [
      "Document scanners are professional devices for digitizing paperwork, invoices, contracts, and archives. When selecting a scanner, consider scan speed, automatic document feeders, duplex scanning, and software integration capabilities.",
      "Our Document Scanner collection includes HP ScanJet models designed for high-volume scanning, accurate document capture, and seamless integration with document management workflows."
    ]
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

  const buyerGuide = categoryBuyerGuides[categorySlug];
  const productRange = categoryProductRanges[categorySlug];

  return (
    <>
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl border border-gray-100 p-8 md:p-12 mb-8"
        data-testid={`category-banner-${categorySlug}`}
      >
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-3/5 text-center md:text-left">
            <span className="inline-block text-[#33cccc] font-semibold text-sm uppercase tracking-wider mb-4">
              Print Mega Store
            </span>
            <h1 
              className="text-4xl md:text-5xl font-extrabold text-black mb-6"
              data-testid="category-banner-title"
            >
              {banner.title}
            </h1>
            <p 
              className="text-gray-600 text-lg leading-relaxed mb-6"
              data-testid="category-banner-description"
            >
              {banner.description}
            </p>
            <button
              onClick={scrollToProducts}
              className="inline-flex items-center gap-2 bg-[#33cccc] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#29a3a3] transition-all"
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
              className="max-h-[220px] md:max-h-[280px] w-auto object-contain"
              data-testid="category-banner-image"
            />
          </div>
        </div>
      </motion.section>

      {buyerGuide && (
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-lg border border-gray-200 p-8 mb-8"
          data-testid={`buyer-guide-${categorySlug}`}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-xl bg-[#33cccc]/10 flex items-center justify-center">
              <CheckCircle className="w-7 h-7 text-[#33cccc]" />
            </div>
            <h2 className="text-lg font-bold text-black">
              {buyerGuide.title}
            </h2>
          </div>
          <div className="text-gray-600 leading-relaxed space-y-4">
            {buyerGuide.paragraphs.map((paragraph, index) => (
              <p key={index}>
                {paragraph}
              </p>
            ))}
          </div>
        </motion.section>
      )}

      {productRange && (
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-lg border border-gray-200 p-8 mb-8"
          data-testid={`product-range-${categorySlug}`}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-xl bg-[#33cccc]/10 flex items-center justify-center">
              <Layers className="w-7 h-7 text-[#33cccc]" />
            </div>
            <h2 className="text-lg font-bold text-black">
              {productRange.title}
            </h2>
          </div>
          <p className="text-gray-600 leading-relaxed mb-6">
            {productRange.intro}
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {productRange.items.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-[#33cccc] hover:shadow-lg transition-all">
                <div className="w-10 h-10 rounded-lg bg-[#33cccc]/10 flex items-center justify-center mb-4">
                  <span className="text-[#33cccc] font-bold">{index + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.section>
      )}
    </>
  );
}
