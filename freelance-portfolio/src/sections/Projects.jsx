import { projects } from '../data/projectsData'

function TechBadge({ label }) {
  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-gray-300 font-medium">
      {label}
    </span>
  )
}

function FeatureItem({ text }) {
  return (
    <li className="flex items-start gap-2 text-sm text-gray-400">
      <svg className="w-4 h-4 text-violet-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
      {text}
    </li>
  )
}

function ProjectCard({ project }) {
  return (
    <div className="card hover:border-violet-500/20">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <span className="text-xs font-semibold text-violet-400 tracking-widest uppercase">
          {project.type}
        </span>
        <span className="text-xs font-medium px-3 py-1 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300">
          {project.category}
        </span>
      </div>

      <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>

      {/* Description */}
      <p className="text-gray-400 leading-relaxed mb-6">{project.description}</p>

      {/* Features */}
      <div className="mb-6">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Key Features</p>
        <ul className="space-y-2">
          {project.features.map((f) => (
            <FeatureItem key={f} text={f} />
          ))}
        </ul>
      </div>

      {/* Tech stack */}
      <div className="mb-6">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Tech Stack</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <TechBadge key={t} label={t} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary text-sm inline-flex"
      >
        View Live Website
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative bg-navy-800/30">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 mb-4">
            <span className="text-violet-300 text-xs font-semibold tracking-widest uppercase">Featured Work</span>
          </div>
          <h2 className="section-heading">Projects I've Built</h2>
          <p className="section-subheading mx-auto">
            Real projects delivering practical value to businesses and their customers.
          </p>
        </div>

        {/* Project cards */}
        <div className="max-w-5xl mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
