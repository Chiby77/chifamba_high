import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { BookOpen, Users, Trophy, ChevronRight, Award, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero.jpg" 
            alt="Chifamba High School Students" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-primary/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-6">
              <Award size={18} className="text-accent" />
              <span className="font-medium tracking-wide">3-Time Secretary's Bells Winner</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
              Empowering the Future at <span className="text-accent">Chifamba High</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-10 font-light italic">
              "Better build a child than repair a man."
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/about">
                <Button size="lg" className="text-lg px-8 py-6 rounded-full bg-accent hover:bg-accent/90 text-primary w-full sm:w-auto">
                  Discover Our School
                </Button>
              </Link>
              <Link href="/portal">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full border-white text-primary hover:bg-white w-full sm:w-auto backdrop-blur-sm">
                  Student Portal
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16 relative z-20 -mt-10 mx-4 md:mx-auto md:w-[90%] rounded-2xl shadow-xl">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                <AnimatedCounter value={756} />
              </div>
              <p className="text-gray-600 font-medium">Enrolled Learners</p>
            </div>
            <div className="p-4 border-l border-gray-100">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                <AnimatedCounter value={40} suffix="+" />
              </div>
              <p className="text-gray-600 font-medium">Expert Teachers</p>
            </div>
            <div className="p-4 border-t md:border-t-0 md:border-l border-gray-100">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                <AnimatedCounter value={1984} />
              </div>
              <p className="text-gray-600 font-medium">Year Founded</p>
            </div>
            <div className="p-4 border-t md:border-t-0 md:border-l border-gray-100">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                <AnimatedCounter value={3} />
              </div>
              <p className="text-gray-600 font-medium">Secretary's Bells</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/10 rounded-2xl transform -rotate-3"></div>
                <img 
                  src="/images/about.jpg" 
                  alt="Modern African School" 
                  className="relative rounded-2xl shadow-2xl object-cover h-[500px] w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl flex items-center gap-4">
                  <div className="bg-accent/20 p-4 rounded-full">
                    <Trophy className="text-accent h-8 w-8" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Recognized as</p>
                    <p className="text-lg font-bold text-primary">BUSE Friendly School</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-3">Welcome to Chifamba</h2>
              <h3 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Academic Excellence Rooted in Zimbabwean Heritage
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Located in the heart of Hama Village, Guruve, Chifamba High School is a premier boarding and day institution dedicated to nurturing the next generation of leaders. 
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Since 1984, we have combined rigorous academic standards with practical skills development, ensuring our students are not just prepared for exams, but for life. Our state-of-the-art facilities and dedicated faculty create an environment where every child can thrive.
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {[
                  "100 Boarding Places Available",
                  "Comprehensive O & A Level",
                  "Extensive Practical Projects",
                  "Award-Winning Sports Teams"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="bg-primary/10 p-1 rounded-full text-primary">
                      <ChevronRight size={16} />
                    </div>
                    <span className="font-medium text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Link href="/about">
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg group">
                  Read Our History
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-3">Hands-On Learning</h2>
            <h3 className="text-4xl font-bold text-gray-900 mb-6">Practical Projects & Agriculture</h3>
            <p className="text-lg text-gray-600">
              We believe in education that goes beyond the classroom. Our students engage in real-world agricultural and technical projects that build essential life skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group rounded-2xl overflow-hidden relative h-[400px] shadow-lg cursor-pointer"
            >
              <img src="/images/farming.jpg" alt="Agriculture" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h4 className="text-2xl font-bold text-white mb-2">Agriculture & Farming</h4>
                <p className="text-gray-200 mb-4 line-clamp-2">Our extensive gardens and crop fields teach sustainable farming practices vital for Zimbabwe's future.</p>
                <span className="text-accent font-medium flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                  Explore Project <ChevronRight size={18} />
                </span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group rounded-2xl overflow-hidden relative h-[400px] shadow-lg cursor-pointer"
            >
              <img src="/images/practical.jpg" alt="Technical Skills" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h4 className="text-2xl font-bold text-white mb-2">Technical & Practical Skills</h4>
                <p className="text-gray-200 mb-4 line-clamp-2">From woodwork to metalwork, we equip students with tangible skills that translate directly to industry.</p>
                <span className="text-accent font-medium flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                  Explore Project <ChevronRight size={18} />
                </span>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Link href="/projects">
              <Button variant="outline" className="rounded-full px-8 py-6 text-lg border-2 hover:bg-primary hover:text-white">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Join the Chifamba Family</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Give your child the foundation they need to succeed. Enroll for the upcoming academic year today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-accent hover:bg-accent/90 text-primary text-lg px-8 py-6 rounded-full w-full sm:w-auto font-bold">
                Contact Admissions
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
