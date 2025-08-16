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
  title: "Software Test Engineer | Full-Stack Developer | Aerospace Systems Expert",
  tagline: "Software engineer with expertise in embedded systems testing, MERN stack development, and aerospace-grade systems. Experienced in DO-178 B/C compliance and developing scalable web applications.",
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
    "Software engineer with a strong foundation in Electronics and Communication Engineering from Dayananda Sagar Academy. My career demonstrates expertise across aerospace systems testing, full-stack development, and embedded software validation.",
    "With specialized knowledge in DO-178 B/C safety standards and comprehensive experience in software testing, I've successfully developed and validated mission-critical aerospace software while also building scalable web applications and secure APIs."
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
  developerTools: Skill[];
  otherSkills: Skill[];
}

export const skills: Skills = {
  languages: [
    { name: "C", level: 85, icon: "fas fa-code" },
    { name: "C++", level: 88, icon: "fas fa-code" },
    { name: "Java", level: 90, icon: "fab fa-java" },
    { name: "Python", level: 87, icon: "fab fa-python" },
    { name: "JavaScript", level: 92, icon: "fab fa-js-square" }
  ],
  frameworks: [
    { name: "ReactJS", level: 95, icon: "fab fa-react" },
    { name: "NodeJS", level: 90, icon: "fab fa-node-js" },
    { name: "ExpressJS", level: 88, icon: "fas fa-server" },
    { name: "Tailwind CSS", level: 85, icon: "fab fa-css3-alt" },
    { name: "Spring Boot", level: 82, icon: "fas fa-leaf" }
  ],
  tools: [
    { name: "Data Structures", level: 90, icon: "fas fa-project-diagram" },
    { name: "OOPs", level: 88, icon: "fas fa-cube" },
    { name: "Linux & Bash", level: 85, icon: "fab fa-linux" },
    { name: "SQL & RDBMS", level: 87, icon: "fas fa-database" },
    { name: "Git & DevOps", level: 90, icon: "fab fa-git-alt" }
  ],
  developerTools: [
    { name: "VS Code", level: 95, icon: "fas fa-code" },
    { name: "MySQL Server", level: 88, icon: "fas fa-database" },
    { name: "PyCharm", level: 85, icon: "fas fa-python" },
    { name: "MongoDB Compass", level: 87, icon: "fas fa-database" },
    { name: "Postman", level: 90, icon: "fas fa-paper-plane" },
    { name: "IntelliJ", level: 82, icon: "fas fa-code" }
  ],
  otherSkills: [
    { name: "Computer Networks", level: 85, icon: "fas fa-network-wired" },
    { name: "Operating System", level: 88, icon: "fas fa-desktop" },
    { name: "Bash Scripting", level: 82, icon: "fas fa-terminal" },
    { name: "SQL & RDBMS", level: 87, icon: "fas fa-database" },
    { name: "DevOps", level: 80, icon: "fas fa-server" },
    { name: "Git & GitHub", level: 90, icon: "fab fa-github" }
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
  title: "Software Test Engineer",
  company: "Moog India Technology Center",
  location: "Bengaluru, India",
  duration: "June 2023 — May 2024",
  achievements: [
    "Analyzed and understood functional requirements defined in the Software Development Document (SDD) to ensure 100% test coverage of functional requirements.",
    "Verified Embedded C code implementation against the SDD to identify and report any mismatches or deviations from functional requirements.",
    "Experienced in embedded systems testing, including compliance with DO-178 B/C safety standards.",
    "Developed test cases based on low-level requirements and created PTU test scripts, ensuring effective DO-178 B/C code coverage for safety-critical aerospace software.",
    "Executed 50+ PTU (Program Test Unit) files weekly on target hardware utilizing IBM RTRT (Rational Test Real Time) for rigorous software validation and verification, ensuring robust performance and reliability.",
    "Utilized tools like MATLAB and RTRT for test case management and defect tracking, ensuring timely resolution of issues."
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
    title: "Job Portal",
    description: "Full-stack job portal application using MERN stack with JWT authentication, enabling job posting, searching, and application management for 100+ users.",
    longDescription: "Developed a comprehensive job portal application using MERN stack with secure RESTful APIs utilizing JWT-based authentication. Features include advanced search and filtering functionality, employer dashboard for managing job postings and applications, and user profile management with resume uploads.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "JWT"],
    features: [
      "Secure JWT-based authentication system",
      "Advanced search and filtering functionality",
      "Employer dashboard for job management",
      "User profile management with resume uploads",
      "Application tracking system",
      "Real-time job posting and application updates"
    ],
    year: "2025",
    icon: "fas fa-building",
    color: "blue",
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    id: 2,
    title: "Shopping-Cart",
    description: "Fully functional e-commerce shopping cart application using React with responsive design and modular components.",
    longDescription: "Developed a comprehensive e-commerce shopping cart application using React with modular components for product listing, cart management, and checkout. Implemented responsive and interactive UI using TailwindCSS for optimal user experience.",
    technologies: ["HTML", "CSS", "Tailwind", "React"],
    features: [
      "Modular component architecture",
      "Product listing and management",
      "Shopping cart functionality",
      "Responsive design with TailwindCSS",
      "Interactive user interface",
      "Checkout process management"
    ],
    year: "2024",
    icon: "fas fa-shopping-cart",
    color: "green",
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    id: 3,
    title: "Prediction of Parkinson's Disease using ML",
    description: "Machine learning system for Parkinson's disease prediction using spiral drawings with 96% accuracy rate.",
    longDescription: "Developed a user-friendly HTML form for uploading spiral drawings and inputting crucial information, which improved data acquisition for feature extraction and predictive modeling, achieving a 96% data accuracy rate. The system processes spiral drawings to extract features and uses the Random Forest model for prediction.",
    technologies: ["HTML", "CSS", "Python", "Flask", "Google Colab"],
    features: [
      "User-friendly HTML form interface",
      "Spiral drawing upload and processing",
      "Feature extraction algorithms",
      "Random Forest ML model",
      "96% prediction accuracy",
      "Web-based result display"
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

export interface Certification {
  name: string;
  url: string;
  platform: string;
}

export const certifications: Certification[] = [
  {
    name: "Problem Solving & SQL",
    url: "https://www.hackerrank.com/certificates/",
    platform: "HackerRank"
  },
  {
    name: "HTML, CSS & JavaScript",
    url: "https://www.udemy.com/certificate/",
    platform: "Udemy"
  },
  {
    name: "Data Structures",
    url: "https://www.coursera.org/account/accomplishments/",
    platform: "Coursera"
  },
  {
    name: "OOPs Concept",
    url: "https://www.udemy.com/certificate/",
    platform: "Udemy"
  },
  {
    name: "Software Engineering Job Simulation",
    url: "https://www.forage.com/virtual-internships/",
    platform: "Goldman Sachs"
  }
];

export const typingPhrases: string[] = [
  "Software Test Engineer",
  "Full-Stack Developer", 
  "Embedded Systems Expert",
  "MERN Stack Developer",
  "Aerospace Software Engineer"
];
