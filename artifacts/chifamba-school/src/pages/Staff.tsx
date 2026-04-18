import { motion } from "framer-motion";

const staffDepartments = [
  {
    name: "Administration",
    members: [
      { name: "Mr. T. Mukanya", role: "Headmaster", image: "/images/staff_1.jpg" },
      { name: "Mrs. S. Dube", role: "Deputy Head", image: "/images/staff_2.jpg" },
    ]
  },
  {
    name: "Sciences & Mathematics",
    members: [
      { name: "Mr. K. Moyo", role: "HOD Sciences", image: "/images/staff_3.jpg" },
      { name: "Ms. R. Ndlovu", role: "Mathematics Teacher", image: "/images/staff_4.jpg" },
      { name: "Mr. J. Sibanda", role: "Physics Teacher", image: "/images/staff_5.jpg" },
    ]
  },
  {
    name: "Humanities & Languages",
    members: [
      { name: "Mrs. C. Chigumba", role: "HOD Languages", image: "/images/staff_6.jpg" },
      { name: "Mr. P. Zhou", role: "History Teacher", image: "/images/staff_1.jpg" },
      { name: "Ms. L. Banda", role: "English Teacher", image: "/images/staff_2.jpg" },
    ]
  },
  {
    name: "Practical Subjects",
    members: [
      { name: "Mr. E. Ncube", role: "Agriculture Teacher", image: "/images/staff_3.jpg" },
      { name: "Mr. W. Mutasa", role: "Woodwork Instructor", image: "/images/staff_4.jpg" },
    ]
  }
];

export default function Staff() {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Faculty</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Meet the 40+ dedicated professionals shaping the minds of tomorrow.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          {staffDepartments.map((dept, idx) => (
            <div key={idx} className="mb-16">
              <h2 className="text-2xl font-bold text-primary mb-8 border-b-2 border-accent inline-block pb-2">
                {dept.name}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {dept.members.map((member, mIdx) => (
                  <motion.div 
                    key={mIdx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: mIdx * 0.1 }}
                    className="bg-white rounded-xl overflow-hidden shadow-md group"
                  >
                    <div className="h-64 overflow-hidden relative">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                      <p className="text-secondary font-medium mt-1">{member.role}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
