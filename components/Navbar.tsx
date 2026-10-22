'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Briefcase, 
  ChevronDown,
  Server,
  Terminal,
  Activity,
  Cloud
} from 'lucide-react';

interface NavbarProps {
  onRequestCandidates?: () => void;
  onShareJD?: () => void;
}

export default function Navbar({ onRequestCandidates, onShareJD }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);
  const pathname = usePathname();

  const handleScrollToForm = (mode?: 'request' | 'jd') => {
    setMobileMenuOpen(false);
    setRoleDropdownOpen(false);
    if (mode === 'jd' && onShareJD) {
      onShareJD();
      return;
    }
    if (onRequestCandidates) {
      onRequestCandidates();
      return;
    }
    const el = document.getElementById('enquiry-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#enquiry-form';
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo — Clean & Crisp, no redundant duplicate text */}
          <Link href="/" className="flex items-center shrink-0">
            <img
              src="/logo-blue-cropped.png"
              alt="DevOps Institute Mumbai Logo"
              className="h-10 sm:h-12 w-auto object-contain hover:opacity-90 transition-opacity"
            />
          </Link>

          {/* Desktop Navigation Links — Simple, clean, no cluttered badges */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link 
              href="/" 
              className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors ${
                pathname === '/' 
                  ? 'text-blue-700 bg-blue-50 font-bold' 
                  : 'text-slate-700 hover:text-blue-700 hover:bg-slate-50'
              }`}
            >
              Overview
            </Link>

            <Link 
              href="/freshers" 
              className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors ${
                pathname === '/freshers' 
                  ? 'text-blue-700 bg-blue-50 font-bold' 
                  : 'text-slate-700 hover:text-blue-700 hover:bg-slate-50'
              }`}
            >
              Freshers
            </Link>

            <Link 
              href="/experienced" 
              className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors ${
                pathname === '/experienced' 
                  ? 'text-blue-700 bg-blue-50 font-bold' 
                  : 'text-slate-700 hover:text-blue-700 hover:bg-slate-50'
              }`}
            >
              Experienced
            </Link>

            {/* Candidate Roles Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setRoleDropdownOpen(true)}
              onMouseLeave={() => setRoleDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
                className={`px-3.5 py-2 rounded-xl text-sm font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                  pathname.includes('candidates')
                    ? 'text-blue-700 bg-blue-50 font-bold'
                    : 'text-slate-700 hover:text-blue-700 hover:bg-slate-50'
                }`}
              >
                <span>Roles</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${roleDropdownOpen ? 'rotate-180 text-blue-600' : ''}`} />
              </button>

              {roleDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-xl border border-slate-200 p-2 space-y-1 animate-in fade-in zoom-in-95 duration-150 z-50">
                  <Link
                    href="/L1-support-candidates"
                    onClick={() => setRoleDropdownOpen(false)}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-blue-50 text-slate-800 hover:text-blue-700 transition-colors text-xs font-semibold"
                  >
                    <Server className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>L1 Support Candidates</span>
                  </Link>

                  <Link
                    href="/L2-support-candidates"
                    onClick={() => setRoleDropdownOpen(false)}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-blue-50 text-slate-800 hover:text-blue-700 transition-colors text-xs font-semibold"
                  >
                    <Terminal className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>L2 Support Candidates</span>
                  </Link>

                  <Link
                    href="/cloud-support-candidates"
                    onClick={() => setRoleDropdownOpen(false)}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-blue-50 text-slate-800 hover:text-blue-700 transition-colors text-xs font-semibold"
                  >
                    <Cloud className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Cloud Support Engineers</span>
                  </Link>

                  <Link
                    href="/devops-engineer-candidates"
                    onClick={() => setRoleDropdownOpen(false)}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-blue-50 text-slate-800 hover:text-blue-700 transition-colors text-xs font-semibold"
                  >
                    <Activity className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>DevOps Engineers</span>
                  </Link>
                </div>
              )}
            </div>

            <Link 
              href="/#why-dim" 
              className="px-3.5 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:text-blue-700 hover:bg-slate-50 transition-colors"
            >
              Why DIM
            </Link>

            <Link 
              href="/#how-it-works" 
              className="px-3.5 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:text-blue-700 hover:bg-slate-50 transition-colors"
            >
              How It Works
            </Link>
          </div>

          {/* Action Buttons — Clean & Uncluttered */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleScrollToForm('jd')}
              className="px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 hover:text-blue-700 bg-white hover:bg-blue-50/50 rounded-xl border border-slate-200 hover:border-blue-300 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Briefcase className="w-3.5 h-3.5 text-blue-600" />
              <span>Share JD</span>
            </button>

            <button
              onClick={() => handleScrollToForm('request')}
              className="px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-blue-700 hover:bg-blue-800 rounded-xl shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>Request Candidates</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-blue-700 hover:bg-slate-100 border border-slate-200"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top-2">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2 rounded-xl font-semibold text-sm ${
              pathname === '/' ? 'text-blue-700 bg-blue-50' : 'text-slate-800 hover:bg-slate-50'
            }`}
          >
            Overview
          </Link>

          <Link
            href="/freshers"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2 rounded-xl font-semibold text-sm ${
              pathname === '/freshers' ? 'text-blue-700 bg-blue-50' : 'text-slate-800 hover:bg-slate-50'
            }`}
          >
            Freshers
          </Link>

          <Link
            href="/experienced"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2 rounded-xl font-semibold text-sm ${
              pathname === '/experienced' ? 'text-blue-700 bg-blue-50' : 'text-slate-800 hover:bg-slate-50'
            }`}
          >
            Experienced
          </Link>

          <div className="pt-2 border-t border-slate-100">
            <p className="px-3 text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
              Roles
            </p>
            <Link
              href="/L1-support-candidates"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-blue-50 rounded-lg"
            >
              L1 Support Candidates
            </Link>
            <Link
              href="/L2-support-candidates"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-blue-50 rounded-lg"
            >
              L2 Support Candidates
            </Link>
            <Link
              href="/cloud-support-candidates"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-blue-50 rounded-lg"
            >
              Cloud Support Engineers
            </Link>
            <Link
              href="/devops-engineer-candidates"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-blue-50 rounded-lg"
            >
              DevOps Engineers
            </Link>
          </div>

          <Link
            href="/#why-dim"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-xl font-semibold text-sm text-slate-800 hover:bg-slate-50"
          >
            Why DIM
          </Link>

          <Link
            href="/#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-xl font-semibold text-sm text-slate-800 hover:bg-slate-50"
          >
            How It Works
          </Link>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => handleScrollToForm('jd')}
              className="w-full py-2.5 text-center font-semibold text-slate-700 bg-slate-50 rounded-xl border border-slate-200 text-xs"
            >
              Share JD
            </button>
            <button
              onClick={() => handleScrollToForm('request')}
              className="w-full py-3 text-center font-bold text-white bg-blue-700 rounded-xl shadow-sm text-xs"
            >
              Request Candidates
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
