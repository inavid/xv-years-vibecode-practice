import React from 'react';
import sunflowers from '../assets/images/sunflowers.jpg';

export default function TopFrameImage({ heightClass = 'h-[10%]' }: { heightClass?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-x-0 top-0 z-0 opacity-90 overflow-hidden ${heightClass}`}>
      {/* 
        We use the imported image and apply a gradient mask 
        so the bottom edge of the image fades perfectly into the card.
        The image has a white solid background, so using mask-image 
        or mix-blend-multiply works exceptionally well on mostly dark layout 
        or if we want the white to become transparent, mix-blend-multiply 
        will make the white transparent and keep only the dark parts.
        Wait, since our card is bg-white/10 over a dark themed background, 
        making white transparent via mix-blend-multiply will work beautifully. 
      */}
      <div 
        className="w-full h-full bg-top"
        style={{
          backgroundImage: `url(${sunflowers.src})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
          maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)'
        }}
      />
    </div>
  );
}
