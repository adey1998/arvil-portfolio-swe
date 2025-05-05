"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#0a0f1a] text-white py-20 px-6 scroll-mt-24"
    >
      <motion.div
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Left Column - Text */}
        <div>
          <h2 className="text-4xl font-extrabold mb-6 font-poppins text-gradient">About Me</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6 font-inter">
            I&apos;m <span className="text-white font-semibold">Arvil</span>, a Fullstack Developer with a background in enterprise engineering and a passion for building AI-integrated apps. I specialize in backend APIs with Java (Spring Boot) and frontend interfaces using React, Tailwind, and modern frameworks.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-6 font-inter">
            I&apos;m currently targeting Fullstack roles while preparing for a transition into a Sales Engineer role — combining deep technical insight with storytelling and user focus.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed font-inter">
            Beyond code, I&apos;m working on a women&apos;s health startup powered by AI. My mission is to make technology feel more human, inclusive, and impactful.
          </p>
        </div>

        {/* Right Column - Placeholder for Image / Illustration / Icon */}
        <div className="flex justify-center md:justify-end">
          <div className="w-64 h-64 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-lg border border-gray-700 flex items-center justify-center text-gray-500 font-inter transition-transform duration-300 transform hover:scale-105">
            {/* Replace with image if available */}
            <div className="text-2xl text-white">Your Photo or Logo</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
