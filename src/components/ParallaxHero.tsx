const ParallaxHero = () => {
  return (
    <div className="relative h-full w-full overflow-hidden select-none pointer-events-none">
      {/* Signature ambient radial light glow for light & dark mode */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(99,102,241,0.14),transparent)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(99,102,241,0.25),transparent)]" />

      {/* Clean bottom transition to next section */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-slate-50 dark:from-slate-950 to-transparent" />
    </div>
  );
};

export default ParallaxHero;