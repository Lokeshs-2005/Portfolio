export default function About() {
  return (
    <section id="about" className="py-20 relative bg-navy-800/20">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 mb-6">
              <span className="text-violet-300 text-xs font-semibold tracking-widest uppercase">About</span>
            </div>
            <h2 className="section-heading mb-6">
              Building Practical Digital Solutions
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                I'm an independent web developer who enjoys turning ideas into practical digital
                solutions. I work across frontend development, backend services, APIs, and databases
                to build websites and applications tailored to real-world requirements.
              </p>
              <p>
                My focus is on creating responsive, user-friendly, maintainable solutions that help
                businesses present their services, reach customers, and manage their online workflows.
              </p>
            </div>
          </div>

          {/* Skills grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Frontend', items: ['React', 'Vite', 'Tailwind CSS', 'TypeScript'] },
              { label: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs', 'Authentication'] },
              { label: 'Databases', items: ['Firebase', 'MongoDB', 'PostgreSQL', 'Cloudinary'] },
              { label: 'Deployment', items: ['Vercel', 'Render', 'Git/GitHub', 'CI/CD'] },
            ].map((group) => (
              <div key={group.label} className="card">
                <p className="text-xs font-semibold text-violet-400 uppercase tracking-wider mb-3">{group.label}</p>
                <ul className="space-y-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="text-gray-300 text-sm">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
