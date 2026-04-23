'use client';

import { motion } from 'framer-motion';

const bieres = [
  { name: 'Mahou 5 Estrellas', prix: '45' },
  { name: 'San Miguel',        prix: '50' },
  { name: 'Casablanca',        prix: '70' },
  { name: 'Corona',            prix: '80' },
];

const aperitifs = [
  { name: 'Martini Rouge',          prix: '70' },
  { name: 'Martini Blanc',          prix: '70' },
  { name: 'Campari',                prix: '70' },
  { name: 'Pastis 12/12 St Tropez', prix: '80' },
];

const cognac = [
  { name: 'Hennessy VS',   verre: '150', bouteille: null   },
  { name: 'Hennessy VSOP', verre: '300', bouteille: null   },
  { name: 'Hennessy X.O.', verre: null,  bouteille: '6000' },
];

const digestifs = [
  { name: 'Limoncello', prix: '60' },
  { name: 'Sambuca',    prix: '70' },
  { name: 'Get 27',     prix: '70' },
  { name: 'Baileys',    prix: '90' },
  { name: 'Amaretto',   prix: '90' },
];

const rhum = [
  { name: 'Bacardi Blanc',  verre: '80',  bouteille: null },
  { name: 'Bacardi Gold',   verre: '80',  bouteille: null },
  { name: 'Bacardi 8 Ans',  verre: '140', bouteille: null },
  { name: 'Zacapa 23',      verre: '300',  bouteille: null },
];

const vodka = [
  { name: 'Grey Goose',        verre: '120', bouteille: '1800' },
  { name: 'Grey Goose Altius', verre: null,  bouteille: '3900' },
];

const whisky = [
  { name: 'Jack Daniels',       verre: '100', bouteille: '2000' },
  { name: 'Jack Daniels Honey', verre: '100', bouteille: '2000' },
  { name: 'Jack Gentleman',     verre: '140', bouteille: null   },
  { name: 'Bourbon Bulleit',    verre: '120', bouteille: null   },
  { name: 'Black Label',        verre: '140', bouteille: null   },
  { name: 'Gold Label',         verre: null,  bouteille: '2800' },
  { name: 'Blue Label',         verre: null,  bouteille: '6000' },
  { name: 'Glenfiddich 12',     verre: '140', bouteille: '2000' },
];

const gin = [
  { name: 'Bombay Sapphire', verre: '80',  bouteille: '1400' },
  { name: 'Hendricks',       verre: '100', bouteille: '1600' },
  { name: 'Tanqueray Dry',   verre: '100', bouteille: '1600' },
  { name: 'Monkey 47',       verre: '200', bouteille: '3000' },
  { name: 'Palmarae',        verre: '250', bouteille: '2600' },
];

const tequila = [
  { name: 'Camino',              verre: '70',  bouteille: null   },
  { name: 'Mezcal San Cosme',    verre: '180', bouteille: '2000' },
  { name: 'Patron Silver',       verre: '200', bouteille: '2500' },
  { name: 'Patron Reposado',     verre: '250', bouteille: '3000' },
  { name: 'Patron Añejo',        verre: '300', bouteille: '3500' },
  { name: 'Patron Coffee',       verre: '200', bouteille: '2500' },
  { name: 'Clase Azul Reposado', verre: null,  bouteille: '6000' },
];

// ─── Category title: dot + label, no border ──────────────────────────────────
function SectionHeader({ label }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="w-1.5 h-1.5 rounded-full bg-[#74031E]/40 flex-shrink-0" />
      <span className="text-[11px] tracking-[0.38em] uppercase text-[#74031E] font-semibold">
        {label}
      </span>
    </div>
  );
}

// ─── Column labels: single border underneath ─────────────────────────────────
function ColBand({ double = false }) {
  return (
    <div className="flex items-center justify-between px-1 py-2 border-b border-[#74031E]/20 mb-1">
      <span className="flex-1" />
      <div className={`flex items-center ${double ? 'gap-8' : ''}`}>
        {double && (
          <span className="text-[9px] tracking-[0.3em] uppercase text-[#74031E]/50 font-medium w-12 text-right">
            Verre
          </span>
        )}
        <span className="text-[9px] tracking-[0.3em] uppercase text-[#74031E]/50 font-medium w-16 text-right">
          {double ? 'Bouteille' : 'Prix'}
        </span>
      </div>
    </div>
  );
}

// ─── Single price row ─────────────────────────────────────────────────────────
function SimpleSection({ label, items }) {
  return (
    <div>
      <SectionHeader label={label} />
      <ColBand double={false} />
      {items.map((item, i) => (
        <motion.div
          key={item.name}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: i * 0.04 }}
          className={`flex items-center justify-between gap-4 py-4 px-1 ${
            i !== items.length - 1 ? 'border-b border-[#74031E]/8' : ''
          }`}
        >
          <p className="text-[15px] tracking-[0.14em] uppercase text-[#74031E] font-light flex-1">
            {item.name}
          </p>
          <p className="text-[15px] tracking-[0.1em] text-[#74031E] font-light w-16 text-right">
            {item.prix}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

// ─── Verre + Bouteille row ────────────────────────────────────────────────────
function DoubleSection({ label, items }) {
  return (
    <div>
      <SectionHeader label={label} />
      <ColBand double={true} />
      {items.map((item, i) => (
        <motion.div
          key={item.name}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: i * 0.04 }}
          className={`flex items-center justify-between gap-4 py-4 px-1 ${
            i !== items.length - 1 ? 'border-b border-[#74031E]/8' : ''
          }`}
        >
          <p className="text-[15px] tracking-[0.14em] uppercase text-[#74031E] font-light flex-1">
            {item.name}
          </p>
          <div className="flex items-center gap-8 flex-shrink-0">
            <p className="text-[15px] tracking-[0.1em] text-[#74031E] font-light w-12 text-right">
              {item.verre ?? '—'}
            </p>
            <p className="text-[15px] tracking-[0.1em] text-[#74031E] font-light w-16 text-right">
              {item.bouteille ?? '—'}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function BieresAlcoolsMenu() {
  return (
    <section className="w-full bg-[#EAD4BA] font-montserrat py-14 px-6 md:px-20 lg:px-40">
      <div className="w-full max-w-4xl mx-auto flex flex-col gap-14">

        <SimpleSection label="Bières"          items={bieres}    />
        <SimpleSection label="Apéritifs"        items={aperitifs} />
        <DoubleSection label="Cognac"           items={cognac}    />
        <SimpleSection label="Digestifs"        items={digestifs} />
        <DoubleSection label="Rhum"             items={rhum}      />
        <DoubleSection label="Vodka"            items={vodka}     />
        <DoubleSection label="Whisky"           items={whisky}    />
        <DoubleSection label="Gin"              items={gin}       />
        <DoubleSection label="Tequila & Mezcal" items={tequila}   />

        <div className="flex items-center justify-center gap-2 pt-2">
          <span className="w-10 h-px bg-[#74031E]/25" />
          <span className="w-1.5 h-1.5 border border-[#74031E]/40 rotate-45" />
          <span className="w-10 h-px bg-[#74031E]/25" />
        </div>

      </div>
    </section>
  );
}