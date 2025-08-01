import { useRouter } from 'next/router';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const screenshots = [
  '/screenshots/krazy-pong-1.jpg',
  '/screenshots/krazy-pong-2.jpg',
  '/screenshots/krazy-pong-3.jpg',
];

export default function KrazyPong() {
  const router = useRouter();
  const [logoError, setLogoError] = useState(false);

  // Brown theme
  const borderBrown = '#a16207';   // dark gold/brown border
  const accentBrown = '#fbbf24';   // bright amber accent
  const darkBrown = '#251a11';     // darkest brown bg

  return (
    <div
      className="min-h-screen flex flex-col items-center py-10 px-4 md:px-8"
      style={{
        background: 'radial-gradient(ellipse at top left, #251a11 75%, #18120c 100%)',
      }}
    >
      {/* TITLE with CLOSE BUTTON (like V20 Cricket) */}
      <div className="w-full max-w-2xl flex flex-col items-center mb-6">
        <div className="w-full flex justify-center items-center relative">
          <hr className="flex-1" style={{ borderColor: borderBrown }} />
          <h1
            className="mx-4 text-3xl md:text-4xl font-hero font-extrabold flex items-center"
            style={{
              color: accentBrown,
              textShadow: '0 2px 14px #251a11, 0 0 10px #a1620775',
            }}
          >
            <span className="ml-2">KRAZY PONG</span>
          </h1>
          <hr className="flex-1" style={{ borderColor: borderBrown }} />
          {/* Close Button - absolutely positioned */}
          <button
            onClick={() => router.push('/')}
            aria-label="Close"
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#3c2415] hover:bg-[#fbbf24] border-2 border-[#a16207] rounded-full w-12 h-12 flex items-center justify-center transition shadow-lg z-20"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-[#fffbe8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
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
            background: darkBrown,
            borderColor: borderBrown,
            height: 220,
          }}
        >
          <img
            src={logoError ? '/fallback-logo.png' : '/krazy-pong.jpg'}
            alt="Krazy Pong Logo"
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
          background: '#1c1409',
          borderColor: '#a16207',
        }}
      >
        <p
          className="font-hero text-lg mb-1 tracking-wide"
          style={{ color: accentBrown }}
        >
          Classic Pong — now in VR!
        </p>
        <p className="font-hero text-base text-[#ffedc2]">
          Experience the classic Pong game reimagined for VR—crazy levels, fast-paced fun, and endless challenges!
        </p>
      </div>

      {/* SCREENSHOTS CAROUSEL */}
      <div className="w-full max-w-2xl mb-10 flex flex-col items-center">
        <div
          className="mb-3 text-center text-sm tracking-wider font-hero"
          style={{ color: accentBrown }}
        >
          IN-GAME SCREENSHOTS
        </div>
        <div
          className="w-full rounded-xl overflow-hidden border shadow-md"
          style={{
            borderColor: borderBrown,
            background: '#3c2415',
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
                    alt={`Krazy Pong Screenshot ${i + 1}`}
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
                    draggable={false}
                    style={{ background: '#1a1209' }}
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
