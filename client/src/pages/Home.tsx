import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Printer,
  ScanLine,
  Truck,
  ShieldCheck,
  Briefcase,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Zap,
  FileText,
  Tag,
  BadgeCheck,
  Mail,
  Layers,
  Smartphone,
  DollarSign,
  Home as HomeIcon,
  Building,
  Building2,
  Headphones,
  CheckCircle2,
  Package,
  Clock,
  Heart,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { useCreateSubscriber } from "@/hooks/use-subscribers";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { STORE_CATEGORIES, getCategoryUrl } from "@/lib/ecwid";
import Lottie from "lottie-react";
import briefcaseAnimation from "@assets/briefcase_1768334865450.json";
import giftAnimation from "@assets/gift_1768334880508.json";
import ideaAnimation from "@assets/idea_1768334892456.json";
import shoppingCartAnimation from "@assets/shopping-cart_1768334943652.json";
import heroBanner1 from "@assets/KSP_SMB_3_Desktop.jpg_1767984873397.avif";
import heroBanner2 from "@assets/KSP_1_Desktop.png_1768007400545.avif";
import homePrinterImg from "@assets/61g0ZhtFErL._AC_SL1500__1767904909151.jpg";
import officePrinterImg from "@assets/HP_OfficeJet_Pro_8135e_Wireless_All-in-One_Printer_with_3_Mont_1767904971940.png";
import inkjetPrinterImg from "@assets/HP_ENVY_Inspire_7955e_All-in-One_Printer_with_3_Months_of_Inst_1767905095614.jpg";
import laserPrinterImg from "@assets/HP_LaserJet_M110w_Wireless_Black_&_White_Printer_1767905187439.png";
import scannerImg from "@assets/9000_s1_1767905236089.jpg";
import printerIcon from "@assets/printer_1768342581018.png";
import telephoneAnimation from "@assets/telephone_1768342750520.json";
import buildingIcon from "@assets/building_1768342862353.png";
import inkjetIcon from "@assets/3d-printer_(1)_1768343431514.png";
import laserIcon from "@assets/printer_(1)_1768343182930.png";
import scannerIcon from "@assets/scanner_1768343254954.png";
import dollarGif from "@assets/dollar_1768343622664.gif";
import layersGif from "@assets/layers-selection-tool_1768343797554.gif";
import shieldGif from "@assets/shield_1768343929996.gif";
import homeIconImg from "@assets/home_1768345063969.png";
import smallBusinessIcon from "@assets/building_(1)_1768345193049.png";
import enterpriseIcon from "@assets/house_1768345234701.png";
import notesIcon from "@assets/notes_1768345353946.png";
import printerIcon2 from "@assets/printer_(2)_1768345577169.png";

const categoryIcons: Record<string, React.ReactNode> = {
  "Home-Printers": <img src={printerIcon} alt="Home Printers" className="w-10 h-10" />,
  "Office-Printers": <img src={buildingIcon} alt="Office Printers" className="w-10 h-10" />,
  "Inkjet-Printers": <img src={inkjetIcon} alt="Inkjet Printers" className="w-10 h-10" />,
  "Laser-Printers": <img src={laserIcon} alt="Laser Printers" className="w-10 h-10" />,
  "Document-Scanners": <img src={scannerIcon} alt="Document Scanners" className="w-10 h-10" />,
};

const categoryDescriptions: Record<string, string> = {
  "Home-Printers": "Compact wireless printers designed for everyday home use, schoolwork, and photos.",
  "Office-Printers": "High-volume printers designed for business productivity in home offices and corporate environments.",
  "Inkjet-Printers": "Color inkjet printers with ink tanks, mobile printing support, and high quality output.",
  "Laser-Printers": "Fast and efficient laser printers optimized for high print workloads and sharp documents.",
  "Document-Scanners": "Professional scanners offering fast scan speed for digitizing paperwork and archives.",
};

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const subscribe = useCreateSubscriber();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    subscribe.mutate(
      { email },
      {
        onSuccess: () => setEmail(""),
      },
    );
  };

  return (
    <form
      onSubmit={handleSubscribe}
      className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
    >
      <Input
        type="email"
        placeholder="Enter your email address"
        className="h-12 text-base"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        data-testid="input-home-newsletter-email"
      />
      <Button
        type="submit"
        size="lg"
        className="h-12 px-8"
        disabled={subscribe.isPending}
        data-testid="button-home-newsletter-subscribe"
      >
        {subscribe.isPending ? "Subscribing..." : "Subscribe"}
      </Button>
    </form>
  );
}

const featuredProducts = [
  {
    categorySlug: "Home-Printers",
    name: "HP DeskJet 2827e Wireless All-in-One Printer",
    description:
      "A compact and affordable home printer designed for printing, scanning, and copying everyday documents. Wireless connectivity makes it easy to print from multiple devices.",
    features: [
      "Print, Scan & Copy",
      "Wireless Connectivity",
      "3 Months Instant Ink",
    ],
    image: homePrinterImg,
    productId: "home-printer-1",
    productUrl:
      "/shop#!/HP-DeskJet-2827e-Wireless-All-in-One-Color-Inkjet-Printer-with-Print-Scan-&-Copy-for-Everyday-Home-Printing/p/806466784",
  },
  {
    categorySlug: "Office-Printers",
    name: "HP OfficeJet 8135e Wireless All-in-One Printer",
    description:
      "A productivity-focused office printer offering high-volume printing, scanning, copying, and faxing for business environments.",
    features: [
      "All-in-One Office Solution",
      "3 Months Ink Trial",
      "High-Volume Printing",
    ],
    image: officePrinterImg,
    productId: "office-printer-1",
    productUrl:
      "/shop#!/HP-OfficeJet-8135e-Wireless-All-in-One-Color-Inkjet-Printer-with-3-Months-of-Ink-Trial-for-Office-Use/p/806466580",
  },
  {
    categorySlug: "Inkjet-Printers",
    name: "HP Envy 7955e Wireless Photo All-in-One Printer",
    description:
      "A premium inkjet printer designed for photo-quality prints, duplex printing, and wireless convenience.",
    features: [
      "Photo Quality Prints",
      "Auto Duplex Printing",
      "Wireless All-in-One",
    ],
    image: inkjetPrinterImg,
    productId: "inkjet-printer-1",
    productUrl:
      "/shop#!/HP-Envy-7955e-Wireless-Photo-All-in-One-Color-Inkjet-Printer-with-Auto-Duplex-Printing/p/806452376",
  },
  {
    categorySlug: "Laser-Printers",
    name: "HP LaserJet M110w Compact Wireless Laser Printer",
    description:
      "A compact laser printer delivering fast black-and-white printing with crisp text output, ideal for home offices.",
    features: ["Compact Design", "Wireless Printing", "Fast Monochrome Output"],
    image: laserPrinterImg,
    productId: "laser-printer-1",
    productUrl:
      "/shop#!/HP-LaserJet-M110w-Compact-Wireless-Monochrome-Laser-Printer/p/806466884",
  },
  {
    categorySlug: "Document-Scanners",
    name: "HP ScanJet Enterprise Flow 9000 s1 Scanner",
    description:
      "A high-performance enterprise document scanner built for heavy workloads and fast, accurate digitization.",
    features: [
      "High-Volume Scanning",
      "Auto Document Feeder",
      "Enterprise Grade",
    ],
    image: scannerImg,
    productId: "scanner-1",
    productUrl:
      "/shop#!/HP-ScanJet-Enterprise-Flow-9000-s1-High-Volume-Document-Scanner/p/806466632",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const banners = [heroBanner1, heroBanner2];
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setAutoPlay(false);
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setTimeout(() => setAutoPlay(true), 5000);
  };

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % banners.length);
  };

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + banners.length) % banners.length);
  };

  useEffect(() => {
    if (autoPlay) {
      timerRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % banners.length);
      }, 5000);
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [banners.length, autoPlay]);

  return (
    <div className="flex flex-col">
      <section className="relative w-full overflow-hidden" data-testid="hero-section">
        <div className="relative w-full">
          {banners.map((banner, index) => {
            const isLeftText = index === 0;
            return (
              <div
                key={index}
                className={`${index === 0 ? 'relative' : 'absolute inset-0'} w-full transition-opacity duration-500 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              >
                <img
                  src={banner}
                  alt={`Print Mega Store - Professional Printing Solutions ${index + 1}`}
                  className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                  data-testid={`img-hero-banner-${index}`}
                />
                <div className={`absolute inset-0 ${isLeftText ? 'bg-gradient-to-r from-black/80 via-black/50 to-transparent' : 'bg-gradient-to-l from-black/80 via-black/50 to-transparent'}`} />
                <div className={`absolute inset-0 flex items-center ${isLeftText ? 'justify-start' : 'justify-end'}`}>
                  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className={`max-w-xl ${isLeftText ? 'mr-auto text-left' : 'ml-auto text-right'}`}>
                      <motion.h1
                        key={`title-${currentSlide}`}
                        initial={{ opacity: 0, x: isLeftText ? -30 : 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-white leading-tight"
                      >
                        Buy Inkjet & Laser Printers Online for Home and Office
                      </motion.h1>

                      <motion.p
                        key={`desc-${currentSlide}`}
                        initial={{ opacity: 0, x: isLeftText ? -30 : 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-base sm:text-lg text-white/90 mb-6 leading-relaxed"
                      >
                        Welcome to Print Mega Store. We are your trusted online place to buy inkjet printers, laser printers, and document scanners for all your needs. Whether you are setting up a home printer or upgrading to an office printer, we offer reliable printing solutions.
                      </motion.p>

                      <motion.div
                        key={`btn-${currentSlide}`}
                        initial={{ opacity: 0, x: isLeftText ? -30 : 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className={`flex ${isLeftText ? 'justify-start' : 'justify-end'}`}
                      >
                        <Button asChild size="lg" className="text-lg font-semibold">
                          <a href="/shop" data-testid="button-shop-now">
                            Shop Printers & Scanners Now
                            <ArrowRight className="ml-2 w-5 h-5" />
                          </a>
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          
          <button
            onClick={prevSlide}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-2 border-white/80 bg-black/20 hover:bg-black/40 flex items-center justify-center transition-all z-20"
            data-testid="hero-arrow-left"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-2 border-white/80 bg-black/20 hover:bg-black/40 flex items-center justify-center transition-all z-20"
            data-testid="hero-arrow-right"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                data-testid={`hero-dot-${index}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-3 bg-[#33cccc]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
            {[
              { icon: <Truck className="w-4 h-4" />, title: "Fast Shipping" },
              { icon: <Tag className="w-4 h-4" />, title: "Best Prices" },
              { icon: <ShieldCheck className="w-4 h-4" />, title: "Secure Checkout" },
              { icon: <BadgeCheck className="w-4 h-4" />, title: "Trusted Shopping" },
            ].map((benefit, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-white"
              >
                {benefit.icon}
                <span className="text-sm font-medium">{benefit.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-16 md:py-24 bg-gray-50"
        data-testid="about-section"
      >
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block text-[#33cccc] font-semibold text-sm uppercase tracking-wider mb-4">
              About Print Mega Store
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-black">
              Your Trusted Source for Home and Office Printers
            </h2>
            <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
              Print Mega Store is an online retailer. We focus on providing reliable home and office printer solutions. Our customers include individuals, home offices, small businesses, and corporate environments. Our mission is to make printer shopping easier. We offer trusted products, clear prices, and helpful information.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(55, 175, 225, 0.15)",
              }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg border border-gray-200 p-8 cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-14 h-14 flex items-center justify-center"
                >
                  <Lottie animationData={briefcaseAnimation} loop={true} className="w-14 h-14" />
                </motion.div>
                <h3 className="text-xl font-bold text-black">Who We Are</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Print Mega Store was built to remove confusion from buying printers online. We specialize exclusively in printers and scanners, allowing us to focus on quality, performance, and value. Our team picks products from trusted manufacturers. This helps ensure good results when you print documents, reports, photos, or business materials.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(55, 175, 225, 0.15)",
              }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg border border-gray-200 p-8 cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="w-14 h-14 flex items-center justify-center"
                >
                  <Lottie animationData={giftAnimation} loop={true} className="w-14 h-14" />
                </motion.div>
                <h3 className="text-xl font-bold text-black">What We Offer</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Our catalog features a wide range of printing equipment designed for different use cases and budgets. Customers can look at small wireless home printers, fast office printers, and advanced multifunction devices. We offer inkjet printers with ink tanks and laser printers optimized for speed, durability, and high print volumes.
              </p>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(55, 175, 225, 0.15)",
              }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="bg-white rounded-lg border border-gray-200 p-8 cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-14 h-14 flex items-center justify-center"
                >
                  <Lottie animationData={ideaAnimation} loop={true} className="w-14 h-14" />
                </motion.div>
                <h3 className="text-xl font-bold text-black">
                  Printing Solutions for Every User
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Print Mega Store provides printing solutions for every type of user. Home users benefit from compact inkjet printers that produce high quality photo and document prints with minimal setup. Small business users depend on multifunction printers with automatic duplex printing to reduce paper use.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(55, 175, 225, 0.15)",
              }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="bg-white rounded-lg border border-gray-200 p-8 cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="w-14 h-14 flex items-center justify-center"
                >
                  <Lottie animationData={shoppingCartAnimation} loop={true} className="w-14 h-14" />
                </motion.div>
                <h3 className="text-xl font-bold text-black">
                  Easy and Secure Online Shopping
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Buying printers online should be convenient and secure. Print Mega Store has clear prices. They ensure safe payment processing. Strong encryption keeps your personal and payment information secure. We provide quick shipping, fair delivery rates, and easy returns.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-100 rounded-md p-6 text-center"
          >
            <p className="text-sm text-gray-500 leading-relaxed">
              <strong>Disclaimer:</strong> Print Mega Store is an independent store. We do not connect to, support, or receive sponsorship from HP Inc., Hewlett-Packard Company, or any other manufacturer. All product names, logos, and trademarks belong to their owners. They are used here for identification only.
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
            <span className="inline-block text-[#33cccc] font-semibold text-sm uppercase tracking-wider mb-4">
              Shop by Category
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-black">
              Browse Home and Office Printing Solutions
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore printers and scanners by category to quickly find the right printing solution for your needs.
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
                <a
                  href={getCategoryUrl(category)}
                  data-testid={`card-category-${category.slug}`}
                >
                  <Card className="group h-full cursor-pointer border border-gray-200 hover:border-[#33cccc] hover:shadow-lg transition-all duration-200 bg-white">
                    <CardContent className="p-6 md:p-8 flex flex-col items-center text-center h-full">
                      <div className="w-20 h-20 rounded-md bg-[#33cccc]/10 flex items-center justify-center mb-5 group-hover:bg-[#33cccc] transition-colors duration-200">
                        <span className="text-[#33cccc] group-hover:text-white transition-colors duration-200">
                          {categoryIcons[category.slug]}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#33cccc] transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {categoryDescriptions[category.slug]}
                      </p>
                    </CardContent>
                  </Card>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50" data-testid="featured-section">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="inline-block text-[#33cccc] font-semibold text-sm uppercase tracking-wider mb-4">
              Featured Printers and Scanners
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-black">
              Popular Home and Office Printing Equipment
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover our most popular printers and scanners selected for reliability, features, and value.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {featuredProducts.slice(0, 3).map((product, i) => (
              <motion.div
                key={product.productId}
                variants={fadeInUp}
                transition={{ delay: i * 0.1 }}
              >
                <a href={product.productUrl} data-testid={`card-product-${product.productId}`}>
                  <Card className="group h-full cursor-pointer border border-gray-200 hover:border-[#33cccc] hover:shadow-lg transition-all duration-200 bg-white overflow-hidden">
                    <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <span className="text-xs font-medium text-[#33cccc] uppercase tracking-wider">
                        {product.categorySlug.replace("-", " ")}
                      </span>
                      <h3 className="text-lg font-bold text-gray-900 mt-2 mb-3 group-hover:text-[#33cccc] transition-colors line-clamp-2">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {product.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-8 max-w-4xl mx-auto"
          >
            {featuredProducts.slice(3).map((product, i) => (
              <motion.div
                key={product.productId}
                variants={fadeInUp}
                transition={{ delay: i * 0.1 }}
              >
                <a href={product.productUrl} data-testid={`card-product-${product.productId}`}>
                  <Card className="group h-full cursor-pointer border border-gray-200 hover:border-[#33cccc] hover:shadow-lg transition-all duration-200 bg-white overflow-hidden">
                    <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <span className="text-xs font-medium text-[#33cccc] uppercase tracking-wider">
                        {product.categorySlug.replace("-", " ")}
                      </span>
                      <h3 className="text-lg font-bold text-gray-900 mt-2 mb-3 group-hover:text-[#33cccc] transition-colors line-clamp-2">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {product.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button asChild size="lg" className="text-lg font-semibold">
              <a href="/shop" data-testid="button-view-all-products">
                View All Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white" data-testid="why-choose-section">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block text-[#33cccc] font-semibold text-sm uppercase tracking-wider mb-4">
              Why Choose Print Mega Store?
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-black">
              Your Trusted Printing Partner
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
            {[
              {
                icon: <img src={layersGif} alt="Wide Range" className="w-8 h-8" />,
                title: "Wide Range of Printers",
                desc: "Choose from a wide range of inkjet and laser printers designed for home, small business, and office use.",
                color: "from-[#33cccc] to-[#29a3a3]",
              },
              {
                icon: <img src={printerIcon2} alt="High Quality Printing" className="w-8 h-8" />,
                title: "High Quality Printing",
                desc: "Our printers are designed to produce high quality prints with consistent performance.",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: <Lottie animationData={telephoneAnimation} loop={true} className="w-8 h-8" />,
                title: "Modern Features",
                desc: "Enjoy automatic duplex printing, mobile printing from a smartphone or tablet, and efficient paper tray handling.",
                color: "from-purple-500 to-purple-600",
              },
              {
                icon: <img src={dollarGif} alt="Competitive Pricing" className="w-8 h-8" />,
                title: "Competitive Pricing",
                desc: "We offer excellent value compared to the suggested retail price.",
                color: "from-green-500 to-green-600",
              },
              {
                icon: <img src={shieldGif} alt="Secure Shopping" className="w-8 h-8" />,
                title: "Fast & Secure Shopping",
                desc: "Secure checkout, fast delivery, and trusted customer care.",
                color: "from-orange-500 to-orange-600",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                className="bg-white rounded-xl p-6 cursor-pointer group text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 rounded-xl bg-white flex items-center justify-center shadow-lg mx-auto mb-4"
                >
                  <span className="text-[#33cccc]">{item.icon}</span>
                </motion.div>
                <h3 className="text-lg font-bold text-black mb-2 group-hover:text-[#33cccc] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50" data-testid="buyers-guide-section">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block text-[#33cccc] font-semibold text-sm uppercase tracking-wider mb-4">
              Essential Buying Guide
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-black">
              How to Choose the Right Printer
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Selecting the right printer depends on your print volume, color needs, and workflow.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: <img src={homeIconImg} alt="Home Users" className="w-8 h-8" />,
                title: "Home Users",
                desc: "A compact inkjet home printer with wireless printing and ink tanks is ideal for everyday use.",
              },
              {
                icon: <img src={smallBusinessIcon} alt="Small Business" className="w-8 h-8" />,
                title: "Small Business & Home Offices",
                desc: "Multifunction printers with automatic duplexing and printing and scanning capabilities offer flexibility.",
              },
              {
                icon: <img src={enterpriseIcon} alt="Enterprise" className="w-8 h-8" />,
                title: "Busy Office & Enterprise",
                desc: "Laser printers that print many pages per minute, hold a lot of paper, and scan quickly are best for busy places.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                className="bg-white rounded-xl border border-gray-200 p-8 cursor-pointer group text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 rounded-xl bg-white flex items-center justify-center shadow-lg mx-auto mb-6"
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-[#33cccc] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
              className="bg-white rounded-xl border border-gray-100 p-8 cursor-pointer group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-lg">
                  <img src={notesIcon} alt="Notes" className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-black group-hover:text-[#33cccc] transition-colors">
                  Inkjet vs Laser Printers
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Choosing between an inkjet printer and a laser printer depends on your usage. Inkjet printers are ideal for color printing, photos, and flexible home office needs. Many inkjet models feature ink tanks and produce high quality output at a lower cost per page. Laser printers are designed for speed and efficiency, making them ideal for offices that print many text documents.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
              className="bg-gradient-to-br from-[#33cccc] to-[#29a3a3] rounded-xl p-8 cursor-pointer group text-white"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                  <ScanLine className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Find Your Perfect Printer
                </h3>
              </div>
              <p className="text-white/90 leading-relaxed mb-4">
                Not sure which printer is right for you? Browse our categories to explore options for home, office, or business use.
              </p>
              <Button
                asChild
                variant="secondary"
                className="bg-white text-[#33cccc] hover:bg-gray-100"
              >
                <a href="/shop">Browse All Products</a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#33cccc]">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
              Ready to Buy a Printer or Scanner?
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Browse our complete catalog of printers and scanners. Find home printers, office printers, laser printers, inkjet printers, and document scanners at competitive prices.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-black hover:bg-gray-100 text-lg font-bold"
            >
              <a href="/shop" data-testid="button-browse-catalog">
                Browse Full Catalog
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white" data-testid="commitment-section">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block text-[#33cccc] font-semibold text-sm uppercase tracking-wider mb-4">
              Our Commitment
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-black">
              What Sets Us Apart
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Experience the Print Mega Store difference with our dedication to quality, service, and customer satisfaction.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Package className="w-6 h-6" />,
                title: "Curated Selection",
                desc: "Every product in our catalog is carefully selected to ensure quality and reliability for your printing needs.",
                bgColor: "bg-[#33cccc]/10",
                iconColor: "text-[#33cccc]",
                highlighted: false,
              },
              {
                icon: <ShieldCheck className="w-6 h-6" />,
                title: "Secure Checkout",
                desc: "Shop with confidence using our safe and encrypted payment processing for all transactions.",
                bgColor: "bg-[#33cccc]/10",
                iconColor: "text-[#33cccc]",
                highlighted: false,
              },
              {
                icon: <Clock className="w-6 h-6" />,
                title: "Quick Processing",
                desc: "We process orders promptly to ensure your new printing equipment arrives when you need it most.",
                bgColor: "bg-green-100",
                iconColor: "text-green-600",
                highlighted: true,
              },
              {
                icon: <Heart className="w-6 h-6" />,
                title: "Customer First",
                desc: "Your satisfaction is our priority. We go above and beyond to ensure a seamless shopping experience.",
                bgColor: "bg-pink-100",
                iconColor: "text-pink-500",
                highlighted: false,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-2xl p-6 text-center ${item.highlighted ? 'bg-[#33cccc]/5 border-2 border-[#33cccc]/20' : 'bg-gray-50'}`}
              >
                <div className={`w-14 h-14 ${item.bgColor} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <span className={item.iconColor}>{item.icon}</span>
                </div>
                <h3 className={`text-lg font-bold mb-3 ${item.highlighted ? 'text-[#33cccc]' : 'text-gray-900'}`}>
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-100" data-testid="trust-section">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[#33cccc]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Headphones className="w-8 h-8 text-[#33cccc]" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide mb-4">
                Customer Satisfaction Is Our Priority
              </h3>
              <div className="text-gray-600 text-sm leading-relaxed space-y-4">
                <p>
                  We aim to deliver exceptional customer service along every step of the way. Whether you need to know which printer is right for your home office, how to set up your new scanner, or how to troubleshoot printing issues, our friendly and professional team is ready to assist you.
                </p>
                <p>
                  You may also browse through our product categories to find detailed information about specifications, features, and compatibility. However, if you cannot find what you are looking for and you have questions about your purchase, simply send us a message through our <a href="/contact" className="text-[#33cccc] hover:underline">contact page</a>.
                </p>
                <p>
                  If we are unavailable, leave a message and we will get back to you as soon as we can. You can also reach us via phone or email.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[#33cccc]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8 text-[#33cccc]" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide mb-4">
                Quality Products You Can Trust
              </h3>
              <div className="text-gray-600 text-sm leading-relaxed space-y-4">
                <p>
                  Print Mega Store has always offered quality printers and scanners from trusted manufacturers. From the beginning, we have provided reliable printing equipment to households and businesses at competitive prices. We take pride in offering products that deliver consistent results.
                </p>
                <p>
                  That is why we carefully select each product in our catalog. If you are not completely satisfied with your purchase, please read our return policy for more information on how we can help resolve any concerns.
                </p>
                <p>
                  For any questions about product specifications or compatibility, feel free to reach out to us for assistance.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[#33cccc]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Printer className="w-8 h-8 text-[#33cccc]" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide mb-4">
                Why Choose Print Mega Store?
              </h3>
              <div className="text-gray-600 text-sm leading-relaxed space-y-4">
                <p>
                  Print Mega Store is your reliable independent destination for high-quality printers and scanners at budget-friendly prices. We have a wide selection of products that work perfectly for home offices, small businesses, and enterprise environments.
                </p>
                <p>
                  We only offer products from reputable manufacturers to ensure the best printing results for every page. Our curated catalog includes home printers, office printers, inkjet printers, laser printers, and document scanners from leading brands.
                </p>
                <p>
                  Print Mega Store has established a track record of dependability and excellence. Our prices are competitive but we never cut corners when it comes to quality. We aim to make it easier for our customers to quickly find affordable solutions to their printing needs. Shop now and find the perfect printer today.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-[#33cccc]/5"
        data-testid="newsletter-section"
      >
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="w-16 h-16 bg-gradient-to-br from-[#33cccc] to-[#29a3a3] rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg"
            >
              <Mail className="w-8 h-8 text-white" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-gray-600 mb-8">
              Get exclusive deals, new product announcements, and expert tips for choosing and maintaining your printers.
            </p>
            <NewsletterForm />
            <p className="text-xs text-gray-500 mt-4">
              By subscribing, you agree to receive promotional emails. You can unsubscribe at any time. Please review our{" "}
              <a href="/privacy" className="text-[#33cccc] hover:underline">
                Privacy Policy
              </a>{" "}
              for more information.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
