"use client";

import GuideStep from "@/components/GuideStep";
import { GuideSection } from "@/lib/types";

interface GuideStepsListProps {
  guide: GuideSection;
  pageId?: string;
}

export default function GuideStepsList({ guide, pageId }: GuideStepsListProps) {
  return (
    <div className="space-y-0">
      {guide.steps.map((step, index) => (
        <GuideStep
          key={step.number}
          {...step}
          isLast={index === guide.steps.length - 1}
          pageId={pageId}
        />
      ))}
    </div>
  );
}
