'use client';

import React from 'react';
import { 
  X, 
  MapPin, 
  Clock, 
  GraduationCap, 
  Briefcase, 
  CheckCircle,
  Award, 
  Layers, 
  Send,
  Phone
} from 'lucide-react';
import { Candidate } from '@/data/candidates';
import { portalInfo } from '@/data/portalData';

interface ModalProps {
  candidate: Candidate | null;
  isOpen: boolean;
  onClose: () => void;
  onRequestInterview: (candidate: Candidate) => void;
}

export default function CandidateProfileModal({
  candidate,
  isOpen,
  onClose,
  onRequestInterview
}: ModalProps) {
  if (!isOpen || !candidate) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl border border-blue-200 shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header banner */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-sky-700 text-white p-6 sm:p-8 rounded-t-3xl relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-2xl bg-white text-blue-800 font-extrabold text-2xl flex items-center justify-center shadow-lg shrink-0">
              {candidate.avatarInitial}
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-2xl font-bold text-white">{candidate.name}</h3>
                <span className="bg-white/10 text-sky-100 text-xs font-semibold px-2.5 py-0.5 rounded-full border border-white/20 flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-sky-200" />
                  Candidate profile
                </span>
              </div>
              <p className="text-sky-200 font-medium text-sm mt-1">{candidate.role}</p>

              <div className="flex items-center gap-4 mt-3 text-xs text-blue-100 flex-wrap">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-sky-300" />
                  {candidate.location}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-sky-300" />
                  Notice: <strong className="text-white ml-0.5">{candidate.noticePeriod}</strong>
                </span>
                <span className="flex items-center gap-1">
                  <Briefcase className="w-3.5 h-3.5 text-sky-300" />
                  {candidate.experience}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Best fit callout */}
          <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-blue-800">Profile focus</p>
              <p className="text-base font-bold text-slate-900 mt-0.5">{candidate.bestFit}</p>
            </div>
            <span className="text-xs font-medium text-slate-600">Review against your requirements</span>
          </div>

          {/* Core Technical Skills */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-blue-600" />
              <span>Technical Skills & Tools</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {candidate.skills.map((skill) => (
                <span 
                  key={skill}
                  className="px-3 py-1.5 rounded-xl bg-slate-100 text-slate-800 text-xs font-semibold border border-slate-200 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Capstone Project / Production Work */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-blue-600" />
              <span>Capstone Project & Practical Work</span>
            </h4>
            <div className="bg-sky-50/60 border border-sky-200 rounded-2xl p-4">
              <p className="text-sm font-bold text-slate-900">{candidate.capstoneProject}</p>
              <ul className="mt-3 space-y-2 text-xs sm:text-sm text-slate-600">
                {candidate.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5 flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
                <span>Education / Background</span>
              </h4>
              <p className="text-xs text-slate-700 font-medium bg-slate-50 p-3 rounded-xl border border-slate-200">
                {candidate.educationOrBackground}
              </p>
            </div>

            {candidate.certifications && candidate.certifications.length > 0 && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-blue-600" />
                  <span>Certifications / Modules</span>
                </h4>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-1">
                  {candidate.certifications.map((cert) => (
                    <p key={cert} className="text-xs font-medium text-slate-700">• {cert}</p>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Action buttons */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => {
                onRequestInterview(candidate);
                onClose();
              }}
              className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Interview This Candidate</span>
            </button>

            <a
              href={portalInfo.phoneTel}
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm flex items-center justify-center gap-2 transition-colors whitespace-nowrap"
            >
              <Phone className="w-4 h-4 fill-slate-950" />
              <span>Call: {portalInfo.phone}</span>
            </a>

            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-3.5 rounded-xl border border-slate-300 text-slate-700 font-semibold hover:bg-slate-50 text-sm transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
