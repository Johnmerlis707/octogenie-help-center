"use client";

import Link from "next/link";
import { Icons } from "@/lib/icons";
import Tooltip from "./Tooltip";

interface WorkflowStepProps {
  number: number;
  title: string;
  description: string;
  color: string;
  icon: string;
  preview: string;
  href: string;
  isLast?: boolean;
}

export default function WorkflowStep({
  number,
  title,
  description,
  color,
  icon,
  preview,
  href,
  isLast = false,
}: WorkflowStepProps) {
  const IconComponent = Icons[icon as keyof typeof Icons] || Icons.FileText;
  const colorClasses: Record<string, string> = {
    "blue-light": "bg-blue-100",
    "purple-light": "bg-purple-100",
    "green-light": "bg-green-100",
    "teal-light": "bg-teal-100",
    "orange-light": "bg-orange-100",
  };

  return (
    <Tooltip content={preview}>
      <Link href={href} className="block">
        <div className="flex gap-4 md:gap-5 group cursor-pointer workflow-step">
          <div className="flex flex-col items-center relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-primary/20 to-emerald-500/20 blur-xl group-hover:blur-2xl transition-all duration-500" />
            </div>
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-primary via-emerald-500 to-primary flex items-center justify-center text-white font-bold text-lg md:text-xl z-10 relative shadow-xl ring-3 ring-white group-hover:shadow-2xl group-hover:scale-110 group-hover:ring-primary/20 transition-all duration-300 group-hover:rotate-6">
              {number}
            </div>
            {!isLast && (
              <div className="w-1.5 h-full bg-gradient-to-b from-primary/40 via-primary/20 to-primary/40 flex-1 min-h-[50px] md:min-h-[60px] group-hover:from-primary/60 group-hover:via-primary/40 group-hover:to-primary/60 transition-all duration-300" />
            )}
          </div>
          <div
            className={`relative flex-1 px-4 pt-4 pb-3 md:px-5 md:pt-5 md:pb-4 rounded-xl ${colorClasses[color] || "bg-gray-100"} transition-all duration-300 group-hover:shadow-2xl group-hover:scale-[1.02] border-2 border-transparent group-hover:border-primary/40 group-hover:-translate-y-1 overflow-hidden`}
          >
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            
            <div className="relative flex items-start gap-3 md:gap-4">
              <div className="p-2 md:p-3 bg-white rounded-lg shadow-lg flex-shrink-0 group-hover:shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 border border-gray-100">
                <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-1 group-hover:from-primary group-hover:via-emerald-600 group-hover:to-primary transition-all duration-300">
                  {title}
                </h3>
                <p className="text-sm md:text-base text-gray-700 leading-snug group-hover:text-gray-800 transition-colors duration-300">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </Tooltip>
  );
}
