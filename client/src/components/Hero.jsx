import React, { useState, useEffect } from 'react';
import { ArrowRight, Zap, Terminal, Code, Cpu, Database, Lock, Network } from 'lucide-react';

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [glitchActive, setGlitchActive] = useState(false);
  
  const roles = [
    "AI/ML ENGINEER",
    "FULL STACK DEV",
    "TECH INNOVATOR",
    "PROBLEM SOLVER"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const floatingIcons = [
    { Icon: Code, x: "10%", y: "20%", delay: "0s" },
    { Icon: Cpu, x: "85%", y: "15%", delay: "0.5s" },
    { Icon: Terminal, x: "15%", y: "75%", delay: "1s" },
    { Icon: Database, x: "80%", y: "70%", delay: "1.5s" },
    { Icon: Network, x: "25%", y: "40%", delay: "2s" },
    { Icon: Lock, x: "75%", y: "45%", delay: "2.5s" },
  ];

  return (
    <>
      <style>{`
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }
        
        @keyframes glitchText {
          0% { 
            text-shadow: 3px 0 #ff0000, -3px 0 #00ffff;
            transform: translate(0);
          }
          25% { 
            text-shadow: -3px 0 #ff0000, 3px 0 #00ffff;
            transform: translate(2px, 0);
          }
          50% { 
            text-shadow: 3px 0 #ff0000, -3px 0 #00ffff;
            transform: translate(-2px, 0);
          }
          75% { 
            text-shadow: -3px 0 #ff0000, 3px 0 #00ffff;
            transform: translate(2px, 0);
          }
          100% { 
            text-shadow: 3px 0 #ff0000, -3px 0 #00ffff;
            transform: translate(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); opacity: 0.3; }
          50% { transform: translateY(-20px); opacity: 0.6; }
        }
        
        @keyframes neonFlicker {
          0%, 100% { opacity: 1; text-shadow: 0 0 10px #ff0000, 0 0 20px #ff0000, 0 0 30px #ff0000; }
          50% { opacity: 0.8; text-shadow: 0 0 5px #ff0000, 0 0 10px #ff0000, 0 0 15px #ff0000; }
        }
        
        @keyframes pixelate {
          0%, 100% { filter: contrast(1); }
          50% { filter: contrast(1.2); }
        }
        
        .glitch-active {
          animation: glitch 0.3s linear;
        }
        
        .text-glitch {
          animation: glitchText 0.3s linear;
        }
        
        .neon-text {
          animation: neonFlicker 2s ease-in-out infinite;
        }
      `}</style>

      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-12 overflow-hidden bg-black">
        
        {/* Digital Grid Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>

        {/* Red Glow Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-700/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        {/* Scanline Effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-red-500/50 to-transparent" style={{ animation: 'scanline 8s linear infinite' }} />
        </div>

        {/* Floating Tech Icons */}
        {floatingIcons.map(({ Icon, x, y, delay }, idx) => (
          <div
            key={idx}
            className="absolute hidden lg:block opacity-20"
            style={{
              left: x,
              top: y,
              animation: `float 4s ease-in-out infinite`,
              animationDelay: delay
            }}
          >
            <Icon className="w-8 h-8 text-red-500" strokeWidth={1} />
          </div>
        ))}

        {/* Main Content */}
        <div className="w-full max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Content */}
            <div className="space-y-8">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full backdrop-blur-sm">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-ping" />
                <span className="text-red-400 text-sm font-mono uppercase tracking-wider">System Online</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
                  <span className="block text-gray-400 font-mono text-lg mb-2">&lt;developer&gt;</span>
                  <span className={glitchActive ? 'text-glitch' : ''}>
                    VIMAL PRASATH
                  </span>
                  <br />
                  <span className="neon-text text-red-500">
                    A
                  </span>
                  <span className="block text-gray-400 font-mono text-lg mt-2">&lt;/developer&gt;</span>
                </h1>
                
                {/* Animated Role */}
                <div className="h-16 flex items-center">
                  <div className="relative">
                    <span className="text-gray-600 font-mono text-xl mr-2">&gt;&gt;</span>
                    {roles.map((role, idx) => (
                      <span
                        key={idx}
                        className={`absolute left-12 text-2xl sm:text-3xl md:text-4xl font-bold transition-all duration-500 ${
                          currentRole === idx
                            ? 'opacity-100 translate-y-0 text-red-500'
                            : 'opacity-0 -translate-y-4 text-red-700'
                        } ${glitchActive && currentRole === idx ? 'text-glitch' : ''}`}
                        style={{
                          textShadow: currentRole === idx ? '0 0 20px rgba(255, 0, 0, 0.8)' : 'none'
                        }}
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-lg text-gray-400 font-light max-w-xl leading-relaxed border-l-2 border-red-500/50 pl-4">
                Building <span className="text-red-400 font-semibold">intelligent systems</span> and crafting digital experiences. 
                Transforming complex problems into elegant solutions through code.
              </p>

              {/* Stats with Glitch Effect */}
              <div className="flex gap-8 pt-4">
                {[
                  { value: "02+", label: "YEARS_EXP" },
                  { value: "15+", label: "PROJECTS" },
                  { value: "100%", label: "SUCCESS_RATE" }
                ].map((stat, idx) => (
                  <div key={idx} className="relative group">
                    <div className="absolute inset-0 bg-red-500/10 blur-xl group-hover:bg-red-500/20 transition-all" />
                    <div className="relative">
                      <p className="text-3xl font-bold text-red-500 font-mono neon-text">{stat.value}</p>
                      <p className="text-xs text-gray-500 font-mono uppercase tracking-wider">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <a 
                  href="#contact" 
                  className="group relative px-8 py-4 bg-red-600 hover:bg-red-500 text-white font-bold uppercase tracking-wider transition-all duration-300 overflow-hidden"
                  style={{
                    clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))'
                  }}
                >
                  <span className="absolute inset-0 bg-red-400 opacity-0 group-hover:opacity-20 transition-opacity" />
                  <span className="relative flex items-center justify-center gap-2">
                    <Zap size={20} fill="currentColor" />
                    CONNECT
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 border border-red-300/50 group-hover:border-red-300 transition-colors" style={{
                    clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))'
                  }} />
                </a>
                
                <a 
                  href="#projects" 
                  className="group relative px-8 py-4 bg-transparent border-2 border-red-500/50 hover:border-red-500 text-red-500 font-bold uppercase tracking-wider transition-all duration-300 hover:bg-red-500/10"
                  style={{
                    clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))'
                  }}
                >
                  <span className="relative flex items-center justify-center gap-2">
                    VIEW WORK
                  </span>
                </a>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative lg:ml-auto">
              {/* Glowing Frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-red-500/20 to-red-900/20 blur-2xl" />
              
              {/* Image Container with Cyberpunk Frame */}
              <div className="relative group">
                <div className="relative overflow-hidden bg-black" style={{
                  clipPath: 'polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 30px 100%, 0 calc(100% - 30px))'
                }}>
                  <img 
                    src="/images/hero_image2.jpg" 
                    alt="VIMAL PRASATH A" 
                    className={`w-full h-full object-cover ${glitchActive ? 'glitch-active' : ''}`}
                    style={{
                      filter: 'contrast(1.1) brightness(0.9)',
                      animation: 'pixelate 3s ease-in-out infinite'
                    }}
                  />
                  {/* Red overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/30 to-transparent mix-blend-multiply" />
                  {/* Scan lines */}
                  <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,0,0,0.1)_2px,rgba(255,0,0,0.1)_4px)]" />
                </div>
                
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-red-500 shadow-[0_0_20px_rgba(255,0,0,0.8)]" />
                <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-red-500 shadow-[0_0_20px_rgba(255,0,0,0.8)]" />
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-red-500 shadow-[0_0_20px_rgba(255,0,0,0.8)]" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-red-500 shadow-[0_0_20px_rgba(255,0,0,0.8)]" />
                
                {/* Status Badge */}
                <div className="absolute -bottom-4 -right-4 px-6 py-3 bg-black border-2 border-red-500 font-mono text-sm" style={{
                  clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)'
                }}>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_#ff0000]" />
                    <span className="text-red-500 font-bold uppercase tracking-wider">Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}