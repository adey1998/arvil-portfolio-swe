"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    ShieldCheck,
    Dock,
    Github,
    Database,
    Layers,
} from "lucide-react";

export default function SyncroPage() {
    const techStack = [
        "Spring Boot",
        "JWT",
        "Docker",
        "PostgreSQL",
        "GitHub Actions",
        "JPA / Hibernate",
        "CI/CD",
        "Java 17",
    ];

    const features = [
        {
            icon: <ShieldCheck className="w-5 h-5 text-blue-400" />,
            text: "Secure JWT-based authentication with Spring Security",
        },
        {
            icon: <Dock className="w-5 h-5 text-blue-400" />,
            text: "Containerized with Docker for consistent deployment",
        },
        {
            icon: <Github className="w-5 h-5 text-blue-400" />,
            text: "CI/CD pipeline setup using GitHub Actions",
        },
        {
            icon: <Database className="w-5 h-5 text-blue-400" />,
            text: "PostgreSQL database with JPA/Hibernate ORM",
        },
        {
            icon: <Layers className="w-5 h-5 text-blue-400" />,
            text: "Modular codebase ready for microservice migration",
        },
    ];

    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-[#0a0f1a] text-white px-6 py-24"
        >
            <div className="max-w-5xl mx-auto space-y-16">
                {/* Sticky Back Button */}
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link
                        href="/#projects"
                        className="text-blue-400 hover:text-blue-300 transition font-inter text-sm"
                    >
                        ← Back to Projects
                    </Link>
                </motion.div>

                {/* Title and Description */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-poppins font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 drop-shadow-md">
                        Syncro – Remote Productivity API
                    </h1>
                    <p className="text-lg text-gray-300 font-inter">
                        An enterprise-grade Spring Boot backend designed for managing remote
                        team productivity — featuring secure authentication, Docker
                        deployment, CI/CD, and scalable architecture.
                    </p>
                </motion.div>

                {/* Tech Stack */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.1,
                            },
                        },
                    }}
                    className="relative rounded-xl backdrop-blur-md shadow-inner flex flex-wrap gap-3 font-inter"
                >
                    {techStack.map((tech, i) => (
                        <motion.span
                            key={i}
                            variants={{
                                hidden: { opacity: 0, y: 10 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            className="bg-blue-600/10 text-blue-400 px-3 py-1 rounded-full text-sm font-medium border border-blue-500/20"
                        >
                            {tech}
                        </motion.span>
                    ))}
                </motion.div>

                {/* Features */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-2xl font-poppins font-semibold mb-4">
                        Key Features
                    </h2>
                    <ul className="space-y-4 font-inter text-gray-300">
                        {features.map(({ icon, text }, i) => (
                            <li key={i} className="flex items-start gap-3">
                                {icon}
                                <span>{text}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* GitHub Link */}
                <motion.a
                    href="https://github.com/your-username/syncro"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="inline-block text-blue-500 font-poppins font-semibold px-8 py-3 rounded-full border border-blue-500 group hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:text-white hover:shadow-2xl backdrop-blur transition-all duration-300 ease-in-out"
                >
                    View Code on GitHub →
                </motion.a>

            </div>
        </motion.main>
    );
}
