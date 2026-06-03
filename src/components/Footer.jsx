import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

function Footer({ activeSection }){

    const currentYear = new Date().getFullYear();
    return (
    <footer className="bg-gradient-to-b from-[#3d3028] to-[#2d2520] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-3" style={{ fontWeight: 700 }}>
              Sneha Rajput
            </h3>
            <p className="text-[#d4b5a0] text-sm" style={{ fontWeight: 400 }}>
              Full Stack Developer crafting beautiful digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ fontWeight: 600 }}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {['About', 'Projects', 'Experience', 'Contact'].map((link) => (
                <li key={link}>
                  <motion.a
                    whileHover={{ x: 5 }}
                    href={`#${link.toLowerCase()}`}
                    className={`text-sm transition-colors ${
                    activeSection === link.toLowerCase()
                      ? "text-white font-semibold"
                      : "text-[#d4b5a0] hover:text-white"
                    }`}
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ fontWeight: 600 }}>
              Services
            </h4>
            <ul className="space-y-2 text-[#d4b5a0] text-sm">
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>Mobile Apps</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#5d4d42] my-8" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#d4b5a0]">
          <p className="flex items-center gap-2">
            © {currentYear} Sneha Rajput. All rights reserved.
          </p>
          <p className="flex items-center gap-2">
            Made with <FaHeart className="w-4 h-4 text-[#e8c4b5] fill-current" /> and lots of coffee
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;