export const personalInfo = {
  name: "Vikas Singh",
  title: "Software Developer | MERN Stack | Java | Spring Boot | Problem Solver",
  tagline: "Passionate Software Developer specializing in MERN Stack, Java, and Spring Boot. Experienced in aerospace software testing with a strong background in problem-solving and full-stack development.",
  location: "Bengaluru, Karnataka",
  phone: "+91-9829110883",
  email: "1dt19ec082vikas@gmail.com",
  resumeUrl: "/resume.pdf", // Add your resume PDF to public folder
  socialLinks: {
    linkedin: "https://linkedin.com/in/vikas-singh",
    github: "https://github.com/vikas-singh",
    hackerrank: "https://hackerrank.com/vikas_singh",
    leetcode: "https://leetcode.com/vikas_singh"
  }
};

export const about = {
  title: "Professional Journey",
  description: [
    "I'm a passionate Software Developer with a strong foundation in Electronics and Communication Engineering from Dayananda Sagar Academy. My journey in tech began with embedded systems testing at Moog India Technology Center, where I specialized in aerospace software validation.",
    "With expertise in DO-178 B/C safety standards and experience in rigorous software testing, I've transitioned to full-stack development, focusing on MERN stack and modern web technologies."
  ],
  education: {
    degree: "B.E - Electronics and Communication",
    college: "Dayananda Sagar Academy of Technology And Management",
    year: "2019 — 2023",
    cgpa: "8.67",
    location: "Bengaluru, Karnataka"
  }
};

export const skills = {
  languages: [
    { name: "JavaScript", level: 90, icon: "fab fa-js-square" },
    { name: "Java", level: 85, icon: "fab fa-java" },
    { name: "Python", level: 80, icon: "fab fa-python" },
    { name: "C++", level: 75, icon: "fas fa-code" },
    { name: "C", level: 70, icon: "fas fa-code" }
  ],
  frameworks: [
    { name: "React.js", level: 90, icon: "fab fa-react" },
    { name: "Node.js", level: 85, icon: "fab fa-node-js" },
    { name: "Spring Boot", level: 80, icon: "fas fa-leaf" },
    { name: "Express.js", level: 85, icon: "fas fa-server" },
    { name: "TailwindCSS", level: 95, icon: "fas fa-paint-brush" }
  ],
  tools: [
    { name: "Data Structures", level: 90, icon: "fas fa-project-diagram" },
    { name: "SQL", level: 85, icon: "fas fa-database" },
    { name: "Git", level: 90, icon: "fab fa-git-alt" },
    { name: "DevOps", level: 75, icon: "fas fa-cogs" },
    { name: "Linux", level: 80, icon: "fab fa-linux" }
  ]
};

export const experience = {
  title: "Software Test Engineer",
  company: "Moog India Technology Center",
  location: "Bengaluru, India",
  duration: "June 2023 — May 2024",
  achievements: [
    "Analyzed and understood functional requirements defined in the Software Development Document (SDD) to ensure 100% test coverage of functional requirements.",
    "Verified Embedded C code implementation against the SDD to identify and report any mismatches or deviations from functional requirements.",
    "Experienced in embedded systems testing, including compliance with DO-178 B/C safety standards for aerospace software.",
    "Executed 50+ PTU (Program Test Unit) files weekly on target hardware utilizing IBM RTRT (Rational Test Real Time) for rigorous software validation.",
    "Utilized tools like MATLAB and RTRT for test case management and defect tracking, ensuring timely resolution of issues."
  ]
};

export const projects = [
  {
    id: 1,
    title: "Job Portal",
    description: "Full-stack job portal application using MERN stack with JWT authentication and advanced search functionality.",
    longDescription: "Engineered secure RESTful APIs utilizing JWT-based authentication for a job portal application, enabling seamless job posting, streamlined searching, and efficient application management for over 100+ users.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "JWT"],
    features: [
      "JWT-based secure authentication",
      "Advanced search & filtering",
      "Employer dashboard",
      "Profile management with resume upload",
      "Real-time application tracking",
      "RESTful API design"
    ],
    year: "2025",
    icon: "fas fa-briefcase",
    color: "purple",
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    id: 2,
    title: "Shopping Cart",
    description: "E-commerce application built with React and TailwindCSS featuring responsive design and modular components.",
    longDescription: "Developed a fully functional e-commerce shopping cart application using React with modular components for product listing, cart management, and checkout process.",
    technologies: ["React", "TailwindCSS", "HTML", "CSS"],
    features: [
      "Responsive product listing",
      "Dynamic cart management",
      "Modular component architecture",
      "Interactive checkout process",
      "Mobile-first design",
      "State management with hooks"
    ],
    year: "2024",
    icon: "fas fa-shopping-cart",
    color: "green",
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    id: 3,
    title: "Parkinson's Disease Prediction",
    description: "Machine learning application using Random Forest model for medical diagnosis with 96% accuracy.",
    longDescription: "Developed a user-friendly web application for Parkinson's disease prediction using spiral drawings and machine learning, achieving 96% accuracy with Random Forest model.",
    technologies: ["Python", "Flask", "Machine Learning", "HTML", "CSS"],
    features: [
      "Random Forest ML model",
      "96% prediction accuracy",
      "Spiral drawing analysis",
      "Feature extraction algorithms",
      "Web-based interface",
      "Real-time predictions"
    ],
    year: "2023",
    icon: "fas fa-brain",
    color: "pink",
    githubUrl: "#",
    demoUrl: "#"
  }
];

export const codingProfiles = [
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

export const certifications = [
  "Problem Solving & SQL - HackerRank",
  "HTML, CSS & JavaScript - Udemy",
  "Data Structures - Coursera",
  "OOPs Concept - Udemy",
  "Software Engineering Job Simulation - Goldman Sachs"
];

export const typingPhrases = [
  "Software Developer",
  "MERN Stack Developer", 
  "Java Spring Boot Developer",
  "Problem Solver",
  "Full Stack Engineer"
];
