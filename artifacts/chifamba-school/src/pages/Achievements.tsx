import { motion } from "framer-motion";
import { Trophy, Award, Star, Medal } from "lucide-react";

const achievements = [
  {
    year: "2023",
    title: "BUSE Friendly School Award",
    description: "Recognized by Bindura University of Science Education for our outstanding contribution to STEM education and university preparedness.",
    icon: <Star className="text-accent w-8 h-8" />
  },
  {
    year: "2022",
    title: "Secretary's Bell Award",
    description: "Awarded our third Secretary's Bell for comprehensive excellence in academics, infrastructure development, and student discipline.",
    icon: <Award className="text-accent w-8 h-8" />
  },
  {
    year: "2019",
    title: "Provincial Sports Champions",
    description: "Mashonaland Central Provincial Champions in Athletics and Netball, demonstrating our commitment to holistic student development.",
    icon: <Trophy className="text-accent w-8 h-8" />
  },
  {
    year: "2015",
    title: "Secretary's Bell Award",
    description: "Our second Secretary's Bell, recognizing sustained academic improvement and community engagement.",
    icon: <Award className="text-accent w-8 h-8" />
  },
  {
    year: "2008",
    title: "Secretary's Bell Award",
    description: "Our first Secretary's Bell, marking Chifamba High as a beacon of excellence in Guruve District.",
    icon: <Award className="text-accent w-8 h-8" />
  }
];

export default function Achievements() {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/images/achievements.jpg" alt="Trophies" className="w-full h-full object-cover" />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Achievements</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            A tradition of excellence recognized at district, provincial, and national levels.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-12">
            {achievements.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-accent flex flex-col sm:flex-row gap-6 items-start"
              >
                <div className="bg-accent/10 p-4 rounded-full shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="flex items-center gap-4 mb-2">
                    <span className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-bold">
                      {item.year}
                    </span>
                    <h2 className="text-2xl font-bold text-gray-900">{item.title}</h2>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 bg-primary rounded-3xl p-10 text-center text-white shadow-xl">
            <Medal className="w-16 h-16 text-accent mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">A Legacy of Academic Excellence</h3>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Beyond these major awards, Chifamba High consistently achieves high pass rates at both O-Level and A-Level, placing our graduates in top universities across Zimbabwe and beyond.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
