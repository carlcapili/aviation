const Hero = () => {
  return (
    <div className="relative h-screen" id="hero">
      <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none"></div>

      <img
        src="/images/hangar.jpg"
        alt="hangar"
        className="w-full h-full object-cover relative z-0"
      />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center space-y-5">
        <div className="text-white text-7xl font-bold">Track Your Miles</div>
        <div className="text-white text-4xl font-semibold"> without limits</div>
      </div>
    </div>
  );
};

export default Hero;
