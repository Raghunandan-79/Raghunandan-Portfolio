export const personalInfo = {
  name: "Raghunandan Sharma",
  title: "DevOps Engineer",
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
  { category: "Containers and Orchestration", items: "Docker, Kubernetes, Docker Compose" },
  { category: "Cloud", items: "AWS" },
  { category: "Infrastructure as Code (IaC)", items: "Terraform" },
  { category: "CI/CD", items: "GitLab CI/CD, Jenkins" },
  { category: "Monitoring and Observability", items: "Prometheus, Grafana" },
  { category: "Automation", items: "Bash Scripting, Python" },
  { category: "Core Systems", items: "Linux, Nginx, Networking" },
  { category: "Databases", items: "MySQL, MongoDB, PostgreSQL" },
  { category: "Tools", items: "Git, GitHub, Nano, Postman" }
];

export const projects = [
  {
    title: "Notes App CI/CD Pipeline",
    tech: "Docker, GitLab CI/CD, Jenkins, NGINX",
    link: "https://github.com/Raghunandan-79/notes-app",
    points: [
      "Containerized a full-stack Notes Application using Docker and multi-service configurations with Docker Compose.",
      "Implemented CI/CD pipelines using GitLab CI/CD for automated build and deployment workflows.",
      "Configured Jenkins pipelines with Shared Libraries for reusable and modular CI/CD automation.",
      "Integrated NGINX as a reverse proxy for application routing and service management.",
      "Automated application deployment workflow following DevOps best practices."
    ]
  },
  {
    title: "Chat Application on Kubernetes",
    tech: "Kubernetes, Docker, MongoDB, NGINX Ingress",
    link: "https://github.com/Raghunandan-79/Chat-App",
    points: [
      "Deployed a containerized MERN chat application on Kubernetes using Deployments, Services, and Ingress.",
      "Implemented persistent MongoDB storage using Persistent Volumes (PV) and Persistent Volume Claims (PVC).",
      "Managed Kubernetes namespaces, secrets, and networking for secure multi-service orchestration.",
      "Configured Ingress-based traffic routing and internal service communication within the Kubernetes cluster."
    ]
  },
  {
    title: "Kubernetes Runtime Threat Detection System",
    tech: "Kubernetes, Falco, eBPF, Helm, kind",
    link: "https://github.com/Raghunandan-79/kubernetes-runtime-threat-detection",
    points: [
      "Built a real-time Kubernetes runtime threat detection system using Falco deployed as a DaemonSet inside a kind Kubernetes cluster.",
      "Configured Falco with the modern_bpf eBPF driver for syscall-level runtime monitoring and container security analysis.",
      "Developed custom Falco detection rules for threats including shell access, privileged containers, sensitive file access, suspicious network connections, and container escape attempts."
    ]
  }
];

export const experience = [
  {
    role: "Technical Mentor",
    company: "ZeroOne Network",
    location: "Jammu, India",
    period: "Oct 2024 - Sep 2025",
    points: [
      "Conducted 40+ technical sessions mentoring 200+ students in Data Structures and Algorithms.",
      "Increased competitive programming participation by 2.5x.",
      "Designed structured learning roadmap enabling beginners to achieve consistent DSA practice consistency within 30 days.",
      "Reviewed and optimized student solutions, introducing time and space complexity analysis practices."
    ]
  }
];
