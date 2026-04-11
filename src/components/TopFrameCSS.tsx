import React from 'react';

// Generates a simple SVG sunflower and leaves
export default function TopFrameCSS() {
  return (
    <div className="pointer-events-none absolute inset-x-0 -top-6 md:-top-10 z-0 h-12 md:h-20 opacity-90 overflow-visible">
        {/* Cascade wrapper */}
        <div className="absolute inset-x-0 top-0 h-full w-full flex justify-around opacity-80" style={{ filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.2))" }}>
            
            {/* We'll use a repeated SVG pattern to simulate the top border content */}
            <svg viewBox="0 0 1000 100" preserveAspectRatio="xMidYMid meet" className="absolute top-0 w-full h-full text-[#97a97c] overflow-visible">
                
                <g transform="scale(0.5) translate(0, -10)">
                    {/* Vines / Stems spanning top */}
                    <path d="M0,20 Q100,50 200,10 C250,-10 300,40 400,20 Q500,-10 600,30 T800,10 Q900,40 1000,10" fill="none" stroke="#6b705c" strokeWidth="4" strokeLinecap="round" />
                    <path d="M1000,20 Q1100,50 1200,10 C1250,-10 1300,40 1400,20 Q1500,-10 1600,30 T1800,10 Q1900,40 2000,10" fill="none" stroke="#6b705c" strokeWidth="4" strokeLinecap="round" />
                
                    {/* Hanging leaves */}
                    {/* Leaf 1 */}
                    <path d="M100,20 C100,60 80,100 100,120 C120,100 100,60 100,20" fill="currentColor" />
                    <path d="M150,30 C160,70 140,110 150,130 C160,110 160,70 150,30" fill="#a5a58d" />
                    <path d="M50,10 C40,40 20,70 30,80 C40,70 50,40 50,10" fill="currentColor" />
                    
                    <path d="M300,20 C310,80 280,120 300,150 C320,120 310,80 300,20" fill="currentColor" />
                    <path d="M400,20 C400,60 380,100 400,120 C420,100 400,60 400,20" fill="#a5a58d" />
                    <path d="M450,30 C460,70 440,110 450,130 C460,110 460,70 450,30" fill="currentColor" />

                    <path d="M600,20 C610,80 580,120 600,150 C620,120 610,80 600,20" fill="#a5a58d" />
                    <path d="M700,20 C700,60 680,100 700,120 C720,100 700,60 700,20" fill="currentColor" />
                    <path d="M850,30 C860,70 840,110 850,130 C860,110 860,70 850,30" fill="#a5a58d" />

                    <path d="M900,20 C910,80 880,120 900,150 C920,120 910,80 900,20" fill="currentColor" />
                    <path d="M1100,20 C1110,80 1080,120 1100,150 C1120,120 1110,80 1100,20" fill="currentColor" />
                    <path d="M1200,20 C1200,60 1180,100 1200,120 C1220,100 1200,60 1200,20" fill="#a5a58d" />
                    <path d="M1300,20 C1310,80 1280,120 1300,150 C1320,120 1310,80 1300,20" fill="currentColor" />
                    <path d="M1500,20 C1510,80 1480,120 1500,150 C1520,120 1510,80 1500,20" fill="currentColor" />
                    <path d="M1600,20 C1600,60 1580,100 1600,120 C1620,100 1600,60 1600,20" fill="#a5a58d" />
                    <path d="M1800,20 C1810,80 1780,120 1800,150 C1820,120 1810,80 1800,20" fill="currentColor" />

                    {/* Sunflowers (Yellow Petals + Dark Brown Center) */}
                    <g transform="translate(180, 20)">
                        {[...Array(12)].map((_, i) => (
                            <ellipse key={`s1p1-${i}`} cx="0" cy="-25" rx="10" ry="25" fill="#f4a261" transform={`rotate(${i * 30})`} />
                        ))}
                        {[...Array(12)].map((_, i) => (
                            <ellipse key={`s1p2-${i}`} cx="0" cy="-25" rx="8" ry="20" fill="#e9c46a" transform={`rotate(${i * 30 + 15})`} />
                        ))}
                        <circle cx="0" cy="0" r="18" fill="#38220f" />
                    </g>

                    <g transform="translate(350, 40) scale(1.2)">
                        {[...Array(12)].map((_, i) => (
                            <ellipse key={`s2p1-${i}`} cx="0" cy="-25" rx="10" ry="25" fill="#f4a261" transform={`rotate(${i * 30})`} />
                        ))}
                        {[...Array(12)].map((_, i) => (
                            <ellipse key={`s2p2-${i}`} cx="0" cy="-25" rx="8" ry="20" fill="#e9c46a" transform={`rotate(${i * 30 + 15})`} />
                        ))}
                        <circle cx="0" cy="0" r="18" fill="#38220f" />
                    </g>

                    <g transform="translate(500, 15) scale(0.8)">
                        {[...Array(12)].map((_, i) => (
                            <ellipse key={`s3p1-${i}`} cx="0" cy="-25" rx="10" ry="25" fill="#f4a261" transform={`rotate(${i * 30})`} />
                        ))}
                        {[...Array(12)].map((_, i) => (
                            <ellipse key={`s3p2-${i}`} cx="0" cy="-25" rx="8" ry="20" fill="#e9c46a" transform={`rotate(${i * 30 + 15})`} />
                        ))}
                        <circle cx="0" cy="0" r="18" fill="#38220f" />
                    </g>

                    <g transform="translate(650, 30)">
                        {[...Array(12)].map((_, i) => (
                            <ellipse key={`s4p1-${i}`} cx="0" cy="-25" rx="10" ry="25" fill="#f4a261" transform={`rotate(${i * 30})`} />
                        ))}
                        {[...Array(12)].map((_, i) => (
                            <ellipse key={`s4p2-${i}`} cx="0" cy="-25" rx="8" ry="20" fill="#e9c46a" transform={`rotate(${i * 30 + 15})`} />
                        ))}
                        <circle cx="0" cy="0" r="18" fill="#38220f" />
                    </g>

                    <g transform="translate(850, 20) scale(1.1)">
                        {[...Array(12)].map((_, i) => (
                            <ellipse key={`s5p1-${i}`} cx="0" cy="-25" rx="10" ry="25" fill="#f4a261" transform={`rotate(${i * 30})`} />
                        ))}
                        {[...Array(12)].map((_, i) => (
                            <ellipse key={`s5p2-${i}`} cx="0" cy="-25" rx="8" ry="20" fill="#e9c46a" transform={`rotate(${i * 30 + 15})`} />
                        ))}
                        <circle cx="0" cy="0" r="18" fill="#38220f" />
                    </g>

                    <g transform="translate(1050, 35) scale(0.9)">
                        {[...Array(12)].map((_, i) => (
                            <ellipse key={`s6p1-${i}`} cx="0" cy="-25" rx="10" ry="25" fill="#f4a261" transform={`rotate(${i * 30})`} />
                        ))}
                        {[...Array(12)].map((_, i) => (
                            <ellipse key={`s6p2-${i}`} cx="0" cy="-25" rx="8" ry="20" fill="#e9c46a" transform={`rotate(${i * 30 + 15})`} />
                        ))}
                        <circle cx="0" cy="0" r="18" fill="#38220f" />
                    </g>

                    <g transform="translate(1300, 25)">
                        {[...Array(12)].map((_, i) => (
                            <ellipse key={`s7p1-${i}`} cx="0" cy="-25" rx="10" ry="25" fill="#f4a261" transform={`rotate(${i * 30})`} />
                        ))}
                        {[...Array(12)].map((_, i) => (
                            <ellipse key={`s7p2-${i}`} cx="0" cy="-25" rx="8" ry="20" fill="#e9c46a" transform={`rotate(${i * 30 + 15})`} />
                        ))}
                        <circle cx="0" cy="0" r="18" fill="#38220f" />
                    </g>

                    <g transform="translate(1500, 40) scale(1.15)">
                        {[...Array(12)].map((_, i) => (
                            <ellipse key={`s8p1-${i}`} cx="0" cy="-25" rx="10" ry="25" fill="#f4a261" transform={`rotate(${i * 30})`} />
                        ))}
                        {[...Array(12)].map((_, i) => (
                            <ellipse key={`s8p2-${i}`} cx="0" cy="-25" rx="8" ry="20" fill="#e9c46a" transform={`rotate(${i * 30 + 15})`} />
                        ))}
                        <circle cx="0" cy="0" r="18" fill="#38220f" />
                    </g>

                    <g transform="translate(1750, 20) scale(0.85)">
                        {[...Array(12)].map((_, i) => (
                            <ellipse key={`s9p1-${i}`} cx="0" cy="-25" rx="10" ry="25" fill="#f4a261" transform={`rotate(${i * 30})`} />
                        ))}
                        {[...Array(12)].map((_, i) => (
                            <ellipse key={`s9p2-${i}`} cx="0" cy="-25" rx="8" ry="20" fill="#e9c46a" transform={`rotate(${i * 30 + 15})`} />
                        ))}
                        <circle cx="0" cy="0" r="18" fill="#38220f" />
                    </g>

                    <g transform="translate(1900, 30)">
                        {[...Array(12)].map((_, i) => (
                            <ellipse key={`s10p1-${i}`} cx="0" cy="-25" rx="10" ry="25" fill="#f4a261" transform={`rotate(${i * 30})`} />
                        ))}
                        {[...Array(12)].map((_, i) => (
                            <ellipse key={`s10p2-${i}`} cx="0" cy="-25" rx="8" ry="20" fill="#e9c46a" transform={`rotate(${i * 30 + 15})`} />
                        ))}
                        <circle cx="0" cy="0" r="18" fill="#38220f" />
                    </g>

                    {/* Left/Right partial flowers to simulate continuing pattern */}
                    <g transform="translate(0, 30) scale(0.9)">
                        {[...Array(12)].map((_, i) => (
                            <ellipse key={`s11p1-${i}`} cx="0" cy="-25" rx="10" ry="25" fill="#f4a261" transform={`rotate(${i * 30})`} />
                        ))}
                        {[...Array(12)].map((_, i) => (
                            <ellipse key={`s11p2-${i}`} cx="0" cy="-25" rx="8" ry="20" fill="#e9c46a" transform={`rotate(${i * 30 + 15})`} />
                        ))}
                        <circle cx="0" cy="0" r="18" fill="#38220f" />
                    </g>
                    <g transform="translate(2000, 40) scale(1)">
                        {[...Array(12)].map((_, i) => (
                            <ellipse key={`s12p1-${i}`} cx="0" cy="-25" rx="10" ry="25" fill="#f4a261" transform={`rotate(${i * 30})`} />
                        ))}
                        {[...Array(12)].map((_, i) => (
                            <ellipse key={`s12p2-${i}`} cx="0" cy="-25" rx="8" ry="20" fill="#e9c46a" transform={`rotate(${i * 30 + 15})`} />
                        ))}
                        <circle cx="0" cy="0" r="18" fill="#38220f" />
                    </g>
                </g>
            </svg>
        </div>
    </div>
  );
}
