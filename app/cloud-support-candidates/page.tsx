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
import { freshersCandidates, experiencedCandidates, Candidate } from '@/data/candidates';
import { 
  Cloud, 
  Server, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Users, 
  MapPin, 
  ChevronDown, 
  PhoneCall, 
  Cpu, 
  Layers 
} from 'lucide-react';

export default function CloudSupportCandidatesPage() {
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

  const cloudCandidates = [...freshersCandidates, ...experiencedCandidates].filter(c =>
    c.skills.some(s => s.toLowerCase().includes('aws') || s.toLowerCase().includes('cloud'))
  );

  const cloudFaqs = [
    {
      question: "Which cloud providers are your Cloud Support candidates certified and trained on?",
      answer: "Our candidates have comprehensive practical lab experience on Amazon Web Services (AWS) — including EC2, S3, VPC, IAM, Route53, ALB, and CloudWatch — as well as exposure to Microsoft Azure fundamentals."
    },
    {
      question: "Can they manage multi-account cloud security and access governance?",
      answer: "Yes. Candidates are trained in AWS IAM best practices, least-privilege role configuration, MFA enforcement, security groups, and NACL network isolation."
    },
    {
      question: "What is their experience with cloud cost monitoring and optimization?",
      answer: "They understand rightsizing EC2 instances, S3 lifecycle transition rules, eliminating unattached EBS volumes, and configuring CloudWatch billing alerts."
    }
  ];

  const cloudSkills = [
    { title: "AWS Compute & Storage", desc: "EC2 provisioning, AMI creation, EBS volumes, S3 lifecycle policies, and auto-scaling groups" },
    { title: "VPC & Cloud Networking", desc: "Subnetting, internet gateways, NAT gateways, route tables, security groups, and ALBs" },
    { title: "IAM & Cloud Security", desc: "IAM users, groups, role-based access control, least-privilege policies, and AWS KMS" },
    { title: "CloudWatch & Alerting", desc: "Metrics alarms, log groups, CloudWatch synthetic canaries, and automated remediation" },
    { title: "Linux Administration in Cloud", desc: "SSH keys, bastion hosts, cloud-init scripts, user management, and package installation" },
    { title: "Backup & Disaster Recovery", desc: "Automated AWS snapshot policies, cross-region replication, and recovery time SLA tracking" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      <SeoStructuredData
        pageTitle="Hire Cloud Support Candidates in Mumbai & Remote | AWS & Azure Support Talent"
        pageDescription="Hire pre-screened Cloud Support Engineers trained on AWS EC2, S3, VPC, IAM, and CloudWatch. Fast-track candidate shortlists within 24-48 hours. DIM Mumbai."
        canonicalUrl="https://devopsmumbai.com/cloud-support-candidates"
        roleName="Cloud Support Engineers"
        faqs={cloudFaqs}
        breadcrumbs={[
          { name: "Home", item: "https://devopsmumbai.com/" },
          { name: "Candidate Roles", item: "https://devopsmumbai.com/#roles-supported" },
          { name: "Cloud Support Candidates", item: "https://devopsmumbai.com/cloud-support-candidates" }
        ]}
      />

      <Navbar 
        onRequestCandidates={scrollToForm}
        onShareJD={scrollToForm}
      />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden pt-10 pb-16 md:pt-14 md:pb-24 bg-gradient-to-b from-sky-50 via-blue-50/40 to-white">
          <div className="hero-glow top-[-60px] left-1/2 -translate-x-1/2"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6">
              <Link href="/" className="hover:text-blue-700">Hire From Us</Link>
              <span>/</span>
              <span className="text-blue-700 font-bold">Cloud Support Candidates</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 text-left">
                <div className="inline-flex items-center gap-2 rounded-full border border-sky-300 bg-sky-100/90 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-sky-900 mb-4 shadow-xs">
                  <Cloud className="h-4 w-4 text-sky-700" />
                  <span>AWS &amp; Azure Cloud Support • 60+ Ready to Join</span>
                </div>

                <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                  Hire <span className="text-blue-700">Cloud Support Engineers</span> for Growing Infrastructure Teams
                </h1>

                <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
                  Access pre-screened talent with practical lab experience in AWS EC2, S3, VPC networks, IAM governance, Linux systems, and 24x7 cloud operations.
                </p>

                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-xl">
                  {[
                    "AWS EC2, S3, VPC & IAM Ready",
                    "Linux Server Administration",
                    "CloudWatch Monitoring & Alarms",
                    "Immediate / 15-Day Joining"
                  ].map((chip) => (
                    <li key={chip} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>{chip}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 max-w-lg">
                  <button
                    onClick={scrollToForm}
                    className="flex-1 py-3.5 px-6 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm sm:text-base shadow-md shadow-blue-700/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Request Cloud Support CVs</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => setIsScheduleModalOpen(true)}
                    className="py-3.5 px-5 rounded-xl bg-white hover:bg-sky-50 text-blue-900 font-bold text-sm sm:text-base border border-slate-300 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <PhoneCall className="w-4 h-4 text-blue-600" />
                    <span>Talk to Placement Lead</span>
                  </button>
                </div>
              </div>

              {/* Right Hero Card: Snapshot */}
              <div className="lg:col-span-5 relative">
                <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-8 space-y-5">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <div>
                      <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Cohort Snapshot</p>
                      <h3 className="text-xl font-extrabold text-slate-900 mt-0.5">Cloud Support Engineers</h3>
                    </div>
                    <span className="bg-sky-100 text-sky-900 border border-sky-200 text-xs font-bold px-2.5 py-1 rounded-full">
                      AWS Verified
                    </span>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-slate-500 font-medium">Candidates Available:</span>
                      <strong className="text-blue-900 font-bold">60+ Cloud Specialists</strong>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-slate-500 font-medium">Locations:</span>
                      <strong className="text-slate-800 font-bold">Mumbai / Hybrid / Remote</strong>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-slate-500 font-medium">Core Cloud Stack:</span>
                      <strong className="text-slate-800 font-bold">AWS (EC2, S3, VPC, IAM)</strong>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-slate-500 font-medium">Notice Period:</span>
                      <strong className="text-emerald-700 font-bold">Immediate / 15 Days</strong>
                    </div>
                  </div>

                  <button
                    onClick={scrollToForm}
                    className="w-full py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm cursor-pointer"
                  >
                    <span>Dispatch Cloud Support Profiles</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PARTNERS TICKER */}
        <PartnersTicker />

        {/* SKILLS MATRIX */}
        <section className="py-20 bg-white border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Cloud Operations Mastery
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
                What Our Cloud Support Engineers Know &amp; Manage
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cloudSkills.map((skill, idx) => (
                <div 
                  key={idx}
                  className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 hover:border-blue-400 hover:bg-white transition-all shadow-xs group"
                >
                  <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center font-bold text-sm mb-4 group-hover:bg-blue-700 group-hover:text-white transition-colors">
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

        {/* FEATURED CANDIDATES */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-800 bg-sky-100 px-3 py-1 rounded-full border border-sky-200">
                Verified Cloud Resumes
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
                Sample Cloud Support Candidates
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cloudCandidates.slice(0, 3).map((candidate) => (
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

        {/* FAQS */}
        <section className="py-20 bg-white border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Hiring FAQs
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
                Frequently Asked Questions About Cloud Support Hiring
              </h2>
            </div>

            <div className="space-y-4">
              {cloudFaqs.map((faq, idx) => {
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

        {/* EMPLOYER FORM PREFILLED */}
        <EmployerEnquiryForm
          defaultRole="Cloud Support Engineer"
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
        title="Schedule Cloud Support Hiring Call"
      />
    </div>
  );
}
