import RoleDirectoryPage, { RoleDirectoryConfig } from '@/components/RoleDirectoryPage';
import { createRolePageMetadata } from '@/lib/rolePageMetadata';

const config: RoleDirectoryConfig = {
  path: '/experienced',
  label: 'Experienced Professionals',
  title: 'Explore experienced cloud and DevOps profiles.',
  description: 'Review candidate profiles across DevOps, cloud operations, infrastructure and production support. Discuss role fit and current availability directly with our placement desk.',
  roleName: 'Experienced DevOps and Cloud Professionals',
  defaultRole: 'DevOps Engineer',
  defaultExperience: 'Experienced',
  skills: ['Cloud platforms and infrastructure', 'Infrastructure as Code and automation', 'Containers and orchestration', 'CI/CD and release workflows', 'Monitoring and reliability practices', 'Candidate-specific production experience'],
  faqs: [
    { question: 'How can I hire experienced DevOps and cloud professionals through DIM?', answer: 'Review the experienced candidate profiles and send the DevOps Institute Mumbai placement desk your job description, seniority, location and must-have skills. We can discuss profile relevance and confirm current availability. Your organization manages interviews and selects whom to hire.' },
    { question: 'What experience levels are available in DIM’s experienced candidate pool?', answer: 'Experience varies by candidate and may span several years across DevOps, cloud operations, infrastructure, platform and production support work. Check the experience shown on each profile and ask the placement desk about current profiles suited to your seniority requirements.' },
    { question: 'Which technical skills may experienced DevOps candidates list?', answer: 'Candidate-specific profiles may include cloud platforms, Linux, CI/CD, Terraform or other infrastructure automation, containers, Kubernetes, monitoring and production operations. Tools and depth vary; confirm which skills are relevant to a specific candidate.' },
    { question: 'Are experienced cloud and DevOps candidates screened for role fit?', answer: 'Profiles are reviewed for role-relevant information such as work history, stated skills and projects before referral. This does not replace your technical screening, reference checks or employment verification; your hiring team should validate fit.' },
    { question: 'Can DIM provide senior DevOps, SRE or platform engineering candidates?', answer: 'You can enquire about experienced profiles related to DevOps, site reliability, platform engineering, cloud infrastructure and operations. Share the scope and seniority of the role so the placement desk can check relevant current availability.' },
    { question: 'Can I hire experienced candidates with more than seven years of experience?', answer: 'Share the required years of experience and responsibilities with the placement desk. Candidate experience varies, and we will confirm whether a relevant profile is currently available rather than guarantee a particular seniority.' },
    { question: 'Can you confirm notice period, location and joining availability?', answer: 'Yes, these details can be checked for an individual candidate. Notice period, work-location preference and availability change, so confirm them with the placement desk before scheduling interviews.' },
    { question: 'Is there a recruitment or placement fee for experienced candidates?', answer: 'No. DevOps Institute Mumbai does not charge employers a placement fee for candidate referrals. Contact the placement desk to discuss your experienced hiring brief.' }
  ]
};

export const metadata = createRolePageMetadata(config);

export default function ExperiencedPage() {
  return <RoleDirectoryPage config={config} />;
}
