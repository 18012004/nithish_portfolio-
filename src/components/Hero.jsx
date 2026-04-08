import React from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Link } from 'react-scroll'
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi'

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-6"
    >
      {/* Animated grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8 text-sm text-indigo-300 border border-indigo-500/20"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight"
        >
          Hi, I'm{' '}
          <span className="gradient-text">Nithish Kumar B</span>
        </motion.h1>

        {/* Typing animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-slate-400 mb-6 h-10"
        >
          <TypeAnimation
            sequence={[
              'Software Developer',
              2000,
              'ML Enthusiast',
              2000,
              'Full-Stack Engineer',
              2000,
              'Problem Solver',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-indigo-400 font-semibold"
          />
        </motion.div>

        {/* CGPA badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="inline-flex items-center gap-2 glass rounded-lg px-5 py-2 mb-10 border border-violet-500/20"
        >
          <span className="text-violet-400 font-semibold text-sm">M.Tech Software Engineering</span>
          <span className="text-slate-500">|</span>
          <span className="text-cyan-400 font-bold">CGPA: 7.42</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <Link to="projects" smooth duration={600} offset={-70}>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(99,102,241,0.5)' }}
              whileTap={{ scale: 0.97 }}
              className="px-7 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-xl font-semibold text-white transition-all duration-200 cursor-pointer"
            >
              View Projects
            </motion.button>
          </Link>

          <motion.a
            href="https://drive.google.com/uc?export=download&id=1cYq9yshdJ0iazT3lnNCK5Irj7bU9AxSu"
            download
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-7 py-3 glass border border-indigo-500/30 rounded-xl font-semibold text-indigo-300 hover:text-white hover:border-indigo-400 transition-all duration-200 flex items-center gap-2"
          >
            <FiDownload size={16} />
            Download Resume
          </motion.a>

          <Link to="contact" smooth duration={600} offset={-70}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-7 py-3 glass border border-cyan-500/30 rounded-xl font-semibold text-cyan-300 hover:text-white hover:border-cyan-400 transition-all duration-200 cursor-pointer"
            >
              Contact Me
            </motion.button>
          </Link>
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center gap-5"
        >
          {[
            { icon: <FiGithub size={22} />, href: 'https://github.com/18012004', label: 'GitHub' },
            { icon: <FiLinkedin size={22} />, href: 'https://www.linkedin.com/in/nithish-kumar-b-2a4949239', label: 'LinkedIn' },
            { icon: <FiMail size={22} />, href: 'mailto:nithishkumarb18@gmail.com', label: 'Email' },
          ].map(({ icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="w-11 h-11 glass rounded-xl flex items-center justify-center text-slate-400 hover:text-indigo-400 border border-white/10 hover:border-indigo-500/40 transition-all duration-200"
            >
              {icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 rounded-full border-2 border-indigo-500/40 flex items-start justify-center pt-2"
          >
            <div className="w-1 h-2 rounded-full bg-indigo-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
