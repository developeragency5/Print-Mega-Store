import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ShoppingCart, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { STORE_CATEGORIES, getCategoryUrl } from "@/lib/ecwid";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 border-b",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-gray-200"
          : "bg-white border-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-foreground font-display">
              Print<span className="text-primary">Mega</span>Store
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className={cn(
                "px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-muted",
                location === "/" ? "text-primary" : "text-muted-foreground"
              )}
              data-testid="link-home"
            >
              Home
            </Link>

            {STORE_CATEGORIES.map((category) => (
              <a
                key={category.id}
                href={getCategoryUrl(category)}
                className="px-3 py-2 text-sm font-medium text-muted-foreground transition-colors rounded-md hover:bg-muted hover:text-foreground"
                data-testid={`link-nav-${category.slug}`}
              >
                {category.name}
              </a>
            ))}

            <Link
              href="/contact"
              className={cn(
                "px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-muted",
                location === "/contact" ? "text-primary" : "text-muted-foreground"
              )}
              data-testid="link-contact"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden sm:flex" asChild>
              <Link href="/contact" data-testid="button-phone">
                <Phone className="w-5 h-5" />
              </Link>
            </Button>
            
            <Button variant="ghost" size="icon" asChild>
              <a href="/shop" data-testid="button-cart">
                <ShoppingCart className="w-5 h-5" />
              </a>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
              data-testid="button-mobile-menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden border-t bg-background">
          <div className="space-y-1 px-4 py-4">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={cn(
                "block px-3 py-2 text-base font-medium rounded-md transition-colors",
                location === "/" ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted"
              )}
              data-testid="link-mobile-home"
            >
              Home
            </Link>

            {STORE_CATEGORIES.map((category) => (
              <a
                key={category.id}
                href={getCategoryUrl(category)}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium rounded-md transition-colors text-foreground hover:bg-muted"
                data-testid={`link-mobile-${category.slug}`}
              >
                {category.name}
              </a>
            ))}

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className={cn(
                "block px-3 py-2 text-base font-medium rounded-md transition-colors",
                location === "/contact" ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted"
              )}
              data-testid="link-mobile-contact"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
