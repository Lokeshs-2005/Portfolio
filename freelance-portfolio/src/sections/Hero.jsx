export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-charcoal-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(139,92,246,0.12),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(236,72,153,0.08),transparent_60%)]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',}}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            <span className="text-violet-300 text-sm font-medium tracking-wide">
              Independent Web Developer • Digital Solutions
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            Your Business Deserves{' '}
            <span className="gradient-text">More Than Just</span>{' '}a Website.
          </h1>

          {/* Supporting heading */}
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-300 mb-5">
            I Build Modern Websites That Turn Ideas Into Digital Experiences.
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed mb-8 max-w-2xl">
            I help businesses, startups, and professionals build a strong online
            presence through modern websites, e-commerce storefronts, and custom
            web applications tailored to their needs.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <button
              onClick={() => scrollTo('contact')}
              className="btn-primary text-base py-3.5 px-8"
            >
              Start a Project
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button
              onClick={() => scrollTo('projects')}
              className="btn-secondary text-base py-3.5 px-8"
            >
              Explore My Work
            </button>
          </div>

          {/* Supporting line */}
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
            {['Business Websites', 'E-commerce', 'Custom Web Applications'].map((item, i, arr) => (
              <>
                <span key={item} className="text-gray-400">{item}</span>
                {i < arr.length - 1 && <span key={`sep-${i}`} className="text-gray-600">·</span>}
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
