import { Link } from "wouter";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Mail, MapPin, Phone, ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";
import { STORE_CATEGORIES, getCategoryUrl } from "@/lib/ecwid";
import logoImg from "@/assets/logo.png";

export function Footer() {
  const [email, setEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setEmail("");
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <footer className="gradient-dark text-gray-300">
      <div className="container mx-auto px-4">
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 space-y-6">
              <Link href="/" className="flex items-center">
                <img 
                  src={logoImg} 
                  alt="Print Mega Store" 
                  className="h-10 w-auto object-contain" 
                />
              </Link>
              <p className="text-base leading-relaxed text-gray-400 max-w-sm">
                Where quality meets convenience. Find the perfect printing solution for every need, 
                from home offices to enterprise workspaces.
              </p>
            </div>

            <div className="lg:col-span-2">
              <h3 className="text-white font-bold text-lg mb-6">Shop</h3>
              <ul className="space-y-4">
                <li>
                  <a href="/shop" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group" data-testid="link-footer-all-products">
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    All Products
                  </a>
                </li>
                {STORE_CATEGORIES.map((category) => (
                  <li key={category.id}>
                    <a 
                      href={getCategoryUrl(category)} 
                      className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group"
                      data-testid={`link-footer-${category.slug}`}
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {category.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-4">
                {[
                  { name: "Shipping Info", href: "/shipping" },
                  { name: "Returns & Refunds", href: "/returns" },
                  { name: "Purchase Terms", href: "/purchase-terms" },
                  { name: "Contact Us", href: "/contact" },
                ].map((item, i) => (
                  <li key={i}>
                    <a href={item.href} className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group">
                      <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-4">
              <h3 className="text-white font-bold text-lg mb-6">Stay Connected</h3>
              <p className="text-gray-400 mb-6">
                Subscribe for exclusive deals, tips, and product updates.
              </p>
              {showSuccess ? (
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 text-center shadow-xl">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Successfully Subscribed!</h3>
                  <p className="text-white/90 text-sm">
                    Thank you for joining our newsletter. You'll receive exclusive deals, tips, and product updates directly to your inbox.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Enter your email"
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary h-12 rounded-xl"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      type="email"
                      data-testid="input-newsletter-email"
                    />
                    <Button 
                      type="submit" 
                      className="h-12 px-6 rounded-xl"
                      data-testid="button-subscribe"
                    >
                      Subscribe
                    </Button>
                  </div>
                </form>
              )}

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4 text-gray-400">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm">123 Printer Avenue, Tech District, NY 10001</span>
                </div>
                <div className="flex items-center gap-4 text-gray-400">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-4 text-gray-400">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm">info@printmegastore.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-white/10">
          <div className="max-w-4xl mx-auto mb-6">
            <h4 className="text-white font-semibold text-sm text-center mb-2">Trademark Notice</h4>
            <p className="text-xs text-gray-400 text-center leading-relaxed">
              HP® is a registered trademark of Hewlett-Packard Development Company, L.P. We are an independent retailer and are not affiliated with or endorsed by HP.
            </p>
          </div>
          <p className="text-xs text-gray-500 text-center max-w-4xl mx-auto leading-relaxed">
            <strong>Disclaimer:</strong> Print Mega Store is an independent retailer and is not affiliated with, endorsed by, or sponsored by HP Inc., Hewlett-Packard Company, or any other manufacturer. All product images, logos, and trademarks are the property of their respective owners. Product images are used for informational purposes only under fair use guidelines. HP, LaserJet, and related trademarks are registered trademarks of HP Inc. All other trademarks are the property of their respective owners. All product information, specifications, and pricing are subject to change without notice. We make every effort to ensure accuracy but cannot guarantee that all information is complete or error-free. Please verify product details with the manufacturer before making a purchase decision.
          </p>
        </div>
        <div className="py-4 border-t border-white/10">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs text-gray-500 mb-4">
            <a href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="/shipping" className="hover:text-primary transition-colors">Shipping Policy</a>
            <a href="/returns" className="hover:text-primary transition-colors">Return & Refund Policy</a>
            <a href="/disclaimer" className="hover:text-primary transition-colors">Disclaimer</a>
            <a href="/cookies" className="hover:text-primary transition-colors">Cookie Policy</a>
            <a href="/do-not-sell" className="hover:text-primary transition-colors">Do Not Sell My Info</a>
          </div>
          <p className="text-sm text-gray-500 text-center">
            &copy; {new Date().getFullYear()} Print Mega Store. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
