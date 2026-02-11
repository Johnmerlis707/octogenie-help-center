"use client";

import GuideStep from "@/components/GuideStep";
import ProgressBanner from "@/components/ProgressBanner";
import FeedbackSection from "@/components/FeedbackSection";
import {
  createCaseManualGuide,
  createCaseFromECourtGuide,
  closeCaseGuide,
  editCaseGuide,
} from "@/lib/casesGuide";

export default function CasesPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-12">
      {/* Header Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
            Core Module
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 flex items-center gap-3">
          <span>Cases</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Track and manage your legal cases within the OctoGenie platform. You can
          manually create cases or import them directly from eCourt.
        </p>
      </div>

      {/* Manual Entry Section */}
      <section id="manual-entry" className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            {createCaseManualGuide.title}
          </h2>
          <p className="text-lg text-gray-600">
            {createCaseManualGuide.subtitle}
          </p>
        </div>

        {/* Guide Summary Card */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {createCaseManualGuide.title}
              </h3>
              <p className="text-gray-600">{createCaseManualGuide.description}</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">
                {createCaseManualGuide.estimatedTime}
              </div>
              <div className="text-sm text-gray-500">
                {createCaseManualGuide.totalSteps} steps
              </div>
            </div>
          </div>
          <div className="flex gap-1">
            {Array.from({ length: createCaseManualGuide.totalSteps }).map(
              (_, i) => (
                <div
                  key={i}
                  className="h-2 flex-1 bg-primary rounded-full"
                />
              )
            )}
          </div>
        </div>

        <div className="space-y-0">
          {createCaseManualGuide.steps.map((step, index) => (
            <GuideStep
              key={step.number}
              {...step}
              isLast={index === createCaseManualGuide.steps.length - 1}
            />
          ))}
        </div>
      </section>

      {/* eCourt Section */}
      <section id="ecourt" className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            {createCaseFromECourtGuide.title}
          </h2>
          <p className="text-lg text-gray-600">
            {createCaseFromECourtGuide.subtitle}
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {createCaseFromECourtGuide.title}
              </h3>
              <p className="text-gray-600">
                {createCaseFromECourtGuide.description}
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">
                {createCaseFromECourtGuide.estimatedTime}
              </div>
              <div className="text-sm text-gray-500">
                {createCaseFromECourtGuide.totalSteps} steps
              </div>
            </div>
          </div>
          <div className="flex gap-1">
            {Array.from({ length: createCaseFromECourtGuide.totalSteps }).map(
              (_, i) => (
                <div
                  key={i}
                  className="h-2 flex-1 bg-primary rounded-full"
                />
              )
            )}
          </div>
        </div>

        <div className="space-y-0">
          {createCaseFromECourtGuide.steps.map((step, index) => (
            <GuideStep
              key={step.number}
              {...step}
              isLast={index === createCaseFromECourtGuide.steps.length - 1}
            />
          ))}
        </div>
      </section>

      {/* Edit Case Section */}
      <section id="edit-case" className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            {editCaseGuide.title}
          </h2>
          <p className="text-lg text-gray-600">
            {editCaseGuide.subtitle}
          </p>
        </div>

        <div className="space-y-0">
          {editCaseGuide.steps.map((step, index) => (
            <GuideStep
              key={step.number}
              {...step}
              isLast={index === editCaseGuide.steps.length - 1}
            />
          ))}
        </div>
      </section>

      {/* Close Case Section */}
      <section id="close-case" className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            {closeCaseGuide.title}
          </h2>
          <p className="text-lg text-gray-600">
            {closeCaseGuide.subtitle}
          </p>
        </div>

        <div className="space-y-0">
          {closeCaseGuide.steps.map((step, index) => (
            <GuideStep
              key={step.number}
              {...step}
              isLast={index === closeCaseGuide.steps.length - 1}
            />
          ))}
        </div>

        <ProgressBanner
          title="Case Management Complete"
          description="Efficiently track the lifecycle of your legal cases from registration to final resolution."
          icon="Briefcase"
          variant="success"
        />
      </section>

      <FeedbackSection pageId="cases" />
    </div>
  );
}
