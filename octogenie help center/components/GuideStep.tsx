"use client";

import Image from "next/image";
import { Icons } from "@/lib/icons";

import { GuideStepData } from "@/lib/types";


interface GuideStepProps extends GuideStepData {
  showConnector?: boolean;
}

export default function GuideStep({
  number,
  title,
  description,
  image,
  imageAlt,
  actionButton,
  expectedOutcome,
  tips,
  isLast = false,
  showConnector = true,
}: GuideStepProps) {
  return (
    <div className="flex gap-6 md:gap-8">
      {/* Step Number Circle */}
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl md:text-2xl z-10 relative shadow-lg ring-4 ring-white">
          {number}
        </div>
        {showConnector && !isLast && (
          <div className="w-1.5 h-full bg-gradient-to-b from-primary/30 via-gray-300 to-primary/30 flex-1 min-h-[100px] md:min-h-[120px]" />
        )}
      </div>

      {/* Step Content */}
      <div className="flex-1 pb-8 md:pb-12">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {/* Image Section - Only show when image exists and is not empty */}
          {image && typeof image === 'string' && image.trim() !== "" && (
            <div className="relative w-full h-64 md:h-80 bg-gray-50 border-b border-gray-200">
              <Image
                src={image}
                alt={imageAlt || `Step ${number}: ${title}`}
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            </div>
          )}

          {/* Content Section */}
          <div className="p-6 md:p-8 space-y-4">
            {/* Title */}
            <h3 className="text-xl md:text-2xl font-bold text-gray-900">
              {title}
            </h3>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed">{description}</p>

            {/* Action Button */}
            {actionButton && (
              <div className="flex items-start gap-3 pt-2">
                <button className="px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center gap-2 shadow-md">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  {actionButton.text}
                </button>
                {actionButton.description && (
                  <p className="text-sm text-gray-600 flex-1 pt-2">
                    {actionButton.description}
                  </p>
                )}
              </div>
            )}

            {/* Tips */}
            {tips && tips.length > 0 && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                <div className="flex items-start gap-2">
                  <Icons.Lightbulb className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <h4 className="font-semibold text-blue-900 mb-2">Pro Tip</h4>
                    <ul className="list-disc list-inside space-y-1 text-blue-800 text-sm">
                      {tips.map((tip, index) => (
                        <li key={index}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Expected Outcome */}
            {expectedOutcome && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
                <div className="flex items-start gap-2">
                  <Icons.CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <h4 className="font-semibold text-green-900 mb-1">
                      Expected Outcome
                    </h4>
                    <p className="text-green-800 text-sm">{expectedOutcome}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
