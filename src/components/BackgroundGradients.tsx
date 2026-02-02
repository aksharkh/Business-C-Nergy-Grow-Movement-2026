const BackgroundGradients = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#eef2f6]">
      {/* Rich Blue Blob */}
      <div className="absolute top-[-10%] right-[-10%] w-[90vw] h-[90vw] bg-[#0F52BA]/10 rounded-full blur-[120px] mix-blend-multiply animate-pulse-soft"></div>
      {/* Cyan Blob */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[80vw] h-[80vw] bg-[#06b6d4]/10 rounded-full blur-[100px] mix-blend-multiply animate-float"></div>
      {/* Soft Indigo Blob */}
      <div className="absolute top-[40%] left-[20%] w-[50vw] h-[50vw] bg-[#6366f1]/10 rounded-full blur-[90px] mix-blend-multiply animate-float-reverse"></div>
      {/* Texture */}
      <div
        className="absolute inset-0 opacity-[0.3] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>
    </div>
  );
};

export default BackgroundGradients;
