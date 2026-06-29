import { useState } from 'react';

export default function Gifts() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const clabe = '012 345 6789 0123 4567';

  const handleCopy = () => {
    navigator.clipboard.writeText(clabe.replace(/\s/g, '')).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <>
      <section className="py-24 bg-[var(--color-bg-overlay-dark)] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Card */}
          <div
            className="relative overflow-hidden bg-[rgba(12,10,8,0.82)] backdrop-blur-md p-8 md:p-14 rounded-[32px] border border-[#C5A880]/45 shadow-[0_24px_80px_rgba(0,0,0,0.35)] w-full max-w-5xl mx-auto flex flex-col items-center gap-8"
            style={{ opacity: 1, transform: 'none' }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(197,168,128,0.08),transparent_45%)] pointer-events-none"></div>

            <div className="flex flex-col items-center gap-4 text-center">
              <h2 className="relative font-playfair text-4xl md:text-5xl text-white italic leading-tight drop-shadow-[0_3px_14px_rgba(0,0,0,0.85)]">
                Mesa de Regalos
              </h2>
              <p className="relative font-inter text-white/72 max-w-2xl leading-relaxed">
                El mejor regalo es tu presencia, pero si deseas tener un detalle conmigo, puedes hacerlo a través de la siguiente cuenta:
              </p>
              <div className="relative w-16 h-px bg-[#C5A880]/60" />
            </div>
            <button
              onClick={() => setOpen(true)}
              className="relative group inline-flex items-center gap-3 border border-[#C5A880] text-[#C5A880] hover:bg-[#C5A880] hover:text-white transition-all duration-300 font-inter tracking-widest text-xs uppercase px-8 py-4"
            >
              Quiero darte un detalle extra
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>

        </div>
      </section>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(4px)' }}
          onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
        >
          <div className="relative w-full max-w-lg bg-[rgba(15,12,10,0.95)] border border-white/20 rounded-[5px] shadow-2xl p-8 md:p-10 max-h-[90vh] overflow-y-auto">

            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
              aria-label="Cerrar"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>

            <h3 className="font-playfair text-2xl md:text-3xl text-text-main mb-2 text-center">
              ¡Gracias por tu detalle!
            </h3>
            <p className="font-inter text-white/50 text-xs tracking-widest uppercase text-center mb-8">
              Elige la opción que más te acomode
            </p>

            {/* Divider */}
            <div className="w-16 h-px bg-[#C5A880] mx-auto opacity-50 mb-8" />

            {/* Gift registries */}
            <div>
              <p className="font-inter text-xs tracking-widest text-[#C5A880] uppercase mb-4">
                Mesas de regalos en línea
              </p>

              <div className="grid grid-cols-1 gap-4">

                {/* Amazon */}
                <a
                  href="https://www.amazon.com.mx/registries/gl/guest-view/34OCLT4MM6HQW?ref_=cm_sw_r_apann_ggr-subnav-share_2FSS4VGC1VYXBGVFYQMF&language=en-US"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-white/5 border border-white/15 hover:border-[#C5A880]/50 hover:bg-white/10 transition-all duration-300 px-5 py-4 rounded-[3px] group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#FF9900]/10 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#FF9900">
                        <path d="M13.958 10.09c0 1.232.029 2.256-.591 3.351-.502.891-1.301 1.438-2.186 1.438-1.214 0-1.922-.924-1.922-2.292 0-2.692 2.415-3.182 4.7-3.182v.685zm3.186 7.705c-.209.189-.512.201-.745.074-1.047-.872-1.234-1.276-1.813-2.106-1.731 1.767-2.956 2.297-5.195 2.297-2.652 0-4.717-1.638-4.717-4.915 0-2.56 1.387-4.303 3.358-5.155 1.713-.754 4.106-.889 5.935-1.097v-.41c0-.753.06-1.642-.384-2.294-.385-.581-1.124-.82-1.775-.82-1.205 0-2.277.618-2.54 1.9-.054.285-.261.567-.549.58l-3.064-.333c-.259-.057-.546-.266-.472-.661C5.771 2.375 8.586 1.5 11.126 1.5c1.302 0 3.002.346 4.031 1.33 1.302 1.219 1.177 2.847 1.177 4.62v4.185c0 1.258.521 1.812 1.011 2.491.171.24.21.527-.009.706l-1.192.963zm2.832 2.493c-3.478 2.573-8.521 3.938-12.861 3.938-6.086 0-11.566-2.252-15.703-5.998-.326-.294-.034-.695.357-.467 4.473 2.604 9.995 4.167 15.7 4.167 3.849 0 8.082-.798 11.979-2.453.588-.25 1.08.385.528.813z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-inter text-text-main font-medium text-sm">Amazon</p>
                      <p className="font-inter text-white/40 text-xs">amazon.com.mx</p>
                    </div>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-[#C5A880] transition-transform duration-300 group-hover:translate-x-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </a>

                {/* Liverpool */}
                <a
                  href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/52027250"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-white/5 border border-white/15 hover:border-[#C5A880]/50 hover:bg-white/10 transition-all duration-300 px-5 py-4 rounded-[3px] group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#C5A880]/10 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#C5A880" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007Z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-inter text-text-main font-medium text-sm">Liverpool</p>
                      <p className="font-inter text-white/40 text-xs">mesaderegalos.liverpool.com.mx</p>
                    </div>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-[#C5A880] transition-transform duration-300 group-hover:translate-x-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </a>

              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
