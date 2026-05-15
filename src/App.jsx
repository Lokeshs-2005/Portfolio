import { useState, useEffect } from 'react';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  
  const roles = ['Software Engineer', 'Backend Developer', 'Full Stack Developer', 'Data Analyst'];

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let currentText = '';
    let currentIndex = 0;
    const currentRole = roles[roleIndex];
    
    const typingInterval = setInterval(() => {
      if (currentIndex < currentRole.length) {
        currentText += currentRole[currentIndex];
        setTypedText(currentText);
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [roleIndex]);

  const skills = {
    "Programming Languages": ["Java", "Python", "SQL"],
    "Core CS Concepts": ["DSA", "OOPS", "DBMS", "CN", "OS"],
    "Databases": ["MySQL", "Firebase"],
    "Web Development": ["Frontend & Backend", "Authentication", "REST APIs"],
    "Tools & Technologies": ["Git", "GitHub", "VS Code", "Postman", "GCP"],
    "Data Analytics": ["Power BI", "Tableau", "MS Excel"],
  };

  const internshipProjects = [
    {
      title: "Goodkart",
      description: "Multi-vendor B2B and B2C e-commerce platform with authentication, dashboards, order tracking, and payment workflows. Contributed to frontend & backend modules during 3-month internship.",
      tech: ["React", "Node.js", "Express", "MongoDB", "REST APIs"],
      category: "Full Stack",
    },
    {
      title: "Goodgide",
      description: "Internal software tool with application logic, JSON data integration, and REST API implementation.",
      tech: ["Frontend", "Backend", "REST APIs", "JSON"],
      category: "Software Development",
    },
  ];

  const personalProjects = [
    {
      title: "OS Navigation Using Hand Gestures",
      description: "Real-time hand gesture recognition system using OpenCV and MediaPipe for OS navigation with ML-based feature extraction.",
      tech: ["Python", "OpenCV", "MediaPipe", "Machine Learning"],
      category: "Computer Vision",
    },
    {
      title: "Library Management System",
      description: "Full-featured library management with CRUD operations, secure authentication, and scalable backend APIs.",
      tech: ["Python", "MySQL", "Authentication", "Backend APIs"],
      category: "Full Stack",
    },
    {
      title: "Xbox Sales Analytics Dashboard",
      description: "Interactive data visualization dashboard analyzing Xbox sales data with modern analytics tools.",
      tech: ["Power BI", "Data Analysis", "Visualization"],
      category: "Data Analytics",
    },
    {
      title: "Sentiment Analysis of Product Reviews",
      description: "ML project analyzing customer sentiment from product reviews using text processing and classification algorithms.",
      tech: ["Python", "NLP", "Machine Learning"],
      category: "Machine Learning",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-md z-50 border-b border-purple-500/30 shadow-xl shadow-purple-500/20">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          {/* Brand Text Only */}
          <a href="#home" className="flex flex-col group">
            <span className="text-2xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">Lokesh S</span>
            <span className="text-xs text-blue-400 font-medium tracking-wider">CODE • BUILD • ANALYZE • INNOVATE</span>
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <a href="#home" className="text-gray-300 hover:text-white hover:scale-105 transition-all duration-200 font-medium">Home</a>
            <a href="#about" className="text-gray-300 hover:text-white hover:scale-105 transition-all duration-200 font-medium">About</a>
            <a href="#skills" className="text-gray-300 hover:text-white hover:scale-105 transition-all duration-200 font-medium">Skills</a>
            <a href="#projects" className="text-gray-300 hover:text-white hover:scale-105 transition-all duration-200 font-medium">Projects</a>
            <a href="#contact" className="bg-gradient-to-r from-purple-500 to-blue-500 px-5 py-2 rounded-lg hover:scale-105 transition-all duration-200 font-semibold shadow-lg shadow-purple-500/30">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2 hover:bg-purple-500/20 rounded-lg transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900/98 backdrop-blur-md border-t border-purple-500/30">
            <div className="flex flex-col gap-1 px-6 py-4">
              <a href="#home" onClick={() => setMobileMenuOpen(false)} className="py-3 px-4 hover:bg-purple-500/10 rounded-lg transition">Home</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="py-3 px-4 hover:bg-purple-500/10 rounded-lg transition">About</a>
              <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="py-3 px-4 hover:bg-purple-500/10 rounded-lg transition">Skills</a>
              <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="py-3 px-4 hover:bg-purple-500/10 rounded-lg transition">Projects</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="py-3 px-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg transition text-center font-semibold">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in-up">
            <p className="text-purple-400 text-lg mb-4">👋 Software Engineer Aspirant</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Hi, I'm <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">Lokesh S</span>
            </h1>
            <div className="h-8 mb-4">
              <p className="text-2xl text-purple-300">
                {typedText}<span className="animate-pulse">|</span>
              </p>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Final-year Information Science Engineering student from BMSIT&M, passionate about building scalable software systems, backend development, and data-driven solutions. Experienced with React, Node.js, Python, and modern development tools.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-lg font-semibold hover:scale-105 transition">
                View Projects
              </a>
              <a href="/resume.pdf" download className="border border-purple-400 px-6 py-3 rounded-lg hover:bg-purple-500/10 transition">
                Download Resume
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-80 h-96 animate-float">
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-purple-500 rounded-3xl blur-xl opacity-60"></div>
              
              {/* Main image container */}
              <div className="relative w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 p-1 rounded-3xl shadow-2xl">
                <div className="w-full h-full bg-slate-900 rounded-3xl overflow-hidden">
                  <img 
                    src="/profile.jpg" 
                    alt="Lokesh S - Software Engineer" 
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full flex items-center justify-center text-8xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent" style={{display: 'none'}}>
                    LS
                  </div>
                </div>
              </div>
              
              {/* Professional Logo Badge - Bottom Right */}
              <div className="absolute -bottom-6 -right-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-75"></div>
                  <img 
                    src="/logo.png" 
                    alt="Lokesh S Logo" 
                    className="relative w-28 h-28 rounded-full border-4 border-slate-900 shadow-2xl hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-500 rounded-full blur-2xl opacity-50"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-pink-500 rounded-full blur-2xl opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-purple-400">Background</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm a final-year Information Science Engineering student at BMSIT&M, Bengaluru (CGPA: 8.22/10). 
                I combine software development expertise with data analytics skills to build impactful real-world solutions.
              </p>
              <h3 className="text-2xl font-semibold mb-4 text-purple-400">Experience</h3>
              <div className="bg-slate-800/50 p-6 rounded-lg border border-purple-500/20">
                <h4 className="font-semibold text-lg">Software Development Engineer Intern</h4>
                <p className="text-purple-400">SS Infinite Group • 3 Months</p>
                <ul className="mt-4 space-y-2 text-gray-300 text-sm">
                  <li>• Developed frontend & backend modules for internal software tools</li>
                  <li>• Integrated REST APIs and worked with JSON data formats</li>
                  <li>• Debugged and optimized code for improved performance</li>
                  <li>• Collaborated in development and testing phases</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-purple-400">Certifications</h3>
              <ul className="space-y-3 mb-6">
                <li className="bg-slate-800/50 p-4 rounded-lg border border-purple-500/20">
                  🎓 Google Cloud Career Launchpad - Data Analytics Track
                </li>
                <li className="bg-slate-800/50 p-4 rounded-lg border border-purple-500/20">
                  🎓 IBM Skills Build - Getting Started with Data
                </li>
                <li className="bg-slate-800/50 p-4 rounded-lg border border-purple-500/20">
                  🎓 Data Analyst Training - Infosys Foundation (ICT Academy)
                </li>
              </ul>
              <h3 className="text-2xl font-semibold mb-4 text-purple-400">Achievements</h3>
              <ul className="space-y-2 text-gray-300">
                <li>🏆 Led 2 academic software project teams (4-6 members)</li>
                <li>🏆 Captain - Intercollege Kho-Kho Championship Winner</li>
                <li>🏆 Organized coding events and workshops in college</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-slate-800/50 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition">
                <h3 className="text-xl font-semibold mb-4 text-purple-400">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-purple-500/20 rounded-full text-sm border border-purple-500/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Projects</h2>
          
          {/* Internship Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-purple-400">💼 Internship Projects</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {internshipProjects.map((project) => (
                <div key={project.title} className="bg-slate-800/50 rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition hover:-translate-y-2 duration-300">
                  <div className="h-48 bg-gradient-to-br from-purple-600/30 to-pink-600/30 flex items-center justify-center">
                    <div className="text-center p-4">
                      <p className="text-lg font-semibold">Project Screenshot</p>
                      <p className="text-sm text-gray-300 mt-2">Coming Soon</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-2xl font-semibold">{project.title}</h4>
                      <span className="text-xs px-3 py-1 bg-purple-500/20 rounded-full border border-purple-500/30">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span key={tech} className="text-xs px-3 py-1 bg-pink-500/20 rounded-full border border-pink-500/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-lg text-sm font-semibold hover:scale-105 transition">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Personal Projects */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-purple-400">🚀 Personal & Academic Projects</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {personalProjects.map((project) => (
                <div key={project.title} className="bg-slate-800/50 rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition hover:-translate-y-2 duration-300">
                  <div className="h-48 bg-gradient-to-br from-blue-600/30 to-purple-600/30 flex items-center justify-center">
                    <div className="text-center p-4">
                      <p className="text-lg font-semibold">Project Screenshot</p>
                      <p className="text-sm text-gray-300 mt-2">Coming Soon</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-2xl font-semibold">{project.title}</h4>
                      <span className="text-xs px-3 py-1 bg-blue-500/20 rounded-full border border-blue-500/30">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span key={tech} className="text-xs px-3 py-1 bg-cyan-500/20 rounded-full border border-cyan-500/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <button className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-lg text-sm font-semibold hover:scale-105 transition">
                        View Demo
                      </button>
                      <button className="flex-1 border border-purple-400 px-4 py-2 rounded-lg text-sm hover:bg-purple-500/10 transition">
                        GitHub
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Connect 🤝</h2>
          <p className="text-gray-300 text-lg mb-10">
            I'm actively seeking Software Engineer, Backend Developer, Data Analyst, and Full Stack Developer roles. 
            Let's build something amazing together!
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <a href="https://www.linkedin.com/in/lokesh-s-49a363271" target="_blank" rel="noopener noreferrer" 
               className="bg-gradient-to-r from-blue-600 to-blue-500 p-6 rounded-xl hover:scale-105 transition shadow-lg">
              <div className="text-4xl mb-3">💼</div>
              <h3 className="font-semibold text-lg mb-2">LinkedIn</h3>
              <p className="text-sm text-blue-100">Connect professionally</p>
            </a>
            <a href="https://github.com/Lokeshs-2005" target="_blank" rel="noopener noreferrer"
               className="bg-gradient-to-r from-gray-800 to-gray-700 p-6 rounded-xl hover:scale-105 transition shadow-lg">
              <div className="text-4xl mb-3">💻</div>
              <h3 className="font-semibold text-lg mb-2">GitHub</h3>
              <p className="text-sm text-gray-300">View my code</p>
            </a>
            <a href="mailto:lokeshs09052005@gmail.com"
               className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 rounded-xl hover:scale-105 transition shadow-lg">
              <div className="text-4xl mb-3">📧</div>
              <h3 className="font-semibold text-lg mb-2">Email</h3>
              <p className="text-sm text-purple-100">Send a message</p>
            </a>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-xl border border-purple-500/20">
            <h3 className="text-xl font-semibold mb-4 text-purple-400">Contact Information</h3>
            <div className="grid md:grid-cols-3 gap-4 text-gray-300">
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="font-semibold">lokeshs09052005@gmail.com</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="font-semibold">+91 6366151635</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="font-semibold">Bangalore, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-500/20 py-12 text-center text-gray-400 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <img 
            src="/logo.png" 
            alt="Lokesh S Logo" 
            className="w-24 h-24 mx-auto mb-4 hover:scale-110 transition-transform duration-300"
          />
          <p className="text-lg font-semibold text-white mb-2">Lokesh S</p>
          <p className="text-sm text-blue-400 mb-4">CODE • BUILD • ANALYZE • INNOVATE</p>
          <p className="text-sm">© 2026 Lokesh S. Built with React & Tailwind CSS</p>
          <p className="text-xs mt-2">Crafted with 💜 for opportunities</p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-full shadow-lg hover:scale-110 transition z-50"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </div>
  );
}
