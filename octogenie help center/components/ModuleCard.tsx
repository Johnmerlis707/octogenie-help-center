"use client";

import Link from "next/link";
import { Icons } from "@/lib/icons";

interface ModuleCardProps {
  title: string;
  description: string;
  icon: string;
  href: string;
}

export default function ModuleCard({
  title,
  description,
  icon,
  href,
}: ModuleCardProps) {
  const IconComponent = Icons[icon as keyof typeof Icons] || Icons.FileText;

  return (
    <Link
      href={href}
      className="group block p-6 bg-gradient-to-br from-white via-white to-gray-50/50 rounded-2xl border-2 border-gray-200/60 hover:border-primary/60 hover:shadow-xl transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 relative overflow-hidden"
    >
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 via-transparent to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative flex flex-col items-center text-center gap-3">
        <div className="p-4 bg-gradient-to-br from-primary/10 via-emerald-500/10 to-primary/10 rounded-xl group-hover:from-primary/20 group-hover:via-emerald-500/20 group-hover:to-primary/20 transition-all duration-300 border border-primary/10 group-hover:border-primary/30 group-hover:shadow-lg group-hover:scale-110 group-hover:rotate-3">
          <IconComponent className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
        </div>
        <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">{title}</h3>
        <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{description}</p>
      </div>
    </Link>
  );
}
