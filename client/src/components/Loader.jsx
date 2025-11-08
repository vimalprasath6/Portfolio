import { useState, useEffect, useRef } from "react";

export default function Loader({ onLoadComplete }) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [tapCount, setTapCount] = useState(0);
  const videoRefLeft = useRef(null);
  const videoRefRight = useRef(null);
  const audioRef = useRef(null);
  const tapTimerRef = useRef(null);

  // Handle double tap
  const handleTap = () => {
    setTapCount(prev => prev + 1);
    
    // Clear existing timer
    if (tapTimerRef.current) {
      clearTimeout(tapTimerRef.current);
    }
    
    // Set new timer
    tapTimerRef.current = setTimeout(() => {
      setTapCount(0);
    }, 300); // Reset tap count after 300ms
  };

  // Check for double tap
  useEffect(() => {
    if (tapCount === 2) {
      setIsAnimating(true);
      setTimeout(() => {
        onLoadComplete?.();
      }, 800);
      setTapCount(0);
    }
  }, [tapCount, onLoadComplete]);

  // Auto complete after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true);
      setTimeout(() => {
        onLoadComplete?.();
      }, 800);
    }, 5000); // Changed to 5 seconds

    return () => clearTimeout(timer);
  }, [onLoadComplete]);

  // Sync videos
  useEffect(() => {
    const left = videoRefLeft.current;
    const right = videoRefRight.current;
    if (!left || !right) return;

    const syncVideos = () => {
      if (Math.abs(left.currentTime - right.currentTime) > 0.05) {
        right.currentTime = left.currentTime;
      }
    };
    left.addEventListener("timeupdate", syncVideos);
    return () => left.removeEventListener("timeupdate", syncVideos);
  }, []);

  // Play audio on first user interaction
  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.volume = 0;
        audioRef.current.play().catch(() => {});
        let vol = 0;
        const fade = setInterval(() => {
          if (vol < 1) {
            vol += 0.02;
            audioRef.current.volume = vol;
          } else {
            clearInterval(fade);
          }
        }, 50);
      }
      document.removeEventListener("click", playAudio);
    };
    document.addEventListener("click", playAudio, { once: true });
  }, []);

  return (
    <>
      <style>{`
        @keyframes fadeGlow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
      `}</style>

      <div 
        className="fixed inset-0 z-50 bg-black cursor-pointer"
        onClick={handleTap}
      >
        {/* Subtle red glow border */}
        <div 
          className="absolute inset-0 border-2 border-red-500/30 pointer-events-none"
          style={{ animation: 'fadeGlow 3s ease-in-out infinite' }}
        />

        {/* LEFT HALF */}
        <div
          className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
            isAnimating ? "-translate-x-full" : "translate-x-0"
          }`}
          style={{
            clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)",
          }}
        >
          <video
            ref={videoRefLeft}
            autoPlay
            playsInline
            muted
            className="w-full h-full object-cover"
            style={{
              filter: 'contrast(1.1) brightness(0.95)'
            }}
          >
            <source src="/images/Loader2.mp4" type="video/mp4" />
          </video>
          {/* Subtle red tint */}
          <div className="absolute inset-0 bg-red-900/10" />
        </div>
        {/* RIGHT HALF */}
        <div
          className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
            isAnimating ? "translate-x-full" : "translate-x-0"
          }`}
          style={{
            clipPath: "polygon(50% 0, 100% 0, 100% 100%, 50% 100%)",
          }}
        >
          <video
            ref={videoRefRight}
            autoPlay
            playsInline
            muted
            className="w-full h-full object-cover"
            style={{
              filter: 'contrast(1.1) brightness(0.95)'
            }}
          >
            <source src="/images/Loader2.mp4" type="video/mp4" />
          </video>
          {/* Subtle red tint */}
          <div className="absolute inset-0 bg-red-900/10" />
        </div>

        {/* Center subtle line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-red-500/40 -translate-x-1/2" />

        {/* Double tap hint - fades out after 2 seconds */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-red-400/60 text-sm font-mono animate-pulse">
          Double tap to skip
        </div>

        {/* AUDIO */}
        <audio ref={audioRef} src="/images/LoaderAudio.mp3" />
      </div>
    </>
  );
}