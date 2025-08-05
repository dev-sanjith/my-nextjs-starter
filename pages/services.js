// pages/services.js

import Head from 'next/head';
import Link from 'next/link';
import { IoMdArrowBack } from 'react-icons/io';

const services = [
  { title: 'Virtual Reality',        img: '/services_images/vr_head.png',    side: 'left'  },
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

      <div
        className="min-h-screen text-white pt-24 relative"
        style={{
          background: 'radial-gradient(circle at top left, #090a0f, #1f1b3a, #000)',
          backgroundBlendMode: 'soft-light',
        }}
      >
        {/* Back Button */}
        <Link
          href="/"
          className="absolute top-6 right-6 text-white text-3xl hover:opacity-75 transition"
        >
          <IoMdArrowBack />
        </Link>

        {/* Page Title */}
        <h1
          className="text-center uppercase font-hero text-6xl mb-20"
          style={{ fontFamily: "'Exo 2', sans-serif" }}
        >
          our services
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
