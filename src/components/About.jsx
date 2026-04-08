import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiCode, FiCpu, FiLayers } from 'react-icons/fi'

const stats = [
  { label: 'CGPA', value: '7.42', icon: <FiLayers size={20} /> },
  { label: 'Projects', value: '3+', icon: <FiCode size={20} /> },
  { label: 'Tech Stack', value: '10+', icon: <FiCpu size={20} /> },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-2">Get to know me</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Avatar / visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 rounded-2xl glass border border-indigo-500/20 flex items-center justify-center overflow-hidden glow">
                <div className="text-8xl font-black gradient-text select-none">NK</div>
              </div>
              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -top-4 -right-4 glass border border-violet-500/30 rounded-xl px-3 py-2 text-xs text-violet-300 font-semibold"
              >
                M.Tech SE
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 3.5 }}
                className="absolute -bottom-4 -left-4 glass border border-cyan-500/30 rounded-xl px-3 py-2 text-xs text-cyan-300 font-semibold"
              >
                Tamil Nadu, India
              </motion.div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-slate-300 leading-relaxed text-base mb-8">
              I am a final-year M.Tech Software Engineering student with a strong interest in software development
              and machine learning, currently maintaining a CGPA of 7.42. I have hands-on experience in building
              full-stack web applications using technologies like React, Flask, and MongoDB, along with developing
              intelligent systems using machine learning models.
            </p>
            <p className="text-slate-300 leading-relaxed text-base mb-8">
              My final-year project focuses on smart inventory optimization using time-series forecasting techniques
              such as ARIMA, SARIMA, and Holt-Winters, achieving high prediction accuracy. I am passionate about
              creating efficient, scalable, and user-friendly solutions, and I continuously strive to enhance my
              technical and problem-solving skills.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map(({ label, value, icon }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="glass border border-white/10 rounded-xl p-4 text-center glow-hover"
                >
                  <div className="text-indigo-400 flex justify-center mb-2">{icon}</div>
                  <div className="text-2xl font-bold gradient-text">{value}</div>
                  <div className="text-xs text-slate-400 mt-1">{label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
