// =============================================================================
// portfolioData.ts — Single source of truth for all portfolio content
// =============================================================================

export interface ProjectData {
  id: string;
  shortTitle: string;
  category: string;
  summary: string;
  title: string;
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
  role: "Information Technology Graduate | Systems & User Support",
  location: "Upi, Gamu, Isabela, Philippines",
  email: "balmacedamico09@gmail.com",
  phone: "+63 994 158 6734",
  photo: "/images/profile/mico.png",
  education: {
    degree:
      "Bachelor of Science in Information Technology, Major in Web and Mobile Application Development",
    school: "Isabela State University, Ilagan Campus",
    period: "Graduated 2026",
  },
  certification: {
    title: "Information Technology Specialist in Databases",
    shortTitle: "IT Specialist, Databases",
    date: "Awarded June 21, 2024",
    issuer: "Certiport, a Pearson VUE business",
    code: "5UBH-4wUQ",
    certificateUrl: "/it-specialist-databases.pdf",
    verifyUrl: "https://verify.certiport.com",
  },
  bio: "BS Information Technology graduate with hands-on experience supporting users, resolving software and web application issues, documenting workflows, and maintaining accurate digital records. Developed and deployed the CollegeBound Admission Test System and assisted staff during live operations. Adaptable, patient, and quick to learn new software, with communication, problem solving, and a service-oriented approach.",
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
    description:
      "Official campus admissions platform deployed for ISU-Ilagan university operations. Processes 3,700+ examinees with automated score computation, batch scheduling, performance level classification, competency profiling, and role-based administrative workflows.",
    tags: ["PHP", "MySQL", "JavaScript", "Tailwind CSS", "Server Deployment", "Exam Analytics"],
  },
  {
    id: "mybizmate-performance",
    shortTitle: "MyBizMate Performance",
    category: "Work reports & KPI tracking",
    summary: "Daily work logs, reviews and KPIs in one place.",
    title: "MyBizMate Performance: Employee Work Reporting & KPI Tracking System",
    description:
      "Internal enterprise web app for employee daily work reports, KPI tracking, and review. Employees log their work in time blocks, heads validate the reports, and supervisors monitor them with analytics, with role-based access enforced in the database and PDF and Word exports.",
    tags: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Material UI", "Row Level Security"],
  },
  {
    id: "divineshield",
    shortTitle: "DivineShield",
    category: "Nutrition program management",
    summary: "One system for a nutrition program's feeding sites.",
    title: "DivineShield: Role-Based Feeding Program Management System",
    description:
      "Role-based system designed for MAINPI (Minister's Association Integrated Nutrition Program Inc.) and its feeding sites. Admin, staff, and church leader portals handle child registration, nutritional review based on WHO BMI-for-age rules, RFID attendance, analytics, and audit logs.",
    tags: ["PHP", "MySQL", "JavaScript", "RFID Attendance", "Expert System", "BigQuery"],
  },
  {
    id: "agosph",
    shortTitle: "AgosPH",
    category: "Flood data & mapping",
    summary: "See the flood before it arrives.",
    title: "AgosPH: Geospatial Flood-Data Workbench for Ilagan, Isabela",
    description:
      "Prototype geospatial flood-data workbench for Ilagan, Isabela, with 3D and 2D maps, flood scenario playback, sensor monitoring with alert thresholds, an incident log, and exportable reports. It runs on demonstration and imported data and is not an operational flood forecast.",
    tags: ["React", "TypeScript", "Python", "FastAPI", "CesiumJS", "MapLibre"],
  },
  {
    id: "nstp-system",
    shortTitle: "Enlistra",
    category: "Enrollment & allocation",
    summary: "Less administration. More room for education.",
    title: "Enlistra: NSTP Enrollment & Automatic Section Allocation System",
    description:
      "Automated university NSTP registration and class management platform featuring a Fuzzy Logic-Based Component Suggestion Engine, serial number generation, master list management, CSV bulk student ingestion, and demographic reporting.",
    tags: ["PHP", "MySQL", "Fuzzy Logic", "Tailwind CSS", "Algorithm", "Sectioning"],
  },
  {
    id: "biometrics-system",
    shortTitle: "APMS",
    category: "Biometrics & computer vision",
    summary: "A more seamless way to show up and check in.",
    title: "Biometric & Facial Recognition Attendance System",
    description:
      "Contactless automated attendance system integrating camera facial recognition feeds with fingerprint biometric sensors for real-time student verification and access logging.",
    tags: ["Computer Vision", "Biometrics", "MySQL", "Hardware Integration"],
  },
];

// ---------------------------------------------------------------------------
// Skills & Certification
// ---------------------------------------------------------------------------
export const TECH_STACK = [
  "HTML5",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "PHP",
  "Node.js",
  "MySQL",
  "SQL",
  "Supabase",
  "Git",
  "GitHub",
  "XAMPP",
  "Vercel",
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Customer Experience & User Support",
    skills: [
      "Customer Service & User Support",
      "Clear Written & Verbal Communication",
      "Patience & Active Listening",
      "Issue Resolution & Follow-up",
      "Problem Solving & User Empathy",
      "User Assistance & Onboarding",
    ],
  },
  {
    title: "Systems, Testing & Data",
    skills: [
      "Software & Web Application Support",
      "Troubleshooting & Diagnostics",
      "Feature Testing & Quality Assurance",
      "System Workflow Documentation",
      "Attention to Detail & Data Accuracy",
      "Data Validation & Excel Records",
    ],
  },
  {
    title: "Tech Stack",
    skills: TECH_STACK,
  },
];

// ---------------------------------------------------------------------------
// AI-Assisted & Agentic Coding
// ---------------------------------------------------------------------------
export interface AiTool {
  name: string;
  note: string;
}

export const AI_TOOLS: AiTool[] = [
  { name: "Claude", note: "AI assistant by Anthropic" },
  { name: "Claude Code", note: "Agentic coding in the terminal" },
  { name: "Cursor AI", note: "AI-powered code editor" },
  { name: "ChatGPT", note: "AI assistant by OpenAI" },
];

// ---------------------------------------------------------------------------
// Support Workflow
// ---------------------------------------------------------------------------
export interface SupportStep {
  title: string;
  text: string;
}

export const SUPPORT_STEPS: SupportStep[] = [
  { title: "Listen", text: "Let the user explain, then ask the questions that matter." },
  { title: "Reproduce", text: "Recreate the problem so the fix targets the real cause." },
  { title: "Fix", text: "Resolve it, or escalate it with clear notes." },
  { title: "Document", text: "Write down the steps so the next fix is faster." },
  { title: "Follow up", text: "Check back to make sure it stays fixed." },
];

// ---------------------------------------------------------------------------
// Experience
// ---------------------------------------------------------------------------
export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Web Development Intern at MIS Office",
    organization:
      "Management Information Systems (MIS) Office, Isabela State University, Ilagan Campus",
    period: "January - April 2026",
    bullets: [
      "Developed and deployed the CollegeBound Admission Test System for actual university operations.",
      "Assisted staff users with system navigation, answering questions, and providing live issue resolution during testing operations.",
      "Tested features, troubleshot software and web application issues, and documented system workflows.",
      "Maintained accurate database-driven records using PHP and MySQL.",
      "Gathered user feedback, practiced clear communication, and coordinated with the MIS team to continuously improve the system.",
    ],
  },
];
