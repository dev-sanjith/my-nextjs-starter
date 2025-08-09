import Head from 'next/head';
import Link from 'next/link';
import { RiArrowLeftDoubleLine } from 'react-icons/ri'; // Back icon

const services = [
  { title: 'Virtual Reality',         img: '/services_images/vr_head.png',    side: 'left'  },
  { title: 'Augmented Reality',       img: '/services_images/vr_using.png',   side: 'right' },
  { title: 'Immersive Mixed Reality', img: '/services_images/arhouse.png',    side: 'left'  },
  { title: 'Artificial Intelligence', img: '/services_images/armodel.png',    side: 'right' },
  { title: 'Unity Development',       img: '/services_images/house360.png',   side: 'left'  },
  { title: '3D Modeling',             img: '/services_images/touch_crop.png', side: 'right' },
];

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Our Services – Virtilens</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Exo+2:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main
        className="min-h-screen text-white pt-24 relative overflow-hidden services-theme"
        style={{ fontFamily: "'Exo 2', sans-serif" }}
      >
        {/* BACKGROUND LAYERS */}
        <div className="absolute inset-0 -z-10 bg-deepspace" />
        <div className="absolute inset-0 -z-10 bg-grid opacity-[0.08]" aria-hidden />
        {/* Soft glows */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -left-24 w-[42rem] h-[42rem] blur-[100px] opacity-40"
          style={{
            background:
              'radial-gradient(closest-side, rgba(92,106,196,0.8), rgba(193,201,255,0.25), transparent 70%)',
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -right-24 w-[46rem] h-[46rem] blur-[110px] opacity-30"
          style={{
            background:
              'radial-gradient(closest-side, rgba(193,201,255,0.7), rgba(92,106,196,0.25), transparent 70%)',
          }}
        />
        {/* animated nebula veil */}
        <div className="absolute inset-0 -z-10 animate-nebulashift mix-blend-screen opacity-20 bg-nebula" aria-hidden />

        {/* Back Button */}
        <Link
          href="/"
          aria-label="Back"
          className="absolute right-6 top-6 bg-[#1f1b3a] hover:bg-[#3e3b78] border-2 border-[#5c6ac4] rounded-full w-12 h-12 flex items-center justify-center shadow-lg z-20 transition"
        >
          <RiArrowLeftDoubleLine className="text-[#c1c9ff] w-6 h-6" />
        </Link>

        {/* Title */}
        <header className="relative z-10">
          <h1 className="text-center text-4xl md:text-6xl font-extrabold uppercase tracking-wide text-[#c1c9ff] drop-shadow-[0_2px_12px_#181a35]">
            Our Services
          </h1>
          <div className="mx-auto mt-4 h-[3px] w-24 md:w-32 rounded-full bg-gradient-to-r from-[#5c6ac4] via-[#c1c9ff] to-[#5c6ac4]" />
        </header>

        {/* Services List */}
        <section className="max-w-6xl mx-auto px-4 md:px-8 lg:px-10 mt-16 space-y-12 relative z-10">
          <ul role="list" className="space-y-10">
            {services.map(({ title, img, side }, idx) => (
              <li key={idx}>
                <ServiceRow title={title} img={img} side={side} />
              </li>
            ))}
          </ul>
        </section>

        {/* Page padding bottom */}
        <div className="h-20" />

        {/* Scoped styles */}
        <style jsx global>{`
          /* THEME TOKENS (scoped to this page via .services-theme) */
          .services-theme {
            --bg-0: #070812;
            --bg-1: #0c0f1f;
            --bg-2: #181a35;
            --ink-1: #c1c9ff;
            --indigo: #5c6ac4;
            --glass: rgba(15, 17, 35, 0.6);
            --glass-strong: rgba(20, 22, 46, 0.9);
          }

          /* Deep space with gentle vignette + direction */
          .bg-deepspace {
            background:
              radial-gradient(1000px 600px at 20% 15%, #10122a 0%, #0a0c1d 40%, var(--bg-0) 100%),
              linear-gradient(135deg, #1b1840 0%, #0e0f23 45%, #070812 100%);
            background-blend-mode: overlay;
          }

          /* Subtle tech grid */
          .bg-grid {
            background:
              linear-gradient(transparent 95%, rgba(193, 201, 255, 0.15) 100%),
              linear-gradient(90deg, transparent 95%, rgba(193, 201, 255, 0.15) 100%);
            background-size: 40px 40px, 40px 40px;
          }

          /* Animated nebula veil (pure CSS, GPU-friendly) */
          .bg-nebula {
            background: radial-gradient(60% 50% at 30% 30%, rgba(92, 106, 196, 0.35), transparent 60%),
              radial-gradient(50% 40% at 70% 60%, rgba(193, 201, 255, 0.35), transparent 60%);
            filter: saturate(120%) blur(8px);
          }
          @keyframes nebulashift {
            0% { transform: translate3d(0,0,0) scale(1); }
            50% { transform: translate3d(-2%, -1%, 0) scale(1.03); }
            100% { transform: translate3d(0,0,0) scale(1); }
          }
          .animate-nebulashift { animation: nebulashift 14s ease-in-out infinite; }

          /* Glass card with gradient border (mask trick) */
          .glass-card {
            position: relative;
            background: var(--glass);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            overflow: hidden;
            box-shadow:
              0 10px 30px rgba(0, 0, 0, 0.55),
              inset 0 1px 0 rgba(255, 255, 255, 0.03);
          }
          .glass-card::before {
            content: '';
            position: absolute;
            inset: 0;
            padding: 1.2px;
            border-radius: 20px;
            background: linear-gradient(135deg, #5c6ac4, #c1c9ff, #5c6ac4);
            -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
            -webkit-mask-composite: xor;
                    mask-composite: exclude;
            pointer-events: none;
            opacity: 0.9;
          }
          .glass-card:hover {
            transform: translateY(-2px);
            transition: transform 250ms ease, box-shadow 250ms ease;
            box-shadow:
              0 14px 36px rgba(0, 0, 0, 0.6),
              inset 0 1px 0 rgba(255, 255, 255, 0.04);
          }

          /* Reveal-in animation */
          @keyframes risein {
            from { opacity: 0; transform: translateY(12px) scale(0.995); }
            to   { opacity: 1; transform: translateY(0)    scale(1); }
          }
          .anim-risein { animation: risein 520ms var(--delay, 0ms) cubic-bezier(.2,.7,.2,1) both; }

          /* Accent bar that flips based on row side */
          .accent-left  { background: linear-gradient(180deg, #c1c9ff, #5c6ac4); }
          .accent-right { background: linear-gradient(180deg, #5c6ac4, #c1c9ff); }
        `}</style>
      </main>
    </>
  );
}

/** Row component: glass panel + image + text, side-aware */
function ServiceRow({ title, img, side }) {
  const isLeft = side === 'left';

  return (
    <div
      className={`glass-card anim-risein ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex flex-col`}
      style={{ '--delay': '80ms' }}
    >
      {/* Accent rail */}
      <div
        className={`hidden md:block ${isLeft ? 'accent-left' : 'accent-right'}`}
        style={{ width: 6 }}
        aria-hidden
      />

      {/* Image */}
      <div className="w-full md:w-1/2 p-6 md:p-8 flex items-center justify-center">
        <img
          src={img}
          alt={title}
          loading="lazy"
          className="w-full max-w-md h-auto object-contain rounded-xl shadow-2xl"
        />
      </div>

      {/* Text */}
      <div className="w-full md:w-1/2 p-6 md:p-8 flex items-center">
        <div className={`${isLeft ? 'md:pl-2' : 'md:pr-2'}`}>
          <h2 className="text-2xl md:text-3xl font-bold text-[#c1c9ff] tracking-wide">
            <span className="align-middle mr-2 inline-block h-2.5 w-2.5 rounded-full bg-[#5c6ac4] shadow-[0_0_12px_#5c6ac4]" />
            {title}
          </h2>
          <p className="mt-3 text-base md:text-[17px] text-slate-200/85 leading-relaxed">
            We deliver {title.toLowerCase()} solutions tailored for immersive, high-performance experiences.
          </p>
        </div>
      </div>
    </div>
  );
}
