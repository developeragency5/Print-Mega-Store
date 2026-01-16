import { forwardRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, Clock, MessageCircle, Headphones, HelpCircle, CheckCircle } from "lucide-react";

const SimpleTextarea = forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={`flex min-h-[140px] w-full rounded-lg border border-input bg-background px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none ${className}`}
        {...props}
      />
    );
  }
);
SimpleTextarea.displayName = "SimpleTextarea";

export default function Contact() {
  const [showSuccess, setShowSuccess] = useState(false);
  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: InsertContactMessage) {
    form.reset();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
  }

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6 text-white" />,
      color: "from-blue-500 to-blue-600",
      title: "Call Us",
      subtitle: "Mon-Fri from 9am to 6pm EST",
      content: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: <Mail className="w-6 h-6 text-white" />,
      color: "from-green-500 to-green-600",
      title: "Email Us",
      subtitle: "We'll respond within 24 hours",
      content: "info@printmegastore.com",
      href: "mailto:info@printmegastore.com"
    },
    {
      icon: <MapPin className="w-6 h-6 text-white" />,
      color: "from-purple-500 to-purple-600",
      title: "Our Location",
      subtitle: "United States",
      content: "123 Printer Avenue, Tech District, NY 10001",
      href: "#"
    }
  ];

  const helpTopics = [
    {
      icon: <HelpCircle className="w-6 h-6 text-white" />,
      color: "from-orange-500 to-orange-600",
      title: "Product Questions",
      desc: "Need help choosing the right printer? Our team can help you find the perfect match for your needs."
    },
    {
      icon: <Headphones className="w-6 h-6 text-white" />,
      color: "from-pink-500 to-pink-600",
      title: "Order Inquiries",
      desc: "Questions about your order, shipping, or delivery? We're here to help track and resolve any issues."
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-white" />,
      color: "from-indigo-500 to-indigo-600",
      title: "General Questions",
      desc: "Have any other questions? Feel free to reach out and we'll be happy to help."
    },
    {
      icon: <Clock className="w-6 h-6 text-white" />,
      color: "from-teal-500 to-teal-600",
      title: "Business Inquiries",
      desc: "Looking for bulk orders or business partnerships? Contact us for special pricing and solutions."
    }
  ];

  return (
    <div className="flex flex-col">
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <span className="inline-block text-[#33cccc] font-semibold text-sm uppercase tracking-wider mb-4">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-black" data-testid="heading-contact">
              Contact Us
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Have questions about a product or need assistance? Our dedicated team is here to help you find the perfect printing solution.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="bg-white rounded-lg border border-gray-200 p-6 max-w-2xl mx-auto mb-12"
          >
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <h3 className="font-bold text-black text-sm mb-1">Business Name</h3>
                <p className="text-gray-600 text-sm">Print Mega Store</p>
              </div>
              <div>
                <h3 className="font-bold text-black text-sm mb-1">Email</h3>
                <a href="mailto:info@printmegastore.com" className="text-[#33cccc] text-sm hover:underline">info@printmegastore.com</a>
              </div>
              <div>
                <h3 className="font-bold text-black text-sm mb-1">Phone</h3>
                <a href="tel:+15551234567" className="text-[#33cccc] text-sm hover:underline">+1 (555) 123-4567</a>
              </div>
            </div>
            <div className="border-t border-gray-100 mt-4 pt-4 text-center">
              <h3 className="font-bold text-black text-sm mb-1">Mailing Address</h3>
              <p className="text-gray-600 text-sm">123 Printer Avenue, Tech District, NY 10001, United States</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto mb-20">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-black mb-6">Contact Information</h2>
              
              {contactMethods.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{
                    y: -4,
                    boxShadow: "0 10px 30px rgba(55, 175, 225, 0.12)",
                  }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-lg border border-gray-200 p-6 flex items-start gap-5 cursor-pointer"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shrink-0 shadow-lg`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-black mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-500 mb-2">{item.subtitle}</p>
                    <a 
                      href={item.href} 
                      className="text-[#33cccc] hover:underline font-medium"
                      data-testid={`link-contact-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {item.content}
                    </a>
                  </div>
                </motion.div>
              ))}

              <div className="bg-gradient-to-br from-[#33cccc]/10 to-[#33cccc]/5 rounded-lg p-6 border border-[#33cccc]/20 mt-8">
                <h3 className="font-bold text-black mb-3">Business Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <p className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-medium">9:00 AM - 6:00 PM EST</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-medium">10:00 AM - 4:00 PM EST</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                {showSuccess ? (
                  <div className="p-8 md:p-12">
                    <div className="text-center py-8">
                      <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                        <CheckCircle className="w-10 h-10 text-white" />
                      </div>
                      <h2 className="text-3xl font-extrabold text-black mb-4">Message Sent!</h2>
                      <p className="text-gray-600 text-lg mb-6 max-w-md mx-auto">
                        Thank you for reaching out. Our team will review your message and get back to you within 24 hours.
                      </p>
                      <div className="bg-gradient-to-br from-[#33cccc]/10 to-[#33cccc]/5 rounded-lg p-6 border border-[#33cccc]/20 max-w-sm mx-auto">
                        <p className="text-sm text-gray-600 mb-2">In the meantime, feel free to:</p>
                        <ul className="text-sm text-gray-700 space-y-2">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Browse our product catalog
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Check out our latest deals
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Read our FAQ section below
                          </li>
                        </ul>
                      </div>
                      <Button 
                        onClick={() => setShowSuccess(false)}
                        className="mt-8"
                        data-testid="button-send-another"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="p-6 bg-gradient-to-br from-[#33cccc] to-[#29a3a3]">
                      <h2 className="text-xl font-bold text-white flex items-center gap-3">
                        <Send className="w-5 h-5" />
                        Send us a Message
                      </h2>
                      <p className="text-white/80 mt-1 text-sm">Fill out the form below and we'll get back to you soon.</p>
                    </div>
                    <div className="p-8">
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-sm font-medium">Full Name</FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder="John Doe" 
                                    className="h-12 rounded-lg" 
                                    data-testid="input-name"
                                    {...field} 
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-sm font-medium">Email Address</FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder="john@example.com" 
                                    type="email" 
                                    className="h-12 rounded-lg"
                                    data-testid="input-email"
                                    {...field} 
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-sm font-medium">Your Message</FormLabel>
                                <FormControl>
                                  <SimpleTextarea 
                                    placeholder="How can we help you? Tell us about your printing needs..." 
                                    data-testid="input-message"
                                    {...field} 
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <Button 
                            type="submit" 
                            className="w-full h-12 text-base font-semibold rounded-lg"
                            data-testid="button-submit-contact"
                          >
                            Send Message
                          </Button>
                        </form>
                      </Form>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block text-[#33cccc] font-semibold text-sm uppercase tracking-wider mb-4">
              How We Can Help
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-black">
              How Can We Help?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Whether you need help choosing the right printer or have questions about your order, we're here for you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {helpTopics.map((topic, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 40px rgba(55, 175, 225, 0.15)",
                }}
                className="bg-gray-50 rounded-lg border border-gray-200 p-6 text-center cursor-pointer"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${topic.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  {topic.icon}
                </div>
                <h3 className="font-bold text-lg text-black mb-2">{topic.title}</h3>
                <p className="text-sm text-gray-600">{topic.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block text-[#33cccc] font-semibold text-sm uppercase tracking-wider mb-4">
              FAQ
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-black">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg">Quick answers to common questions</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg border border-gray-200 p-8 md:p-12">
              <div className="space-y-6">
                {[
                  {
                    q: "What are your shipping options?",
                    a: "We offer Standard Shipping (5-7 business days), Expedited Shipping (3-5 business days), and Express Shipping (1-2 business days). Free standard shipping on orders over $50."
                  },
                  {
                    q: "What is your return policy?",
                    a: "We offer a 30-day return policy on most items. Products must be in original packaging and unused condition. Contact us to initiate a return."
                  },
                  {
                    q: "Do you offer warranty on products?",
                    a: "All products come with manufacturer warranties. Warranty duration varies by product. Check the product details or contact us for specific warranty information."
                  },
                  {
                    q: "How can I track my order?",
                    a: "Once your order ships, you'll receive a confirmation email with tracking information. You can also track your order by signing into your account."
                  }
                ].map((faq, i) => (
                  <div key={i} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                    <h3 className="font-bold text-black mb-2">{faq.q}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>

              <div className="text-center mt-8 pt-6 border-t border-gray-100">
                <p className="text-gray-600 mb-4">Still have questions?</p>
                <Button asChild>
                  <a href="mailto:info@printmegastore.com">
                    Email Us Directly
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
