// pages/games/zombie-fury.js
export default function ZombieFury() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-8">
      <img
        src="/zombie-fury.jpg"
        alt="Zombie Fury"
        className="w-full max-w-md rounded-lg mb-8 shadow-lg"
      />
      <h1 className="text-4xl font-extrabold text-white mb-4">ZOMBIE FURY</h1>
      <p className="text-gray-300 max-w-2xl text-lg text-center mb-8">
        Defend yourself from endless waves of zombies in this heart-pounding VR shooter!
      </p>
      <a href="/" className="bg-cyan-400 text-black font-bold px-6 py-3 rounded hover:bg-cyan-500 transition">
        Back to Home
      </a>
    </div>
  );
}
