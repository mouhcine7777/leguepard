'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sections = [
  {
    category: "Froides",
    items: [
      { name: "Soupe Bortsch et crabe VG", price: "120", ingredients: "Betterave, crabe, crème fraîche, aneth", description: "Une soupe froide d'inspiration russe revisitée — la douceur terreuse de la betterave rencontre la finesse iodée du crabe. Fraîche, élégante, inattendue." },
      { name: "Ceviche Clásico Peruano", price: "140", ingredients: "Poisson blanc cru, leche de tigre, oignon rouge, coriandre, ají", description: "Le ceviche dans sa forme la plus pure. Le poisson mariné à l'acide du citron, relevé par le piment et la fraîcheur de la coriandre — un classique péruvien." },
      { name: "Causa Péruvienne Noire", price: "150", ingredients: "Pomme de terre à l'ají, encre de seiche, gambas", description: "La causa revisitée dans sa version noire — pomme de terre relevée à l'ají amarillo et colorée à l'encre de seiche, surmontée de gambas délicatement assaisonnées." },
    ],
  },
  {
    category: "Chaudes & Marinées",
    items: [
      { name: "Tiradito de Thon", price: "150", ingredients: "Thon, leche de tigre à l'avocat, calamar croustillant, radis, navet, jalapeño", description: "Entre sashimi et ceviche, le tiradito met le thon à l'honneur. L'avocat adoucit, le jalapeño pique, le calamar croustillant apporte la texture." },
      { name: "Saumon Tataki", price: "145", ingredients: "Saumon snacké, fenouil, edamame, concombre, coriandre, oignon & ponzu", description: "Le saumon saisi à la flamme, servi en salade fraîche. La sauce ponzu lie les saveurs asiatiques et méditerranéennes dans une assiette lumineuse et équilibrée." },
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
      <div className="flex items-start justify-between gap-4 py-5">
        <div className="flex-1">
          <p className="text-[16px] tracking-[0.14em] uppercase text-[#74031E] font-light leading-none mb-2">{item.name}</p>
          <p className="text-[12px] tracking-wide text-[#74031E]/60 font-normal leading-relaxed">{item.ingredients}</p>
          <div className="flex items-center gap-1.5 mt-3 text-[10px] tracking-[0.22em] uppercase text-[#74031E]/60 font-medium">
            <span>{expanded ? 'Fermer' : 'Détails'}</span>
            <motion.svg animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.25 }} width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9" />
            </motion.svg>
          </div>
        </div>
        <p className="text-[16px] tracking-[0.1em] text-[#74031E] font-light flex-shrink-0 mt-0.5">{item.price}</p>
      </div>
      <AnimatePresence>
        {expanded && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
            <p className="text-[12px] tracking-wide text-[#74031E]/65 font-normal italic leading-relaxed pb-5 pl-4 border-l border-[#74031E]/20">{item.description}</p>
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
    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
      <div className="flex items-center gap-4 mb-2">
        <span className="text-[11px] tracking-[0.35em] uppercase text-[#74031E] font-medium whitespace-nowrap">{section.category}</span>
        <span className="flex-1 h-px bg-[#74031E]/20" />
      </div>
      <div>
        {section.items.map((item, i) => (
          <MenuItem key={item.name} item={item} expanded={expandedIndex === i} onToggle={() => toggle(i)} isLast={i === section.items.length - 1} />
        ))}
      </div>
    </motion.div>
  );
}

export default function EntreesMenu() {
  return (
    <section className="w-full bg-[#EAD4BA] font-montserrat py-14 px-6 md:px-20 lg:px-40">
      <div className="w-full max-w-4xl mx-auto flex flex-col gap-12">
        {sections.map((section) => (<MenuSection key={section.category} section={section} />))}
        <div className="flex items-center justify-center gap-2 pt-2">
          <span className="w-10 h-px bg-[#74031E]/25" />
          <span className="w-1.5 h-1.5 border border-[#74031E]/40 rotate-45" />
          <span className="w-10 h-px bg-[#74031E]/25" />
        </div>
      </div>
    </section>
  );
}