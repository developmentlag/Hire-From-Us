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
import { freshersCandidates, Candidate } from '@/data/candidates';
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
  Headphones, 
  AlertTriangle, 
  ChevronDown,
  Sparkles,
  PhoneCall,
  Star,
  FileCheck
} from 'lucide-react';

export default function L1SupportCandidatesPage() {
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

  const l1Candidates = freshersCandidates.filter(c => 
    c.bestFit.includes('Support') || c.bestFit.includes('Monitoring') || c.role.includes('Support')
  );

  const l1Faqs = [
    {
      question: "Are DIM L1 support candidates ready for 24x7 rotational shifts and night rosters?",
      answer: "Yes. Our L1 support candidates are explicitly trained and prepared for 24x7 rotational shifts (Day, Evening, Night, Weekend) with strict SLA tracking."
    },
    {
      question: "What hands-on Linux troubleshooting skills do your L1 candidates possess?",
      answer: "Candidates are tested on live terminal servers: inspecting process saturation (top, htop), checking network sockets (netstat, ss, curl, ping), analyzing systemd services (systemctl, journalctl), and diagnosing disk space bottlenecks (df -h, du)."
    },
    {
      question: "Which monitoring tools and ticketing workflows are they trained on?",
      answer: "They have hands-on lab experience with Prometheus, Grafana dashboards, CloudWatch alerts, Jira Service Management, and incident escalation protocols."
    },
    {
      question: "How fast can we onboard L1 Support Engineers from DIM?",
      answer: "Profiles can be reviewed within 24 hours, interviews conducted the same day, and candidates can join immediately (within 1 to 7 days)."
    }
  ];

  const l1CoreSkills = [
    { title: "Linux CLI Troubleshooting", desc: "Process inspection, log grep, service restarts, disk space cleanup, file permissions" },
    { title: "24x7 Incident Triage", desc: "First-touch ticket response, severity classification, SLA adherence, escalation matrices" },
    { title: "Cloud Monitoring", desc: "Prometheus alerts, Grafana telemetry, AWS CloudWatch alarms, synthetic uptime checks" },
    { title: "Basic Networking & Web", desc: "DNS resolution, HTTP status codes (4xx/5xx), ping/telnet diagnostics, SSL expiry" },
    { title: "Database & SQL Basics", desc: "SELECT queries, log trace extraction, schema lookup, database connectivity checks" },
    { title: "Client & RCA Communication", desc: "Drafting clear root cause summaries, stakeholder updates, and runbook documentation" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Rich Results & SEO Schema */}
      <SeoStructuredData
        pageTitle="Hire L1 Support Candidates in Mumbai & Remote | 24x7 Cloud & Linux Support Engineers"
        pageDescription="Hire pre-screened L1 Support Engineers trained in Linux troubleshooting, AWS cloud monitoring, ticketing, and 24x7 incident triage. 4.7★ rated DevOps Institute Mumbai."
        canonicalUrl="https://devopsmumbai.com/L1-support-candidates"
        roleName="L1 Support & Cloud Operations Engineers"
        faqs={l1Faqs}
        breadcrumbs={[
          { name: "Home", item: "https://devopsmumbai.com/" },
          { name: "Candidate Roles", item: "https://devopsmumbai.com/#roles-supported" },
          { name: "L1 Support Candidates", item: "https://devopsmumbai.com/L1-support-candidates" }
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
              <span className="text-blue-700 font-bold">L1 Support Candidates</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 text-left">
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-100/80 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-900 mb-4 shadow-xs">
                  <Headphones className="h-4 w-4 text-blue-700" />
                  <span>24x7 Cloud &amp; Infra Support • 45+ Candidates Ready</span>
                </div>

                <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                  Hire <span className="text-blue-700">L1 Support Candidates</span> &amp; Cloud Operations Talent
                </h1>

                <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
                  Pre-screened candidates trained in 24x7 incident triage, Linux command line diagnostics, AWS cloud monitoring, ticketing systems, and rapid customer escalation.
                </p>

                {/* Trust Chips */}
                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-xl">
                  {[
                    "24x7 Rotational Shift Ready",
                    "Hands-on Linux CLI Diagnostics",
                    "Prometheus & Grafana Alerting",
                    "Immediate / 7-Day Onboarding"
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
                    <span>Request L1 Profiles</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => setIsScheduleModalOpen(true)}
                    className="py-3.5 px-5 rounded-xl bg-white hover:bg-blue-50 text-blue-900 font-bold text-sm sm:text-base border border-slate-300 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <PhoneCall className="w-4 h-4 text-blue-600" />
                    <span>Schedule 15-Min Sync</span>
                  </button>
                </div>
              </div>

              {/* Right Hero Card: Snapshot */}
              <div className="lg:col-span-5 relative">
                <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-8 space-y-5">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <div>
                      <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Cohort Snapshot</p>
                      <h3 className="text-xl font-extrabold text-slate-900 mt-0.5">L1 Infrastructure Support</h3>
                    </div>
                    <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold px-2.5 py-1 rounded-full">
                      Immediate
                    </span>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-slate-500 font-medium">Candidates Available:</span>
                      <strong className="text-blue-900 font-bold">45+ Evaluated Engineers</strong>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-slate-500 font-medium">Work Arrangement:</span>
                      <strong className="text-slate-800 font-bold">Mumbai / Hybrid / Remote</strong>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-slate-500 font-medium">Shift Flexibility:</span>
                      <strong className="text-slate-800 font-bold">24x7 Rotational (Day/Night)</strong>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-slate-500 font-medium">Typical Joining Time:</span>
                      <strong className="text-emerald-700 font-bold">0 – 7 Days</strong>
                    </div>
                  </div>

                  <button
                    onClick={scrollToForm}
                    className="w-full py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm cursor-pointer"
                  >
                    <span>Get L1 Candidate Resumes Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PARTNERS TICKER WITH REAL LOGOS */}
        <PartnersTicker />

        {/* CORE L1 SKILLS & RESPONSIBILITIES */}
        <section className="py-20 bg-white border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Job-Ready Checklist
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
                What Our L1 Support Candidates Can Do From Day 1
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                Tested in hands-on simulation labs with real server crashes, synthetic alerts, and simulated production ticket escalation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {l1CoreSkills.map((skill, idx) => (
                <div 
                  key={idx}
                  className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 hover:border-blue-400 hover:bg-white transition-all shadow-xs group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold text-sm mb-4 group-hover:bg-blue-700 group-hover:text-white transition-colors">
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

        {/* FEATURED L1 CANDIDATES */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-800 bg-sky-100 px-3 py-1 rounded-full border border-sky-200">
                Curated Profiles
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
                Sample L1 Support Candidates Ready For Interviews
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                Click any candidate card to review their practical lab capstones and schedule an interview.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {l1Candidates.map((candidate) => (
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

        {/* ROLE FAQS ACCORDION */}
        <section className="py-20 bg-white border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Hiring FAQs
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
                Frequently Asked Questions About L1 Hiring
              </h2>
            </div>

            <div className="space-y-4">
              {l1Faqs.map((faq, idx) => {
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

        {/* EMPLOYER FORM PREFILLED FOR L1 */}
        <EmployerEnquiryForm
          defaultRole="L1 Infrastructure Support"
          defaultExperience="Fresher / Entry-Level (0-1 yr)"
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
        title="Schedule L1 Support Hiring Call"
      />
    </div>
  );
}
