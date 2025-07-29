import Header from '../components/Header';
import FeaturedGames from '../components/FeaturedGames';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <div className="relative">
      <Header />

      {/* --- HERO SECTION --- */}
      <main id="home" className="relative h-[100vh] sm:h-screen w-full overflow-hidden bg-black">
        {/* Video background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/virtlens_intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div
          className="absolute inset-0 z-10 pointer-events-none block sm:hidden"
          style={{
            background: 'linear-gradient(to bottom, rgba(18,5,26,0.3) 0%, rgba(18,5,26,0.9) 100%)'
          }}
        />
        <div
          className="absolute left-1/2 bottom-4 sm:bottom-12 md:bottom-24 transform -translate-x-1/2 z-20 flex flex-col items-center w-full"
          style={{
            paddingLeft: 24,
            paddingRight: 24,
          }}
        >
          <h1 className="font-hero text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#f6f6fa] text-center drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)] mb-4 tracking-widest">
            <span className="hidden lg:inline-block lg:whitespace-nowrap">
              NEXT-GEN VR GAMING EXPERIENCE
            </span>
            <span className="inline-block lg:hidden">
              NEXT‑GEN VR<br />GAMING<br />EXPERIENCE
            </span>
          </h1>
          <p className="mt-2 text-[#dedbee] text-base sm:text-xl md:text-2xl text-center drop-shadow-md tracking-wide font-medium max-w-xl">
            Immersive virtual reality games for an unparalleled gaming adventure
          </p>
        </div>
      </main>

      <section id="games">
        <FeaturedGames />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
}
