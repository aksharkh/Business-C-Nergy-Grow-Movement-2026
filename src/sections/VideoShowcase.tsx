import { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import Reveal from '../components/Reveal';

const VideoShowcase = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(currentProgress);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = x / rect.width;
      videoRef.current.currentTime = percentage * videoRef.current.duration;
      setProgress(percentage * 100);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="py-24 md:py-32 bg-[#11052C] relative overflow-hidden">
      {/* Background Glow - Performant Radial Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] bg-[#6B2D8C]/15 pointer-events-none z-0" style={{ background: 'radial-gradient(circle at center, rgba(107, 45, 140, 0.2), transparent 70%)' }}></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 text-center">
        <Reveal direction="down" className="mb-16">
          <p className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase mb-4 text-xs md:text-sm">Experience the Energy</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight">
            The Movement <span className="italic text-[#D4AF37]">In Action</span>
          </h2>
        </Reveal>

        <Reveal delay={300} direction="up" className="relative group">
          {/* Cinematic Frame */}
          <div className="relative aspect-video w-full max-w-6xl mx-auto rounded-[2rem] md:rounded-[4rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 bg-black/40 backdrop-blur-sm">
            
            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#11052C]/40 to-transparent z-10 pointer-events-none"></div>
            
            {/* Video Element */}
            <video
              ref={videoRef}
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
              autoPlay
              muted={isMuted}
              loop
              playsInline
              preload="metadata"
              poster="/videos/poster.png"
              onClick={togglePlay}
              onTimeUpdate={handleTimeUpdate}
            >
              <source src="/videos/explore_sabah.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* minimalistic Slider */}
            <div 
              className="absolute bottom-0 left-0 w-full h-1 md:h-1.5 bg-white/10 cursor-pointer z-30 group/slider transition-all hover:h-2 md:hover:h-3"
              onClick={handleSeek}
            >
              <div 
                className="h-full bg-gradient-to-r from-[#6B2D8C] to-[#D4AF37] relative transition-all duration-100"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 md:w-4 md:h-4 bg-white rounded-full scale-0 group-hover/slider:scale-100 transition-transform shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
              </div>
            </div>

            {/* Premium Controls */}
            <div className="absolute bottom-6 md:bottom-12 left-6 md:left-12 right-6 md:right-12 z-20 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="flex flex-col items-start">
                <span className="text-white font-serif italic text-xl md:text-3xl mb-1 md:mb-2 drop-shadow-lg">Experience Malaysia 2026</span>
                <span className="text-[#D4AF37] text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold drop-shadow-md">The Sabah Chapter</span>
              </div>
              
              <div className="flex items-center gap-3 md:gap-6">
                {/* Sound Toggle */}
                <button 
                  onClick={toggleMute}
                  className="cursor-pointer w-10 h-10 md:w-16 md:h-16 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-xl bg-white/10 hover:bg-white/20 transition-all duration-300 group/btn"
                >
                  {isMuted ? (
                    <VolumeX className="text-white w-4 h-4 md:w-6 md:h-6 group-hover/btn:scale-110 transition-transform" />
                  ) : (
                    <Volume2 className="text-white w-4 h-4 md:w-6 md:h-6 group-hover/btn:scale-110 transition-transform" />
                  )}
                </button>

                {/* Play/Pause Toggle */}
                <button 
                  onClick={togglePlay}
                  className=" cursor-pointer w-10 h-10 md:w-16 md:h-16 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-xl bg-white/10 hover:bg-white/20 transition-all duration-300 group/btn"
                >
                  {isPlaying ? (
                    <Pause className="text-white w-4 h-4 md:w-6 md:h-6 group-hover/btn:scale-110 transition-transform" />
                  ) : (
                    <Play className="text-white w-4 h-4 md:w-6 md:h-6 group-hover/btn:scale-110 transition-transform ml-1" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Decorative Corner Ornaments */}
          <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-[#D4AF37]/30 rounded-tl-3xl pointer-events-none hidden md:block"></div>
          <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-[#D4AF37]/30 rounded-br-3xl pointer-events-none hidden md:block"></div>
        </Reveal>

        <Reveal delay={600} className="mt-12 md:mt-16 text-slate-400 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed font-light italic px-4">
          "Witness the convergence of entrepreneurs, investors, and visionaries shaping the regenerative future of Asia's business ecosystem."
        </Reveal>
      </div>
    </section>
  );
};

export default VideoShowcase;
