import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import games from '../data/games';

export default function FeaturedGames() {
  const [active, setActive] = useState(0);

  return (
    <section
      className="w-full bg-black flex items-center"
      style={{
        minHeight: '100vh',
        height: '100vh',
        padding: 0,
        margin: 0,
        overflow: 'hidden',
      }}
    >
      {/* LEFT: Text Block */}
      <div
        className="flex flex-col justify-center h-full"
        style={{
          minWidth: 380,
          maxWidth: 420,
          flex: '0 0 420px',
          paddingLeft: 54,
          paddingRight: 38,
          height: '100%',
        }}
      >
        <div>
          <h2 className="text-[2.6vw] font-hero text-white font-extrabold mb-10 leading-tight">
            FEATURED<br />VR GAMES
          </h2>
          <h3 className="text-2xl font-hero text-white font-bold mb-3">
            {games[active].title}
          </h3>
          <p className="text-[#e2e2e2] text-lg mb-8 max-w-xs">{games[active].description}</p>
          <a
            href={games[active].link}
            className="bg-cyan-400 text-black font-bold px-8 py-3 rounded hover:bg-cyan-500 transition text-lg font-hero"
          >
            VIEW PROJECT →
          </a>
        </div>
      </div>

      {/* RIGHT: Games, perfectly centered vertically & horizontally */}
      <div
        className="flex-1 flex items-center justify-center h-full"
        style={{ height: '100%' }}
      >
        <div
          className="flex items-center justify-center w-full h-full"
          style={{
            minHeight: 0,
            minWidth: 0,
            height: '100%',
          }}
        >
          <Swiper
            slidesPerView={4}
            spaceBetween={32}
            centeredSlides={false}
            onSlideChange={swiper => setActive(swiper.activeIndex)}
            onSwiper={swiper => setActive(swiper.activeIndex)}
            className="w-full"
            style={{
              maxWidth: '1180px',
              width: '100%',
              height: '540px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            breakpoints={{
              320: { slidesPerView: 1.1, spaceBetween: 10 },
              700: { slidesPerView: 2.1, spaceBetween: 16 },
              1024: { slidesPerView: 4, spaceBetween: 32 },
            }}
          >
            {games.map((game, i) => (
              <SwiperSlide key={game.id} className="flex items-center justify-center">
                <div
                  onClick={() => setActive(i)}
                  className={`
                    cursor-pointer border-2 transition-all duration-300
                    flex flex-col justify-end items-center
                    w-[245px] md:w-[255px] xl:w-[265px]
                    min-h-[410px] max-h-[500px] bg-[#181827]
                    ${active === i ? 'border-cyan-400' : 'border-[#14e5ff33]'}
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
                    className="w-full h-[70%] object-cover"
                    style={{
                      objectPosition: 'center top',
                      borderBottom: '2px solid #20203b',
                      userSelect: 'none',
                    }}
                    draggable={false}
                  />
                  <div className="font-hero text-lg md:text-xl text-white font-extrabold px-5 py-4 uppercase text-center">
                    {game.title}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
