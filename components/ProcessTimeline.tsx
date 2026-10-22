import React from 'react';
import { hiringProcessSteps } from '@/data/portalData';
import { 
  FileText, 
  Users, 
  Video, 
  UserCheck, 
  ArrowRight, 
  PhoneCall,
  Sparkles,
  MessageSquare
} from 'lucide-react';

interface ProcessTimelineProps {
  onTalkToHiringTeam?: () => void;
}

const icons = [FileText, Users, Video, UserCheck];

export default function ProcessTimeline({ onTalkToHiringTeam }: ProcessTimelineProps) {
  const handleTalk = () => {
    if (onTalkToHiringTeam) {
      onTalkToHiringTeam();
    } else {
      window.open('https://wa.me/919136158245?text=Hello%20DIM%2C%20I%20would%20like%20to%20talk%20to%20your%20Hiring%20Team.', '_blank');
    }
  };

  return (
    <section id="how-it-works" className="py-20 bg-slate-50 relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3 border border-blue-200">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Seamless Hiring Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How Hiring Works at DIM
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Hire pre-screened talent in 4 simple steps without endless screening interviews or recruitment friction.
          </p>
        </div>

        {/* 4 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {hiringProcessSteps.map((step, idx) => {
            const Icon = icons[idx] || FileText;
            return (
              <div 
                key={step.step}
                className="bg-white rounded-3xl border border-blue-100 p-7 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold text-lg group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-extrabold text-slate-200 group-hover:text-blue-200 transition-colors">
                      {step.step}
                    </span>
                  </div>

                  <span className="inline-block bg-sky-50 text-sky-800 text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-sky-200/60 mb-2">
                    {step.highlight}
                  </span>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-blue-600 gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Step {step.step} Milestone</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA banner under process */}
        <div className="mt-14 max-w-2xl mx-auto text-center bg-white border border-blue-200 rounded-3xl p-6 sm:p-8 shadow-md">
          <h3 className="text-xl font-bold text-slate-900">
            Have a custom requirement or need an urgent hiring drive?
          </h3>
          <p className="text-sm text-slate-600 mt-1.5 mb-6">
            Our placement director and technical mentors can help you configure candidate assessments tailored to your stack.
          </p>

          <button
            onClick={handleTalk}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm shadow-md shadow-blue-500/25 transition-all cursor-pointer"
          >
            <PhoneCall className="w-4 h-4 text-sky-300" />
            <span>Talk to Our Hiring Team</span>
          </button>
        </div>
      </div>
    </section>
  );
}
