import { motion } from "framer-motion";
import { FaBriefcase, FaCode, FaGraduationCap, FaAward } from "react-icons/fa";

function Experience(){
    const timeline = [
  {
    id: 1,
    type: "education",
    icon: FaGraduationCap,
    title: "BSC in Information Technology",
    organization: "K.M Agrawal College",
    period: "2023 - 2026",
    description:
      "Graduated with a degree in IT with a focus on software development, web technologies, and embedded systems.",
    color: "from-[#d4b5a0] to-[#c9a98b]",
  },

  {
    id: 2,
    type: "achievement",
    icon: FaAward,
    title: "Final Year Project - Smart Helmet",
    organization: "Academic Project",
    period: "2025 - 2026",
    description:
      "Developed an IoT-based smart helmet integrating sensors to improve rider safety and accident detection.",
    color: "from-[#e8c4b5] to-[#f5e5d8]",
  },

  {
    id: 3,
    type: "work",
    icon: FaCode,
    title: "MERN Stack Developer",
    organization: "Personal Projects",
    period: "2025 - Present",
    description:
      "Built full-stack applications including an AI Resume Analyzer, E-Commerce Platform, and Budget Tracker using React, Node.js, Express, and MongoDB.",
    color: "from-[#c9a98b] to-[#f0d5c4]",
  },

  {
    id: 4,
    type: "achievement",
    icon: FaBriefcase,
    title: "Open Source & Portfolio Development",
    organization: "Self Learning",
    period: "2025 - Present",
    description:
      "Actively improving web development skills through personal projects, GitHub contributions, and deployment of production-ready applications.",
    color: "from-[#f0ebe5] to-[#e8d5c4]",
  },
];
return(
    <section id="experience" className="py-24 px-6 bg-gradient-to-b from-white to-[#faf8f5]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-[#3d3028] mb-4" style={{ fontWeight: 700 }}>
            Experience & Education
          </h2>
          <p className="text-lg text-[#7a6858] max-w-2xl mx-auto" style={{ fontWeight: 400 }}>
            My professional journey and milestones that shaped my career.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#d4b5a0] to-[#c9a98b] rounded-full mx-auto mt-6" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#d4b5a0] via-[#c9a98b] to-[#e8d5c4]" />

          {/* Timeline items */}
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-row`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12 pl-20 md:pl-0' : 'md:pl-12 pl-20 md:pr-0'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -4 }}
                    className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-[#e8d5c4]/60 shadow-lg hover:shadow-xl transition-all"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-semibold text-[#3d3028] mb-1" style={{ fontWeight: 600 }}>
                          {item.title}
                        </h3>
                        <p className="text-sm font-medium text-[#a68a7a]" style={{ fontWeight: 500 }}>
                          {item.organization}
                        </p>
                      </div>
                      <span className="text-xs text-[#8b7568] bg-gradient-to-r from-[#f0ebe5] to-[#e8d5c4] px-3 py-1 rounded-full whitespace-nowrap">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-sm text-[#7a6858]" style={{ fontWeight: 400 }}>
                      {item.description}
                    </p>
                  </motion.div>
                </div>

                {/* Icon */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center shadow-lg border-4 border-white`}
                  >
                    <item.icon className="w-7 h-7 text-white" />
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
)
}

export default Experience;