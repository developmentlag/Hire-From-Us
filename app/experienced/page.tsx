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
import { experiencedCandidates, Candidate } from '@/data/candidates';
import { portalInfo, employerFaqs } from '@/data/portalData';
import { 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  MapPin, 
  Clock, 
  Briefcase, 
  Cloud, 
  Cpu, 
  Boxes, 
  Activity, 
  Server, 
  ShieldCheck, 
  Rocket, 
  Building, 
  Network, 
  Flame,
  FileText,
  PhoneCall,
  Calendar,
  Layers,
  Sparkles
} from 'lucide-react';

export default function ExperiencedPage() {
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [selectedRoleForForm, setSelectedRoleForForm] = useState('DevOps Engineer (Mid / Senior)');

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
    'DevOps Engineer',
    'Cloud Engineer',
    'Platform Engineer',
    'SRE',
    'Infrastructure Engineer',
    'Production Support / FDE',
    'Automation Engineer'
  ];

  const skillGroups = [
    {
      title: 'Cloud',
      icon: Cloud,
      skills: ['AWS', 'Azure', 'IAM', 'VPC', 'EC2', 'Load Balancers', 'Route53']
    },
    {
      title: 'DevOps / Automation',
      icon: Cpu,
      skills: ['Terraform', 'Jenkins', 'GitHub Actions', 'CI/CD', 'Bash', 'Python', 'Ansible']
    },
    {
      title: 'Containers & Orchestration',
      icon: Boxes,
      skills: ['Docker', 'Kubernetes (EKS)', 'Helm Charts', 'Microservices', 'ArgoCD']
    },
    {
      title: 'Monitoring & Reliability',
      icon: Activity,
      skills: ['Prometheus', 'Grafana', 'CloudWatch', 'Logging (ELK)', 'Alertmanager', 'SLO/SLI']
    },
    {
      title: 'Support / Infrastructure',
      icon: Server,
      skills: ['Linux Administration', 'Troubleshooting', 'Incident Support', 'RCA', 'Production Debugging']
    }
  ];

  const hiringUseCases = [
    {
      title: 'Startups scaling DevOps operations',
      description: 'High-growth product teams moving from manual VM configurations to automated IaC with Terraform, containerized deployments, and robust GitOps workflows.',
      badge: 'DevOps Modernization',
      icon: Rocket
    },
    {
      title: 'Product companies hiring support + cloud engineers',
      description: 'SaaS platforms needing reliable Tier-2/Tier-3 support engineers who can diagnose live database bottlenecks and patch production issues with zero customer fallout.',
      badge: 'Product & CloudOps',
      icon: Flame
    },
    {
      title: 'Enterprises hiring cloud operations talent',
      description: 'Large IT organizations requiring certified cloud engineers to implement multi-account governance, cost optimization, and multi-region AWS/Azure resilience.',
      badge: 'Enterprise Cloud',
      icon: Building
    },
    {
      title: 'MSPs hiring experienced support / infra resources',
      description: 'Managed service providers seeking proven incident leads with 24x7 rotation experience, deep Linux debugging chops, and strong customer-facing communication.',
      badge: 'Managed Services',
      icon: Network
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      <SeoStructuredData
        pageTitle="Hire Experienced DevOps, Cloud & Infrastructure Talent | DIM Mumbai"
        pageDescription="Hire professionals with 2 to 5+ years experience in DevOps, production support, infrastructure, cloud operations, and automation. 4.7★ rated DevOps Institute Mumbai."
        canonicalUrl="https://devopsmumbai.com/experienced"
        roleName="Experienced DevOps & SRE Engineers"
        faqs={employerFaqs}
        breadcrumbs={[
          { name: "Home", item: "https://devopsmumbai.com/" },
          { name: "Experienced Talent", item: "https://devopsmumbai.com/experienced" }
        ]}
      />
      <Navbar 
        onRequestCandidates={() => scrollToForm()}
        onShareJD={() => scrollToForm()}
      />

      <main className="flex-grow">
        {/* SECTION 1 — HERO */}
        <section className="relative overflow-hidden pt-10 pb-16 md:pt-14 md:pb-24 bg-gradient-to-b from-blue-50/80 via-sky-50/30 to-white">
          <div className="hero-glow top-[-60px] left-1/2 -translate-x-1/2"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6">
              <Link href="/" className="hover:text-blue-700">Hire From Us</Link>
              <span>/</span>
              <span className="text-blue-700 font-bold">Experienced Talent</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 text-left">
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-100/80 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-900 mb-4 shadow-xs">
                  <Users className="h-4 w-4 text-blue-700" />
                  <span>2–5+ Years Experience • Production Tested</span>
                </div>

                {/* Page Title from Wireframe */}
                <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                  Hire Experienced <span className="text-blue-700">DevOps, Cloud &amp; Infrastructure</span> Talent
                </h1>

                {/* Wireframe Hero Headline & Subheadline */}
                <div className="mt-5 p-4 rounded-2xl bg-white/90 border border-blue-200 shadow-xs">
                  <p className="text-base sm:text-lg font-bold text-blue-950">
                    Experienced DevOps &amp; Cloud Professionals for Growing Teams
                  </p>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Hire professionals with relevant experience in DevOps, production support, infrastructure, cloud operations and automation.
                  </p>
                </div>

                {/* Best For Badges List */}
                <div className="mt-6 pt-5 border-t border-blue-200/60">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                    Best For Roles:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {bestForRoles.map((role) => (
                      <button
                        key={role}
                        onClick={() => scrollToForm(role)}
                        className="px-3 py-1.5 rounded-xl bg-white border border-blue-200 text-slate-800 text-xs font-bold shadow-xs hover:border-blue-600 hover:text-blue-700 hover:bg-blue-50 transition-colors cursor-pointer"
                      >
                        ✓ {role}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Hero CTAs */}
                <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 max-w-lg">
                  <button
                    onClick={() => scrollToForm('DevOps Engineer (Mid / Senior)')}
                    className="flex-1 py-3.5 px-6 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm sm:text-base shadow-md shadow-blue-700/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Request Experienced Profiles</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => scrollToForm()}
                    className="py-3.5 px-5 rounded-xl bg-white hover:bg-blue-50 text-blue-900 font-bold text-sm sm:text-base border border-slate-300 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <FileText className="w-4 h-4 text-blue-600" />
                    <span>Share a Job Description</span>
                  </button>
                </div>
              </div>

              {/* Right Side: Architecture & Talent Preview Card */}
              <div className="lg:col-span-5 relative">
                <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-white group">
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-900">
                    <img
                      src="/campus/campus-classroom.webp"
                      alt="DevOps Institute lateral engineers advanced architecture session"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                      <span className="font-semibold flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-sky-400" />
                        Hands-on Training Campus
                      </span>
                      <span className="bg-blue-600 text-white font-bold px-2 py-0.5 rounded text-[10px]">
                        Architect Vetted
                      </span>
                    </div>
                  </div>

                  <div className="p-5 bg-white space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-slate-500 font-medium">Lateral Talent Pool</p>
                        <p className="text-lg font-extrabold text-slate-900">120+ Active Professionals</p>
                      </div>
                      <span className="text-xs font-bold text-blue-800 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-200">
                        2–5+ Yrs Exp
                      </span>
                    </div>

                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                      <span>• Terraform IaC</span>
                      <span>• Kubernetes EKS</span>
                      <span>• SRE &amp; 99.99% Uptime</span>
                    </div>

                    <button
                      onClick={() => scrollToForm()}
                      className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer mt-1"
                    >
                      <span>Request Matched Lateral Resumes</span>
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
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Lateral Cohort Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Candidate Snapshot
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Snapshot 1 */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-blue-50 to-sky-50/50 border border-blue-200 text-center">
                <div className="w-12 h-12 rounded-2xl bg-white text-blue-700 flex items-center justify-center mx-auto mb-3 shadow-xs">
                  <Briefcase className="w-6 h-6" />
                </div>
                <p className="text-2xl sm:text-3xl font-extrabold text-blue-900">2–3 &amp; 5+ Yrs</p>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-700 mt-1">Experience Segments</p>
                <p className="text-xs text-slate-500 mt-1">Mid-level &amp; senior platform leads</p>
              </div>

              {/* Snapshot 2 */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-blue-50 to-sky-50/50 border border-blue-200 text-center">
                <div className="w-12 h-12 rounded-2xl bg-white text-blue-700 flex items-center justify-center mx-auto mb-3 shadow-xs">
                  <Cloud className="w-6 h-6" />
                </div>
                <p className="text-lg font-extrabold text-blue-900 mt-1">AWS, Azure, K8s</p>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-700 mt-2">Core Skills</p>
                <p className="text-xs text-slate-500 mt-1">AWS, Azure, Linux, Terraform, CI/CD, Monitoring, K8s</p>
              </div>

              {/* Snapshot 3 */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-blue-50 to-sky-50/50 border border-blue-200 text-center">
                <div className="w-12 h-12 rounded-2xl bg-white text-blue-700 flex items-center justify-center mx-auto mb-3 shadow-xs">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <p className="text-lg font-extrabold text-blue-900 mt-1">DevOps / SRE / Infra</p>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-700 mt-2">Roles Supported</p>
                <p className="text-xs text-slate-500 mt-1">DevOps / Cloud / Production Support / Infra / SRE</p>
              </div>

              {/* Snapshot 4 */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-blue-50 to-sky-50/50 border border-blue-200 text-center">
                <div className="w-12 h-12 rounded-2xl bg-white text-blue-700 flex items-center justify-center mx-auto mb-3 shadow-xs">
                  <Clock className="w-6 h-6" />
                </div>
                <p className="text-2xl sm:text-3xl font-extrabold text-blue-900">0 – 30 Days</p>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-700 mt-1">Notice Period</p>
                <p className="text-xs text-slate-500 mt-1">As per profile (Immediate to 30 Days)</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 — SKILLS AVAILABLE */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100 px-3 py-1 rounded-full border border-blue-200">
                Production Competencies
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
                Skills Available
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                Experienced practitioners evaluated for live production incidents and cloud optimization.
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

              {/* Assessment Tile */}
              <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-3xl p-7 text-white shadow-md flex flex-col justify-between">
                <div>
                  <span className="inline-block bg-white/20 text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-3">
                    Architect Evaluated
                  </span>
                  <h3 className="text-xl font-bold">Deep Production Vetting</h3>
                  <p className="text-xs sm:text-sm text-blue-100 mt-2 leading-relaxed">
                    Evaluated by Principal DevOps Leads for hands-on debugging, root cause analysis (RCA), and high-availability architecture design.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-white/20 flex items-center justify-between text-xs font-semibold">
                  <span>99.9% Infrastructure SLA Track</span>
                  <CheckCircle2 className="w-4 h-4 text-sky-300" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4 — SAMPLE CANDIDATE PROFILES */}
        <section className="py-20 bg-white border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-800 bg-blue-100 px-3 py-1 rounded-full border border-blue-200">
                Lateral Candidate Previews
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
                Sample Candidate Profiles
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                Short previews of experienced professionals ready for interviews. Click to view full details.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {experiencedCandidates.map((candidate) => (
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
                className="px-8 py-3.5 rounded-2xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm shadow-md shadow-blue-700/25 transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Request All Lateral Profiles</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* SECTION 5 — HIRING USE CASES */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Business Scenarios
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
                Hiring Use Cases
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                Tailored talent matching for diverse engineering challenges and team stages.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {hiringUseCases.map((useCase, idx) => {
                const Icon = useCase.icon;
                return (
                  <div
                    key={idx}
                    className="p-7 rounded-3xl bg-white border border-slate-200 hover:border-blue-500 shadow-xs hover:shadow-md transition-all flex items-start gap-5 group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 border border-blue-100 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
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

        {/* SECTION 6 — CTA BANNER */}
        <section className="py-16 bg-gradient-to-r from-blue-950 via-blue-900 to-sky-900 text-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
              Need experienced DevOps or Cloud professionals?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-blue-200 max-w-2xl mx-auto">
              Submit your JD or connect directly with our hiring managers to schedule candidate interviews this week.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => scrollToForm()}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white text-blue-950 font-extrabold text-sm hover:bg-blue-50 transition-all shadow-md cursor-pointer"
              >
                Share a Job Description
              </button>

              <button
                onClick={() => scrollToForm('DevOps Engineer (Mid / Senior)')}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-blue-700 hover:bg-blue-600 border border-blue-400/40 text-white font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Users className="w-4 h-4 text-sky-300" />
                <span>Request Candidate Profiles</span>
              </button>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <FaqAccordion />

        {/* Employer Enquiry Form with Experienced context */}
        <EmployerEnquiryForm
          defaultRole={selectedRoleForForm}
          defaultExperience="2 - 3 Years Experience"
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
        title="Schedule an Experienced Talent Discussion"
      />
    </div>
  );
}
