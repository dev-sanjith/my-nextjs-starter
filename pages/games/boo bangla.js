// pages/games/boo bangla.js
export default function BooBangla() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-8">
      <img
        src="/boo-bangla.jpg"
        alt="Boo Bangla"
        className="w-full max-w-md rounded-lg mb-8 shadow-lg"
      />
      <h1 className="text-4xl font-extrabold text-white mb-4">BOO BANGLA</h1>
      <p className="text-gray-300 max-w-2xl text-lg text-center mb-8">
        Step into the haunted Boo Bangla for a spine-chilling VR horror experience. Are you brave enough to explore?
      </p>
      <a href="/" className="bg-cyan-400 text-black font-bold px-6 py-3 rounded hover:bg-cyan-500 transition">
        Back to Home
      </a>
    </div>
  );
}
