import RoleDirectoryPage, { RoleDirectoryConfig } from '@/components/RoleDirectoryPage';
import { createRolePageMetadata } from '@/lib/rolePageMetadata';

const config: RoleDirectoryConfig = {
  path: '/freshers',
  label: 'Freshers & Entry-Level',
  title: 'Meet early-career cloud and DevOps talent.',
  description: 'Explore entry-level candidate profiles with training in Linux, cloud fundamentals, monitoring and DevOps workflows. Ask us to confirm profile details and availability.',
  roleName: 'Freshers and Entry-Level Cloud Talent',
  defaultRole: 'Cloud Support Engineer',
  defaultExperience: 'Fresher / Entry-Level (0-1 yr)',
  skills: ['Linux fundamentals and command line', 'AWS services and cloud operations', 'Monitoring with Grafana and Prometheus', 'Containers and Docker fundamentals', 'Git and CI/CD workflows', 'Project work listed on each profile'],
  faqs: [
    { question: 'How can I hire fresher DevOps or cloud support candidates in Mumbai through DIM?', answer: 'Browse the entry-level profiles on this page and share your job description, work location, required skills and hiring timeline with the DevOps Institute Mumbai placement desk. We can discuss relevant profiles and confirm each candidate’s current availability. Your team interviews and makes the hiring decision.' },
    { question: 'What skills may an entry-level DevOps candidate from DIM have?', answer: 'Depending on the individual, profiles may list Linux, AWS or other cloud fundamentals, Docker, Git, CI/CD, monitoring and practical project work. Skill depth differs by candidate; review the listed details and confirm role-specific experience with the placement desk.' },
    { question: 'Do DIM fresher profiles include hands-on projects?', answer: 'Some profiles describe practical projects or capstone work. The projects and tools vary by candidate. Ask the placement desk what project details are available for a profile and evaluate the candidate with your own technical interview.' },
    { question: 'Are fresher DevOps candidates pre-screened before referral?', answer: 'Candidate profiles are reviewed for role-relevant information such as stated skills, experience and project details. This is an initial profile review, not a guarantee of job performance; employers should assess candidates using their own technical and communication evaluations.' },
    { question: 'Which entry-level roles can I hire for from DIM?', answer: 'Employers can enquire about profiles for junior DevOps, cloud support, Linux support, monitoring, NOC and related operations roles. Candidate fit depends on the individual profile and current availability.' },
    { question: 'Can I hire freshers for cloud support or L1 operations?', answer: 'You can share requirements for entry-level cloud support and operations roles, including the tools used, shift pattern and location. The placement desk can check whether available profiles align with those requirements.' },
    { question: 'How do I confirm a fresher candidate’s availability and joining date?', answer: 'Availability, location preference and joining timelines can change. Contact the placement desk with the candidate or role you are considering so the current details can be confirmed individually.' },
    { question: 'Does DIM charge employers a placement fee for fresher candidates?', answer: 'No. DevOps Institute Mumbai does not charge employers a placement fee for candidate referrals. Contact the placement desk to discuss your entry-level hiring requirements.' }
  ]
};

export const metadata = createRolePageMetadata(config);

export default function FreshersPage() {
  return <RoleDirectoryPage config={config} />;
}
