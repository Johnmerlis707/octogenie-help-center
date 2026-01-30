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
      className="block p-6 bg-white rounded-xl border border-gray-200 hover:border-primary hover:shadow-lg transition-all duration-200 hover:scale-[1.02]"
    >
      <div className="flex flex-col items-center text-center gap-3">
        <div className="p-4 bg-primary-light rounded-lg">
          <IconComponent className="w-8 h-8 text-primary" />
        </div>
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </Link>
  );
}
