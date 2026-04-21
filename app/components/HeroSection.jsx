"use client";

import Image from "next/image";

function CheetahPattern() {
  const spots = [
    { cx: 30,  cy: 25,  rx: 5, ry: 8, rot: -20 },
    { cx: 80,  cy: 10,  rx: 4, ry: 6, rot: 15  },
    { cx: 120, cy: 40,  rx: 6, ry: 4, rot: 40  },
    { cx: 55,  cy: 65,  rx: 5, ry: 7, rot: -10 },
    { cx: 100, cy: 75,  rx: 4, ry: 5, rot: 30  },
    { cx: 15,  cy: 85,  rx: 3, ry: 5, rot: 5   },
    { cx: 145, cy: 20,  rx: 4, ry: 6, rot: -35 },
    { cx: 10,  cy: 50,  rx: 5, ry: 3, rot: 55  },
    { cx: 135, cy: 60,  rx: 3, ry: 5, rot: 20  },
    { cx: 70,  cy: 90,  rx: 6, ry: 4, rot: -50 },
    { cx: 40,  cy: 105, rx: 4, ry: 6, rot: 10  },
    { cx: 115, cy: 100, rx: 5, ry: 3, rot: -25 },
  ];
  return (
    <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="cheetah" x="0" y="0" width="160" height="120" patternUnits="userSpaceOnUse">
          {spots.map((s, i) => (
            <ellipse key={i} cx={s.cx} cy={s.cy} rx={s.rx} ry={s.ry} fill="#EAD4BA"
              transform={`rotate(${s.rot}, ${s.cx}, ${s.cy})`} />
          ))}
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#cheetah)" />
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section className="relative w-full bg-[#74031E] font-montserrat" style={{ height: "100vh", maxHeight: "-webkit-fill-available" }}>

      {/* Background */}
      <CheetahPattern />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.5)_100%)] z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_45%,rgba(234,212,186,0.1)_0%,transparent_70%)] z-10" />

      {/* Border frame */}
      <div className="absolute inset-4 border border-[#EAD4BA]/15 z-20" />
      <div className="absolute top-[10px] left-[10px] w-3 h-3 border-t border-l border-[#EAD4BA]/40 z-20" />
      <div className="absolute top-[10px] right-[10px] w-3 h-3 border-t border-r border-[#EAD4BA]/40 z-20" />
      <div className="absolute bottom-[10px] left-[10px] w-3 h-3 border-b border-l border-[#EAD4BA]/40 z-20" />
      <div className="absolute bottom-[10px] right-[10px] w-3 h-3 border-b border-r border-[#EAD4BA]/40 z-20" />

      {/* Content — absolutely centered, no flex height tricks */}
      <div className="absolute inset-0 z-30 flex flex-col items-center justify-center px-6 text-center">

        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-10">
          <span className="w-8 h-px bg-[#EAD4BA]/40" />
          <span className="text-[8px] tracking-[0.38em] uppercase text-[#EAD4BA]/65 font-light">
            Restaurant &amp; Club
          </span>
          <span className="w-8 h-px bg-[#EAD4BA]/40" />
        </div>

        {/* Logo */}
        <Image
          src="/logo.png"
          alt="Le Guépard"
          width={300}
          height={150}
          priority
          className="w-[200px] sm:w-[280px] h-auto"
        />

        {/* Ornament */}
        <div className="flex items-center gap-2 my-8">
          <span className="w-10 h-px bg-[#EAD4BA]/35" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#EAD4BA]/55" />
          <span className="w-1.5 h-1.5 border border-[#EAD4BA]/65 rotate-45" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#EAD4BA]/55" />
          <span className="w-10 h-px bg-[#EAD4BA]/35" />
        </div>

        {/* Description */}
        <p className="text-[11px] tracking-widest uppercase text-[#EAD4BA]/50 font-light leading-loose">
          Une table d'exception
          <br />
          une piste qui ne dort jamais
        </p>

        {/* CTA */}
        <button className="mt-10 px-10 py-3.5 border border-[#EAD4BA]/40 text-[#EAD4BA] text-[9px] tracking-[0.35em] uppercase font-light active:scale-95">
          Voir le menu
        </button>

      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1.5 opacity-30">
        <span className="text-[7px] tracking-[0.32em] uppercase text-[#EAD4BA] font-light">Découvrir</span>
        <span className="w-px h-5 bg-[#EAD4BA] animate-pulse" />
      </div>

    </section>
  );
}