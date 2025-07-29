// components/GamesCarousel.js
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import games from '../data/games';
import Link from 'next/link';

export default function GamesCarousel() {
  return (
    <section className="py-20 bg-black">
      <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-12 ml-8">
        FEATURED VR GAMES
      </h2>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 3 },
        }}
        className="px-8"
      >
        {games.map(game => (
          <SwiperSlide key={game.id}>
            <div className="bg-gray-900 rounded-2xl shadow-xl overflow-hidden">
              <img src={game.image} alt={game.title} className="w-full h-72 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{game.title}</h3>
                <p className="text-gray-300 mb-4">{game.description}</p>
                <Link href={game.link}>
                  <span className="inline-block bg-cyan-400 text-black font-bold px-4 py-2 rounded hover:bg-cyan-500 transition cursor-pointer">
                    View Project →
                  </span>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
