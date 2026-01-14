import { motion } from "framer-motion";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-4" data-testid="heading-terms-of-service">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600 mb-2">Print Mega Store</p>
            <p className="text-gray-600 mb-8">Last updated: January 2026</p>

            <p className="text-gray-600 mb-8">
              These Terms of Service ("Terms") govern your use of the website www.printmegastore.net and the purchase of products from Print Mega Store ("we," "us," or "our"). By accessing our website or placing an order, you agree to be bound by these Terms.
            </p>

            <div className="space-y-8 text-gray-600 leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-black mb-4">1. About Print Mega Store</h2>
                <p>
                  Print Mega Store is an independent online retailer serving customers in the United States. We sell printers, scanners, and related products. We are not affiliated with, endorsed by, or sponsored by HP or any manufacturer. All trademarks belong to their respective owners.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">2. Eligibility</h2>
                <p>
                  You must be at least 18 years old to place an order. By using this site, you confirm that you are legally able to enter into a binding agreement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">3. Products & Availability</h2>
                <p className="mb-4">All products are subject to availability. We reserve the right to:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Limit quantities</li>
                  <li>Discontinue products</li>
                  <li>Refuse or cancel orders at our discretion</li>
                </ul>
                <p>
                  Product images and descriptions are provided for reference only. We do our best to ensure accuracy but cannot guarantee that all information is error-free.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">4. Pricing</h2>
                <p className="mb-4">All prices are listed in U.S. dollars (USD) unless stated otherwise.</p>
                <p className="mb-2">Prices:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>May change without notice</li>
                  <li>May differ from manufacturer's suggested retail price (MSRP)</li>
                  <li>Reflect promotional or limited-time offers</li>
                </ul>
                <p>
                  Print Mega Store is not responsible for pricing errors and reserves the right to cancel any order placed at an incorrect price.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">5. Orders & Payment</h2>
                <p className="mb-4">
                  Orders are processed through our secure checkout powered by Lightspeed / Ecwid.
                </p>
                <p className="mb-4">
                  By placing an order, you authorize us to charge your selected payment method for the total amount including taxes and shipping (if applicable).
                </p>
                <p className="mb-2">We reserve the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Cancel or refuse any order</li>
                  <li>Request additional verification before fulfillment</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">6. Shipping & Delivery</h2>
                <p className="mb-4">
                  Orders are typically processed within 1–2 business days.
                </p>
                <p className="mb-4">
                  Estimated delivery times are provided for convenience only and are not guaranteed.
                </p>
                <p className="mb-2">Once your order ships:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>You will receive tracking information by email</li>
                  <li>Responsibility for delivery passes to the carrier</li>
                </ul>
                <p>
                  Print Mega Store is not responsible for delays caused by carriers, weather, customs, or incorrect shipping information provided by the customer.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">7. Returns & Refunds</h2>
                <p className="mb-4">We offer a 30-day return policy.</p>
                <p className="mb-2">To be eligible:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Items must be unused</li>
                  <li>In original packaging</li>
                  <li>With all accessories included</li>
                </ul>
                <p className="mb-4">
                  Return shipping costs may be the responsibility of the customer unless the product was defective or incorrect.
                </p>
                <p className="mb-4">
                  Refunds are issued to the original payment method after the returned item is inspected.
                </p>
                <p className="mb-4">
                  Certain items (including special-order, clearance, or opened electronics) may not be eligible for return.
                </p>
                <p>
                  Full return details are available on our <a href="/returns" className="text-[#33cccc] hover:underline">Returns & Refunds</a> page.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">8. Manufacturer Warranty</h2>
                <p className="mb-4">
                  Manufacturer warranty coverage may be available and is provided by the manufacturer according to their warranty terms.
                </p>
                <p className="mb-4">
                  Print Mega Store does not provide manufacturer warranty service. Warranty claims, support, and repairs must be handled directly through the manufacturer.
                </p>
                <p>
                  Warranty coverage may vary by product, region, and registration status.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">9. Enterprise & Professional Products</h2>
                <p className="mb-4">
                  Some printers and scanners sold on this site may be classified as enterprise, commercial, or professional equipment.
                </p>
                <p className="mb-2">These products:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>May have region-specific warranty terms</li>
                  <li>May require manufacturer registration</li>
                  <li>May not be eligible for consumer-grade support</li>
                </ul>
                <p>
                  Customers are responsible for verifying warranty and compatibility with the manufacturer before purchase.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">10. Intellectual Property</h2>
                <p className="mb-4">
                  All product names, trademarks, logos, and brand names (including HP®) are the property of their respective owners and are used for identification purposes only.
                </p>
                <p>
                  Nothing on this website grants you any license to use any trademark or copyrighted content.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">11. Prohibited Use</h2>
                <p className="mb-2">You agree not to:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Use this website for unlawful purposes</li>
                  <li>Attempt to interfere with site security</li>
                  <li>Copy, resell, or exploit any portion of the website without permission</li>
                </ul>
                <p>
                  We may terminate access for violations of these Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">12. Limitation of Liability</h2>
                <p className="mb-2">Print Mega Store is not liable for:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Indirect or consequential damages</li>
                  <li>Loss of profits or data</li>
                  <li>Delays, delivery failures, or manufacturer defects</li>
                </ul>
                <p>
                  Our maximum liability is limited to the amount paid for the product.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">13. Privacy</h2>
                <p>
                  Your use of this site is also governed by our <a href="/privacy" className="text-[#33cccc] hover:underline">Privacy Policy</a>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">14. Governing Law</h2>
                <p>
                  These Terms are governed by the laws applicable to online commerce in the United States.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">15. Changes to These Terms</h2>
                <p>
                  We may update these Terms at any time. Changes take effect once posted on this page.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">16. Contact</h2>
                <p className="mb-4">For questions about these Terms:</p>
                <p>
                  Email: <a href="mailto:info@printmegastore.com" className="text-[#33cccc] hover:underline">info@printmegastore.com</a>
                </p>
                <p className="mt-4 text-sm text-gray-500">
                  Print Mega Store — Independent Online Retailer
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
