// pages/games/vr-cricket.js
export default function VrCricket() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-8">
      <img
        src="/vr-cricket.jpg"
        alt="VR Cricket"
        className="w-full max-w-md rounded-lg mb-8 shadow-lg"
      />
      <h1 className="text-4xl font-extrabold text-white mb-4">VR CRICKET</h1>
      <p className="text-gray-300 max-w-2xl text-lg text-center mb-8">
        Immersive cricket simulation experience. Bat against virtual bowlers and feel the thrill of real stadiums!
      </p>
      <a href="/" className="bg-cyan-400 text-black font-bold px-6 py-3 rounded hover:bg-cyan-500 transition">
        Back to Home
      </a>
    </div>
  );
}
