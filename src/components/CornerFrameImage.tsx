import React from 'react';
import sunflowerCorner from '../assets/images/sunflower_corner.jpg';

export default function CornerFrameImage() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[5px]">
      {/* Top Left */}
      <div 
        className="absolute -top-4 -left-4 w-40 h-40 md:w-56 md:h-56 opacity-90"
        style={{
          backgroundImage: `url(${sunflowerCorner.src})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top right',
          transform: 'scaleX(-1)', // Flip horizontally for top-left
          WebkitMaskImage: 'radial-gradient(ellipse at top right, black 30%, transparent 70%)',
          maskImage: 'radial-gradient(ellipse at top right, black 30%, transparent 70%)'
        }}
      />
      {/* Top Right */}
      <div 
        className="absolute -top-4 -right-4 w-40 h-40 md:w-56 md:h-56 opacity-90"
        style={{
          backgroundImage: `url(${sunflowerCorner.src})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top right',
          WebkitMaskImage: 'radial-gradient(ellipse at top right, black 30%, transparent 70%)',
          maskImage: 'radial-gradient(ellipse at top right, black 30%, transparent 70%)'
        }}
      />
    </div>
  );
}
