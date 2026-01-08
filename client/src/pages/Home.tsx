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
  CheckCircle2
} from "lucide-react";
import { motion } from "framer-motion";
import { STORE_CATEGORIES, getCategoryUrl } from "@/lib/ecwid";
import heroBannerImg from "@assets/Banner_meet_smallest_enterprise_-_Desktop@2x.png_1767904533249.avif";
import homePrinterImg from "@assets/stock_images/home_printer_compact_563d38fc.jpg";
import officePrinterImg from "@assets/stock_images/large_office_multifu_ed611672.jpg";
import inkjetPrinterImg from "@assets/stock_images/inkjet_printer_color_ff5b9fc9.jpg";
import laserPrinterImg from "@assets/stock_images/laser_printer_fast_d_67ea17ad.jpg";
import scannerImg from "@assets/stock_images/document_scanner_fla_06670a5f.jpg";

const categoryIcons: Record<string, React.ReactNode> = {
  "Home-Printers": <Printer className="w-10 h-10" />,
  "Office-Printers": <Briefcase className="w-10 h-10" />,
  "Inkjet-Printers": <FileText className="w-10 h-10" />,
  "Laser-Printers": <Zap className="w-10 h-10" />,
  "Document-Scanners": <ScanLine className="w-10 h-10" />,
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
    name: "EcoTank Home Pro 4000",
    description: "Perfect for home offices and personal use. This compact wireless printer delivers exceptional quality prints with ultra-low running costs. Features automatic duplex printing and mobile connectivity.",
    price: "$249.99",
    features: ["Wireless connectivity", "Auto duplex printing", "Low-cost ink system"],
    image: homePrinterImg,
    productId: "home-printer-1"
  },
  {
    categorySlug: "Office-Printers",
    name: "WorkForce Pro MX-8500",
    description: "Built for demanding office environments. High-speed multifunction printer with print, scan, copy, and fax capabilities. Handles up to 50,000 pages per month with ease.",
    price: "$899.99",
    features: ["50,000 pages/month", "All-in-one functionality", "Network ready"],
    image: officePrinterImg,
    productId: "office-printer-1"
  },
  {
    categorySlug: "Inkjet-Printers",
    name: "PhotoSmart Elite X700",
    description: "Create stunning photo prints at home. 6-color ink system produces gallery-quality photos with vivid colors and exceptional detail. Perfect for photographers and creative professionals.",
    price: "$399.99",
    features: ["6-color ink system", "Borderless printing", "Photo paper support"],
    image: inkjetPrinterImg,
    productId: "inkjet-printer-1"
  },
  {
    categorySlug: "Laser-Printers",
    name: "LaserJet Enterprise M600",
    description: "Lightning-fast document printing for busy offices. Prints up to 55 pages per minute with crisp, professional quality text. Built-in security features protect your sensitive documents.",
    price: "$599.99",
    features: ["55 ppm speed", "Enterprise security", "Low cost per page"],
    image: laserPrinterImg,
    productId: "laser-printer-1"
  },
  {
    categorySlug: "Document-Scanners",
    name: "ScanPro Elite DS-500",
    description: "Professional document scanning at unprecedented speeds. Scans up to 80 pages per minute with automatic document feeder. Perfect for digitizing large document archives.",
    price: "$449.99",
    features: ["80 ppm scanning", "Auto document feeder", "OCR included"],
    image: scannerImg,
    productId: "scanner-1"
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
                  Premium Printers & Scanners for Every Business Need
                </motion.h1>

                <motion.p 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-base sm:text-lg text-white/90 mb-6 leading-relaxed"
                >
                  Discover enterprise-grade printing solutions designed for productivity. 
                  From compact home printers to high-volume office workhorses, find the perfect 
                  match for your printing needs with free shipping and expert support.
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

      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
                className="bg-white border border-gray-200 rounded-md p-5 flex items-center gap-4"
              >
                <div className="p-3 rounded-md bg-gray-100 text-primary shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-foreground">{benefit.title}</h3>
                  <p className="text-xs text-muted-foreground">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">Browse Categories</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Find Your Perfect Match</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore our carefully curated selection of professional printing solutions
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
          >
            {STORE_CATEGORIES.map((category, i) => (
              <motion.div
                key={category.id}
                variants={fadeInUp}
                transition={{ delay: i * 0.1 }}
              >
                <a href={getCategoryUrl(category)} data-testid={`card-category-${category.slug}`}>
                  <Card className="group h-full cursor-pointer border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-200">
                    <CardContent className="p-6 flex flex-col items-center text-center h-full">
                      <div className="w-20 h-20 rounded-md bg-gray-100 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-200">
                        <div className="text-primary group-hover:text-white transition-colors duration-200">
                          {categoryIcons[category.slug] || <Printer className="w-10 h-10" />}
                        </div>
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors">{category.name}</h3>
                      <p className="text-sm text-muted-foreground">{categoryDescriptions[category.slug]}</p>
                      <div className="mt-4 flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
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

      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">Featured Products</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Top Picks from Each Category</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover our best-selling products handpicked for quality and performance
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
                  className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-12 ${!isLast ? 'border-b border-gray-200' : ''}`}
                >
                  <div className={`${!isImageLeft ? 'lg:order-2' : ''}`}>
                    <a 
                      href={category ? getCategoryUrl(category) : "/shop"} 
                      className="block group"
                      data-testid={`link-product-${product.productId}`}
                    >
                      <div className="relative overflow-hidden rounded-md border border-gray-200">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                          data-testid={`img-product-${product.productId}`}
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-primary text-white text-xs font-semibold px-3 py-1.5 rounded-md">
                            {category?.name || product.categorySlug.replace('-', ' ')}
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className={`${!isImageLeft ? 'lg:order-1' : ''}`}>
                    <div className="space-y-4">
                      <h3 className="text-2xl lg:text-3xl font-bold text-foreground">{product.name}</h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">{product.description}</p>
                      
                      <div className="flex flex-wrap gap-2 pt-2">
                        {product.features.map((feature, i) => (
                          <span 
                            key={i} 
                            className="inline-flex items-center gap-1.5 bg-gray-100 border border-gray-200 text-sm text-foreground px-3 py-1.5 rounded-md"
                          >
                            <CheckCircle2 className="w-4 h-4 text-primary" />
                            {feature}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-6 pt-4">
                        <span className="text-3xl font-bold text-foreground">{product.price}</span>
                        <Button asChild>
                          <a href={category ? getCategoryUrl(category) : "/shop"} data-testid={`button-view-${product.productId}`}>
                            View in Store
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

      <section className="section-padding bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">Why Choose Us</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Built for Professionals</h2>
              <p className="text-muted-foreground text-lg mb-12">
                We partner with leading brands to bring you the best printing technology at competitive prices
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { number: "10K+", label: "Happy Customers" },
                { number: "500+", label: "Products Available" },
                { number: "99%", label: "Satisfaction Rate" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 bg-white rounded-md border border-gray-200"
                >
                  <div className="text-5xl font-extrabold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Upgrade?</h2>
            <p className="text-xl text-white/90 mb-10">
              Explore our catalog of premium printing equipment and find the perfect solution for your needs.
            </p>
            <Button asChild size="lg" variant="secondary" className="text-lg font-semibold">
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
