'use client';

import { motion } from 'framer-motion';

const champagnes = [
  { name: 'Martini Prosecco',     coupe: '70',  bouteille: null   },
  { name: 'Laurent Brut',         coupe: null,  bouteille: '1500' },
  { name: 'Laurent Perrier Rosé', coupe: null,  bouteille: '2400' },
  { name: 'Ruinart Blanc',        coupe: null,  bouteille: '2600' },
  { name: 'Dom Pérignon',         coupe: null,  bouteille: '5500' },
  { name: 'Dom Pérignon Rosé',    coupe: null,  bouteille: '9800' },
];

const vinsMarocains = {
  blanc: [
    { name: 'Médaillon',           verre: '80',  bouteille: '240' },
    { name: 'S de Siroua',         verre: null,  bouteille: '280' },
    { name: 'Aït Souala',          verre: null,  bouteille: '320' },
  ],
  rouge: [
    { name: 'Médaillon',             verre: '80',  bouteille: '240' },
    { name: 'CB Signature',          verre: null,  bouteille: '320' },
    { name: 'Château Roslane Atlas', verre: null,  bouteille: '550' },
    { name: 'Tandem',                verre: null,  bouteille: '520' },
  ],
  rose: [
    { name: 'S de Siroua', verre: '80',  bouteille: '240' },
    { name: 'Tandem',      verre: null,  bouteille: '420' },
  ],
  gris: [
    { name: 'Aït Souala', verre: null, bouteille: '320' },
  ],
};

const vinsEspagne = {
  blanc: [
    { name: 'Marqués de Caceres',      verre: '80',  bouteille: '240' },
    { name: 'Viña Esmeralda',          verre: null,  bouteille: '260' },
    { name: 'Albariño Pazo San Mauro', verre: null,  bouteille: '460' },
  ],
  rouge: [
    { name: 'Marqués de Caceres', verre: '80',  bouteille: '240' },
    { name: 'Altos Ibéricos',     verre: null,  bouteille: '280' },
    { name: 'Sela Bodega Roda',   verre: null,  bouteille: '440' },
    { name: 'Marqués de Vargas',  verre: null,  bouteille: '480' },
  ],
};

const vinsFrance = {
  blanc: [
    { name: 'Chablis',      verre: null, bouteille: '440' },
    { name: 'Pouilly Fumé', verre: null, bouteille: '480' },
    { name: 'Sancerre',     verre: null, bouteille: '590' },
  ],
  rouge: [
    { name: 'Château Cazzu',                          verre: '80',  bouteille: '220' },
    { name: 'Château Lafitte',                        verre: null,  bouteille: '480' },
    { name: 'Chamirey Mercury Bourgogne',             verre: null,  bouteille: '720' },
    { name: 'Châteauneuf-du-Pape Les Sinards Perrin', verre: null,  bouteille: '980' },
  ],
};

const vinsAutres = {
  argentina: [
    { name: 'La Celia Reserva Malbec',       verre: null, bouteille: '320' },
  ],
  chile: [
    { name: 'Tarapaca Reserva Carmenere',    verre: null, bouteille: '320' },
  ],
  italie: [
    { name: 'Chianti Superiore Vigneti Trebbio', verre: null, bouteille: '440' },
  ],
  rose: [
    { name: 'Manon',          verre: '100', bouteille: '280' },
    { name: 'Pétales de Rose', verre: null, bouteille: '380' },
    { name: 'Miraval',        verre: null,  bouteille: '480' },
  ],
};

// ─── Section header: dot + label, no border ──────────────────────────────────
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

// ─── Column labels: single border-b underneath ───────────────────────────────
function ColHeaders({ hasVerre = true, hasCoupe = false }) {
  return (
    <div className="flex items-center justify-between px-1 py-2 border-b border-[#74031E]/20 mb-1">
      <span className="flex-1" />
      <div className="flex items-center gap-8 flex-shrink-0">
        {hasCoupe && (
          <span className="text-[9px] tracking-[0.3em] uppercase text-[#74031E]/50 font-medium w-12 text-right">
            Coupe
          </span>
        )}
        {hasVerre && !hasCoupe && (
          <span className="text-[9px] tracking-[0.3em] uppercase text-[#74031E]/50 font-medium w-10 text-right">
            Verre
          </span>
        )}
        <span className="text-[9px] tracking-[0.3em] uppercase text-[#74031E]/50 font-medium w-16 text-right">
          Bouteille
        </span>
      </div>
    </div>
  );
}

// ─── Sub-category label ───────────────────────────────────────────────────────
function SubLabel({ label }) {
  return (
    <p className="text-[9px] tracking-[0.32em] uppercase text-[#74031E]/50 font-medium mt-5 mb-1">
      {label}
    </p>
  );
}

// ─── Wine row ─────────────────────────────────────────────────────────────────
function WineRow({ item, isLast, hasVerre = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      className={`flex items-center justify-between gap-4 py-4 px-1 ${!isLast ? 'border-b border-[#74031E]/8' : ''}`}
    >
      <p className="text-[15px] tracking-[0.14em] uppercase text-[#74031E] font-light leading-none flex-1">
        {item.name}
      </p>
      <div className="flex items-center gap-8 flex-shrink-0">
        {hasVerre && (
          <p className="text-[15px] tracking-[0.1em] text-[#74031E] font-light w-10 text-right">
            {item.verre ?? '—'}
          </p>
        )}
        <p className="text-[15px] tracking-[0.1em] text-[#74031E] font-light w-16 text-right">
          {item.bouteille ?? '—'}
        </p>
      </div>
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ChampagnesVinsMenu() {
  return (
    <section className="w-full bg-[#EAD4BA] font-montserrat py-14 px-6 md:px-20 lg:px-40">
      <div className="w-full max-w-4xl mx-auto flex flex-col gap-14">

        {/* ── CHAMPAGNES ── */}
        <div>
          <SectionHeader label="Champagnes & Prosecco" />
          <ColHeaders hasCoupe={true} />
          {champagnes.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className={`flex items-center justify-between gap-4 py-4 px-1 ${i !== champagnes.length - 1 ? 'border-b border-[#74031E]/8' : ''}`}
            >
              <p className="text-[15px] tracking-[0.14em] uppercase text-[#74031E] font-light leading-none flex-1">
                {item.name}
              </p>
              <div className="flex items-center gap-8 flex-shrink-0">
                <p className="text-[15px] tracking-[0.1em] text-[#74031E] font-light w-12 text-right">
                  {item.coupe ?? '—'}
                </p>
                <p className="text-[15px] tracking-[0.1em] text-[#74031E] font-light w-16 text-right">
                  {item.bouteille ?? '—'}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── VINS MAROCAINS ── */}
        <div>
          <SectionHeader label="Vins Marocains" />
          <ColHeaders hasVerre={true} />
          <SubLabel label="Blanc" />
          {vinsMarocains.blanc.map((item, i) => (
            <WineRow key={item.name} item={item} isLast={i === vinsMarocains.blanc.length - 1} />
          ))}
          <SubLabel label="Rouge" />
          {vinsMarocains.rouge.map((item, i) => (
            <WineRow key={item.name} item={item} isLast={i === vinsMarocains.rouge.length - 1} />
          ))}
          <SubLabel label="Rosé" />
          {vinsMarocains.rose.map((item, i) => (
            <WineRow key={item.name} item={item} isLast={i === vinsMarocains.rose.length - 1} />
          ))}
          <SubLabel label="Gris" />
          {vinsMarocains.gris.map((item, i) => (
            <WineRow key={item.name} item={item} isLast={i === vinsMarocains.gris.length - 1} />
          ))}
        </div>

        {/* ── VINS D'ESPAGNE ── */}
        <div>
          <SectionHeader label="Vins d'Espagne" />
          <ColHeaders hasVerre={true} />
          <SubLabel label="Blanc" />
          {vinsEspagne.blanc.map((item, i) => (
            <WineRow key={item.name} item={item} isLast={i === vinsEspagne.blanc.length - 1} />
          ))}
          <SubLabel label="Rouge" />
          {vinsEspagne.rouge.map((item, i) => (
            <WineRow key={item.name} item={item} isLast={i === vinsEspagne.rouge.length - 1} />
          ))}
        </div>

        {/* ── VINS DE FRANCE ── */}
        <div>
          <SectionHeader label="Vins de France" />
          <ColHeaders hasVerre={true} />
          <SubLabel label="Blanc" />
          {vinsFrance.blanc.map((item, i) => (
            <WineRow key={item.name} item={item} isLast={i === vinsFrance.blanc.length - 1} />
          ))}
          <SubLabel label="Rouge" />
          {vinsFrance.rouge.map((item, i) => (
            <WineRow key={item.name} item={item} isLast={i === vinsFrance.rouge.length - 1} />
          ))}
        </div>

        {/* ── VINS DU MONDE ── */}
        <div>
          <SectionHeader label="Vins du Monde" />
          <ColHeaders hasVerre={true} />
          <SubLabel label="Argentine" />
          {vinsAutres.argentina.map((item, i) => (
            <WineRow key={item.name} item={item} isLast={i === vinsAutres.argentina.length - 1} />
          ))}
          <SubLabel label="Chili" />
          {vinsAutres.chile.map((item, i) => (
            <WineRow key={item.name} item={item} isLast={i === vinsAutres.chile.length - 1} />
          ))}
          <SubLabel label="Italie" />
          {vinsAutres.italie.map((item, i) => (
            <WineRow key={item.name} item={item} isLast={i === vinsAutres.italie.length - 1} />
          ))}
          <SubLabel label="Rosés du Monde" />
          {vinsAutres.rose.map((item, i) => (
            <WineRow key={item.name} item={item} isLast={i === vinsAutres.rose.length - 1} />
          ))}
        </div>

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