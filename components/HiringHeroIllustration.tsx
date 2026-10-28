import { siGrafana } from 'simple-icons';

export default function HiringHeroIllustration() {
  return (
    <div className="relative mx-auto h-[360px] w-full max-w-[690px] sm:h-[460px] lg:h-[540px]">
      <svg aria-hidden="true" viewBox="0 0 720 520" fill="none" className="absolute inset-0 h-full w-full">
        <path d="M20 438H675" stroke="#cbd5e1" strokeWidth="1.5" />
        <path d="M85 438C108 438 112 419 112 396V292" stroke="#cbd5e1" strokeWidth="1.5" />
        <path d="M266 438C289 438 294 419 294 396V95" stroke="#cbd5e1" strokeWidth="1.5" />
        <path d="M447 438C470 438 475 419 475 396V213" stroke="#cbd5e1" strokeWidth="1.5" />
        <path d="M625 438C648 438 653 419 653 396V145" stroke="#cbd5e1" strokeWidth="1.5" />
        <circle cx="112" cy="292" r="31" fill="#f8fafc" stroke="#d6dee8" strokeWidth="2" />
        <circle cx="294" cy="95" r="31" fill="#f8fafc" stroke="#d6dee8" strokeWidth="2" />
        <circle cx="475" cy="213" r="31" fill="#f8fafc" stroke="#d6dee8" strokeWidth="2" />
        <circle cx="653" cy="145" r="31" fill="#f8fafc" stroke="#d6dee8" strokeWidth="2" />
        <text x="112" y="357" textAnchor="middle" fill="#6d5bd0" fontSize="12" fontWeight="700" letterSpacing="2">LINUX</text>
        <text x="294" y="160" textAnchor="middle" fill="#1673ed" fontSize="12" fontWeight="700" letterSpacing="2">CLOUD</text>
        <text x="475" y="278" textAnchor="middle" fill="#13866f" fontSize="12" fontWeight="700" letterSpacing="2">DEVOPS</text>
        <text x="653" y="210" textAnchor="middle" fill="#d97706" fontSize="12" fontWeight="700" letterSpacing="2">SUPPORT</text>
        <image href="/hero-logos/linux-foundation-mark.png" x="82" y="281" width="60" height="22" preserveAspectRatio="xMidYMid meet" />
        <image href="/hero-logos/aws-mark.svg" x="269" y="82" width="50" height="27" preserveAspectRatio="xMidYMid meet" />
        <image href="/hero-logos/kubernetes-mark.png" x="452" y="190" width="46" height="46" preserveAspectRatio="xMidYMid meet" />
        <svg x="633" y="125" width="40" height="40" viewBox="0 0 24 24">
          <path d={siGrafana.path} fill={`#${siGrafana.hex}`} />
        </svg>
      </svg>
      <div className="absolute left-[2%] top-[9%] rounded-2xl border border-white/80 bg-white/55 px-4 py-3 shadow-sm backdrop-blur-sm sm:left-[5%]">
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-800">Candidate profiles</p>
        <p className="mt-1 text-sm font-semibold text-slate-700">Skills · experience · projects</p>
      </div>
      <div className="absolute bottom-[5%] right-[2%] rounded-2xl border border-white/80 bg-white/60 px-4 py-3 shadow-sm backdrop-blur-sm sm:right-[6%]">
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-800">Employer-led hiring</p>
        <p className="mt-1 text-sm font-semibold text-slate-700">You review. You decide.</p>
      </div>
    </div>
  );
}
