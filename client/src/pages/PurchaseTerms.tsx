import { motion } from "framer-motion";

export default function PurchaseTerms() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-8" data-testid="heading-purchase-terms">
              Purchase Terms & Conditions
            </h1>
            <p className="text-gray-600 mb-8">
              Last updated: January 2026
            </p>

            <div className="space-y-8 text-gray-600 leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-black mb-4" data-testid="heading-order-placement">Order Placement and Acceptance</h2>
                <p>
                  When you place an order through Print Mega Store, you are making an offer to purchase products from us. All orders are subject to acceptance by Print Mega Store. We reserve the right to refuse or cancel any order for any reason, including but not limited to product availability, errors in product or pricing information, or problems identified by our fraud detection systems.
                </p>
                <p className="mt-4">
                  Upon placing an order, you will receive an order confirmation email acknowledging receipt of your order. This confirmation does not constitute acceptance of your order. Your order is accepted and a contract is formed only when we ship the products and send you a shipping confirmation email.
                </p>
                <p className="mt-4">
                  As an independent printer retailer, Print Mega Store sources products from various manufacturers and distributors. Order processing typically takes 1-3 business days before shipment.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4" data-testid="heading-pricing-payment">Pricing and Payment</h2>
                <p className="mb-4">
                  All prices displayed on our website are in US Dollars (USD) and are exclusive of applicable sales tax unless otherwise stated. Prices are subject to change without notice. We strive to ensure all pricing is accurate, but errors may occur.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>If we discover a pricing error after you have placed an order, we will contact you and give you the option to confirm the order at the correct price or cancel it</li>
                  <li>Sales tax will be calculated and added at checkout based on your shipping address</li>
                  <li>We accept major credit cards (Visa, MasterCard, American Express, Discover), PayPal, and other payment methods as displayed at checkout</li>
                  <li>Payment is processed securely through our payment provider at the time of order placement</li>
                  <li>Promotional codes and discounts cannot be combined unless explicitly stated</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4" data-testid="heading-shipping-delivery">Shipping and Delivery</h2>
                <p className="mb-4">
                  Print Mega Store ships to addresses within the United States. Shipping options and costs are calculated at checkout based on your location and the products ordered.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Standard Shipping:</strong> 5-7 business days delivery (free on orders over $50)</li>
                  <li><strong>Expedited Shipping:</strong> 2-3 business days delivery</li>
                  <li><strong>Express Shipping:</strong> 1-2 business days delivery</li>
                  <li>Delivery times are estimates and are not guaranteed, especially during peak seasons or due to carrier delays</li>
                  <li>Oversized items or items requiring special handling may incur additional shipping charges</li>
                  <li>We ship via major carriers including UPS, FedEx, and USPS</li>
                </ul>
                <p className="mt-4">
                  You will receive tracking information via email once your order has shipped. Signature may be required for high-value orders.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4" data-testid="heading-returns-refunds">Returns and Refunds</h2>
                <p className="mb-4">
                  Print Mega Store offers a 30-day return policy for most products. To be eligible for a return:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Products must be returned within 30 days of delivery</li>
                  <li>Items must be in original, unopened packaging and in resalable condition</li>
                  <li>Opened ink and toner cartridges cannot be returned unless defective</li>
                  <li>Custom-configured or special-order items may not be eligible for return</li>
                  <li>Return shipping costs are the responsibility of the customer unless the return is due to our error or a defective product</li>
                </ul>
                <p className="mt-4">
                  <strong>Refund Process:</strong> Once we receive and inspect your return, we will process your refund within 5-7 business days. Refunds will be credited to the original payment method. Shipping charges are non-refundable unless the return is due to our error.
                </p>
                <p className="mt-4">
                  To initiate a return, please contact our team at info@printmegastore.com with your order number and reason for return.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4" data-testid="heading-warranty">Warranty Information</h2>
                <p>
                  Products sold by Print Mega Store are covered by the manufacturer's warranty. Warranty terms vary by product and manufacturer. We recommend reviewing the warranty information included with your product or on the manufacturer's website.
                </p>
                <p className="mt-4">
                  For warranty claims, you may need to contact the manufacturer directly. However, our team is happy to assist you with the warranty claim process and provide guidance.
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Print Mega Store does not provide additional warranties beyond manufacturer warranties unless explicitly stated</li>
                  <li>Extended warranty options may be available for certain products at checkout</li>
                  <li>Warranty does not cover damage caused by misuse, accidents, or unauthorized modifications</li>
                  <li>Keep your proof of purchase for warranty claims</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4" data-testid="heading-product-availability">Product Availability</h2>
                <p>
                  Product availability is subject to change without notice. While we strive to maintain accurate inventory information on our website, occasionally items may be out of stock or discontinued. If an item you ordered is unavailable, we will notify you promptly and offer alternatives or a full refund.
                </p>
                <p className="mt-4">
                  Pre-order items will be shipped when they become available. Estimated availability dates are provided when known but are subject to change based on manufacturer supply.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4" data-testid="heading-order-cancellation">Order Cancellation</h2>
                <p>
                  You may request to cancel your order before it has shipped by contacting our team immediately. Once an order has shipped, it cannot be cancelled but may be returned according to our Return Policy.
                </p>
                <p className="mt-4">
                  Print Mega Store reserves the right to cancel orders due to:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Pricing or product information errors</li>
                  <li>Product unavailability</li>
                  <li>Suspected fraudulent activity</li>
                  <li>Shipping address verification issues</li>
                  <li>Violation of our Terms of Service</li>
                </ul>
                <p className="mt-4">
                  If we cancel your order, you will receive a full refund to your original payment method.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4" data-testid="heading-risk-of-loss">Risk of Loss</h2>
                <p>
                  All items purchased from Print Mega Store are shipped pursuant to a shipment contract. The risk of loss and title for such items pass to you upon delivery of the items to the carrier. We are not responsible for any loss, damage, or delay once the package is in the carrier's possession.
                </p>
                <p className="mt-4">
                  If your package is lost or damaged during shipping, please contact our team. We will work with the carrier to resolve the issue and may file a claim on your behalf. For high-value orders, we recommend selecting shipping insurance at checkout.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4" data-testid="heading-international-orders">International Orders</h2>
                <p>
                  At this time, Print Mega Store ships only to addresses within the United States, including Puerto Rico and US territories. We do not ship to international destinations.
                </p>
                <p className="mt-4">
                  If you are located outside the United States and wish to purchase our products, please contact us at info@printmegastore.com to discuss potential options. Note that international shipping, if arranged, would be subject to customs duties, import taxes, and other fees which are the responsibility of the buyer.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4" data-testid="heading-contact-purchase">Contact Us</h2>
                <p>
                  If you have any questions about these Purchase Terms or need assistance with an order, please contact us at:
                </p>
                <p className="mt-4">
                  <strong>Email:</strong> info@printmegastore.com<br />
                  <strong>Phone:</strong> +1-567-323-0815<br />
                  <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM EST
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
