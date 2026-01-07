import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ShoppingCart, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Home Printers" },
  { href: "/shop", label: "Office Printers" },
  { href: "/shop", label: "Inkjet Printers" },
  { href: "/shop", label: "Laser Printers" },
  { href: "/shop", label: "Document Scanners" },
  { href: "/contact", label: "Contact" },
];

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

  // Initialize Minicart on location change to ensure it renders if the script is loaded
  useEffect(() => {
    if (window.xMinicart) {
      // Ecwid's xMinicart usually attaches itself to existing DOM elements or creates one
      // We trigger a re-render/check here if needed
      window.xMinicart("style=","layout=MiniAttachToProductBrowser");
    }
  }, [location]);

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
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-foreground font-display">
              Print<span className="text-primary">Mega</span>Store
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location === link.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="hidden sm:flex" asChild>
              <Link href="/contact">
                <Phone className="w-5 h-5" />
              </Link>
            </Button>
            
            <div id="my-cart-128774264" className="ecwid-minicart-wrapper min-w-[32px] min-h-[32px]">
              {/* Fallback cart icon if Ecwid hasn't loaded */}
              <Link href="/shop" className="relative group">
                 <ShoppingCart className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="space-y-1 px-4 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-3 py-2 text-base font-medium rounded-md transition-colors",
                  location === link.href
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:bg-muted"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
