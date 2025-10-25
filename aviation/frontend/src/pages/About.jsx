const About = () => {
  return (
    <div className="min-h-screen bg-[#5688a8] relative pt-20 pb-20" id="about">
      <img
        src="/images/runway.png"
        alt="wing"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="relative z-10 flex flex-col items-center space-y-5 px-6">
        <div className="text-4xl text-white text-center">This is about.jsx</div>
        <div className="text-2xl text-white text-center max-w-3xl">
          Any short content about the web app
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6 w-full max-w-6xl">
          <div className="bg-red-300 h-90 flex items-center justify-center rounded">
            Box 1
          </div>
          <div className="bg-red-400 h-90 flex items-center justify-center rounded">
            Box 2
          </div>
          <div className="bg-red-500 h-90 flex items-center justify-center rounded">
            Box 3
          </div>
          <div className="bg-red-600 h-90 flex items-center justify-center rounded">
            Box 4
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
