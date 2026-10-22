'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EmployerEnquiryForm from '@/components/EmployerEnquiryForm';
import SampleCandidateCard from '@/components/SampleCandidateCard';
import CandidateProfileModal from '@/components/CandidateProfileModal';
import ScheduleDiscussionModal from '@/components/ScheduleDiscussionModal';
import SeoStructuredData from '@/components/SeoStructuredData';
import FloatingActions from '@/components/FloatingActions';
import PartnersTicker from '@/components/PartnersTicker';
import { experiencedCandidates, Candidate } from '@/data/candidates';
import { portalInfo } from '@/data/portalData';
import { 
  Server, 
  Terminal, 
  Activity, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Users, 
  ShieldCheck, 
  MapPin, 
  ChevronDown,
  PhoneCall,
  Flame,
  Database,
  Cpu
} from 'lucide-react';

export default function L2SupportCandidatesPage() {
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const scrollToForm = () => {
    const el = document.getElementById('enquiry-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const l2Candidates = experiencedCandidates.filter(c => 
    c.bestFit.includes('Support') || c.role.includes('Support') || c.experience.includes('Years')
  );

  const l2Faqs = [
    {
      question: "What differentiates DIM L2 Support Engineers from entry-level L1 engineers?",
      answer: "L2 support candidates possess 1.5 to 4+ years of hands-on experience handling deep application crashes, DB query deadlocks, kernel-level Linux resource starvation, and complex AWS/Azure infrastructure issues that L1 engineers escalate."
    },
    {
      question: "Can they analyze database queries and backend application error logs?",
      answer: "Yes. They are proficient in MySQL, PostgreSQL, log aggregation (ELK, CloudWatch Insights), inspecting thread dumps, and optimizing slow SQL queries during live outages."
    },
    {
      question: "Do they have experience writing Root Cause Analysis (RCA) reports?",
      answer: "Yes, our L2 candidates are trained in formal incident management, writing comprehensive RCAs for executive stakeholders, and creating automated preventative runbooks."
    },
    {
      question: "What is their typical notice period and work location preference?",
      answer: "Notice periods range from immediate joining to 15–30 days. Candidates are available for Mumbai, Navi Mumbai, or pan-India remote teams."
    }
  ];

  const l2CoreSkills = [
    { title: "Deep Linux Kernel & OS Diagnostics", desc: "Memory leaks, zombie processes, socket exhaustion, strace, lsof, tcpdump packet analysis" },
    { title: "Database Troubleshooting & Queries", desc: "MySQL/PostgreSQL deadlock diagnosis, slow query log analysis, connection pool tuning" },
    { title: "AWS Cloud Infrastructure Triage", desc: "ALB health check errors, VPC routing, security group rules, EC2 auto-recovery, S3 bucket policies" },
    { title: "Formal RCA & Incident Leadership", desc: "Leading post-incident war rooms, 5-Whys methodology, writing detailed RCAs and runbooks" },
    { title: "Monitoring & Observability", desc: "Custom Grafana dashboard creation, Prometheus PromQL alert queries, ELK log parsing" },
    { title: "Automation & Scripting", desc: "Bash shell scripting, Python utilities, automated self-healing scripts for hung services" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      <SeoStructuredData
        pageTitle="Hire L2 Support Candidates in Mumbai & Remote | Tier-2 Cloud & Application Engineers"
        pageDescription="Hire pre-screened L2 Support Engineers with 2–5 years experience in deep Linux troubleshooting, DB query optimization, and AWS production incident triage. DIM Mumbai."
        canonicalUrl="https://devopsmumbai.com/L2-support-candidates"
        roleName="L2 Support & Production Engineers"
        faqs={l2Faqs}
        breadcrumbs={[
          { name: "Home", item: "https://devopsmumbai.com/" },
          { name: "Candidate Roles", item: "https://devopsmumbai.com/#roles-supported" },
          { name: "L2 Support Candidates", item: "https://devopsmumbai.com/L2-support-candidates" }
        ]}
      />

      <Navbar 
        onRequestCandidates={scrollToForm}
        onShareJD={scrollToForm}
      />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden pt-10 pb-16 md:pt-14 md:pb-24 bg-gradient-to-b from-blue-50/90 via-sky-50/40 to-white">
          <div className="hero-glow top-[-60px] left-1/2 -translate-x-1/2"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6">
              <Link href="/" className="hover:text-blue-700">Hire From Us</Link>
              <span>/</span>
              <span className="text-blue-700 font-bold">L2 Support Candidates</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 text-left">
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-300 bg-blue-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-950 mb-4 shadow-xs">
                  <Terminal className="h-4 w-4 text-blue-700" />
                  <span>Tier-2 Application &amp; Infra Support • 35+ Lateral Engineers</span>
                </div>

                <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                  Hire <span className="text-blue-700">L2 Support Candidates</span> &amp; Production Troubleshooting Talent
                </h1>

                <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
                  Experienced engineers with 2–5 years in high-availability production support, deep Linux debugging, database query triage, and automated incident resolution.
                </p>

                {/* Trust Chips */}
                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-xl">
                  {[
                    "Deep Linux Kernel & TCP/IP Debugging",
                    "Database Deadlock & SQL Triage",
                    "Formal RCA & Post-Mortem Delivery",
                    "Notice: Immediate to 15–30 Days"
                  ].map((chip) => (
                    <li key={chip} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>{chip}</span>
                    </li>
                  ))}
                </ul>

                {/* CTAs */}
                <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 max-w-lg">
                  <button
                    onClick={scrollToForm}
                    className="flex-1 py-3.5 px-6 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm sm:text-base shadow-md shadow-blue-700/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Request L2 Profiles</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => setIsScheduleModalOpen(true)}
                    className="py-3.5 px-5 rounded-xl bg-white hover:bg-blue-50 text-blue-900 font-bold text-sm sm:text-base border border-slate-300 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <PhoneCall className="w-4 h-4 text-blue-600" />
                    <span>Schedule Technical Sync</span>
                  </button>
                </div>
              </div>

              {/* Right Hero Card: Snapshot */}
              <div className="lg:col-span-5 relative">
                <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-8 space-y-5">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <div>
                      <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Cohort Snapshot</p>
                      <h3 className="text-xl font-extrabold text-slate-900 mt-0.5">L2 / Production Support</h3>
                    </div>
                    <span className="bg-blue-100 text-blue-900 border border-blue-200 text-xs font-bold px-2.5 py-1 rounded-full">
                      2–5+ Yrs Exp
                    </span>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-slate-500 font-medium">Experienced L2 Available:</span>
                      <strong className="text-blue-900 font-bold">35+ Screened Leads</strong>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-slate-500 font-medium">Work Arrangement:</span>
                      <strong className="text-slate-800 font-bold">Mumbai / Hybrid / Remote</strong>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-slate-500 font-medium">Escalation Expertise:</span>
                      <strong className="text-slate-800 font-bold">Tier-2 &amp; Tier-3 RCA Lead</strong>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-slate-500 font-medium">Notice Period:</span>
                      <strong className="text-emerald-700 font-bold">Immediate to 15 Days</strong>
                    </div>
                  </div>

                  <button
                    onClick={scrollToForm}
                    className="w-full py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm cursor-pointer"
                  >
                    <span>Get L2 Candidate Resumes Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PARTNERS TICKER */}
        <PartnersTicker />

        {/* CORE L2 SKILLS & RESPONSIBILITIES */}
        <section className="py-20 bg-white border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Advanced Production Competencies
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
                What Our L2 Support Candidates Deliver
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                Skilled practitioners ready to take ownership of complex production escalations, minimizing MTTR and preserving client SLAs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {l2CoreSkills.map((skill, idx) => (
                <div 
                  key={idx}
                  className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 hover:border-blue-500 hover:bg-white transition-all shadow-xs group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-sm mb-4 group-hover:bg-blue-700 group-hover:text-white transition-colors">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {skill.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {skill.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURED L2 CANDIDATES */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-800 bg-blue-100 px-3 py-1 rounded-full border border-blue-200">
                Experienced Profiles
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
                Sample L2 Support Candidates Ready For Interviews
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                Profiles with proven track records in high-throughput production support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {l2Candidates.map((candidate) => (
                <SampleCandidateCard
                  key={candidate.id}
                  candidate={candidate}
                  onViewProfile={(c) => {
                    setSelectedCandidate(c);
                    setIsModalOpen(true);
                  }}
                  onRequestProfile={(c) => {
                    setSelectedCandidate(c);
                    scrollToForm();
                  }}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ROLE FAQS */}
        <section className="py-20 bg-white border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Hiring FAQs
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
                Frequently Asked Questions About L2 Hiring
              </h2>
            </div>

            <div className="space-y-4">
              {l2Faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className="rounded-2xl border border-slate-200 bg-slate-50/50 overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <span className="font-bold text-slate-900 text-sm sm:text-base">{faq.question}</span>
                      <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${isOpen ? 'rotate-180 text-blue-600' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 bg-white">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* EMPLOYER FORM PREFILLED FOR L2 */}
        <EmployerEnquiryForm
          defaultRole="FDE / Production Support"
          defaultExperience="2 - 3 Years Experience"
        />
      </main>

      <Footer />
      <FloatingActions />

      <CandidateProfileModal
        candidate={selectedCandidate}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onRequestInterview={(c) => {
          setSelectedCandidate(c);
          scrollToForm();
        }}
      />

      <ScheduleDiscussionModal
        isOpen={isScheduleModalOpen}
        onClose={() => setIsScheduleModalOpen(false)}
        title="Schedule L2 Support Hiring Call"
      />
    </div>
  );
}
