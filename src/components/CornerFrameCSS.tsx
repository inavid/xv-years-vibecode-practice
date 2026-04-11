import React from 'react';

const CornerDecor = ({ isLeft = false }: { isLeft?: boolean }) => (
    <div className={`absolute -top-6 md:-top-10 ${isLeft ? '-left-6 md:-left-10' : '-right-6 md:-right-10'} w-28 h-28 md:w-36 md:h-36 pointer-events-none overflow-visible ${isLeft ? 'scale-x-[-1]' : ''}`}>
        <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible drop-shadow-md">
            <g transform="translate(130, 70)">
                {/* Eucalyptus leaves stem 1 */}
                <path d="M0,0 Q-50,30 -100,100" fill="none" stroke="#6b705c" strokeWidth="2" strokeLinecap="round" />
                <ellipse cx="-20" cy="20" rx="10" ry="6" fill="#a5a58d" transform="rotate(-30, -20, 20)" />
                <ellipse cx="-40" cy="45" rx="8" ry="5" fill="#97a97c" transform="rotate(-20, -40, 45)" />
                <ellipse cx="-65" cy="70" rx="9" ry="6" fill="#a5a58d" transform="rotate(-40, -65, 70)" />
                <ellipse cx="-90" cy="95" rx="7" ry="5" fill="#97a97c" transform="rotate(-15, -90, 95)" />

                {/* Second stem horizontal */}
                <path d="M0,0 Q-60,-10 -120,10" fill="none" stroke="#6b705c" strokeWidth="2" strokeLinecap="round" />
                <ellipse cx="-30" cy="-5" rx="10" ry="5" fill="#97a97c" transform="rotate(10, -30, -5)" />
                <ellipse cx="-60" cy="-2" rx="8" ry="4" fill="#a5a58d" transform="rotate(15, -60, -2)" />
                <ellipse cx="-90" cy="5" rx="9" ry="5" fill="#97a97c" transform="rotate(5, -90, 5)" />
                <ellipse cx="-115" cy="8" rx="7" ry="4" fill="#a5a58d" transform="rotate(20, -115, 8)" />

                {/* White flower */}
                <g transform="translate(-40, 10)">
                    <circle cx="0" cy="0" r="15" fill="#f8f9fa" />
                    <circle cx="5" cy="-5" r="12" fill="#e9ecef" />
                    <circle cx="-5" cy="5" r="10" fill="#dee2e6" />
                    <circle cx="0" cy="0" r="4" fill="#e9c46a" />
                </g>

                {/* Small Sunflower */}
                <g transform="translate(-10, -30) scale(0.6)">
                    {[...Array(12)].map((_, i) => (
                        <ellipse key={`s1-${i}`} cx="0" cy="-22" rx="8" ry="22" fill="#f4a261" transform={`rotate(${i * 30})`} />
                    ))}
                    {[...Array(12)].map((_, i) => (
                        <ellipse key={`s2-${i}`} cx="0" cy="-20" rx="6" ry="18" fill="#e9c46a" transform={`rotate(${i * 30 + 15})`} />
                    ))}
                    <circle cx="0" cy="0" r="14" fill="#38220f" />
                </g>

                {/* Main Sunflower */}
                <g transform="translate(10, 10) scale(0.9)">
                    {[...Array(14)].map((_, i) => (
                        <ellipse key={`m1-${i}`} cx="0" cy="-28" rx="9" ry="28" fill="#f4a261" transform={`rotate(${i * (360/14)})`} />
                    ))}
                    {[...Array(14)].map((_, i) => (
                        <ellipse key={`m2-${i}`} cx="0" cy="-25" rx="7" ry="24" fill="#e9c46a" transform={`rotate(${i * (360/14) + (360/28)})`} />
                    ))}
                    <circle cx="0" cy="0" r="20" fill="#38220f" />
                </g>
            </g>
        </svg>
    </div>
);

export default function CornerFrameCSS() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-full w-full overflow-visible">
        <CornerDecor isLeft={true} />
        <CornerDecor isLeft={false} />
    </div>
  );
}
