import RoleDirectoryPage, { RoleDirectoryConfig } from '@/components/RoleDirectoryPage';
import { createRolePageMetadata } from '@/lib/rolePageMetadata';

const config: RoleDirectoryConfig = {
  path: '/devops-engineer-candidates',
  label: 'DevOps Engineers',
  title: 'Explore DevOps and platform profiles.',
  description: 'Review profiles covering DevOps, cloud infrastructure and platform work. Project experience and tools differ by candidate; discuss your requirements and availability with our team.',
  roleName: 'DevOps Engineer Candidates',
  defaultRole: 'DevOps Engineer',
  defaultExperience: 'Any experience level',
  skills: ['Linux administration and scripting', 'Cloud infrastructure', 'Terraform and configuration tools', 'Docker and Kubernetes', 'CI/CD and Git workflows', 'Monitoring and observability'],
  faqs: [
    { question: 'How can I hire DevOps engineers in Mumbai through DevOps Institute?', answer: 'Review the DevOps engineer profiles and share your job description, experience range, technology stack, location and hiring timeline with the placement desk. DIM can discuss relevant profiles and confirm current availability; your team conducts interviews and makes the final selection.' },
    { question: 'What does a DevOps engineer candidate profile include?', answer: 'Profiles provide candidate-specific details such as experience, role focus, listed skills and project information. Use those details as a starting point, then ask the placement desk about evidence related to the responsibilities in your opening.' },
    { question: 'Which DevOps tools and skills might candidates have?', answer: 'Depending on the individual, profiles may list Linux, cloud infrastructure, AWS or other platforms, Terraform, Docker, Kubernetes, Git, CI/CD, monitoring and observability. Tool exposure and proficiency differ; confirm depth for the specific role.' },
    { question: 'Are DevOps engineer candidates pre-screened before referral?', answer: 'DIM reviews profile information for role-relevant skills, experience and project details before sharing referrals. This initial review is not a substitute for technical interviews, coding or infrastructure assessments, reference checks or your own hiring evaluation.' },
    { question: 'Can I hire both junior and senior DevOps engineers?', answer: 'You can enquire about different experience levels, from entry-level through experienced profiles, subject to current candidate availability. State the expected ownership, years of experience and specialization so the placement desk can check for relevant profiles.' },
    { question: 'Can I find DevOps candidates with Kubernetes, Terraform or CI/CD experience?', answer: 'Some profiles list tools such as Kubernetes, Terraform and CI/CD platforms. Skills are candidate-specific; review profile details and ask the placement desk to confirm relevant hands-on experience rather than treating a tool as common to every candidate.' },
    { question: 'Can DIM provide platform engineering, cloud infrastructure or SRE profiles?', answer: 'You can ask about profiles related to platform engineering, cloud infrastructure, reliability and operations as well as DevOps engineering. Availability and suitability depend on individual experience and current profiles.' },
    { question: 'How do I confirm a DevOps candidate’s notice period and availability?', answer: 'Notice period, location preference and availability may change by candidate. Contact the placement desk with the profile or role in question to confirm current details before scheduling interviews.' },
    { question: 'Does DIM charge employers a DevOps recruitment or placement fee?', answer: 'No. DevOps Institute Mumbai does not charge employers a placement fee for candidate referrals. Share your DevOps hiring brief by phone or through the enquiry form to discuss next steps.' }
  ]
};

export const metadata = createRolePageMetadata(config);

export default function DevOpsEngineerCandidatesPage() {
  return <RoleDirectoryPage config={config} />;
}
