// components/AwardComponents.js

export default function AwardComponents() {
  const awards = [
    {
      src: '/award_2.png',
      alt: 'CIOReview Best AR/VR Provider 2021',
      title: 'CIOReview',
      subtitle: 'Best AR/VR Provider 2021',
    },
    {
      src: '/award_1.png',
      alt: 'Business Connect Company in Focus 2021',
      title: 'Business Connect',
      subtitle: 'Company in Focus 2021',
    },
  ];

  return (
    <section id="awards" className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2
          className="uppercase text-4xl mb-12 tracking-widest"
          style={{ fontFamily: "'Exo 2', sans-serif" }}
        >
          our accolades
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-16">
          {awards.map(({ src, alt, title, subtitle }) => (
            <div key={src} className="flex-1 flex flex-col items-center">
              <div className="w-full flex justify-center mb-4">
                <img
                  src={src}
                  alt={alt}
                  className="w-auto max-h-80 object-contain"
                />
              </div>
              <p className="font-semibold">{title}</p>
              <p className="text-sm">{subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
