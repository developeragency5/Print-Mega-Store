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
  ChevronLeft,
  ChevronRight,
  Zap,
  FileText,
  Tag,
  ThumbsUp,
  Smile,
  BadgeCheck,
  Mail,
  Award,
  Users,
  Clock,
  Heart,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { useCreateSubscriber } from "@/hooks/use-subscribers";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { STORE_CATEGORIES, getCategoryUrl } from "@/lib/ecwid";
import heroBanner1 from "@assets/KSP_SMB_3_Desktop.jpg_1767984873397.avif";
import heroBanner2 from "@assets/KSP_1_Desktop.png_1768007400545.avif";
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
  "Office-Printers":
    "High-volume all-in-one printers for business productivity",
  "Inkjet-Printers": "Color inkjet printers for photos and creative projects",
  "Laser-Printers": "Fast monochrome laser printers for documents and reports",
  "Document-Scanners":
    "Professional scanners to digitize documents and archives",
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
      "The perfect all-in-one solution for everyday home printing. Print, scan, and copy with wireless connectivity and 3 months of Instant Ink included. Compact design fits any space while delivering reliable quality for documents and photos.",
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
      "Built for professional office environments with high-volume printing capabilities. Features wireless all-in-one functionality with print, scan, copy, and fax. Includes 3 months of ink trial for maximum productivity.",
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
      "Create stunning photo prints with vibrant colors and exceptional detail. Features auto duplex printing for efficient double-sided documents. Wireless connectivity lets you print from anywhere in your home.",
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
      "Compact monochrome laser printer perfect for small spaces and home offices. Delivers fast, crisp black and white prints with wireless connectivity. Energy efficient design with low cost per page.",
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
      "High-volume enterprise document scanner designed for demanding workloads. Features automatic document feeder for batch scanning and advanced image processing. Perfect for digitizing large document archives quickly.",
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
                        Buy Printers & Scanners Online for Home and Office
                      </motion.h1>

                      <motion.p
                        key={`desc-${currentSlide}`}
                        initial={{ opacity: 0, x: isLeftText ? -30 : 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-base sm:text-lg text-white/90 mb-6 leading-relaxed"
                      >
                        Shop inkjet printers, laser printers, and document scanners
                        for home offices and businesses. Find wireless all-in-one
                        printers, compact home printers, and high-volume office
                        printing solutions at competitive prices with secure checkout
                        and fast shipping.
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
                            Shop Now
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

      <section className="py-4 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-4 md:gap-2">
            {[
              { icon: <Truck className="w-5 h-5" />, title: "Fast Shipping" },
              { icon: <Tag className="w-5 h-5" />, title: "Best Prices" },
              { icon: <ShieldCheck className="w-5 h-5" />, title: "Secure Checkout" },
              { icon: <BadgeCheck className="w-5 h-5" />, title: "Trusted Shopping" },
            ].map((benefit, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-gray-700"
              >
                <span className="text-[#37AFE1]">{benefit.icon}</span>
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
            <span className="inline-block text-[#37AFE1] font-semibold text-sm uppercase tracking-wider mb-4">
              About Print Mega Store
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-black">
              Your Trusted Source for Printers & Scanners
            </h2>
            <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
              Welcome to Print Mega Store, your premier online destination to
              buy printers, scanners, and professional printing equipment at
              competitive prices. We are committed to providing top-quality
              printing solutions for homes, offices, and businesses of all
              sizes. Our carefully selected product range includes the latest
              technology from trusted manufacturers, ensuring you get reliable
              performance and exceptional value with every purchase.
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
                  className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#37AFE1] to-[#2d8bb8] flex items-center justify-center shadow-lg"
                >
                  <ShieldCheck className="w-7 h-7 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-black">Who We Are</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Print Mega Store is your go-to online destination for quality
                printing solutions. We specialize in helping homes, offices, and
                businesses find the perfect printers and scanners to meet their
                unique document and imaging needs. Our team is passionate about
                connecting customers with reliable equipment at competitive
                prices.
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
                  className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#37AFE1] to-[#2d8bb8] flex items-center justify-center shadow-lg"
                >
                  <Printer className="w-7 h-7 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-black">What We Offer</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Browse our carefully curated catalog featuring printers and
                scanners for every need. From compact home printers and
                high-volume office machines to vibrant inkjet photo printers,
                fast laser printers, and professional document scanners, we have
                everything you need to print, copy, scan, and digitize with
                confidence.
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
                  className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#37AFE1] to-[#2d8bb8] flex items-center justify-center shadow-lg"
                >
                  <Briefcase className="w-7 h-7 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-black">
                  Solutions for Everyone
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Whether you need a compact wireless printer for your home
                office, a multifunction all-in-one printer for a small business,
                a high-speed laser printer for your corporate department, or an
                enterprise document scanner for bulk digitization, we have
                printing solutions for every requirement and budget.
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
                  className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#37AFE1] to-[#2d8bb8] flex items-center justify-center shadow-lg"
                >
                  <Headphones className="w-7 h-7 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-black">
                  Easy Online Shopping
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Shopping for printers and scanners online should be
                straightforward. That is why Print Mega Store provides detailed
                product specifications, transparent pricing, secure checkout,
                competitive shipping rates, and hassle-free returns for a smooth
                buying experience.
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
              <strong>Disclaimer:</strong> Print Mega Store is an independent
              retailer and is not affiliated with, endorsed by, or sponsored by
              HP Inc., Hewlett-Packard Company, or any other manufacturer. All
              product images, logos, and trademarks are the property of their
              respective owners and are used for informational purposes only.
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
            <span className="inline-block text-[#37AFE1] font-semibold text-sm uppercase tracking-wider mb-4">
              Shop By Category
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-black">
              Browse Printers & Scanners
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Find the right printing solution for your needs across five
              product categories including home printers, office printers, and
              document scanners
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
                  <Card className="group h-full cursor-pointer border border-gray-200 hover:border-[#37AFE1] hover:shadow-lg transition-all duration-200 bg-white">
                    <CardContent className="p-6 md:p-8 flex flex-col items-center text-center h-full">
                      <div className="w-20 h-20 rounded-md bg-[#37AFE1]/10 flex items-center justify-center mb-5 group-hover:bg-[#37AFE1] transition-colors duration-200">
                        <div className="text-[#37AFE1] group-hover:text-white transition-colors duration-200">
                          {categoryIcons[category.slug] || (
                            <Printer className="w-10 h-10" />
                          )}
                        </div>
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-black group-hover:text-[#37AFE1] transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {categoryDescriptions[category.slug]}
                      </p>
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
            <span className="inline-block text-[#37AFE1] font-semibold text-sm uppercase tracking-wider mb-4">
              Featured Printers & Scanners
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-black">
              Popular Printing Equipment
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore popular printers and scanners selected for reliability,
              features, and value across all categories
            </p>
          </motion.div>

          <div className="space-y-0">
            {featuredProducts.map((product, index) => {
              const category = STORE_CATEGORIES.find(
                (c) => c.slug === product.categorySlug,
              );
              const isImageLeft = index % 2 === 0;
              const isLast = index === featuredProducts.length - 1;

              return (
                <motion.div
                  key={product.productId}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-12 md:py-16 ${!isLast ? "border-b border-gray-100" : ""}`}
                >
                  <div
                    className={`${!isImageLeft ? "lg:order-2" : ""} flex justify-center`}
                  >
                    <a
                      href={product.productUrl}
                      className="block group"
                      data-testid={`link-product-${product.productId}`}
                    >
                      <div className="w-80 h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] bg-white rounded-md border border-gray-200 p-6 flex items-center justify-center">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                          data-testid={`img-product-${product.productId}`}
                        />
                      </div>
                    </a>
                  </div>

                  <div className={`${!isImageLeft ? "lg:order-1" : ""}`}>
                    <div className="space-y-4">
                      <span className="inline-block text-xs font-semibold text-[#37AFE1] uppercase tracking-wider">
                        {category?.name ||
                          product.categorySlug.replace("-", " ")}
                      </span>

                      <h3 className="text-2xl lg:text-3xl font-extrabold text-black">
                        {product.name}
                      </h3>

                      <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                        {product.description}
                      </p>

                      <div className="pt-4">
                        <Button
                          asChild
                          className="bg-[#37AFE1] hover:bg-[#2d9bc7] text-white"
                        >
                          <a
                            href={product.productUrl}
                            data-testid={`button-view-${product.productId}`}
                          >
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

      <section
        className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white"
        data-testid="why-choose-section"
      >
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block text-[#37AFE1] font-semibold text-sm uppercase tracking-wider mb-4">
              The Print Mega Store Advantage
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4">
              Why Choose Print Mega Store?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover what makes us the preferred choice for buying printers
              and scanners online.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: <Printer className="w-8 h-8" />,
                title: "Wide Selection of Printers",
                desc: "From home inkjet printers to enterprise laser printers, we offer a comprehensive range of printing solutions. Find wireless printers, all-in-one multifunction printers, and specialized photo printers all in one place.",
                color: "from-[#37AFE1] to-[#2d8bb8]",
              },
              {
                icon: <ScanLine className="w-8 h-8" />,
                title: "Professional Document Scanners",
                desc: "Digitize your documents with our selection of high-quality scanners. Whether you need a portable scanner for receipts or a high-volume sheet-fed scanner for office archives, we have you covered.",
                color: "from-purple-500 to-purple-600",
              },
              {
                icon: <Tag className="w-8 h-8" />,
                title: "Competitive Online Prices",
                desc: "Shop smart with our budget-friendly pricing on top printer brands. We continuously monitor the market to ensure you get the best value when you buy printers online from Print Mega Store.",
                color: "from-green-500 to-green-600",
              },
              {
                icon: <Truck className="w-8 h-8" />,
                title: "Fast & Reliable Shipping",
                desc: "Get your new printer or scanner delivered quickly and safely. Our efficient shipping partners ensure your printing equipment arrives in perfect condition, ready to set up and use.",
                color: "from-orange-500 to-orange-600",
              },
              {
                icon: <ShieldCheck className="w-8 h-8" />,
                title: "Secure Shopping Experience",
                desc: "Shop with confidence knowing your personal and payment information is protected with industry-standard SSL encryption. Our secure checkout process keeps your data safe every step of the way.",
                color: "from-pink-500 to-pink-600",
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Satisfaction Guaranteed",
                desc: "We stand behind every product we sell with hassle-free returns and exchanges. Shop with confidence knowing your satisfaction is our top priority.",
                color: "from-indigo-500 to-indigo-600",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                className="bg-white rounded-xl border border-gray-100 p-8 cursor-pointer group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg mb-6`}
                >
                  <span className="text-white">{item.icon}</span>
                </motion.div>
                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-[#37AFE1] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-black">
              Why Shop at Print Mega Store?
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-6">
            {[
              {
                icon: <Tag className="w-10 h-10" />,
                label: "Competitive Prices for Best Value",
                color: "from-pink-500 to-pink-600",
              },
              {
                icon: <ShieldCheck className="w-10 h-10" />,
                label: "Secure Payment Options",
                color: "from-purple-500 to-purple-600",
              },
              {
                icon: <ThumbsUp className="w-10 h-10" />,
                label: "Customer Satisfaction is Our Priority",
                color: "from-[#37AFE1] to-[#2d8bb8]",
              },
              {
                icon: <Smile className="w-10 h-10" />,
                label: "Quality Products You Can Trust",
                color: "from-green-500 to-green-600",
              },
              {
                icon: <BadgeCheck className="w-10 h-10" />,
                label: "Trusted Online Retailer",
                color: "from-orange-500 to-orange-600",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="flex flex-col items-center text-center cursor-pointer group"
              >
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg mb-4`}
                >
                  <span className="text-white">{item.icon}</span>
                </motion.div>
                <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide leading-relaxed group-hover:text-[#37AFE1] transition-colors">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-16 md:py-24 bg-gradient-to-br from-[#37AFE1]/5 via-white to-purple-50"
        data-testid="seo-content-section"
      >
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block text-[#37AFE1] font-semibold text-sm uppercase tracking-wider mb-4">
              Shop With Confidence
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4">
              Buy Printers Online with Confidence
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Looking to buy a printer online? Print Mega Store makes it easy to
              find the perfect printing solution for your home or business.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-10">
            {[
              {
                icon: <Printer className="w-7 h-7" />,
                title: "Home & Office Printers",
                desc: "Our home printers are designed for families and remote workers who need reliable, compact devices. For larger teams, our office printers deliver high-volume printing with multifunction capabilities including printing, scanning, copying, and faxing.",
                color: "from-[#37AFE1] to-[#2d8bb8]",
              },
              {
                icon: <FileText className="w-7 h-7" />,
                title: "Inkjet & Photo Printers",
                desc: "Photographers and creative professionals love our inkjet printers for their vibrant color reproduction and stunning photo quality on various paper types. Perfect for printing memorable photos at home with vivid colors and fine details.",
                color: "from-purple-500 to-purple-600",
              },
              {
                icon: <Zap className="w-7 h-7" />,
                title: "Laser Printers",
                desc: "Businesses that prioritize speed and efficiency prefer our laser printers for their crisp text quality and lower cost-per-page on high-volume document printing. Get sharp, smudge-free results every time.",
                color: "from-orange-500 to-orange-600",
              },
              {
                icon: <ScanLine className="w-7 h-7" />,
                title: "Document Scanners",
                desc: "Going paperless? Our document scanners help you digitize receipts, contracts, photos, and archives quickly. From portable scanners to high-capacity sheet-fed scanners for enterprise document management.",
                color: "from-green-500 to-green-600",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{
                  y: -6,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                }}
                className="bg-white rounded-xl border border-gray-100 p-8 cursor-pointer group flex gap-6"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg shrink-0`}
                >
                  <span className="text-white">{item.icon}</span>
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2 group-hover:text-[#37AFE1] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-lg font-medium text-black bg-[#37AFE1]/10 rounded-xl py-4 px-6 inline-block">
              Shop today and discover why thousands of customers trust Print
              Mega Store for their printing and scanning needs.
            </p>
          </motion.div>
        </div>
      </section>

      <section
        className="py-16 md:py-24 bg-gray-50"
        data-testid="printing-guide-section"
      >
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block text-[#37AFE1] font-semibold text-sm uppercase tracking-wider mb-4">
              Printer Buying Guide
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4">
              How to Choose the Right Printer for Your Needs
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Choosing the best printer depends on your specific requirements.
              Consider how often you print, document types, and color needs.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6 md:gap-8 mb-10">
            {[
              {
                step: "01",
                title: "Photo & Creative Work",
                desc: "For photo printing and creative projects, an inkjet printer with high resolution delivers stunning results on glossy paper. Perfect for photographers, artists, and families who want vibrant colors and fine details.",
                color: "from-pink-500 to-pink-600",
              },
              {
                step: "02",
                title: "Documents & Reports",
                desc: "If your primary need is printing text documents, reports, or business correspondence, a monochrome laser printer offers the best value with sharp, smudge-free text and lower cost per page.",
                color: "from-[#37AFE1] to-[#2d8bb8]",
              },
              {
                step: "03",
                title: "All-in-One Solutions",
                desc: "Small businesses and home offices benefit from all-in-one printers that combine printing, scanning, copying, and faxing. Look for wireless connectivity and mobile printing support.",
                color: "from-purple-500 to-purple-600",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -8, boxShadow: "0 25px 50px rgba(0,0,0,0.1)" }}
                className="bg-white rounded-xl border border-gray-100 p-8 cursor-pointer group relative overflow-visible"
              >
                <div
                  className={`absolute -top-4 -left-2 w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}
                >
                  <span className="text-white font-bold text-lg">
                    {item.step}
                  </span>
                </div>
                <div className="pt-6">
                  <h3 className="text-xl font-bold text-black mb-3 group-hover:text-[#37AFE1] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
              className="bg-white rounded-xl border border-gray-100 p-8 cursor-pointer group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center shadow-lg">
                  <ScanLine className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black group-hover:text-[#37AFE1] transition-colors">
                  Enterprise Scanning
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                For enterprise environments handling large volumes of documents,
                our high-capacity document scanners streamline workflows with
                automatic document feeders, OCR text recognition, and
                direct-to-cloud scanning.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
              className="bg-gradient-to-br from-[#37AFE1] to-[#2d8bb8] rounded-xl p-8 cursor-pointer group text-white"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                  <Headphones className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Find Your Perfect Printer
                </h3>
              </div>
              <p className="text-white/90 leading-relaxed mb-4">
                Not sure which printer is right for you? Browse our categories
                to explore options for home, office, or business use.
              </p>
              <Button
                asChild
                variant="secondary"
                className="bg-white text-[#37AFE1] hover:bg-gray-100"
              >
                <a href="/shop">Browse All Products</a>
              </Button>
            </motion.div>
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
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
              Ready to Buy a Printer or Scanner?
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Browse our complete catalog of printers and scanners. Find home
              printers, office printers, laser printers, inkjet printers, and
              document scanners at competitive prices.
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

      <section
        className="py-16 md:py-24 bg-white"
        data-testid="what-sets-us-apart-section"
      >
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block text-[#37AFE1] font-semibold text-sm uppercase tracking-wider mb-4">
              Our Commitment
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Experience the Print Mega Store difference with our dedication to
              quality, service, and customer satisfaction.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: <Award className="w-8 h-8" />,
                title: "Curated Selection",
                desc: "Every product in our catalog is carefully selected to ensure quality and reliability for your printing needs.",
                color: "from-[#37AFE1] to-[#2d8bb8]",
              },
              {
                icon: <ShieldCheck className="w-8 h-8" />,
                title: "Secure Checkout",
                desc: "Shop with confidence using our safe and encrypted payment processing for all transactions.",
                color: "from-purple-500 to-purple-600",
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Quick Processing",
                desc: "We process orders promptly to ensure your new printing equipment arrives when you need it most.",
                color: "from-green-500 to-green-600",
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Customer First",
                desc: "Your satisfaction is our priority. We go above and beyond to ensure a seamless shopping experience.",
                color: "from-pink-500 to-pink-600",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                className="bg-gray-50 rounded-xl p-8 cursor-pointer group text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg mx-auto mb-6`}
                >
                  <span className="text-white">{item.icon}</span>
                </motion.div>
                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-[#37AFE1] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-16 md:py-24 bg-gray-50"
        data-testid="trust-section"
      >
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-[#37AFE1]/10 rounded-full flex items-center justify-center">
                  <Headphones className="w-10 h-10 text-[#37AFE1]" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide mb-4">
                Customer Satisfaction Is Our Priority
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We aim to deliver exceptional customer service along every step
                of the way. Whether you need to know which printer is right for
                your home office, how to set up your new scanner, or how to
                troubleshoot printing issues, our friendly and professional team
                is ready to assist you.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mt-4">
                You may also browse through our product categories to find
                detailed information about specifications, features, and
                compatibility. However, if you cannot find what you are looking
                for and you have questions about your purchase, simply send us a
                message through our{" "}
                <a href="/contact" className="text-[#37AFE1] hover:underline">
                  contact page
                </a>
                .
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mt-4">
                If we are unavailable, leave a message and we will get back to
                you as soon as we can. You can also reach us via phone or email.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-[#37AFE1]/10 rounded-full flex items-center justify-center">
                  <BadgeCheck className="w-10 h-10 text-[#37AFE1]" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide mb-4">
                Quality Products You Can Trust
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Print Mega Store has always offered quality printers and
                scanners from trusted manufacturers. From the beginning, we have
                provided reliable printing equipment to households and
                businesses at competitive prices. We take pride in offering
                products that deliver consistent results.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mt-4">
                That is why we carefully select each product in our catalog. If
                you are not completely satisfied with your purchase, please read
                our return policy for more information on how we can help
                resolve any concerns.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mt-4">
                For any questions about product specifications or compatibility,
                feel free to reach out to us for assistance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-[#37AFE1]/10 rounded-full flex items-center justify-center">
                  <Printer className="w-10 h-10 text-[#37AFE1]" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide mb-4">
                Why Choose Print Mega Store?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Print Mega Store is your reliable independent destination for
                high-quality printers and scanners at budget-friendly prices. We
                have a wide selection of products that work perfectly for home
                offices, small businesses, and enterprise environments.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mt-4">
                We only offer products from reputable manufacturers to ensure
                the best printing results for every page. Our curated catalog
                includes home printers, office printers, inkjet printers, laser
                printers, and document scanners from leading brands.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mt-4">
                Print Mega Store has established a track record of dependability
                and excellence. Our prices are competitive but we never cut
                corners when it comes to quality. We aim to make it easier for
                our customers to quickly find affordable solutions to their
                printing needs. Shop now and find the perfect printer today.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-[#37AFE1]/5"
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
              className="w-16 h-16 bg-gradient-to-br from-[#37AFE1] to-[#2d8bb8] rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg"
            >
              <Mail className="w-8 h-8 text-white" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-gray-600 mb-8">
              Get exclusive deals, new product announcements, and helpful
              printing tips delivered straight to your inbox.
            </p>
            <NewsletterForm />
            <p className="text-xs text-gray-500 mt-4">
              By subscribing, you agree to receive promotional emails. You can
              unsubscribe anytime. Read our{" "}
              <a href="/privacy" className="text-[#37AFE1] hover:underline">
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
