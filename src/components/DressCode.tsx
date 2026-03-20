import React from 'react';

export default function DressCode() {
  return (
    <section className="relative w-full py-24 overflow-hidden bg-[var(--color-bg-overlay-dark)] flex flex-col items-center">
      {/* Background Ornament SVGs */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-4xl px-4">
        {/* Title */}
        <div className="border border-[#894691] rounded-[100%] px-12 md:px-16 py-3 md:py-4 mb-8">
          <h2 className="text-[#894691] text-4xl md:text-5xl font-playfair italic font-light tracking-wide m-0">
            Drees Code
          </h2>
        </div>

        <h3 className="text-[#bd9c25] text-lg md:text-xl font-inter tracking-[0.3em] font-semibold mb-12">
          FORMAL
        </h3>

        {/* Characters Grid */}
        <div className="flex flex-row justify-center items-end gap-12 md:gap-24 mb-12 w-full bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-sm border border-white/20 shadow-xl">
          {/* Woman */}
          <div className="flex flex-col items-center relative">
            <img
              src="https://lirioinvitaciones.com/redise-o-xv-19/_assets/media/5b6f5ab27e73e5b3293aebc91ede5513.svg"
              alt="Mujer"
              className="w-36 md:w-48 mb-6 drop-shadow-md"
              style={{ objectPosition: 'left center', objectFit: 'cover' }}
            />
            <span
              className="absolute bottom-16 md:bottom-20 text-6xl md:text-7xl text-[#bd9c25] italic font-playfair drop-shadow-[0_0_12px_rgba(189,156,37,0.7)]"
              style={{ textShadow: "0 0 10px #bd9c25, 0 0 20px #fff" }}
            >
              M
            </span>
            <p className="text-[#894691] font-inter text-sm md:text-base tracking-[0.2em] font-bold text-center leading-relaxed">
              VESTIDO<br />LARGO
            </p>
          </div>

          {/* Man */}
          <div className="flex flex-col items-center relative">
            <img
              src="https://lirioinvitaciones.com/redise-o-xv-19/_assets/media/5b6f5ab27e73e5b3293aebc91ede5513.svg"
              alt="Hombre"
              className="w-36 md:w-48 mb-6 drop-shadow-md"
              style={{ objectPosition: 'right center', objectFit: 'cover', transform: 'scaleX(-1)' }}
            // Note: If the SVG contains both man and woman, using object-fit to split. Otherwise, the fallback SVG handles the shape.
            />
            <span
              className="absolute bottom-12 md:bottom-16 text-6xl md:text-7xl text-[#bd9c25] italic font-playfair drop-shadow-[0_0_12px_rgba(189,156,37,0.7)]"
              style={{ textShadow: "0 0 10px #bd9c25, 0 0 20px #fff" }}
            >
              H
            </span>
            <p className="text-[#894691] font-inter text-sm md:text-base tracking-[0.2em] font-bold text-center leading-relaxed">
              TRAJE
            </p>
          </div>
        </div>

        {/* Rule Text */}
        <p className="text-[#967c1f] font-inter text-[10px] md:text-xs font-bold tracking-[0.15em] text-center max-w-sm mb-16 uppercase leading-relaxed">
          El color morado se reserva exclusivamente para la quinceañera
        </p>
      </div>
    </section>
  );
}
