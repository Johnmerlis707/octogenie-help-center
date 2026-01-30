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
        <div className="flex gap-6 md:gap-8 group cursor-pointer workflow-step">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl md:text-2xl z-10 relative shadow-lg ring-4 ring-white hover:shadow-xl hover:scale-110 transition-all duration-300">
              {number}
            </div>
            {!isLast && (
              <div className="w-1.5 h-full bg-gradient-to-b from-primary/30 via-gray-300 to-primary/30 flex-1 min-h-[100px] md:min-h-[120px]" />
            )}
          </div>
          <div
            className={`flex-1 p-6 md:p-8 rounded-xl ${colorClasses[color] || "bg-gray-100"} transition-all duration-300 group-hover:shadow-xl group-hover:scale-[1.02] border-2 border-transparent group-hover:border-primary/30 group-hover:-translate-y-1`}
          >
            <div className="flex items-start gap-4 md:gap-6">
              <div className="p-3 md:p-4 bg-white rounded-lg shadow-md flex-shrink-0 group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                  {title}
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </Tooltip>
  );
}
