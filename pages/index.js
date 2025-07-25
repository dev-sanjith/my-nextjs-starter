import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen text-white bg-gradient-to-r from-black via-gray-900 to-black px-8 py-12 font-sans">
      {/* Navigation */}
      <header className="flex justify-between items-center mb-20">
        <h1 className="text-lg font-bold tracking-wide">HOME</h1>
        <nav className="space-x-10 text-sm font-semibold uppercase">
          <Link href="#games" className="hover:text-cyan-400 transition">Games</Link>
          <Link href="#about" className="hover:text-cyan-400 transition">About</Link>
          <Link href="/contact" className="hover:text-cyan-400 transition">Contact Us</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-start justify-between max-w-7xl mx-auto gap-20">
        {/* Left Side */}
        <div className="max-w-md">
          <h2 className="text-5xl font-extrabold leading-tight mb-6">
            NEXT-GEN VR<br />
            GAMING<br />
            EXPERIENCE
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Immersive virtual reality games for an unparalleled gaming adventure
          </p>
          <Link
            href="/contact"
            className="bg-cyan-400 text-black font-bold py-3 px-6 rounded shadow hover:bg-cyan-500 transition inline-block"
          >
            CONTACT US →
          </Link>
        </div>

        {/* Right Side */}
        <div className="text-gray-300 text-base leading-relaxed max-w-xl">
          <p className="mb-4">
            Virtlions Games is dedicated to creating standout VR games that captivate players worldwide
            with immersive expertise.
          </p>
          <p>
            With state-of-the-art technology, we deliver quality and innovation tailored to your vision.
          </p>
        </div>
      </section>
    </main>
  );
}
