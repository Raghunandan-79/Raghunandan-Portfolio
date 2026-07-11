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
  period: "Sep 2023 - Jul 2027",
};

export const skills = [
  {
    category: "Programming Languages",
    items: "JavaScript, TypeScript, Go, Java, Python",
  },
  {
    category: "Frontend",
    items: "Next.js, React.js, Vite, Redux, Tailwind CSS, HTML, CSS",
  },
  { category: "Backend", items: "Node.js, Next.js, Express.js, Prisma" },
  { category: "Databases", items: "PostgreSQL, MongoDB" },
  {
    category: "DevOps and Cloud",
    items:
      "Docker, Kubernetes, Jenkins, Bash Scripting, GitLab CI/CD, Terraform",
  },
  { category: "AI/LLM", items: "LangChain, LangGraph" },
  { category: "Tools", items: "Turborepo, Vscode, Postman, Git, GitHub" },
  { category: "Operating Systems", items: "Linux, Windows" },
  {
    category: "Relevant Coursework",
    items: "Object Oriented Programming, Operating System, Computer Networks",
  },
];

export const projects = [
  {
    title: "Scrawl",
    tech: "Next.js, PostgreSQL, Prisma, WebSockets, TypeScript, Tailwind CSS",
    githubLink: "https://github.com/Raghunandan-79/scrawl",
    liveLink: "https://scrawl.raghunandan.dev/",
    points: [
      "Engineered a real-time collaborative whiteboard with Next.js, Express, and custom WebSocket servers, implementing a thousand-node live collaboration cursor position, wiggly hand-drawn notielles, and mouse-draw sharing system.",
      "Designed a high-performance vector canvas supporting infinite pan/zoom projection, wiggly hand-drawn notielles, and mouse-draw sharing system.",
      "Optimized database operations on a PostgreSQL database using query optimization ORM by utilizing index-level connection pooling, persistent event life-cursor traversals from persistent database writes.",
      "Architected a TypeScript monorepo configuration and UI packages, streamlining independent deployment pipelines for Next.js, HTTP APIs, and WebSocket servers.",
    ],
  },
  {
    title: "Brainly",
    tech: "React.js, Express.js, Node.js, MongoDB",
    githubLink: "https://github.com/Raghunandan-79/second-brain",
    liveLink: "https://brainly.raghunandan.dev/",
    points: [
      "Built a responsive frontend using React 19 with Vite, Vue, and Tailwind CSS with reusable components, dashboards, and user-friendly interface and filtering interface.",
      "Engineered a modular REST API using TypeScript, Node.js, and Express.js to manage authentication, content, and database layers.",
      "Implemented user authentication using JWT, bcrypt, and ZOD, ensuring protected endpoints and type-safe request validation.",
      "Designed a scalable MongoDB schema using Mongoose references and developed a public Link Sharing system using generated URL hashes.",
    ],
  },
  {
    title: "Learn-Stack Backend",
    tech: "Express.js, Node.js, MongoDB",
    githubLink: "https://github.com/Raghunandan-79/course-selling-backend",
    points: [
      "Developed a modular REST API using Node.js and Express.js to manage users, admins, courses, and purchase history.",
      "Built a secure authentication and authorization system using JWT, bcrypt, and Role-Based Access Control.",
      "Integrated ZOD for strict request validation, ensuring reliable and type-safe API interactions.",
      "Designed a scalable MongoDB schema using Mongoose references to efficiently manage relationships between users, courses, and purchase history.",
    ],
  },
];

export const achievements = [
  {
    title: "IDE Bootcamp Phase 2, 2026 (AICTE & Wadhwani Foundation)",
    description:
      "Led a 4 member team in IDE Bootcamp Phase 2, 2026 at SGT University, Gurugram and successfully pitched a business venture.",
  },
];
