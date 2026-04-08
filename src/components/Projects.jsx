import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiGithub, FiExternalLink, FiStar } from 'react-icons/fi'

const projects = [
  {
    id: 1,
    title: 'Smart Inventory Optimization System',
    description:
      'AI-powered inventory forecasting system using ARIMA, SARIMA, and Holt-Winters models with 90–95% accuracy. Includes interactive dashboard, smart alerts, and role-based access control.',
    tech: ['React', 'Flask', 'MongoDB', 'Python'],
    featured: true,
    color: 'from-indigo-500 via-violet-500 to-purple-600',
    icon: '📦',
    github: 'https://github.com/18012004',
  },
  {
    id: 2,
    title: 'Bicycle Renting System (UI/UX Design)',
    description:
      'Designed a user-friendly mobile application interface using Figma for renting bicycles in a college campus. Includes real-time availability, bicycle details, and seamless booking experience.',
    tech: ['Figma'],
    featured: false,
    color: 'from-cyan-500 to-blue-600',
    icon: '🚲',
    github: 'https://github.com/18012004',
  },
  {
    id: 3,
    title: 'Secure Medical Report Transmission',
    description:
      'Developed a secure system using AES cryptography and LSB steganography to safely transmit medical data within images.',
    tech: ['Python'],
    featured: false,
    color: 'from-emerald-500 to-teal-600',
    icon: '🔐',
    github: 'https://github.com/18012004',
  },
]

function TechBadge({ tech }) {
  return (
    <span className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-slate-300 border border-white/10 font-medium">
      {tech}
    </span>
  )
}

function ProjectCard({ project, delay, inView }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={`relative glass border rounded-2xl overflow-hidden glow-hover transition-all duration-300 ${
        project.featured
          ? 'border-indigo-500/40 md:col-span-2'
          : 'border-white/10'
      }`}
    >
      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 z-10 flex items-center gap-1 bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-xs font-bold px-3 py-1 rounded-full">
          <FiStar size={11} />
          Featured
        </div>
      )}

      {/* Gradient top bar */}
      <div className={`h-1 w-full bg-gradient-to-r ${project.color}`} />

      <div className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <span className="text-4xl">{project.icon}</span>
          <div>
            <h3 className="text-lg font-bold text-white mb-1">{project.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((t) => (
            <TechBadge key={t} tech={t} />
          ))}
        </div>

        <div className="flex gap-3">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-sm text-slate-300 hover:text-indigo-400 glass border border-white/10 hover:border-indigo-500/40 px-4 py-2 rounded-lg transition-all duration-200"
          >
            <FiGithub size={15} />
            Code
          </motion.a>
        </div>
      </div>

      {/* Hover glow overlay */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-5 pointer-events-none`}
          />
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-2">What I've built</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            My <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              delay={i * 0.15}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
