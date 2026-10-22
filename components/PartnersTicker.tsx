'use client';

import React from 'react';
import { Star, ShieldCheck, CheckCircle2, Clock } from 'lucide-react';

export default function PartnersTicker() {
  const companyLogos = [
    { src: '/logos/aws.svg', alt: 'Amazon Web Services', name: 'AWS' },
    { src: '/logos/microsoft.svg', alt: 'Microsoft', name: 'Microsoft' },
    { src: '/logos/tcs.svg', alt: 'Tata Consultancy Services', name: 'TCS' },
    { src: '/logos/deloitte.svg', alt: 'Deloitte', name: 'Deloitte' },
    { src: '/logos/infosys.svg', alt: 'Infosys', name: 'Infosys' },
    { src: '/logos/cisco.svg', alt: 'Cisco', name: 'Cisco' },
    { src: '/logos/wipro.svg', alt: 'Wipro', name: 'Wipro' },
    { src: '/logos/techmahindra.svg', alt: 'Tech Mahindra', name: 'Tech Mahindra' },
    { src: '/logos/hcltech.svg', alt: 'HCLTech', name: 'HCLTech' },
    { src: '/logos/cognizant.svg', alt: 'Cognizant', name: 'Cognizant' },
    { src: '/logos/swiggy.png', alt: 'Swiggy', name: 'Swiggy' },
    { src: '/logos/zomato.svg', alt: 'Zomato', name: 'Zomato' },
    { src: '/logos/razorpay.svg', alt: 'Razorpay', name: 'Razorpay' },
    { src: '/logos/browserstack.svg', alt: 'BrowserStack', name: 'BrowserStack' },
    { src: '/logos/ibm.svg', alt: 'IBM', name: 'IBM' },
    { src: '/logos/redhat.svg', alt: 'Red Hat', name: 'Red Hat' },
    { src: '/logos/oracle.svg', alt: 'Oracle', name: 'Oracle' },
    { src: '/logos/jio.svg', alt: 'Jio Platforms', name: 'Jio Platforms' },
  ];

  return (
    <section className="py-16 bg-white border-y border-slate-200/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs font-extrabold uppercase tracking-widest text-blue-700 mb-2">
            Hiring Partners &amp; Enterprise Placement Network
          </p>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            DevOps &amp; Cloud Talent Preferred By Fast-Growing Tech Teams, MSPs &amp; Enterprises
          </h3>
        </div>

        {/* Real Enterprise Logos Grid — Big, Crisp, and Authentically Proportioned */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5 items-center">
          {companyLogos.map((company, idx) => (
            <div
              key={idx}
              className="h-24 sm:h-28 bg-white hover:bg-slate-50/70 border border-slate-200 hover:border-blue-400 rounded-2xl p-4 flex items-center justify-center transition-all duration-200 shadow-xs hover:shadow-md group cursor-default"
              title={company.name}
            >
              <div className="flex items-center justify-center w-full h-full">
                <img
                  src={company.src}
                  alt={`${company.alt} logo`}
                  className="max-h-11 sm:max-h-12 w-auto max-w-[85%] object-contain opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-200"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Live Social Proof Strip (Google Reviews 4.7★ + Metrics) */}
        <div className="mt-14 pt-10 border-t border-slate-100 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="p-5 rounded-2xl bg-gradient-to-b from-blue-50/50 to-white border border-blue-100 shadow-xs">
            <div className="flex items-center justify-center gap-1 text-amber-500 mb-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">4.7 / 5.0</p>
            <p className="text-xs font-bold text-blue-700 mt-1">130+ Google Reviews</p>
            <p className="text-[11px] text-slate-500 mt-0.5">Verified Alumni &amp; Hiring Ratings</p>
          </div>

          <div className="p-5 rounded-2xl bg-gradient-to-b from-blue-50/50 to-white border border-blue-100 shadow-xs">
            <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mx-auto mb-1.5">
              <Clock className="w-4 h-4" />
            </div>
            <p className="text-2xl sm:text-3xl font-extrabold text-blue-900">24–48h</p>
            <p className="text-xs font-bold text-slate-800 mt-1">Shortlist Turnaround</p>
            <p className="text-[11px] text-slate-500 mt-0.5">Direct to your hiring panel</p>
          </div>

          <div className="p-5 rounded-2xl bg-gradient-to-b from-blue-50/50 to-white border border-blue-100 shadow-xs">
            <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-1.5">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <p className="text-2xl sm:text-3xl font-extrabold text-blue-900">250+</p>
            <p className="text-xs font-bold text-slate-800 mt-1">Screened Candidates</p>
            <p className="text-[11px] text-slate-500 mt-0.5">Freshers &amp; Lateral Engineers</p>
          </div>

          <div className="p-5 rounded-2xl bg-gradient-to-b from-blue-50/50 to-white border border-blue-100 shadow-xs">
            <div className="w-7 h-7 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center mx-auto mb-1.5">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <p className="text-2xl sm:text-3xl font-extrabold text-emerald-700">₹0 Fee</p>
            <p className="text-xs font-bold text-slate-800 mt-1">Zero Cost Hiring</p>
            <p className="text-[11px] text-slate-500 mt-0.5">Complimentary hiring drives</p>
          </div>
        </div>
      </div>
    </section>
  );
}
