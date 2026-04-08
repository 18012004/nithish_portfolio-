import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-scroll'
import { FiMenu, FiX } from 'react-icons/fi'

const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.span
          className="text-xl font-bold gradient-text cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          NK.
        </motion.span>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link}>
              <Link
                to={link.toLowerCase()}
                smooth
                duration={600}
                offset={-70}
                className="text-slate-300 hover:text-indigo-400 cursor-pointer transition-colors duration-200 text-sm font-medium"
                activeClass="text-indigo-400"
                spy
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-slate-300 hover:text-indigo-400 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/10"
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <li key={link}>
                  <Link
                    to={link.toLowerCase()}
                    smooth
                    duration={600}
                    offset={-70}
                    className="text-slate-300 hover:text-indigo-400 cursor-pointer transition-colors text-sm font-medium"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
