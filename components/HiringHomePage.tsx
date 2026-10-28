'use client';

import Link from 'next/link';
import {
  ArrowRight,
  BadgeCheck,
  Cloud,
  Code2,
  Phone,
  ShieldCheck,
  Terminal,
  Users
} from 'lucide-react';
import EmployerEnquiryForm from '@/components/EmployerEnquiryForm';
import FaqAccordion from '@/components/FaqAccordion';
import Footer from '@/components/Footer';
import HiringHeroIllustration from '@/components/HiringHeroIllustration';
import Navbar from '@/components/Navbar';
import SampleCandidateCard from '@/components/SampleCandidateCard';
import SeoStructuredData from '@/components/SeoStructuredData';
import { experiencedCandidates, freshersCandidates } from '@/data/candidates';
import { employerFaqs, portalInfo } from '@/data/portalData';

const roleLinks = [
  { title: 'Freshers & entry-level', href: '/freshers', detail: 'Start with early-career profiles' },
  { title: 'Experienced professionals', href: '/experienced', detail: 'Explore experienced talent' },
  { title: 'Cloud support', href: '/cloud-support-candidates', detail: 'Cloud operations and support' },
  { title: 'L1 support', href: '/L1-support-candidates', detail: 'Frontline support roles' },
  { title: 'L2 support', href: '/L2-support-candidates', detail: 'Application and production support' },
  { title: 'DevOps engineers', href: '/devops-engineer-candidates', detail: 'DevOps and platform profiles' }
];

const previewCandidates = [
  ...freshersCandidates.slice(0, 3),
  ...experiencedCandidates.slice(0, 3)
];

export default function HiringHomePage() {
  const formRole = 'DevOps / Cloud Engineer';

  const scrollToForm = () => {
    document.getElementById('enquiry-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SeoStructuredData
        pageTitle="Hire DevOps & Cloud Talent | DevOps Institute Mumbai"
        pageDescription="Explore DevOps and Cloud candidate profiles from DevOps Institute Mumbai. Discuss role requirements and current availability with our placement desk."
        canonicalUrl="https://devopsmumbai.com/"
        roleName="DevOps & Cloud Talent"
        faqs={employerFaqs}
        breadcrumbs={[
          { name: 'Home', item: 'https://devopsmumbai.com/' },
          { name: 'Hire From Us', item: 'https://devopsmumbai.com/hire-from-us' }
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
              <h1 className="text-[2.8rem] font-semibold leading-[1.14] tracking-[-0.045em] text-[#20262f] sm:text-6xl lg:text-[4.15rem]">
                Hire Pre-Screened
                <br />
                DevOps &amp; Cloud
                <br />
                Professionals at
                <br />
                <span className="relative inline-block text-blue-700">
                  No Placement Fee
                  <svg aria-hidden="true" viewBox="0 0 340 18" preserveAspectRatio="none" className="absolute -bottom-2 left-0 h-3 w-full text-amber-500">
                    <path d="M2 9 C18 1, 25 17, 42 8 S68 2, 84 9 S110 17, 126 8 S152 2, 168 9 S194 17, 210 8 S236 2, 252 9 S278 17, 294 8 S320 2, 338 9" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
              <p className="mt-8 max-w-[540px] text-base leading-[1.65] text-slate-600 sm:text-lg">
                Explore role-relevant skills, experience and project work. Share your requirements and our placement desk will discuss fit and confirm current availability.
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
                  className="inline-flex min-h-[58px] items-center justify-center rounded-lg bg-[#1673ed] px-6 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700"
                >
                  Start Hiring Now
                </button>
                <a href={portalInfo.phoneTel} className="inline-flex min-h-[58px] items-center gap-3 rounded-lg border border-blue-200 bg-white px-4 text-slate-900 shadow-sm transition hover:border-blue-400 hover:shadow-md">
                  <Phone className="h-5 w-5 text-blue-700" />
                  <span className="text-base font-bold tracking-wide text-blue-800">{portalInfo.phone}</span>
                </a>
              </div>

              <a href="#candidate-profiles" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-blue-800">
                <span className="flex -space-x-2.5">
                  {previewCandidates.slice(0, 3).map((candidate, index) => (
                    <span key={candidate.id} className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#f1f6fc] text-[9px] font-bold text-white ${['bg-slate-500', 'bg-slate-700', 'bg-blue-800'][index]}`}>
                      {candidate.avatarInitial}
                    </span>
                  ))}
                </span>
                <span>Explore candidate profiles</span>
              </a>
            </div>

            <HiringHeroIllustration />
          </div>
        </section>

        <section aria-label="Employer hiring information" className="bg-[#f1f6fc] py-8 sm:py-10">
          <div className="mx-auto max-w-[1490px] px-6 text-center sm:px-10 lg:px-12">
            <p className="text-xl font-semibold tracking-tight text-slate-800 sm:text-2xl">A transparent, employer-led hiring process.</p>
            <p className="mt-2 text-sm text-slate-500">Browse candidate profiles and discuss role fit directly with our team.</p>
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
              <div key={label} className={`px-4 py-4 text-center sm:px-6 lg:py-2 ${index < 3 ? 'border-r border-slate-200' : ''} ${index < 2 ? 'border-b border-slate-200 lg:border-b-0' : ''}`}>
                <p className="text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">{value}</p>
                <p className="mt-1 text-xs text-slate-500 sm:text-sm">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="candidate-profiles" className="scroll-mt-20 border-y border-slate-200/70 bg-[#f7f9fc] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-blue-700">Candidate profiles</p>
                <h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-[2.5rem]">Meet the talent</h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
                  A first look at candidate experience, skills and project work. Availability and fit are confirmed with the placement desk.
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <Link href="/freshers" className="rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-xs font-semibold text-slate-700 shadow-sm transition hover:border-blue-300 hover:text-blue-800">Freshers</Link>
                <Link href="/experienced" className="rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-xs font-semibold text-slate-700 shadow-sm transition hover:border-blue-300 hover:text-blue-800">Experienced</Link>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {previewCandidates.map((candidate) => (
                <SampleCandidateCard
                  key={candidate.id}
                  candidate={candidate}
                />
              ))}
            </div>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button onClick={() => scrollToForm()} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-blue-700 px-6 text-sm font-bold text-white hover:bg-blue-800">
                Ask about current profiles <ArrowRight className="h-4 w-4" />
              </button>
              <a href={portalInfo.phoneTel} className="inline-flex min-h-12 items-center gap-2 text-sm font-bold text-slate-700 hover:text-blue-800">
                <Phone className="h-4 w-4 text-blue-700" /> Or call {portalInfo.phone}
              </a>
            </div>
          </div>
        </section>

        <section id="roles-supported" className="border-t border-slate-200 bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-blue-700">Explore by role</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-4xl">Find the right talent pool.</h2>
              </div>
              <p className="max-w-md text-sm leading-6 text-slate-600">Browse relevant candidate profiles, then ask our placement desk about role fit and availability.</p>
            </div>
            <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {roleLinks.map((role, index) => (
                <Link key={role.href} href={role.href} className="group flex min-h-24 items-center justify-between gap-5 rounded-xl border border-slate-200 bg-white px-5 py-4 transition hover:border-blue-200 hover:bg-[#f9fbff]">
                  <div className="flex items-center gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-xs font-bold text-blue-800">0{index + 1}</span>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900 group-hover:text-blue-800">{role.title}</h3>
                      <p className="mt-1 text-xs text-slate-500">{role.detail}</p>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 shrink-0 text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-700" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="why-dim" className="bg-[#f6f8fb] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-blue-700">Why hire through DIM</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-4xl">A straightforward way to meet talent.</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">Review the information available, ask the team what matters to your role, and make your own hiring decision.</p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Cloud, title: 'Skills for cloud roles', copy: 'Explore profiles covering cloud infrastructure, Linux and operations.' },
                { icon: Code2, title: 'Project context', copy: 'Review practical projects and candidate-specific experience.' },
                { icon: Users, title: 'More than one pathway', copy: 'Browse entry-level and experienced profiles across role categories.' },
                { icon: ShieldCheck, title: 'Your process, your call', copy: 'Interview candidates using the evaluation process your team trusts.' }
              ].map(({ icon: Icon, title, copy }, index) => (
                <article key={title} className="relative min-h-[240px] overflow-hidden rounded-xl border border-slate-200 bg-white p-6">
                  <span className="absolute right-5 top-3 text-6xl font-semibold tracking-tighter text-slate-100">0{index + 1}</span>
                  <span className="relative flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-700"><Icon className="h-5 w-5" /></span>
                  <h3 className="relative mt-7 text-lg font-semibold text-slate-900">{title}</h3>
                  <p className="relative mt-2 text-sm leading-6 text-slate-600">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="bg-white py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-blue-700">How hiring works</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-4xl">Start with a conversation.</h2>
              <p className="mt-4 max-w-md text-sm leading-6 text-slate-600 sm:text-base">No commitment is needed to ask a question. Tell us what you need and we can discuss relevant candidate profiles and current availability.</p>
              <a href={portalInfo.phoneTel} className="mt-7 inline-flex items-center gap-2 rounded-lg bg-blue-700 px-5 py-3 text-sm font-bold text-white hover:bg-blue-800"><Phone className="h-4 w-4" /> Call the placement desk</a>
            </div>
            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {[
                ['01', 'Share your requirement', 'Tell us the role, experience, location and skills you are hiring for.'],
                ['02', 'Review relevant profiles', 'Discuss profile details and availability with the placement desk.'],
                ['03', 'Interview and decide', 'Your team evaluates candidates and makes the final hiring decision.']
              ].map(([step, title, copy]) => (
                <div key={step} className="grid gap-3 py-6 sm:grid-cols-[3rem_1fr] sm:gap-5">
                  <span className="text-sm font-bold text-blue-700">{step}</span>
                  <div><h3 className="font-semibold text-slate-900">{title}</h3><p className="mt-1.5 text-sm leading-6 text-slate-600">{copy}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f6f8fb] py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:px-10">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-blue-700">Training environment</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-4xl">Practical learning at DIM.</h2>
              <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">Candidates work through DevOps and cloud learning paths. Ask about the projects and hands-on experience relevant to an individual profile.</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {['Linux', 'AWS & Cloud', 'Containers', 'CI/CD', 'Monitoring'].map((skill) => (
                  <span key={skill} className="rounded-full border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700">{skill}</span>
                ))}
              </div>
              <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(portalInfo.address)}`} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900">
                Visit DIM in Thane <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <img src="/campus/campus-branded-1.jpg" alt="DevOps Institute Mumbai training space" className="h-52 w-full rounded-xl object-cover sm:h-64" />
              <img src="/campus/campus-branded-2.jpg" alt="Students working in a practical lab" className="mt-8 h-52 w-full rounded-xl object-cover sm:h-64" />
              <img src="/campus/campus-team.webp" alt="DevOps Institute students and mentors" className="-mt-5 h-40 w-full rounded-xl object-cover sm:h-48" />
              <div className="flex min-h-40 flex-col justify-between rounded-xl bg-slate-950 p-5 text-white sm:min-h-48 sm:p-6">
                <Terminal className="h-5 w-5 text-sky-300" />
                <div><p className="text-xs font-bold uppercase tracking-[0.16em] text-sky-200">Talk with us</p><p className="mt-2 text-lg font-semibold">Ask about projects, skills and availability.</p></div>
              </div>
            </div>
          </div>
        </section>

        <EmployerEnquiryForm
          key={formRole}
          defaultRole={formRole}
        />

        <FaqAccordion />
      </main>

      <Footer />
    </div>
  );
}
