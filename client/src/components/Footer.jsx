import React from 'react';
import { Github, Linkedin, Mail, Terminal } from 'lucide-react';

export default function Footer() {
  return (
    <>
      <style>{`
        @keyframes dataFlow {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>

      <section id="contact" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 md:py-32 bg-black overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>

        {/* Red Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-3xl" />

        <div className="max-w-4xl w-full space-y-12 relative z-10">
          {/* Header */}
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-red-500/10 border border-red-500/30 backdrop-blur-sm" style={{
              clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)'
            }}>
              <Terminal className="w-5 h-5 text-red-500" />
              <span className="text-sm font-mono uppercase text-red-400 tracking-widest">Contact_Interface.sys</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight font-mono">
              &lt;<span className="text-red-500">CONNECT</span>/&gt;
            </h2>
            <div className="w-32 h-1 bg-red-500 mx-auto shadow-[0_0_10px_#ff0000]" />
          </div>

          {/* Main Contact Card */}
          <div className="relative bg-black border-2 border-red-500/50 p-12 md:p-16 transition-all duration-500 hover:border-red-500" style={{
            clipPath: 'polygon(30px 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%, 0 30px)'
          }}>
            {/* Animated data stream top */}
            <div className="absolute top-0 left-0 right-0 h-0.5 overflow-hidden">
              <div className="h-full w-32 bg-gradient-to-r from-transparent via-red-500 to-transparent" style={{ animation: 'dataFlow 3s ease-in-out infinite' }} />
            </div>

            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />

            <div className="relative space-y-8">
              {/* Message */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-red-500 font-mono text-sm mb-4">
                  <span className="text-red-600">&gt;&gt;</span>
                  <span>MESSAGE_SYSTEM</span>
                </div>
                <p className="text-xl md:text-2xl text-gray-300 text-center font-light leading-relaxed">
                  I'm always interested in hearing about <span className="text-red-500 font-bold">new projects</span> and <span className="text-red-500 font-bold">opportunities</span>.
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex justify-center gap-6 pt-8">
                {/* Email */}
                <a
                  href="mailto:vimalprasatharjunan@gmail.com"
                  className="group relative bg-black border-2 border-red-500/50 hover:border-red-500 w-16 h-16 flex items-center justify-center transition-all duration-300 hover:bg-red-500/10 hover:scale-110"
                  style={{
                    clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))'
                  }}
                >
                  <div className="absolute inset-0 bg-red-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Mail className="w-7 h-7 text-red-500 relative z-10" />
                  
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-red-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-red-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/vimalprasath6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-black border-2 border-red-500/50 hover:border-red-500 w-16 h-16 flex items-center justify-center transition-all duration-300 hover:bg-red-500/10 hover:scale-110"
                  style={{
                    clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))'
                  }}
                >
                  <div className="absolute inset-0 bg-red-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Github className="w-7 h-7 text-red-500 relative z-10 group-hover:rotate-12 transition-transform" />
                  
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-red-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-red-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/vimal-prasath-b534542a0?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-black border-2 border-red-500/50 hover:border-red-500 w-16 h-16 flex items-center justify-center transition-all duration-300 hover:bg-red-500/10 hover:scale-110"
                  style={{
                    clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))'
                  }}
                >
                  <div className="absolute inset-0 bg-red-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Linkedin className="w-7 h-7 text-red-500 relative z-10" />
                  
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-red-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-red-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>

            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-red-500" />
            <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-red-500" />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-red-500" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-red-500" />

            {/* Animated data stream bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 overflow-hidden">
              <div className="h-full w-32 bg-gradient-to-r from-transparent via-red-500 to-transparent" style={{ animation: 'dataFlow 3s ease-in-out infinite 1.5s' }} />
            </div>
          </div>

          {/* Footer Info */}
          <div className="text-center space-y-4 pt-8">
            <div className="relative inline-block">
              <div className="flex items-center justify-center gap-2 text-gray-600 font-mono text-sm">
                <span>&lt;</span>
                <span className="text-red-500">Built with React + Tailwind</span>
                <span>/&gt;</span>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-2 text-gray-600 font-mono text-xs">
              <div className="w-2 h-2 bg-red-500 rounded-full shadow-[0_0_10px_#ff0000]" style={{ animation: 'pulse 2s ease-in-out infinite' }} />
              <span>© 2025 VIMAL PRASATH A</span>
              <div className="w-2 h-2 bg-red-500 rounded-full shadow-[0_0_10px_#ff0000]" style={{ animation: 'pulse 2s ease-in-out infinite 1s' }} />
            </div>

            {/* System Status */}
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-red-500/5 border border-red-500/20 font-mono text-xs text-red-400 uppercase tracking-wider" style={{
              clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)'
            }}>
              <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-ping" />
              <span>All Systems Operational</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}