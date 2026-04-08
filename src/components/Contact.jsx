import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiMail, FiLinkedin, FiGithub, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi'
import emailjs from '@emailjs/browser'

// ── EmailJS config ──────────────────────────────────────────────
// 1. Sign up free at https://www.emailjs.com
// 2. Add a Gmail service → copy Service ID
// 3. Create a template with variables: {{from_name}}, {{from_email}}, {{message}}
// 4. Copy Template ID and Public Key
const EJS_SERVICE  = 'service_jbwwpt8'
const EJS_TEMPLATE = 'template_tieoenk'
const EJS_KEY      = 'mAg8IX19K1b-0n0fy'
// ────────────────────────────────────────────────────────────────

const contactInfo = [
  {
    icon: <FiMail size={20} />,
    label: 'Email',
    value: 'nithishkumarb18@gmail.com',
    href: 'mailto:nithishkumarb18@gmail.com',
    color: 'text-indigo-400',
  },
  {
    icon: <FiLinkedin size={20} />,
    label: 'LinkedIn',
    value: 'nithish-kumar-b',
    href: 'https://www.linkedin.com/in/nithish-kumar-b-2a4949239',
    color: 'text-blue-400',
  },
  {
    icon: <FiGithub size={20} />,
    label: 'GitHub',
    value: '18012004',
    href: 'https://github.com/18012004',
    color: 'text-violet-400',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.send(
        EJS_SERVICE,
        EJS_TEMPLATE,
        { from_name: form.name, from_email: form.email, message: form.message },
        EJS_KEY
      )
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 4000)
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section id="contact" className="px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-2">Let's talk</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-md mx-auto text-sm">
            I'm open to new opportunities and collaborations. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5"
          >
            <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
            {contactInfo.map(({ icon, label, value, href, color }, i) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                whileHover={{ x: 6 }}
                className="flex items-center gap-4 glass border border-white/10 hover:border-indigo-500/30 rounded-xl p-4 transition-all duration-200 group"
              >
                <div className={`${color} group-hover:scale-110 transition-transform`}>{icon}</div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">{label}</div>
                  <div className="text-slate-200 text-sm font-medium">{value}</div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="glass border border-white/10 rounded-2xl p-6 space-y-4"
          >
            <div>
              <label className="text-xs text-slate-400 font-medium mb-1.5 block" htmlFor="name">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full bg-white/5 border border-white/10 focus:border-indigo-500/60 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 outline-none transition-all duration-200"
              />
            </div>
            <div>
              <label className="text-xs text-slate-400 font-medium mb-1.5 block" htmlFor="email">
                Your Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full bg-white/5 border border-white/10 focus:border-indigo-500/60 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 outline-none transition-all duration-200"
              />
            </div>
            <div>
              <label className="text-xs text-slate-400 font-medium mb-1.5 block" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project or opportunity..."
                className="w-full bg-white/5 border border-white/10 focus:border-indigo-500/60 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 outline-none transition-all duration-200 resize-none"
              />
            </div>
            <motion.button
              type="submit"
              disabled={status === 'sending'}
              whileHover={{ scale: status === 'sending' ? 1 : 1.02, boxShadow: '0 0 20px rgba(99,102,241,0.4)' }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'sending' && (
                <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                </svg>
              )}
              {status === 'success' && <FiCheckCircle size={16} />}
              {status === 'error' && <FiAlertCircle size={16} />}
              {status === 'idle' && <FiSend size={16} />}
              {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : status === 'error' ? 'Failed — Try Again' : 'Send Message'}
            </motion.button>

            {status === 'success' && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-green-400 text-sm flex items-center justify-center gap-1"
              >
                <FiCheckCircle size={14} /> Thanks! I'll get back to you soon.
              </motion.p>
            )}
            {status === 'error' && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-red-400 text-sm flex items-center justify-center gap-1"
              >
                <FiAlertCircle size={14} /> Something went wrong. Please try again.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
