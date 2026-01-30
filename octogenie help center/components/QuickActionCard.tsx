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
      className="flex flex-col items-center gap-2 p-4 bg-white rounded-lg border border-gray-200 hover:border-primary hover:shadow-md transition-all duration-200 hover:scale-105"
    >
      <div className="p-2 bg-primary-light rounded-lg">
        <IconComponent className="w-5 h-5 text-primary" />
      </div>
      <span className="text-sm font-medium text-gray-700 text-center">
        {title}
      </span>
    </Link>
  );
}
