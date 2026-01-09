import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { EcwidProvider } from "@/lib/ecwid";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

function ScrollToTop() {
  const [location] = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return null;
}

import Home from "@/pages/Home";
import Shop from "@/pages/Shop";
import Contact from "@/pages/Contact";
import About from "@/pages/About";
import Privacy from "@/pages/Privacy";
import TermsOfService from "@/pages/TermsOfService";
import PurchaseTerms from "@/pages/PurchaseTerms";
import ShippingPolicy from "@/pages/ShippingPolicy";
import ReturnPolicy from "@/pages/ReturnPolicy";
import Disclaimer from "@/pages/Disclaimer";
import CookiePolicy from "@/pages/CookiePolicy";
import DoNotSell from "@/pages/DoNotSell";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/shop" component={Shop} />
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={TermsOfService} />
      <Route path="/purchase-terms" component={PurchaseTerms} />
      <Route path="/shipping" component={ShippingPolicy} />
      <Route path="/returns" component={ReturnPolicy} />
      <Route path="/disclaimer" component={Disclaimer} />
      <Route path="/cookies" component={CookiePolicy} />
      <Route path="/do-not-sell" component={DoNotSell} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <EcwidProvider>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 pt-[120px]">
              <Router />
            </main>
            <Footer />
          </div>
        </EcwidProvider>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
