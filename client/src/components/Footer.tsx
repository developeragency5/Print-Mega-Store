import { Link } from "wouter";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone, ArrowRight, Printer } from "lucide-react";
import { useCreateSubscriber } from "@/hooks/use-subscribers";
import { useState } from "react";
import { STORE_CATEGORIES, getCategoryUrl } from "@/lib/ecwid";

export function Footer() {
  const [email, setEmail] = useState("");
  const subscribe = useCreateSubscriber();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    subscribe.mutate({ email }, {
      onSuccess: () => setEmail("")
    });
  };

  return (
    <footer className="gradient-dark text-gray-300">
      <div className="container mx-auto px-4">
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 space-y-6">
              <Link href="/" className="flex items-center gap-2">
                <Printer className="w-8 h-8 text-[#37AFE1]" />
                <div className="flex flex-col leading-none">
                  <svg className="w-16 h-2 text-[#37AFE1] -mb-0.5" viewBox="0 0 60 8" fill="none">
                    <path d="M5 6 C20 -2, 40 -2, 55 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
                  </svg>
                  <span className="text-xl font-bold tracking-tight text-white">
                    print<span className="text-[#37AFE1]">mega</span>
                  </span>
                </div>
              </Link>
              <p className="text-base leading-relaxed text-gray-400 max-w-sm">
                Your independent online destination for professional printing and scanning equipment. 
                Quality products, competitive prices, and reliable customer service.
              </p>
              <div className="flex gap-3 pt-2">
                {[
                  { icon: <Facebook className="w-5 h-5" />, label: "Facebook" },
                  { icon: <Twitter className="w-5 h-5" />, label: "Twitter" },
                  { icon: <Instagram className="w-5 h-5" />, label: "Instagram" },
                  { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn" },
                ].map((social, i) => (
                  <a 
                    key={i}
                    href="#" 
                    className="w-10 h-10 rounded-xl bg-white/5 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110"
                    data-testid={`link-${social.label.toLowerCase()}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
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
              <h3 className="text-white font-bold text-lg mb-6">Support</h3>
              <ul className="space-y-4">
                {["FAQ", "Shipping Info", "Returns", "Warranty", "Track Order"].map((item, i) => (
                  <li key={i}>
                    <a href="#" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group">
                      <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {item}
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
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="flex gap-2">
                  <Input
                    placeholder="Enter your email"
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary h-12 rounded-xl"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    data-testid="input-newsletter-email"
                  />
                  <Button 
                    type="submit" 
                    className="h-12 px-6 rounded-xl"
                    disabled={subscribe.isPending}
                    data-testid="button-subscribe"
                  >
                    {subscribe.isPending ? "..." : "Subscribe"}
                  </Button>
                </div>
              </form>

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
                  <span className="text-sm">support@printmegastore.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-white/10">
          <p className="text-xs text-gray-500 text-center mb-4 max-w-4xl mx-auto">
            Manufacturer brand names, logos, and trademarks are the registered property of their respective owners. 
            Print Mega Store is an independent retailer and is not affiliated with, authorized by, or sponsored by any manufacturer. 
            Brand references are made solely for purposes of product identification and compatibility.
          </p>
        </div>
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Print Mega Store. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
