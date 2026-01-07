import { Link } from "wouter";
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
  FileText
} from "lucide-react";
import { motion } from "framer-motion";
import { STORE_CATEGORIES, getCategoryUrl } from "@/lib/ecwid";

const categoryIcons: Record<string, React.ReactNode> = {
  "Home-Printers": <Printer className="w-12 h-12 mb-4" />,
  "Office-Printers": <Briefcase className="w-12 h-12 mb-4" />,
  "Inkjet-Printers": <FileText className="w-12 h-12 mb-4" />,
  "Laser-Printers": <Zap className="w-12 h-12 mb-4" />,
  "Document-Scanners": <ScanLine className="w-12 h-12 mb-4" />,
};

const categoryDescriptions: Record<string, string> = {
  "Home-Printers": "Compact and efficient printers for personal use.",
  "Office-Printers": "High-capacity workhorses for teams and businesses.",
  "Inkjet-Printers": "Vibrant color printing for photos and graphics.",
  "Laser-Printers": "Fast, crisp printing for high-volume documents.",
  "Document-Scanners": "Digitize documents with precision and speed.",
};

export default function Home() {
  const printersCategory = STORE_CATEGORIES.find(c => c.slug === "Home-Printers");
  const scannersCategory = STORE_CATEGORIES.find(c => c.slug === "Document-Scanners");

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative bg-gray-900 text-white overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-gray-900 to-gray-900"></div>
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            >
              Professional Printing <br />
              <span className="text-primary">Solutions</span> for Everyone
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed"
            >
              Upgrade your home office or enterprise with top-tier printers and scanners. 
              Reliable, high-quality, and built to last.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button asChild size="lg" className="text-base font-semibold">
                <a href={printersCategory ? getCategoryUrl(printersCategory) : "/shop"} data-testid="button-shop-printers">
                  Shop Printers
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base font-semibold border-white/20 hover:bg-white/10 text-white hover:text-white">
                <a href={scannersCategory ? getCategoryUrl(scannersCategory) : "/shop"} data-testid="button-shop-scanners">
                  Shop Scanners
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <BenefitCard 
              icon={<Truck className="w-8 h-8 text-primary" />}
              title="Fast Shipping"
              description="Free shipping on orders over $500. Quick delivery nationwide."
            />
            <BenefitCard 
              icon={<ShieldCheck className="w-8 h-8 text-primary" />}
              title="Secure Checkout"
              description="Your data is protected with enterprise-grade encryption."
            />
            <BenefitCard 
              icon={<Briefcase className="w-8 h-8 text-primary" />}
              title="Business Grade"
              description="Products selected for durability and high-volume performance."
            />
            <BenefitCard 
              icon={<Headphones className="w-8 h-8 text-primary" />}
              title="Expert Support"
              description="Our team of specialists is here to help you choose right."
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12 flex-wrap gap-4">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">Shop by Category</h2>
              <p className="text-muted-foreground">Find exactly what you need for your setup.</p>
            </div>
            <a href="/shop" className="hidden sm:flex items-center text-primary font-medium hover:underline" data-testid="link-view-all">
              View all products <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {STORE_CATEGORIES.map((category) => (
              <CategoryCard 
                key={category.id}
                title={category.name}
                description={categoryDescriptions[category.slug] || "Browse our selection."}
                href={getCategoryUrl(category)}
                icon={categoryIcons[category.slug] || <Printer className="w-12 h-12 mb-4" />}
              />
            ))}
          </div>
          
          <div className="mt-8 text-center sm:hidden">
            <Button asChild variant="ghost" className="text-primary">
              <a href="/shop" data-testid="link-view-all-mobile">View all products</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl font-bold mb-6">Ready to upgrade your workflow?</h2>
          <p className="text-blue-100 text-lg mb-8">
            Explore our catalog of premium printing equipment and accessories.
          </p>
          <Button asChild size="lg" variant="secondary">
            <a href="/shop" data-testid="button-browse-catalog">Browse Catalog</a>
          </Button>
        </div>
      </section>
    </div>
  );
}

function BenefitCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white border border-transparent hover:border-blue-100 hover:shadow-lg transition-all duration-300">
      <div className="mb-4 p-3 bg-blue-50 rounded-full">{icon}</div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

function CategoryCard({ title, description, href, icon }: { title: string, description: string, href: string, icon: React.ReactNode }) {
  return (
    <a href={href} data-testid={`card-category-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <Card className="h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden group">
        <CardContent className="p-6 flex flex-col items-center text-center h-full justify-center bg-white group-hover:bg-blue-50/30 transition-colors">
          <div className="text-gray-400 group-hover:text-primary transition-colors duration-300 transform group-hover:scale-110">
            {icon}
          </div>
          <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </a>
  );
}
