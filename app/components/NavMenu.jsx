'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const menuItems = [
  { label: "Cocktails",         href: "/menu/cocktails" },
  { label: "Apéritifs",         href: "/menu/aperitifs" },
  { label: "Entrées",           href: "/menu/entrees" },
  { label: "Plats",             href: "/menu/plats" },
  { label: "Pâtes",             href: "/menu/pates" },
  { label: "Desserts",          href: "/menu/desserts" },
];

export default function MenuNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [open]);

  return (
    <>
      {/* Fixed Navbar */}
      <div
        style={{
          position: 'fixed', top: 0, left: 0, right: 0,
          height: 56, zIndex: 50,
          backgroundColor: '#74031E',
          borderBottom: '1px solid rgba(234,212,186,0.2)',
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 20px',
        }}
      >
        <Link href="/">
          <Image src="/logo.png" alt="Le Guépard" width={110} height={55} priority style={{ height: 32, width: 'auto' }} />
        </Link>

        <button
          onClick={() => setOpen(true)}
          style={{
            width: 48, height: 48,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'none', border: 'none', cursor: 'pointer',
            WebkitTapHighlightColor: 'transparent',
          }}
        >
          <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="0"  width="24" height="2" rx="1" fill="#EAD4BA" />
            <rect y="7"  width="24" height="2" rx="1" fill="#EAD4BA" />
            <rect y="14" width="16" height="2" rx="1" fill="#EAD4BA" />
          </svg>
        </button>
      </div>

      {/* Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 60,
              backgroundColor: '#74031E',
              display: 'flex', flexDirection: 'column',
              fontFamily: 'var(--font-montserrat), Montserrat, sans-serif',
            }}
          >
            {/* Drawer header */}
            <div style={{
              height: 56, display: 'flex', alignItems: 'center',
              justifyContent: 'space-between', padding: '0 20px',
              borderBottom: '1px solid rgba(234,212,186,0.2)',
            }}>
              <Link href="/" onClick={() => setOpen(false)}>
                <Image src="/logo.png" alt="Le Guépard" width={110} height={55} style={{ height: 32, width: 'auto' }} />
              </Link>

              <button
                onClick={() => setOpen(false)}
                style={{
                  width: 48, height: 48,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'none', border: 'none', cursor: 'pointer',
                  color: '#EAD4BA', fontSize: 20,
                  WebkitTapHighlightColor: 'transparent',
                }}
              >
                ✕
              </button>
            </div>

            {/* Links */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 32px' }}>
              {menuItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.35, delay: i * 0.06 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    style={{ textDecoration: 'none' }}
                  >
                    <div style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      padding: '18px 0',
                      borderBottom: '1px solid rgba(234,212,186,0.15)',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                        <span style={{ fontSize: 10, letterSpacing: '0.25em', color: 'rgba(234,212,186,0.3)', fontWeight: 300 }}>
                          0{i + 1}
                        </span>
                        <span style={{ fontSize: 17, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#EAD4BA', fontWeight: 300 }}>
                          {item.label}
                        </span>
                      </div>
                      <span style={{ color: 'rgba(234,212,186,0.4)', fontSize: 14 }}>→</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}