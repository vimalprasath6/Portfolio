import React, { useState } from 'react';
import { ExternalLink, Github, Terminal } from 'lucide-react';

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: "NurtureMe",
      description: "A skin type classification model deployed using Django for Backend and HTML, CSS and JS for Frontend and integrated with Google Firebase for authentication.",
      tech: ["Django", "ML", "Firebase", "JavaScript"],
      link: "#",
      github: "https://github.com/vimalprasath6/Nurtureme_SkintypeRecognition",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80"
    },
    {
      title: "Telemed",
      description: "A Telemedicine integration platform based idea for remote villages to get access with doctor's appointment and other medical supplies.",
      tech: ["React", "Node.js", "Healthcare", "API"],
      link: "#",
      github: "https://telmed-phi.vercel.app/",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
    },
    {
      title: "Deeptron",
      description: "A deepfake classification model that classifies real and deepfake videos through the links or through direct media upload.",
      tech: ["Python", "TensorFlow", "Computer Vision", "AI"],
      link: "#",
      github: "https://github.com/vimalprasath6/Deepfake-Detection",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
    },
    {
      title: "Oxidative Stress Prediction",
      description: "Currently undergoing a research for predicting the oxidative stress using Machine Learning algorithms with the guidance of doctor's advice in Mirakle cancer treatment centre.",
      tech: ["ML", "Research", "Healthcare", "Data Science"],
      link: "#",
      github: "https://oxiscanplatform.vercel.app/",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
    }
  ];

  return (
    <>
      <style>{`
        @keyframes glitchImage {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }
        
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        
        @keyframes dataStream {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes neonBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>

      <section id="projects" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 md:py-32 bg-black overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>

        {/* Red Glow Effects */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />

        <div className="max-w-7xl w-full space-y-16 relative z-10">
          {/* Header */}
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-red-500/10 border border-red-500/30 backdrop-blur-sm" style={{
              clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)'
            }}>
              <Terminal className="w-5 h-5 text-red-500" />
              <span className="text-sm font-mono uppercase text-red-400 tracking-widest">Featured_Work.exe</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight font-mono">
              &lt;<span className="text-red-500">PROJECTS</span>/&gt;
            </h2>
            <div className="w-32 h-1 bg-red-500 mx-auto shadow-[0_0_10px_#ff0000]" />
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div 
                key={idx} 
                className="group relative bg-black border-2 border-red-500/30 hover:border-red-500 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 30px 100%, 0 calc(100% - 30px))'
                }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-black">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
                      hoveredIndex === idx ? 'animate-[glitchImage_0.3s_ease-in-out]' : ''
                    }`}
                    style={{
                      filter: 'contrast(1.1) brightness(0.8)'
                    }}
                  />
                  
                  {/* Red overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/40 to-black/60 mix-blend-multiply" />
                  
                  {/* Scanline effect */}
                  <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,0,0,0.1)_2px,rgba(255,0,0,0.1)_4px)]" />
                  
                  {/* Animated scanline on hover */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none ${
                    hoveredIndex === idx ? 'animate-[scanline_2s_linear_infinite]' : ''
                  }`}>
                    <div className="w-full h-2 bg-red-500 blur-sm" />
                  </div>

                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-red-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-red-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Live Link Button */}
                  <a 
                    href={project.link}
                    className="absolute top-4 right-4 bg-black/90 border-2 border-red-500/50 hover:border-red-500 w-12 h-12 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 hover:bg-red-500/20"
                    style={{
                      clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                    }}
                  >
                    <ExternalLink className="w-5 h-5 text-red-500" />
                  </a>

                  {/* Status Badge */}
                  <div className="absolute bottom-4 left-4 px-4 py-2 bg-black/90 border border-red-500/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_#ff0000]" />
                      <span className="text-xs font-mono text-red-400 uppercase tracking-wider">Active</span>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="relative p-8 space-y-6 bg-black">
                  {/* Data stream effect */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 overflow-hidden">
                    <div className="h-full w-20 bg-gradient-to-r from-transparent via-red-500 to-transparent group-hover:animate-[dataStream_2s_ease-in-out_infinite]" />
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-red-600 font-mono text-sm">&gt;&gt;</span>
                      <h3 className="text-2xl md:text-3xl font-bold text-white font-mono uppercase group-hover:text-red-500 transition-colors">{project.title}</h3>
                    </div>
                    <p className="text-gray-400 leading-relaxed">{project.description}</p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1.5 bg-red-500/10 border border-red-500/30 text-xs font-mono text-red-400 uppercase tracking-wider hover:bg-red-500/20 hover:border-red-500/50 transition-all"
                        style={{
                          clipPath: 'polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* GitHub Button */}
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn relative inline-flex items-center gap-3 px-6 py-3 bg-red-600 hover:bg-red-500 text-white font-bold uppercase tracking-wider overflow-hidden transition-all duration-300"
                    style={{
                      clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))'
                    }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-red-400/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                    <Github className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover/btn:rotate-12" />
                    <span className="relative z-10 font-mono text-sm">VIEW_CODE</span>
                    <ExternalLink className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    
                    {/* Glitch lines */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-red-300 opacity-0 group-hover/btn:opacity-100 transition-opacity" style={{ animation: 'neonBlink 0.5s infinite' }} />
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-red-300 opacity-0 group-hover/btn:opacity-100 transition-opacity" style={{ animation: 'neonBlink 0.5s infinite 0.25s' }} />
                  </a>
                </div>

                {/* Corner decorations */}
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-red-500/30 group-hover:border-red-500 transition-colors" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-red-500/30 group-hover:border-red-500 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}