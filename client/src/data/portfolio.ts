export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  location: string;
  phone: string;
  email: string;
  resumeUrl: string;
  socialLinks: {
    linkedin: string;
    github: string;
    hackerrank: string;
    leetcode: string;
  };
}

export const personalInfo: PersonalInfo = {
  name: "Vikas Singh",
  title: "Senior Software Engineer | Full-Stack Developer | Aerospace Systems Expert",
  tagline: "Distinguished software engineer with expertise in MERN stack, Java Spring Boot, and aerospace-grade systems. Proven track record in developing scalable applications and ensuring DO-178 B/C compliance in mission-critical environments.",
  location: "Bengaluru, Karnataka",
  phone: "+91-9829110883",
  email: "1dt19ec082vikas@gmail.com",
  resumeUrl: "/resume.pdf",
  socialLinks: {
    linkedin: "https://linkedin.com/in/vikas-singh",
    github: "https://github.com/vikas-singh",
    hackerrank: "https://hackerrank.com/vikas_singh",
    leetcode: "https://leetcode.com/vikas_singh"
  }
};

export interface About {
  title: string;
  description: string[];
  education: {
    degree: string;
    college: string;
    year: string;
    cgpa: string;
    location: string;
  };
}

export const about: About = {
  title: "Professional Excellence",
  description: [
    "Distinguished software engineer with a robust foundation in Electronics and Communication Engineering from Dayananda Sagar Academy. My career trajectory demonstrates expertise across aerospace systems validation, full-stack development, and mission-critical software engineering.",
    "With specialized knowledge in DO-178 B/C safety standards and comprehensive experience in enterprise-level software validation, I've successfully architected and delivered scalable web applications, secure APIs, and high-performance systems that serve diverse user bases."
  ],
  education: {
    degree: "B.E - Electronics and Communication",
    college: "Dayananda Sagar Academy of Technology And Management",
    year: "2019 — 2023",
    cgpa: "8.67",
    location: "Bengaluru, Karnataka"
  }
};

export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface Skills {
  languages: Skill[];
  frameworks: Skill[];
  tools: Skill[];
}

export const skills: Skills = {
  languages: [
    { name: "JavaScript", level: 92, icon: "fab fa-js-square" },
    { name: "Java", level: 88, icon: "fab fa-java" },
    { name: "Python", level: 85, icon: "fab fa-python" },
    { name: "TypeScript", level: 87, icon: "fas fa-code" },
    { name: "C++", level: 80, icon: "fas fa-code" }
  ],
  frameworks: [
    { name: "React.js", level: 95, icon: "fab fa-react" },
    { name: "Node.js", level: 90, icon: "fab fa-node-js" },
    { name: "Spring Boot", level: 85, icon: "fas fa-leaf" },
    { name: "Express.js", level: 88, icon: "fas fa-server" },
    { name: "Next.js", level: 82, icon: "fas fa-rocket" }
  ],
  tools: [
    { name: "System Design", level: 88, icon: "fas fa-project-diagram" },
    { name: "Database Design", level: 90, icon: "fas fa-database" },
    { name: "DevOps & CI/CD", level: 82, icon: "fab fa-git-alt" },
    { name: "Cloud Architecture", level: 78, icon: "fas fa-cloud" },
    { name: "Performance Optimization", level: 85, icon: "fas fa-tachometer-alt" }
  ]
};

export interface Experience {
  title: string;
  company: string;
  location: string;
  duration: string;
  achievements: string[];
}

export const experience: Experience = {
  title: "Senior Software Test Engineer",
  company: "Moog India Technology Center",
  location: "Bengaluru, India",
  duration: "June 2023 — May 2024",
  achievements: [
    "Architected and implemented comprehensive test coverage strategies achieving 100% functional requirement validation across aerospace-grade software systems.",
    "Led critical code review processes for embedded C implementations, ensuring adherence to SDD specifications and identifying potential system vulnerabilities.",
    "Specialized in DO-178 B/C safety-critical standards compliance for aerospace applications, contributing to mission-critical flight control systems.",
    "Orchestrated execution of 50+ automated PTU test suites weekly using IBM RTRT, ensuring robust software validation and performance optimization.",
    "Developed sophisticated defect tracking workflows using MATLAB and RTRT, reducing issue resolution time by 40% and improving system reliability."
  ]
};

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  year: string;
  icon: string;
  color: string;
  githubUrl: string;
  demoUrl: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Enterprise Job Portal",
    description: "Scalable full-stack job portal with microservices architecture, serving 500+ active users with real-time notifications and advanced analytics.",
    longDescription: "Architected enterprise-grade job portal platform with JWT-based authentication, real-time messaging, advanced search algorithms, and comprehensive analytics dashboard supporting high-concurrency operations.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "Socket.io", "Redis"],
    features: [
      "Microservices architecture with JWT authentication",
      "Real-time messaging and notifications",
      "Advanced search with Elasticsearch integration",
      "Comprehensive analytics and reporting dashboard",
      "Multi-role access control system",
      "Automated resume parsing and matching"
    ],
    year: "2025",
    icon: "fas fa-building",
    color: "blue",
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "High-performance e-commerce solution with advanced inventory management, payment gateway integration, and real-time analytics.",
    longDescription: "Developed comprehensive e-commerce platform featuring advanced inventory management, multiple payment gateway integrations, real-time analytics, and optimized checkout flow.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe", "Redis"],
    features: [
      "Advanced inventory management system",
      "Multiple payment gateway integration",
      "Real-time sales analytics and reporting",
      "Automated order processing workflow",
      "Progressive Web App capabilities",
      "Advanced caching and performance optimization"
    ],
    year: "2024",
    icon: "fas fa-store",
    color: "green",
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    id: 3,
    title: "AI-Powered Medical Diagnostics",
    description: "Advanced machine learning system for medical diagnosis with 96% accuracy, serving healthcare professionals with predictive analytics.",
    longDescription: "Engineered sophisticated AI-powered diagnostic system using ensemble machine learning models, achieving 96% accuracy in medical predictions with comprehensive data visualization and professional reporting.",
    technologies: ["Python", "TensorFlow", "Flask", "PostgreSQL", "Docker", "AWS"],
    features: [
      "Ensemble ML models with 96% accuracy",
      "Advanced feature extraction algorithms",
      "Professional diagnostic reporting system",
      "Real-time prediction capabilities",
      "Secure patient data management",
      "Integration with healthcare systems"
    ],
    year: "2023",
    icon: "fas fa-heartbeat",
    color: "red",
    githubUrl: "#",
    demoUrl: "#"
  }
];

export interface CodingProfile {
  name: string;
  count: string | number;
  suffix: string;
  icon: string;
  color: "orange" | "yellow" | "green" | "purple";
  url: string;
}

export const codingProfiles: CodingProfile[] = [
  {
    name: "LeetCode",
    count: 380,
    suffix: "+ Problems",
    icon: "fas fa-code",
    color: "orange",
    url: "https://leetcode.com/vikas_singh"
  },
  {
    name: "CodeChef",
    count: "2",
    suffix: "⭐ Rating",
    icon: "fas fa-trophy",
    color: "yellow",
    url: "https://codechef.com/users/vikas_singh"
  },
  {
    name: "HackerRank",
    count: "5",
    suffix: "⭐ C++ & Problem Solving",
    icon: "fas fa-medal",
    color: "green",
    url: "https://hackerrank.com/vikas_singh"
  },
  {
    name: "Code360",
    count: "7",
    suffix: " Level",
    icon: "fas fa-rocket",
    color: "purple",
    url: "https://code360.com/vikas_singh"
  }
];

export const certifications: string[] = [
  "Advanced Problem Solving & SQL Optimization - HackerRank",
  "Full-Stack JavaScript Development - Udemy",
  "Advanced Data Structures & Algorithms - Coursera",
  "Object-Oriented Design Patterns - Udemy",
  "Software Engineering Excellence Program - Goldman Sachs"
];

export const typingPhrases: string[] = [
  "Senior Software Engineer",
  "Full-Stack Architect", 
  "System Design Expert",
  "Performance Optimization Specialist",
  "Enterprise Solution Developer"
];
