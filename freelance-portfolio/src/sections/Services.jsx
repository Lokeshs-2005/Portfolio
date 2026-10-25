import { services } from '../data/servicesData'
import ServiceIcon from '../components/ServiceIcon'

export default function Services() {
  const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="services" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-charcoal-900 to-navy-900" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 mb-4">
            <span className="text-violet-300 text-xs font-semibold tracking-widest uppercase">Services</span>
          </div>
          <h2 className="section-heading">What I Can Build for You</h2>
          <p className="section-subheading mx-auto">
            From single-page marketing sites to full-stack web applications — practical digital
            solutions built to meet real business requirements.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="card hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/5 group"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-violet-500/15 flex items-center justify-center mb-5 group-hover:bg-violet-500/25 transition-colors">
                <ServiceIcon name={service.icon} className="w-6 h-6 text-violet-400" />
              </div>

              <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">{service.description}</p>

              <button
                onClick={scrollToContact}
                className="text-violet-400 hover:text-violet-300 text-sm font-medium flex items-center gap-1 transition-colors group/btn"
              >
                Discuss a Project
                <svg className="w-4 h-4 translate-x-0 group-hover/btn:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
