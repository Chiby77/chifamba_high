import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Poultry & Piggery",
    description: "Students manage the full lifecycle of poultry and pigs. This project not only teaches animal husbandry but also agricultural economics and business management. The produce sustains the boarding dining hall.",
    image: "/images/farming.jpg"
  },
  {
    title: "Goatry & Cattle",
    description: "Our livestock management program gives students hands-on experience in raising cattle and goats. Students learn veterinary basics, pasture management, and sustainable livestock farming tailored to the Guruve climate.",
    image: "/images/practical.jpg"
  },
  {
    title: "Agriculture & Vegetable Gardens",
    description: "Extensive vegetable gardens are maintained year-round. Students learn crop rotation, irrigation techniques, pest control, and soil conservation. This ensures fresh produce for our students while teaching vital food security skills.",
    image: "/images/farming.jpg"
  },
  {
    title: "Woodwork & Metalwork",
    description: "Our fully equipped workshops allow students to design and construct furniture and metal structures. Many of the desks and benches used in the school are proudly manufactured by our technical students.",
    image: "/images/practical.jpg"
  }
];

export default function Projects() {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Practical Projects</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Education that works. Equipping students with tangible skills for life and industry.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {projects.map((project, idx) => (
              <div key={idx} className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
                <motion.div 
                  initial={{ opacity: 0, x: idx % 2 === 1 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="w-full md:w-1/2"
                >
                  <div className="rounded-2xl overflow-hidden shadow-2xl h-[400px]">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: idx % 2 === 1 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="w-full md:w-1/2"
                >
                  <h2 className="text-3xl font-bold text-primary mb-6">{project.title}</h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    {project.description}
                  </p>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white rounded-full px-8">
                    Learn More
                  </Button>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
