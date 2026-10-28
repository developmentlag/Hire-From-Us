'use client';

import { useState } from 'react';
import {
  ArrowRight,
  BadgeCheck,
  ChevronDown,
  Phone,
} from 'lucide-react';
import EmployerEnquiryForm from '@/components/EmployerEnquiryForm';
import Footer from '@/components/Footer';
import HiringHeroIllustration from '@/components/HiringHeroIllustration';
import Navbar from '@/components/Navbar';
import SeoStructuredData from '@/components/SeoStructuredData';
import { portalInfo } from '@/data/portalData';

export interface RoleDirectoryConfig {
  path: string;
  label: string;
  title: string;
  description: string;
  roleName: string;
  defaultRole: string;
  defaultExperience: string;
  skills: string[];
  faqs: Array<{ question: string; answer: string }>;
}

export default function RoleDirectoryPage({ config }: { config: RoleDirectoryConfig }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const scrollToForm = () => {
    document.getElementById('enquiry-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SeoStructuredData
        pageTitle={`Hire ${config.roleName} | DevOps Institute Mumbai`}
        pageDescription={config.description}
        canonicalUrl={`https://devopsmumbai.com${config.path}`}
        roleName={config.roleName}
        faqs={config.faqs}
        breadcrumbs={[
          { name: 'Home', item: 'https://devopsmumbai.com/' },
          { name: config.label, item: `https://devopsmumbai.com${config.path}` }
        ]}
      />
      <Navbar onRequestCandidates={() => scrollToForm()} onShareJD={() => scrollToForm()} />

      <main>
        <section className="relative isolate overflow-hidden bg-[#f1f6fc]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_48%,rgba(255,255,255,0.9),transparent_53%),linear-gradient(115deg,#f6f9fe_0%,#edf4fc_55%,#f6f7f7_100%)]" />
          <div className="pointer-events-none absolute -left-20 top-1/4 h-40 w-40 rounded-full bg-rose-100/35 blur-3xl" />
          <div className="pointer-events-none absolute right-0 top-1/4 h-64 w-64 rounded-full bg-sky-100/40 blur-3xl" />
          <div className="relative mx-auto grid max-w-[1490px] items-center gap-8 px-6 pb-20 pt-24 sm:px-10 sm:pb-24 sm:pt-28 lg:min-h-[770px] lg:grid-cols-[0.92fr_1.08fr] lg:gap-10 lg:px-12 lg:pb-28 lg:pt-36">
            <div className="relative z-10 max-w-[590px]">
              <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.18em] text-blue-700">
                Hire from DIM <span className="px-1 text-slate-400">/</span> {config.label}
              </p>
              <h1 className="max-w-[13ch] text-[2.8rem] font-semibold leading-[1.14] tracking-[-0.045em] text-[#20262f] sm:text-6xl lg:text-[4.15rem]">
                {config.title}
                <br />
                <span className="relative inline-block text-blue-700">
                  No Placement Fee
                  <svg aria-hidden="true" viewBox="0 0 340 18" preserveAspectRatio="none" className="absolute -bottom-2 left-0 h-3 w-full text-amber-500">
                    <path d="M2 9 C18 1, 25 17, 42 8 S68 2, 84 9 S110 17, 126 8 S152 2, 168 9 S194 17, 210 8 S236 2, 252 9 S278 17, 294 8 S320 2, 338 9" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
              <p className="mt-7 max-w-[540px] text-base leading-[1.65] text-slate-600 sm:text-lg">
                {config.description}
              </p>

              <div className="mt-6 flex max-w-[540px] items-start gap-3 border-l-[3px] border-blue-600 pl-4">
                <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
                <div>
                  <p className="text-sm font-bold text-slate-900 sm:text-base">Pre-screened for role-relevant skills</p>
                  <p className="mt-1 text-sm leading-5 text-slate-600">Review experience and project details. Your team makes the final hiring decision.</p>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => scrollToForm()}
                  className="inline-flex min-h-[58px] items-center justify-center gap-2 rounded-lg bg-[#1673ed] px-6 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700"
                >
                  Start Hiring Now
                  <ArrowRight className="h-4 w-4" />
                </button>
                <a href={portalInfo.phoneTel} className="inline-flex min-h-[58px] items-center gap-3 rounded-lg border border-blue-200 bg-white px-4 text-slate-900 shadow-sm transition hover:border-blue-400 hover:shadow-md">
                  <Phone className="h-5 w-5 text-blue-700" />
                  <span className="text-base font-bold tracking-wide text-blue-800">{portalInfo.phone}</span>
                </a>
              </div>
            </div>

            <HiringHeroIllustration />
          </div>
        </section>

        <section aria-label="Employer hiring information" className="bg-[#f1f6fc] py-8 sm:py-10">
          <div className="mx-auto max-w-[1490px] px-6 text-center sm:px-10 lg:px-12">
            <p className="text-xl font-semibold tracking-tight text-slate-800 sm:text-2xl">Hiring {config.label} in Mumbai and nearby areas.</p>
            <p className="mt-2 text-sm text-slate-500">Discuss relevant profiles, role fit and current availability directly with our placement desk.</p>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto grid max-w-7xl grid-cols-2 px-5 py-7 sm:px-8 lg:grid-cols-4 lg:px-10">
            {[
              ['₹0', 'employer placement fee'],
              ['Pre-screened', 'skills and project details reviewed'],
              ['Role-focused', 'profiles discussed against your brief'],
              ['Your decision', 'you interview and select']
            ].map(([value, label], index) => (
              <div
                key={label}
                className={`px-4 py-4 text-center sm:px-6 lg:py-2 ${
                  index < 3 ? 'border-r border-slate-200' : ''
                } ${index < 2 ? 'border-b border-slate-200 lg:border-b-0' : ''}`}
              >
                <p className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">{value}</p>
                <p className="mt-1 text-xs text-slate-500 sm:text-sm">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#f6f8fb] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="max-w-2xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-blue-700">Role-relevant skills</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-4xl">Skills and experience to look for in {config.label}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
                Skills differ from person to person. Use these areas as a starting point, then discuss role fit with the placement desk.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {config.skills.map((skill, index) => (
                <div key={skill} className="flex min-h-24 items-start gap-4 rounded-xl border border-slate-200 bg-white p-5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-sm font-bold text-blue-800">
                    0{index + 1}
                  </span>
                  <p className="pt-1.5 text-sm font-semibold leading-6 text-slate-800">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-blue-700">Simple hiring process</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-4xl">Your team stays in control.</h2>
              <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">
                No placement fee. No hiring decision made for you. Talk directly with DIM about your role and make your own assessment.
              </p>
              <a href={portalInfo.phoneTel} className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900">
                <Phone className="h-4 w-4" /> Call {portalInfo.phone}
              </a>
            </div>

            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {[
                ['01', 'Tell us about the role', 'Share your job description, experience range and location.'],
                ['02', 'Review relevant profiles', 'Discuss candidate details and current availability with the placement desk.'],
                ['03', 'Interview and decide', 'Your hiring team assesses candidates and makes the final decision.']
              ].map(([step, title, description]) => (
                <div key={step} className="grid gap-3 py-6 sm:grid-cols-[3.5rem_1fr] sm:gap-5">
                  <span className="text-sm font-bold text-blue-700">{step}</span>
                  <div>
                    <h3 className="font-semibold text-slate-900">{title}</h3>
                    <p className="mt-1.5 text-sm leading-6 text-slate-600">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <EmployerEnquiryForm
          key={config.defaultRole}
          defaultRole={config.defaultRole}
          defaultExperience={config.defaultExperience}
        />

        <section className="bg-[#f6f8fb] py-20 sm:py-24">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <div className="mb-8 text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-blue-700">Hiring questions</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-4xl">FAQs About Hiring {config.label} from DIM</h2>
            </div>
            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {config.faqs.map((faq, index) => (
                <div key={faq.question} className="py-1">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    aria-expanded={openFaq === index}
                    aria-controls={`role-faq-answer-${index}`}
                    className="flex w-full items-center justify-between gap-5 py-5 text-left"
                  >
                    <span className="text-sm font-semibold text-slate-900 sm:text-base">{faq.question}</span>
                    <ChevronDown className={`h-4 w-4 shrink-0 text-slate-500 transition ${openFaq === index ? 'rotate-180' : ''}`} />
                  </button>
                  <p id={`role-faq-answer-${index}`} hidden={openFaq !== index} className="max-w-3xl pb-5 text-sm leading-6 text-slate-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
