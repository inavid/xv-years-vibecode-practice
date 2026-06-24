import womenImage from '../assets/images/bella_pose.jpg';
import menImage from '../assets/images/beast_pose.jpg';

export default function DressCode() {
  return (
    <section className="relative w-full py-24 overflow-hidden bg-[var(--color-bg-overlay-dark)] flex flex-col items-center px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 w-full max-w-7xl">
        <div className="reveal-card slide-from-right w-full max-w-5xl mx-auto rounded-[32px] border border-[#C5A880]/45 bg-[rgba(12,10,8,0.82)] px-6 py-8 md:px-10 md:py-12 shadow-[0_24px_80px_rgba(0,0,0,0.35)] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(197,168,128,0.08),transparent_45%)] pointer-events-none"></div>

          <div className="relative flex flex-col items-center text-center">
            <h2 className="font-playfair text-4xl md:text-5xl text-white mb-4 italic leading-tight drop-shadow-[0_3px_14px_rgba(0,0,0,0.85)]">
              Dress Code
            </h2>
            <p className="font-inter text-white/72 mb-10 uppercase tracking-[0.25em] text-xs md:text-sm">
              Formal
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center md:items-end gap-8 md:gap-10 w-full max-w-4xl mx-auto">
              <div className="flex flex-col items-center relative w-36 md:w-52 shrink-0">
                <span
                  className="absolute -top-5 md:-top-6 left-1/2 -translate-x-1/2 z-20 inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full border border-[#C5A880]/30 bg-[rgba(12,10,8,0.82)] text-4xl md:text-5xl text-[#F1E9DB] italic font-playfair shadow-[0_12px_30px_rgba(0,0,0,0.45)]"
                  style={{ textShadow: '0 2px 10px rgba(0,0,0,0.85)' }}
                >
                  M
                </span>
                <div className="w-full h-56 md:h-72 mb-5 overflow-hidden rounded-[24px] border border-[#C5A880]/20 bg-[rgba(255,255,255,0.05)] shadow-[0_18px_50px_rgba(0,0,0,0.3)]">
                  <img
                    src={womenImage.src}
                    alt="Mujer"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <p className="text-white/90 font-inter text-sm md:text-base tracking-[0.26em] font-bold text-center leading-relaxed uppercase">
                  Vestido
                </p>
              </div>

              <div className="flex flex-col items-center relative w-36 md:w-52 shrink-0">
                <span
                  className="absolute -top-5 md:-top-6 left-1/2 -translate-x-1/2 z-20 inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full border border-[#C5A880]/30 bg-[rgba(12,10,8,0.82)] text-4xl md:text-5xl text-[#F1E9DB] italic font-playfair shadow-[0_12px_30px_rgba(0,0,0,0.45)]"
                  style={{ textShadow: '0 2px 10px rgba(0,0,0,0.85)' }}
                >
                  H
                </span>
                <div className="w-full h-56 md:h-72 mb-5 overflow-hidden rounded-[24px] border border-[#C5A880]/20 bg-[rgba(255,255,255,0.05)] shadow-[0_18px_50px_rgba(0,0,0,0.3)]">
                  <img
                    src={menImage.src}
                    alt="Hombre"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <p className="text-white/90 font-inter text-sm md:text-base tracking-[0.26em] font-bold text-center leading-relaxed uppercase">
                  Traje
                </p>
              </div>
            </div>

            <p className="mt-10 text-white/72 font-playfair italic text-xs md:text-sm tracking-[0.1em] text-center max-w-sm leading-relaxed font-bold" style={{ textShadow: '0 0 8px rgba(0,0,0,0.55)' }}>
              * El color amarillo y dorado se reserva exclusivamente para la quinceañera
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
