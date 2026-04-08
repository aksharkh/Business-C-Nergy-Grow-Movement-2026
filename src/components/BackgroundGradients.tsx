const BackgroundGradients = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-white">
      {/* High-Performance Consolidate Purple Blob - Top Right */}
      <div className="absolute top-[-20%] right-[-10%] w-[100vw] h-[100vw] md:w-[70vw] md:h-[70vw] opacity-40 mix-blend-multiply" 
        style={{ background: 'radial-gradient(closest-side, rgba(107, 45, 140, 0.15), transparent)' }}>
      </div>

      {/* High-Performance Consolidate Gold Blob - Bottom Left */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[100vw] h-[100vw] md:w-[70vw] md:h-[70vw] opacity-30 mix-blend-multiply" 
        style={{ background: 'radial-gradient(closest-side, rgba(212, 175, 55, 0.1), transparent)' }}>
      </div>

      {/* Very Subtle Texture (Reduced Opacity for performance) */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>
    </div>
  );
};

export default BackgroundGradients;
