import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import { useState } from "react";
import React from "react";
import emailjs from "@emailjs/browser";

function Contact(){
    const socialLinks = [
  { icon: FaGithub, label: 'GitHub', url: 'https://github.com/sneharajput0213', color: 'hover:bg-[#333]' },
  { icon: FaLinkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/sneha-rajput2/', color: 'hover:bg-[#0077b5]' },
  { icon: FaTwitter, label: 'Twitter', url: 'https://x.com/uknwsneha', color: 'hover:bg-[#1da1f2]' },
];

    const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await emailjs.send(
      "service_829tsu2",
      "template_d843las",
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      "eEuOJ6vGCB6KU6939"
    );

    alert("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  } catch (error) {
    console.error("EmailJS Error Status:", error.status);
console.error("EmailJS Error Text:", error.text);
console.error(error);
    alert("Failed to send message. Please try again.");
  }
};

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
    return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-br from-[#faf8f5] via-white to-[#f5f1eb] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#d4b5a0]/20 to-[#e8d5c4]/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-[#c9a98b]/20 to-[#f0d5c4]/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-[#3d3028] mb-4" style={{ fontWeight: 700 }}>
            Let's Work Together
          </h2>
          <p className="text-lg text-[#7a6858] max-w-2xl mx-auto" style={{ fontWeight: 400 }}>
            Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#d4b5a0] to-[#c9a98b] rounded-full mx-auto mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-[#3d3028] mb-6" style={{ fontWeight: 600 }}>
                Get in Touch
              </h3>
              
              <div className="space-y-4">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 text-[#5d4d42]"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#f0ebe5] to-[#e8d5c4] rounded-2xl flex items-center justify-center shadow-md">
                    <FaEnvelope className="w-5 h-5 text-[#a68a7a]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#8b7568] mb-1">Email</p>
                    <p className="font-medium">sneharajput0203@gmail.com</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 text-[#5d4d42]"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#e8c4b5] to-[#f5e5d8] rounded-2xl flex items-center justify-center shadow-md">
                    <FaPhone className="w-5 h-5 text-[#a68a7a]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#8b7568] mb-1">Phone</p>
                    <p className="font-medium">+91 7977031478</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 text-[#5d4d42]"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#d4b5a0] to-[#e8d5c4] rounded-2xl flex items-center justify-center shadow-md">
                    <FaMapMarkerAlt className="w-5 h-5 text-[#a68a7a]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#8b7568] mb-1">Location</p>
                    <p className="font-medium">Kalyan, Maharashtra</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-[#3d3028] mb-4" style={{ fontWeight: 600 }}>
                Connect With Me
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-white/60 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-md hover:shadow-lg transition-all border border-[#e8d5c4]/60 text-[#3d3028] hover:text-white"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-white/60 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-[#e8d5c4]/60">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#3d3028] mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/80 border border-[#e8d5c4] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#c9a98b] transition-all text-[#3d3028]"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#3d3028] mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/80 border border-[#e8d5c4] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#c9a98b] transition-all text-[#3d3028]"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#3d3028] mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-white/80 border border-[#e8d5c4] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#c9a98b] transition-all resize-none text-[#3d3028]"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-[#3d3028] to-[#5d4d42] text-white rounded-2xl font-medium shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  Send Message
                  <FaPaperPlane className="w-5 h-5" />
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;