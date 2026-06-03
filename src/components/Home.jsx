import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

function Home(){
    const motionVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    };
    return(
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#f5f1eb] via-[#faf8f5] to-[#f0ebe5]">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-[#d4b5a0]/40 to-[#e8d5c4]/40 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-[#c9a98b]/40 to-[#f0d5c4]/40 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-to-br from-[#e8c4b5]/30 to-[#f5e5d8]/30 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <span className="text-[#8b7568] tracking-wider uppercase text-sm font-medium">
            Welcome to my portfolio
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-bold text-[#3d3028] mb-6 tracking-tight"
          style={{ fontWeight: 700 }}
        >
          Sneha Rajput
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-xl md:text-2xl text-[#7a6858] mb-12 max-w-3xl mx-auto"
          style={{ fontWeight: 400 }}
        >
          Full Stack Developer | React | Node.js
        </motion.p>

        <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
  className="flex flex-col sm:flex-row items-center justify-center gap-4"
>
  <motion.button
    onClick={() =>
      document.getElementById("projects")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.95 }}
    className="px-8 py-4 bg-[#3d3028] text-[#faf8f5] rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow flex items-center gap-2 cursor-pointer"
  >
    View My Work
    <FaArrowRight className="w-5 h-5" />
  </motion.button>

  <motion.button
    onClick={() =>
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.95 }}
    className="px-8 py-4 bg-white/60 backdrop-blur-md text-[#3d3028] rounded-full font-medium border-2 border-[#d4b5a0]/40 hover:border-[#d4b5a0]/60 transition-colors shadow-md cursor-pointer"
  >
    Contact Me
  </motion.button>
</motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1.2, duration: 0.8 },
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-[#a68a7a] rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-1.5 bg-[#a68a7a] rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
    )
}

export default Home;