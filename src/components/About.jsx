import { motion } from "framer-motion";
import { FaJsSquare, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiExpress } from "react-icons/si";

function About(){
    const skills = [
  { name: "MongoDB", icon: SiMongodb },
  { name: "TailwindCSS", icon: SiTailwindcss },
  { name: "JavaScript", icon: FaJsSquare },
  { name: "React", icon: FaReact },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express", icon: SiExpress },
];

    return(
        <section id="about" className="py-24 px-6 bg-gradient-to-b from-[#faf8f5] to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-[#3d3028] mb-4" style={{ fontWeight: 700 }}>
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#d4b5a0] to-[#c9a98b] rounded-full mx-auto" />
        </motion.div>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Glassmorphism background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#f0ebe5]/60 to-[#e8d5c4]/60 backdrop-blur-sm rounded-3xl transform rotate-3" />
              
              {/* Image container */}
              <div className="relative bg-white/40 backdrop-blur-md p-3 rounded-3xl shadow-2xl border border-white/60">
                <img
                  src="/images/sneha.jpeg"
                  alt="Sneha Rajput"
                  className="w-full h-96 rounded-2xl object-cover shadow-lg"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-[#e8c4b5]/40 to-[#f5e5d8]/40 rounded-full blur-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-[#d4b5a0]/40 to-[#e8d5c4]/40 rounded-full blur-2xl -z-10" />
            </div>
          </motion.div>

          {/* Bio and Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-[#5d4d42] leading-relaxed mb-6" style={{ fontWeight: 400 }}>
              Hi! I'm Sneha, a passionate MERN Stack Developer who enjoys building modern, responsive, and user-friendly web applications. 
              I love turning ideas into real-world projects and continuously exploring new technologies to improve my skills as a developer.
            </p>
            <p className="text-lg text-[#5d4d42] leading-relaxed mb-8" style={{ fontWeight: 400 }}>
              I work mainly with MongoDB, Express.js, React, and Node.js, along with JavaScript, HTML, and CSS. 
              I enjoy creating clean UI designs, developing full-stack applications, and solving problems through code. 
              As a recent B.Sc IT graduate, I’m actively working on projects that strengthen both my frontend and backend development skills.
            </p>

            {/* Skills */}
            <div>
              <h3 className="text-xl font-semibold text-[#3d3028] mb-4" style={{ fontWeight: 600 }}>
                Skills & Expertise
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="bg-white/60 backdrop-blur-sm px-4 py-3 rounded-2xl border border-[#e8d5c4]/60 shadow-sm hover:shadow-md transition-shadow flex items-center gap-3"
                  >
                    <skill.icon className="w-5 h-5 text-[#a68a7a]" />
                    <span className="text-sm font-medium text-[#3d3028]">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    )
}

export default About;