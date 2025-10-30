import { useState } from 'react'
import { supabase } from '../lib/supabaseClient.js'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Name is required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Valid email is required'
    if (form.message.trim().length < 10) next.message = 'Message must be at least 10 characters'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    const { error } = await supabase
      .from('contact_messages')
      .insert({ name: form.name, email: form.email, message: form.message })
    if (error) {
      setErrors({ submit: 'Failed to send. Please try again later.' })
      return
    }
    setSent(true)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <div className="container-wide py-12 md:py-16">
      <h2 className="section-title">Contact Us</h2>
      {sent && (
        <div className="mt-4 rounded-md border border-green-300 bg-green-50 text-green-800 px-4 py-3">Thanks! We received your message and will get back soon.</div>
      )}
      {errors.submit && (
        <div className="mt-4 rounded-md border border-red-300 bg-red-50 text-red-800 px-4 py-3">{errors.submit}</div>
      )}
      <div className="mt-6 grid md:grid-cols-2 gap-8 items-start">
        <form onSubmit={onSubmit} className="rounded-lg surface border border-[var(--surface-border)] p-6 space-y-4">
          <div>
            <label className="block text-sm mb-1">Your Name</label>
            <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full rounded-md border px-3 py-2" placeholder="Enter your name" />
            {errors.name && <div className="mt-1 text-sm text-red-600">{errors.name}</div>}
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full rounded-md border px-3 py-2" placeholder="you@example.com" />
            {errors.email && <div className="mt-1 text-sm text-red-600">{errors.email}</div>}
          </div>
          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full rounded-md border px-3 py-2 min-h-28" placeholder="Your message" />
            {errors.message && <div className="mt-1 text-sm text-red-600">{errors.message}</div>}
          </div>
          <button className="btn-primary">Send</button>
        </form>
        <div>
          <div className="rounded-lg overflow-hidden border border-[var(--surface-border)] surface">
            <iframe title="Map" className="w-full h-80" loading="lazy" allowFullScreen
              src="https://www.google.com/maps?q=13.12139,80.07083&hl=en&z=15&output=embed" />
          </div>
          <div className="mt-4 text-sm">Coordinates per Wikipedia: 13.12139°N, 80.07083°E.</div>
        </div>
      </div>
    </div>
  )
}



