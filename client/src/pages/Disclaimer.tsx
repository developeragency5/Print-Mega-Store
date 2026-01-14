import { motion } from "framer-motion";

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-4" data-testid="heading-disclaimer">
              Disclaimer
            </h1>
            <p className="text-xl text-gray-600 mb-2">Print Mega Store</p>
            <p className="text-gray-600 mb-8">Last Updated: January 2026</p>

            <p className="text-gray-600 mb-8">
              The information provided on www.printmegastore.net ("Website") is intended for general informational and promotional purposes only. By using this Website you agree to this Disclaimer and understand its terms.
            </p>

            <div className="space-y-8 text-gray-600 leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-black mb-4">1. No Manufacturer Affiliation</h2>
                <p className="mb-2">Print Mega Store is an independent online retailer serving customers in the United States and is not:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Affiliated with</li>
                  <li>Endorsed by</li>
                  <li>Sponsored by</li>
                </ul>
                <p className="mb-4">
                  HP Inc., Hewlett-Packard Development Company, L.P., or any other printer manufacturer.
                </p>
                <p>
                  All product names, logos, trademarks, images, and brand identifiers shown on this Website are the property of their respective owners and are used for identification and informational purposes only.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">2. Product Information</h2>
                <p className="mb-2">
                  We make every reasonable effort to ensure that the product descriptions, specifications, and images on this Website are accurate and up to date. However, we do not guarantee that:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Product descriptions are free from errors</li>
                  <li>Specifications are complete or current</li>
                  <li>Colors or images exactly match the actual product</li>
                </ul>
                <p>
                  Before making a purchase, please verify the product details and specifications with the manufacturer's official information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">3. Pricing and Offers</h2>
                <p className="mb-2">
                  All product prices, discounts, promotions, and availability are subject to change without notice. Prices displayed on this Website:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>May differ from manufacturer suggested retail price (MSRP)</li>
                  <li>May reflect promotional offers or limited-time pricing</li>
                  <li>May change due to market availability</li>
                </ul>
                <p>
                  Print Mega Store is not responsible for pricing errors and reserves the right to correct prices or cancel orders at any time.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">4. Warranty and Support</h2>
                <p className="mb-4">
                  Products sold by Print Mega Store may be eligible for manufacturer warranty coverage where applicable. Print Mega Store does not provide manufacturer warranty service, technical support, or repair services.
                </p>
                <p>
                  For warranty service or product support, you must contact the manufacturer directly in accordance with their warranty terms and procedures.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">5. Use of Cookies and Tracking</h2>
                <p className="mb-2">This Website uses cookies, pixels, and similar technologies to:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Improve user experience</li>
                  <li>Personalize content</li>
                  <li>Analyze site performance</li>
                  <li>Serve relevant advertising</li>
                </ul>
                <p>
                  Your use of the Website constitutes acceptance of our <a href="/cookies" className="text-[#33cccc] hover:underline">Cookie Policy</a> and <a href="/privacy" className="text-[#33cccc] hover:underline">Privacy Policy</a>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">6. Third-Party Links</h2>
                <p className="mb-4">
                  This Website may contain links to third-party websites. These links are provided for convenience and do not imply endorsement or control by Print Mega Store.
                </p>
                <p>
                  Print Mega Store is not responsible for the content, availability, or accuracy of any third-party sites.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">7. Limitation of Liability</h2>
                <p className="mb-2">
                  To the maximum extent permitted by law, Print Mega Store, its affiliates, employees, agents, and partners will not be liable for:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Direct or indirect damages</li>
                  <li>Loss of data, income, or profits</li>
                  <li>Personal injury</li>
                  <li>Property damage</li>
                  <li>Any other loss arising from use of this Website or products purchased through it</li>
                </ul>
                <p>
                  Your sole remedy for dissatisfaction with any product or service is to return the item under the <a href="/returns" className="text-[#33cccc] hover:underline">Return & Refund Policy</a> or contact us at <a href="mailto:info@printmegastore.com" className="text-[#33cccc] hover:underline">info@printmegastore.com</a>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">8. Changes to This Disclaimer</h2>
                <p>
                  We may update this Disclaimer at any time by posting a revised version on this page. The updated Disclaimer takes effect when it is posted, and the Last Updated date will be revised accordingly.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Contact Information</h2>
                <p className="mb-4">If you have any questions about this Disclaimer or want to clarify any terms:</p>
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
