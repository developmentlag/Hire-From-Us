'use client';

import { Phone } from 'lucide-react';
import { Candidate } from '@/data/candidates';
import { portalInfo } from '@/data/portalData';

interface CardProps {
  candidate: Candidate;
}

export default function SampleCandidateCard({ candidate }: CardProps) {
  return (
    <a
      href={portalInfo.phoneTel}
      aria-label={`Call ${portalInfo.phone} to ask about ${candidate.name}`}
      className="group block overflow-hidden rounded-[1.25rem] border border-slate-200 bg-white p-2 shadow-[0_8px_25px_-20px_rgba(15,23,42,0.4)] transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_35px_-22px_rgba(15,23,42,0.35)]"
    >
      <div className={`relative flex h-40 items-end justify-center overflow-hidden rounded-t-[1rem] ${
        candidate.type === 'fresher'
          ? 'bg-gradient-to-b from-[#dcecff] to-[#cfe3fb]'
          : 'bg-gradient-to-b from-[#e5eaff] to-[#d7e1f5]'
      }`}>
        <svg aria-hidden="true" viewBox="0 0 400 180" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
          <path d="M-30 156 C80 55 320 55 430 156" fill="none" stroke="rgba(255,255,255,.75)" strokeWidth="1.5" />
          <path d="M-30 174 C80 73 320 73 430 174" fill="none" stroke="rgba(255,255,255,.55)" strokeWidth="1.5" />
        </svg>
        <div className="absolute -right-9 -top-20 h-48 w-48 rounded-full border border-white/45" />
        <div className="absolute right-8 top-6 h-24 w-24 rounded-full border border-white/50" />
        <svg
          aria-hidden="true"
          viewBox="0 0 160 170"
          className="relative z-10 mb-[-1px] h-[9.2rem] w-[9rem] drop-shadow-[0_8px_12px_rgba(24,52,89,0.16)] transition-transform duration-200 group-hover:scale-[1.04]"
        >
          <path
            d="M80 7c-23 0-36 17-36 41 0 22 12 37 27 42v13c-31 7-52 26-57 67h132c-5-41-26-60-57-67V90c16-6 27-21 27-42C116 24 103 7 80 7Z"
            fill="#183459"
          />
          <path d="M57 44c2-21 11-31 24-32-8-5-18-2-25 5-8 8-12 19-12 31 0 22 12 37 27 42v13c-9 2-17 6-24 10 10-5 22-7 33-8V90C65 84 55 67 57 44Z" fill="#244973" />
          <path d="M16 170c5-37 24-57 52-65l12 18 12-18c28 8 47 28 52 65H16Z" fill="#183459" />
          <path d="m68 105 12 18 12-18-12-4-12 4Z" fill="#dbeafe" />
        </svg>
      </div>

      <div className="flex min-h-[112px] flex-col items-center justify-center rounded-b-[1rem] bg-white px-4 py-4 text-center">
        <h3 className="w-full truncate text-base font-semibold tracking-tight text-slate-900">{candidate.name}</h3>
        <p className="mt-1.5 w-full truncate text-xs font-medium text-slate-500">{candidate.bestFit}</p>
        <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 transition group-hover:text-blue-900">
          <Phone className="h-3.5 w-3.5" />
          Call to enquire
        </span>
      </div>
    </a>
  );
}
