'use client';

import React from 'react';

// High-fidelity, scalable SVG logos for enterprise hiring partners
export const AwsLogo = ({ className = "h-10 w-auto" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 120 70" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* 'a' */}
    <path d="M28.4 34.8C25.9 36.4 22.8 37.2 19.8 37.2C13.2 37.2 8.7 32.7 8.7 25.8C8.7 18.4 13.9 13.6 20.8 13.6C23.6 13.6 26.3 14.5 28.4 15.8V9.2H34.4V36.6H28.4V34.8ZM28.4 21.6C26.5 20.1 24.3 19.3 21.9 19.3C17.4 19.3 14.7 22.2 14.7 26.1C14.7 29.8 17.4 32.1 21.6 32.1C24.1 32.1 26.6 31.1 28.4 29.6V21.6Z" fill="#1E293B"/>
    {/* 'w' */}
    <path d="M37.8 14.2H43.9L49.1 31.2L54.6 14.2H60.3L65.8 31.2L71 14.2H77.1L68.8 36.6H63L57.5 20.4L52 36.6H46.2L37.8 14.2Z" fill="#1E293B"/>
    {/* 's' */}
    <path d="M80.5 31.4L84.8 28.4C87.1 30.6 90.3 32 93.6 32C96.9 32 98.8 30.6 98.8 28.7C98.8 26.7 97.4 25.7 92.5 24.5C86.1 23 81.8 20.9 81.8 15.6C81.8 10.3 86.4 7.2 92.8 7.2C96.9 7.2 100.8 8.7 103.8 11.2L99.8 14.5C97.5 12.7 94.9 11.8 92.4 11.8C89.5 11.8 87.8 13.1 87.8 14.8C87.8 16.7 89.2 17.6 94.1 18.7C100.9 20.3 104.8 22.5 104.8 27.8C104.8 33.6 99.8 36.6 93.4 36.6C88.6 36.6 83.9 34.6 80.5 31.4Z" fill="#1E293B"/>
    {/* AWS Orange Smile Arrow */}
    <path d="M12.5 48.2C32.8 60.1 63.5 60.8 92.1 50.4C95.7 49.1 99.2 47.6 102.5 45.8C104.4 44.8 106 45.6 105.3 47.5C102.9 54.3 95.3 59.3 86.4 62.1C62 69.5 32.8 66.8 10.1 53.9C8.9 53.2 9.8 51.8 11.3 51.5C11.7 51.5 12.1 51.7 12.5 48.2Z" fill="#FF9900"/>
    <path d="M106.8 45.6C104.1 42.2 88.5 43.9 81.4 44.7C80.2 44.8 79.7 43.5 80.6 42.7C87 37.5 102.5 39 105.1 42.2C107.7 45.3 103.5 60.2 97.6 65.7C96.7 66.5 95.5 66 95.9 64.8C98.1 58.1 102.2 48.7 106.8 45.6Z" fill="#FF9900"/>
  </svg>
);

export const DeloitteLogo = ({ className = "h-8 w-auto" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 160 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="0" y="27" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="29" letterSpacing="-0.5" fill="#111827">
      Deloitte<tspan fill="#86BC25">.</tspan>
    </text>
  </svg>
);

export const JioLogo = ({ className = "h-10 w-auto" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="22" cy="22" r="21" fill="#0A2885"/>
    <circle cx="22" cy="22" r="20" stroke="#1D4ED8" strokeWidth="1.5"/>
    <text x="22" y="29" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="19" fill="#FFFFFF" fontStyle="italic" letterSpacing="-1">
      Jio
    </text>
    <text x="50" y="28" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="18" fill="#0A2885" letterSpacing="0.5">
      Platforms
    </text>
  </svg>
);

export const TcsLogo = ({ className = "h-8 w-auto" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 160 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="0" y="26" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="26" letterSpacing="1" fill="#0A2885">
      TATA
    </text>
    <text x="75" y="19" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="11" letterSpacing="0.5" fill="#334155">
      CONSULTANCY
    </text>
    <text x="75" y="29" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="8" letterSpacing="0.8" fill="#64748B">
      SERVICES
    </text>
  </svg>
);

export const ZomatoLogo = ({ className = "h-9 w-auto" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 130 38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="130" height="38" rx="8" fill="#E23744"/>
    <text x="65" y="26" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="22" fontStyle="italic" fill="#FFFFFF" letterSpacing="-0.5">
      zomato
    </text>
  </svg>
);

export const SwiggyLogo = ({ className = "h-9 w-auto" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 140 38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(0, 3)">
      <path d="M16 0C7.2 0 0 7.2 0 16c0 8.2 6.1 14.9 14.1 15.9l1.9 1.9 1.9-1.9C25.9 30.9 32 24.2 32 16 32 7.2 24.8 0 16 0zm0 4c6.6 0 12 5.4 12 12 0 5.4-3.6 10-8.6 11.5l-3.4 3.4-3.4-3.4C7.6 26 4 21.4 4 16 4 9.4 9.4 4 16 4z" fill="#FC8019"/>
      <path d="M16 7c-4 0-7 2.5-7 5.5 0 4.5 7 4.5 7 8 0 1.5-1.5 2.5-3.5 2.5-1.8 0-3.3-.8-4.2-2l-2.3 2.3c1.6 2.1 4 3.2 6.5 3.2 4.5 0 7.5-2.5 7.5-6 0-5-7-5-7-8 0-1.2 1.2-2 3-2 1.5 0 2.8.6 3.6 1.6l2.3-2.3C20.7 7.9 18.5 7 16 7z" fill="#FC8019"/>
    </g>
    <text x="42" y="26" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="23" fill="#1C1C1C" letterSpacing="-0.5">
      SWIGGY
    </text>
  </svg>
);

export const RazorpayLogo = ({ className = "h-8 w-auto" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 145 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 28L16 6l-6 11h14L13 32l3-7H5z" fill="#0C2340"/>
    <path d="M12 17l6-11h-8L2 28h7l3-11z" fill="#3395FF"/>
    <text x="32" y="26" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="22" fill="#0C2340" letterSpacing="-0.5">
      Razorpay
    </text>
  </svg>
);

export const BrowserStackLogo = ({ className = "h-8 w-auto" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 165 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="18" r="14" fill="#0066CC"/>
    <circle cx="16" cy="18" r="8" fill="#FFFFFF"/>
    <circle cx="16" cy="18" r="4" fill="#FF6600"/>
    <text x="38" y="25" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="18" fill="#111827">
      BrowserStack
    </text>
  </svg>
);

export const TechMahindraLogo = ({ className = "h-8 w-auto" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 170 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="0" y="22" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="18" fill="#E31837" letterSpacing="0.2">
      Tech
    </text>
    <text x="47" y="22" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="18" fill="#111827" letterSpacing="0.2">
      Mahindra
    </text>
    <text x="0" y="33" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="8" fill="#64748B" letterSpacing="1.5">
      ENTERPRISE SOLUTIONS
    </text>
  </svg>
);

export const LtiMindtreeLogo = ({ className = "h-8 w-auto" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 150 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="0" y="26" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="22" fill="#003366">
      LTI<tspan fill="#00A3E0">Mindtree</tspan>
    </text>
  </svg>
);

export const PersistentLogo = ({ className = "h-8 w-auto" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 150 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="8" width="18" height="18" rx="4" fill="#E65100"/>
    <path d="M8 12h6v10H8z" fill="#FFFFFF"/>
    <text x="27" y="25" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="18" fill="#111827">
      Persistent
    </text>
  </svg>
);

export const HexawareLogo = ({ className = "h-8 w-auto" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 145 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="18" r="10" fill="#005B94"/>
    <path d="M12 11l5 4v6l-5 4-5-4v-6z" fill="#FFC20E"/>
    <text x="30" y="25" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="19" fill="#005B94" letterSpacing="-0.5">
      HEXAWARE
    </text>
  </svg>
);
