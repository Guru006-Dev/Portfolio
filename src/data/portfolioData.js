// ============================================================
// portfolioData.js — Centralized configuration for Guru D's Portfolio
// All external links, personal info, and content in one place.
// ============================================================

export const personalInfo = {
  name: "Guru D",
  firstName: "Guru",
  brandName: "Guru D",
  title: "Full-Stack & Distributed Systems Engineer",
  location: "Vellore, Tamil Nadu, India",
  phone: "+91 80727-79893",
  emails: {
    primary: "dguru5079@gmail.com",
  },
  summary:
    "Full-Stack & Distributed Systems Engineer specializing in high-throughput real-time systems, zero-knowledge security architectures, and applied NLP. Experienced in architecting scalable platforms with Redis, Node.js, React, Supabase, and C11.",
  resumeUrl: "/Guru_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/Guru006-Dev",
  linkedin: "https://www.linkedin.com/in/gurud132",
  instagram: "https://www.instagram.com/o_lone.wolf_o/",
};

export const heroContent = {
  greeting: "Hi, I'm Guru D",
  titleHighlight: "Full-Stack & Distributed Systems Engineer",
  subtitle:
    "I build high-throughput distributed systems, zero-knowledge security architectures, and AI-driven full-stack applications.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:dguru5079@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Guru,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Guru_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Guru D</span>, a Full-Stack & Distributed Systems Engineer based in Vellore, TN. I specialize in building zero-knowledge architectures, real-time distributed platforms, and AI-powered applications with robust security and clean code.`,
  techStack: ["TypeScript", "Node.js", "React.js", "Redis", "Supabase", "Python"],
};

export const skillsContent = {
  badge: "My Engineering Approach",
  heading: "How I architect and scale distributed systems",
  description:
    "From low-level data structures to fault-tolerant distributed consensus, I build secure, performant software built to scale.",
  cards: [
    {
      number: "01",
      title: "System Architecture",
      text: "Designing high-concurrency backend services, real-time event buses, and zero-knowledge data encryption models.",
    },
    {
      number: "02",
      title: "Distributed Consensus",
      text: "Implementing real-time leader election algorithms (Bully Algorithm) and atomic state locks with sub-10s failovers.",
    },
    {
      number: "03",
      title: "Full-Stack Development",
      text: "Crafting reactive web and mobile interfaces backed by Node.js, Express, PostgreSQL, Redis, and Supabase.",
    },
    {
      number: "04",
      title: "Verification & Testing",
      text: "Validating systems using Jest integration tests, Playwright E2E automation, k6 load testing, and C unit testing.",
    },
  ],
  endText: "Engineered to scale!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: [
        { name: "TypeScript", level: 92 },
        { name: "Java", level: 88 },
        { name: "Python", level: 85 },
        { name: "C / C++", level: 84 },
        { name: "Dart (Flutter)", level: 80 }
      ]
    },
    {
      title: "Backend & Systems",
      skills: [
        { name: "Node.js / Express", level: 92 },
        { name: "Redis & Geospatial", level: 90 },
        { name: "Socket.io", level: 88 },
        { name: "REST APIs", level: 95 },
        { name: "Zero-Knowledge Arch", level: 86 }
      ]
    },
    {
      title: "Frontend & Mobile",
      skills: [
        { name: "React 19", level: 92 },
        { name: "TypeScript", level: 90 },
        { name: "Vite", level: 94 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Flutter", level: 82 }
      ]
    },
    {
      title: "Databases & Cloud",
      skills: [
        { name: "MongoDB", level: 90 },
        { name: "PostgreSQL", level: 88 },
        { name: "Supabase", level: 90 },
        { name: "SQLite", level: 85 },
        { name: "Firebase", level: 84 }
      ]
    },
    {
      title: "Security & Applied AI",
      skills: [
        { name: "AES-256 Encryption", level: 92 },
        { name: "Sentence-BERT / NLP", level: 85 },
        { name: "Siamese Networks", level: 82 },
        { name: "JWT Auth", level: 90 },
        { name: "Google Gemini API", level: 88 }
      ]
    },
    {
      title: "Testing & Infrastructure",
      skills: [
        { name: "Git & GitHub", level: 94 },
        { name: "Docker", level: 85 },
        { name: "k6 Load Testing", level: 84 },
        { name: "Playwright E2E", level: 86 },
        { name: "Jest / Vitest", level: 88 }
      ]
    }
  ]
};

export const contentCreation = {
  badge: "Engineering Focus",
  heading: "Technical Mastery & System Excellence",
  description: "Focusing on security, distributed synchronization, and clean full-stack engineering.",
  categories: [
    {
      title: "Distributed Systems",
      description: "Real-time state synchronization, atomic Redis lock scripts, and leader election failovers.",
      stats: "Sub-10s Failover",
      icon: "⚡"
    },
    {
      title: "Zero-Knowledge Security",
      description: "Pre-transmission AES-256 client-side encryption and tamper-evident C11 audit logging.",
      stats: "Client-Side Cryptography",
      icon: "🔐"
    },
    {
      title: "Applied AI & NLP",
      description: "Semantic similarity matching using Sentence-BERT and Siamese Networks for symptom-case analysis.",
      stats: "NLP Neural Networks",
      icon: "🧠"
    },
    {
      title: "Testing & Reliability",
      description: "Rigorous E2E testing with Playwright, performance load benchmarking with k6, and C memory protection.",
      stats: "End-to-End Coverage",
      icon: "🛠️"
    }
  ]
};

export const leadershipList = [
  {
    title: "Amrita Vishwa Vidyapeetham — CSE Department",
    description: "Collaborated on distributed systems research, lead peer workshops in cryptography and full-stack web architectures.",
    role: "Engineering Peer Lead",
    badge: "Academic"
  },
  {
    title: "Zero-Vault Cryptographic Engine Developer",
    description: "Authored native C11 risk verification modules with immutable hash-chain structures for secure audit records.",
    role: "Lead Systems Architect",
    badge: "Open Source"
  }
];

export const internshipsList = [
  {
    organization: "Distributed Systems & Full Stack Projects",
    role: "Full-Stack & Systems Developer",
    duration: "2023 - Present",
    skills: ["Distributed Systems", "Zero-Knowledge Cryptography", "Real-Time Engines", "Full-Stack Web"],
    tech: ["Node.js", "React", "Redis", "Supabase", "TypeScript", "C11"]
  }
];

export const softSkillsList = [
  { name: "System Design", icon: "🏗️", desc: "Architecting modular, highly available, and fault-tolerant software systems." },
  { name: "Problem Solving", icon: "🧩", desc: "Debugging concurrency race conditions, memory leaks, and distributed edge cases." },
  { name: "Cryptographic Mindset", icon: "🔒", desc: "Prioritizing privacy and data security through zero-knowledge design patterns." },
  { name: "Team Collaboration", icon: "🤝", desc: "Communicating complex technical concepts clearly with peers and stakeholders." },
  { name: "Continuous Learning", icon: "🚀", desc: "Mastering emerging AI techniques, NLP models, and low-level system optimizations." }
];

export const projects = [
  {
    id: "zoomcab",
    number: "01",
    badge: "🚀 Real-Time Distributed Engine",
    title: "Zoomcab — Distributed Ride-Hailing Platform",
    description:
      "A high-concurrency real-time ride-matching platform built on Node.js, React, Redis Geospatial, and Socket.io. Features an O(log N) geospatial driver matching engine eliminating external API dependencies, atomic Lua scripts for check-and-set driver assignment without race conditions, and a Bully Algorithm implementation for leader election with sub-10s failover detection for surge pricing coordination. Integrated with Google Gemini API for an AI concierge.",
    techTags: [
      "Node.js",
      "React",
      "Redis Geospatial",
      "Socket.io",
      "Google Gemini API",
      "Lua",
      "Bully Algorithm"
    ],
    links: {
      github: "https://github.com/Guru006-Dev",
      demo: null,
    },
    isFlagship: true,
  },
  {
    id: "zero-vault",
    number: "02",
    badge: "🔐 Zero-Knowledge Security",
    title: "Zero-Vault — Zero-Knowledge Password Manager",
    description:
      "A security-focused password management platform engineered with zero-knowledge architecture where master passwords never leave the client and pre-transmission AES-256 encryption protects user data. Powered by a native C11 risk engine with immutable hash-chain verification for tamper-evident audit logging and a 5-layer conflict resolution model (LWW merge, versioned sync, encrypted tombstones) ensuring eventual consistency across devices.",
    techTags: ["React 19", "TypeScript", "Node.js", "Supabase", "Native C11", "AES-256", "Playwright", "k6"],
    links: {
      github: "https://github.com/Guru006-Dev",
      frontendDemo: null,
      backendApi: null,
    },
    isFlagship: false,
  },
  {
    id: "healnet",
    number: "03",
    badge: "🧠 Applied NLP Neural Network",
    title: "HealNet — AI-Integrated Social Health Platform",
    description:
      "A full-stack social healthcare platform utilizing Sentence-BERT in a Siamese Neural Network to match patient symptoms against a comprehensive medical case library via cosine similarity. Includes an administrative moderation pipeline with structured content reviews, MongoDB audit logs, and an interactive Treatment & Hospital Comparison module analyzing recovery metrics and success rates.",
    techTags: ["MERN Stack", "Sentence-BERT", "Siamese Network", "MongoDB", "Express", "React", "NLP"],
    links: {
      github: "https://github.com/Guru006-Dev",
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "Ultimate AWS Bootcamp",
      issuer: "School of DevOps",
      icon: "☁️",
      url: "/certificates/aws-bootcamp.jpg"
    },
    {
      name: "Complete Flutter & Dart Development",
      issuer: "Udemy / KHacks",
      icon: "📱",
      url: "/certificates/khacks.pdf"
    },
    {
      name: "B.Tech Computer Science & Engineering",
      issuer: "Amrita Vishwa Vidyapeetham",
      icon: "🎓",
      url: "/certificates/amrita-certificate.pdf"
    }
  ],
  viewAllUrl: "/certificates/amrita-certificate.pdf",
};

export const education = {
  degree: "B.Tech – Computer Science & Engineering",
  institution: "Amrita Vishwa Vidyapeetham, Coimbatore",
  graduation: "2023 – 2027",
  coursework: "DSA, DBMS, Operating Systems, Distributed Systems, Cryptography, Full Stack Frameworks",
};

export const footerContent = {
  taglines: [
    "Full-Stack & Distributed Systems",
    "Real-Time Platforms · Zero-Knowledge Security",
    "TypeScript · React · Node.js · C11",
  ],
  credential: "B.Tech Computer Science & Engineering",
  copyright: `© ${new Date().getFullYear()} Guru D | Built with React & Vite`,
};

export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
