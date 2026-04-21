'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sections = [
  {
    category: "Signatures",
    items: [
      { name: "Le Guépard",     price: "95",  ingredients: "Gin, concombre, citron vert, basilic, eau tonique",              description: "Notre cocktail signature — frais, herbacé et élégant. Une ode au caractère de la maison." },
      { name: "Savane Noire",   price: "110", ingredients: "Whisky fumé, miel sauvage, angostura, zeste d'orange",           description: "Profond et enveloppant. Le fumé du whisky rencontre la douceur brute du miel des montagnes." },
      { name: "Velours Rouge",  price: "120", ingredients: "Vodka, eau de rose, framboise, champagne rosé",                  description: "Délicat et festif. La rose et la framboise s'élèvent au rythme des bulles." },
      { name: "Tanger Sour",    price: "95",  ingredients: "Arak, citron, sirop d'orgeat, blanc d'œuf, sel marin",           description: "L'âme de Tanger dans un verre — anisé, acidulé, avec une mousse soyeuse en surface." },
      { name: "Nuit de Chasse", price: "105", ingredients: "Rum vieux, café, vanille, lait de coco, cannelle",               description: "Chaleureux et mystérieux. Un voyage nocturne entre les épices et la mer des Caraïbes." },
    ],
  },
  {
    category: "Classiques",
    items: [
      { name: "Negroni",        price: "90",  ingredients: "Gin, Campari, vermouth rouge",                                   description: "Le triptyque parfait. Amer, doux et fort à la fois." },
      { name: "Old Fashioned",  price: "100", ingredients: "Bourbon, sucre de canne, angostura bitters",                    description: "L'élégance intemporelle. Simple, puissant, indémodable." },
      { name: "Aperol Spritz",  price: "85",  ingredients: "Aperol, Prosecco, eau gazeuse, orange",                         description: "La légèreté italienne dans un verre — amer, pétillant et solaire." },
      { name: "Mojito",         price: "85",  ingredients: "Rum blanc, menthe fraîche, citron vert, sucre de canne",        description: "La fraîcheur à l'état pur. Menthe cueillie, citron pressé, sucre artisanal." },
      { name: "Margarita",      price: "90",  ingredients: "Tequila, triple sec, citron vert, sel",                         description: "Vif et tranchant. La tequila sublimée par l'acidité du citron et le sel de mer." },
    ],
  },
  {
    category: "Sans Alcool",
    items: [
      { name: "Eden",            price: "65", ingredients: "Concombre, citron vert, basilic, eau pétillante, sirop d'agave", description: "Pur et vivifiant. Le jardin dans un verre." },
      { name: "Hibiscus Royale", price: "65", ingredients: "Hibiscus, gingembre, citron, eau gazeuse, miel",                description: "Floral et légèrement épicé. Une infusion de fleurs rouges rehaussée par le gingembre." },
      { name: "Sunset Tanger",   price: "65", ingredients: "Mangue, passion, orange sanguine, citron, menthe",              description: "Un coucher de soleil dans un verre. Doux, acidulé et coloré." },
    ],
  },
];

function MenuItem({ item, expanded, onToggle, isLast }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`cursor-pointer group ${!isLast ? 'border-b border-[#74031E]/10' : ''}`}
      onClick={onToggle}
    >
      {/* Row */}
      <div className="flex items-start justify-between gap-4 py-5">
        <div className="flex-1">
          {/* Name */}
          <p className="text-[16px] tracking-[0.14em] uppercase text-[#74031E] font-light leading-none mb-2">
            {item.name}
          </p>
          {/* Ingredients */}
          <p className="text-[12px] tracking-wide text-[#74031E]/60 font-normal leading-relaxed">
            {item.ingredients}
          </p>
          {/* Details toggle */}
          <div className="flex items-center gap-1.5 mt-3 text-[8px] tracking-[0.22em] uppercase text-[#74031E]/35 font-light">
            <span>{expanded ? 'Fermer' : 'Détails'}</span>
            <motion.svg
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.25 }}
              width="9" height="9" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2"
            >
              <polyline points="6 9 12 15 18 9" />
            </motion.svg>
          </div>
        </div>

        {/* Price */}
        <p className="text-[16px] tracking-[0.1em] text-[#74031E] font-light flex-shrink-0 mt-0.5">
          {item.price}
        </p>
      </div>

      {/* Expandable description */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-[12px] tracking-wide text-[#74031E]/65 font-normal italic leading-relaxed pb-5 pl-4 border-l border-[#74031E]/20">
              {item.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function MenuSection({ section }) {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const toggle = (i) => setExpandedIndex(expandedIndex === i ? null : i);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Category header */}
      <div className="flex items-center gap-4 mb-2">
        <span className="text-[11px] tracking-[0.35em] uppercase text-[#74031E] font-medium whitespace-nowrap">
          {section.category}
        </span>
        <span className="flex-1 h-px bg-[#74031E]/20" />
      </div>

      {/* Items */}
      <div>
        {section.items.map((item, i) => (
          <MenuItem
            key={item.name}
            item={item}
            expanded={expandedIndex === i}
            onToggle={() => toggle(i)}
            isLast={i === section.items.length - 1}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function CocktailsMenu() {
  return (
    <section className="w-full bg-[#EAD4BA] font-montserrat py-14 px-6 md:px-20 lg:px-40">
      <div className="w-full max-w-4xl mx-auto flex flex-col gap-12">

        {sections.map((section) => (
          <MenuSection key={section.category} section={section} />
        ))}

        {/* Bottom ornament */}
        <div className="flex items-center justify-center gap-2 pt-2">
          <span className="w-10 h-px bg-[#74031E]/25" />
          <span className="w-1.5 h-1.5 border border-[#74031E]/40 rotate-45" />
          <span className="w-10 h-px bg-[#74031E]/25" />
        </div>

      </div>
    </section>
  );
}