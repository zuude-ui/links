"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { CanvasRevealEffect } from "./canvas-reveal-effect";
import Link from "next/link";

export const Card = ({
  title,
  description,
  href,
  colors,
}: {
  title: string;
  description?: string;
  href: string;
  colors?: number[][];
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border group active:scale-98 border-black/[0.2] min-h-24 rounded-xl overflow-hidden flex items-center justify-center dark:border-white/[0.2] hover:border-transparent w-full relative p-4"
      style={{
        transition: "border .6s ease-in-out",
      }}
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full w-full absolute inset-0"
          >
            <CanvasRevealEffect
              animationSpeed={2.5}
              containerClassName="bg-black"
              colors={
                colors ?? [
                  [236, 72, 153],
                  [232, 121, 249],
                ]
              }
              dotSize={2}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <h2 className="text-xl relative text-black dark:text-white font-bold group-hover:text-white">
          {title}
        </h2>
        <p className="text-sm text-neutral-600 group-hover:text-white/80 dark:text-neutral-400 dark:group-hover:text-neutral-400">
          {description}
        </p>
      </div>
    </Link>
  );
};
