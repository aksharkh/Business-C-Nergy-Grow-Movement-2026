const BackgroundGradients = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-white">
      {/* Rich Purple Blob - Top Right */}
      <div className="absolute top-[-10%] right-[-10%] w-[90vw] h-[90vw] bg-[#6B2D8C]/25 rounded-full blur-[100px] mix-blend-multiply animate-pulse-soft"></div>
      {/* Light Purple Blob - Bottom Left */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[80vw] h-[80vw] bg-[#A878B8]/20 rounded-full blur-[80px] mix-blend-multiply animate-float"></div>
      {/* Soft Purple Blob - Center Left */}
      <div className="absolute top-[40%] left-[20%] w-[50vw] h-[50vw] bg-[#8B4BA8]/22 rounded-full blur-[80px] mix-blend-multiply animate-float-reverse"></div>
      {/* Additional Purple Blob - Top Center */}
      <div className="absolute top-[10%] left-[50%] w-[60vw] h-[60vw] bg-[#6B2D8C]/18 rounded-full blur-[90px] mix-blend-multiply animate-float"></div>
      {/* Additional Light Purple Blob - Right Center */}
      <div className="absolute top-[50%] right-[10%] w-[50vw] h-[50vw] bg-[#9B6CB0]/15 rounded-full blur-[85px] mix-blend-multiply animate-pulse-soft"></div>
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
