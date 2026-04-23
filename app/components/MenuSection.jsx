"use client";

import Link from "next/link";

const categories = [
  { title: "Cocktails & Soft",  subtitle: "Signatures & Classiques",  href: "/menu/cocktails",  number: "01" },
  { title: "Champagnes & Vins", subtitle: "L'Art de la Vendange",     href: "/menu/champagnes", number: "02" },
  { title: "Bières & Alcools",  subtitle: "L'Âme des Distillats",     href: "/menu/beers",      number: "03" },
  { title: "Entrées",           subtitle: "Pour Commencer",           href: "/menu/entrees",    number: "04" },
  { title: "Apéritifs",         subtitle: "Pour Bien Commencer",      href: "/menu/aperitifs",  number: "05" },
  { title: "Plats",             subtitle: "Poisson & Viande",         href: "/menu/plats",      number: "06" },
  { title: "Pâtes",             subtitle: "Nos Créations",            href: "/menu/pates",      number: "07" },
  { title: "Desserts",          subtitle: "Pour Finir en Beauté",     href: "/menu/desserts",   number: "08" },
];

export default function MenuSection() {
  return (
    <section id="menu" className="relative w-full bg-[#EAD4BA] font-montserrat py-20 px-6 overflow-hidden">

      {/* Section header */}
      <div className="relative z-10 flex flex-col items-center text-center mb-14">
        <div className="flex items-center gap-3 mb-5">
          <span className="w-8 h-px bg-[#74031E]/40" />
          <span className="text-[8px] tracking-[0.38em] uppercase text-[#74031E]/60 font-light">
            Notre Carte
          </span>
          <span className="w-8 h-px bg-[#74031E]/40" />
        </div>
        <h2 className="text-[28px] sm:text-[36px] font-light tracking-[0.12em] uppercase text-[#74031E] leading-none">
          Le Menu
        </h2>
      </div>

      {/* Cards list */}
      <div className="relative z-10 max-w-lg mx-auto flex flex-col gap-3">
        {categories.map((cat) => (
          <Link key={cat.href} href={cat.href}>
            <div className="group relative flex items-center justify-between px-6 py-5 border border-[#74031E]/20 bg-[#EAD4BA] transition-colors duration-300 cursor-pointer overflow-hidden">

              {/* Hover fill — desktop only */}
              <div className="absolute inset-0 bg-[#74031E] translate-x-[-101%] md:group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />

              {/* Number */}
              <span className="relative z-10 text-[10px] tracking-[0.3em] text-[#74031E]/35 md:group-hover:text-[#EAD4BA]/40 transition-colors duration-300 font-light">
                {cat.number}
              </span>

              {/* Title + subtitle */}
              <div className="relative z-10 flex-1 text-center px-4">
                <p className="text-[13px] tracking-[0.2em] uppercase text-[#74031E] md:group-hover:text-[#EAD4BA] transition-colors duration-300 font-semibold leading-none mb-1">
                  {cat.title}
                </p>
                <p className="text-[8px] tracking-[0.25em] uppercase text-[#74031E]/45 md:group-hover:text-[#EAD4BA]/55 transition-colors duration-300 font-medium">
                  {cat.subtitle}
                </p>
              </div>

              {/* Arrow */}
              <span className="relative z-10 text-[#74031E]/40 md:group-hover:text-[#EAD4BA]/70 md:group-hover:translate-x-1 transition-all duration-300 text-xs">
                →
              </span>

            </div>
          </Link>
        ))}
      </div>

      {/* Bottom ornament */}
      <div className="relative z-10 flex items-center justify-center gap-2 mt-14">
        <span className="w-10 h-px bg-[#74031E]/25" />
        <span className="w-1.5 h-1.5 border border-[#74031E]/40 rotate-45" />
        <span className="w-10 h-px bg-[#74031E]/25" />
      </div>

    </section>
  );
}