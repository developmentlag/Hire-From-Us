import React from 'react';
import Link from 'next/link';
import { GraduationCap, Users, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function TalentCategoryCards() {
  return (
    <section className="relative bg-white py-20 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5 text-blue-600" />
            <span>Candidate Profiles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Choose Your Candidate Pool
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Explore entry-level and experienced profiles, then confirm role fit and availability directly with our placement desk.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {/* Card 1 — Freshers & Entry-Level Talent */}
          <div className="group relative flex flex-col justify-between rounded-3xl border border-slate-200 bg-gradient-to-br from-sky-50/70 via-white to-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl sm:p-9">
            {/* Top Tag & Badge */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-sky-400 text-white flex items-center justify-center shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div className="text-right">
                  <span className="inline-block bg-sky-100 text-sky-900 text-xs font-extrabold px-3 py-1 rounded-full border border-sky-200">
                    Freshers
                  </span>
                  <p className="text-[11px] text-slate-500 mt-1 font-medium">Ask about availability</p>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 group-hover:text-blue-700 transition-colors">
                Freshers & Entry-Level Talent
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
                Entry-level profiles with training in areas such as Linux, AWS, containers, CI/CD and monitoring. Skills and availability vary by candidate.
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
          <div className="group relative flex flex-col justify-between rounded-3xl border border-slate-200 bg-gradient-to-br from-blue-50/70 via-white to-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl sm:p-9">
            {/* Top Tag & Badge */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-800 to-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-600/20 group-hover:scale-105 transition-transform">
                  <Users className="w-7 h-7" />
                </div>
                <div className="text-right">
                  <span className="inline-block bg-blue-100 text-blue-900 text-xs font-extrabold px-3 py-1 rounded-full border border-blue-200">
                    Experienced
                  </span>
                  <p className="text-[11px] text-slate-500 mt-1 font-medium">Review each profile</p>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 group-hover:text-blue-700 transition-colors">
                Experienced Professionals
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
                Experienced profiles for DevOps, cloud, platform, SRE and infrastructure roles. Review each person&apos;s experience and project details before interviewing.
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
