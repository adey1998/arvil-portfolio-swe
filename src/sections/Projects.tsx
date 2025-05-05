"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Syncro – Remote Productivity API",
    description: "Enterprise-grade Spring Boot backend with JWT auth, Docker, and CI/CD deployment.",
    link: "/projects/syncro",
  },
  {
    title: "AI Symptom Tracker",
    description: "AI-powered women's health app using wearable data and voice journaling.",
    link: "#",
  },
  {
    title: "Bela Mental Health Platform",
    description: "Compassionate mental health SaaS with LLM integrations and passive check-ins.",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-black text-white py-20 px-6 scroll-mt-24"
    >
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-poppins font-extrabold mb-4">Projects</h2>
        <p className="text-gray-400 text-lg font-inter">
          A few highlights of what I’ve built recently.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-[#111827] rounded-xl p-6 shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105 border border-gray-800 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-poppins font-semibold mb-2 text-white">
              {project.title}
            </h3>
            <p className="text-gray-400 mb-4 font-inter">{project.description}</p>
            <a
              href={project.link}
              className="inline-block text-blue-500 font-poppins font-semibold px-8 py-3 rounded-full border-blue-500 text-blue-500 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white group-hover:scale-105 group-hover:shadow-2xl backdrop-blur transition-all duration-300 ease-in-out"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
