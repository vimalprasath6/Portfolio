import { useState } from 'react';
import Loader from './components/Loader';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <style>{`
        @keyframes digitalNoise {
          0%, 100% { opacity: 0.03; }
          50% { opacity: 0.06; }
        }
        
        * {
          scrollbar-width: thin;
          scrollbar-color: #ff0000 #0a0a0a;
        }
        
        *::-webkit-scrollbar {
          width: 8px;
        }
        
        *::-webkit-scrollbar-track {
          background: #0a0a0a;
        }
        
        *::-webkit-scrollbar-thumb {
          background: #ff0000;
          border-radius: 4px;
        }
        
        *::-webkit-scrollbar-thumb:hover {
          background: #cc0000;
        }
      `}</style>

      {isLoading && <Loader onLoadComplete={() => setIsLoading(false)} />}
      
      <div className="w-screen min-h-screen overflow-x-hidden bg-black relative">
        {/* Digital noise overlay */}
        <div 
          className="fixed inset-0 pointer-events-none z-50 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' fill='%23ff0000'/%3E%3C/svg%3E")`,
            animation: 'digitalNoise 0.5s infinite'
          }}
        />

        {/* Scanline effect */}
        <div 
          className="fixed inset-0 pointer-events-none z-40"
          style={{
            background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 0, 0, 0.03) 2px, rgba(255, 0, 0, 0.03) 4px)'
          }}
        />

        {/* Main content */}
        <div className="relative z-10">
          <Header />
          <Hero />
          <About />
          <Projects />
          <Footer />
        </div>
      </div>
    </>
  );
}