import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Glowe E-Commerce",
      description:
        "A full-stack e-commerce platform featuring product browsing, cart management, authentication, secure checkout, and an admin dashboard for managing products and orders.",
      image: "/images/glowe-ecommerce.png",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/sneharajput0213/glowe-ecommerce",
      live: "https://glowe-ecommerce.vercel.app/",
      gradient: "from-[#f0ebe5] to-[#e8d5c4]",
    },
    {
      id: 2,
      title: "AI Career & Resume Analyzer",
      description:
        "An AI-powered platform that analyzes resumes, provides ATS scores, suggests suitable job roles, identifies skill gaps, and verifies GitHub profiles for recruiters.",
      image: "/images/resume-analyzer.png",
      tags: ["React", "Node.js", "MongoDB", "Groq AI"],
      github: "https://github.com/sneharajput0213/resume-analyzer",
      live: "https://resume-analyzer-app-rho.vercel.app/",
      gradient: "from-[#e8c4b5] to-[#f5e5d8]",
    },
    {
      id: 3,
      title: "Smart Budget Tracker",
      description:
        "A personal finance management application that helps users track expenses, monitor income, categorize transactions, and gain insights into spending habits.",
      image: "/images/smart-budget.png",
      tags: ["React", "JavaScript", "Local Storage"],
      github: "https://github.com/sneharajput0213/smart-budget-tracker",
      live: "https://smart-budgets.vercel.app/",
      gradient: "from-[#d4b5a0] to-[#e8d5c4]",
    },
    {
      id: 4,
      title: "Smart Helmet",
      description:
        "An IoT-based smart helmet developed as a final-year engineering project, designed to improve rider safety through sensor integration and accident detection features.",
      image: "/images/smart-helmet.png",
      tags: ["IoT", "Embedded Systems", "Arduino"],
      github: "#",
      live: "",
      gradient: "from-[#c9a98b] to-[#f0d5c4]",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-5xl font-bold text-[#3d3028] mb-4"
            style={{ fontWeight: 700 }}
          >
            Featured Projects
          </h2>

          <p
            className="text-lg text-[#7a6858] max-w-2xl mx-auto"
            style={{ fontWeight: 400 }}
          >
            A collection of my recent work, showcasing my passion for creating
            beautiful and functional web experiences.
          </p>

          <div className="w-20 h-1 bg-gradient-to-r from-[#d4b5a0] to-[#c9a98b] rounded-full mx-auto mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg border border-[#e8d5c4]/40 hover:shadow-2xl transition-all duration-300">
                <div className="relative h-56 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />

                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center gap-4`}
                  >
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer"
                        >
                          <FaExternalLinkAlt className="w-5 h-5 text-[#3d3028]" />
                        </motion.div>
                      </a>
                    )}

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer"
                      >
                        <FaGithub className="w-5 h-5 text-[#3d3028]" />
                      </motion.div>
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <h3
                    className="text-xl font-semibold text-[#3d3028] mb-3"
                    style={{ fontWeight: 600 }}
                  >
                    {project.title}
                  </h3>

                  <p
                    className="text-sm text-[#7a6858] mb-4"
                    style={{ fontWeight: 400 }}
                  >
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gradient-to-r from-[#f0ebe5] to-[#e8d5c4] text-[#5d4d42] text-xs rounded-full border border-[#d4b5a0]/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-[#3d3028] text-white rounded-lg text-sm hover:opacity-90 transition"
                      >
                        Live Demo
                      </a>
                    )}

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-[#3d3028] text-[#3d3028] rounded-lg text-sm hover:bg-[#3d3028] hover:text-white transition"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>

              <div className="absolute -inset-1 bg-gradient-to-br from-[#d4b5a0]/20 to-[#e8d5c4]/20 rounded-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;