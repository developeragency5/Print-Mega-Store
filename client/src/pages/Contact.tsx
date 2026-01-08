import { forwardRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import { useCreateContactMessage } from "@/hooks/use-contact";
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
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, Clock, MessageCircle, Headphones, HelpCircle } from "lucide-react";

const SimpleTextarea = forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={`flex min-h-[140px] w-full rounded-xl border border-input bg-background px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none ${className}`}
        {...props}
      />
    );
  }
);
SimpleTextarea.displayName = "SimpleTextarea";

export default function Contact() {
  const createMessage = useCreateContactMessage();
  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: InsertContactMessage) {
    createMessage.mutate(data, {
      onSuccess: () => form.reset(),
    });
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
    <div className="min-h-screen bg-gray-50">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#37AFE1] to-[#2d8bb8] mb-6">
              <Mail className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-4" data-testid="heading-contact">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions about a product or need assistance? Our dedicated team is here to help you find the perfect printing solution.
            </p>
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
                <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 flex items-start gap-5">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shrink-0 shadow-lg`}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-black mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-500 mb-2">{item.subtitle}</p>
                      <a 
                        href={item.href} 
                        className="text-[#37AFE1] hover:underline font-medium"
                        data-testid={`link-contact-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {item.content}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <div className="bg-gradient-to-br from-[#37AFE1]/10 to-[#37AFE1]/5 rounded-xl p-6 border border-[#37AFE1]/20 mt-8">
                <h3 className="font-bold text-black mb-2">Business Hours</h3>
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
              <Card className="shadow-xl border-0 rounded-3xl overflow-hidden">
                <div className="p-8 pb-4 bg-gradient-to-br from-[#37AFE1] to-[#2d8bb8]">
                  <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                    <Send className="w-6 h-6" />
                    Send us a Message
                  </h2>
                  <p className="text-white/80 mt-2">Fill out the form below and we'll get back to you soon.</p>
                </div>
                <CardContent className="p-8">
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
                                className="h-12 rounded-xl" 
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
                                className="h-12 rounded-xl"
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
                        className="w-full h-14 text-base font-semibold rounded-xl bg-gradient-to-r from-[#37AFE1] to-[#2d8bb8] hover:from-[#2d8bb8] hover:to-[#37AFE1] transition-all duration-300"
                        disabled={createMessage.isPending}
                        data-testid="button-submit-contact"
                      >
                        {createMessage.isPending ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-black mb-4">How Can We Help?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Whether you need help choosing the right printer or have questions about your order, we're here for you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {helpTopics.map((topic, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6 text-center">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${topic.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                        {topic.icon}
                      </div>
                      <h3 className="font-bold text-lg text-black mb-2">{topic.title}</h3>
                      <p className="text-sm text-gray-600">{topic.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-20 max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-2xl border border-gray-100 p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-black mb-2">Frequently Asked Questions</h2>
                <p className="text-gray-600">Quick answers to common questions</p>
              </div>
              
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
                    <h3 className="font-semibold text-black mb-2">{faq.q}</h3>
                    <p className="text-gray-600 text-sm">{faq.a}</p>
                  </div>
                ))}
              </div>

              <div className="text-center mt-8 pt-6 border-t border-gray-100">
                <p className="text-gray-600 mb-4">Still have questions?</p>
                <Button asChild className="bg-gradient-to-r from-[#37AFE1] to-[#2d8bb8] hover:from-[#2d8bb8] hover:to-[#37AFE1]">
                  <a href="mailto:info@printmegastore.com">
                    Email Us Directly
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
