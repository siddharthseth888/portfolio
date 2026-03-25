'use client';

import FluidCursor from '@/components/FluidCursor';
import { motion } from 'framer-motion';
import {
  BriefcaseBusiness,
  Laugh,
  Layers,
  PartyPopper,
  UserRoundSearch,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const navItems = [
  { key: 'Me', href: '/me', color: '#329696', icon: Laugh },
  { key: 'Projects', href: '/projects', color: '#3E9858', icon: BriefcaseBusiness },
  { key: 'Skills', href: '/skills', color: '#856ED9', icon: Layers },
  { key: 'Fun', href: '/fun', color: '#B95F9D', icon: PartyPopper },
  { key: 'Contact', href: '/contact', color: '#C19433', icon: UserRoundSearch },
] as const;

export default function Home() {
  const topElementVariants = {
    hidden: { opacity: 0, y: -60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'ease', duration: 0.8 },
    },
  };
  const bottomElementVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'ease', duration: 0.8, delay: 0.2 },
    },
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pb-10 md:pb-20">
      {/* big blurred footer word */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center overflow-hidden">
        <div
          className="hidden bg-gradient-to-b from-neutral-500/10 to-neutral-500/0 bg-clip-text text-[10rem] leading-none font-black text-transparent select-none sm:block lg:text-[16rem]"
          style={{ marginBottom: '-2.5rem' }}
        >
          Siddharth
        </div>
      </div>

      {/* header */}
      <motion.div
        className="z-1 mt-24 mb-8 flex flex-col items-center text-center md:mt-4 md:mb-12"
        variants={topElementVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-secondary-foreground mt-1 text-xl font-semibold md:text-2xl">
          Hey, I&apos;m Siddharth 👋
        </h2>
        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
          Software Engineer & Full-Stack Developer
        </h1>
      </motion.div>

      {/* centre memoji */}
      <div className="relative z-10 h-52 w-48 overflow-hidden sm:h-72 sm:w-72">
        <Image
          src="/landing-memojis.png"
          alt="Hero memoji"
          width={2000}
          height={2000}
          priority
          className="translate-y-14 scale-[2] object-cover"
        />
      </div>

      {/* navigation buttons */}
      <motion.div
        variants={bottomElementVariants}
        initial="hidden"
        animate="visible"
        className="z-10 mt-4 flex w-full flex-col items-center justify-center md:px-0"
      >
        <div className="mt-4 grid w-full max-w-2xl grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {navItems.map(({ key, href, color, icon: Icon }) => (
            <Link key={key} href={href}>
              <Button
                variant="outline"
                className="aspect-square w-full cursor-pointer rounded-2xl border bg-background/30 py-8 shadow-none backdrop-blur-lg active:scale-95 md:p-10 border-border hover:bg-border/30"
              >
                <div className="flex h-full flex-col items-center justify-center gap-1 text-foreground">
                  <Icon size={22} strokeWidth={2} color={color} />
                  <span className="text-xs font-medium sm:text-sm">{key}</span>
                </div>
              </Button>
            </Link>
          ))}
        </div>
      </motion.div>
      <FluidCursor />
    </div>
  );
}
