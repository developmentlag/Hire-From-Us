'use client';

import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp, Briefcase } from 'lucide-react';
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
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-white text-slate-700 shadow-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50 hover:text-blue-600 transition-all cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Quick Hire CTA Pill */}
      <button
        onClick={scrollToForm}
        className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold shadow-xl shadow-blue-700/30 transition-all hover:scale-105 cursor-pointer border border-blue-600"
      >
        <Briefcase className="w-3.5 h-3.5" />
        <span>Request Candidates</span>
      </button>

      {/* Direct WhatsApp Callout */}
      <a
        href={portalInfo.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl shadow-emerald-600/30 flex items-center justify-center transition-all hover:scale-110 cursor-pointer"
        aria-label="Chat on WhatsApp with Hiring Team"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}
