'use client';

import React from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';
import { portalInfo } from '@/data/portalData';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export default function ScheduleDiscussionModal({
  isOpen,
  onClose,
  title = 'Talk to the Placement Desk',
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="placement-contact-title"
        className="bg-white rounded-3xl border border-blue-200 shadow-2xl max-w-lg w-full p-6 sm:p-8 relative"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close contact options"
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <p className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-2">
          Direct contact
        </p>
        <h2 id="placement-contact-title" className="text-2xl font-bold text-slate-900 pr-8">
          {title}
        </h2>
        <p className="text-sm text-slate-600 mt-3">
          Call or message us to discuss your role requirements and confirm current candidate availability. Interview times are arranged directly with the team.
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <a
            href={portalInfo.phoneTel}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm transition-colors"
          >
            <Phone className="w-4 h-4" />
            Call {portalInfo.phone}
          </a>
          <a
            href={portalInfo.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
