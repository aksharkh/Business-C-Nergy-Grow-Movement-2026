const BackgroundGradients = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-white">
      {/* Rich Purple Blob - Top Right */}
      <div className="absolute top-[-20%] right-[-20%] w-[120vw] h-[120vw] md:w-[90vw] md:h-[90vw] mix-blend-multiply animate-pulse-soft" style={{ background: 'radial-gradient(closest-side, rgba(107, 45, 140, 0.25), transparent)' }}></div>
      {/* Light Purple Blob - Bottom Left */}
      <div className="absolute bottom-[-20%] left-[-20%] w-[120vw] h-[120vw] md:w-[80vw] md:h-[80vw] mix-blend-multiply animate-float" style={{ background: 'radial-gradient(closest-side, rgba(168, 120, 184, 0.2), transparent)' }}></div>
      {/* Soft Purple Blob - Center Left */}
      <div className="absolute top-[30%] left-[10%] w-[90vw] h-[90vw] md:w-[50vw] md:h-[50vw] mix-blend-multiply animate-float-reverse" style={{ background: 'radial-gradient(closest-side, rgba(139, 75, 168, 0.22), transparent)' }}></div>
      {/* Additional Purple Blob - Top Center */}
      <div className="absolute top-[0%] left-[30%] w-[100vw] h-[100vw] md:w-[60vw] md:h-[60vw] mix-blend-multiply animate-float" style={{ background: 'radial-gradient(closest-side, rgba(107, 45, 140, 0.18), transparent)' }}></div>
      {/* Additional Light Purple Blob - Right Center */}
      <div className="absolute top-[40%] right-[0%] w-[90vw] h-[90vw] md:w-[50vw] md:h-[50vw] mix-blend-multiply animate-pulse-soft" style={{ background: 'radial-gradient(closest-side, rgba(155, 108, 176, 0.15), transparent)' }}></div>
      {/* Texture */}
      <div
        className="absolute inset-0 opacity-[0.2] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>
    </div>
  );
};

export default BackgroundGradients;
