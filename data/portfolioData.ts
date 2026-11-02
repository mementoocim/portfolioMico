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
  role: "Information Technology Graduate | Systems & User Support",
  location: "Upi, Gamu, Isabela, Philippines",
  email: "balmacedamico09@gmail.com",
  phone: "+63 994 158 6734",
  photo: "/images/profile/mico.png",
  resumeUrl: "/resume.pdf",
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
    type: "Production Campus Infrastructure, Deployed on ISU-Ilagan Campus Server",
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
    id: "biometrics-system",
    shortTitle: "APMS",
    category: "Biometrics & computer vision",
    summary: "A more seamless way to show up and check in.",
    title: "Biometric & Facial Recognition Attendance System",
    type: "Computer Vision & Hardware Integration",
    image: "/images/projects/apms-attendance.png",
    imageWidth: 1817,
    imageHeight: 866,
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
    skills: [
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
    ],
  },
  {
    title: "AI-Assisted & Agentic Development",
    skills: [
      "Claude",
      "Claude Code",
      "ChatGPT",
      "Cursor AI",
      "Agentic Coding",
      "AI-Assisted Development",
    ],
  },
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
