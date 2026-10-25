import { useState } from 'react'

const PROJECT_TYPES = [
  'Business Website',
  'E-commerce Website',
  'Landing Page',
  'Portfolio Website',
  'Custom Web Application',
  'Website Redesign / Maintenance',
]

const BUDGET_RANGES = [
  'Under ₹15,000',
  '₹15,000 – ₹40,000',
  '₹40,000 – ₹80,000',
  '₹80,000+',
  'Let\'s discuss',
]

const TIMELINES = [
  'As soon as possible',
  '2 – 4 weeks',
  '1 – 2 months',
  '2 – 3 months',
  'Flexible',
]

const INITIAL_FORM = {
  name: '',
  email: '',
  businessName: '',
  projectType: '',
  description: '',
  budget: '',
  timeline: '',
}

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required.'
    if (!form.email.trim()) {
      e.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Enter a valid email address.'
    }
    if (!form.description.trim()) e.description = 'Project description is required.'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setStatus('loading')

    try {
      // Using Web3Forms as a no-backend form submission service
      // Set VITE_WEB3FORMS_ACCESS_KEY in .env.local
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
      if (!accessKey) {
        throw new Error('Form service not configured. Please contact me directly via email.')
      }

      const payload = {
        access_key: accessKey,
        subject: `New Project Enquiry — ${form.projectType || 'General'} — ${form.name}`,
        from_name: form.name,
        email: form.email,
        message: `
Name: ${form.name}
Email: ${form.email}
Business Name: ${form.businessName || 'Not provided'}
Project Type: ${form.projectType || 'Not specified'}
Budget: ${form.budget || 'Not specified'}
Timeline: ${form.timeline || 'Not specified'}

Project Description:
${form.description}
        `.trim(),
      }

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setForm(INITIAL_FORM)
      } else {
        throw new Error(data.message || 'Submission failed.')
      }
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-charcoal-900 to-navy-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.07),transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: info */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 mb-6">
              <span className="text-violet-300 text-xs font-semibold tracking-widest uppercase">Contact</span>
            </div>
            <h2 className="section-heading mb-4">
              Have a Project in Mind?{' '}
              <span className="gradient-text">Let's Build It.</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              Tell me about your business, your idea, and what you want to achieve.
              I'll review your requirements and help you identify a suitable digital solution.
            </p>

            {/* Contact methods */}
            <div className="space-y-4">
              <a
                href="mailto:lokeshs09052005@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-violet-500/20 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Email</p>
                  <p className="text-sm">lokeshs09052005@gmail.com</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/lokesh-s-49a363271"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-violet-500/20 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">LinkedIn</p>
                  <p className="text-sm">linkedin.com/in/lokesh-s-49a363271</p>
                </div>
              </a>

              <a
                href="https://github.com/Lokeshs-2005"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-violet-500/20 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">GitHub</p>
                  <p className="text-sm">github.com/Lokeshs-2005</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div className="card">
            {status === 'success' ? (
              <div className="py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/15 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Enquiry Received</h3>
                <p className="text-gray-400 mb-6">Thank you for reaching out. I'll review your requirements and get back to you soon.</p>
                <button onClick={() => setStatus('idle')} className="btn-secondary text-sm">
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <h3 className="text-lg font-bold text-white mb-1">Project Enquiry</h3>
                <p className="text-sm text-gray-500 mb-4">Fields marked with * are required.</p>

                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1.5">
                      Name <span className="text-magenta-400" aria-hidden>*</span>
                    </label>
                    <input
                      id="name" name="name" type="text" required
                      value={form.name} onChange={handleChange}
                      placeholder="Your name"
                      className={`w-full bg-white/5 border rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-colors ${
                        errors.name ? 'border-red-500' : 'border-white/10 focus:border-violet-500'
                      }`}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && <p id="name-error" className="text-red-400 text-xs mt-1" role="alert">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5">
                      Email <span className="text-magenta-400" aria-hidden>*</span>
                    </label>
                    <input
                      id="email" name="email" type="email" required
                      value={form.email} onChange={handleChange}
                      placeholder="your@email.com"
                      className={`w-full bg-white/5 border rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-colors ${
                        errors.email ? 'border-red-500' : 'border-white/10 focus:border-violet-500'
                      }`}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && <p id="email-error" className="text-red-400 text-xs mt-1" role="alert">{errors.email}</p>}
                  </div>
                </div>

                {/* Business Name */}
                <div>
                  <label htmlFor="businessName" className="block text-sm font-medium text-gray-300 mb-1.5">Business Name</label>
                  <input
                    id="businessName" name="businessName" type="text"
                    value={form.businessName} onChange={handleChange}
                    placeholder="Your business or organisation (optional)"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-colors"
                  />
                </div>

                {/* Project Type */}
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-300 mb-1.5">Project Type</label>
                  <select
                    id="projectType" name="projectType"
                    value={form.projectType} onChange={handleChange}
                    className="w-full bg-navy-800 border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-colors"
                  >
                    <option value="">Select project type</option>
                    {PROJECT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>

                {/* Description */}
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-1.5">
                    Project Description <span className="text-magenta-400" aria-hidden>*</span>
                  </label>
                  <textarea
                    id="description" name="description" rows={5} required
                    value={form.description} onChange={handleChange}
                    placeholder="Describe your project, what it needs to do, your target audience, and any specific requirements..."
                    className={`w-full bg-white/5 border rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-colors resize-none ${
                      errors.description ? 'border-red-500' : 'border-white/10 focus:border-violet-500'
                    }`}
                    aria-invalid={!!errors.description}
                    aria-describedby={errors.description ? 'description-error' : undefined}
                  />
                  {errors.description && <p id="description-error" className="text-red-400 text-xs mt-1" role="alert">{errors.description}</p>}
                </div>

                {/* Budget + Timeline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-1.5">Budget Range</label>
                    <select
                      id="budget" name="budget"
                      value={form.budget} onChange={handleChange}
                      className="w-full bg-navy-800 border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-colors"
                    >
                      <option value="">Select budget</option>
                      {BUDGET_RANGES.map((r) => <option key={r} value={r}>{r}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-300 mb-1.5">Timeline</label>
                    <select
                      id="timeline" name="timeline"
                      value={form.timeline} onChange={handleChange}
                      className="w-full bg-navy-800 border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-colors"
                    >
                      <option value="">Select timeline</option>
                      {TIMELINES.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>

                {/* Error banner */}
                {status === 'error' && (
                  <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30">
                    <p className="text-red-400 text-sm">
                      Something went wrong. Please try again or email me directly at{' '}
                      <a href="mailto:lokeshs09052005@gmail.com" className="underline">lokeshs09052005@gmail.com</a>.
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary w-full py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : 'Send Enquiry'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
