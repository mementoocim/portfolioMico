// =============================================================================
// portfolioData.ts — Single source of truth for all portfolio content
// =============================================================================

export interface ProjectData {
  id: string;
  shortTitle: string;
  category: string;
  summary: string;
  title: string;
  type: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  description: string;
  tags: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  bullets: string[];
}

// ---------------------------------------------------------------------------
// Personal Info
// ---------------------------------------------------------------------------
export const PERSONAL = {
  name: "Mico Balmaceda",
  role: "Fresh Graduate / Entry-Level Systems & Full-Stack Developer",
  location: "Upi, Gamu, Isabela, Philippines",
  email: "balmacedamico09@gmail.com",
  phone: "+63 994 158 6734",
  photo: "/images/profile/mico.png",
  education: {
    degree: "Bachelor of Science in Information and Communications Technology",
    school: "Isabela State University — Ilagan Campus",
    period: "2021 – 2026",
  },
  certification: {
    title: "Information Technology Specialist in Databases",
    date: "Passed June 2024",
    issuer: "Certiport — A Pearson VUE Business",
  },
  bio: "Recent BSICT graduate with hands-on experience developing and deploying campus-level production systems, relational database architecture, and full-stack web applications. Seeking an entry-level software or systems development role.",
};

// ---------------------------------------------------------------------------
// Projects
// ---------------------------------------------------------------------------
export const PROJECTS: ProjectData[] = [
  {
    id: "cat-system",
    shortTitle: "CollegeBound",
    category: "Admissions & enrollment",
    summary: "A clearer path from applicant to university student.",
    title: "CollegeBound: Digital College Admission Test & Enrollment System",
    type: "Production Campus Infrastructure — Deployed on ISU-Ilagan Campus Server",
    image: "/images/projects/cat-system.jpg",
    imageWidth: 1920,
    imageHeight: 969,
    description:
      "Official campus admissions platform deployed for ISU-Ilagan university operations. Processes 3,700+ examinees with automated score computation, batch scheduling, performance level classification, competency profiling, and role-based administrative workflows.",
    tags: ["PHP", "MySQL", "JavaScript", "Tailwind CSS", "Server Deployment", "Exam Analytics"],
  },
  {
    id: "nstp-system",
    shortTitle: "Enlistra",
    category: "Enrollment & allocation",
    summary: "Less administration. More room for education.",
    title: "Enlistra: NSTP Enrollment & Automatic Section Allocation System",
    type: "Campus Management & Algorithmic Allocation System",
    image: "/images/projects/nstp-system.jpg",
    imageWidth: 1920,
    imageHeight: 969,
    description:
      "Automated university NSTP registration and class management platform featuring a Fuzzy Logic-Based Component Suggestion Engine, serial number generation, master list management, CSV bulk student ingestion, and demographic reporting.",
    tags: ["PHP", "MySQL", "Fuzzy Logic", "Tailwind CSS", "Algorithm", "Sectioning"],
  },
  {
    id: "rankup-system",
    shortTitle: "RankUp",
    category: "Faculty evaluation",
    summary: "Turning student feedback into a clearer picture.",
    title: "RankUp: Digital Faculty Evaluation System",
    type: "Institutional Performance System",
    image: "/images/projects/rankup-system.jpg",
    imageWidth: 1376,
    imageHeight: 768,
    description:
      "Performance evaluation portal with automated rubric calculation, analytics dashboard, role-based administrative reporting, and anonymized student feedback.",
    tags: ["Full-Stack Web", "MySQL", "Role-Based Access"],
  },
  {
    id: "biometrics-system",
    shortTitle: "Beyond the roll call",
    category: "Biometrics & computer vision",
    summary: "A more seamless way to show up and check in.",
    title: "Biometric & Facial Recognition Attendance System",
    type: "Computer Vision & Hardware Integration",
    image: "/images/projects/biometrics-system.jpg",
    imageWidth: 1376,
    imageHeight: 768,
    description:
      "Contactless automated attendance system integrating camera facial recognition feeds with fingerprint biometric sensors for real-time student verification and access logging.",
    tags: ["Computer Vision", "Biometrics", "MySQL", "Hardware Integration"],
  },
];

// ---------------------------------------------------------------------------
// Skills & Certification
// ---------------------------------------------------------------------------
export const SKILLS: SkillCategory[] = [
  {
    title: "Database & Backend",
    skills: [
      "MySQL",
      "SQL",
      "Database Normalization",
      "Schema Design",
      "Data Integrity",
      "PHP",
      "REST APIs",
    ],
  },
  {
    title: "Frontend & Web",
    skills: ["JavaScript (ES6+)", "TypeScript", "React", "Next.js", "HTML5 / CSS3", "Tailwind CSS"],
  },
  {
    title: "Systems & Support",
    skills: [
      "System Deployment & Maintenance",
      "Network Setup",
      "Computer Troubleshooting",
      "AI-Assisted Development",
      "Git & GitHub",
      "OpenCV",
      "Biometrics & Sensor Integration",
    ],
  },
];

// ---------------------------------------------------------------------------
// Experience
// ---------------------------------------------------------------------------
export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Systems Developer & OJT Trainee",
    organization:
      "Management Information Systems (MIS) Office — Isabela State University, Ilagan Campus",
    period: "January 2026 – April 2026",
    bullets: [
      "Built and deployed the production Digital College Admission Test & Enrollment System used by the university.",
      "Optimized MySQL schemas and improved query performance for academic evaluation workloads.",
      "Assisted with campus server administration, network setup, and computer hardware troubleshooting.",
      "Collaborated with faculty and department staff to digitize manual workflows into automated pipelines.",
    ],
  },
  {
    role: "Social Media Page Administrator & Video Editor",
    organization: "Public Figure Facebook Page (~5 Million Followers)",
    period: "2022 – Present",
    bullets: [
      "Managed and maintained a Facebook page with nearly 5 million followers.",
      "Handled video editing, post scheduling, content uploads, and community moderation.",
      "Maintained consistent posting cadence and audience engagement across the platform.",
    ],
  },
];
