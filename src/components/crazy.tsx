'use client';
import React from 'react';
import { ExternalLink } from 'lucide-react';

const platforms = [
  { name: 'LeetCode', url: 'https://leetcode.com/u/mysterons_20/' },
  { name: 'Codeforces', url: 'https://codeforces.com/profile/siddharth_seth20' },
  { name: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/profile/siddharthseth20' },
];

const Crazy = () => {
  return (
    <div className="mx-auto w-full">
      <div className="mb-8 p-6 bg-accent rounded-3xl">
        <h2 className="text-foreground text-3xl font-semibold md:text-4xl">
          Coding Platforms
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          Solved <strong>350+ Coding Problems</strong> across various competitive programming platforms, including:
        </p>
        <ul className="mt-4 space-y-3 text-muted-foreground">
          {platforms.map((p) => (
            <li key={p.name} className="flex items-center gap-2">
              <span className="text-foreground font-medium">{p.name}</span>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-full bg-neutral-200 px-2.5 py-0.5 text-xs text-neutral-700 hover:bg-neutral-300 transition-colors dark:bg-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-600"
              >
                Visit <ExternalLink className="h-3 w-3" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Crazy;