import { useRouter } from 'next/router';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { RiArrowLeftDoubleLine } from 'react-icons/ri'; // ✅ Back icon

const screenshots = [
  '/screenshots/jurassic-vr-plank-1.jpg',
  '/screenshots/jurassic-vr-plank-2.jpg',
  '/screenshots/jurassic-vr-plank-3.jpg',
];

export default function JurassicVRPlank() {
  const router = useRouter();
  const [logoError, setLogoError] = useState(false);

  const borderGreen = '#157a46';
  const accentGreen = '#749B27';
  const darkGreen = '#11261a';

  return (
    <div className="min-h-screen flex flex-col items-center py-10 px-4 md:px-8" style={{ background: "#0a1d12" }}>
      {/* TITLE & BACK BUTTON */}
      <div className="w-full max-w-2xl flex flex-col items-center mb-6">
        <div className="w-full flex justify-center items-center relative">
          <hr className="flex-1" style={{ borderColor: borderGreen }} />
          <h1 className="mx-4 text-3xl md:text-4xl font-hero font-extrabold flex items-center" style={{ color: accentGreen }}>
            <span className="ml-2">JURASSIC PLANK</span>
          </h1>
          <hr className="flex-1" style={{ borderColor: borderGreen }} />
          {/* Back Button */}
          <button
            onClick={() => router.push('/')}
            aria-label="Back"
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#749B27] hover:bg-[#2b9c44] border-2 border-[#157a46] rounded-full w-12 h-12 flex items-center justify-center transition shadow-lg z-20"
          >
            <RiArrowLeftDoubleLine className="w-6 h-6 text-[#162914]" />
          </button>
        </div>
      </div>

      {/* LOGO */}
      <div className="w-full max-w-xs md:max-w-md flex items-center justify-center mb-6">
        <div
          className="rounded-2xl border-2 shadow-xl p-8 w-full flex items-center justify-center"
          style={{
            background: darkGreen,
            borderColor: borderGreen,
            height: 220,
          }}
        >
          <img
            src={logoError ? '/fallback-logo.png' : '/jurassic-vr-plank-logo.png'}
            alt="Jurassic VR Plank Logo"
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
          background: "#10271c",
          borderColor: "#224c31",
        }}
      >
        <p
          className="font-hero text-lg mb-1 tracking-wide"
          style={{ color: accentGreen }}
        >
          Walk the plank over a prehistoric world!
        </p>
        <p className="font-hero text-base text-gray-200">
          Can you survive the dinosaurs in this thrilling VR adventure? Test your nerves and balance high above the Jurassic wild.
        </p>
      </div>

      {/* SCREENSHOTS CAROUSEL */}
      <div className="w-full max-w-2xl mb-10 flex flex-col items-center">
        <div
          className="mb-3 text-center text-sm tracking-wider font-hero"
          style={{ color: accentGreen }}
        >
          IN-GAME SCREENSHOTS
        </div>
        <div
          className="w-full rounded-xl overflow-hidden border shadow-md"
          style={{
            borderColor: borderGreen,
            background: "#0c2316",
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
                    alt={`Jurassic VR Plank Screenshot ${i + 1}`}
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
                    draggable={false}
                    style={{ background: "#11261a" }}
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
