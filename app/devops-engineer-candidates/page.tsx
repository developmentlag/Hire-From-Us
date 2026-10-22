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
  GitBranch, 
  Boxes, 
  Cpu, 
  CheckCircle2, 
  ArrowRight, 
  Users, 
  MapPin, 
  ChevronDown, 
  PhoneCall, 
  Activity, 
  Terminal 
} from 'lucide-react';

export default function DevOpsEngineerCandidatesPage() {
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

  const devopsCandidates = [
    freshersCandidates.find(c => c.name === 'Pratham Soni')!,
    experiencedCandidates.find(c => c.name === 'Sakshi Yevle')!,
    experiencedCandidates.find(c => c.name === 'Vishal Jadhav')!,
    freshersCandidates.find(c => c.name === 'Yash Deshmukh')!
  ].filter(Boolean);

  const devopsFaqs = [
    {
      question: "Are your DevOps candidates trained in Infrastructure as Code (Terraform)?",
      answer: "Yes! All DevOps candidates have written production-ready Terraform modules to provision multi-AZ VPCs, subnets, EC2 instances, security groups, and EKS Kubernetes clusters."
    },
    {
      question: "What CI/CD tools do they have hands-on experience building pipelines in?",
      answer: "Candidates are proficient in GitHub Actions and Jenkins, writing declarative pipelines that build Docker images, run automated linting/tests, and deploy to staging/production clusters."
    },
    {
      question: "Can they deploy and manage containerized apps on Kubernetes?",
      answer: "Yes, candidates understand Docker containerization, multi-stage Dockerfiles, Kubernetes Deployments, Services, Ingress controllers, ConfigMaps, Secrets, and Helm packaging."
    }
  ];

  const devopsSkills = [
    { title: "Terraform Infrastructure as Code", desc: "Modular IaC architectures, state locking with DynamoDB, variables, outputs, and multi-environment workspaces" },
    { title: "Docker & Containerization", desc: "Multi-stage builds, slim base images, security scanning with Trivy, and container networking" },
    { title: "Kubernetes (EKS & K8s)", desc: "Pod scheduling, ReplicaSets, Services (ClusterIP/NodePort/LoadBalancer), Ingress NGINX, and Helm charts" },
    { title: "CI/CD Automation Pipelines", desc: "GitHub Actions workflows, Jenkins pipelines, automated testing gates, and blue-green deployments" },
    { title: "Git & GitOps Workflows", desc: "Branching strategies (GitFlow/trunk-based), pull request reviews, ArgoCD deployments, and webhook triggers" },
    { title: "Cloud Observability & Telemetry", desc: "Prometheus metrics scrapers, Grafana visual dashboards, Alertmanager routing, and CloudWatch alarms" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      <SeoStructuredData
        pageTitle="Hire DevOps Engineer Candidates in Mumbai & Remote | Screened CI/CD & Kubernetes Talent"
        pageDescription="Hire pre-screened DevOps Engineers trained in Terraform IaC, Docker, Kubernetes EKS, and CI/CD pipelines. Freshers & 2-5+ year lateral leads. DIM Mumbai."
        canonicalUrl="https://devopsmumbai.com/devops-engineer-candidates"
        roleName="DevOps Engineers & Platform Architects"
        faqs={devopsFaqs}
        breadcrumbs={[
          { name: "Home", item: "https://devopsmumbai.com/" },
          { name: "Candidate Roles", item: "https://devopsmumbai.com/#roles-supported" },
          { name: "DevOps Engineer Candidates", item: "https://devopsmumbai.com/devops-engineer-candidates" }
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
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6">
              <Link href="/" className="hover:text-blue-700">Hire From Us</Link>
              <span>/</span>
              <span className="text-blue-700 font-bold">DevOps Engineer Candidates</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 text-left">
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-100/90 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-900 mb-4 shadow-xs">
                  <GitBranch className="h-4 w-4 text-blue-700" />
                  <span>CI/CD, Terraform &amp; Kubernetes • 70+ Candidates</span>
                </div>

                <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                  Hire <span className="text-blue-700">DevOps Engineer Candidates</span> Ready for Production Platforms
                </h1>

                <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
                  Screened DevOps talent with hands-on capstone verifications in Terraform IaC, Docker, Kubernetes clusters, Jenkins/GitHub Actions CI/CD, and multi-region AWS architectures.
                </p>

                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-xl">
                  {[
                    "Terraform IaC & AWS Multi-AZ",
                    "Docker & Kubernetes EKS Orchestration",
                    "Automated GitHub Actions CI/CD",
                    "Freshers & 2–5+ Years Lateral Leads"
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
                    <span>Request DevOps Profiles</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => setIsScheduleModalOpen(true)}
                    className="py-3.5 px-5 rounded-xl bg-white hover:bg-blue-50 text-blue-900 font-bold text-sm sm:text-base border border-slate-300 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <PhoneCall className="w-4 h-4 text-blue-600" />
                    <span>Talk to Recruitment Team</span>
                  </button>
                </div>
              </div>

              {/* Right Hero Card: Snapshot */}
              <div className="lg:col-span-5 relative">
                <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-8 space-y-5">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <div>
                      <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Cohort Snapshot</p>
                      <h3 className="text-xl font-extrabold text-slate-900 mt-0.5">DevOps &amp; Platform Engineers</h3>
                    </div>
                    <span className="bg-blue-100 text-blue-900 border border-blue-200 text-xs font-bold px-2.5 py-1 rounded-full">
                      Capstone Verified
                    </span>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-slate-500 font-medium">DevOps Profiles Ready:</span>
                      <strong className="text-blue-900 font-bold">70+ Candidates</strong>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-slate-500 font-medium">Experience Tiers:</span>
                      <strong className="text-slate-800 font-bold">Freshers / 2–3 Yrs / 5+ Yrs</strong>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-slate-500 font-medium">Primary Tooling:</span>
                      <strong className="text-slate-800 font-bold">Terraform, K8s, Docker, CI/CD</strong>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-slate-500 font-medium">Notice Period:</span>
                      <strong className="text-emerald-700 font-bold">Immediate to 15–30 Days</strong>
                    </div>
                  </div>

                  <button
                    onClick={scrollToForm}
                    className="w-full py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm cursor-pointer"
                  >
                    <span>Dispatch DevOps Resumes Now</span>
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
                Production Competencies
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
                DevOps Core Engineering Stack
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {devopsSkills.map((skill, idx) => (
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

        {/* FEATURED CANDIDATES */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-800 bg-blue-100 px-3 py-1 rounded-full border border-blue-200">
                Curated Profiles
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
                Sample DevOps Engineer Candidates
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {devopsCandidates.map((candidate) => (
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
                Frequently Asked Questions About DevOps Hiring
              </h2>
            </div>

            <div className="space-y-4">
              {devopsFaqs.map((faq, idx) => {
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

        {/* EMPLOYER FORM PREFILLED FOR DEVOPS */}
        <EmployerEnquiryForm
          defaultRole="DevOps Engineer (Mid / Senior)"
          defaultExperience="1 - 2 Years Experience"
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
        title="Schedule DevOps Hiring Discussion"
      />
    </div>
  );
}
