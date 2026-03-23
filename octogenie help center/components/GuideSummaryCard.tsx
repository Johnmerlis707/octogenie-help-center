"use client";

import { GuideSection } from "@/lib/types";

interface GuideSummaryCardProps {
  guide: GuideSection;
}

export default function GuideSummaryCard({ guide }: GuideSummaryCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{guide.title}</h3>
          {guide.description && <p className="text-gray-600">{guide.description}</p>}
        </div>
        <div className="text-right">
          {guide.estimatedTime && (
            <div className="text-sm text-gray-500">{guide.estimatedTime}</div>
          )}
          <div className="text-sm text-gray-500">{guide.totalSteps} steps</div>
        </div>
      </div>
      <div className="flex gap-1">
        {Array.from({ length: guide.totalSteps }).map((_, i) => (
          <div key={i} className="h-2 flex-1 bg-primary rounded-full" />
        ))}
      </div>
    </div>
  );
}
