/**
 * Central portfolio data — Shaik Baba Shareef.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Shaik Baba Shareef',
  displayName: 'Shaik Baba Shareef',
  firstName: 'SHAREEF',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A SHAREEF ORIGINAL',
  role: 'Full-Stack Developer',
  tagline: ['Full-Stack Developer', 'Java & Spring Boot', 'AI & Python'],
  intro:
    'A B.Tech Computer Science & Engineering student at MITS (Class of 2027) and full-stack developer building phishing detection systems, AI-powered triage platforms, unified booking engines, and RESTful backend architectures with Java, Spring Boot, Python, FastAPI, ServiceNow, and MySQL.',
  location: 'Madanapalle, Andhra Pradesh',
  email: 'shareefshaik63411@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/shaik-baba-shareef-0259622ba',
    github: 'https://github.com/ShareefShaik1234',
  },
  resumePdf: '/assets/Shareef_Shaik_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Shaik Baba Shareef',
  },
  interests: ['System Design', 'Generative AI Engineering', 'Enterprise Cloud & Workflows'],
};

export const education = [
  {
    school: 'Madanapalle Institute of Technology & Science (MITS)',
    place: 'Madanapalle, AP',
    degree: 'Bachelor of Technology — Computer Science and Engineering',
    period: '2023 – 2027 (Expected)',
    score: 'B.Tech CSE',
  },
];

export const experience = [
  {
    company: 'Ethnotech Academy',
    role: 'Java Full Stack (Academic Internship)',
    place: 'Academic Internship',
    period: 'May 2026 – July 2026',
    points: [
      'Developed a Social Media Management System using Java, Spring Boot, and MySQL.',
      'Implemented CRUD operations, REST APIs, and frontend-backend integration using Spring Data JPA.',
    ],
  },
  {
    company: 'ServiceNow University / SmartBridge (AICTE)',
    role: 'ServiceNow Virtual Intern',
    place: 'Virtual',
    period: 'May 2026 – June 2026',
    points: [
      'Completed hands-on ServiceNow labs covering ITSM tasks, Flow Designer, and workflow automation.',
      'Practiced ATF, report creation, and platform administration while preparing for the ServiceNow CSA certification.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  live?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'scamshield',
    title: 'ScamShield',
    year: '2026',
    genre: 'Cybersecurity • Java • AI',
    logline: 'A real-time phishing and scam detection platform combining VirusTotal threat intelligence with Gemini AI.',
    stack: ['Java', 'Spring Boot', 'MySQL', 'VirusTotal API', 'Gemini API'],
    build: [
      'Built a full-stack Spring Boot and MySQL security application integrating VirusTotal URL and file scanning with Gemini AI contextual analysis to detect phishing links and fraudulent messages.',
      'Designed relational MySQL storage for persistent scan histories and threat classifications, deployed live at scamshield-frontend-2v03.onrender.com.',
    ],
    features: [
      'Dual-engine threat analysis (VirusTotal + Gemini AI)',
      'Real-time URL & phishing message verification',
      'Persistent scan audit logs in MySQL',
      'Live deployment: https://scamshield-frontend-2v03.onrender.com/',
    ],
    metrics: [
      { value: '2×', label: 'hybrid threat intelligence' },
      { value: 'Spring Boot', label: 'enterprise Java backend' },
      { value: 'Live', label: 'deployed on Render' },
    ],
    github: 'https://github.com/ShareefShaik1234/Scamshield',
    live: 'https://scamshield-frontend-2v03.onrender.com/',
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'shield',
  },
  {
    id: 'envoy-ai',
    title: 'EnvoyAI',
    year: '2026',
    genre: 'AI • Productivity • Full-Stack',
    logline: 'An AI-powered executive inbox triage and smart delegation dashboard.',
    stack: ['Python', 'FastAPI', 'Gemini API', 'React', 'JavaScript'],
    build: [
      'Built and deployed an AI-powered executive inbox triage and delegation dashboard that classifies incoming communications by urgency, extracts action items, and drafts context-aware responses.',
      'Engineered full-stack API integration and live cloud deployment at envoy-ai.onrender.com.',
    ],
    features: [
      'Automated executive inbox triage & priority scoring',
      'Smart task delegation & action-item extraction',
      'Context-aware AI response drafting',
      'Live deployment: https://envoy-ai.onrender.com/',
    ],
    metrics: [
      { value: 'AI', label: 'automated triage & routing' },
      { value: 'Live', label: 'deployed on Render' },
      { value: 'Full-Stack', label: 'end-to-end architecture' },
    ],
    github: 'https://github.com/ShareefShaik1234/envoy-ai',
    live: 'https://envoy-ai.onrender.com/',
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'flow',
  },
  {
    id: 'reservix',
    title: 'Reservix',
    year: '2026',
    genre: 'Full-Stack • Java • Booking System',
    logline: 'A unified multi-category booking platform for movies, buses, trains, and hotels.',
    stack: ['Java', 'Spring Boot', 'MySQL', 'HTML5', 'CSS3', 'JavaScript'],
    build: [
      'Co-developed and deployed a full-stack reservation platform supporting seat and room availability, booking workflows, and user management across movies, buses, trains, and hotels.',
      'Architected decoupled frontend and Spring Boot REST backend services hosted on Render with relational MySQL persistence.',
    ],
    features: [
      '4 booking verticals (Movies, Buses, Trains, Hotels)',
      'Relational MySQL schema with Spring Boot REST APIs',
      'End-to-end reservation & itinerary management',
      'Live deployment: https://reservix-frontend.onrender.com/',
    ],
    metrics: [
      { value: '4', label: 'booking verticals unified' },
      { value: 'MySQL', label: 'relational data integrity' },
      { value: 'Live', label: 'frontend & backend deployed' },
    ],
    github: 'https://github.com/ShareefShaik1234/Online-Booking-System',
    live: 'https://reservix-frontend.onrender.com/',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tenants',
  },
  {
    id: 'resume-job-matcher',
    title: 'AI Resume & Job Description Matcher',
    year: '2026',
    genre: 'AI • NLP • Data Analytics',
    logline: 'An intelligent PDF resume evaluator that scores candidate fit and visualizes skill gaps against job descriptions.',
    stack: ['Python', 'Streamlit', 'PyMuPDF', 'Pandas', 'Plotly'],
    build: [
      'Co-developed and deployed an AI-driven resume analysis tool using Python, Streamlit, and PyMuPDF to parse PDF resumes and evaluate alignment against target job descriptions.',
      'Built interactive skill-gap breakdowns and match score visualizations using Pandas and Plotly, deployed live on Render.',
    ],
    features: [
      'Automated PDF resume text extraction via PyMuPDF',
      'Interactive match scoring & keyword gap analytics with Plotly',
      'Structured skill comparison powered by Pandas',
      'Live deployment: https://resume-job-matcher-qciy.onrender.com/',
    ],
    metrics: [
      { value: 'PDF', label: 'automated resume parsing' },
      { value: 'Plotly', label: 'interactive visual insights' },
      { value: 'Live', label: 'deployed on Render' },
    ],
    github: 'https://github.com/ShareefShaik1234/resume-job-matcher',
    live: 'https://resume-job-matcher-qciy.onrender.com/',
    palette: { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' },
    motif: 'flow',
  },
  {
    id: 'ecommerce-backend',
    title: 'E-Commerce Backend System',
    year: '2026',
    genre: 'Java • Spring Boot • REST API',
    logline: 'A scalable RESTful e-commerce backend service engineered with Spring Boot, Spring Data JPA, Hibernate, and MySQL.',
    stack: ['Java', 'Spring Boot', 'Spring Data JPA', 'Hibernate', 'MySQL'],
    build: [
      'Engineered a modular RESTful backend service powering product catalog management, shopping cart workflows, order processing, and user operations.',
      'Implemented clean layered architecture with Spring Data JPA, Hibernate ORM mappings, and normalized MySQL relational schemas.',
    ],
    features: [
      'Layered Spring Boot REST API architecture',
      'ORM persistence with Spring Data JPA & Hibernate',
      'Normalized MySQL schema for products, carts & orders',
      'Clean CRUD endpoints & transactional integrity',
    ],
    metrics: [
      { value: 'REST', label: 'clean API architecture' },
      { value: 'JPA', label: 'Hibernate ORM persistence' },
      { value: 'MySQL', label: 'normalized relational schema' },
    ],
    github: 'https://github.com/ShareefShaik1234/E-Commerce-backend-system',
    palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' },
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'ethnotech-intern',
    title: 'Java Full Stack Intern',
    org: 'Ethnotech Academy',
    detail: 'Built a Social Media Management System with Java, Spring Boot, Spring Data JPA, and MySQL.',
    laurel: 'Academic Internship',
  },
  {
    id: 'servicenow-intern',
    title: 'ServiceNow Virtual Intern',
    org: 'ServiceNow University / SmartBridge (AICTE)',
    detail: 'Completed hands-on ITSM, Flow Designer, ATF, and platform administration labs toward ServiceNow CSA.',
    laurel: 'AICTE Virtual Internship',
  },
  {
    id: 'tcs-codevita',
    title: 'Competitor',
    org: 'TCS CodeVita',
    detail: 'Competed in the global algorithmic programming contest solving time-constrained DSA challenges.',
    laurel: 'Competitive Coding',
  },
  {
    id: 'corporate-assessments',
    title: 'Technical Challenges',
    org: 'Dr. Reddy’s • Deloitte • KaarTech',
    detail: 'Shortlisted and participated in Dr. Reddy’s 3.0 Digital & AI Track, Deloitte Cyber Gurukul, and KaarTech assessments.',
    laurel: 'National Assessments',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'ServiceNow', name: 'ServiceNow Virtual Internship & CSA Preparation', link: 'https://github.com/ShareefShaik1234' },
  { issuer: 'Microsoft', name: 'Microsoft Ignite — Digital Attendee', link: 'https://github.com/ShareefShaik1234' },
  { issuer: 'Java & Spring', name: 'Full-Stack Java & Spring Boot Engineering', link: 'https://github.com/ShareefShaik1234' },
  { issuer: 'Python & AI', name: 'FastAPI & Generative AI Application Development', link: 'https://github.com/ShareefShaik1234' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Backend & scripting core',
    skills: [
      { name: 'Java', mono: 'Jv', note: 'Primary' },
      { name: 'Python', mono: 'Py', note: 'AI & APIs' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'C++', mono: 'C+' },
      { name: 'SQL', mono: 'Sq' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    subtitle: 'Enterprise & async frameworks',
    skills: [
      { name: 'Spring Boot', mono: 'Sb' },
      { name: 'Spring Data JPA', mono: 'Jp' },
      { name: 'Hibernate', mono: 'Hb' },
      { name: 'FastAPI', mono: 'Fa' },
      { name: 'Node.js', mono: 'No' },
      { name: 'REST APIs', mono: 'Ap' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Responsive web interfaces',
    skills: [
      { name: 'React', mono: 'Re' },
      { name: 'HTML5', mono: 'Ht' },
      { name: 'CSS3', mono: 'Cs' },
      { name: 'Streamlit', mono: 'St' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Relational & NoSQL storage',
    skills: [
      { name: 'MySQL', mono: 'My' },
      { name: 'MongoDB', mono: 'Mg' },
    ],
  },
  {
    id: 'platforms-tools',
    title: 'Enterprise & AI Tools',
    subtitle: 'Workflow automation, LLMs & deployment',
    skills: [
      { name: 'ServiceNow (ITSM)', mono: 'Sn' },
      { name: 'Flow Designer & ATF', mono: 'Fd' },
      { name: 'Gemini API', mono: 'Gm' },
      { name: 'Pandas & Plotly', mono: 'Pd' },
      { name: 'Git / GitHub', mono: 'Gt' },
      { name: 'Render', mono: 'Rn' },
    ],
  },
  {
    id: 'fundamentals',
    title: 'CS Fundamentals',
    subtitle: 'Core engineering pillars',
    skills: [
      { name: 'DSA', mono: 'Ds' },
      { name: 'OOPs', mono: 'Oo' },
      { name: 'DBMS', mono: 'Db' },
      { name: 'OS', mono: 'Os' },
      { name: 'CN', mono: 'Cn' },
    ],
  },
  {
    id: 'interests',
    title: 'Interests',
    subtitle: 'Coming soon to the series',
    skills: [
      { name: 'System Design', mono: 'Sd' },
      { name: 'Generative AI Engineering', mono: 'Ai' },
      { name: 'Enterprise Cloud & Workflows', mono: 'Cw' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  Java: ['ScamShield', 'Reservix', 'E-Commerce Backend System'],
  'Spring Boot': ['ScamShield', 'Reservix', 'E-Commerce Backend System'],
  'Spring Data JPA': ['E-Commerce Backend System', 'Social Media Management System'],
  Hibernate: ['E-Commerce Backend System'],
  Python: ['EnvoyAI', 'AI Resume & Job Description Matcher'],
  FastAPI: ['EnvoyAI', 'AI Link Analysis API'],
  React: ['EnvoyAI', 'MERN Stack Applications'],
  HTML5: ['Reservix', 'Social Media Management System'],
  CSS3: ['Reservix', 'Social Media Management System'],
  JavaScript: ['Reservix', 'EnvoyAI'],
  Streamlit: ['AI Resume & Job Description Matcher'],
  MySQL: ['ScamShield', 'Reservix', 'E-Commerce Backend System'],
  MongoDB: ['MERN Stack Applications'],
  'ServiceNow (ITSM)': ['ServiceNow / SmartBridge AICTE Internship'],
  'Flow Designer & ATF': ['ServiceNow / SmartBridge AICTE Internship'],
  'Gemini API': ['ScamShield', 'EnvoyAI'],
  'Pandas & Plotly': ['AI Resume & Job Description Matcher'],
  'Git / GitHub': ['ShareefShaik1234 — 10+ Repositories'],
  Render: ['ScamShield', 'EnvoyAI', 'Reservix', 'AI Resume Matcher'],
  DSA: ['TCS CodeVita', 'Corporate Coding Assessments'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2023 – Present',
    synopsis: 'Pursuing B.Tech in Computer Science & Engineering at Madanapalle Institute of Technology & Science (MITS).',
    episodes: [
      {
        code: 'S01 E01',
        title: 'Enter: Computer Science',
        description: 'Started B.Tech CSE at MITS, building strong foundations in Data Structures, Algorithms, OOPs, DBMS, and Operating Systems.',
        tags: ['B.Tech CSE', 'MITS', 'Class of 2027'],
        runtime: '2023 – Present',
        palette: violet,
      },
      {
        code: 'S01 E02',
        title: 'The Arena',
        description: 'Competed in TCS CodeVita and technical hiring challenges across Dr. Reddy’s, Deloitte Cyber Gurukul, and KaarTech.',
        tags: ['TCS CodeVita', 'Problem Solving'],
        runtime: '2026',
        palette: jade,
      },
    ],
  },
  {
    number: 2,
    title: 'Internships & Enterprise Platforms',
    period: 'May 2026 – July 2026',
    synopsis: 'Hands-on industry internships in Java Full-Stack development and ServiceNow enterprise workflow automation.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'Java Full-Stack Intern',
        description: 'Developed a Social Media Management System at Ethnotech Academy using Java, Spring Boot, Spring Data JPA, REST APIs, and MySQL.',
        tags: ['Ethnotech Academy', 'Java', 'Spring Boot', 'MySQL'],
        runtime: 'May 2026 – Jul 2026',
        palette: amber,
      },
      {
        code: 'S02 E02',
        title: 'Enterprise Workflows',
        description: 'Completed ServiceNow Virtual Internship (SmartBridge / AICTE) mastering ITSM, Flow Designer, ATF, and platform administration.',
        tags: ['ServiceNow', 'ITSM', 'Flow Designer', 'ATF'],
        runtime: 'May 2026 – Jun 2026',
        palette: ocean,
      },
    ],
  },
  {
    number: 3,
    title: 'Originals: Security, AI & Full-Stack',
    period: '2026',
    synopsis: 'Building and deploying five full-stack security, AI triage, booking, resume analytics, and e-commerce applications.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'ScamShield',
        description: 'Shipped a Spring Boot and MySQL phishing detection platform integrating VirusTotal threat intelligence with Gemini AI on Render.',
        tags: ['Java', 'Spring Boot', 'VirusTotal', 'Gemini AI'],
        runtime: '2026',
        palette: amber,
      },
      {
        code: 'S03 E02',
        title: 'EnvoyAI & Resume Matcher',
        description: 'Built and deployed EnvoyAI (AI executive inbox triage) and AI Resume & Job Description Matcher (Python, Streamlit, Plotly).',
        tags: ['Python', 'FastAPI', 'Streamlit', 'Gemini AI'],
        runtime: '2026',
        palette: crimson,
      },
      {
        code: 'S03 E03',
        title: 'Reservix & E-Commerce Core',
        description: 'Developed Reservix (multi-category booking system) and a RESTful E-Commerce Backend System with Spring Boot, JPA, Hibernate, and MySQL.',
        tags: ['Java', 'Spring Boot', 'Hibernate', 'MySQL'],
        runtime: '2026',
        palette: violet,
      },
    ],
  },
  {
    number: 4,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'Preparing for 2027 graduate software engineering and full-stack developer roles.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Next Chapter',
        description: 'Scaling backend engineering, Generative AI systems, and enterprise cloud skills ahead of 2027 graduation.',
        tags: ['System Design', 'Full-Stack', '2027 SWE'],
        runtime: 'In production',
        palette: jade,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Security Original', title: 'ScamShield', detail: 'Spring Boot + VirusTotal + Gemini AI', palette: amber },
  { label: 'AI Flagship', title: 'EnvoyAI', detail: 'Executive inbox triage & delegation dashboard', palette: crimson },
  { label: 'Booking Platform', title: 'Reservix', detail: 'Movies, buses, trains & hotels booking system', palette: ocean },
  { label: 'AI Analytics', title: 'Resume Matcher', detail: 'Python, Streamlit & Plotly PDF-to-JD evaluator', palette: violet },
  { label: 'Enterprise API', title: 'E-Commerce Backend', detail: 'Spring Boot, JPA, Hibernate & MySQL', palette: jade },
  { label: 'Full-Stack Internship', title: 'Ethnotech Academy', detail: 'Java Full Stack Intern • Social Media System', palette: amber },
  { label: 'Enterprise Internship', title: 'ServiceNow', detail: 'AICTE Virtual Intern • ITSM & Flow Designer', palette: crimson },
  { label: 'Backend Core', title: 'Java & Spring Boot', detail: 'Primary stack with Spring Data JPA & MySQL', palette: ocean },
  { label: 'Competitive Coding', title: 'TCS CodeVita', detail: 'Algorithmic problem solving & DSA', palette: jade },
  { label: 'Next Arc', title: '2027 SWE Roles', detail: 'Full-Stack & Backend Engineering', palette: violet },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · CSE',
    lines: ['Madanapalle Institute of Technology & Science', 'Class of 2027'],
    chips: ['Computer Science', 'Full-Stack'],
  },
  {
    kicker: 'Internships',
    title: 'Industry Training',
    lines: [
      'Java Full Stack Intern · Ethnotech Academy (May – Jul 2026)',
      'ServiceNow Virtual Intern · SmartBridge / AICTE (May – Jun 2026)',
    ],
  },
  {
    kicker: 'Core Stack',
    title: 'Java, Python & Cloud.',
    lines: ['Spring Boot, Spring Data JPA, Hibernate, FastAPI', 'React, Streamlit, MySQL, ServiceNow ITSM'],
    chips: ['Java', 'Spring Boot', 'Python', 'FastAPI', 'ServiceNow', 'MySQL'],
  },
  {
    kicker: 'Originals',
    title: '5 Featured Builds',
    lines: [
      'ScamShield · EnvoyAI · Reservix',
      'AI Resume & JD Matcher · E-Commerce Backend System',
    ],
  },
  {
    kicker: 'Current Mission',
    title: 'Building for 2027',
    lines: ['Full-Stack Engineering · AI Systems · Scalable Backends'],
  },
];

export type ProfileId = 'shareef' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'shareef',
    name: 'Shareef',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & internships', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • Live & GitHub`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 highlights', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Highlights`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};