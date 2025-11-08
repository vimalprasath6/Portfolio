import React from 'react';
import { Code, Brain, Rocket, GraduationCap, Award, Users, Trophy, Zap } from 'lucide-react';

export default function About() {
  const skills = [
    { 
      icon: Brain, 
      name: "Machine Learning", 
      desc: "Deep learning models, neural networks, and AI solutions"
    },
    { 
      icon: Code, 
      name: "Development", 
      desc: "Full-stack development with modern frameworks"
    },
    { 
      icon: Rocket, 
      name: "Deployment", 
      desc: "MLOps, cloud infrastructure, and scalable systems"
    }
  ];

  const education = [
    {
      degree: "SSLC",
      field: "Secondary School",
      school: "Sri Venkateshwara Vidhyalaya Matriculation School, Gobichettipalayam",
      year: "2019 - 2021",
      icon: GraduationCap
    },
    {
      degree: "HSC",
      field: "Higher Secondary Education",
      school: "Sri Venkateshwara Vidhyalaya Higher Secondary School, Gobichettipalayam",
      year: "2021 - 2023",
      icon: Award
    },
    {
      degree: "BE. CSE (AI & ML)",
      field: "Artificial Intelligence and Machine Learning",
      school: "Dr. Mahalingam College of Engineering and Technology, Pollachi",
      year: "2023 - 2027",
      icon: Brain
    }
  ];

  const leadership = [
    {
      title: "Tech Lead",
      org: "AI Innovation Lab",
      desc: "Leading a team of 12 engineers in developing next-gen ML solutions",
      icon: Users
    },
    {
      title: "Open Source Maintainer",
      org: "ML Framework Contributors",
      desc: "Managing community of 5K+ developers and 50+ contributors",
      icon: Code
    },
    {
      title: "Conference Speaker",
      org: "Global Tech Events",
      desc: "Keynote speaker at 15+ international AI/ML conferences",
      icon: Trophy
    }
  ];

  return (
    <>
      <style>{`
        @keyframes dataFlow {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 5px #ff0000, 0 0 10px #ff0000, inset 0 0 10px rgba(255, 0, 0, 0.2); }
          50% { box-shadow: 0 0 10px #ff0000, 0 0 20px #ff0000, inset 0 0 20px rgba(255, 0, 0, 0.3); }
        }
        
        @keyframes scanlineMove {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        
        .cyber-card {
          position: relative;
          overflow: hidden;
        }
        
        .cyber-card::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, #ff0000, #660000, #ff0000);
          z-index: -1;
          filter: blur(10px);
          opacity: 0;
          transition: opacity 0.3s;
        }
        
        .cyber-card:hover::before {
          opacity: 0.7;
        }
      `}</style>

      <section id="about" className="relative w-full px-4 sm:px-6 lg:px-8 py-20 md:py-32 bg-black overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>

        {/* Red Glow Effect */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto space-y-20 relative z-10">
          
          {/* Header */}
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-red-500/10 border border-red-500/30 backdrop-blur-sm" style={{
              clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)'
            }}>
              <Zap className="w-5 h-5 text-red-500" fill="currentColor" />
              <span className="text-sm font-mono uppercase text-red-400 tracking-widest">About_Me.exe</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight font-mono">
              &lt;<span className="text-red-500">PROFILE</span>/&gt;
            </h2>
            <div className="w-32 h-1 bg-red-500 mx-auto shadow-[0_0_10px_#ff0000]" />
          </div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, idx) => (
              <div 
                key={idx} 
                className="cyber-card group relative bg-black border-2 border-red-500/30 hover:border-red-500 p-8 transition-all duration-300 hover:-translate-y-2"
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))',
                  animation: 'glowPulse 3s ease-in-out infinite',
                  animationDelay: `${idx * 0.2}s`
                }}
              >
                {/* Scanline effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-30 pointer-events-none">
                  <div className="w-full h-1 bg-red-500 blur-sm" style={{ animation: 'scanlineMove 2s linear infinite' }} />
                </div>
                
                {/* Data flow effect */}
                <div className="absolute top-0 left-0 right-0 h-0.5 overflow-hidden">
                  <div className="h-full w-20 bg-gradient-to-r from-transparent via-red-500 to-transparent" style={{ animation: 'dataFlow 2s ease-in-out infinite' }} />
                </div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-red-500/20 border-2 border-red-500 flex items-center justify-center mb-6 group-hover:bg-red-500/30 transition-colors" style={{
                    clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                  }}>
                    <skill.icon className="w-8 h-8 text-red-500" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 font-mono uppercase">{skill.name}</h3>
                  <p className="text-gray-400 leading-relaxed">{skill.desc}</p>
                </div>

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-red-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-red-500 opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>

          {/* Bio */}
          <div className="relative bg-black border-2 border-red-500/50 p-12" style={{
            clipPath: 'polygon(30px 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%, 0 30px)'
          }}>
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent" />
            <div className="relative space-y-6">
              <div className="flex items-center gap-2 text-red-500 font-mono text-sm mb-4">
                <span className="text-red-600">&gt;&gt;</span>
                <span>SYSTEM_INFO</span>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed font-light">
                Hello! I'm a passionate <span className="text-red-500 font-bold">Machine Learning Engineer</span> with expertise in building intelligent systems that solve real-world problems. With a background in both ML/AI and full-stack development, I bring a unique perspective to every project.
              </p>
              <p className="text-base text-gray-400 leading-relaxed font-light">
                My goal is to create products that leverage cutting-edge AI technology while maintaining exceptional user experiences. I enjoy tackling complex problems and finding elegant solutions through code and machine learning algorithms.
              </p>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-10">
            <div className="text-center space-y-4">
              <h3 className="text-4xl font-bold text-white font-mono uppercase tracking-wider">
                &lt;<span className="text-red-500">Education</span>/&gt;
              </h3>
              <div className="w-24 h-0.5 bg-red-500 mx-auto shadow-[0_0_10px_#ff0000]" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {education.map((edu, idx) => (
                <div key={idx} className="group relative bg-black border-2 border-red-500/30 hover:border-red-500 p-8 transition-all duration-300 hover:-translate-y-1" style={{
                  clipPath: 'polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)'
                }}>
                  <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative z-10 space-y-4">
                    <div className="w-14 h-14 bg-red-500/20 border-2 border-red-500 flex items-center justify-center group-hover:bg-red-500/30 transition-colors" style={{
                      clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
                    }}>
                      <edu.icon className="w-7 h-7 text-red-500" />
                    </div>
                    <div className="space-y-2">
                      <div className="text-xs font-mono text-red-400 uppercase tracking-wider">{edu.year}</div>
                      <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                      <p className="text-base text-red-400 font-semibold">{edu.field}</p>
                      <p className="text-sm text-gray-500 pt-2">{edu.school}</p>
                    </div>
                  </div>

                  {/* Corner decoration */}
                  <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-red-500/50" />
                </div>
              ))}
            </div>
          </div>

          {/* Leadership */}
          <div className="space-y-10">
            <div className="text-center space-y-4">
              <h3 className="text-4xl font-bold text-white font-mono uppercase tracking-wider">
                &lt;<span className="text-red-500">Leadership</span>/&gt;
              </h3>
              <div className="w-24 h-0.5 bg-red-500 mx-auto shadow-[0_0_10px_#ff0000]" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {leadership.map((role, idx) => (
                <div key={idx} className="group relative bg-black border-2 border-red-500/30 hover:border-red-500 p-8 transition-all duration-300 hover:-translate-y-2" style={{
                  clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)'
                }}>
                  <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative z-10 space-y-4">
                    <div className="w-14 h-14 bg-red-500/20 border-2 border-red-500 flex items-center justify-center group-hover:bg-red-500/30 group-hover:rotate-6 transition-all" style={{
                      clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
                    }}>
                      <role.icon className="w-7 h-7 text-red-500" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1 uppercase">{role.title}</h4>
                      <p className="text-sm font-semibold text-red-400 mb-3">{role.org}</p>
                      <p className="text-sm text-gray-400 leading-relaxed">{role.desc}</p>
                    </div>
                  </div>

                  {/* Data stream decoration */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="h-full w-20 bg-gradient-to-r from-transparent via-red-500 to-transparent" style={{ animation: 'dataFlow 2s ease-in-out infinite' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}