import React from 'react';

export default function CornerFrameImage() {
  // SVG red rose flower corner decorations
  const roseSVG = `
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <!-- Leaves -->
      <ellipse cx="40" cy="80" rx="15" ry="30" fill="#4a7c4e" opacity="0.8" />
      <ellipse cx="160" cy="100" rx="12" ry="28" fill="#5a8c5e" opacity="0.8" />

      <!-- Rose petals - outer layer -->
      <circle cx="100" cy="70" r="22" fill="#c41e3a" opacity="0.9" />
      <circle cx="140" cy="85" r="20" fill="#c41e3a" opacity="0.9" />
      <circle cx="145" cy="125" r="20" fill="#c41e3a" opacity="0.9" />
      <circle cx="100" cy="150" r="22" fill="#c41e3a" opacity="0.9" />
      <circle cx="60" cy="125" r="20" fill="#c41e3a" opacity="0.9" />
      <circle cx="55" cy="85" r="20" fill="#c41e3a" opacity="0.9" />

      <!-- Rose petals - middle layer -->
      <circle cx="110" cy="80" r="18" fill="#8b1a3a" opacity="0.9" />
      <circle cx="130" cy="100" r="17" fill="#8b1a3a" opacity="0.9" />
      <circle cx="120" cy="130" r="17" fill="#8b1a3a" opacity="0.9" />
      <circle cx="80" cy="130" r="18" fill="#8b1a3a" opacity="0.9" />
      <circle cx="70" cy="100" r="17" fill="#8b1a3a" opacity="0.9" />
      <circle cx="90" cy="80" r="17" fill="#8b1a3a" opacity="0.9" />

      <!-- Rose center -->
      <circle cx="100" cy="105" r="15" fill="#4a0e0e" />
    </svg>
  `;

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[5px]">
      {/* Top Left */}
      <div
        className="absolute -top-4 -left-4 w-40 h-40 md:w-56 md:h-56 opacity-90"
        style={{
          backgroundImage: `url('data:image/svg+xml;utf8,${encodeURIComponent(roseSVG)}')`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          transform: 'scaleX(-1)',
          WebkitMaskImage: 'radial-gradient(ellipse at top right, black 30%, transparent 70%)',
          maskImage: 'radial-gradient(ellipse at top right, black 30%, transparent 70%)'
        }}
      />
      {/* Top Right */}
      <div
        className="absolute -top-4 -right-4 w-40 h-40 md:w-56 md:h-56 opacity-90"
        style={{
          backgroundImage: `url('data:image/svg+xml;utf8,${encodeURIComponent(roseSVG)}')`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          WebkitMaskImage: 'radial-gradient(ellipse at top right, black 30%, transparent 70%)',
          maskImage: 'radial-gradient(ellipse at top right, black 30%, transparent 70%)'
        }}
      />
    </div>
  );
}
