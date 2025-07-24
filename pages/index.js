export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">
        Hello from Next.js Pages Router + Tailwind CSS!
      </h1>
      <a
        href="contact.html"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow hover:bg-blue-700 transition"
      >
        Contact Us
      </a>
    </main>
  );
}
