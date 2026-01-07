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
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white overflow-hidden py-20 lg:py-32">
        {/* Abstract Background */}
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
                <Link href="/shop">Shop Printers</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base font-semibold border-white/20 hover:bg-white/10 text-white hover:text-white">
                <Link href="/shop">Shop Scanners</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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

      {/* Categories Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">Featured Categories</h2>
              <p className="text-muted-foreground">Find exactly what you need for your setup.</p>
            </div>
            <Link href="/shop" className="hidden sm:flex items-center text-primary font-medium hover:underline">
              View all products <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CategoryCard 
              title="Home Office" 
              description="Compact and efficient for personal use."
              href="/shop"
              icon={<Printer className="w-12 h-12 mb-4" />}
            />
            <CategoryCard 
              title="Business Solutions" 
              description="High-capacity workhorses for teams."
              href="/shop"
              icon={<Briefcase className="w-12 h-12 mb-4" />}
            />
            <CategoryCard 
              title="Scanners" 
              description="Digitize documents with precision."
              href="/shop"
              icon={<ScanLine className="w-12 h-12 mb-4" />}
            />
          </div>
          
          <div className="mt-8 text-center sm:hidden">
            <Button asChild variant="ghost" className="text-primary">
              <Link href="/shop">View all products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl font-bold mb-6">Ready to upgrade your workflow?</h2>
          <p className="text-blue-100 text-lg mb-8">
            Explore our catalog of premium printing equipment and accessories.
          </p>
          <Button asChild size="lg" variant="white">
            <Link href="/shop">Browse Catalog</Link>
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
    <Link href={href}>
      <Card className="h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden group">
        <CardContent className="p-8 flex flex-col items-center text-center h-full justify-center bg-white group-hover:bg-blue-50/30 transition-colors">
          <div className="text-gray-400 group-hover:text-primary transition-colors duration-300 transform group-hover:scale-110">
            {icon}
          </div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
