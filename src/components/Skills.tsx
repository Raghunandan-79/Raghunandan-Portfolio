import React from 'react';
import { skills } from '../data';
import { Code, Terminal, Network } from 'lucide-react';

const iconMapping: Record<string, string> = {
  "Docker": "devicon-docker-plain colored",
  "Kubernetes": "devicon-kubernetes-plain colored",
  "Ansible": "devicon-ansible-plain colored",
  "Jenkins": "devicon-jenkins-line colored",
  "Python": "devicon-python-plain colored",
  "Linux": "devicon-linux-plain colored",
  "MongoDB": "devicon-mongodb-plain colored",
  "Git": "devicon-git-plain colored",
  "GitHub": "devicon-github-original",
  "React": "devicon-react-original colored",
  "React.js": "devicon-react-original colored",
  "JavaScript": "devicon-javascript-plain colored",
  "TypeScript": "devicon-typescript-plain colored",
  "Java": "devicon-java-plain colored",
  "Go": "devicon-go-plain colored",
  "Vite": "devicon-vite-plain colored",
  "Redux": "devicon-redux-original colored",
  "Redux Toolkit": "devicon-redux-original colored",
  "HTML": "devicon-html5-plain colored",
  "CSS": "devicon-css3-plain colored",
  "Tailwind CSS": "devicon-tailwindcss-original colored",
  "Node.js": "devicon-nodejs-plain colored",
  "Express.js": "devicon-express-original",
  "Scripting": "devicon-bash-plain colored",
  "Bash Scripting": "devicon-bash-plain colored",
  "ArgoCD": "devicon-argocd-plain colored",
  "Windows": "devicon-windows8-original colored",
  "Next.js": "devicon-nextjs-plain",
  "Prisma": "devicon-prisma-original",
  "PostgreSQL": "devicon-postgresql-plain colored",
  "GitLab CI/CD": "devicon-gitlab-plain colored",
  "Terraform": "devicon-terraform-plain colored",
  "Vscode": "devicon-vscode-plain colored",
  "Postman": "devicon-postman-plain colored"
};

const customSVGs: Record<string, React.ReactNode> = {
  "LangChain": (
    <svg className="w-5 h-5 fill-[#13B495] shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.796 0a6.93 6.93 0 0 0-4.91 2.019L5.451 5.455l3.273 3.27 3.432-3.432a2.284 2.284 0 0 1 3.277 0 2.28 2.28 0 0 1 0 3.275L12 12.001l3.273 3.273 3.433-3.435c2.692-2.692 2.692-7.127 0-9.82A6.92 6.92 0 0 0 13.796 0m-5.07 8.728-3.433 3.434c-2.692 2.693-2.692 7.126 0 9.819A6.92 6.92 0 0 0 10.203 24a6.93 6.93 0 0 0 4.911-2.02l3.432-3.432-3.271-3.272-3.433 3.433a2.284 2.284 0 0 1-3.277 0 2.28 2.28 0 0 1 0-3.276L12 12z" />
    </svg>
  ),
  "LangGraph": (
    <svg className="w-5 h-5 fill-[#6366f1] shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 19H10A5 5 0 115 14ZM19 14A5 5 0 1114 19H19ZM10 5A5 5 0 105 10V5ZM19 5V10A5 5 0 1014 5Z" />
    </svg>
  ),
  "Turborepo": (
    <svg className="w-5 h-5 fill-[#EF4444] shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.9906 4.1957c-4.2998 0-7.7981 3.501-7.7981 7.8043s3.4983 7.8043 7.7981 7.8043c4.2999 0 7.7982-3.501 7.7982-7.8043s-3.4983-7.8043-7.7982-7.8043m0 11.843c-2.229 0-4.0356-1.8079-4.0356-4.0387s1.8065-4.0387 4.0356-4.0387S16.0262 9.7692 16.0262 12s-1.8065 4.0388-4.0356 4.0388m.6534-13.1249V0C18.9726.3386 24 5.5822 24 12s-5.0274 11.66-11.356 12v-2.9139c4.7167-.3372 8.4516-4.2814 8.4516-9.0861s-3.735-8.749-8.4516-9.0861M5.113 17.9586c-1.2502-1.4446-2.0562-3.2845-2.2-5.3046H0c.151 2.8266 1.2808 5.3917 3.051 7.3668l2.0606-2.0622zM11.3372 24v-2.9139c-2.02-.1439-3.8584-.949-5.3019-2.2018l-2.0606 2.0623c1.975 1.773 4.538 2.9022 7.361 3.0534z" />
    </svg>
  )
};

const customLucideIcons: Record<string, React.ReactNode> = {
  "Object Oriented Programming": <Code size={18} className="text-[#a855f7] shrink-0" />,
  "Operating System": <Terminal size={18} className="text-[#3b82f6] shrink-0" />,
  "Computer Networks": <Network size={18} className="text-[#10b981] shrink-0" />
};

const SkillBadge = ({ name }: { name: string }) => {
  const customIcon = customSVGs[name];
  const customLucide = customLucideIcons[name];
  const iconClass = iconMapping[name];

  return (
    <div className="flex items-center gap-2 px-3 py-1.5 bg-white/[0.03] border border-white/10 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-200 cursor-default select-none shrink-0">
      {customIcon ? (
        customIcon
      ) : customLucide ? (
        customLucide
      ) : iconClass ? (
        <i className={`${iconClass} text-lg shrink-0`}></i>
      ) : (
        <i className="devicon-bash-plain text-lg shrink-0 text-white/40"></i>
      )}
      <span className="text-sm text-neutral-300 font-medium">{name}</span>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="relative pb-[100px] bg-[radial-gradient(circle_at_top,#1a0b2e_0%,#0a0a0a_60%)]">
      {/* Background glowing orbs */}
      <div className="absolute top-[20%] left-[10%] w-[100px] h-[100px] bg-[#a855f7] blur-[80px] rounded-full z-0 pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[150px] h-[150px] bg-[#c084fc] blur-[100px] rounded-full z-0 pointer-events-none" />

      <div className="text-left z-10">
        <h2 className="title text-white">
          Technologies I've worked on
        </h2>
      </div>
      
      <div className="flex flex-col gap-6 z-10 w-full max-w-full">
        {skills.map((categoryGroup, index) => {
          const itemsList = categoryGroup.items.split(',').map(item => item.trim());
          return (
            <div key={index} className="flex flex-col md:flex-row md:items-start gap-3 md:gap-5 pb-5 border-b border-white/[0.06] last:border-b-0">
              <div className="w-full md:w-[220px] shrink-0 md:pt-1">
                <span className="text-[1.05rem] text-neutral-400 font-semibold block">
                  {categoryGroup.category}:
                </span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {itemsList.map((name, i) => (
                  <SkillBadge key={i} name={name} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
