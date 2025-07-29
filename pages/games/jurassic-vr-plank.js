// pages/games/jurassic-vr-plank.js
export default function JurassicVRPlank() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-8">
      <img
        src="/jurassic-vr-plank.jpg"
        alt="Jurassic VR Plank"
        className="w-full max-w-md rounded-lg mb-8 shadow-lg"
      />
      <h1 className="text-4xl font-extrabold text-white mb-4">JURASSIC VR PLANK</h1>
      <p className="text-gray-300 max-w-2xl text-lg text-center mb-8">
        Walk the plank over a prehistoric world. Can you survive the dinosaurs in this thrilling VR adventure?
      </p>
      <a href="/" className="bg-cyan-400 text-black font-bold px-6 py-3 rounded hover:bg-cyan-500 transition">
        Back to Home
      </a>
    </div>
  );
}
