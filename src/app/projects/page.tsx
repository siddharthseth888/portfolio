'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Doctor Appointment Management System',
    subtitle: 'Full-Stack Doctor Appointment Booking Platform',
    techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Context API', 'React Router'],
    bullets: [
      'Engineered a full-stack doctor appointment booking platform using MERN stack, featuring secure authentication, role-based access (RBAC), and real-time availability.',
      'Built modular backend REST APIs using Node.js to manage doctors, users, and appointment slots efficiently.',
      'Managed global state with Context API and incorporated React Router for smooth navigation, resulting in an intuitive and accessible user experience across devices.',
    ],
  },
  {
    title: 'Network Packet Analyzer',
    subtitle: 'Real-Time Network Traffic Monitoring Tool',
    techStack: ['Python', 'Scapy', 'BPF', 'Linux', 'IPv4/IPv6'],
    bullets: [
      'Developed a Python-based analyzer using Scapy for real-time packet sniffing, filtering, and inspection of live network traffic.',
      'Implemented Berkeley Packet Filters (BPF) for protocol-specific captures (TCP, UDP, ICMP) with structured, human-readable logging.',
      'Built an extensible architecture supporting IPv4/IPv6 while handling unknown protocols gracefully.',
      'Deployed in Linux environments for monitoring interfaces (e.g., eth0), validating real-world use cases like HTTP and DNS traffic analysis.',
    ],
  },
];

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden px-4 py-10 md:py-16">
      {/* blurred background word */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center overflow-hidden">
        <div
          className="hidden bg-gradient-to-b from-neutral-500/10 to-neutral-500/0 bg-clip-text text-[10rem] leading-none font-black text-transparent select-none sm:block lg:text-[16rem]"
          style={{ marginBottom: '-2.5rem' }}
        >
          Siddharth
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative z-10 mx-auto max-w-5xl"
      >
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-10">Projects</h1>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="rounded-3xl bg-accent p-6 sm:p-10"
            >
              <h2 className="text-2xl font-semibold text-foreground">{project.title}</h2>
              <p className="text-muted-foreground mt-1 text-sm">{project.subtitle}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="mt-6 space-y-3 list-disc pl-5 text-sm text-foreground leading-relaxed">
                {project.bullets.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
