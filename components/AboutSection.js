export default function AboutSection() {
  return (
    <section className="w-full min-h-[80vh] bg-black flex items-center justify-center px-4 py-16">
      <div className="max-w-7xl w-full flex flex-col md:flex-row gap-12">
        {/* LEFT COLUMN: HEADINGS */}
        <div className="md:w-1/2 w-full flex flex-col justify-start">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-8 leading-[1.1] tracking-tight text-left">
            WHAT MAKES VIRTLENS<br />
            A LEADING VR GAME<br />
            DEVELOPMENT STUDIO
          </h2>
        </div>

        {/* RIGHT COLUMN: PARAGRAPH + CARDS */}
        <div className="md:w-1/2 w-full flex flex-col justify-start">
          <p className="text-lg text-[#c6cad1] mb-8 leading-relaxed text-left max-w-2xl">
            Virtlens VR is dedicated to creating standout games that captivate players worldwide. With a team of experienced VR game developers, artists, and cutting-edge technology, we deliver premium quality, innovation, and memorable experiences tailored to your vision.
          </p>
          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <div className="bg-[#191b21] p-6 rounded-xl text-left">
              <div className="font-bold text-white text-lg mb-1">COMMITTED LONG-TERM PARTNERSHIP</div>
              <div className="text-[#c6cad1] text-base leading-snug">
                8+ years of experience delivering immersive VR solutions to global partners, with a focus on long-term relationships and innovation.
              </div>
            </div>
            <div className="bg-[#191b21] p-6 rounded-xl text-left">
              <div className="font-bold text-white text-lg mb-1">FULL-CYCLE VR DEVELOPMENT</div>
              <div className="text-[#c6cad1] text-base leading-snug">
                End-to-end development, from ideation and design to deployment and live operations, ensuring a smooth journey for every project.
              </div>
            </div>
            <div className="bg-[#191b21] p-6 rounded-xl text-left">
              <div className="font-bold text-white text-lg mb-1">LATEST TECHNOLOGIES</div>
              <div className="text-[#c6cad1] text-base leading-snug">
                We leverage the latest VR hardware, engines, and cloud platforms to deliver unforgettable and scalable game experiences.
              </div>
            </div>
            <div className="bg-[#191b21] p-6 rounded-xl text-left">
              <div className="font-bold text-white text-lg mb-1">GLOBAL RECOGNITION</div>
              <div className="text-[#c6cad1] text-base leading-snug">
                Recognized for outstanding quality and player engagement, trusted by partners around the world for our reliability and creativity.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
