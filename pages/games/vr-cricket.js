import { useRouter } from 'next/router';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const screenshots = [
  '/screenshots/vr-cricket-1.jpg',
  '/screenshots/vr-cricket-2.jpg',
  '/screenshots/vr-cricket-3.jpg',
];

export default function VrCricket() {
  const router = useRouter();
  const [logoError, setLogoError] = useState(false);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center py-10 px-4 md:px-8">
      {/* TITLE with CLOSE BUTTON */}
      <div className="w-full max-w-2xl flex flex-col items-center mb-6">
        <div className="w-full flex justify-center items-center relative">
          <hr className="flex-1 border-cyan-900" />
          <h1 className="mx-4 text-3xl md:text-4xl font-hero font-extrabold text-white flex items-center">
            <span className="ml-2">V20 CRICKET</span>
          </h1>
          <hr className="flex-1 border-cyan-900" />
          {/* Modern Close Button, always aligned at title row */}
          <button
            onClick={() => router.push('/')}
            aria-label="Close"
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-cyan-400 hover:bg-cyan-300 border-2 border-cyan-900 rounded-full w-12 h-12 flex items-center justify-center transition shadow-lg z-20"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-[#181827]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
            </svg>
          </button>
        </div>
      </div>

      {/* LOGO */}
      <div className="w-full max-w-xs md:max-w-md flex items-center justify-center mb-6">
        <div className="bg-[#181827] rounded-2xl border-2 border-cyan-900 shadow-xl p-8 w-full flex items-center justify-center" style={{ height: 220 }}>
          <img
            src={
              logoError
                ? '/fallback-logo.png'
                : '/vr-cricket-logo.png'
            }
            alt="VR Cricket Logo"
            className="max-h-[140px] object-contain w-auto mx-auto"
            draggable={false}
            onError={() => setLogoError(true)}
          />
        </div>
      </div>

      {/* DESCRIPTION */}
      <div className="w-full max-w-xl bg-[#12121a] rounded-xl mb-8 px-6 py-5 border border-[#222238] shadow text-center">
        <p className="text-cyan-300 font-hero text-lg mb-1 tracking-wide">
          Immersive cricket simulation experience.
        </p>
        <p className="text-gray-300 font-hero text-base">
          Practice batting against virtual bowlers and play in realistic stadium environments. Perfect for cricket fans and VR gaming enthusiasts!
        </p>
      </div>

      {/* SCREENSHOTS CAROUSEL */}
      <div className="w-full max-w-2xl mb-10 flex flex-col items-center">
        <div className="mb-3 text-cyan-400 text-center text-sm tracking-wider font-hero">
          IN-GAME SCREENSHOTS
        </div>
        <div className="w-full rounded-xl overflow-hidden border border-[#232339] bg-[#151526] shadow-md">
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
                {/* Aspect Ratio 16:9 for all screenshots */}
                <div className="relative w-full pb-[56.25%]">
                  <img
                    src={src}
                    alt={`VR Cricket Screenshot ${i + 1}`}
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
                    draggable={false}
                    style={{ background: '#10101b' }}
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
