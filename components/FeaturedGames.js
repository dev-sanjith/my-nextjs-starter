import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import games from '../data/games';

export default function FeaturedGames() {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(null);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    handleResize(); // initial
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 640;
  const isTablet = windowWidth >= 640 && windowWidth < 1024;

  const displayIdx = hovered !== null ? hovered : active;

  return (
    <section
      className={`w-full bg-black flex flex-col ${!isMobile ? 'md:flex-row' : ''} 
      items-center ${!isMobile ? 'md:items-stretch' : ''} justify-center px-0 py-0 min-h-[80vh] md:min-h-screen`}
      style={{ overflow: 'hidden' }}
    >
      {/* LEFT TEXT PANEL */}
      <div
        className={`w-full ${!isMobile ? 'md:w-auto' : ''}
          flex flex-col justify-center
          ${isMobile ? 'items-center text-center' : 'items-start text-left'}
          pt-12 md:pt-0 pb-8 md:pb-0
          px-6 md:px-14 bg-black z-10`}
        style={{
          minWidth: 0,
          maxWidth: 420,
          flex: '0 0 420px',
        }}
      >
        <div className="w-full max-w-xs md:max-w-full">
          <h2 className="text-[7vw] md:text-[2.6vw] font-hero text-white font-extrabold mb-4 md:mb-10 leading-tight">
            FEATURED<br />VR GAMES
          </h2>
          <h3 className="text-lg md:text-2xl font-hero text-white font-bold mb-2 md:mb-3">
            {games[displayIdx].title}
          </h3>
          <p className="text-[#e2e2e2] text-base md:text-lg mb-6 md:mb-8 max-w-xs md:max-w-full">
            {games[displayIdx].description}
          </p>
          <a
            href={games[displayIdx].link}
            className="bg-cyan-400 text-black font-bold px-8 py-3 rounded hover:bg-cyan-500 transition text-base md:text-lg font-hero"
          >
            VIEW PROJECT →
          </a>
        </div>
      </div>

      {/* RIGHT GAME CARDS */}
      <div className="w-full flex-1 flex items-center justify-center min-w-0">
        <div
          className="w-full max-w-full md:max-w-[1180px] flex items-center justify-center md:pl-8"
          style={{ minWidth: 0, minHeight: 0, height: '100%' }}
        >
          <Swiper
            slidesPerView={isMobile ? 1.3 : isTablet ? 2.2 : 4}
            spaceBetween={isMobile ? 16 : isTablet ? 20 : 32}
            centeredSlides={isMobile}
            onSlideChange={(swiper) => setActive(swiper.activeIndex)}
            onSwiper={(swiper) => setActive(swiper.activeIndex)}
            className="w-full"
          >
            {games.map((game, i) => {
              const isGlowing = hovered === i || (hovered === null && active === i);
              return (
                <SwiperSlide key={game.id} className="flex items-center justify-center">
                  <a
                    href={game.link}
                    tabIndex={0}
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    className={`
                      cursor-pointer border-2 transition-all duration-300
                      flex flex-col justify-end items-center
                      w-[84vw] max-w-[340px]
                      md:w-[245px] md:max-w-[255px] xl:w-[265px]
                      min-h-[330px] md:min-h-[410px] max-h-[370px] md:max-h-[500px] bg-[#181827]
                      ${isGlowing ? 'border-cyan-400' : 'border-[#14e5ff33]'}
                      shadow-lg
                    `}
                    style={{
                      borderRadius: 20,
                      background: 'linear-gradient(180deg, #181827 80%, #232339 100%)',
                      overflow: 'hidden',
                    }}
                  >
                    <img
                      src={game.image}
                      alt={game.title}
                      className={`
                        w-full
                        h-[58vw] max-h-[260px] min-h-[160px]
                        object-cover
                        md:h-[70%] md:max-h-none
                      `}
                      style={{
                        objectPosition: 'center top',
                        borderBottom: '2px solid #20203b',
                        userSelect: 'none',
                      }}
                      draggable={false}
                    />
                    <div className="font-hero text-base md:text-xl text-white font-extrabold px-5 py-4 uppercase text-center">
                      {game.title}
                    </div>
                  </a>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
