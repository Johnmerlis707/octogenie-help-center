"use client";

import Link from "next/link";
import { Icons } from "@/lib/icons";

export interface TocLink {
  label: string;
  href: string;
}

interface TableOfContentsProps {
  title?: string;
  links: TocLink[];
}

export default function TableOfContents({
  title = "On this page",
  links,
}: TableOfContentsProps) {
  if (links.length === 0) return null;

  return (
    <nav
      className="relative rounded-2xl border-2 border-gray-200/60 bg-gradient-to-br from-white via-gray-50/50 to-white p-5 md:p-6 mb-8 shadow-lg shadow-gray-200/30 backdrop-blur-sm overflow-hidden"
      aria-label="Table of contents"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary/10 via-transparent to-transparent rounded-full blur-2xl -z-0" />
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-indigo-100/30 via-transparent to-transparent rounded-full blur-xl -z-0" />
      
      <div className="relative">
        <div className="flex items-center gap-2 mb-4">
          <div className="p-1.5 rounded-lg bg-gradient-to-br from-primary/20 to-emerald-500/20">
            <Icons.List className="w-4 h-4 text-primary" />
          </div>
          <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">
            {title}
          </h3>
        </div>
        <ul className="space-y-2.5">
          {links.map(({ label, href }, index) => (
            <li key={href} className="group">
              <Link
                href={href}
                className="flex items-center gap-3 text-gray-700 hover:text-primary font-medium py-2 px-3 rounded-lg transition-all duration-200 hover:bg-gradient-to-r hover:from-primary/5 hover:to-emerald-50/50 hover:translate-x-1 group-hover:shadow-sm"
              >
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-primary/20 to-emerald-500/20 flex items-center justify-center text-xs font-bold text-primary group-hover:from-primary/30 group-hover:to-emerald-500/30 transition-all duration-200">
                  {index + 1}
                </span>
                <span className="flex-1">{label}</span>
                <Icons.ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-primary transform -rotate-90 transition-transform duration-200 opacity-0 group-hover:opacity-100" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
