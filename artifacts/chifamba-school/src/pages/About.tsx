import { motion } from "framer-motion";
import { BookOpen, Target, Eye, Shield } from "lucide-react";

export default function About() {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Chifamba High</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            A legacy of excellence, building the leaders of tomorrow since 1984.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-2/3">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our History</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Founded in 1984, Chifamba High School was established to serve the community of Guruve and surrounding areas with high-quality education. What started as a modest rural day school has grown into a premier educational institution, now offering premium boarding facilities for 100 students alongside our robust day-scholar program.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Located in the serene environment of Hama Village, under Chief Bepura, the school provides an ideal, distraction-free environment for academic focus. Our motto, "Better build a child than repair a man," drives everything we do. We believe in holistic education that shapes character alongside intellect.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Message from the Headmaster</h2>
                <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-accent italic text-gray-700 relative">
                  <span className="text-6xl text-primary/10 absolute top-4 left-4 font-serif">"</span>
                  <p className="relative z-10 text-lg">
                    Welcome to Chifamba High School. Here, we don't just teach syllabus material; we cultivate critical thinkers, innovative problem solvers, and responsible citizens. Our three Secretary's Bells awards stand as a testament to our unwavering commitment to academic and holistic excellence. We invite you to partner with us in shaping your child's future.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3">
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <Target className="text-primary w-12 h-12 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
                  <p className="text-gray-600">
                    To provide inclusive, high-quality education that empowers learners with academic knowledge, practical skills, and strong moral values to thrive in a dynamic global society.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <Eye className="text-primary w-12 h-12 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
                  <p className="text-gray-600">
                    To be the leading educational institution in Zimbabwe, recognized for producing well-rounded, innovative, and principled leaders.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-md">
                  <Shield className="text-primary w-12 h-12 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Core Values</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-accent"></div> Excellence</li>
                    <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-accent"></div> Integrity</li>
                    <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-accent"></div> Hard Work</li>
                    <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-accent"></div> Discipline</li>
                    <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-accent"></div> Community</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
