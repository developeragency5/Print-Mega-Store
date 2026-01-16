import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, User, Search, Heart, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { STORE_CATEGORIES, getCategoryUrl, STORE_ID } from "@/lib/ecwid";
import logoImg from "@assets/ChatGPT_Image_Jan_13,_2026,_07_50_24_PM(1)_1768351875558.png";
import phoneIcon from "@assets/phone_1768348600813.png";
import searchIcon from "@assets/magnifying-glass_1768508427596.png";
import favoritesIcon from "@assets/like_1768508473767.png";
import profileIcon from "@assets/userr_1768508906929.png";
import cartIcon from "@assets/bag_1768508990237.png";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentHash, setCurrentHash] = useState("");
  const [cartCount, setCartCount] = useState(0);
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

  // Track Ecwid cart changes
  useEffect(() => {
    const initEcwidCart = () => {
      if (typeof window.Ecwid !== "undefined") {
        // Initialize Ecwid
        window.Ecwid.init();
        
        // Subscribe to cart changes
        if (window.Ecwid.OnCartChanged) {
          window.Ecwid.OnCartChanged.add((cart: any) => {
            const itemCount = cart.productsQuantity || 0;
            setCartCount(itemCount);
          });
        }
        
        // Get initial cart count
        if (window.Ecwid.Cart) {
          window.Ecwid.Cart.get((cart: any) => {
            const itemCount = cart.productsQuantity || 0;
            setCartCount(itemCount);
          });
        }
      }
    };

    const checkEcwid = setInterval(() => {
      if (typeof window.Ecwid !== "undefined") {
        initEcwidCart();
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
            <Link href="/" className="flex items-center shrink-0" data-testid="link-logo">
              <img 
                src={logoImg} 
                alt="Print Mega Store" 
                className="h-12 w-auto object-contain" 
              />
            </Link>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Phone */}
              <a 
                href="tel:+15673230815"
                className="hidden md:flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-phone"
              >
                <img src={phoneIcon} alt="Phone" className="w-5 h-5" />
                <span className="hidden lg:inline">+1-567-323-0815</span>
              </a>

              <div className="hidden md:block w-px h-6 bg-gray-200" />

              {/* Sign In Button */}
              <a
                href="/shop#!/~/signin"
                className="hidden md:flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover:opacity-70"
                data-testid="link-signin"
              >
                <img src={profileIcon} alt="Sign In" className="w-5 h-5" />
                <span className="hidden lg:inline">Sign In</span>
              </a>

              {/* Cart Button */}
              <a
                href="/shop#!/~/cart"
                className="hidden md:flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover:opacity-70 relative"
                data-testid="link-cart"
              >
                <div className="relative">
                  <img src={cartIcon} alt="Cart" className="w-5 h-5" />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                      {cartCount > 99 ? "99+" : cartCount}
                    </span>
                  )}
                </div>
                <span className="hidden lg:inline">Cart</span>
              </a>

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
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-1">
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
            </div>

            <div className="flex items-center gap-2">
              {/* Search Icon */}
              <a
                href="/shop#!/~/search"
                className="p-2 hover:opacity-70 transition-opacity"
                data-testid="link-search"
                title="Search"
              >
                <img src={searchIcon} alt="Search" className="w-6 h-6" />
              </a>

              {/* Favorites Icon */}
              <a
                href="/shop#!/~/favorites"
                className="p-2 hover:opacity-70 transition-opacity"
                data-testid="link-favorites"
                title="Favorites"
              >
                <img src={favoritesIcon} alt="Favorites" className="w-6 h-6" />
              </a>
            </div>
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
              className="flex items-center justify-between px-4 py-3 text-base font-medium rounded-xl transition-colors text-foreground hover:bg-gray-100"
              data-testid="link-mobile-cart"
            >
              <span>View Cart</span>
              {cartCount > 0 && (
                <span className="bg-primary text-white text-xs font-bold rounded-full px-2 py-1">
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
