import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Printer, 
  ScanLine, 
  Truck, 
  ShieldCheck, 
  Headphones, 
  Briefcase,
  ArrowRight,
  Zap,
  FileText,
  Tag,
  ThumbsUp,
  Smile,
  BadgeCheck
} from "lucide-react";
import { motion } from "framer-motion";
import { STORE_CATEGORIES, getCategoryUrl } from "@/lib/ecwid";
import heroBannerImg from "@assets/Banner_meet_smallest_enterprise_-_Desktop@2x.png_1767904533249.avif";
import homePrinterImg from "@assets/61g0ZhtFErL._AC_SL1500__1767904909151.jpg";
import officePrinterImg from "@assets/HP_OfficeJet_Pro_8135e_Wireless_All-in-One_Printer_with_3_Mont_1767904971940.png";
import inkjetPrinterImg from "@assets/HP_ENVY_Inspire_7955e_All-in-One_Printer_with_3_Months_of_Inst_1767905095614.jpg";
import laserPrinterImg from "@assets/HP_LaserJet_M110w_Wireless_Black_&_White_Printer_1767905187439.png";
import scannerImg from "@assets/9000_s1_1767905236089.jpg";

const categoryIcons: Record<string, React.ReactNode> = {
  "Home-Printers": <Printer className="w-10 h-10" />,
  "Office-Printers": <Briefcase className="w-10 h-10" />,
  "Inkjet-Printers": <FileText className="w-10 h-10" />,
  "Laser-Printers": <Zap className="w-10 h-10" />,
  "Document-Scanners": <ScanLine className="w-10 h-10" />,
};

const categoryDescriptions: Record<string, string> = {
  "Home-Printers": "Compact wireless printers for everyday home printing needs",
  "Office-Printers": "High-volume all-in-one printers for business productivity",
  "Inkjet-Printers": "Color inkjet printers for photos and creative projects",
  "Laser-Printers": "Fast monochrome laser printers for documents and reports",
  "Document-Scanners": "Professional scanners to digitize documents and archives",
};

const featuredProducts = [
  {
    categorySlug: "Home-Printers",
    name: "HP DeskJet 2827e Wireless All-in-One Printer",
    description: "The perfect all-in-one solution for everyday home printing. Print, scan, and copy with wireless connectivity and 3 months of Instant Ink included. Compact design fits any space while delivering reliable quality for documents and photos.",
    features: ["Print, Scan & Copy", "Wireless Connectivity", "3 Months Instant Ink"],
    image: homePrinterImg,
    productId: "home-printer-1",
    productUrl: "/shop#!/HP-DeskJet-2827e-Wireless-All-in-One-Color-Inkjet-Printer-with-Print-Scan-&-Copy-for-Everyday-Home-Printing/p/806466784"
  },
  {
    categorySlug: "Office-Printers",
    name: "HP OfficeJet 8135e Wireless All-in-One Printer",
    description: "Built for professional office environments with high-volume printing capabilities. Features wireless all-in-one functionality with print, scan, copy, and fax. Includes 3 months of ink trial for maximum productivity.",
    features: ["All-in-One Office Solution", "3 Months Ink Trial", "High-Volume Printing"],
    image: officePrinterImg,
    productId: "office-printer-1",
    productUrl: "/shop#!/HP-OfficeJet-8135e-Wireless-All-in-One-Color-Inkjet-Printer-with-3-Months-of-Ink-Trial-for-Office-Use/p/806466580"
  },
  {
    categorySlug: "Inkjet-Printers",
    name: "HP Envy 7955e Wireless Photo All-in-One Printer",
    description: "Create stunning photo prints with vibrant colors and exceptional detail. Features auto duplex printing for efficient double-sided documents. Wireless connectivity lets you print from anywhere in your home.",
    features: ["Photo Quality Prints", "Auto Duplex Printing", "Wireless All-in-One"],
    image: inkjetPrinterImg,
    productId: "inkjet-printer-1",
    productUrl: "/shop#!/HP-Envy-7955e-Wireless-Photo-All-in-One-Color-Inkjet-Printer-with-Auto-Duplex-Printing/p/806452376"
  },
  {
    categorySlug: "Laser-Printers",
    name: "HP LaserJet M110w Compact Wireless Laser Printer",
    description: "Compact monochrome laser printer perfect for small spaces and home offices. Delivers fast, crisp black and white prints with wireless connectivity. Energy efficient design with low cost per page.",
    features: ["Compact Design", "Wireless Printing", "Fast Monochrome Output"],
    image: laserPrinterImg,
    productId: "laser-printer-1",
    productUrl: "/shop#!/HP-LaserJet-M110w-Compact-Wireless-Monochrome-Laser-Printer/p/806466884"
  },
  {
    categorySlug: "Document-Scanners",
    name: "HP ScanJet Enterprise Flow 9000 s1 Scanner",
    description: "High-volume enterprise document scanner designed for demanding workloads. Features automatic document feeder for batch scanning and advanced image processing. Perfect for digitizing large document archives quickly.",
    features: ["High-Volume Scanning", "Auto Document Feeder", "Enterprise Grade"],
    image: scannerImg,
    productId: "scanner-1",
    productUrl: "/shop#!/HP-ScanJet-Enterprise-Flow-9000-s1-High-Volume-Document-Scanner/p/806466632"
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative w-full pt-[88px]" data-testid="hero-section">
        <div className="relative w-full">
          <img 
            src={heroBannerImg} 
            alt="Print Mega Store - Professional Printing Solutions for Enterprise and Home"
            className="w-full h-auto object-cover"
            data-testid="img-hero-banner"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-xl">
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-white leading-tight"
                >
                  Buy Printers & Scanners Online for Home and Office
                </motion.h1>

                <motion.p 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-base sm:text-lg text-white/90 mb-6 leading-relaxed"
                >
                  Shop inkjet printers, laser printers, and document scanners for home offices and businesses. 
                  Find wireless all-in-one printers, compact home printers, and high-volume office printing solutions 
                  at competitive prices with secure checkout and fast shipping.
                </motion.p>

                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Button asChild size="lg" className="text-lg font-semibold">
                    <a href="/shop" data-testid="button-shop-now">
                      Shop Now
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: <Truck className="w-6 h-6" />, title: "Fast Shipping", desc: "Free over $500" },
              { icon: <ShieldCheck className="w-6 h-6" />, title: "Secure Checkout", desc: "256-bit encryption" },
              { icon: <Briefcase className="w-6 h-6" />, title: "Business Grade", desc: "Professional quality" },
              { icon: <Headphones className="w-6 h-6" />, title: "Expert Support", desc: "24/7 available" },
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-gray-200 rounded-md p-5 md:p-6 flex items-center gap-4"
              >
                <div className="p-3 rounded-md bg-[#37AFE1]/10 text-[#37AFE1] shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="font-bold text-sm text-black">{benefit.title}</h3>
                  <p className="text-xs text-gray-600">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50" data-testid="about-section">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block text-[#37AFE1] font-semibold text-sm uppercase tracking-wider mb-4">About Print Mega Store</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-black">Your Independent Printing Solutions Destination</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Welcome to Print Mega Store, your independent online destination to buy printers, scanners, and professional printing equipment at competitive prices.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-md border border-gray-200 p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-md bg-[#37AFE1]/10 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-[#37AFE1]" />
                </div>
                <h3 className="text-xl font-bold text-black">Independent Retailer</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                As an independent ecommerce retailer, we are not affiliated with, sponsored by, or endorsed by any printer manufacturer. Our mission is simple: help homes, offices, and businesses find the best printers and scanners to meet their unique document and imaging needs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-md border border-gray-200 p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-md bg-[#37AFE1]/10 flex items-center justify-center">
                  <Printer className="w-6 h-6 text-[#37AFE1]" />
                </div>
                <h3 className="text-xl font-bold text-black">Five Product Categories</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Our online printer store features a carefully curated selection across five essential categories: Home Printers for everyday tasks, Office Printers for team productivity, Inkjet Printers for vibrant photos, Laser Printers for crisp documents, and Document Scanners for digitization.
              </p>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-md border border-gray-200 p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-md bg-[#37AFE1]/10 flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-[#37AFE1]" />
                </div>
                <h3 className="text-xl font-bold text-black">Solutions for Everyone</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Whether you need a compact wireless printer for your home office, a multifunction all-in-one printer for a small business, a high-speed laser printer for your corporate department, or an enterprise document scanner for bulk digitization, we have printing solutions for every requirement and budget.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-md border border-gray-200 p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-md bg-[#37AFE1]/10 flex items-center justify-center">
                  <Headphones className="w-6 h-6 text-[#37AFE1]" />
                </div>
                <h3 className="text-xl font-bold text-black">Easy Online Shopping</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Shopping for printers and scanners online should be straightforward. That is why Print Mega Store provides detailed product specifications, transparent pricing, secure checkout, competitive shipping rates, and dedicated customer support for a smooth buying experience.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-100 rounded-md p-6 text-center"
          >
            <p className="text-sm text-gray-500">
              <strong>Trademark Disclaimer:</strong> Manufacturer brand names, logos, and trademarks referenced on this website are the registered property of their respective owners. Print Mega Store is an independent retailer and is not affiliated with, authorized by, or sponsored by any manufacturer. Any brand name designations or references are made solely for purposes of demonstrating product compatibility and identification.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="inline-block text-[#37AFE1] font-semibold text-sm uppercase tracking-wider mb-4">Shop By Category</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-black">Browse Printers & Scanners</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Find the right printing solution for your needs across five product categories including home printers, office printers, and document scanners
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8"
          >
            {STORE_CATEGORIES.map((category, i) => (
              <motion.div
                key={category.id}
                variants={fadeInUp}
                transition={{ delay: i * 0.1 }}
              >
                <a href={getCategoryUrl(category)} data-testid={`card-category-${category.slug}`}>
                  <Card className="group h-full cursor-pointer border border-gray-200 hover:border-[#37AFE1] hover:shadow-lg transition-all duration-200 bg-white">
                    <CardContent className="p-6 md:p-8 flex flex-col items-center text-center h-full">
                      <div className="w-20 h-20 rounded-md bg-[#37AFE1]/10 flex items-center justify-center mb-5 group-hover:bg-[#37AFE1] transition-colors duration-200">
                        <div className="text-[#37AFE1] group-hover:text-white transition-colors duration-200">
                          {categoryIcons[category.slug] || <Printer className="w-10 h-10" />}
                        </div>
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-black group-hover:text-[#37AFE1] transition-colors">{category.name}</h3>
                      <p className="text-sm text-gray-600">{categoryDescriptions[category.slug]}</p>
                      <div className="mt-4 flex items-center text-[#37AFE1] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        Shop Now <ArrowRight className="w-4 h-4 ml-1" />
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="inline-block text-[#37AFE1] font-semibold text-sm uppercase tracking-wider mb-4">Featured Printers & Scanners</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-black">Popular Printing Equipment</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore popular printers and scanners selected for reliability, features, and value across all categories
            </p>
          </motion.div>

          <div className="space-y-0">
            {featuredProducts.map((product, index) => {
              const category = STORE_CATEGORIES.find(c => c.slug === product.categorySlug);
              const isImageLeft = index % 2 === 0;
              const isLast = index === featuredProducts.length - 1;
              
              return (
                <motion.div
                  key={product.productId}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-12 md:py-16 ${!isLast ? 'border-b border-gray-100' : ''}`}
                >
                  <div className={`${!isImageLeft ? 'lg:order-2' : ''}`}>
                    <a 
                      href={product.productUrl} 
                      className="block group"
                      data-testid={`link-product-${product.productId}`}
                    >
                      <div className="aspect-square bg-white rounded-md border border-gray-200 p-6 flex items-center justify-center">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                          data-testid={`img-product-${product.productId}`}
                        />
                      </div>
                    </a>
                  </div>

                  <div className={`${!isImageLeft ? 'lg:order-1' : ''}`}>
                    <div className="space-y-4">
                      <span className="inline-block text-xs font-semibold text-[#37AFE1] uppercase tracking-wider">
                        {category?.name || product.categorySlug.replace('-', ' ')}
                      </span>
                      
                      <h3 className="text-2xl lg:text-3xl font-extrabold text-black">{product.name}</h3>
                      
                      <p className="text-gray-600 text-base lg:text-lg leading-relaxed">{product.description}</p>

                      <div className="pt-4">
                        <Button asChild className="bg-[#37AFE1] hover:bg-[#2d9bc7] text-white">
                          <a href={product.productUrl} data-testid={`button-view-${product.productId}`}>
                            View Product
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-black">Why Shop at Print Mega Store?</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-6">
            {[
              { icon: <Tag className="w-10 h-10" />, label: "Competitive Prices for Best Value", color: "text-pink-500" },
              { icon: <ShieldCheck className="w-10 h-10" />, label: "Secure Payment Options", color: "text-pink-500" },
              { icon: <ThumbsUp className="w-10 h-10" />, label: "Customer Satisfaction is Our Priority", color: "text-[#37AFE1]" },
              { icon: <Smile className="w-10 h-10" />, label: "Quality Products You Can Trust", color: "text-[#37AFE1]" },
              { icon: <BadgeCheck className="w-10 h-10" />, label: "Independent Trusted Retailer", color: "text-green-500" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className={`mb-4 ${item.color}`}>
                  {item.icon}
                </div>
                <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide leading-relaxed">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#37AFE1]">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">Ready to Buy a Printer or Scanner?</h2>
            <p className="text-xl text-white/90 mb-10">
              Browse our complete catalog of printers and scanners. Find home printers, office printers, laser printers, inkjet printers, and document scanners at competitive prices.
            </p>
            <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100 text-lg font-bold">
              <a href="/shop" data-testid="button-browse-catalog">
                Browse Full Catalog
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
