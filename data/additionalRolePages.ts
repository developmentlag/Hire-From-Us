import type { RoleDirectoryConfig } from '@/components/RoleDirectoryPage';

export const applicationSupportConfig: RoleDirectoryConfig = {
  path: '/application-support-candidates',
  label: 'Application Support',
  title: 'Hire Application Support Engineers.',
  description: 'Explore profiles relevant to application and production support, incident investigation, log analysis and customer issue resolution. Share your environment and confirm role fit and availability with our placement desk.',
  roleName: 'Application and Production Support Engineers',
  defaultRole: 'Application / Production Support Engineer',
  defaultExperience: 'Any experience level',
  skills: ['Application and production issue triage', 'Linux-hosted application troubleshooting', 'Logs, SQL and database investigation', 'Incident communication and escalation', 'Monitoring and service availability', 'Candidate-specific support experience'],
  faqs: [
    { question: 'Where can I hire application support engineers in Mumbai?', answer: 'DevOps Institute Mumbai provides candidate profiles relevant to application support and production support roles. Share your job description, application stack, location and shift requirements with the placement desk to discuss relevant profiles and confirm current availability.' },
    { question: 'What does an application support engineer do?', answer: 'Application support engineers investigate application incidents, analyze logs, troubleshoot user-reported issues, coordinate escalations and help maintain service availability. Responsibilities vary by organization, so describe your support tier, tools and service levels when you enquire.' },
    { question: 'What skills may application or production support profiles include?', answer: 'Candidate profiles may include Linux-hosted application support, SQL, database troubleshooting, log analysis, incident response, monitoring and customer communication. Skills and production experience differ by candidate; verify the details for each profile.' },
    { question: 'Are application support candidates pre-screened?', answer: 'DIM reviews profile information for role-relevant skills, experience and project details before discussing referrals. Employers should conduct their own troubleshooting interview and validate technical fit for their applications and production environment.' },
    { question: 'Can I hire application support candidates for rotational or 24/7 shifts?', answer: 'Shift preferences and availability vary by candidate. Include overnight or weekend coverage, on-call expectations, work location and start date in your brief so the placement desk can confirm individual fit.' },
    { question: 'Can DIM confirm an application support candidate’s availability and notice period?', answer: 'Yes. Availability, notice period and location preference should be confirmed for each candidate because these details change. Contact the placement desk before arranging interviews or planning a joining date.' },
    { question: 'Does DIM charge a placement fee for application support hiring?', answer: 'No. DevOps Institute Mumbai does not charge employers a placement fee for candidate referrals. Call the placement desk or submit the hiring enquiry form to discuss application support profiles.' }
  ]
};

export const desktopSupportConfig: RoleDirectoryConfig = {
  path: '/desktop-support-candidates',
  label: 'Desktop Support',
  title: 'Hire Desktop Support Engineers.',
  description: 'Discuss desktop and end-user support requirements with our placement desk. Share your operating systems, device environment, location and shift coverage so we can check relevant profiles and current availability.',
  roleName: 'Desktop Support Engineers',
  defaultRole: 'Desktop Support Engineer (L1 / L2)',
  defaultExperience: 'Any experience level',
  skills: ['L1 and L2 end-user support', 'Desktop and operating system troubleshooting', 'Hardware and software issue triage', 'User communication and ticket handling', 'Device setup and access support', 'Shift and onsite requirements'],
  faqs: [
    { question: 'How can I hire Desktop Support Engineers through DevOps Institute Mumbai?', answer: 'Share your Desktop Support job description, work location, onsite expectations, operating systems and shift coverage with the DIM placement desk. We can check whether relevant profiles are currently available and confirm details before interviews.' },
    { question: 'What is the difference between L1 and L2 desktop support?', answer: 'L1 desktop support generally handles initial user requests, common device issues and ticket routing. L2 desktop support usually investigates more complex operating system, application, access or hardware issues. Define escalation boundaries and tools when describing your vacancy.' },
    { question: 'What skills should I specify for a desktop support vacancy?', answer: 'Specify the operating systems, laptop and desktop environment, endpoint tools, ticketing platform, identity systems, onsite requirements and user volume. Candidate experience is individual, so the placement desk can compare profile details with your requirements.' },
    { question: 'Can I request onsite desktop support candidates in Mumbai or Thane?', answer: 'You can include the office location, travel expectations and onsite schedule in your enquiry. Candidate location and work preferences need to be confirmed individually.' },
    { question: 'Are desktop support candidates screened before their profiles are shared?', answer: 'DIM reviews profile information for role-relevant skills and experience before discussing referrals. Your team should assess device troubleshooting, customer communication and familiarity with your endpoint environment.' },
    { question: 'Can desktop support hires cover shifts or weekend support?', answer: 'Shift availability varies by candidate. Include the roster, weekend coverage, overtime or on-call requirements and expected start date so the placement desk can check individual availability.' },
    { question: 'Is there a recruitment fee for Desktop Support candidates?', answer: 'No. DIM does not charge employers a placement fee for candidate referrals. Contact the placement desk to discuss your Desktop Support hiring requirements.' }
  ]
};

export const l1ItSupportConfig: RoleDirectoryConfig = {
  path: '/l1-it-support-candidates',
  label: 'L1 / IT Support',
  title: 'Hire L1 and IT Support Engineers.',
  description: 'Explore profiles relevant to IT support, technical support, service desk and frontline operations. Discuss ticket workflows, user environment and current candidate availability with our placement desk.',
  roleName: 'L1 IT and Technical Support Engineers',
  defaultRole: 'L1 / IT / Technical Support Engineer',
  defaultExperience: 'Any experience level',
  skills: ['L1 ticket intake and triage', 'Linux and operating system fundamentals', 'Basic networking and cloud operations', 'Monitoring alerts and first response', 'User communication and escalation', 'Candidate-specific support projects'],
  faqs: [
    { question: 'Where can I hire L1 or IT Support Engineers in Mumbai?', answer: 'DevOps Institute Mumbai lists profiles relevant to L1 IT support and technical support roles. Share your job description, location, ticketing workflow, user environment and schedule with the placement desk to discuss relevant profiles.' },
    { question: 'What are common L1 IT support responsibilities?', answer: 'L1 IT support commonly involves receiving and categorizing tickets, performing initial troubleshooting, documenting actions, communicating with users and escalating unresolved issues. Responsibilities and tools differ by employer.' },
    { question: 'What skills may an L1 technical support candidate have?', answer: 'Profiles may include operating system fundamentals, Linux command line, networking basics, cloud operations, monitoring alerts, ticket triage and customer communication. Review each candidate’s listed skills and confirm relevant experience.' },
    { question: 'Are L1 IT support candidates pre-screened for troubleshooting?', answer: 'Candidate profiles are reviewed for role-relevant information before referral. Employers should test practical troubleshooting, documentation and communication using scenarios from their own support environment.' },
    { question: 'Can I hire L1 support candidates for night or rotational shifts?', answer: 'Shift preferences and availability vary. Include overnight coverage, weekends, rotation details, location and start date in your enquiry so these can be confirmed for individual candidates.' },
    { question: 'Does DIM provide candidates for onsite or remote IT support?', answer: 'Work arrangements depend on candidate location and preference. Include onsite, hybrid or remote requirements in your hiring brief and confirm the match with the placement desk.' },
    { question: 'Does DIM charge employers a fee for L1 IT support referrals?', answer: 'No. DevOps Institute Mumbai does not charge employers a placement fee for candidate referrals. Contact the placement desk by phone or through the enquiry form.' }
  ]
};

export const itInfrastructureConfig: RoleDirectoryConfig = {
  path: '/it-infrastructure-candidates',
  label: 'IT Infrastructure',
  title: 'Hire IT Infrastructure Engineers.',
  description: 'Discuss infrastructure, systems and data center hiring with our placement desk. Candidate experience varies across Linux, cloud and operations; confirm role-specific fit and availability before interviews.',
  roleName: 'IT Infrastructure and Data Center Engineers',
  defaultRole: 'IT Infrastructure / Data Center / System Engineer',
  defaultExperience: 'Any experience level',
  skills: ['Infrastructure and systems operations', 'Linux and server administration', 'Cloud and virtualization fundamentals', 'Monitoring and incident response', 'Backup, availability and recovery concepts', 'Candidate-specific tools and experience'],
  faqs: [
    { question: 'How can I hire IT Infrastructure Engineers in Mumbai through DIM?', answer: 'Send the placement desk your infrastructure job description, platforms, location, experience needs and hiring timeline. DIM can discuss relevant candidate profiles and confirm availability individually.' },
    { question: 'What roles are included in IT infrastructure hiring?', answer: 'Infrastructure hiring can cover systems engineering, data center operations, Linux or server administration, cloud operations, monitoring and reliability. State the actual responsibilities and environment because candidate backgrounds vary.' },
    { question: 'What skills may IT infrastructure candidate profiles include?', answer: 'Depending on the person, profiles may list Linux, cloud infrastructure, server operations, Terraform, monitoring, incident response, automation or reliability practices. Confirm each candidate’s hands-on experience for your stack.' },
    { question: 'Can I hire for data center or onsite infrastructure operations?', answer: 'Include the facility location, onsite schedule, shift coverage, hardware or platform requirements and any access expectations in your enquiry. The placement desk can confirm whether a candidate’s location and availability align.' },
    { question: 'Are infrastructure candidates pre-screened for technical fit?', answer: 'Candidate profiles are reviewed for role-relevant information before referral. Your technical team should evaluate systems knowledge, operational judgment and experience with your specific infrastructure.' },
    { question: 'Can DIM confirm infrastructure candidate experience and joining timeline?', answer: 'Experience and joining availability are profile-specific. Share your seniority requirements and expected start date so the placement desk can confirm current details for relevant candidates.' },
    { question: 'Is there a placement fee for hiring infrastructure engineers?', answer: 'No. DIM does not charge employers a placement fee for candidate referrals. Contact the DevOps Institute Mumbai placement desk to discuss your infrastructure role.' }
  ]
};

export const linuxAdminConfig: RoleDirectoryConfig = {
  path: '/linux-administrator-candidates',
  label: 'Linux Administrator',
  title: 'Hire Linux Administrators.',
  description: 'Review profiles with Linux administration and operations experience. Share your distribution, server environment, scripting needs and support model to discuss role fit with our placement desk.',
  roleName: 'Linux Administrator Candidates',
  defaultRole: 'Linux Administrator (Red Hat / Wintel)',
  defaultExperience: 'Any experience level',
  skills: ['Linux administration and troubleshooting', 'Red Hat and Linux fundamentals', 'Shell scripting and automation', 'Logs, services and system monitoring', 'Server operations and incident handling', 'Candidate-specific Linux experience'],
  faqs: [
    { question: 'Where can I hire Linux Administrators in Mumbai?', answer: 'DevOps Institute Mumbai provides candidate profiles that may be relevant to Linux administration and operations roles. Share your distribution, server estate, location and experience criteria with the placement desk to discuss current profiles.' },
    { question: 'What Linux administration skills may candidates list?', answer: 'Candidate profiles may include Linux troubleshooting, shell scripting, services, logs, monitoring, cloud or server operations. Experience with Red Hat, RHEL or other distributions differs by candidate and should be confirmed individually.' },
    { question: 'Can I hire a Linux Administrator with Red Hat or RHEL experience?', answer: 'You can specify Red Hat, RHEL and required certification or administration experience in your brief. The placement desk can check profile details and confirm whether relevant experience is currently available.' },
    { question: 'Do Linux Administrator candidates have production server experience?', answer: 'Production exposure varies by candidate. Review the work history and projects on each profile, then ask the placement desk to clarify relevant operational experience and assess it through your own technical interview.' },
    { question: 'Are Linux candidates screened before they are referred?', answer: 'DIM reviews profile information for role-relevant skills and experience before discussing referrals. Employers should use practical Linux troubleshooting or administration assessments aligned to their systems.' },
    { question: 'Can Linux Administrators support shifts or on-call operations?', answer: 'Shift and on-call availability vary by person. Include coverage hours, escalation expectations, location and joining timeline in your enquiry so candidate details can be checked.' },
    { question: 'Does DIM charge an employer placement fee for Linux roles?', answer: 'No. DevOps Institute Mumbai does not charge employers a placement fee for candidate referrals. Contact the placement desk to discuss Linux Administrator openings.' }
  ]
};

export const nocConfig: RoleDirectoryConfig = {
  path: '/noc-monitoring-candidates',
  label: 'NOC / Monitoring',
  title: 'Hire NOC and Monitoring Engineers.',
  description: 'Explore candidate profiles relevant to NOC operations, monitoring and alert response. Share your monitoring stack, shift schedule and escalation process to discuss suitable profiles and availability.',
  roleName: 'NOC and Monitoring Engineer Candidates',
  defaultRole: 'NOC / Monitoring Engineer',
  defaultExperience: 'Any experience level',
  skills: ['Monitoring dashboards and alert response', 'Linux and infrastructure operations', 'Prometheus, Grafana or CloudWatch exposure', 'Incident triage and escalation', 'Availability and shift coordination', 'Candidate-specific monitoring projects'],
  faqs: [
    { question: 'How do I hire NOC or Monitoring Engineers in Mumbai?', answer: 'Share your NOC job description, monitoring tools, operating hours, escalation model and location with the DevOps Institute Mumbai placement desk. We can discuss relevant profiles and confirm current availability.' },
    { question: 'What does a NOC or monitoring engineer typically do?', answer: 'NOC and monitoring engineers commonly monitor infrastructure and services, acknowledge alerts, triage incidents, document events and escalate issues according to operational procedures. Exact responsibilities depend on your network and service environment.' },
    { question: 'Which monitoring tools may candidate profiles include?', answer: 'Profiles may list tools such as Prometheus, Grafana, CloudWatch or other monitoring platforms. Tool exposure differs by person; specify your stack and confirm candidate-specific experience.' },
    { question: 'Are NOC candidates available for 24/7 or rotational shifts?', answer: 'Shift availability varies by candidate. Include the roster, overnight and weekend coverage, location and start date in your brief so the placement desk can verify fit.' },
    { question: 'Are monitoring candidates pre-screened for alert triage?', answer: 'DIM reviews role-relevant profile information before referral. Your team should assess alert interpretation, incident documentation and escalation judgment using scenarios from your environment.' },
    { question: 'Can I hire entry-level or experienced NOC engineers?', answer: 'You can specify the required experience and level of operational ownership. Relevant profiles depend on current availability and individual experience, which the placement desk confirms.' },
    { question: 'Does DIM charge employers a fee for NOC candidate referrals?', answer: 'No. DIM does not charge employers a placement fee for candidate referrals. Contact the placement desk to discuss NOC and monitoring roles.' }
  ]
};

export const networkL1Config: RoleDirectoryConfig = {
  path: '/network-engineer-l1-candidates',
  label: 'Network Engineer L1',
  title: 'Hire L1 Network Engineers.',
  description: 'Discuss L1 network support hiring for routing, switching, proxy and access-control environments. Share required vendors, certifications, shifts and location so the placement desk can check profile fit.',
  roleName: 'L1 Network Engineer Candidates',
  defaultRole: 'Network Engineer L1',
  defaultExperience: 'Any experience level',
  skills: ['L1 network monitoring and ticket triage', 'Routing and switching fundamentals', 'Proxy and secure web gateway support', 'Network access control concepts', 'Incident documentation and escalation', 'Vendor-specific experience confirmed per profile'],
  faqs: [
    { question: 'Can I hire L1 Network Engineers through DevOps Institute Mumbai?', answer: 'You can share your L1 network support job description, required vendors, location, shift schedule and experience criteria with the DIM placement desk. Relevant profiles and availability are confirmed individually.' },
    { question: 'What does an L1 Network Engineer typically handle?', answer: 'L1 network support commonly includes monitoring alerts, initial connectivity checks, ticket documentation, basic troubleshooting and escalation to higher support tiers. Define your network scope and escalation process when enquiring.' },
    { question: 'Can I request candidates with Zscaler, proxy or ClearPass experience?', answer: 'Specify Zscaler, proxy, ClearPass, routing and switching requirements in your hiring brief. Vendor-specific experience must be checked against individual profile details; it is not assumed for every candidate.' },
    { question: 'Are L1 network candidates screened for troubleshooting skills?', answer: 'DIM reviews profile information for role-relevant details before discussing referrals. Employers should validate network fundamentals and troubleshooting ability with their own technical interview or practical assessment.' },
    { question: 'Can candidates support night shifts or network operations rotations?', answer: 'Shift availability and preferences vary by person. Include 24/7 coverage, weekends, on-call duties and work location so the placement desk can confirm individual availability.' },
    { question: 'How do I confirm network candidate certifications and availability?', answer: 'Certifications, experience and current availability are candidate-specific. Ask the placement desk to confirm the information available for a particular profile before scheduling interviews.' },
    { question: 'Is there a placement fee for L1 Network Engineer hiring?', answer: 'No. DevOps Institute Mumbai does not charge employers a placement fee for candidate referrals. Contact the placement desk with your network support requirement.' }
  ]
};

export const serverAdminConfig: RoleDirectoryConfig = {
  path: '/server-administrator-candidates',
  label: 'Server Administrator',
  title: 'Hire Server Administrators.',
  description: 'Discuss server and systems administration profiles for infrastructure operations. Share your operating systems, hosting environment, responsibilities and shift needs to confirm relevant candidate availability.',
  roleName: 'Server and System Administrator Candidates',
  defaultRole: 'Server / System Administrator',
  defaultExperience: 'Any experience level',
  skills: ['Linux and server troubleshooting', 'System services and operational support', 'Monitoring, logs and incident response', 'Cloud or infrastructure operations', 'Scripting and routine automation', 'Candidate-specific server experience'],
  faqs: [
    { question: 'Where can I hire Server Administrators in Mumbai?', answer: 'DevOps Institute Mumbai offers candidate profiles relevant to server and systems administration. Share the operating systems, hosting environment, location and level of responsibility with the placement desk to discuss current availability.' },
    { question: 'What skills may a server administrator profile include?', answer: 'Depending on the candidate, profiles may include Linux, server operations, system troubleshooting, monitoring, logs, scripting, cloud infrastructure and incident handling. Confirm experience with the exact operating systems and platforms your team uses.' },
    { question: 'Can I hire Linux or Windows Server Administrators?', answer: 'State whether your role requires Linux, Windows Server or a mixed environment, along with relevant versions, tools and responsibilities. Candidate-specific experience should be confirmed with the placement desk.' },
    { question: 'Are Server Administrator candidates pre-screened?', answer: 'DIM reviews profile information for role-relevant skills and experience before discussing referrals. Your technical team should verify administration knowledge and operational readiness through its own assessment.' },
    { question: 'Can server administrators work shifts or on-call rotations?', answer: 'Shift, weekend and on-call availability varies by candidate. Include coverage requirements, location and expected start date so these can be checked individually.' },
    { question: 'How can I confirm server candidate experience and notice period?', answer: 'Ask the placement desk to confirm the candidate’s relevant experience, current availability and notice period. These details vary and can change over time.' },
    { question: 'Does DIM charge a placement fee for server administrator referrals?', answer: 'No. DIM does not charge employers a placement fee for candidate referrals. Contact the placement desk to discuss server administration roles.' }
  ]
};

export const serviceDeskConfig: RoleDirectoryConfig = {
  path: '/service-desk-candidates',
  label: 'Service Desk',
  title: 'Hire Service Desk Engineers.',
  description: 'Discuss service desk and helpdesk profiles for user support, ticket management and issue escalation. Share your service hours, ticketing tools, location and support expectations with our placement desk.',
  roleName: 'Service Desk and Helpdesk Engineer Candidates',
  defaultRole: 'Service Desk / Helpdesk Engineer',
  defaultExperience: 'Any experience level',
  skills: ['Ticket intake, categorization and updates', 'First-line troubleshooting and escalation', 'User support and clear communication', 'Operating system and application basics', 'Service-level and shift workflows', 'Candidate-specific support experience'],
  faqs: [
    { question: 'How can I hire Service Desk Engineers in Mumbai through DIM?', answer: 'Share your service desk or helpdesk job description, ticketing tools, location, service hours and shift pattern with the DIM placement desk. The team can discuss relevant candidate profiles and confirm current availability.' },
    { question: 'What does a Service Desk Engineer do?', answer: 'Service desk engineers receive and manage user requests, record and update tickets, resolve common issues, communicate progress and escalate incidents when required. Define your ticketing process, service levels and user environment when enquiring.' },
    { question: 'What skills may helpdesk candidate profiles include?', answer: 'Profiles may include technical support, ticket triage, operating system basics, customer issue resolution, communication and escalation experience. Background differs by candidate; confirm each person’s specific skills and experience.' },
    { question: 'Are Service Desk candidates pre-screened for communication skills?', answer: 'Candidate profile information is reviewed for role relevance before referrals are discussed. Employers should assess written and verbal communication, customer handling and documentation through their own interview process.' },
    { question: 'Can I hire service desk candidates for rotational or night shifts?', answer: 'Shift preferences vary by candidate. Include night coverage, weekends, rotation, location and expected joining date in your enquiry so individual availability can be confirmed.' },
    { question: 'Can DIM help with onsite, hybrid or remote helpdesk roles?', answer: 'You can specify the work arrangement and office location. Candidate location preferences and availability are confirmed individually by the placement desk.' },
    { question: 'Does DIM charge employers for Service Desk or Helpdesk referrals?', answer: 'No. DevOps Institute Mumbai does not charge employers a placement fee for candidate referrals. Contact the placement desk to discuss service desk hiring.' }
  ]
};

export const socAnalystConfig: RoleDirectoryConfig = {
  path: '/soc-security-analyst-candidates',
  label: 'SOC / Security Analyst L1',
  title: 'Hire L1 SOC and Security Analysts.',
  description: 'Discuss entry-level SOC and security operations hiring with the placement desk. Share your SIEM, alert triage, shift and location requirements so we can check relevant profiles and availability.',
  roleName: 'L1 SOC and Security Analyst Candidates',
  defaultRole: 'SOC / Security Analyst L1',
  defaultExperience: 'Any experience level',
  skills: ['Security alert triage and escalation', 'SIEM and log analysis', 'Incident documentation and response workflows', 'Network and operating system fundamentals', 'Threat monitoring and investigation basics', 'Candidate-specific security experience'],
  faqs: [
    { question: 'Where can I hire L1 SOC Analysts in Mumbai?', answer: 'DevOps Institute Mumbai can discuss profiles relevant to SOC and security operations roles. Share your job description, SIEM platform, location, shift schedule and experience requirements so the placement desk can check current candidate availability.' },
    { question: 'What does an L1 SOC Analyst typically do?', answer: 'L1 SOC analysts commonly monitor security alerts, perform initial triage, document findings and escalate potential incidents according to defined playbooks. Responsibilities depend on your tools, escalation process and security environment.' },
    { question: 'Can I find SOC candidates with SIEM experience?', answer: 'Specify the SIEM platform and the types of alert investigation required. Candidate tool exposure varies; the placement desk can confirm whether a profile lists relevant experience.' },
    { question: 'Are SOC Analyst candidates screened for security skills?', answer: 'DIM reviews profile information for role relevance before discussing referrals. Employers should validate security fundamentals, analytical judgment and incident-handling skills through their own technical interview and assessments.' },
    { question: 'Can L1 SOC candidates work 24/7 or rotational shifts?', answer: 'Shift availability is candidate-specific. Include overnight and weekend coverage, rotation, location and start date in your brief so the placement desk can confirm individual fit.' },
    { question: 'Can I hire candidates with security certifications?', answer: 'Certification details should be confirmed for each profile. Include any required certifications or equivalent experience in your hiring brief.' },
    { question: 'Does DIM charge employers a placement fee for SOC candidates?', answer: 'No. DevOps Institute Mumbai does not charge employers a placement fee for candidate referrals. Contact the placement desk to discuss SOC hiring.' }
  ]
};

export const cloudEngineerConfig: RoleDirectoryConfig = {
  path: '/cloud-engineer-candidates',
  label: 'Cloud Engineer',
  title: 'Hire AWS and Azure Cloud Engineers.',
  description: 'Review profiles with cloud infrastructure and operations experience. Specify AWS or Azure services, infrastructure ownership, location and seniority to confirm suitable profiles and availability.',
  roleName: 'AWS and Azure Cloud Engineer Candidates',
  defaultRole: 'Cloud Engineer (AWS / Azure)',
  defaultExperience: 'Any experience level',
  skills: ['AWS and Azure cloud services', 'Cloud infrastructure provisioning', 'Linux, networking and access fundamentals', 'Infrastructure as code and automation', 'Cloud monitoring and incident response', 'Candidate-specific platform experience'],
  faqs: [
    { question: 'How can I hire AWS or Azure Cloud Engineers in Mumbai?', answer: 'Share your cloud engineering job description, required platform, location, seniority and hiring timeline with the DevOps Institute Mumbai placement desk. Candidate fit and current availability are confirmed individually.' },
    { question: 'Can I request AWS or Azure-specific candidate profiles?', answer: 'Yes. Specify AWS, Azure or a multi-cloud requirement along with the services and level of responsibility involved. Platform experience varies by candidate and should be confirmed for each profile.' },
    { question: 'What skills may cloud engineer profiles include?', answer: 'Profiles may include cloud infrastructure, Linux, networking, Terraform, automation, monitoring, security fundamentals or cloud operations. Check each profile and interview candidates against your specific architecture and responsibilities.' },
    { question: 'Are Cloud Engineer candidates pre-screened?', answer: 'DIM reviews profile information for role-relevant skills, experience and projects before discussing referrals. Your team should independently assess hands-on cloud design, troubleshooting and operational experience.' },
    { question: 'Can I hire junior and experienced cloud engineers?', answer: 'You can share the expected experience level and ownership with the placement desk. Relevant profiles depend on individual backgrounds and current availability.' },
    { question: 'Can cloud engineers support on-call or shift requirements?', answer: 'Work schedules and on-call preferences vary. Include the coverage model, location and expected start date so candidate availability can be checked.' },
    { question: 'Does DIM charge a placement fee for Cloud Engineer hiring?', answer: 'No. DIM does not charge employers a placement fee for candidate referrals. Contact the placement desk to discuss AWS or Azure hiring needs.' }
  ]
};

export const websphereAdminConfig: RoleDirectoryConfig = {
  path: '/websphere-administrator-candidates',
  label: 'WebSphere Administrator',
  title: 'Hire WebSphere Administrators.',
  description: 'Tell us about your IBM WebSphere environment and administration requirements. The placement desk can check for relevant profiles and confirm candidate-specific experience and availability.',
  roleName: 'IBM WebSphere Administrator Candidates',
  defaultRole: 'WebSphere Administrator',
  defaultExperience: 'Any experience level',
  skills: ['IBM WebSphere Application Server administration', 'Application deployment and configuration', 'JVM and application server troubleshooting', 'Logs, monitoring and incident response', 'Middleware operations and change processes', 'Version and platform experience confirmed per profile'],
  faqs: [
    { question: 'How can I hire an IBM WebSphere Administrator in Mumbai?', answer: 'Send the placement desk your WebSphere job description, environment details, location, experience needs and hiring timeline. Relevant candidate profiles and availability can be confirmed individually.' },
    { question: 'Can I hire candidates with IBM WebSphere Application Server experience?', answer: 'Specify your WebSphere version, deployment setup and administration responsibilities. Do not assume middleware experience from other platforms; the placement desk can confirm details listed for relevant profiles.' },
    { question: 'What should I include in a WebSphere hiring brief?', answer: 'Include WebSphere versions, operating systems, clustering or deployment requirements, troubleshooting duties, shift coverage, location and expected start date. Details help determine whether available profiles align with the role.' },
    { question: 'Are WebSphere Administrator candidates technically screened?', answer: 'DIM reviews profile information for role relevance before discussing referrals. Your team should validate WebSphere administration, deployment and troubleshooting skills in its own interview process.' },
    { question: 'Can candidates support production middleware or rotational shifts?', answer: 'Production experience and shift availability vary by candidate. Share your support model and confirm individual background and availability with the placement desk.' },
    { question: 'Can DIM confirm WebSphere candidate availability and notice period?', answer: 'Yes. Candidate availability, notice period and location preference should be confirmed individually because these details may change.' },
    { question: 'Does DIM charge employers a placement fee for WebSphere roles?', answer: 'No. DevOps Institute Mumbai does not charge employers a placement fee for candidate referrals. Contact the placement desk with your WebSphere requirement.' }
  ]
};

export const mlopsDataopsConfig: RoleDirectoryConfig = {
  path: '/mlops-dataops-candidates',
  label: 'MLOps / DataOps',
  title: 'Hire MLOps and DataOps Engineers.',
  description: 'Discuss MLOps and DataOps hiring requirements with our placement desk. Share your data and ML platforms, pipeline responsibilities and experience needs to check relevant profiles and availability.',
  roleName: 'MLOps and DataOps Engineer Candidates',
  defaultRole: 'MLOps / DataOps Engineer',
  defaultExperience: 'Any experience level',
  skills: ['ML and data pipeline operations', 'Workflow orchestration and automation', 'Cloud platforms and infrastructure as code', 'Containerization and deployment workflows', 'Pipeline monitoring and reliability', 'Candidate-specific data or ML projects'],
  faqs: [
    { question: 'Where can I hire MLOps or DataOps Engineers in Mumbai?', answer: 'Share your MLOps or DataOps job description, data platform, ML workflow, location and hiring timeline with the DIM placement desk. We can check for relevant profiles and confirm current availability.' },
    { question: 'What does an MLOps or DataOps Engineer do?', answer: 'MLOps roles often focus on operationalizing machine-learning workflows, while DataOps roles improve the automation, reliability and observability of data pipelines. Responsibilities vary, so describe your actual stack and workflow.' },
    { question: 'Can I request profiles with Airflow, Kubeflow or Databricks experience?', answer: 'List required tools and the depth of hands-on experience in your brief. Tool experience is candidate-specific and must be confirmed against available profile details.' },
    { question: 'Are MLOps and DataOps candidates pre-screened?', answer: 'DIM reviews profile information for role relevance before discussing referrals. Employers should assess pipeline design, data or model deployment, automation and production operations through their own technical process.' },
    { question: 'Can candidates support cloud-based data and ML platforms?', answer: 'Cloud platform exposure varies by candidate. Specify AWS, Azure, Google Cloud or other required services and confirm individual experience with the placement desk.' },
    { question: 'Can DIM confirm candidate project experience and availability?', answer: 'The placement desk can discuss candidate-specific projects and current availability based on the profile. Joining timelines and location preferences should be reconfirmed before interviews.' },
    { question: 'Does DIM charge a placement fee for MLOps or DataOps hiring?', answer: 'No. DIM does not charge employers a placement fee for candidate referrals. Contact the placement desk to discuss MLOps or DataOps openings.' }
  ]
};

export const databaseAdminConfig: RoleDirectoryConfig = {
  path: '/database-administrator-candidates',
  label: 'Database Administrator',
  title: 'Hire Database Administrators.',
  description: 'Share your database platform, administration responsibilities and support model with our placement desk. We can check whether relevant profiles are available and confirm role-specific experience.',
  roleName: 'Database Administrator Candidates',
  defaultRole: 'Database Administrator',
  defaultExperience: 'Any experience level',
  skills: ['Database administration and maintenance', 'Backup, restore and recovery operations', 'Performance monitoring and query analysis', 'Access control and database security', 'Incident response and availability', 'Database platform experience confirmed per profile'],
  faqs: [
    { question: 'How can I hire Database Administrators in Mumbai?', answer: 'Send the DIM placement desk your database job description, platforms, location, experience level and hiring timeline. The team can check for relevant profiles and confirm current availability.' },
    { question: 'Can I request a DBA for a specific database platform?', answer: 'Specify the platform, such as MySQL, PostgreSQL, Oracle or SQL Server, and the administration responsibilities required. Database familiarity alone does not establish DBA experience; candidate-specific administration experience must be confirmed.' },
    { question: 'What responsibilities should I list for a Database Administrator role?', answer: 'Describe backup and recovery, performance tuning, access control, monitoring, high availability, incident response and on-call duties as applicable. A detailed brief helps the placement desk compare actual profile experience.' },
    { question: 'Are Database Administrator candidates screened for technical skills?', answer: 'DIM reviews profile information for role relevance before discussing referrals. Employers should independently assess database operations, recovery procedures, security and performance troubleshooting.' },
    { question: 'Can I hire DBAs with production or on-call experience?', answer: 'Production and on-call experience vary by candidate. Include your database criticality and support schedule, then confirm relevant experience and availability for each profile.' },
    { question: 'Can DIM confirm a DBA candidate’s availability and notice period?', answer: 'Yes. Availability, notice period and location preference are candidate-specific and can change. Confirm the latest details with the placement desk before arranging interviews.' },
    { question: 'Does DIM charge a placement fee for Database Administrator candidates?', answer: 'No. DevOps Institute Mumbai does not charge employers a placement fee for candidate referrals. Contact the placement desk to discuss DBA hiring.' }
  ]
};
