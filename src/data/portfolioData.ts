export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  company: string;
  role: string;
  period: string;
  category: "Full-Stack" | "AI & Lead" | "UI/UX";
  tech: string[];
  summary: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  engineeringDecisions: string[];
  outcomes: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  highlight: string;
  bullets: string[];
  tags: string[];
}

export interface AchievementItem {
  title: string;
  subtitle: string;
  detail: string;
  tag: string;
}

export const personalInfo = {
  name: "HARIKANTH S S",
  role: "Full-Stack Developer",
  headline: "Architecting scalable web applications, RESTful APIs, and AI-driven platforms.",
  summary:
    "Results-oriented Full-Stack Developer with hands-on experience designing and delivering web-based ERP, CRM, and AI-driven applications. Skilled in React.js, Next.js, Spring Boot, Node.js, REST API development, and SQL/NoSQL databases. Completed a 6-month AI/ML internship at Grevya Technologies where I led 2 projects as Team Lead, handling bug fixing, functional testing, and team coordination.",
  location: "Coimbatore, Tamil Nadu",
  email: "hkhk7367@gmail.com",
  phone: "+91 86672 10929",
  linkedIn: "https://www.linkedin.com/in/harikanthss/",
  github: "https://github.com/SSHK03",
  repository: "https://github.com/SSHK03/Harikanth-Portfolio.git",
  livePortfolio: "https://harikanthportfolio.lovable.app",
  resumePath: "/Harikanth_SS_Resume.pdf",
};

export const educationInfo = {
  institution: "Sri Krishna College of Technology (Autonomous)",
  location: "Coimbatore, Tamil Nadu",
  degree: "Bachelor of Technology — Information Technology",
  graduation: "Graduation: June 2027",
  cgpa: "7.64 / 10",
};

export const experiences: ExperienceItem[] = [
  {
    role: "AI/ML Intern — Team Lead",
    company: "Grevya Technologies Pvt Ltd",
    location: "Coimbatore",
    period: "Feb 2026 – Jul 2026",
    highlight: "6-Month AI/ML Internship & Team Leadership across 2 Web Products",
    bullets: [
      "Successfully completed a 6-month AI/ML internship, contributing to 2 full-scale web projects — iRookee (job/internship portal) and HR Portal — serving as Team Lead on both.",
      "Led and coordinated a development team across both projects, overseeing task allocation, progress tracking, and delivery timelines in an Agile environment.",
      "Performed comprehensive bug fixing and functional testing across modules, reducing defect rates and ensuring production-ready quality before each release.",
      "Demonstrated dedication, technical aptitude, and professionalism throughout the internship — recognized in the official completion certificate issued by the Director.",
    ],
    tags: ["Team Lead", "Agile", "Bug Fixing", "Functional Testing", "iRookee", "HR Portal"],
  },
  {
    role: "Full-Stack Developer Intern",
    company: "AJ&VG Media",
    location: "Bangalore",
    period: "May 2025",
    highlight: "Textile Industry ERP & CRM System",
    bullets: [
      "Architected and delivered a web-based ERP and CRM application for the Textile Industry, centralising records for 50+ employees and buyers and reducing manual data entry effort significantly.",
      "Built a responsive React.js frontend integrated with Spring Boot REST APIs, improving component structure and API response handling for faster page performance.",
      "Optimised SQL database schema and queries across 5+ operational modules, improving data retrieval speed and ensuring consistent data integrity.",
    ],
    tags: ["React.js", "Spring Boot", "REST APIs", "SQL Optimization", "ERP / CRM"],
  },
];

export const projectsData: Record<string, Project> = {
  "irookee-job-internship-portal": {
    slug: "irookee-job-internship-portal",
    title: "iRookee — Job & Internship Portal",
    subtitle: "Web-Based Job & Internship Matching Platform",
    company: "Grevya Technologies Pvt Ltd",
    role: "Team Lead & AI/ML Intern",
    period: "Feb 2026 – Jul 2026",
    category: "AI & Lead",
    tech: ["React.js", "Node.js", "Python", "REST APIs", "Agile", "QA & Testing"],
    summary:
      "Led the development of iRookee, a web-based job and internship portal, managing a team of developers and coordinating feature delivery across the full development lifecycle.",
    problem:
      "Job seekers and recruiters required a cohesive portal to discover opportunities, manage applications, and review candidate profiles without manual friction.",
    solution:
      "Directed the development team in building iRookee. Managed sprint planning, task allocation, bug fixing, and functional testing to deliver a production-ready application across all core modules.",
    keyFeatures: [
      "Integrated job and internship listing management",
      "Candidate proposal and application tracking flows",
      "Full development lifecycle coordination across sprint cycles",
      "Comprehensive QA testing and bug fixing prior to release",
      "Agile task allocation and team progress tracking",
    ],
    engineeringDecisions: [
      "Enforced pre-release testing cycles to reduce defect rates across core user flows",
      "Standardized REST API contract specifications between React components and backend endpoints",
      "Organized modular UI structures for maintainable candidate workflow views",
    ],
    outcomes: [
      "Delivered production-ready modules on target project schedule",
      "Maintained system reliability through thorough QA regression testing",
      "Earned official recognition certificate from the Director",
    ],
  },
  "hr-management-portal": {
    slug: "hr-management-portal",
    title: "HR Portal",
    subtitle: "Enterprise HR & Workflow System",
    company: "Grevya Technologies Pvt Ltd",
    role: "Team Lead & AI/ML Intern",
    period: "Feb 2026 – Jul 2026",
    category: "AI & Lead",
    tech: ["React.js", "Node.js", "REST APIs", "Data Modeling", "Agile", "Bug Fixing"],
    summary:
      "Led the design and development of an HR management portal, coordinating the team to deliver modules for employee records, attendance, and workflow management.",
    problem:
      "Internal HR workflows suffered from disconnected attendance logs, manual record updates, and slow approval processes across team departments.",
    solution:
      "Led the design and build of a centralized HR portal. Coordinated team tasks to deliver employee records, attendance monitoring, and administrative workflows with rigorous pre-release testing.",
    keyFeatures: [
      "Employee records management with structured data lookup",
      "Attendance tracking and automated workflow authorization",
      "Role-based access control for administrative and staff access",
      "Functional testing cycles and critical bug resolution prior to release",
    ],
    engineeringDecisions: [
      "Architected clean state management for tabular data handling and filtering",
      "Implemented strict bug resolution workflows to guarantee high data reliability",
    ],
    outcomes: [
      "Centralized internal employee records and attendance workflows",
      "Resolved critical pre-release defects to maintain system reliability",
    ],
  },
  "kl-traders-agricultural-exports": {
    slug: "kl-traders-agricultural-exports",
    title: "KL Traders — Agricultural Exports Website",
    subtitle: "Production B2B Export Portal with Protected Admin Workspace",
    company: "Full-Stack Project",
    role: "Full-Stack Developer",
    period: "2026",
    category: "Full-Stack",
    tech: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Supabase Auth",
      "Supabase Storage",
      "Netlify",
    ],
    liveUrl: "https://kltraders.netlify.app",
    summary:
      "Designed and developed a premium agricultural exports website for KL Traders using Next.js 16, React 19, TypeScript, and Tailwind CSS v4, deployed on Netlify.",
    problem:
      "Agricultural export buyers and managers needed a fast, secure website with a protected portal to process quotes, upload invoices, and manage buyer inquiries.",
    solution:
      "Engineered a production web application with Next.js 16 and Supabase. Built a public catalog alongside a protected admin dashboard secured with Supabase Auth and Storage for quotes and invoices.",
    keyFeatures: [
      "Modern Next.js 16 & React 19 architecture optimized for performance",
      "Supabase integration for database management, storage (invoices, quotes, product images), and auth",
      "Protected admin dashboard for managing inquiries, quote uploads, and invoice uploads",
      "Role-based access control with Supabase Auth securing admin pages and API routes",
      "Automatic redirection of unauthenticated users to secure login",
    ],
    engineeringDecisions: [
      "Used Tailwind CSS v4 design tokens for consistent, fluid UI across desktop and mobile screens",
      "Configured Supabase Storage buckets with strict access policies for invoice files",
    ],
    outcomes: [
      "Successfully launched in production at kltraders.netlify.app",
      "Protected sensitive business data and administrative routes with robust RBAC",
    ],
  },
  "textile-erp-crm-system": {
    slug: "textile-erp-crm-system",
    title: "ERP & CRM System for Textile Management",
    subtitle: "Centralized Enterprise Operations & Order Tracking System",
    company: "AJ&VG Media, Bangalore",
    role: "Full-Stack Developer Intern",
    period: "May 2025",
    category: "Full-Stack",
    tech: ["React.js", "Spring Boot", "Java", "SQL", "REST APIs", "Query Optimization"],
    summary:
      "Architected and delivered a web-based ERP and CRM application for the Textile Industry, centralising records for 50+ employees and buyers.",
    problem:
      "Manual spreadsheet tracking led to data inconsistencies, slow retrieval times, and operational bottlenecks across employee records and buyer management.",
    solution:
      "Architected a web-based ERP and CRM platform. Built a responsive React.js frontend integrated with Spring Boot REST APIs and optimized SQL database queries across 5+ operational modules.",
    keyFeatures: [
      "Centralized records management for 50+ employees and buyers",
      "5+ operational modules supporting textile production and buyer workflows",
      "Responsive React.js interface with fast API response handling",
      "Optimized SQL database schema ensuring data integrity",
    ],
    engineeringDecisions: [
      "Optimized relational SQL queries and indexes across 5+ modules to speed up retrieval",
      "Structured Spring Boot REST services to handle concurrent buyer requests efficiently",
    ],
    outcomes: [
      "Eliminated heavy reliance on manual spreadsheets",
      "Significantly reduced data entry effort and accelerated retrieval speeds",
    ],
  },
  "freelancer-hiring-portal": {
    slug: "freelancer-hiring-portal",
    title: "Freelancer Hiring Portal",
    subtitle: "Multi-Role Client & Freelancer Marketplace",
    company: "Full-Stack Web Application",
    role: "Full-Stack Developer",
    period: "2024",
    category: "Full-Stack",
    tech: ["React.js", "Spring Boot", "Java", "REST APIs", "SQL", "HTML5", "CSS3"],
    summary:
      "Built a full-stack platform connecting clients and freelancers, supporting project postings, proposal submissions, and user profile management for multiple user roles.",
    problem:
      "Clients and freelancers needed a unified web system to post projects, review proposals, and manage profiles without fragmented tools.",
    solution:
      "Implemented 10+ RESTful backend APIs using Spring Boot (Java) and built a dynamic component-based React.js frontend with role-based access control for 2 user types.",
    keyFeatures: [
      "Multi-role user authentication and profile management (Client & Freelancer)",
      "Project posting, proposal submission, and review workflows",
      "10+ RESTful backend endpoints engineered in Spring Boot",
      "Dynamic, responsive React UI with client-side state handling",
    ],
    engineeringDecisions: [
      "Separated backend REST API logic cleanly from React frontend components",
      "Designed role-based access control rules for secure candidate and employer sessions",
    ],
    outcomes: [
      "Delivered end-to-end client-freelancer hiring workflow",
      "Created a scalable REST API foundation for future extension",
    ],
  },
  "fitness-mobile-app-design": {
    slug: "fitness-mobile-app-design",
    title: "Fitness Mobile App",
    subtitle: "15+ Screen Mobile Prototype & UI Architecture",
    company: "Nextskill Technologies, Coimbatore",
    role: "UI/UX Design Intern",
    period: "Dec 2022 – Jan 2023",
    category: "UI/UX",
    tech: ["Figma", "UI/UX Principles", "Wireframing", "User Flows", "Prototyping"],
    summary:
      "Produced end-to-end mobile application interface designs for a fitness tracking app using Figma, covering 15+ screens with a consistent layout, color system, and navigation flow.",
    problem:
      "Fitness tracking mobile apps require frictionless, clean interfaces that users can navigate easily during workout sessions.",
    solution:
      "Created wireframes, user flow diagrams, and interactive Figma prototypes across 15+ screens applying UI/UX design system best practices.",
    keyFeatures: [
      "Complete 15+ screen mobile design system in Figma",
      "Intuitive workout tracking, exercise guides, and progress views",
      "User flow mapping and interactive click-through prototypes",
      "Usability testing and navigation flow optimization",
    ],
    engineeringDecisions: [
      "Established reusable Figma design components and typographic tokens",
      "Optimized layout hierarchy for fast glanceability on mobile viewports",
    ],
    outcomes: [
      "Delivered production-ready UI specs validated against design best practices",
      "Created consistent color, typography, and navigation patterns",
    ],
  },
};

export const skillsGrouped = [
  {
    category: "Programming Languages",
    skills: ["Java", "JavaScript", "TypeScript", "Python", "SQL"],
  },
  {
    category: "Frontend Development",
    skills: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design", "UI/UX Fundamentals"],
  },
  {
    category: "Backend Development",
    skills: ["Spring Boot", "Node.js", "Express.js", "REST API Development"],
  },
  {
    category: "Databases & Storage",
    skills: ["MySQL", "MongoDB", "Supabase", "Data Modeling", "Query Optimization"],
  },
  {
    category: "Data & Analytics",
    skills: ["Pandas", "NumPy", "Data Cleaning", "Exploratory Data Analysis (EDA)"],
  },
  {
    category: "Machine Learning & AI",
    skills: ["ML Workflows", "Model Development", "Python-based AI"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Figma", "Netlify", "Excel"],
  },
  {
    category: "Software Engineering & Leadership",
    skills: ["Bug Fixing", "Functional Testing", "Team Leadership", "Agile Methodology", "SDLC"],
  },
];

export const achievementsList: AchievementItem[] = [
  {
    title: "Smart India Hackathon",
    subtitle: "National-Level Government Hackathon",
    detail: "Selected as Participant in national-level government-organised hackathon.",
    tag: "Hackathon",
  },
  {
    title: "Dr. Kalam Young Achiever Award",
    subtitle: "Academic & Innovation Recognition",
    detail: "Recognised as Participant among college-level nominees.",
    tag: "Award",
  },
  {
    title: "Event Organizer — Avantaa 2024",
    subtitle: "Sri Krishna College of Technology",
    detail: "Coordinated and managed technical events at Avantaa 2024.",
    tag: "Leadership",
  },
  {
    title: "React.js & Python AI Coursework",
    subtitle: "Online Certifications",
    detail: "Completed coursework in React.js Development and Python-based AI Fundamentals through recognized platforms.",
    tag: "Certification",
  },
];

export const languagesAndInterestsData = {
  languages: [
    { name: "Tamil", proficiency: "Native" },
    { name: "English", proficiency: "Professional" },
    { name: "Hindi", proficiency: "Basic" },
  ],
  interests: ["Basketball", "Tech Trends", "Internet Research"],
};
