"use client";

import { Icons } from "@/lib/icons";
import LinkText from "./LinkText";

interface ProgressBannerProps {
  title: string;
  description: string;
  icon?: string;
  variant?: "success" | "info";
}

export default function ProgressBanner({
  title,
  description,
  icon = "CheckCircle2",
  variant = "success",
}: ProgressBannerProps) {
  const IconComponent = Icons[icon as keyof typeof Icons] || Icons.CheckCircle2;
  const bgColor = variant === "success" ? "bg-green-100" : "bg-primary-light";
  const iconColor = variant === "success" ? "text-green-600" : "text-primary";

  return (
    <div className={`${bgColor} rounded-xl p-4 flex items-start gap-3`}>
      <IconComponent className={`w-6 h-6 ${iconColor} flex-shrink-0 mt-0.5`} />
      <div>
        <h4 className="font-semibold text-gray-900 mb-1">{title}</h4>
        <p className="text-sm text-gray-700">
          <LinkText>{description}</LinkText>
        </p>
      </div>
    </div>
  );
}
