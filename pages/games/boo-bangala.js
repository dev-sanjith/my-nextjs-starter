import { useRouter } from 'next/router';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const screenshots = [
  '/screenshots/boo-bangala-1.jpg',
  '/screenshots/boo-bangala-2.jpg',
  '/screenshots/boo-bangala-3.jpg',
];

export default function BooBangala() {
  const router = useRouter();
  const [logoError, setLogoError] = useState(false);

  // Violet theme colors
  const borderViolet = '#7c3aed';
  const accentViolet = '#c084fc';
  const darkViolet = '#18152a';

  return (
    <div
      className="min-h-screen flex flex-col items-center py-10 px-4 md:px-8"
      style={{
        background: 'radial-gradient(ellipse at top left, #18152a 70%, #100c1a 100%)',
      }}
    >
      {/* TITLE with CLOSE BUTTON (identical to V20 Cricket) */}
      <div className="w-full max-w-2xl flex flex-col items-center mb-6">
        <div className="w-full flex justify-center items-center relative">
          <hr className="flex-1" style={{ borderColor: borderViolet }} />
          <h1
            className="mx-4 text-3xl md:text-4xl font-hero font-extrabold flex items-center"
            style={{
              color: accentViolet,
              textShadow: '0 2px 14px #18152a, 0 0 10px #7c3aed55',
            }}
          >
            <span className="ml-2">BOO BANGLA</span>
          </h1>
          <hr className="flex-1" style={{ borderColor: borderViolet }} />
          {/* Close Button - absolutely positioned */}
          <button
            onClick={() => router.push('/')}
            aria-label="Close"
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#24143a] hover:bg-[#a855f7] border-2 border-[#7c3aed] rounded-full w-12 h-12 flex items-center justify-center transition shadow-lg z-20"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-[#d1a8ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
            </svg>
          </button>
        </div>
      </div>

      {/* LOGO */}
      <div className="w-full max-w-xs md:max-w-md flex items-center justify-center mb-6">
        <div
          className="rounded-2xl border-2 shadow-xl p-8 w-full flex items-center justify-center"
          style={{
            background: darkViolet,
            borderColor: borderViolet,
            height: 220,
          }}
        >
          <img
            src={logoError ? '/fallback-logo.png' : '/BOO.png'}
            alt="Boo Bangla Logo"
            className="max-h-[140px] object-contain w-auto mx-auto"
            draggable={false}
            onError={() => setLogoError(true)}
          />
        </div>
      </div>

      {/* DESCRIPTION */}
      <div
        className="w-full max-w-xl rounded-xl mb-8 px-6 py-5 border shadow text-center"
        style={{
          background: '#1d1630',
          borderColor: '#5b21b6',
        }}
      >
        <p
          className="font-hero text-lg mb-1 tracking-wide"
          style={{ color: accentViolet }}
        >
          Step into the haunted Boo Bangla...
        </p>
        <p className="font-hero text-base text-[#ece7fa]">
          Step into the haunted Boo Bangla for a spine-chilling VR horror experience.<br />
          <span className="text-[#a855f7] font-bold">Are you brave enough to explore?</span>
        </p>
      </div>

      {/* SCREENSHOTS CAROUSEL */}
      <div className="w-full max-w-2xl mb-10 flex flex-col items-center">
        <div
          className="mb-3 text-center text-sm tracking-wider font-hero"
          style={{ color: accentViolet }}
        >
          IN-GAME SCREENSHOTS
        </div>
        <div
          className="w-full rounded-xl overflow-hidden border shadow-md"
          style={{
            borderColor: borderViolet,
            background: '#201634',
          }}
        >
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
            slidesPerView={1}
            spaceBetween={12}
            className="w-full"
          >
            {screenshots.map((src, i) => (
              <SwiperSlide key={i}>
                <div className="relative w-full pb-[56.25%]">
                  <img
                    src={src}
                    alt={`Boo Bangla Screenshot ${i + 1}`}
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
                    draggable={false}
                    style={{ background: '#18152a' }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
