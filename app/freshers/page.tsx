'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EmployerEnquiryForm from '@/components/EmployerEnquiryForm';
import SampleCandidateCard from '@/components/SampleCandidateCard';
import CandidateProfileModal from '@/components/CandidateProfileModal';
import ScheduleDiscussionModal from '@/components/ScheduleDiscussionModal';
import FaqAccordion from '@/components/FaqAccordion';
import FloatingActions from '@/components/FloatingActions';
import SeoStructuredData from '@/components/SeoStructuredData';
import { freshersCandidates, Candidate } from '@/data/candidates';
import { portalInfo, employerFaqs } from '@/data/portalData';
import { 
  GraduationCap, 
  ArrowRight, 
  CheckCircle2, 
  MapPin, 
  Clock, 
  Users, 
  Briefcase,
  Server,
  Terminal,
  Activity,
  GitBranch,
  Database,
  Building2,
  Headphones,
  Radio,
  Flame,
  Calendar,
  Sparkles,
  PhoneCall,
  Phone,
  Layers,
  ChevronRight
} from 'lucide-react';

export default function FreshersPage() {
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [selectedRoleForForm, setSelectedRoleForForm] = useState('Cloud Support Engineer');

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

  const bestForRoles = [
    'Cloud Support Engineer',
    'Technical Support Engineer',
    'Monitoring Engineer',
    'Junior DevOps Engineer',
    'NOC Engineer',
    'Linux Support Engineer',
    'L1 Infrastructure Support'
  ];

  const skillGroups = [
    {
      title: 'Cloud & Infra',
      icon: Server,
      skills: ['AWS', 'EC2', 'IAM', 'VPC', 'S3', 'CloudWatch']
    },
    {
      title: 'OS & Support',
      icon: Terminal,
      skills: ['Linux', 'Troubleshooting', 'Shell Basics', 'Bash Scripting', 'Systemd']
    },
    {
      title: 'Monitoring',
      icon: Activity,
      skills: ['Prometheus', 'Grafana', 'Alerts', 'Logs', 'Metrics Triage']
    },
    {
      title: 'DevOps Basics',
      icon: GitBranch,
      skills: ['Git', 'Jenkins', 'Docker', 'CI/CD Pipelines', 'GitHub Actions']
    },
    {
      title: 'Databases / Networking',
      icon: Database,
      skills: ['SQL Basics', 'Networking Fundamentals', 'DNS', 'HTTP/HTTPS', 'TCP/IP']
    }
  ];

  const hiringUseCases = [
    {
      title: 'Startups looking for junior cloud operations talent',
      description: 'Seed and Series-A companies needing versatile builders who can maintain AWS infrastructure, deploy Docker containers, and handle daily support tasks.',
      badge: 'Startups & Scaleups',
      icon: Flame
    },
    {
      title: 'MSPs hiring L1 support engineers',
      description: 'Managed Service Providers needing reliable 24x7 engineers capable of triaging multi-tenant cloud tickets, resetting configs, and resolving basic incidents.',
      badge: 'MSP Ready',
      icon: Headphones
    },
    {
      title: 'NOC teams needing monitoring resources',
      description: 'Network & Cloud Operations Centers requiring specialists to monitor Grafana dashboards, investigate Prometheus alerts, and escalate critical telemetry.',
      badge: 'NOC Operations',
      icon: Radio
    },
    {
      title: 'Companies building a junior DevOps pipeline',
      description: 'Forward-thinking tech organizations looking to nurture raw talent into mid-level platform and site reliability engineers at sustainable costs.',
      badge: 'Talent Pipeline',
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      <SeoStructuredData
        pageTitle="Hire Freshers for Cloud Support, Monitoring & Junior DevOps Roles | DIM"
        pageDescription="Access freshers trained in Linux, AWS, Monitoring, Networking fundamentals, Docker, CI/CD basics, and cloud operations. 4.7★ rated DevOps Institute Mumbai."
        canonicalUrl="https://devopsmumbai.com/freshers"
        roleName="Freshers & Entry-Level Cloud Engineers"
        faqs={employerFaqs}
        breadcrumbs={[
          { name: "Home", item: "https://devopsmumbai.com/" },
          { name: "Freshers Pool", item: "https://devopsmumbai.com/freshers" }
        ]}
      />
      <Navbar 
        onRequestCandidates={() => scrollToForm()}
        onShareJD={() => scrollToForm()}
      />

      <main className="flex-grow">
        {/* SECTION 1 — HERO */}
        <section className="relative overflow-hidden pt-10 pb-16 md:pt-14 md:pb-24 bg-gradient-to-b from-sky-50 via-blue-50/40 to-white">
          <div className="hero-glow top-[-60px] left-1/2 -translate-x-1/2"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb matching DevOps Institute styling */}
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6">
              <Link href="/" className="hover:text-blue-700">Hire From Us</Link>
              <span>/</span>
              <span className="text-blue-700 font-bold">Freshers Pool</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 text-left">
                <div className="inline-flex items-center gap-2 rounded-full border border-sky-300 bg-sky-100/80 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-sky-900 mb-4 shadow-xs">
                  <GraduationCap className="h-4 w-4 text-sky-700" />
                  <span>Immediate Joining • Pre-Screened Freshers</span>
                </div>

                {/* Page Title from Wireframe */}
                <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                  Hire Freshers for <span className="text-blue-700">Cloud Support, Monitoring &amp; Junior DevOps</span> Roles
                </h1>

                {/* Wireframe Hero Headline & Subheadline */}
                <div className="mt-5 p-4 rounded-2xl bg-white/90 border border-sky-200 shadow-xs">
                  <p className="text-base sm:text-lg font-bold text-blue-950">
                    Entry-Level DevOps &amp; Cloud Talent, Ready to Hire
                  </p>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Access freshers trained in Linux, AWS, Monitoring, Networking fundamentals, Docker, CI/CD basics, and cloud operations.
                  </p>
                </div>

                {/* Best For Badges List */}
                <div className="mt-6 pt-5 border-t border-sky-200/60">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                    Best For Roles:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {bestForRoles.map((role) => (
                      <button
                        key={role}
                        onClick={() => scrollToForm(role)}
                        className="px-3 py-1.5 rounded-xl bg-white border border-sky-200 text-slate-800 text-xs font-bold shadow-xs hover:border-blue-500 hover:text-blue-700 hover:bg-sky-50 transition-colors cursor-pointer"
                      >
                        ✓ {role}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Hero CTAs */}
                <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 max-w-lg">
                  <button
                    onClick={() => scrollToForm('Cloud Support Engineer')}
                    className="flex-1 py-3.5 px-6 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm sm:text-base shadow-md shadow-blue-700/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Request Fresher Profiles</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => setIsScheduleModalOpen(true)}
                    className="py-3.5 px-5 rounded-xl bg-white hover:bg-sky-50 text-blue-900 font-bold text-sm sm:text-base border border-slate-300 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <span>Schedule Discussion</span>
                  </button>
                </div>
              </div>

              {/* Right Side: Classroom Photo & Live Batch Metrics */}
              <div className="lg:col-span-5 relative">
                <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-white group">
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-900">
                    <img
                      src="/campus/campus-branded-2.jpg"
                      alt="DevOps Institute students in hands-on Linux lab"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                      <span className="font-semibold flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-sky-400" />
                        Practical Hands-on Lab
                      </span>
                      <span className="bg-sky-500 text-white font-bold px-2 py-0.5 rounded text-[10px]">
                        400+ Lab Hours
                      </span>
                    </div>
                  </div>

                  <div className="p-5 bg-white space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-slate-500 font-medium">Freshers Batch Status</p>
                        <p className="text-lg font-extrabold text-slate-900">85+ Screened Candidates</p>
                      </div>
                      <span className="text-xs font-bold text-sky-800 bg-sky-50 px-2.5 py-1 rounded-lg border border-sky-200">
                        Immediate Joining
                      </span>
                    </div>

                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                      <span>• Linux CLI &amp; Troubleshooting</span>
                      <span>• AWS EC2/S3/VPC</span>
                      <span>• Prometheus &amp; Grafana</span>
                    </div>

                    <button
                      onClick={() => scrollToForm()}
                      className="w-full py-2.5 px-4 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer mt-1"
                    >
                      <span>Request Fresher Batch CVs</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 — CANDIDATE SNAPSHOT */}
        <section className="py-14 bg-white border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
                Cohort Snapshot
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Candidate Snapshot
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Stat 1 */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-sky-50 to-blue-50/50 border border-sky-200 text-center">
                <div className="w-12 h-12 rounded-2xl bg-white text-blue-700 flex items-center justify-center mx-auto mb-3 shadow-xs">
                  <Users className="w-6 h-6" />
                </div>
                <p className="text-3xl sm:text-4xl font-extrabold text-blue-900">85+</p>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-700 mt-1">Freshers Available</p>
                <p className="text-xs text-slate-500 mt-1">Evaluated &amp; interview-ready</p>
              </div>

              {/* Stat 2 */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-sky-50 to-blue-50/50 border border-sky-200 text-center">
                <div className="w-12 h-12 rounded-2xl bg-white text-blue-700 flex items-center justify-center mx-auto mb-3 shadow-xs">
                  <Briefcase className="w-6 h-6" />
                </div>
                <p className="text-lg font-extrabold text-blue-900 mt-1">Cloud Support / L1</p>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-700 mt-2">Typical Roles</p>
                <p className="text-xs text-slate-500 mt-1">Cloud Support / Monitoring / L1 / Jr DevOps</p>
              </div>

              {/* Stat 3 */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-sky-50 to-blue-50/50 border border-sky-200 text-center">
                <div className="w-12 h-12 rounded-2xl bg-white text-blue-700 flex items-center justify-center mx-auto mb-3 shadow-xs">
                  <MapPin className="w-6 h-6" />
                </div>
                <p className="text-lg font-extrabold text-blue-900 mt-1">Mumbai &amp; Remote</p>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-700 mt-2">Locations</p>
                <p className="text-xs text-slate-500 mt-1">Immediate / Pan-India Remote &amp; Onsite Ready</p>
              </div>

              {/* Stat 4 */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-sky-50 to-blue-50/50 border border-sky-200 text-center">
                <div className="w-12 h-12 rounded-2xl bg-white text-blue-700 flex items-center justify-center mx-auto mb-3 shadow-xs">
                  <Clock className="w-6 h-6" />
                </div>
                <p className="text-3xl sm:text-4xl font-extrabold text-blue-900">Immediate</p>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-700 mt-1">Notice Period</p>
                <p className="text-xs text-slate-500 mt-1">Immediate / 15 Days</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 — SKILLS AVAILABLE */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100 px-3 py-1 rounded-full border border-blue-200">
                Core Lab Matrix
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
                Skills Available
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                Every candidate is trained and tested on live practical architectures across 5 core pillars.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillGroups.map((group, idx) => {
                const Icon = group.icon;
                return (
                  <div 
                    key={idx}
                    className="bg-white rounded-3xl border border-slate-200/90 p-7 shadow-xs hover:shadow-lg hover:border-blue-400 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 group-hover:bg-blue-700 group-hover:text-white text-blue-700 flex items-center justify-center mb-4 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                      {group.title}
                    </h3>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span 
                          key={skill}
                          className="px-3 py-1.5 rounded-xl bg-slate-100 group-hover:bg-blue-50 text-slate-800 text-xs font-semibold border border-slate-200 group-hover:border-blue-200 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}

              {/* Lab practical callout tile */}
              <div className="bg-gradient-to-br from-blue-800 to-sky-700 rounded-3xl p-7 text-white shadow-md flex flex-col justify-between">
                <div>
                  <span className="inline-block bg-white/20 text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-3">
                    Hands-On Reality
                  </span>
                  <h3 className="text-xl font-bold">100% Practical Labs</h3>
                  <p className="text-xs sm:text-sm text-blue-100 mt-2 leading-relaxed">
                    Zero slide-reading. Candidates deploy live Linux instances, build automated CI/CD pipelines, and resolve simulated server outages on live cloud instances.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-white/20 flex items-center justify-between text-xs font-semibold">
                  <span>Lab Pass Benchmark: 80%+</span>
                  <CheckCircle2 className="w-4 h-4 text-sky-200" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4 — SUITABLE HIRING USE CASES */}
        <section className="py-20 bg-white border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Strategic Fit
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
                Suitable Hiring Use Cases
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                Where DIM freshers make an immediate, cost-effective impact within your engineering organization.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {hiringUseCases.map((useCase, idx) => {
                const Icon = useCase.icon;
                return (
                  <div
                    key={idx}
                    className="p-7 rounded-3xl bg-slate-50 border border-slate-200 hover:border-blue-500 hover:bg-white shadow-xs hover:shadow-md transition-all flex items-start gap-5 group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-white text-blue-700 border border-slate-200 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full mb-2">
                        {useCase.badge}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                        {useCase.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                        {useCase.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 5 — SAMPLE CANDIDATE CARDS */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-800 bg-sky-100 px-3 py-1 rounded-full border border-sky-200">
                Active Batch Previews
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
                Sample Candidate Cards
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                Real candidate profiles from our active batch. Click to inspect capstone project repositories or request an interview.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {freshersCandidates.map((candidate) => (
                <SampleCandidateCard
                  key={candidate.id}
                  candidate={candidate}
                  onViewProfile={handleViewProfile}
                  onRequestProfile={handleRequestProfile}
                />
              ))}
            </div>

            {/* CTA Under Cards from wireframe */}
            <div className="mt-14 text-center">
              <button
                onClick={() => scrollToForm()}
                className="px-8 py-4 rounded-2xl bg-blue-700 hover:bg-blue-800 text-white font-extrabold text-sm shadow-md shadow-blue-700/25 transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Get Full Candidate Profiles</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* SECTION 6 — CTA BANNER */}
        <section className="py-16 bg-gradient-to-r from-blue-900 via-blue-800 to-sky-800 text-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
              Looking to hire cloud-support or junior DevOps talent quickly?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-blue-200 max-w-2xl mx-auto">
              Our placement team coordinates same-day shortlists and coordinates interview rounds within 24 hours.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => scrollToForm('Cloud Support Engineer')}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white text-blue-900 font-extrabold text-sm hover:bg-blue-50 transition-all shadow-md cursor-pointer"
              >
                Request Freshers
              </button>

              <button
                onClick={() => setIsScheduleModalOpen(true)}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-blue-700/80 hover:bg-blue-600 border border-blue-400/40 text-white font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-sky-300" />
                <span>Schedule a Hiring Discussion</span>
              </button>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <FaqAccordion />

        {/* Employer Enquiry Form with Freshers context */}
        <EmployerEnquiryForm
          defaultRole={selectedRoleForForm}
          defaultExperience="Fresher / Entry-Level (0-1 yr)"
        />
      </main>

      <Footer />

      {/* Floating Action Controls */}
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
        title="Schedule a Freshers Hiring Call"
      />
    </div>
  );
}
