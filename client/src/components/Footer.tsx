import { Link } from "wouter";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone } from "lucide-react";
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
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-display">
                Print<span className="text-primary">Mega</span>Store
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Your one-stop destination for professional printing solutions. 
              Quality products, competitive prices, and expert support.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="hover:text-primary transition-colors" data-testid="link-facebook"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-primary transition-colors" data-testid="link-twitter"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-primary transition-colors" data-testid="link-instagram"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/shop" className="hover:text-primary transition-colors" data-testid="link-footer-all-products">
                  All Products
                </a>
              </li>
              {STORE_CATEGORIES.map((category) => (
                <li key={category.id}>
                  <a 
                    href={getCategoryUrl(category)} 
                    className="hover:text-primary transition-colors"
                    data-testid={`link-footer-${category.slug}`}
                  >
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>123 Printer Avenue,<br />Tech District, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>support@printmegastore.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe to get the latest deals and printing tips.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <Input
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-primary"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                data-testid="input-newsletter-email"
              />
              <Button 
                type="submit" 
                className="w-full"
                disabled={subscribe.isPending}
                data-testid="button-subscribe"
              >
                {subscribe.isPending ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Print Mega Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
