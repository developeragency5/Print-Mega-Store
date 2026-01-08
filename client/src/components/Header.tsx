import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Printer, User } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { STORE_CATEGORIES, getCategoryUrl, STORE_ID } from "@/lib/ecwid";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentHash, setCurrentHash] = useState("");
  const [location] = useLocation();
  const cartWidgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track hash changes for Ecwid category highlighting and scroll to top
  useEffect(() => {
    const updateHash = () => {
      setCurrentHash(window.location.hash);
      // Scroll to top when navigating to a new category
      window.scrollTo(0, 0);
    };
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  // Ecwid URLs are formatted as #!/{slug}/c/{id}
  const isActiveCategory = (categorySlug: string) => {
    // Check if the hash contains the category slug followed by /c/
    return currentHash.includes(`#!/${categorySlug}/c/`);
  };

  const hasActiveCategory = STORE_CATEGORIES.some(cat => isActiveCategory(cat.slug));
  const isShopPage = location === "/shop" || window.location.pathname === "/shop";

  useEffect(() => {
    const initEcwidWidgets = () => {
      if (typeof window.Ecwid !== "undefined") {
        if (cartWidgetRef.current && cartWidgetRef.current.children.length === 0) {
          window.Ecwid.init();
        }
      }
    };

    const checkEcwid = setInterval(() => {
      if (typeof window.Ecwid !== "undefined") {
        initEcwidWidgets();
        clearInterval(checkEcwid);
      }
    }, 100);

    const timeout = setTimeout(() => clearInterval(checkEcwid), 10000);

    return () => {
      clearInterval(checkEcwid);
      clearTimeout(timeout);
    };
  }, []);

  const isHome = location === "/";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg"
          : isHome
            ? "bg-white/90 backdrop-blur-md shadow-sm"
            : "bg-white shadow-sm"
      )}
    >
      {/* Top Bar - Logo, Contact, Login, Cart */}
      <div className={cn(
        "border-b transition-colors duration-300",
        "border-gray-100"
      )}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0 group" data-testid="link-logo">
              <Printer className="w-8 h-8 text-[#37AFE1]" />
              <span className="text-xl font-bold tracking-tight">
                <span className="text-gray-900">PRINT</span> <span className="text-[#37AFE1]">MEGA</span> <span className="text-gray-900">STORE</span>
              </span>
            </Link>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Phone */}
              <a 
                href="tel:+15551234567"
                className="hidden md:flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-phone"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden lg:inline">+1 (555) 123-4567</span>
              </a>

              <div className="hidden md:block w-px h-6 bg-gray-200" />

              {/* Ecwid Sign In Button */}
              <a
                href="/shop#!/~/signin"
                className="hidden md:flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-signin"
              >
                <User className="w-4 h-4" />
                <span className="hidden lg:inline">Sign In</span>
              </a>

              {/* Ecwid Cart Widget - Native Ecwid Icon */}
              <div 
                ref={cartWidgetRef}
                className="ec-cart-widget"
                data-testid="ecwid-cart"
              />

              {/* Mobile Menu Button */}
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
      </div>

      {/* Bottom Nav Bar - Navigation Links */}
      <div className="hidden lg:block bg-gray-50/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-center gap-1">
            <Link
              href="/"
              className={cn(
                "px-5 py-3 text-sm font-medium transition-all duration-300 border-b-2",
                location === "/" 
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:border-gray-300"
              )}
              data-testid="link-home"
            >
              Home
            </Link>

            <a
              href="/shop"
              className={cn(
                "px-5 py-3 text-sm font-medium transition-all duration-300 border-b-2",
                isShopPage && !hasActiveCategory
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:border-gray-300"
              )}
              data-testid="link-shop"
            >
              All Products
            </a>

            {STORE_CATEGORIES.map((category) => (
              <a
                key={category.id}
                href={getCategoryUrl(category)}
                className={cn(
                  "px-5 py-3 text-sm font-medium transition-all duration-300 border-b-2",
                  isActiveCategory(category.slug)
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:border-gray-300"
                )}
                data-testid={`link-nav-${category.slug}`}
              >
                {category.name}
              </a>
            ))}

            <Link
              href="/about"
              className={cn(
                "px-5 py-3 text-sm font-medium transition-all duration-300 border-b-2",
                location === "/about" 
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:border-gray-300"
              )}
              data-testid="link-about"
            >
              About
            </Link>

            <Link
              href="/contact"
              className={cn(
                "px-5 py-3 text-sm font-medium transition-all duration-300 border-b-2",
                location === "/contact" 
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:border-gray-300"
              )}
              data-testid="link-contact"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "lg:hidden overflow-hidden transition-all duration-300",
        isOpen ? "max-h-[600px] border-t bg-white" : "max-h-0"
      )}>
        <div className="space-y-1 px-4 py-4">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className={cn(
              "block px-4 py-3 text-base font-medium rounded-xl transition-colors",
              location === "/" ? "bg-primary/10 text-primary" : "text-foreground hover:bg-gray-100"
            )}
            data-testid="link-mobile-home"
          >
            Home
          </Link>

          <a
            href="/shop"
            onClick={() => setIsOpen(false)}
            className={cn(
              "block px-4 py-3 text-base font-medium rounded-xl transition-colors",
              isShopPage && !hasActiveCategory
                ? "bg-primary/10 text-primary"
                : "text-foreground hover:bg-gray-100"
            )}
            data-testid="link-mobile-shop"
          >
            All Products
          </a>

          {STORE_CATEGORIES.map((category) => (
            <a
              key={category.id}
              href={getCategoryUrl(category)}
              onClick={() => setIsOpen(false)}
              className={cn(
                "block px-4 py-3 text-base font-medium rounded-xl transition-colors",
                isActiveCategory(category.slug)
                  ? "bg-primary/10 text-primary"
                  : "text-foreground hover:bg-gray-100"
              )}
              data-testid={`link-mobile-${category.slug}`}
            >
              {category.name}
            </a>
          ))}

          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className={cn(
              "block px-4 py-3 text-base font-medium rounded-xl transition-colors",
              location === "/about" ? "bg-primary/10 text-primary" : "text-foreground hover:bg-gray-100"
            )}
            data-testid="link-mobile-about"
          >
            About
          </Link>

          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className={cn(
              "block px-4 py-3 text-base font-medium rounded-xl transition-colors",
              location === "/contact" ? "bg-primary/10 text-primary" : "text-foreground hover:bg-gray-100"
            )}
            data-testid="link-mobile-contact"
          >
            Contact
          </Link>

          <div className="pt-4 space-y-2 border-t border-gray-100">
            <a
              href="/shop#!/~/signin"
              className="block px-4 py-3 text-base font-medium rounded-xl transition-colors text-foreground hover:bg-gray-100"
              data-testid="link-mobile-signin"
            >
              Sign In / Register
            </a>
            <a
              href="/shop#!/~/cart"
              className="block px-4 py-3 text-base font-medium rounded-xl transition-colors text-foreground hover:bg-gray-100"
              data-testid="link-mobile-cart"
            >
              View Cart
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
