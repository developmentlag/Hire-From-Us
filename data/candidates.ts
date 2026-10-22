export interface Candidate {
  id: string;
  name: string;
  type: 'fresher' | 'experienced';
  role: string;
  bestFit: string;
  experience: string;
  location: string;
  noticePeriod: string;
  skills: string[];
  educationOrBackground: string;
  highlights: string[];
  capstoneProject: string;
  certifications?: string[];
  avatarInitial: string;
  verifiedBadge?: boolean;
}

export const freshersCandidates: Candidate[] = [
  {
    id: 'fresher-1',
    name: 'Pratham Soni',
    type: 'fresher',
    role: 'Junior DevOps / Cloud Support',
    bestFit: 'Junior DevOps / Cloud Support',
    experience: 'Fresher (Screened & Capstone Ready)',
    location: 'Mumbai / Remote-ready',
    noticePeriod: 'Immediate',
    skills: ['AWS', 'Linux', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD Basics', 'Bash'],
    educationOrBackground: 'B.E. Computer Engineering | DIM DevOps Graduate',
    highlights: [
      'Configured automated CI/CD pipelines deploying Docker containers to AWS ECS',
      'Hands-on with Terraform IaC modules for multi-AZ VPC and EC2 provisioning',
      'Strong troubleshooting skills in Linux networking, file permissions, and systemd'
    ],
    capstoneProject: 'Automated 3-Tier Web Architecture on AWS using Terraform & GitHub Actions',
    certifications: ['AWS Certified Cloud Practitioner (Course Aligned)', 'DIM Certified DevOps Specialist'],
    avatarInitial: 'PS',
    verifiedBadge: true
  },
  {
    id: 'fresher-2',
    name: 'Omkar Padiyar',
    type: 'fresher',
    role: 'Monitoring / Cloud Operations',
    bestFit: 'Monitoring / Cloud Operations',
    experience: 'Fresher (Screened & Capstone Ready)',
    location: 'Navi Mumbai / Remote-ready',
    noticePeriod: 'Immediate',
    skills: ['SQL', 'Linux', 'AWS', 'Prometheus', 'Grafana', 'CloudWatch', 'Shell Basics'],
    educationOrBackground: 'B.Sc. Information Technology | DIM Cloud Graduate',
    highlights: [
      'Built real-time system metric dashboards using Prometheus node_exporter and Grafana',
      'Configured Alertmanager notifications to Slack/Email for CPU & memory saturation',
      'Proficient in database query optimization, log analysis, and incident alerting'
    ],
    capstoneProject: 'Enterprise Infrastructure Monitoring & Alerting Suite with Prometheus & Grafana',
    certifications: ['DIM Certified Cloud & Monitoring Engineer'],
    avatarInitial: 'OP',
    verifiedBadge: true
  },
  {
    id: 'fresher-3',
    name: 'Ashwini Pillai',
    type: 'fresher',
    role: 'Product Support / Technical Support',
    bestFit: 'Product Support / Technical Support',
    experience: 'Fresher (Screened & Capstone Ready)',
    location: 'Mumbai / Remote',
    noticePeriod: 'Immediate',
    skills: ['Linux-hosted app support', 'SQL', 'Customer issue resolution', 'Nginx', 'Log Analysis', 'HTTP Status Debugging'],
    educationOrBackground: 'B.Sc. Computer Science | DIM Support Track Graduate',
    highlights: [
      'Specialized in diagnosing application crashes, DB connection timeouts, and web server logs',
      'Comfortable communicating root cause analyses (RCA) and coordinating with engineering teams',
      'Solid command of SQL joins, indexing, and Linux diagnostic tools (top, netstat, curl)'
    ],
    capstoneProject: 'Web Application High-Availability Deployment & Disaster Recovery Runbook',
    certifications: ['DIM Certified L1 Systems & Support Associate'],
    avatarInitial: 'AP',
    verifiedBadge: true
  },
  {
    id: 'fresher-4',
    name: 'Poornima Umesh Kamatar',
    type: 'fresher',
    role: 'Cloud Support & Linux Specialist',
    bestFit: 'Cloud Support Engineer / Linux Support',
    experience: 'Fresher (Screened & Capstone Ready)',
    location: 'Mumbai / Remote-ready',
    noticePeriod: 'Immediate',
    skills: ['AWS (EC2, S3, IAM, VPC)', 'Linux Administration', 'Shell Scripting', 'Docker', 'Git'],
    educationOrBackground: 'B.Tech IT | DIM Cloud Operations Fellow',
    highlights: [
      'Provisioned secure AWS cloud infrastructures using IAM least-privilege policies',
      'Automated daily backup routines and log rotators using Bash shell scripts',
      'Trained in L1/L2 incident escalation workflows and SLA management'
    ],
    capstoneProject: 'Secure Multi-Account Cloud Architecture with Automated S3 Lifecycle Rules',
    certifications: ['AWS Cloud Practitioner Ready'],
    avatarInitial: 'PK',
    verifiedBadge: true
  },
  {
    id: 'fresher-5',
    name: 'Yash Deshmukh',
    type: 'fresher',
    role: 'Junior DevOps & NOC Engineer',
    bestFit: 'NOC Engineer / Junior DevOps',
    experience: 'Fresher (Screened & Capstone Ready)',
    location: 'Pune / Mumbai / Remote',
    noticePeriod: 'Immediate',
    skills: ['Docker', 'Jenkins', 'Git', 'Linux', 'CloudWatch', 'Python Basics'],
    educationOrBackground: 'B.E. Electronics & Telecomm | DIM DevOps Graduate',
    highlights: [
      'Containerized multi-service microservices and orchestrated local dev with Docker Compose',
      'Built automated CI pipelines with Jenkins triggers on GitHub pull requests',
      'Monitored live server metrics, synthetic ping tests, and error rates via CloudWatch'
    ],
    capstoneProject: 'Microservices Continuous Delivery Pipeline with Automated Testing',
    certifications: ['DIM Certified DevOps Fellow'],
    avatarInitial: 'YD',
    verifiedBadge: true
  }
];

export const experiencedCandidates: Candidate[] = [
  {
    id: 'exp-1',
    name: 'Aishwini Priya Pillai',
    type: 'experienced',
    role: 'Product Support Engineer',
    bestFit: 'Product Support / Cloud Support',
    experience: '2.5 Years Experience',
    location: 'Mumbai / Hybrid',
    noticePeriod: '15 Days',
    skills: ['Linux-hosted DB-backed app support', 'SQL', 'AWS basics', 'Incident Response', 'SLA Adherence', 'MySQL', 'PostgreSQL'],
    educationOrBackground: 'B.E. Computer Science | 2.5 yrs in B2B SaaS Support',
    highlights: [
      'Handled Tier-2/Tier-3 customer escalation tickets with 98.4% CSAT adherence',
      'Executed complex SQL queries and DB performance checks during live production incidents',
      'Collaborated directly with core backend developers to patch recurring production bugs'
    ],
    capstoneProject: 'Production Incident Triage Engine & Automated RCA Knowledgebase',
    certifications: ['AWS Certified Solutions Architect Associate', 'ITIL Foundation'],
    avatarInitial: 'AP',
    verifiedBadge: true
  },
  {
    id: 'exp-2',
    name: 'Abhijit Jadhav',
    type: 'experienced',
    role: 'Application & Production Support Lead',
    bestFit: 'Production Support / CloudOps / Infra Support',
    experience: '3.5 Years Experience',
    location: 'Navi Mumbai / Remote',
    noticePeriod: 'Immediate',
    skills: ['Linux troubleshooting', 'Grafana monitoring', 'AWS/Azure exposure', 'Shell Scripting', 'Incident Management', 'Logstash'],
    educationOrBackground: 'B.Sc. IT | 3.5 yrs supporting high-transaction banking & fintech apps',
    highlights: [
      'Led 24x7 rotation support for high-throughput transactional APIs handling 2M+ daily requests',
      'Spearheaded transition from legacy monitoring to Grafana + Prometheus distributed alerting',
      'Reduced Mean Time to Resolution (MTTR) by 35% through custom Linux automation runbooks'
    ],
    capstoneProject: 'High-Throughput Financial Services Cloud Observability & SLA Monitoring',
    certifications: ['Red Hat Certified System Administrator (RHCSA)', 'Azure Fundamentals AZ-900'],
    avatarInitial: 'AJ',
    verifiedBadge: true
  },
  {
    id: 'exp-3',
    name: 'Sakshi Yevle',
    type: 'experienced',
    role: 'DevOps & Platform Engineer',
    bestFit: 'DevOps Engineer / Platform Engineer',
    experience: '3+ Years Experience',
    location: 'Mumbai / Remote-ready',
    noticePeriod: '30 Days',
    skills: ['Kubernetes (EKS)', 'Terraform IaC', 'AWS Architecture', 'GitLab CI/CD', 'Docker', 'Helm', 'ArgoCD'],
    educationOrBackground: 'B.E. Computer Engineering | 3+ yrs scaling Kubernetes microservices',
    highlights: [
      'Designed and provisioned resilient Kubernetes clusters on AWS EKS using Terraform modules',
      'Implemented GitOps deployment workflow using ArgoCD and Helm charts with zero downtime',
      'Standardized CI/CD pipelines reducing developer build-to-deploy time from 40m to 7m'
    ],
    capstoneProject: 'Multi-Region GitOps Kubernetes Delivery Platform on AWS EKS',
    certifications: ['Certified Kubernetes Administrator (CKA)', 'HashiCorp Certified: Terraform Associate'],
    avatarInitial: 'SY',
    verifiedBadge: true
  },
  {
    id: 'exp-4',
    name: 'Vishal Jadhav',
    type: 'experienced',
    role: 'SRE & Infrastructure Engineer',
    bestFit: 'SRE / Infrastructure Engineer / Automation',
    experience: '5+ Years Experience',
    location: 'Mumbai / Remote',
    noticePeriod: '15 Days',
    skills: ['SRE Practices', 'AWS & Azure', 'Terraform', 'Prometheus', 'Grafana', 'Python', 'Chaos Engineering', 'Ansible'],
    educationOrBackground: 'M.Sc. Computer Science | 5 yrs in Site Reliability Engineering',
    highlights: [
      'Maintained 99.99% system availability across distributed microservices on AWS & Azure',
      'Automated disaster recovery drills and chaos experiments (Chaos Mesh) to uncover hidden bottlenecks',
      'Wrote comprehensive Python scripts for auto-scaling and automatic cloud cost governance'
    ],
    capstoneProject: 'Resilient Multi-Cloud Hybrid Infrastructure with Automated Failover',
    certifications: ['AWS Certified DevOps Engineer Professional', 'Certified Kubernetes Security Specialist (CKS)'],
    avatarInitial: 'VJ',
    verifiedBadge: true
  }
];
