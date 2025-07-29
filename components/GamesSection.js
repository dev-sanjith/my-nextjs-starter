import { useState } from "react";
import games from "../data/games";

export default function GamesSection() {
  const [selected, setSelected] = useState(0);

  return (
    <section className="w-full bg-black py-16 px-2 md:px-20">
      <h2 className="text-white text-4xl sm:text-5xl font-extrabold mb-10 tracking-wider">
        FEATURED VR GAMES
      </h2>
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left: Featured Game Details */}
        <div className="flex-1 max-w-md min-w-[300px] flex flex-col justify-between">
          <div>
            <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">{games[selected].title}</h3>
            <p className="text-gray-200 mb-8">{games[selected].description}</p>
          </div>
          <a
            href={games[selected].link}
            className="inline-block bg-cyan-400 hover:bg-cyan-500 text-black font-bold text-lg px-8 py-3 rounded transition"
          >
            VIEW PROJECT →
          </a>
        </div>

        {/* Right: Horizontal Scrollable Game Cards */}
        <div className="flex-[2] overflow-x-auto scrollbar-hide">
          <div className="flex gap-6">
            {games.map((game, i) => (
              <button
                key={game.id}
                className={`relative group min-w-[240px] h-[350px] rounded-2xl overflow-hidden border-2
                  ${i === selected ? "border-cyan-400 shadow-lg scale-105" : "border-[#1d283a]"}
                  bg-gradient-to-b from-[#13131a] to-[#23243b] flex flex-col justify-end
                  transition-all duration-300`}
                onClick={() => setSelected(i)}
              >
                {/* Game Image */}
                <img
                  src={game.image}
                  alt={game.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 transition"
                />
                {/* Card Overlay Title */}
                <div className="relative z-10 p-4">
                  <span className="text-white font-extrabold text-xl drop-shadow-lg">
                    {game.title}
                  </span>
                </div>
                {/* Overlay */}
                <div className={`absolute inset-0 bg-black ${i === selected ? "bg-opacity-10" : "bg-opacity-50"} transition`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
