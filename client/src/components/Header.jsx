import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'projects', 'contact'];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset';
  }, [mobileMenuOpen]);

  const handleNavClick = () => setMobileMenuOpen(false);

  return (
    <>
      <style>{`
        @keyframes glitchText {
          0% { text-shadow: 2px 0 #ff0000, -2px 0 #00ffff; }
          25% { text-shadow: -2px 0 #ff0000, 2px 0 #00ffff; }
          50% { text-shadow: 2px 0 #ff0000, -2px 0 #00ffff; }
          75% { text-shadow: -2px 0 #ff0000, 2px 0 #00ffff; }
          100% { text-shadow: 2px 0 #ff0000, -2px 0 #00ffff; }
        }
        
        @keyframes neonPulse {
          0%, 100% {
            box-shadow: 0 0 5px #ff0000, 0 0 10px #ff0000, 0 0 20px #ff0000, 0 0 40px #ff0000;
          }
          50% {
            box-shadow: 0 0 10px #ff0000, 0 0 20px #ff0000, 0 0 30px #ff0000, 0 0 60px #ff0000;
          }
        }
        
        @keyframes slideInGlitch {
          from {
            opacity: 0;
            transform: translateX(30px);
            filter: blur(4px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
            filter: blur(0);
          }
        }
        
        .hover-glitch:hover {
          animation: glitchText 0.3s ease-in-out;
        }
      `}</style>

      {/* Main Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled ? 'py-2' : 'py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div
            className={`relative backdrop-blur-xl bg-black/90 rounded-none sm:rounded-full border-2 border-red-500/50 transition-all duration-500 overflow-hidden ${
              scrolled ? 'shadow-[0_0_30px_rgba(255,0,0,0.5)]' : 'shadow-[0_0_20px_rgba(255,0,0,0.3)]'
            }`}
            style={{
              animation: 'neonPulse 3s ease-in-out infinite'
            }}
          >
            {/* Animated scan line */}
            <div className="absolute inset-0 bg-gradient-to-b from-red-500/20 via-transparent to-transparent animate-pulse opacity-50" />
            
            {/* Digital noise overlay */}
            <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />

            <div className="flex items-center justify-between px-4 sm:px-8 py-3 sm:py-4 relative z-10">
              {/* Logo with glitch effect */}
              <a
                href="#home"
                className="text-xl sm:text-2xl font-bold tracking-wider text-red-500 hover:text-red-400 transition-all duration-300 flex items-center gap-2 group hover-glitch"
              >
                <Zap className="text-red-500 group-hover:text-red-400 transition-colors" size={24} fill="currentColor" />
                <span className="relative">
                  VIMAL<span className="text-white">.DEV</span>
                  <span className="absolute inset-0 bg-red-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
              </a>

              {/* Desktop Menu */}
              <div className="hidden md:flex gap-8">
                {['home', 'about', 'projects', 'contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    className={`uppercase text-sm tracking-widest transition-all duration-300 relative group ${
                      activeSection === item
                        ? 'text-red-500 font-bold'
                        : 'text-gray-400 hover:text-red-400'
                    }`}
                  >
                    <span className="relative z-10 hover-glitch">{item}</span>
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-red-500 transition-all duration-300 ${
                        activeSection === item ? 'w-full shadow-[0_0_10px_#ff0000]' : 'w-0 group-hover:w-full'
                      }`}
                    />
                    {activeSection === item && (
                      <>
                        <span className="absolute inset-0 bg-red-500/10 blur-xl" />
                        <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-1 bg-red-500 rounded-full animate-ping" />
                      </>
                    )}
                  </a>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-red-500 hover:text-red-400 transition-all duration-300 relative group"
                aria-label="Toggle menu"
              >
                <div className="absolute inset-0 bg-red-500/20 rounded-lg blur group-hover:bg-red-500/30 transition-all" />
                {mobileMenuOpen ? <X size={24} className="relative z-10" /> : <Menu size={24} className="relative z-10" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-40 md:hidden transition-opacity duration-500 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={handleNavClick}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/50 via-black to-black" />
        {/* Digital grid overlay */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-black/98 backdrop-blur-xl shadow-2xl z-40 md:hidden transform transition-all duration-500 ease-out border-l-2 border-red-500/50 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          boxShadow: mobileMenuOpen ? '-10px 0 50px rgba(255, 0, 0, 0.3)' : 'none'
        }}
      >
        {/* Glowing edge */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 via-red-600 to-red-500 shadow-[0_0_20px_rgba(255,0,0,0.8)]" />
        
        {/* Scan line effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-red-500/10 via-transparent to-transparent animate-pulse" />

        <div className="flex flex-col h-full pt-24 px-8 relative z-10">
          {['home', 'about', 'projects', 'contact'].map((item, index) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={handleNavClick}
              className={`uppercase text-lg py-5 border-b border-red-900/30 transition-all duration-300 transform relative group ${
                activeSection === item
                  ? 'text-red-500 font-bold translate-x-4'
                  : 'text-gray-400 hover:text-red-400 hover:translate-x-4'
              }`}
              style={{
                animation: mobileMenuOpen
                  ? `slideInGlitch 0.5s ease-out ${index * 0.1}s both`
                  : 'none',
              }}
            >
              {activeSection === item && (
                <>
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-10 bg-red-500 shadow-[0_0_10px_#ff0000]" />
                  <span className="absolute left-2 top-1/2 -translate-y-1/2 w-1 h-1 bg-red-500 rounded-full animate-ping" />
                </>
              )}
              
              <span className={`absolute inset-0 bg-red-500/5 blur-xl transition-opacity ${
                activeSection === item ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              }`} />
              
              <span className="relative z-10 tracking-widest hover-glitch">{item}</span>
              
              {/* Cyberpunk corner accent */}
              <span className="absolute right-0 top-0 w-8 h-8 border-t-2 border-r-2 border-red-500/30 group-hover:border-red-500/60 transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </>
  );
}