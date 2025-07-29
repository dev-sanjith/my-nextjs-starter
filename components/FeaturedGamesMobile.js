import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import games from '../data/games';

export default function FeaturedGames() {
  const [active, setActive] = useState(0);

  return (
    <section
      className="
        w-full bg-black
        flex flex-col md:flex-row
        items-center md:items-center
        justify-center
        min-h-screen
      "
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
        className="
          flex flex-col justify-center
          md:items-start items-center
          w-full md:w-auto
          pt-8 md:pt-0
          pb-6 md:pb-0
          px-4 md:px-0
          h-auto md:h-full
          text-center md:text-left
        "
        style={{
          minWidth: 0,
          maxWidth: 420,
          flex: '0 0 420px',
          paddingLeft: 54,
          paddingRight: 38,
        }}
      >
        <div className="w-full max-w-xs mx-auto md:max-w-full md:mx-0">
          <h2 className="text-[7vw] md:text-[2.6vw] font-hero text-white font-extrabold mb-4 md:mb-10 leading-tight">
            VR GAMES
          </h2>
          <h3 className="text-lg md:text-2xl font-hero text-white font-bold mb-2 md:mb-3">
            {games[active].title}
          </h3>
          <p className="text-[#e2e2e2] text-base md:text-lg mb-6 md:mb-8">
            {games[active].description}
          </p>
          <a
            href={games[active].link}
            className="bg-cyan-400 text-black font-bold px-8 py-3 rounded hover:bg-cyan-500 transition text-base md:text-lg font-hero"
          >
            VIEW PROJECT →
          </a>
        </div>
      </div>

      {/* RIGHT: Games */}
      <div
        className="flex-1 flex items-center justify-center w-full md:w-auto h-full"
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
            slidesPerView={1.1}
            spaceBetween={10}
            centeredSlides={true}
            onSlideChange={swiper => setActive(swiper.activeIndex)}
            onSwiper={swiper => setActive(swiper.activeIndex)}
            className="w-full"
            style={{
              maxWidth: '380px',
              width: '100%',
              height: '380px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            breakpoints={{
              700: { slidesPerView: 2.1, spaceBetween: 16, centeredSlides: false },
              1024: { slidesPerView: 4, spaceBetween: 32, centeredSlides: false },
            }}
          >
            {games.map((game, i) => (
              <SwiperSlide key={game.id} className="flex items-center justify-center">
                <div
                  onClick={() => setActive(i)}
                  className={`
                    cursor-pointer border-2 transition-all duration-300
                    flex flex-col justify-end items-center
                    w-[84vw] max-w-[340px] md:w-[245px] md:max-w-[255px] xl:w-[265px]
                    min-h-[320px] md:min-h-[410px] max-h-[380px] md:max-h-[500px] bg-[#181827]
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
                    className="
                      w-full
                      h-[56vw] max-h-[200px]
                      object-contain
                      md:h-[70%] md:max-h-none md:object-cover
                    "
                    style={{
                      objectPosition: 'center top',
                      borderBottom: '2px solid #20203b',
                      userSelect: 'none',
                      background: '#10101b',
                    }}
                    draggable={false}
                  />
                  <div className="font-hero text-base md:text-xl text-white font-extrabold px-5 py-4 uppercase text-center">
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
