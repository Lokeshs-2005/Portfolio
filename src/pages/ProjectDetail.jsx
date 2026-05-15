import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { projectsData, projectsList } from '../data/projectsData';
import VideoPlayer from '../components/VideoPlayer';
import YouTubeEmbed from '../components/YouTubeEmbed';
import GoogleDriveVideo from '../components/GoogleDriveVideo';

export default function ProjectDetail() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projectsData[projectId];

  // Scroll to top when component mounts or projectId changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/" className="text-purple-400 hover:text-purple-300">← Back to Portfolio</Link>
        </div>
      </div>
    );
  }

  const currentIndex = projectsList.findIndex(p => p.id === projectId);
  const prevProject = currentIndex > 0 ? projectsList[currentIndex - 1] : null;
  const nextProject = currentIndex < projectsList.length - 1 ? projectsList[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-md z-50 border-b border-purple-500/30 shadow-xl shadow-purple-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-gray-300 hover:text-white transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Portfolio
          </Link>
          <button 
            onClick={() => navigate('/')}
            className="bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-2 rounded-lg hover:scale-105 transition font-semibold"
          >
            Home
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Project Banner Image */}
          {project.image && (
            <div className="mb-8 rounded-2xl overflow-hidden border border-purple-500/30 bg-slate-900">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-96 object-contain p-4"
              />
            </div>
          )}

          {/* Title and Badges */}
          <div className="mb-6">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-4 py-1.5 bg-purple-500/20 rounded-full text-sm border border-purple-500/30 font-semibold">
                {project.category}
              </span>
              <span className="px-4 py-1.5 bg-blue-500/20 rounded-full text-sm border border-blue-500/30">
                {project.meta.year}
              </span>
              <span className="px-4 py-1.5 bg-green-500/20 rounded-full text-sm border border-green-500/30">
                {project.meta.status}
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {project.title}
            </h1>
            <p className="text-2xl text-gray-300 mb-6">{project.tagline}</p>
            
            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-slate-800/50 rounded-full text-sm border border-purple-500/20">
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              {project.liveDemo && (
                <a 
                  href={project.liveDemo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-lg font-semibold hover:scale-105 transition flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </a>
              )}
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="border border-purple-400 px-6 py-3 rounded-lg hover:bg-purple-500/10 transition flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="text-4xl">📌</span>
            Overview
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-purple-500/20">
              <h3 className="text-xl font-semibold mb-3 text-purple-400">What is this?</h3>
              <p className="text-gray-300 leading-relaxed">{project.overview.what}</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-purple-500/20">
              <h3 className="text-xl font-semibold mb-3 text-purple-400">Why build it?</h3>
              <p className="text-gray-300 leading-relaxed">{project.overview.why}</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-purple-500/20">
              <h3 className="text-xl font-semibold mb-3 text-purple-400">Who is it for?</h3>
              <p className="text-gray-300 leading-relaxed">{project.overview.who}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="text-4xl">🎯</span>
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition">
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      {project.video ? (
        <section className="py-12 px-6 bg-slate-900/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="text-4xl">🎥</span>
              Project Demo Video
            </h2>
            {project.video.includes('drive.google.com') ? (
              <div>
                <GoogleDriveVideo 
                  url={project.video}
                  title={`${project.title} - Demo Walkthrough`}
                />
                <p className="text-gray-400 text-sm mt-4 text-center">
                  Watch the complete walkthrough of {project.title} features and functionality in high quality
                </p>
              </div>
            ) : project.video.includes('youtube.com') || project.video.includes('youtu.be') ? (
              <div>
                <YouTubeEmbed 
                  videoId={project.video.includes('youtu.be') 
                    ? project.video.split('youtu.be/')[1].split('?')[0]
                    : project.video.split('v=')[1]?.split('&')[0]
                  }
                  title={`${project.title} - Demo Walkthrough`}
                />
                <p className="text-gray-400 text-sm mt-4 text-center">
                  Watch the complete walkthrough of {project.title} features and functionality in HD
                </p>
              </div>
            ) : project.video.includes('terabox.com') ? (
              <div className="bg-slate-800/50 p-8 rounded-xl border border-purple-500/20 text-center">
                <div className="mb-6">
                  <svg className="w-24 h-24 mx-auto text-purple-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-2xl font-semibold mb-3">{project.title} - Demo Walkthrough</h3>
                  <p className="text-gray-400 mb-6">Watch the complete walkthrough of {project.title} features and functionality</p>
                </div>
                <a 
                  href={project.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-lg font-semibold hover:scale-105 transition text-lg"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  Watch Demo Video
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <p className="text-sm text-gray-500 mt-4">Video hosted externally</p>
              </div>
            ) : project.video.startsWith('/') ? (
              <div>
                <VideoPlayer 
                  src={project.video} 
                  title={`${project.title} - Demo Walkthrough`}
                />
                <p className="text-gray-400 text-sm mt-4 text-center">
                  Watch the complete walkthrough of {project.title} features and functionality
                </p>
              </div>
            ) : null}
          </div>
        </section>
      ) : project.screenshots && project.screenshots.length > 0 ? (
        <section className="py-12 px-6 bg-slate-900/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="text-4xl">🖼️</span>
              Screenshots
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.screenshots.map((screenshot, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition">
                  <img 
                    src={screenshot.url} 
                    alt={screenshot.caption}
                    className="w-full h-64 object-contain p-4 bg-slate-900"
                  />
                  <div className="p-4">
                    <p className="text-gray-300 text-sm">{screenshot.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Technical Details Section */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="text-4xl">💻</span>
            Technical Details
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(project.technicalDetails).map(([key, detail]) => (
              <div key={key} className="bg-slate-800/50 p-6 rounded-xl border border-purple-500/20">
                <h3 className="text-xl font-semibold mb-3 text-purple-400">{detail.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{detail.description}</p>
                <div className="flex flex-wrap gap-2">
                  {detail.stack.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-purple-500/20 rounded-full text-xs border border-purple-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      {project.architecture && (
        <section className="py-12 px-6 bg-slate-900/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="text-4xl">🏗️</span>
              System Architecture
            </h2>
            <div className="bg-slate-800/50 p-8 rounded-xl border border-purple-500/20">
              <p className="text-gray-300 leading-relaxed text-lg">{project.architecture}</p>
            </div>
          </div>
        </section>
      )}

      {/* Challenges & Learnings Section */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="text-4xl">🚧</span>
            Challenges & Solutions
          </h2>
          <div className="space-y-6 mb-12">
            {project.challenges.map((challenge, index) => (
              <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-purple-500/20">
                <h3 className="text-xl font-semibold mb-3 text-red-400">Challenge: {challenge.problem}</h3>
                <p className="text-gray-300 leading-relaxed"><span className="text-green-400 font-semibold">Solution:</span> {challenge.solution}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="text-4xl">💡</span>
            Key Learnings
          </h2>
          <div className="bg-slate-800/50 p-8 rounded-xl border border-purple-500/20">
            <ul className="space-y-3">
              {project.learnings.map((learning, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-300">
                  <span className="text-purple-400 text-xl">•</span>
                  <span className="leading-relaxed">{learning}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Project Meta Section */}
      <section className="py-12 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="text-4xl">📅</span>
            Project Information
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-purple-500/20 text-center">
              <p className="text-gray-400 text-sm mb-2">Duration</p>
              <p className="text-xl font-semibold text-purple-400">{project.meta.duration}</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-purple-500/20 text-center">
              <p className="text-gray-400 text-sm mb-2">Role</p>
              <p className="text-xl font-semibold text-purple-400">{project.meta.role}</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-purple-500/20 text-center">
              <p className="text-gray-400 text-sm mb-2">Team Size</p>
              <p className="text-xl font-semibold text-purple-400">{project.meta.team}</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-purple-500/20 text-center">
              <p className="text-gray-400 text-sm mb-2">Status</p>
              <p className="text-xl font-semibold text-green-400">{project.meta.status}</p>
            </div>
          </div>
          {project.meta.responsibilities && (
            <div className="mt-6 bg-slate-800/50 p-6 rounded-xl border border-purple-500/20">
              <h3 className="text-lg font-semibold mb-3 text-purple-400">My Responsibilities</h3>
              <p className="text-gray-300 leading-relaxed">{project.meta.responsibilities}</p>
            </div>
          )}
        </div>
      </section>

      {/* Navigation Footer */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {prevProject ? (
              <Link 
                to={`/project/${prevProject.id}`}
                className="flex items-center gap-3 bg-slate-800/50 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition flex-1 w-full"
              >
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <div>
                  <p className="text-sm text-gray-400">Previous Project</p>
                  <p className="text-lg font-semibold">{prevProject.title}</p>
                </div>
              </Link>
            ) : (
              <div className="flex-1"></div>
            )}

            <Link 
              to="/"
              className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition text-center"
            >
              Back to Portfolio
            </Link>

            {nextProject ? (
              <Link 
                to={`/project/${nextProject.id}`}
                className="flex items-center gap-3 bg-slate-800/50 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition flex-1 w-full justify-end text-right"
              >
                <div>
                  <p className="text-sm text-gray-400">Next Project</p>
                  <p className="text-lg font-semibold">{nextProject.title}</p>
                </div>
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ) : (
              <div className="flex-1"></div>
            )}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 px-6 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in working together?</h2>
          <p className="text-gray-300 mb-6">Let's connect and discuss how I can contribute to your team</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://www.linkedin.com/in/lokesh-s-49a363271" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 px-6 py-3 rounded-lg hover:scale-105 transition font-semibold"
            >
              Connect on LinkedIn
            </a>
            <a 
              href="mailto:lokeshs09052005@gmail.com"
              className="border border-purple-400 px-6 py-3 rounded-lg hover:bg-purple-500/10 transition font-semibold"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-500/20 py-8 text-center text-gray-400 bg-slate-900/50">
        <p className="text-sm">© 2026 Lokesh S. Built with React & Tailwind CSS</p>
      </footer>
    </div>
  );
}
