import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const skillAreas = [
  'Linux',
  'AWS & Cloud Infrastructure',
  'Docker & Containers',
  'Kubernetes',
  'Terraform',
  'CI/CD',
  'Monitoring & Observability',
];

export default function PartnersTicker() {
  return (
    <section className="py-14 bg-white border-y border-slate-200/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-extrabold uppercase tracking-widest text-blue-700 mb-2">
            DevOps &amp; Cloud Roles
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Relevant Skills, Clear Candidate Details
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            Share the role and stack you need. Candidate experience varies, so we confirm fit and availability profile by profile.
          </p>
        </div>

        <ul className="mt-8 flex flex-wrap justify-center gap-3">
          {skillAreas.map((skill) => (
            <li
              key={skill}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700"
            >
              <CheckCircle2 className="h-4 w-4 text-blue-600" aria-hidden="true" />
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
