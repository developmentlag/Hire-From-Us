import RoleDirectoryPage, { RoleDirectoryConfig } from '@/components/RoleDirectoryPage';
import { createRolePageMetadata } from '@/lib/rolePageMetadata';

const config: RoleDirectoryConfig = {
  path: '/L2-support-candidates',
  label: 'L2 & Production Support',
  title: 'Meet experienced production support talent.',
  description: 'Explore experienced profiles for application support, infrastructure operations and production troubleshooting. Review candidate-specific experience and confirm availability with our team.',
  roleName: 'L2 Support and Production Support Candidates',
  defaultRole: 'L2 Support Engineer',
  defaultExperience: 'Experienced',
  skills: ['Linux and application troubleshooting', 'Database and log investigation', 'Cloud infrastructure operations', 'Monitoring and observability', 'Incident response and escalation', 'Candidate-specific production experience'],
  faqs: [
    { question: 'How can I hire L2 application or production support engineers through DIM?', answer: 'Browse the profiles on this page and send the DevOps Institute Mumbai placement desk your job description, technology stack, escalation model, location and hiring timeline. The team can discuss relevant profiles and confirm current candidate availability.' },
    { question: 'What is the difference between L1 and L2 support hiring?', answer: 'L1 roles usually focus on initial ticket intake, standard troubleshooting and escalation. L2 roles often require deeper investigation of applications, infrastructure, logs or databases. Define the level of ownership and escalation expected so candidates can be assessed against your role.' },
    { question: 'What skills may L2 or production support profiles include?', answer: 'Candidate-specific profiles may include Linux troubleshooting, application and log analysis, SQL or database investigation, cloud operations, monitoring and incident escalation. Confirm production depth and tools directly for each profile.' },
    { question: 'Are L2 support candidates pre-screened for production troubleshooting?', answer: 'Profiles are reviewed for role-relevant background and listed skills before referral. Since production systems and incident processes differ, employers should use their own scenario-based assessment to evaluate investigation, communication and escalation skills.' },
    { question: 'Can I hire candidates with experience supporting live production systems?', answer: 'Some experienced profiles describe production support or operational responsibilities. Review the individual work history and ask the placement desk to clarify relevant experience; do not assume every listed candidate has the same production exposure.' },
    { question: 'Can L2 support candidates work night shifts or 24/7 rotations?', answer: 'Shift preferences and availability vary by candidate. Include the hours, rotation, on-call expectations and location in your brief so the placement desk can verify individual fit.' },
    { question: 'Can DIM confirm an L2 candidate’s notice period and joining availability?', answer: 'Yes. Notice period, location and joining timeline can be confirmed individually and may change. Check with the placement desk before scheduling interviews or planning a start date.' },
    { question: 'Is there a placement fee for L2 or production support hiring?', answer: 'No. DevOps Institute Mumbai does not charge employers a placement fee for candidate referrals. Contact the placement desk to discuss L2 or production support openings.' }
  ]
};

export const metadata = createRolePageMetadata(config);

export default function L2SupportCandidatesPage() {
  return <RoleDirectoryPage config={config} />;
}
