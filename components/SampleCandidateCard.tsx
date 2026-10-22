'use client';

import React from 'react';
import { Candidate } from '@/data/candidates';
import { MapPin, Clock, ArrowRight, Eye, CheckCircle2, ShieldCheck } from 'lucide-react';

interface CardProps {
  candidate: Candidate;
  onViewProfile: (candidate: Candidate) => void;
  onRequestProfile: (candidate: Candidate) => void;
}

export default function SampleCandidateCard({
  candidate,
  onViewProfile,
  onRequestProfile
}: CardProps) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 hover:border-blue-400 p-6 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Top header row */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-700 to-sky-500 text-white font-bold text-lg flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform shrink-0">
              {candidate.avatarInitial}
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="font-bold text-slate-900 text-base group-hover:text-blue-700 transition-colors">
                  {candidate.name}
                </h3>
                {candidate.verifiedBadge && (
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                )}
              </div>
              <span className="text-xs font-semibold text-blue-600">
                {candidate.experience}
              </span>
            </div>
          </div>

          <span className="text-[11px] font-bold text-sky-800 bg-sky-50 border border-sky-200/70 px-2.5 py-1 rounded-full whitespace-nowrap">
            {candidate.noticePeriod}
          </span>
        </div>

        {/* Best fit badge */}
        <div className="mb-4 p-2.5 rounded-xl bg-blue-50/70 border border-blue-100">
          <p className="text-[11px] font-bold uppercase tracking-wider text-blue-800">Best fit:</p>
          <p className="text-xs font-bold text-slate-800 mt-0.5">{candidate.bestFit}</p>
        </div>

        {/* Skills */}
        <div className="mb-4">
          <p className="text-[11px] font-semibold text-slate-500 mb-2">Key Competencies:</p>
          <div className="flex flex-wrap gap-1.5">
            {candidate.skills.slice(0, 5).map((skill) => (
              <span
                key={skill}
                className="text-xs font-medium px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200/60 group-hover:border-blue-200 group-hover:bg-blue-50/40 transition-colors"
              >
                {skill}
              </span>
            ))}
            {candidate.skills.length > 5 && (
              <span className="text-xs font-medium px-2 py-1 rounded-lg bg-slate-50 text-slate-500 border border-slate-200">
                +{candidate.skills.length - 5} more
              </span>
            )}
          </div>
        </div>

        {/* Location & Background */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span className="flex items-center gap-1 truncate max-w-[180px]">
            <MapPin className="w-3.5 h-3.5 text-blue-500 shrink-0" />
            <span className="truncate">{candidate.location}</span>
          </span>
          <span className="text-slate-400 font-medium text-[11px]">
            {candidate.type === 'fresher' ? 'DIM Graduate' : 'Screened'}
          </span>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-5 pt-4 border-t border-slate-100 grid grid-cols-2 gap-2">
        <button
          onClick={() => onViewProfile(candidate)}
          className="py-2.5 px-3 rounded-xl border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-700 bg-white hover:bg-blue-50/50 text-xs font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <Eye className="w-3.5 h-3.5 text-blue-600" />
          <span>View Profile</span>
        </button>

        <button
          onClick={() => onRequestProfile(candidate)}
          className="py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-sm shadow-blue-500/20 flex items-center justify-center gap-1 cursor-pointer"
        >
          <span>Request Profile</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
