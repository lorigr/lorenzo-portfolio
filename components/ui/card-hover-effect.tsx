"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const HoverEffect = ({
  items,
  className,
  horizontal = false,
  scrollRef,
}: {
  items: {
    title: string;
    description: string;
    link?: string;
    titleLink?: string;
    tags?: string[];
  }[];
  className?: string;
  horizontal?: boolean;
  scrollRef?: React.Ref<HTMLDivElement>;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      ref={scrollRef}
      className={cn(
        horizontal
          ? "w-full max-w-full flex flex-nowrap gap-4 overflow-x-auto pb-2 snap-x snap-mandatory"
          : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
        className,
      )}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className={cn(
            "relative group block p-2 h-full",
            horizontal
              ? "flex-none w-full md:w-[calc((100%-1rem)/2)] snap-start"
              : "w-full",
          )}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {hoveredIndex === idx && (
            <motion.span
              className="absolute inset-0 h-full w-full bg-white/5 block rounded-2xl"
              layoutId="hoverBackground"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.15 },
              }}
              exit={{
                opacity: 0,
                transition: { duration: 0.15, delay: 0.2 },
              }}
            />
          )}
          <Card>
            <CardTitle>
              {item.titleLink ? (
                <a
                  href={item.titleLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white/80 transition-colors"
                >
                  {item.title}
                </a>
              ) : (
                item.title
              )}
            </CardTitle>
            <CardDescription>{item.description}</CardDescription>
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex w-fit text-xs font-mono text-white/60 hover:text-white transition-colors"
              >
                View repository
              </a>
            )}
            {item.tags && (
              <div className="flex flex-wrap gap-2 mt-4">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-full border border-white/10 text-white/50 font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-6 overflow-hidden bg-black border border-white/10 group-hover:border-white/20 relative z-20 transition-all duration-300",
        className,
      )}
    >
      <div className="relative z-50 h-full flex flex-col">{children}</div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        "text-white font-semibold tracking-wide text-lg mb-2",
        className,
      )}
    >
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "text-white/50 text-sm leading-relaxed tracking-wide flex-1",
        className,
      )}
    >
      {children}
    </p>
  );
};
