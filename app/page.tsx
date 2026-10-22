'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TalentCategoryCards from '@/components/TalentCategoryCards';
import PartnersTicker from '@/components/PartnersTicker';
import ProcessTimeline from '@/components/ProcessTimeline';
import EmployerEnquiryForm from '@/components/EmployerEnquiryForm';
import SampleCandidateCard from '@/components/SampleCandidateCard';
import CandidateProfileModal from '@/components/CandidateProfileModal';
import ScheduleDiscussionModal from '@/components/ScheduleDiscussionModal';
import FaqAccordion from '@/components/FaqAccordion';
import FloatingActions from '@/components/FloatingActions';
import SeoStructuredData from '@/components/SeoStructuredData';
import { freshersCandidates, experiencedCandidates, Candidate } from '@/data/candidates';
import { whyHireFromDim, hiringRoles, hiringTestimonials, portalInfo, employerFaqs } from '@/data/portalData';
import { 
  ArrowRight, 
  Briefcase, 
  GraduationCap, 
  Users, 
  ShieldCheck, 
  CheckCircle2, 
  Terminal, 
  Layers, 
  Building2, 
  Zap, 
  Sparkles,
  ChevronRight,
  Phone,
  MessageCircle,
  Star,
  MapPin,
  Clock,
  Server
} from 'lucide-react';

export default function HireFromUsPage() {
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [activeRoleFilter, setActiveRoleFilter] = useState('all');
  const [selectedRoleForForm, setSelectedRoleForForm] = useState('Junior DevOps Engineer');

  const scrollToForm = (rolePreset?: string) => {
    if (rolePreset) {
      setSelectedRoleForForm(rolePreset);
    }
    const el = document.getElementById('enquiry-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewProfile = (candidate: Candidate) => {
    setSelectedCandidate(candidate);
    setIsModalOpen(true);
  };

  const handleRequestProfile = (candidate: Candidate) => {
    setSelectedCandidate(candidate);
    scrollToForm(candidate.role);
  };

  const allPreviewCandidates = [...freshersCandidates.slice(0, 3), ...experiencedCandidates.slice(0, 3)];

  const iconComponents: Record<string, React.ReactNode> = {
    GraduationCap: <GraduationCap className="w-6 h-6 text-blue-600" />,
    Terminal: <Terminal className="w-6 h-6 text-blue-600" />,
    Layers: <Layers className="w-6 h-6 text-blue-600" />,
    CheckCircle2: <CheckCircle2 className="w-6 h-6 text-blue-600" />,
    Building2: <Building2 className="w-6 h-6 text-blue-600" />,
    Zap: <Zap className="w-6 h-6 text-blue-600" />,
  };

  const heroChips = [
    "100% Practical Capstone Ready",
    "AWS, Azure & Linux Hands-on Labs",
    "24–48 Hours Profile Dispatch",
    "Zero Recruitment & Placement Fees"
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      <SeoStructuredData
        pageTitle="Hire Job-Ready DevOps & Cloud Talent | DIM — DevOps Institute Mumbai"
        pageDescription="Hire pre-screened freshers, Cloud Support Engineers, Monitoring Engineers, Junior DevOps, and experienced DevOps & Cloud professionals from DevOps Institute of Mumbai (DIM). 4.7★ rated on Google with 130+ reviews."
        canonicalUrl="https://devopsmumbai.com/"
        roleName="DevOps & Cloud Talent"
        faqs={employerFaqs}
        breadcrumbs={[
          { name: "Home", item: "https://devopsmumbai.com/" },
          { name: "Hire From Us", item: "https://devopsmumbai.com/hire-from-us" }
        ]}
      />
      <Navbar 
        onRequestCandidates={() => scrollToForm()} 
        onShareJD={() => scrollToForm()} 
      />

      <main className="flex-grow">
        {/* SECTION 1 — HERO BANNER */}
        <section className="relative overflow-hidden pt-10 pb-16 md:pt-14 md:pb-24 bg-gradient-to-b from-blue-50/80 via-white to-white">
          <div className="hero-glow top-[-80px] left-1/2 -translate-x-1/2"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
              {/* Left Column: Headlines & CTAs */}
              <div className="lg:col-span-7 text-left">
                {/* Location / Campus Pill matching DevOps-Institute-Website */}
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/90 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-700 mb-6 shadow-xs">
                  <MapPin className="h-3.5 w-3.5 text-blue-600" aria-hidden="true" />
                  <span>DevOps Institute Mumbai • Corporate Hiring Portal</span>
                </div>

                {/* Headline */}
                <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.14]">
                  Hire Job-Ready <br className="hidden sm:inline" />
                  <span className="text-blue-700">DevOps &amp; Cloud Talent</span>
                </h1>

                {/* Subheadline from wireframe */}
                <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
                  Freshers, Cloud Support Engineers, Monitoring Engineers, Junior DevOps professionals, and experienced DevOps/Cloud talent — screened and ready for interviews.
                </p>

                {/* Trust Chips matching DevOps-Institute-Website style */}
                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-xl">
                  {heroChips.map((chip) => (
                    <li key={chip} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" aria-hidden="true" />
                      <span>{chip}</span>
                    </li>
                  ))}
                </ul>

                {/* Primary & Secondary CTAs */}
                <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 max-w-lg">
                  <button
                    onClick={() => scrollToForm()}
                    className="flex-1 py-3.5 px-6 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm sm:text-base shadow-md shadow-blue-700/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Request Candidates</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => scrollToForm()}
                    className="py-3.5 px-5 rounded-xl bg-white hover:bg-blue-50 text-blue-800 font-bold text-sm sm:text-base border border-blue-200 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <Briefcase className="w-4 h-4 text-blue-600" />
                    <span>Share a Job Description</span>
                  </button>
                </div>

                {/* Direct Phone / Contact info under buttons */}
                <div className="mt-4 flex items-center gap-4 text-xs text-slate-500 font-medium">
                  <a href={portalInfo.phoneTel} className="inline-flex items-center gap-1.5 text-blue-700 font-bold hover:underline">
                    <Phone className="w-3.5 h-3.5 text-blue-600" />
                    <span>Call Placement Desk: {portalInfo.phone}</span>
                  </a>
                  <span>•</span>
                  <span>Pan-India Virtual &amp; Campus Drives</span>
                </div>
              </div>

              {/* Right Column: Authentic Classroom & Live Cohort Card */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-white group">
                  {/* Real classroom photo */}
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-900">
                    <img
                      src="/campus/campus-classroom.webp"
                      alt="DevOps Institute Hands-on Classroom Training Lab"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                      <span className="font-semibold flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-sky-400" />
                        Hands-on Training Lab
                      </span>
                      <span className="bg-emerald-500/90 text-white font-bold px-2 py-0.5 rounded text-[10px]">
                        Active Batch
                      </span>
                    </div>
                  </div>

                  {/* Quick Card Metrics */}
                  <div className="p-5 sm:p-6 bg-white space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <div>
                        <p className="text-xs text-slate-500 font-medium">Active Candidate Pool</p>
                        <p className="text-lg font-extrabold text-slate-900">200+ Screened Engineers</p>
                      </div>
                      <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-200">
                        Interview-Ready
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                        <p className="text-slate-500">Freshers Available</p>
                        <p className="text-sm font-bold text-blue-900 mt-0.5">85+ Candidates</p>
                        <p className="text-[10px] text-slate-500">Immediate / 15 Days</p>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                        <p className="text-slate-500">Experienced (2–5+ Yrs)</p>
                        <p className="text-sm font-bold text-blue-900 mt-0.5">120+ Engineers</p>
                        <p className="text-[10px] text-slate-500">Notice: 0–30 Days</p>
                      </div>
                    </div>

                    <div className="pt-1 flex items-center justify-between">
                      <button
                        onClick={() => scrollToForm()}
                        className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <span>Dispatch Shortlist For Your Stack</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partners & Stats ticker */}
        <PartnersTicker />

        {/* SECTION 2 — TALENT CATEGORIES */}
        <TalentCategoryCards />

        {/* SECTION 3 — WHY HIRE FROM DIM */}
        <section id="why-dim" className="py-20 bg-gradient-to-b from-white via-blue-50/25 to-white relative scroll-mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3 border border-blue-200">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                <span>The DIM Value Proposition</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Why Hire From DIM
              </h2>
              <p className="mt-3 text-base sm:text-lg text-slate-600">
                We prepare candidates through rigorous practical labs on live cloud infrastructure rather than dry presentations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {whyHireFromDim.map((item, index) => {
                const iconNode = iconComponents[item.icon] || <ShieldCheck className="w-6 h-6 text-blue-600" />;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-3xl border border-slate-200/90 hover:border-blue-400 p-8 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-blue-50 group-hover:bg-blue-700 group-hover:text-white text-blue-700 flex items-center justify-center mb-6 transition-colors shadow-xs">
                        {iconNode}
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1 text-xs font-bold text-blue-600">
                      <span>Verified Lab Outcome</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Visual Classroom Proof Strip matching DevOps-Institute-Website */}
            <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-blue-50/70 border border-blue-200/80">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Trained in Dedicated Hands-on Simulation Labs
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Candidates spend over 400 hours troubleshooting live Linux servers, configuring AWS VPCs, and automating CI/CD deployments.
                  </p>
                </div>
                <button
                  onClick={() => setIsScheduleModalOpen(true)}
                  className="px-5 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs shadow-sm transition-all whitespace-nowrap cursor-pointer"
                >
                  Schedule Drive / Interview Panel
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="rounded-2xl overflow-hidden shadow-sm h-48 relative group">
                  <img
                    src="/campus/campus-branded-1.jpg"
                    alt="DevOps Institute live batch training"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-3">
                    <p className="text-white text-xs font-semibold">Live Practical Training Batches</p>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden shadow-sm h-48 relative group">
                  <img
                    src="/campus/campus-branded-2.jpg"
                    alt="Hands-on cloud and Linux lab session"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-3">
                    <p className="text-white text-xs font-semibold">1-on-1 Debugging &amp; Scripting</p>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden shadow-sm h-48 relative group">
                  <img
                    src="/campus/campus-team.webp"
                    alt="DevOps Institute students and mentors"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-3">
                    <p className="text-white text-xs font-semibold">Job-Ready Talent Community</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4 — ROLES WE CAN SUPPORT */}
        <section id="roles-supported" className="py-20 bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-2 border border-blue-200">
                <Briefcase className="w-3.5 h-3.5 text-blue-600" />
                <span>End-to-End Roles</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Roles We Can Support
              </h2>
              <p className="mt-2 text-base text-slate-600">
                Click any role tag to instantly load its stack focus and request shortlisted profiles.
              </p>
            </div>

            {/* Pill / Button style tags */}
            <div className="flex flex-wrap items-center justify-center gap-3 max-w-5xl mx-auto mb-8">
              <button
                onClick={() => setActiveRoleFilter('all')}
                className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all shadow-xs cursor-pointer ${
                  activeRoleFilter === 'all'
                    ? 'bg-blue-700 text-white shadow-md shadow-blue-700/20'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-blue-400 hover:bg-blue-50/50'
                }`}
              >
                All Supported Roles ({hiringRoles.length})
              </button>

              {hiringRoles.map((role) => (
                <button
                  key={role.id}
                  onClick={() => {
                    setActiveRoleFilter(role.title);
                    scrollToForm(role.title);
                  }}
                  className={`px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all shadow-xs cursor-pointer flex items-center gap-2 ${
                    activeRoleFilter === role.title
                      ? 'bg-blue-700 text-white shadow-md shadow-blue-700/20'
                      : 'bg-white text-slate-800 border border-slate-200 hover:border-blue-500 hover:text-blue-700 hover:bg-blue-50/60'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${role.category === 'fresher' ? 'bg-sky-500' : 'bg-blue-600'}`}></span>
                  <span>{role.title}</span>
                  {role.popular && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-blue-100 text-blue-800 font-extrabold">Hot</span>
                  )}
                </button>
              ))}
            </div>

            {/* Interactive Role Detail Card */}
            <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-blue-200 p-5 shadow-sm text-center">
              <p className="text-xs font-bold uppercase tracking-wider text-blue-700">Currently Selecting</p>
              <h4 className="text-lg font-bold text-slate-900 mt-1">
                {activeRoleFilter === 'all' ? 'All Cloud & DevOps Roles Supported' : activeRoleFilter}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                {activeRoleFilter === 'all' 
                  ? 'We support both entry-level freshers and experienced lateral engineers for startups, MSPs, and enterprises.'
                  : hiringRoles.find(r => r.title === activeRoleFilter)?.description || 'Screened profiles available for immediate interview rounds.'
                }
              </p>
              <div className="mt-4">
                <button
                  onClick={() => scrollToForm(activeRoleFilter === 'all' ? 'Junior DevOps Engineer' : activeRoleFilter)}
                  className="px-6 py-2 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs shadow-sm transition-all inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Request Profiles for This Role</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CANDIDATE SHOWCASE PREVIEWS */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                  Real Candidate Previews
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
                  Sample Screened Candidates
                </h2>
                <p className="text-slate-600 text-sm sm:text-base mt-2">
                  Profiles with verified capstone projects and Linux/Cloud certifications ready for interviews.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  href="/freshers"
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-sky-50 text-sky-800 border border-sky-200 hover:bg-sky-100 transition-colors"
                >
                  View All Freshers (85+) →
                </Link>
                <Link
                  href="/experienced"
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-blue-50 text-blue-800 border border-blue-200 hover:bg-blue-100 transition-colors"
                >
                  View All Experienced (2-5+ Yrs) →
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allPreviewCandidates.map((candidate) => (
                <SampleCandidateCard
                  key={candidate.id}
                  candidate={candidate}
                  onViewProfile={handleViewProfile}
                  onRequestProfile={handleRequestProfile}
                />
              ))}
            </div>

            <div className="mt-12 text-center">
              <button
                onClick={() => scrollToForm()}
                className="px-8 py-3.5 rounded-2xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm shadow-md shadow-blue-700/20 transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Get Full Batch Candidate Profiles</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* SECTION 5 — HOW HIRING WORKS */}
        <ProcessTimeline onTalkToHiringTeam={() => setIsScheduleModalOpen(true)} />

        {/* TESTIMONIALS / EMPLOYER TRUST */}
        <section className="py-16 bg-white border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h3 className="text-2xl font-bold text-slate-900">What Hiring Managers Say</h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">Direct feedback from engineering leads who hired from DIM</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {hiringTestimonials.map((t, i) => (
                <div key={i} className="p-6 rounded-3xl bg-blue-50/50 border border-blue-200/80 relative flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1 text-amber-500 mb-3">
                      {[...Array(5)].map((_, starI) => (
                        <Star key={starI} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-sm text-slate-700 italic leading-relaxed">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-blue-100">
                    <p className="text-xs font-bold text-slate-900">{t.name}</p>
                    <p className="text-[11px] text-slate-500">{t.role} • {t.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EMPLOYER FAQS */}
        <FaqAccordion />

        {/* SECTION 6 — EMPLOYER ENQUIRY FORM */}
        <EmployerEnquiryForm 
          defaultRole={selectedRoleForForm}
        />
      </main>

      <Footer />

      {/* Floating Action Controls for 1-Tap Access */}
      <FloatingActions />

      {/* Candidate Profile Modal */}
      <CandidateProfileModal
        candidate={selectedCandidate}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onRequestInterview={handleRequestProfile}
      />

      {/* Schedule Discussion Modal */}
      <ScheduleDiscussionModal
        isOpen={isScheduleModalOpen}
        onClose={() => setIsScheduleModalOpen(false)}
      />
    </div>
  );
}
