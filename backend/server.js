require('dotenv').config()
const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer')

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors({ origin: 'http://localhost:5173' }))
app.use(express.json())

// Create Gmail transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // Gmail App Password (not your real password)
  },
})

// Health check
app.get('/', (req, res) => res.json({ status: 'Backend running' }))

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'All fields are required.' })
  }

  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    replyTo: email,
    subject: `New message from ${name} via Portfolio`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
        <h2 style="color: #6366f1; margin-bottom: 20px;">New Portfolio Contact</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px; font-weight: bold; color: #555; width: 100px;">Name:</td>
            <td style="padding: 10px; color: #333;">${name}</td>
          </tr>
          <tr style="background: #fff;">
            <td style="padding: 10px; font-weight: bold; color: #555;">Email:</td>
            <td style="padding: 10px; color: #333;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; color: #555; vertical-align: top;">Message:</td>
            <td style="padding: 10px; color: #333; white-space: pre-wrap;">${message}</td>
          </tr>
        </table>
        <p style="margin-top: 20px; font-size: 12px; color: #999;">Sent from your portfolio contact form</p>
      </div>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    res.json({ success: true, message: 'Email sent successfully!' })
  } catch (err) {
    console.error('Email error:', err.message)
    res.status(500).json({ success: false, error: 'Failed to send email.' })
  }
})

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
