import bellaPose from '../assets/images/bella_pose.png';
import beastPose from '../assets/images/beast_pose.png';
import CornerFrameCSS from './CornerFrameCSS';

export default function DressCode() {
  return (
    <section className="relative w-full py-24 overflow-hidden bg-[var(--color-bg-overlay-dark)] flex flex-col items-center">
      {/* Background Ornament SVGs */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl text-text-main mb-4">
            Dress Code
          </h2>
          <div className="w-24 h-[1px] bg-[#C5A880] mx-auto opacity-50"></div>
        </div>

        {/* Characters Card */}
        <div className="flex flex-col items-center gap-8 w-full mx-auto reveal-card slide-from-right bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-[5px] border border-white/20 shadow-xl relative">
          <CornerFrameCSS />
          {/* Row 1: FORMAL */}
          <h3 className="text-[#C5A880] text-lg md:text-xl font-inter tracking-[0.3em] font-semibold">
            FORMAL
          </h3>

          {/* Row 2: Characters */}
          <div className="flex flex-row justify-center items-end gap-12 md:gap-24 w-full">
            {/* Woman */}
            <div className="flex flex-col items-center relative">
              <img
                src={bellaPose.src}
                alt="Mujer"
                className="w-36 md:w-48 mb-6 drop-shadow-md"
                style={{ objectPosition: 'left center', objectFit: 'cover' }}
              />
              <span
                className="absolute bottom-16 md:bottom-20 text-6xl md:text-7xl text-[#bd9c25] italic font-playfair drop-shadow-[0_0_12px_rgba(189,156,37,0.7)]"
                style={{ textShadow: "0 0 10px #000, 0 0 20px #fff" }}
              >
                M
              </span>
              <p className="text-text-main font-inter text-sm md:text-base tracking-[0.2em] font-bold text-center leading-relaxed">
                VESTIDO<br />LARGO
              </p>
            </div>
            {/* Man */}
            <div className="flex flex-col items-center relative">
              <img
                src={beastPose.src}
                alt="Hombre"
                className="w-36 md:w-48 mb-6 drop-shadow-md"
                style={{ objectPosition: 'right center', objectFit: 'cover', transform: 'scaleX(-1)' }}
              />
              <span
                className="absolute bottom-12 md:bottom-16 text-6xl md:text-7xl text-[#bd9c25] italic font-playfair drop-shadow-[0_0_12px_rgba(189,156,37,0.7)]"
                style={{ textShadow: "0 0 10px #000, 0 0 20px #fff" }}
              >
                H
              </span>
              <p className="text-text-main font-inter text-sm md:text-base tracking-[0.2em] font-bold text-center leading-relaxed">
                TRAJE
              </p>
            </div>
          </div>

          {/* Row 3: Rule text */}
          <p className="text-[#C5A880] font-playfair italic text-xs md:text-sm tracking-[0.1em] text-center max-w-sm leading-relaxed">
            * El color amarillo se reserva exclusivamente para la quinceañera
          </p>
        </div>
      </div>
    </section>
  );
}
