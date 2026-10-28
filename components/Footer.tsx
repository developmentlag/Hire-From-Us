import Link from 'next/link';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { portalInfo } from '@/data/portalData';

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1.1fr] lg:px-10">
        <div>
          <Link href="/" className="inline-flex items-center">
            <img src="/logo-white-cropped.png" alt="DevOps Institute Mumbai" className="h-11 w-auto object-contain" />
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">
            Explore candidate profiles for cloud, DevOps, infrastructure and support roles. Speak directly with DIM&apos;s placement desk.
          </p>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-white">Talent</h2>
          <div className="mt-4 grid gap-3 text-sm">
            <Link className="hover:text-white" href="/freshers">Freshers</Link>
            <Link className="hover:text-white" href="/experienced">Experienced</Link>
            <Link className="hover:text-white" href="/cloud-support-candidates">Cloud support</Link>
            <Link className="hover:text-white" href="/devops-engineer-candidates">DevOps engineers</Link>
          </div>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-white">Hiring</h2>
          <div className="mt-4 grid gap-3 text-sm">
            <Link className="hover:text-white" href="/#candidate-profiles">Candidate profiles</Link>
            <Link className="hover:text-white" href="/#how-it-works">How it works</Link>
            <Link className="hover:text-white" href="/#why-dim">Why hire through DIM</Link>
            <Link className="hover:text-white" href="/#enquiry-form">Send a hiring brief</Link>
          </div>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-white">Contact</h2>
          <div className="mt-4 grid gap-3 text-sm">
            <a className="inline-flex items-center gap-2 hover:text-white" href={portalInfo.phoneTel}><Phone className="h-4 w-4 text-sky-300" />{portalInfo.phone}</a>
            <a className="inline-flex items-center gap-2 hover:text-white" href={`mailto:${portalInfo.email}`}><Mail className="h-4 w-4 text-sky-300" />Email the placement desk</a>
            <a className="inline-flex items-start gap-2 leading-5 hover:text-white" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(portalInfo.address)}`} target="_blank" rel="noreferrer"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sky-300" />{portalInfo.shortAddress}<ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-slate-500 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <p>© {new Date().getFullYear()} DevOps Institute Mumbai.</p>
          <p>No placement fee is charged to employers for candidate referrals.</p>
        </div>
      </div>
    </footer>
  );
}
