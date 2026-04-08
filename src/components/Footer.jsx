import React from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'

const socials = [
  { icon: <FiGithub size={18} />, href: 'https://github.com/18012004', label: 'GitHub' },
  { icon: <FiLinkedin size={18} />, href: 'https://www.linkedin.com/in/nithish-kumar-b-2a4949239', label: 'LinkedIn' },
  { icon: <FiMail size={18} />, href: 'mailto:nithishkumarb18@gmail.com', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <span className="text-xl font-bold gradient-text">NK.</span>
          <p className="text-slate-500 text-xs mt-1">Nithish Kumar B · Tamil Nadu, India</p>
        </div>

        <div className="flex gap-4">
          {socials.map(({ icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-9 h-9 glass rounded-lg flex items-center justify-center text-slate-400 hover:text-indigo-400 border border-white/10 hover:border-indigo-500/40 transition-all duration-200"
            >
              {icon}
            </motion.a>
          ))}
        </div>

        <p className="text-slate-600 text-xs flex items-center gap-1">
          Built with <FiHeart size={12} className="text-red-500" /> using React & Tailwind
        </p>
      </div>
    </footer>
  )
}
