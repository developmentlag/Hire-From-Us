import React from 'react';
import Link from 'next/link';
import { GraduationCap, Users, ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export default function TalentCategoryCards() {
  return (
    <section className="py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5 text-blue-600" />
            <span>Curated Talent Pipelines</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Choose Your Candidate Pool
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Whether you need prompt entry-level engineers for 24x7 monitoring and cloud operations or experienced DevOps architects to scale Kubernetes platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {/* Card 1 — Freshers & Entry-Level Talent */}
          <div className="relative group bg-gradient-to-b from-sky-50/60 via-white to-blue-50/30 rounded-3xl border border-sky-200/90 hover:border-blue-400 p-8 sm:p-10 shadow-lg shadow-sky-500/5 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col justify-between">
            {/* Top Tag & Badge */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-sky-400 text-white flex items-center justify-center shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div className="text-right">
                  <span className="inline-block bg-sky-100 text-sky-900 text-xs font-extrabold px-3 py-1 rounded-full border border-sky-200">
                    85+ Ready Now
                  </span>
                  <p className="text-[11px] text-slate-500 mt-1 font-medium">Immediate / 15-Day Joining</p>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 group-hover:text-blue-700 transition-colors">
                Freshers & Entry-Level Talent
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
                Pre-screened graduates with thorough training in Linux, AWS cloud administration, Docker, CI/CD, and real-time monitoring infrastructure.
              </p>

              {/* Best for list */}
              <div className="mt-6 pt-6 border-t border-sky-100">
                <p className="text-xs font-bold uppercase tracking-wider text-blue-900 mb-3 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                  <span>Best for Roles:</span>
                </p>
                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    'Cloud Support',
                    'Monitoring',
                    'L1 Support',
                    'NOC Engineer',
                    'Junior DevOps',
                    'Linux Support'
                  ].map((role) => (
                    <div 
                      key={role} 
                      className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white/90 border border-sky-200/70 rounded-xl px-3 py-2 shadow-xs group-hover:border-sky-300 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0"></span>
                      <span>{role}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills preview tags */}
              <div className="mt-5 flex flex-wrap gap-1.5">
                {['Linux CLI', 'AWS (EC2/S3/VPC)', 'Docker', 'Prometheus', 'Grafana', 'Git CI/CD', 'Bash'].map((s) => (
                  <span key={s} className="text-[11px] bg-sky-50 text-sky-800 font-medium px-2.5 py-1 rounded-md border border-sky-100">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 pt-6 border-t border-sky-100">
              <Link
                href="/freshers"
                className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-blue-700 to-sky-600 hover:from-blue-800 hover:to-sky-700 text-white font-bold text-sm shadow-md shadow-sky-600/20 hover:shadow-lg transition-all flex items-center justify-center gap-2 group-hover:translate-y-[-1px]"
              >
                <span>View Freshers Pool</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Card 2 — Experienced Professionals */}
          <div className="relative group bg-gradient-to-b from-blue-50/70 via-white to-sky-50/30 rounded-3xl border border-blue-200/90 hover:border-blue-500 p-8 sm:p-10 shadow-lg shadow-blue-500/5 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col justify-between">
            {/* Top Tag & Badge */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-800 to-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-600/20 group-hover:scale-105 transition-transform">
                  <Users className="w-7 h-7" />
                </div>
                <div className="text-right">
                  <span className="inline-block bg-blue-100 text-blue-900 text-xs font-extrabold px-3 py-1 rounded-full border border-blue-200">
                    2–5+ Years Exp
                  </span>
                  <p className="text-[11px] text-slate-500 mt-1 font-medium">Screened & Project Verified</p>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 group-hover:text-blue-700 transition-colors">
                Experienced Professionals
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
                Skilled practitioners with hands-on experience in production environments, cloud migrations, Terraform IaC, Kubernetes clusters, and 24x7 incident response.
              </p>

              {/* Best for list */}
              <div className="mt-6 pt-6 border-t border-blue-100">
                <p className="text-xs font-bold uppercase tracking-wider text-blue-900 mb-3 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                  <span>Best for Roles:</span>
                </p>
                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    'DevOps Engineer',
                    'Cloud Engineer',
                    'Platform Engineer',
                    'SRE',
                    'Infrastructure Engineer',
                    'FDE / Production Support'
                  ].map((role) => (
                    <div 
                      key={role} 
                      className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white/90 border border-blue-200/70 rounded-xl px-3 py-2 shadow-xs group-hover:border-blue-300 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0"></span>
                      <span>{role}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills preview tags */}
              <div className="mt-5 flex flex-wrap gap-1.5">
                {['AWS / Azure', 'Terraform IaC', 'Kubernetes (EKS)', 'CI/CD Pipelines', 'SRE Practices', 'Linux Admin', 'Python/Bash'].map((s) => (
                  <span key={s} className="text-[11px] bg-blue-50 text-blue-800 font-medium px-2.5 py-1 rounded-md border border-blue-100">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 pt-6 border-t border-blue-100">
              <Link
                href="/experienced"
                className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-blue-800 to-blue-600 hover:from-blue-900 hover:to-blue-700 text-white font-bold text-sm shadow-md shadow-blue-700/20 hover:shadow-lg transition-all flex items-center justify-center gap-2 group-hover:translate-y-[-1px]"
              >
                <span>View Experienced Talent</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
