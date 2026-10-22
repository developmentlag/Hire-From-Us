import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, CheckCircle, ArrowUpRight, ShieldCheck, MessageCircle } from 'lucide-react';
import { portalInfo } from '@/data/portalData';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Pre-footer trust banner */}
      <div className="border-b border-slate-800/80 bg-slate-900/60 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-sky-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-white text-sm">Screened &amp; Interview-Ready</p>
              <p className="text-xs text-slate-400">Live practical labs &amp; capstone verified profiles</p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-sky-400">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-white text-sm">24–48 Hours Turnaround</p>
              <p className="text-xs text-slate-400">Direct candidate matches for your exact tech stack</p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-sky-400">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-white text-sm">Zero Upfront Recruitment Fee</p>
              <p className="text-xs text-slate-400">Complimentary virtual and campus hiring drives</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand info with Official White Logo */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-auto flex items-center">
                <img
                  src="/logo-white-cropped.png"
                  alt="DevOps Institute Mumbai"
                  className="h-11 w-auto object-contain brightness-110"
                />
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              DevOps Institute is Mumbai&apos;s leading practical cloud &amp; DevOps academy. We bridge top corporate hiring teams, MSPs, and startups with job-ready DevOps, Cloud, and SRE talent.
            </p>

            <div className="space-y-2.5 pt-2 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span className="leading-snug">{portalInfo.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`mailto:${portalInfo.email}`} className="hover:text-white transition-colors">{portalInfo.email}</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={portalInfo.phoneTel} className="hover:text-white transition-colors">{portalInfo.phone}</a>
              </div>
            </div>
          </div>

          {/* Hire Freshers */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-4">
              Freshers Talent Pool
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/freshers" className="hover:text-white flex items-center gap-1 group">
                  <span>Cloud Support Engineer</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-sky-400" />
                </Link>
              </li>
              <li>
                <Link href="/freshers" className="hover:text-white flex items-center gap-1 group">
                  <span>Monitoring Engineer</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-sky-400" />
                </Link>
              </li>
              <li>
                <Link href="/freshers" className="hover:text-white flex items-center gap-1 group">
                  <span>Junior DevOps Engineer</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-sky-400" />
                </Link>
              </li>
              <li>
                <Link href="/freshers" className="hover:text-white flex items-center gap-1 group">
                  <span>NOC Engineer (24x7 Ready)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-sky-400" />
                </Link>
              </li>
              <li>
                <Link href="/freshers" className="hover:text-white flex items-center gap-1 group">
                  <span>Linux Support Specialist</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-sky-400" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Hire Experienced */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-4">
              Experienced Talent
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/experienced" className="hover:text-white flex items-center gap-1 group">
                  <span>DevOps Engineer (2–5 Yrs)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-sky-400" />
                </Link>
              </li>
              <li>
                <Link href="/experienced" className="hover:text-white flex items-center gap-1 group">
                  <span>Cloud Engineer (AWS / Azure)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-sky-400" />
                </Link>
              </li>
              <li>
                <Link href="/experienced" className="hover:text-white flex items-center gap-1 group">
                  <span>Site Reliability Engineer (SRE)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-sky-400" />
                </Link>
              </li>
              <li>
                <Link href="/experienced" className="hover:text-white flex items-center gap-1 group">
                  <span>Platform Engineer</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-sky-400" />
                </Link>
              </li>
              <li>
                <Link href="/experienced" className="hover:text-white flex items-center gap-1 group">
                  <span>Production / FDE Support</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-sky-400" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-white">
                  Hire From Us Overview
                </Link>
              </li>
              <li>
                <Link href="/#why-dim" className="hover:text-white">
                  Why Hire From DIM
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="hover:text-white">
                  4-Step Hiring Process
                </Link>
              </li>
              <li>
                <Link href="/#roles-supported" className="hover:text-white">
                  Roles We Support
                </Link>
              </li>
              <li>
                <a
                  href={portalInfo.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-400 font-semibold hover:text-emerald-300 flex items-center gap-1"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Hiring Desk</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} DevOps Institute (DIM). All rights reserved.</p>
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            <span className="text-slate-400">Classroom &amp; Hands-on Labs: Kalpataru Prime, Wagle Estate, Thane West</span>
            <span className="inline-block w-1 h-1 rounded-full bg-slate-700"></span>
            <span>Zero Placement Fees for Employers</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
