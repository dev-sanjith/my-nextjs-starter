import { useRouter } from 'next/router';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { RiArrowLeftDoubleLine } from 'react-icons/ri'; // ✅ Back icon

const screenshots = [
  '/screenshots/zombie-fury-1.jpg',
  '/screenshots/zombie-fury-2.jpg',
  '/screenshots/zombie-fury-3.jpg',
];

export default function ZombieFury() {
  const router = useRouter();
  const [logoError, setLogoError] = useState(false);

  const borderRed = "#a12020";
  const accentRed = "#ff3a3a";
  const darkRed = "#17080f";

  return (
    <div className="min-h-screen flex flex-col items-center py-10 px-4 md:px-8" style={{ background: "#0c0609" }}>
      {/* TITLE with BACK BUTTON */}
      <div className="w-full max-w-2xl flex flex-col items-center mb-6">
        <div className="w-full flex justify-center items-center relative">
          <hr className="flex-1" style={{ borderColor: borderRed }} />
          <h1 className="mx-4 text-3xl md:text-4xl font-hero font-extrabold flex items-center" style={{ color: accentRed }}>
            <span className="ml-2">ZOMBIE FURY</span>
          </h1>
          <hr className="flex-1" style={{ borderColor: borderRed }} />
          {/* Back Button */}
          <button
            onClick={() => router.push('/')}
            aria-label="Back"
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#2c0e12] hover:bg-[#d32f2f] border-2 border-[#6c151a] rounded-full w-12 h-12 flex items-center justify-center transition shadow-lg z-20"
          >
            <RiArrowLeftDoubleLine className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      {/* LOGO */}
      <div className="w-full max-w-xs md:max-w-md flex items-center justify-center mb-6">
        <div
          className="rounded-2xl border-2 shadow-xl p-8 w-full flex items-center justify-center"
          style={{
            background: darkRed,
            borderColor: borderRed,
            height: 220,
          }}
        >
          <img
            src={logoError ? '/fallback-logo.png' : '/zombie-fury-logo.png'}
            alt="Zombie Fury Logo"
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
          background: "#15090c",
          borderColor: "#2e1416",
        }}
      >
        <p
          className="font-hero text-lg mb-1 tracking-wide"
          style={{ color: accentRed }}
        >
          Intense zombie survival shooter!
        </p>
        <p className="font-hero text-base text-gray-200">
          Face waves of zombies in a dark and thrilling VR environment. Survive as long as you can with powerful weapons, terrifying enemies, and adrenaline-pumping action!
        </p>
      </div>

      {/* SCREENSHOTS CAROUSEL */}
      <div className="w-full max-w-2xl mb-10 flex flex-col items-center">
        <div
          className="mb-3 text-center text-sm tracking-wider font-hero"
          style={{ color: accentRed }}
        >
          IN-GAME SCREENSHOTS
        </div>
        <div
          className="w-full rounded-xl overflow-hidden border shadow-md"
          style={{
            borderColor: borderRed,
            background: darkRed,
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
                    alt={`Zombie Fury Screenshot ${i + 1}`}
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
                    draggable={false}
                    style={{ background: "#1d1012" }}
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
