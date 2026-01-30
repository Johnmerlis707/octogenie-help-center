"use client";

import GuideStep from "@/components/GuideStep";
import ProgressBanner from "@/components/ProgressBanner";
import FeedbackSection from "@/components/FeedbackSection";
import {
  createMatterGuide,
  linkClientToMatterGuide,
  updateMatterStatusGuide,
} from "@/lib/mattersGuide";

export default function MattersPage() {
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
          <span>Matters</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Organize and track all your legal matters in one place.
        </p>
      </div>

      {/* What is a Matter Section */}
      <section id="what-is-matter" className="space-y-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            What is a Matter in OctoGenie?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A matter is any legal problem or task that a client brings to a
            lawyer. The Matter feature in the OctoGenie platform helps you manage,
            organize, and track all your legal matters in one place.
          </p>
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">
              Examples of legal matters:
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Filing a lawsuit</li>
              <li>Drafting a contract</li>
              <li>Registering a trademark</li>
              <li>Giving legal advice</li>
              <li>Managing a property dispute</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Create Matter Section */}
      <section id="create-matter" className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            How to Create a New Matter
          </h2>
          <p className="text-lg text-gray-600">
            Organize legal work into structured matters
          </p>
        </div>

        {/* Guide Summary Card */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {createMatterGuide.title}
              </h3>
              <p className="text-gray-600">{createMatterGuide.description}</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">
                {createMatterGuide.estimatedTime}
              </div>
              <div className="text-sm text-gray-500">
                {createMatterGuide.totalSteps} steps
              </div>
            </div>
          </div>
          {/* Progress Indicator */}
          <div className="flex gap-1">
            {Array.from({ length: createMatterGuide.totalSteps }).map((_, i) => (
              <div
                key={i}
                className="h-2 flex-1 bg-primary rounded-full"
              />
            ))}
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-0">
          {createMatterGuide.steps.map((step, index) => (
            <GuideStep
              key={step.number}
              {...step}
              isLast={index === createMatterGuide.steps.length - 1}
            />
          ))}
        </div>

        {/* Completion Banner */}
        <ProgressBanner
          title="You're all set!"
          description="The matter is successfully created and appears in your Matters list."
          icon="CheckCircle2"
          variant="success"
        />
      </section>

      {/* Link Client to Matter Section */}
      <section id="parties" className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            How to Link a Client to a Matter
          </h2>
          <p className="text-lg text-gray-600">
            Associate a client with a matter
          </p>
        </div>

        {/* Guide Summary Card */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {linkClientToMatterGuide.title}
              </h3>
              <p className="text-gray-600">
                {linkClientToMatterGuide.description}
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">
                {linkClientToMatterGuide.estimatedTime}
              </div>
              <div className="text-sm text-gray-500">
                {linkClientToMatterGuide.totalSteps} steps
              </div>
            </div>
          </div>
          {/* Progress Indicator */}
          <div className="flex gap-1">
            {Array.from({ length: linkClientToMatterGuide.totalSteps }).map(
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
          {linkClientToMatterGuide.steps.map((step, index) => (
            <GuideStep
              key={step.number}
              {...step}
              isLast={index === linkClientToMatterGuide.steps.length - 1}
            />
          ))}
        </div>
      </section>

      {/* Update Matter Status Section */}
      <section id="update-status" className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            How to Update Matter Status
          </h2>
          <p className="text-lg text-gray-600">
            Change the status of a matter
          </p>
        </div>

        {/* Guide Summary Card */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {updateMatterStatusGuide.title}
              </h3>
              <p className="text-gray-600">
                {updateMatterStatusGuide.description}
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">
                {updateMatterStatusGuide.estimatedTime}
              </div>
              <div className="text-sm text-gray-500">
                {updateMatterStatusGuide.totalSteps} steps
              </div>
            </div>
          </div>
          {/* Progress Indicator */}
          <div className="flex gap-1">
            {Array.from({ length: updateMatterStatusGuide.totalSteps }).map(
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
          {updateMatterStatusGuide.steps.map((step, index) => (
            <GuideStep
              key={step.number}
              {...step}
              isLast={index === updateMatterStatusGuide.steps.length - 1}
            />
          ))}
        </div>
      </section>

      {/* Feedback Section */}
      <FeedbackSection pageId="matters" />
    </div>
  );
}
