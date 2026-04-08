import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  FaPython, FaJava, FaReact, FaHtml5, FaCss3Alt, FaNodeJs,
  FaGitAlt, FaFigma, FaDatabase,
} from 'react-icons/fa'
import { SiMongodb, SiVscodium } from 'react-icons/si'
import { VscCode } from 'react-icons/vsc'

const skillGroups = [
  {
    category: 'Languages',
    color: 'from-indigo-500 to-violet-500',
    skills: [
      { name: 'Python', icon: <FaPython />, level: 85 },
      { name: 'Java', icon: <FaJava />, level: 75 },
    ],
  },
  {
    category: 'Frontend',
    color: 'from-cyan-500 to-blue-500',
    skills: [
      { name: 'React', icon: <FaReact />, level: 80 },
      { name: 'HTML5', icon: <FaHtml5 />, level: 90 },
      { name: 'CSS3', icon: <FaCss3Alt />, level: 85 },
      { name: 'Node.js', icon: <FaNodeJs />, level: 70 },
    ],
  },
  {
    category: 'Database',
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'MongoDB', icon: <SiMongodb />, level: 75 },
    ],
  },
  {
    category: 'Tools',
    color: 'from-orange-500 to-pink-500',
    skills: [
      { name: 'Git', icon: <FaGitAlt />, level: 80 },
      { name: 'Figma', icon: <FaFigma />, level: 70 },
      { name: 'VS Code', icon: <VscCode />, level: 90 },
    ],
  },
]

function SkillCard({ name, icon, level, delay, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05, y: -4 }}
      className="glass border border-white/10 rounded-xl p-4 glow-hover cursor-default"
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="text-2xl text-indigo-400">{icon}</span>
        <span className="text-sm font-semibold text-slate-200">{name}</span>
      </div>
      <div className="w-full bg-white/10 rounded-full h-1.5">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay: delay + 0.2 }}
          className="h-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
        />
      </div>
      <div className="text-right text-xs text-slate-500 mt-1">{level}%</div>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-2">What I work with</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            My <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        <div className="space-y-10">
          {skillGroups.map(({ category, color, skills }, gi) => (
            <div key={category}>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: gi * 0.1 }}
                className={`text-sm font-bold uppercase tracking-widest mb-4 bg-gradient-to-r ${color} bg-clip-text text-transparent`}
              >
                {category}
              </motion.h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {skills.map((skill, si) => (
                  <SkillCard
                    key={skill.name}
                    {...skill}
                    delay={gi * 0.1 + si * 0.08}
                    inView={inView}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
