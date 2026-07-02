export const personalInfo = {
  name: "Raghunandan Sharma",
  title: "Software Engineer",
  phone: "+91 6006794166",
  email: "raghunandansharma1905@gmail.com",
  linkedin: "https://linkedin.com/in/raghunandan79",
  github: "https://github.com/Raghunandan-79",
};

export const education = {
  institution: "Model Institute of Engineering and Technology (MIET), Jammu",
  degree: "Bachelor of Technology in Computer Science (Cybersecurity)",
  period: "Sep 2023 - Jul 2027 (Expected)",
  cgpa: "7.01"
};

export const skills = [
  { category: "Programming Languages", items: "TypeScript, JavaScript, Java, Go, Python" },
  { category: "Frontend", items: "React, Vite, Redux Toolkit, HTML, CSS, Tailwind CSS" },
  { category: "Backend", items: "Node.js, Express.js" },
  { category: "Databases", items: "MongoDB" },
  { category: "DevOps", items: "Docker, Kubernetes, Jenkins, Scripting, ArgoCD, Ansible" },
  { category: "Tools", items: "Git, GitHub" },
  { category: "Operating Systems", items: "Linux, Windows" }
];

export const projects = [
  {
    title: "Brainly",
    tech: "React.js, Express.js, Node.js, MongoDB",
    githubLink: "https://github.com/Raghunandan-79/second-brain",
    liveLink: "https://brainly.raghunandan.dev/",
    points: [
      "Developed a responsive frontend using React 19, Vite, and Tailwind CSS, featuring custom reusable components, dynamic dashboards, and content modals to organize saved bookmarks.",
      "Engineered a scalable RESTful API using TypeScript, Node.js, and Express.js, implementing a modular routing architecture to manage authentication and content endpoints.",
      "Integrated Zod for strict schema validation and bcrypt for secure password hashing, ensuring type safety and secure authentication using custom middleware and JSON Web Tokens (JWT).",
      "Architected a MongoDB schema using Mongoose references to manage relationships between users, tags, and content, and built a public Link Sharing system using generated URL hashes."
    ]
  },
  {
    title: "Learn-Stack Backend",
    tech: "Express.js, Node.js, MongoDB",
    githubLink: "https://github.com/Raghunandan-79/course-selling-backend",
    points: [
      "Engineered a robust RESTful API using Node.js and Express.js, implementing a modular routing architecture to cleanly decouple User, Admin, and Course management logic.",
      "Implemented a secure Authentication system utilizing JSON Web Tokens and bcrypt for password hashing, featuring custom middleware to enforce Role-Based Access Control for admin-only endpoints.",
      "Integrated Zod for strict schema validation, ensuring 100% data integrity by enforcing rigorous type-checking and complex regex patterns for password security and user input.",
      "Architected a scalable MongoDB schema using Mongoose, leveraging document references to efficiently manage relationships between Users, Courses, and Purchase histories."
    ]
  },
  {
    title: "Wanderlust Cloud-Native Application",
    tech: "AWS EKS, ArgoCD, Helm, Prometheus, Grafana",
    githubLink: "https://github.com/Raghunandan-79/Wanderlust",
    points: [
      "Deployed a three-tier MERN stack application onto an AWS EKS cluster using Terraform for infrastructure provisioning, ensuring a scalable and highly available production environment.",
      "Implemented a complete end-to-end CI/CD pipeline utilizing Jenkins for continuous integration and ArgoCD for GitOps-based delivery, automating the transition from code commit to cluster deployment.",
      "Integrated a comprehensive DevSecOps workflow into the pipeline, incorporating SonarQube for code quality analysis, Trivy for container vulnerability scanning, and OWASP Dependency Check to secure the supply chain.",
      "Established full-stack observability by deploying Prometheus and Grafana via Helm charts for real-time cluster monitoring and optimized application performance by implementing Redis caching."
    ]
  }
];

export const achievements = [
  {
    title: "IDE Bootcamp Phase 2, 2026 (AICTE & Wadhwani Foundation)",
    description: "Led a 4 member team in IDE Bootcamp Phase 2, 2026 at SGT University, Gurugram and successfully pitched a business venture."
  }
];
