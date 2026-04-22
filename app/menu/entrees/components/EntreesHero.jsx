"use client";

export default function EntreesHero() {
  return (
    <section
      className="relative w-full bg-[#74031E] font-montserrat flex items-center justify-center"
      style={{ height: "55vw", minHeight: 280, maxHeight: 420 }}
    >
      {/* Spot pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="spots-hero" x="0" y="0" width="160" height="120" patternUnits="userSpaceOnUse">
            {[
              { cx: 30,  cy: 25,  rx: 5, ry: 8, rot: -20 },
              { cx: 80,  cy: 10,  rx: 4, ry: 6, rot: 15  },
              { cx: 120, cy: 40,  rx: 6, ry: 4, rot: 40  },
              { cx: 55,  cy: 65,  rx: 5, ry: 7, rot: -10 },
              { cx: 100, cy: 75,  rx: 4, ry: 5, rot: 30  },
              { cx: 15,  cy: 85,  rx: 3, ry: 5, rot: 5   },
              { cx: 145, cy: 20,  rx: 4, ry: 6, rot: -35 },
              { cx: 70,  cy: 90,  rx: 6, ry: 4, rot: -50 },
            ].map((s, i) => (
              <ellipse key={i} cx={s.cx} cy={s.cy} rx={s.rx} ry={s.ry} fill="#EAD4BA"
                transform={`rotate(${s.rot}, ${s.cx}, ${s.cy})`} />
            ))}
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#spots-hero)" />
      </svg>

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.45)_100%)] pointer-events-none z-10" />

      {/* Border frame */}
      <div className="absolute inset-3 border border-[#EAD4BA]/15 pointer-events-none z-20" />
      <div className="absolute top-[6px] left-[6px] w-3 h-3 border-t border-l border-[#EAD4BA]/40 z-20" />
      <div className="absolute top-[6px] right-[6px] w-3 h-3 border-t border-r border-[#EAD4BA]/40 z-20" />
      <div className="absolute bottom-[6px] left-[6px] w-3 h-3 border-b border-l border-[#EAD4BA]/40 z-20" />
      <div className="absolute bottom-[6px] right-[6px] w-3 h-3 border-b border-r border-[#EAD4BA]/40 z-20" />

      {/* Content */}
      <div className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center px-6">

        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-5">
          <span className="w-6 h-px bg-[#EAD4BA]/40" />
          <span className="text-[7px] tracking-[0.38em] uppercase text-[#EAD4BA]/55 font-light">
            Notre Carte
          </span>
          <span className="w-6 h-px bg-[#EAD4BA]/40" />
        </div>

        {/* Title */}
        <h1 className="text-[36px] sm:text-[48px] tracking-[0.18em] uppercase text-[#EAD4BA] font-light leading-none mb-4">
          Entrées
        </h1>

        {/* Ornament */}
        <div className="flex items-center gap-2">
          <span className="w-8 h-px bg-[#EAD4BA]/35" />
          <span className="w-1 h-1 rounded-full bg-[#EAD4BA]/55" />
          <span className="w-1.5 h-1.5 border border-[#EAD4BA]/55 rotate-45" />
          <span className="w-1 h-1 rounded-full bg-[#EAD4BA]/55" />
          <span className="w-8 h-px bg-[#EAD4BA]/35" />
        </div>

        {/* Subtitle */}
        <p className="mt-4 text-[9px] tracking-[0.3em] uppercase text-[#EAD4BA]/45 font-light">
          Pour Commencer
        </p>

      </div>
    </section>
  );
}