import Head from 'next/head';
import Link from 'next/link';
import { RiArrowLeftDoubleLine } from 'react-icons/ri'; // Back icon

const services = [
  { title: 'Virtual Reality',        img: '/services_images/vr_head.png',    side: 'left'  },
  { title: 'Augmented Reality',      img: '/services_images/vr_using.png',   side: 'right' },
  { title: 'Immersive Mixed Reality',img: '/services_images/arhouse.png',    side: 'left'  },
  { title: 'Artificial Intelligence',img: '/services_images/armodel.png',    side: 'right' },
  { title: 'Unity Development',      img: '/services_images/house360.png',   side: 'left'  },
  { title: '3D Modeling',            img: '/services_images/touch_crop.png', side: 'right' },
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

      <div
        className="min-h-screen text-white pt-24 relative"
        style={{
          background: 'radial-gradient(circle at top left, #090a0f, #1f1b3a, #000)',
          backgroundBlendMode: 'soft-light',
        }}
      >
        {/* Back Button - matching rest of theme */}
        <Link
          href="/"
          aria-label="Back"
          className="absolute right-6 top-6 bg-[#1f1b3a] hover:bg-[#3e3b78] border-2 border-[#5c6ac4] rounded-full w-12 h-12 flex items-center justify-center shadow-lg z-20 transition"
        >
          <RiArrowLeftDoubleLine className="text-[#c1c9ff] w-6 h-6" />
        </Link>

        {/* Page Title - big & bold like game pages */}
        <h1
          className="text-center text-4xl md:text-6xl font-hero font-extrabold uppercase mb-20 tracking-wide"
          style={{
            fontFamily: "'Exo 2', sans-serif",
            color: '#c1c9ff',
            textShadow: '0 2px 12px #181a35, 0 0 10px #5c6ac4aa',
          }}
        >
          Our Services
        </h1>

        {/* Services List */}
        <div className="max-w-5xl mx-auto px-4 space-y-16">
          {services.map(({ title, img, side }, idx) => (
            <div
              key={idx}
              className={`flex flex-col md:flex-row items-center ${
                side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-8`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src={img}
                  alt={title}
                  className="w-full max-w-md h-auto object-contain rounded-lg shadow-2xl"
                />
              </div>

              {/* Text */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <p
                  className="text-3xl font-bold"
                  style={{ fontFamily: "'Exo 2', sans-serif" }}
                >
                  • {title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
