"use client";

import GuideStep from "@/components/GuideStep";
import ProgressBanner from "@/components/ProgressBanner";
import FeedbackSection from "@/components/FeedbackSection";
import {
  createCaseManualGuide,
  createCaseFromECourtGuide,
  closeCaseGuide,
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
          Track court cases from filing to resolution with full case management.
        </p>
      </div>

      {/* What is Cases Section */}
      <section id="what-is-case" className="space-y-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            What is the "Cases" feature?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Cases section in OctoGenie is where all legal cases handled by a
            lawyer or law firm are created, stored, and managed. It acts as a
            central workspace to track every case from start to finish.
          </p>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-gray-700 mb-2">
              In the Cases section, you can:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Create new legal cases</li>
              <li>View all ongoing, closed, or pending cases</li>
              <li>Track case status</li>
              <li>Assign lawyers and team members</li>
              <li>Store and access case-related documents</li>
              <li>Monitor important dates and updates</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Create Case - Manual Entry Section */}
      <section id="manual-entry" className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Creating a Case - Manual Entry
          </h2>
          <p className="text-lg text-gray-600">
            Manually create and register a new legal case
          </p>
        </div>

        {/* Guide Summary Card */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {createCaseManualGuide.title}
              </h3>
              <p className="text-gray-600">
                {createCaseManualGuide.description}
              </p>
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
          {/* Progress Indicator */}
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

        {/* Steps */}
        <div className="space-y-0">
          {createCaseManualGuide.steps.map((step, index) => (
            <GuideStep
              key={step.number}
              {...step}
              isLast={index === createCaseManualGuide.steps.length - 1}
            />
          ))}
        </div>

        {/* Completion Banner */}
        <ProgressBanner
          title="You're all set!"
          description="The case is successfully created and appears in your Cases list."
          icon="CheckCircle2"
          variant="success"
        />
      </section>

      {/* Create Case - From eCourt Section */}
      <section id="ecourt" className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Creating a Case - From eCourt
          </h2>
          <p className="text-lg text-gray-600">
            Import a case from eCourt database
          </p>
        </div>

        {/* Guide Summary Card */}
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
          {/* Progress Indicator */}
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

        {/* Steps */}
        <div className="space-y-0">
          {createCaseFromECourtGuide.steps.map((step, index) => (
            <GuideStep
              key={step.number}
              {...step}
              isLast={index === createCaseFromECourtGuide.steps.length - 1}
            />
          ))}
        </div>

        {/* Completion Banner */}
        <ProgressBanner
          title="You're all set!"
          description="The case is successfully imported from eCourt and appears in your Cases list."
          icon="CheckCircle2"
          variant="success"
        />
      </section>

      {/* Close Case Section */}
      <section id="close-case" className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Closing a Case
          </h2>
          <p className="text-lg text-gray-600">
            Mark a case as closed
          </p>
        </div>

        {/* Guide Summary Card */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {closeCaseGuide.title}
              </h3>
              <p className="text-gray-600">{closeCaseGuide.description}</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">
                {closeCaseGuide.estimatedTime}
              </div>
              <div className="text-sm text-gray-500">
                {closeCaseGuide.totalSteps} steps
              </div>
            </div>
          </div>
          {/* Progress Indicator */}
          <div className="flex gap-1">
            {Array.from({ length: closeCaseGuide.totalSteps }).map((_, i) => (
              <div
                key={i}
                className="h-2 flex-1 bg-primary rounded-full"
              />
            ))}
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-0">
          {closeCaseGuide.steps.map((step, index) => (
            <GuideStep
              key={step.number}
              {...step}
              isLast={index === closeCaseGuide.steps.length - 1}
            />
          ))}
        </div>
      </section>

      {/* Feedback Section */}
      <FeedbackSection pageId="cases" />
    </div>
  );
}
