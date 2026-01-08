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
  CheckCircle2,
  BadgeCheck,
  ThumbsUp,
  Award
} from "lucide-react";
import { motion } from "framer-motion";
import { STORE_CATEGORIES, getCategoryUrl } from "@/lib/ecwid";
import heroBannerImg from "@assets/Banner_meet_smallest_enterprise_-_Desktop@2x.png_1767904533249.avif";
import homePrinterImg from "@assets/61g0ZhtFErL._AC_SL1500__1767904909151.jpg";
import officePrinterImg from "@assets/HP_OfficeJet_Pro_8135e_Wireless_All-in-One_Printer_with_3_Mont_1767904971940.png";
import inkjetPrinterImg from "@assets/HP_ENVY_Inspire_7955e_All-in-One_Printer_with_3_Months_of_Inst_1767905095614.jpg";
import laserPrinterImg from "@assets/HP_LaserJet_M110w_Wireless_Black_&_White_Printer_1767905187439.png";
import scannerImg from "@assets/9000_s1_1767905236089.jpg";

const categoryImages: Record<string, string> = {
  "Home-Printers": homePrinterImg,
  "Office-Printers": officePrinterImg,
  "Inkjet-Printers": inkjetPrinterImg,
  "Laser-Printers": laserPrinterImg,
  "Document-Scanners": scannerImg,
};

const categoryIcons: Record<string, React.ReactNode> = {
  "Home-Printers": <Printer className="w-8 h-8" />,
  "Office-Printers": <Briefcase className="w-8 h-8" />,
  "Inkjet-Printers": <FileText className="w-8 h-8" />,
  "Laser-Printers": <Zap className="w-8 h-8" />,
  "Document-Scanners": <ScanLine className="w-8 h-8" />,
};

const categoryDescriptions: Record<string, string> = {
  "Home-Printers": "Compact and efficient for personal use",
  "Office-Printers": "High-capacity workhorses for teams",
  "Inkjet-Printers": "Vibrant color printing for photos",
  "Laser-Printers": "Fast, crisp document printing",
  "Document-Scanners": "Digitize with precision and speed",
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

const trustBadges = [
  { 
    icon: <Truck className="w-10 h-10" />, 
    title: "FREE SHIPPING", 
    desc: "On orders over $500",
    color: "#37AFE1"
  },
  { 
    icon: <ShieldCheck className="w-10 h-10" />, 
    title: "SECURE PAYMENT", 
    desc: "256-bit encryption",
    color: "#4CC9FE"
  },
  { 
    icon: <ThumbsUp className="w-10 h-10" />, 
    title: "CUSTOMER SATISFACTION", 
    desc: "Our top priority",
    color: "#37AFE1"
  },
  { 
    icon: <BadgeCheck className="w-10 h-10" />, 
    title: "100% GUARANTEE", 
    desc: "Money back promise",
    color: "#4CC9FE"
  },
  { 
    icon: <Headphones className="w-10 h-10" />, 
    title: "EXPERT SUPPORT", 
    desc: "24/7 available",
    color: "#37AFE1"
  },
];

export default function Home() {
  return (
    <div className="flex flex-col bg-white">
      {/* Hero Section */}
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
                  Premium Printers & Scanners for Every Business Need
                </motion.h1>

                <motion.p 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-base sm:text-lg text-white/90 mb-6 leading-relaxed"
                >
                  Discover enterprise-grade printing solutions designed for productivity. 
                  From compact home printers to high-volume office workhorses.
                </motion.p>

                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Button 
                    asChild 
                    size="lg" 
                    className="text-lg font-semibold"
                    style={{ backgroundColor: '#37AFE1' }}
                  >
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

      {/* Trust Badges Section - Like inkjets.com */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-900"
          >
            High Quality Printers & Scanners
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {trustBadges.map((badge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div 
                  className="mb-4"
                  style={{ color: badge.color }}
                >
                  {badge.icon}
                </div>
                <h3 className="font-bold text-xs uppercase tracking-wide text-gray-800 mb-1">
                  {badge.title}
                </h3>
                <p className="text-xs text-gray-500">{badge.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section - Clean white with cream accent */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Your Source for Premium Printing Solutions
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore our carefully curated selection of professional printers and scanners
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {STORE_CATEGORIES.map((category, i) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <a href={getCategoryUrl(category)} data-testid={`card-category-${category.slug}`}>
                  <Card className="group h-full cursor-pointer border border-gray-200 hover:border-[#37AFE1] hover:shadow-lg transition-all duration-300 overflow-hidden">
                    <CardContent className="p-0">
                      {/* Product Image */}
                      <div 
                        className="h-40 flex items-center justify-center p-4"
                        style={{ backgroundColor: '#FFFECB' }}
                      >
                        <img 
                          src={categoryImages[category.slug]} 
                          alt={category.name}
                          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      {/* Category Info */}
                      <div className="p-4 text-center bg-white">
                        <h3 className="text-base font-bold mb-1 text-gray-900 group-hover:text-[#37AFE1] transition-colors">
                          {category.name}
                        </h3>
                        <p className="text-sm text-gray-500">{categoryDescriptions[category.slug]}</p>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section - Clean white with alternating layout */}
      <section className="py-20" style={{ backgroundColor: '#FFFECB' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Top Picks from Each Category
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover our best-selling products handpicked for quality and performance
            </p>
          </motion.div>

          <div className="space-y-12">
            {featuredProducts.map((product, index) => {
              const category = STORE_CATEGORIES.find(c => c.slug === product.categorySlug);
              const isImageLeft = index % 2 === 0;
              
              return (
                <motion.div
                  key={product.productId}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-white rounded-lg shadow-sm overflow-hidden"
                >
                  <div className={`grid lg:grid-cols-2 gap-0 items-center`}>
                    {/* Image */}
                    <div className={`${!isImageLeft ? 'lg:order-2' : ''}`}>
                      <a 
                        href={product.productUrl} 
                        className="block group"
                        data-testid={`link-product-${product.productId}`}
                      >
                        <div 
                          className="h-80 flex items-center justify-center p-8"
                          style={{ backgroundColor: '#F5F4B3' }}
                        >
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                            data-testid={`img-product-${product.productId}`}
                          />
                        </div>
                      </a>
                    </div>

                    {/* Content */}
                    <div className={`p-8 lg:p-12 ${!isImageLeft ? 'lg:order-1' : ''}`}>
                      <span 
                        className="inline-block text-white text-xs font-bold px-3 py-1 rounded-full mb-4"
                        style={{ backgroundColor: '#37AFE1' }}
                      >
                        {category?.name || product.categorySlug.replace('-', ' ')}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{product.name}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {product.features.map((feature, i) => (
                          <span 
                            key={i} 
                            className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full"
                            style={{ backgroundColor: '#4CC9FE', color: 'white' }}
                          >
                            <CheckCircle2 className="w-4 h-4" />
                            {feature}
                          </span>
                        ))}
                      </div>

                      <Button 
                        asChild
                        style={{ backgroundColor: '#37AFE1' }}
                      >
                        <a href={product.productUrl} data-testid={`button-view-${product.productId}`}>
                          View Product
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section - Light blue background */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              10,000+ Satisfied Customers
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Join thousands of businesses who trust Print Mega Store for their printing needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { 
                icon: <ThumbsUp className="w-12 h-12" />,
                title: "Customer First", 
                desc: "We aim to deliver excellent customer service along every step of the way. Our friendly team is ready to assist you with any questions.",
                color: "#37AFE1"
              },
              { 
                icon: <Award className="w-12 h-12" />,
                title: "100% Satisfaction", 
                desc: "We offer only premium quality printers and scanners. That's why we provide a 100% satisfaction guarantee on all products.",
                color: "#4CC9FE"
              },
              { 
                icon: <BadgeCheck className="w-12 h-12" />,
                title: "Why Choose Us?", 
                desc: "Print Mega Store is your reliable provider of high-quality printing solutions at competitive prices from leading brands.",
                color: "#37AFE1"
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6"
              >
                <div 
                  className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
                  style={{ backgroundColor: '#F5F4B3' }}
                >
                  <div style={{ color: item.color }}>
                    {item.icon}
                  </div>
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-3 uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Primary Blue */}
      <section 
        className="py-16"
        style={{ backgroundColor: '#37AFE1' }}
      >
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Get 10% Off Your First Order
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Sign up today and get exclusive deals, product updates, and special offers delivered straight to your inbox.
            </p>
            <Button 
              asChild 
              size="lg" 
              className="text-lg font-semibold"
              style={{ backgroundColor: '#FFFECB', color: '#1a1a1a' }}
            >
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
