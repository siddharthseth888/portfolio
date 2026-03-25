'use client';

import { motion } from 'framer-motion';
import { CalendarDays, Code2, Globe } from 'lucide-react';

const InternshipCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-accent mx-auto mt-8 w-full max-w-4xl rounded-3xl px-6 py-8 font-sans sm:px-10 md:px-16 md:py-12"
    >
      {/* Header */}
      <div className="mb-6 flex flex-col items-center sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div>
            <h2 className="text-foreground text-2xl font-semibold">
              Secure Meters Limited
            </h2>
            <p className="text-muted-foreground text-sm">
              Cybersecurity Intern
            </p>
          </div>
        </div>

        {/* Live badge */}
        <div className="mt-4 flex items-center gap-2 sm:mt-0">
          <span className="flex items-center gap-1 rounded-full border border-green-500 px-3 py-0.5 text-sm font-medium text-green-500">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            Completed
          </span>
        </div>
      </div>

      {/* Internship Info */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex items-start gap-3">
          <CalendarDays className="mt-1 h-5 w-5 text-blue-500" />
          <div>
            <p className="text-foreground text-sm font-medium">Duration</p>
            <p className="text-muted-foreground text-sm">
              03 June, 2024 – 28 June, 2024
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Globe className="mt-1 h-5 w-5 text-green-500" />
          <div>
            <p className="text-foreground text-sm font-medium">Location</p>
            <p className="text-muted-foreground text-sm">
              Udaipur, Rajasthan
            </p>
          </div>
        </div>

        {/* Tech stack */}
        <div className="flex items-start gap-3 sm:col-span-2">
          <Code2 className="mt-1 h-5 w-5 text-purple-500" />
          <div className="w-full">
            <p className="text-foreground text-sm font-medium">Tools & Technologies</p>
            <div className="text-muted-foreground grid grid-cols-1 gap-y-1 text-sm sm:grid-cols-2">
              <ul className="decoration-none list-disc pl-4">
                <li>Wireshark, Burp Suite, Nmap</li>
                <li>Bash and PowerShell Scripting</li>
              </ul>
              <ul className="list-disc pl-4">
                <li>Network Traffic Analysis</li>
                <li>Vulnerability Testing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* What I bring */}
      <div className="mt-10">
        <p className="text-foreground mb-2 text-lg font-semibold">
          Key Responsibilities & Achievements
        </p>
        <p className="text-foreground text-sm">
          • Analyzed network traffic patterns using Wireshark, Burp Suite, and Nmap on 500+ packets to discover and record security vulnerabilities, which helped enhance system robustness.
          <br /><br />
          • Automated repetitive security scanning and vulnerability testing using Bash and PowerShell scripts, saving an estimated 8+ hours of manual work per week and streamlining team workflows.
          <br /><br />
          • Performed vulnerability scans and practical security tests, discovering and reporting 15+ possible security misconfigurations to help mitigate them and enhance system security.
        </p>
      </div>

      {/* Download Certificate */}
      <div className="mt-10 flex justify-center">
        <button
          onClick={() => {
            const link = document.createElement('a');
            link.href = '/intern.jpg';
            link.download = 'intern.jpg';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
          className="inline-flex items-center gap-2 cursor-pointer rounded-full bg-foreground px-6 py-3 font-semibold text-background transition-colors duration-300 hover:opacity-80"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
          Download Certificate
        </button>
      </div>

    </motion.div>
  );
};

export default InternshipCard;
