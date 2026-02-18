"use client";

import Link from "next/link";
import { Icons } from "@/lib/icons";

interface QuickActionCardProps {
  title: string;
  icon: string;
  href: string;
}

export default function QuickActionCard({
  title,
  icon,
  href,
}: QuickActionCardProps) {
  const IconComponent = Icons[icon as keyof typeof Icons] || Icons.FileText;

  return (
    <Link
      href={href}
      className="group flex flex-col items-center gap-2 p-4 bg-gradient-to-br from-white to-gray-50/50 rounded-xl border-2 border-gray-200/60 hover:border-primary/60 hover:shadow-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1 relative overflow-hidden"
    >
      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
      
      <div className="relative p-2.5 bg-gradient-to-br from-primary/10 via-emerald-500/10 to-primary/10 rounded-lg group-hover:from-primary/20 group-hover:via-emerald-500/20 group-hover:to-primary/20 transition-all duration-300 border border-primary/10 group-hover:border-primary/30 group-hover:shadow-md group-hover:scale-110 group-hover:rotate-6">
        <IconComponent className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
      </div>
      <span className="relative text-sm font-semibold text-gray-700 text-center group-hover:text-primary transition-colors duration-300">
        {title}
      </span>
    </Link>
  );
}
