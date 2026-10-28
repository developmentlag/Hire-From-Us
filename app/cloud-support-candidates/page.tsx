import RoleDirectoryPage, { RoleDirectoryConfig } from '@/components/RoleDirectoryPage';
import { createRolePageMetadata } from '@/lib/rolePageMetadata';

const config: RoleDirectoryConfig = {
  path: '/cloud-support-candidates',
  label: 'Cloud Support',
  title: 'Find profiles for cloud support roles.',
  description: 'Explore candidate profiles for cloud operations and support openings. Skills, experience and availability vary—review each profile and confirm the details with our team.',
  roleName: 'Cloud Support Candidates',
  defaultRole: 'Cloud Support Engineer',
  defaultExperience: 'Any experience level',
  skills: ['AWS services and cloud infrastructure', 'Linux administration and troubleshooting', 'Cloud monitoring and alerts', 'Networking fundamentals', 'Support and incident workflows', 'Candidate-specific tools and project work'],
  faqs: [
    { question: 'Where can I hire cloud support engineer candidates in Mumbai?', answer: 'DevOps Institute Mumbai lists candidate profiles relevant to cloud support and cloud operations roles. Review profiles on this page, then share your job description, work location, support scope and hiring timeline with the placement desk to discuss current availability.' },
    { question: 'What does a cloud support engineer do?', answer: 'Cloud support work commonly involves monitoring cloud resources, investigating service issues, troubleshooting Linux or networking problems, responding to tickets and escalating incidents. Define the responsibilities and cloud platform for your role so candidate profiles can be discussed against the actual job.' },
    { question: 'Which AWS and cloud skills may candidate profiles include?', answer: 'Depending on the individual, profiles may list AWS services, cloud infrastructure, Linux, networking, monitoring, alerts or incident workflows. Skill depth and hands-on experience vary; confirm the tools and tasks relevant to your cloud support opening.' },
    { question: 'Are cloud support candidates pre-screened before an interview?', answer: 'DIM reviews candidate profile information for role-relevant skills, experience and project details before referral. Employers should verify technical capability through their own cloud troubleshooting interview or assessment.' },
    { question: 'Can I hire entry-level and experienced cloud support engineers?', answer: 'You can enquire about different experience levels, subject to individual profiles and current availability. Tell the placement desk the seniority, responsibilities and minimum experience required for your cloud operations team.' },
    { question: 'Can cloud support candidates work shifts or provide on-call coverage?', answer: 'Shift and on-call preferences vary by candidate. Include required hours, weekend or overnight coverage, escalation expectations and location in your enquiry so the placement desk can check relevant profiles.' },
    { question: 'How do I confirm cloud support candidate location and availability?', answer: 'Location preference, work arrangement, joining timeline and availability are confirmed individually and can change. Contact the placement desk with the profile or role details for an up-to-date check.' },
    { question: 'Does DIM charge employers a fee for cloud support candidates?', answer: 'No. DevOps Institute Mumbai does not charge employers a placement fee for candidate referrals. Share your cloud support hiring brief with the placement desk to discuss next steps.' }
  ]
};

export const metadata = createRolePageMetadata(config);

export default function CloudSupportCandidatesPage() {
  return <RoleDirectoryPage config={config} />;
}
