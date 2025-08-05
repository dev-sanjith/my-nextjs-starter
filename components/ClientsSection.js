// components/ClientsSection.js

export default function ClientsSection() {
  const clients = [
    { src: '/clients/Casagrand-Logo.png', alt: 'Casagrand' },
    { src: '/clients/Fun city logo.png',  alt: 'Fun City' },
    { src: '/clients/ciro.png',           alt: "Ciro's" },
    { src: '/clients/Hexafair_logo.png',  alt: 'Hexafair' },
  ];

  return (
    <section id="clients" className="py-16 bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2
          className="uppercase text-4xl mb-12 tracking-widest"
          style={{ fontFamily: "'Exo 2', sans-serif" }}
        >
          our clients
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-12">
          {clients.map(({ src, alt }) => (
            <div key={src} className="flex-1 flex justify-center">
              <img
                src={src}
                alt={alt}
                className="max-h-24 object-contain"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
