'use client';

import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { portalInfo } from '@/data/portalData';

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToForm = () => {
    const el = document.getElementById('enquiry-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Mobile Sticky Quick-Action Bar (Fixed at Bottom for Recruiters & HR) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-2.5 px-3 flex items-center justify-between gap-2 shadow-2xl">
        <div className="flex-1 min-w-0">
          <p className="text-[10px] uppercase tracking-wider text-emerald-400 font-extrabold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            HR Desk • DevOps &amp; Cloud Roles
          </p>
          <p className="text-xs font-black text-white truncate">{portalInfo.phone}</p>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <a
            href={portalInfo.phoneTel}
            className="px-3 py-2 rounded-xl bg-emerald-500 text-slate-950 font-black text-xs flex items-center gap-1.5 shadow-sm active:scale-95"
          >
            <Phone className="w-3.5 h-3.5 fill-slate-950" />
            <span>Call Now</span>
          </a>

          <a
            href={portalInfo.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-xl bg-emerald-600 text-white shadow-sm flex items-center justify-center active:scale-95"
            aria-label="WhatsApp Desk"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Desktop Floating Actions */}
      <div className="fixed bottom-5 right-5 z-40 hidden sm:flex flex-col items-end gap-2.5">
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white text-slate-700 shadow-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50 hover:text-blue-600 transition-all cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        <a
          href={portalInfo.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg shadow-emerald-900/20 transition hover:scale-105 hover:bg-emerald-700"
          aria-label="Chat on WhatsApp with Hiring Team"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="h-5 w-5" />
        </a>
      </div>
    </>
  );
}
