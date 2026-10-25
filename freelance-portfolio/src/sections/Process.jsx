const steps = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'Understanding your business, goals, and requirements. Clarifying what the website or application needs to do, who it serves, and what success looks like.',
  },
  {
    number: '02',
    title: 'Planning',
    description:
      'Defining the scope, pages, features, and technical approach. Agreeing on a timeline and keeping the project focused on what matters.',
  },
  {
    number: '03',
    title: 'Development',
    description:
      'Building the frontend, backend services, and integrations. Writing clean, maintainable code and keeping you informed as the project takes shape.',
  },
  {
    number: '04',
    title: 'Testing',
    description:
      'Verifying that everything works correctly — functionality, responsive behaviour across devices, and any edge cases relevant to your use case.',
  },
  {
    number: '05',
    title: 'Launch',
    description:
      'Deploying the website, handing over the deliverables, and making sure the transition is smooth. Available for follow-up support as needed.',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800/50 to-navy-900" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 mb-4">
            <span className="text-violet-300 text-xs font-semibold tracking-widest uppercase">How I Work</span>
          </div>
          <h2 className="section-heading">Development Process</h2>
          <p className="section-subheading mx-auto">
            A straightforward process from first conversation to final delivery.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/0 via-violet-500/30 to-violet-500/0 -translate-x-1/2" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`flex flex-col md:flex-row items-start md:items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${ index % 2 === 0 ? 'md:text-right' : 'md:text-left' }`}>
                  <div className="card max-w-sm md:mx-auto">
                    <div className="text-3xl font-bold gradient-text mb-2">{step.number}</div>
                    <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex w-4 h-4 rounded-full bg-violet-500 border-4 border-navy-900 flex-shrink-0 relative z-10 shadow-lg shadow-violet-500/40" />

                {/* Spacer */}
                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
