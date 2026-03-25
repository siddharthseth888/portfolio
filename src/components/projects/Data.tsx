import Image from 'next/image';
import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const PROJECT_CONTENT = [
  {
    title: 'Doctor Appointment Management System',
    description:
      'Engineered a full-stack doctor appointment booking platform using MERN stack, featuring secure authentication, role-based access (RBAC), and real-time availability. Built modular backend REST APIs using Node.js to manage doctors, users, and appointment slots efficiently. Managed global state with Context API and incorporated React Router for smooth navigation, resulting in an intuitive and accessible user experience across devices.',
    techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Context API'],
    date: '2024',
    links: [],
    images: [] 
  },
  {
    title: 'Network Packet Analyzer',
    description:
      'Developed a Python-based analyzer using Scapy for real-time packet sniffing, filtering, and inspection of live network traffic. Implemented Berkeley Packet Filters (BPF) for protocol-specific captures (TCP, UDP, ICMP) with structured, human-readable logging. Built an extensible architecture supporting IPv4/IPv6 while handling unknown protocols gracefully. Deployed in Linux environments for monitoring interfaces.',
    techStack: ['Python', 'Scapy', 'BPF', 'Linux'],
    date: '2024',
    links: [],
    images: []
  }
];

interface ProjectProps {
  title: string;
  description?: string;
  techStack?: string[];
  date?: string;
  links?: { name: string; url: string }[];
  images?: { src: string; alt: string }[];
}

const ProjectContent = ({ project }: { project: ProjectProps }) => {
  const projectData = PROJECT_CONTENT.find((p) => p.title === project.title);
  if (!projectData) return <div>Project not found</div>;

  return (
    <div className="space-y-10">
      <div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <span>{projectData.date}</span>
          </div>
          <p className="text-secondary-foreground font-sans text-base leading-relaxed md:text-lg">
            {projectData.description}
          </p>
          <div className="pt-4">
            <h3 className="mb-3 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {projectData.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const data = [
  {
    category: 'Full-Stack Web App',
    title: 'Doctor Appointment Management System',
    src: '/syntopreview.png', 
    content: <ProjectContent project={{ title: 'Doctor Appointment Management System' }} />,
  },
  {
    category: 'Cybersecurity / Systems',
    title: 'Network Packet Analyzer',
    src: '/defaipreview.png',
    content: <ProjectContent project={{ title: 'Network Packet Analyzer' }} />,
  }
];
