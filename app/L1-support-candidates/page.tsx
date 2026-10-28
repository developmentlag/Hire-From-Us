import RoleDirectoryPage, { RoleDirectoryConfig } from '@/components/RoleDirectoryPage';
import { createRolePageMetadata } from '@/lib/rolePageMetadata';

const config: RoleDirectoryConfig = {
  path: '/L1-support-candidates',
  label: 'L1 Support',
  title: 'Explore profiles for L1 support teams.',
  description: 'Browse entry-level candidate profiles relevant to technical support, cloud operations and monitoring. Confirm individual experience and shift requirements with the placement desk.',
  roleName: 'L1 Support Candidates',
  defaultRole: 'L1 Support Engineer',
  defaultExperience: 'Fresher / Entry-Level (0-1 yr)',
  skills: ['Linux command line and basic troubleshooting', 'Cloud services and operations', 'Monitoring dashboards and alerts', 'Networking and web fundamentals', 'Ticket triage and clear communication', 'Profile-specific training and project work'],
  faqs: [
    { question: 'How do I hire L1 support or service desk candidates in Mumbai through DIM?', answer: 'Review the entry-level profiles and share your L1 support job description, location, shift pattern and required skills with the DevOps Institute Mumbai placement desk. We can discuss relevant profiles and confirm individual availability before you decide whom to interview.' },
    { question: 'What are typical L1 technical support responsibilities?', answer: 'L1 support commonly includes receiving and categorizing tickets, following troubleshooting steps, documenting incidents, communicating with users and escalating unresolved issues. Specify your systems, service levels and escalation process so profile relevance can be discussed.' },
    { question: 'What skills may DIM L1 support candidate profiles include?', answer: 'Profiles may list Linux command-line fundamentals, cloud services, monitoring alerts, basic networking, ticket triage and customer communication. Candidate backgrounds vary; confirm each person’s experience with the tools and support workflows used by your team.' },
    { question: 'Are L1 support candidates screened for communication and troubleshooting?', answer: 'Candidate profiles are reviewed for role-related details such as listed skills and project or training experience. Your hiring team should assess communication, structured troubleshooting and service-desk readiness in its own interview process.' },
    { question: 'Can I hire entry-level L1 support candidates for cloud operations?', answer: 'You can enquire about entry-level profiles relevant to cloud operations and technical support. Share the cloud platform, monitoring tools, ticketing workflow and expected responsibilities so the placement desk can discuss fit.' },
    { question: 'Are candidates available for night shifts, weekends or rotational shifts?', answer: 'Shift preferences and availability differ by candidate. Provide the schedule, weekend expectations and location in your hiring brief; the placement desk can confirm those details for relevant profiles.' },
    { question: 'How can I check an L1 candidate’s location and joining date?', answer: 'Work location preferences and joining timelines are candidate-specific and can change. Contact the placement desk to confirm current details before arranging interviews.' },
    { question: 'Does DevOps Institute Mumbai charge an L1 support placement fee?', answer: 'No. DIM does not charge employers a placement fee for candidate referrals. Contact the placement desk to discuss your L1 or service desk vacancy.' }
  ]
};

export const metadata = createRolePageMetadata(config);

export default function L1SupportCandidatesPage() {
  return <RoleDirectoryPage config={config} />;
}
