const BackgroundOverlay = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0 select-none">
      {/* Subtle modern cyber dot matrix: visible and crisp in light mode & sleek in dark mode */}
      <div 
        className="absolute inset-0 opacity-[0.35] dark:opacity-[0.2]"
        style={{
          backgroundImage: `radial-gradient(rgba(37, 99, 235, 0.25) 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
        }}
      />

      {/* Ambient subtle tint across light mode */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/[0.02] via-transparent to-blue-500/[0.02] dark:from-transparent dark:to-transparent" />

      {/* Ambient Radial Glow Gradients - Deep electric in dark mode */}
      <div className="hidden dark:block absolute -top-40 -left-40 w-96 h-96 bg-blue-600/12 rounded-full blur-3xl" />
      <div className="hidden dark:block absolute top-1/2 -right-40 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
      <div className="hidden dark:block absolute -bottom-40 left-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
    </div>
  );
};

export default BackgroundOverlay;
