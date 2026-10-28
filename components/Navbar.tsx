'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight, Menu, Phone, X } from 'lucide-react';
import { portalInfo } from '@/data/portalData';

interface NavbarProps {
  onRequestCandidates?: () => void;
  onShareJD?: () => void;
}

const roleLinks = [
  ['Cloud support', '/cloud-support-candidates'],
  ['L1 support', '/L1-support-candidates'],
  ['L2 support', '/L2-support-candidates'],
  ['DevOps engineers', '/devops-engineer-candidates'],
  ['Application Support', '/application-support-candidates'],
  ['Desktop Support', '/desktop-support-candidates'],
  ['L1 / IT Support', '/l1-it-support-candidates'],
  ['IT Infrastructure', '/it-infrastructure-candidates'],
  ['Linux Administrator', '/linux-administrator-candidates'],
  ['NOC / Monitoring', '/noc-monitoring-candidates'],
  ['Network Engineer L1', '/network-engineer-l1-candidates'],
  ['Server Administrator', '/server-administrator-candidates'],
  ['Service Desk', '/service-desk-candidates'],
  ['SOC / Security Analyst L1', '/soc-security-analyst-candidates'],
  ['Cloud Engineer', '/cloud-engineer-candidates'],
  ['WebSphere Administrator', '/websphere-administrator-candidates'],
  ['MLOps / DataOps', '/mlops-dataops-candidates'],
  ['Database Administrator', '/database-administrator-candidates']
];

export default function Navbar({ onRequestCandidates, onShareJD }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const request = (shareJD = false) => {
    setOpen(false);
    const handler = shareJD ? onShareJD : onRequestCandidates;
    if (handler) {
      handler();
    } else {
      window.location.href = '/#enquiry-form';
    }
  };

  const linkClass = (href: string) =>
    `rounded-md px-3 py-2 text-[13px] font-medium transition ${
      pathname === href
        ? 'text-sky-300'
        : 'text-slate-300 hover:text-white'
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07182f]">
      <nav aria-label="Main navigation" className="mx-auto flex h-[76px] max-w-[1490px] items-center justify-between gap-6 px-6 sm:px-10 lg:px-12">
        <Link href="/" className="flex shrink-0 items-center">
          <img src="/logo-white-cropped.png" alt="DevOps Institute Mumbai" className="h-12 w-auto object-contain" />
        </Link>

        <div className="hidden items-center gap-1 xl:flex">
          <Link href="/#candidate-profiles" className={linkClass('/')}>Talent</Link>
          <Link href="/freshers" className={linkClass('/freshers')}>Freshers</Link>
          <Link href="/experienced" className={linkClass('/experienced')}>Experienced</Link>
          <div className="group relative">
            <Link href="/#roles-supported" className={`${linkClass('/#roles-supported')} inline-flex items-center gap-1`}>
              Roles
              <span aria-hidden="true" className="text-[10px]">⌄</span>
            </Link>
            <div className="invisible absolute left-0 top-full max-h-[70vh] w-64 translate-y-1 overflow-y-auto rounded-xl border border-slate-700 bg-[#0b203c] p-2 opacity-0 shadow-xl transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              {roleLinks.map(([label, href]) => (
                <Link key={href} href={href} className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-200 hover:bg-white/10 hover:text-white">
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/#why-dim" className={linkClass('/#why-dim')}>Why DIM</Link>
          <Link href="/#how-it-works" className={linkClass('/#how-it-works')}>How it works</Link>
        </div>

        <div className="hidden shrink-0 items-center gap-2 xl:flex">
          <a href={portalInfo.phoneTel} className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-white transition hover:bg-white/5">
            <Phone className="h-5 w-5 text-sky-300" />
            <span className="text-base font-bold tracking-wide">{portalInfo.phone}</span>
          </a>
          <button onClick={() => request()} className="inline-flex h-10 items-center gap-2 rounded-lg bg-[#1673ed] px-4 text-sm font-bold text-white transition hover:bg-blue-600">
            Hire talent <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="flex items-center gap-2 xl:hidden">
          <a href={portalInfo.phoneTel} aria-label={`Call ${portalInfo.phone}`} className="inline-flex h-10 items-center gap-1.5 rounded-lg border border-white/20 px-2 text-sky-100">
            <Phone className="h-4 w-4" />
            <span className="whitespace-nowrap text-[11px] font-bold sm:text-sm">{portalInfo.phone}</span>
          </a>
          <button onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 text-white">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="max-h-[calc(100vh-76px)] overflow-y-auto border-t border-white/10 bg-[#07182f] px-5 pb-5 pt-3 shadow-lg xl:hidden">
          <div className="grid gap-1">
            <Link onClick={() => setOpen(false)} href="/" className="rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-200 hover:bg-white/10">Overview</Link>
            <Link onClick={() => setOpen(false)} href="/#candidate-profiles" className="rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-200 hover:bg-white/10">Candidate profiles</Link>
            <Link onClick={() => setOpen(false)} href="/freshers" className="rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-200 hover:bg-white/10">Freshers</Link>
            <Link onClick={() => setOpen(false)} href="/experienced" className="rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-200 hover:bg-white/10">Experienced</Link>
            {roleLinks.map(([label, href]) => (
              <Link key={href} onClick={() => setOpen(false)} href={href} className="rounded-lg px-3 py-2.5 text-sm text-slate-300 hover:bg-white/10">{label}</Link>
            ))}
            <Link onClick={() => setOpen(false)} href="/#why-dim" className="rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-200 hover:bg-white/10">Why DIM</Link>
            <button onClick={() => request()} className="mt-2 inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#1673ed] text-sm font-bold text-white">Hire talent <ArrowRight className="h-4 w-4" /></button>
          </div>
        </div>
      )}
    </header>
  );
}
