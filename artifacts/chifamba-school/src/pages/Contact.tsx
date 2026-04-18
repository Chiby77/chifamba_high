import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            We'd love to hear from you. Get in touch with our admissions office or administration.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-1/3"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full shrink-0">
                    <MapPin className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Location</h3>
                    <p className="text-gray-600">
                      Hama Village, Ward 12<br />
                      Chief Bepura, Guruve<br />
                      Box 320, Guruve
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full shrink-0">
                    <Phone className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                    <p className="text-gray-600">+263 785 068 291</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full shrink-0">
                    <Mail className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-600">chifambahigh2023@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full shrink-0">
                    <Clock className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Office Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 7:30 AM - 4:30 PM<br />
                      Weekend: Closed
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-2/3"
            >
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">First Name</label>
                      <Input placeholder="John" className="bg-gray-50" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Last Name</label>
                      <Input placeholder="Doe" className="bg-gray-50" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Email Address</label>
                    <Input type="email" placeholder="john@example.com" className="bg-gray-50" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Subject</label>
                    <Input placeholder="Admissions Inquiry" className="bg-gray-50" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Message</label>
                    <Textarea placeholder="How can we help you?" className="min-h-[150px] bg-gray-50" />
                  </div>
                  
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg rounded-xl">
                    <Send className="mr-2 h-5 w-5" /> Send Message
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
