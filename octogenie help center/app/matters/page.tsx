"use client";

import GuideStep from "@/components/GuideStep";
import ProgressBanner from "@/components/ProgressBanner";
import FeedbackSection from "@/components/FeedbackSection";
import {
  createMatterGuide,
  linkClientGuide,
  updateMatterStatusGuide,
  editMatterGuide,
  bulkUploadGuide,
  exportExcelGuide,
  filterMattersGuide,
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
            {createMatterGuide.title}
          </h2>
          <p className="text-lg text-gray-600">
            {createMatterGuide.subtitle}
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
          <div className="flex gap-1">
            {Array.from({ length: createMatterGuide.totalSteps }).map((_, i) => (
              <div
                key={i}
                className="h-2 flex-1 bg-primary rounded-full"
              />
            ))}
          </div>
        </div>

        <div className="space-y-0">
          {createMatterGuide.steps.map((step, index) => (
            <GuideStep
              key={step.number}
              {...step}
              isLast={index === createMatterGuide.steps.length - 1}
            />
          ))}
        </div>
      </section>

      {/* Link Client Section */}
      <section id="link-client" className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            {linkClientGuide.title}
          </h2>
          <p className="text-lg text-gray-600">
            {linkClientGuide.subtitle}
          </p>
        </div>

        <div className="space-y-0">
          {linkClientGuide.steps.map((step, index) => (
            <GuideStep
              key={step.number}
              {...step}
              isLast={index === linkClientGuide.steps.length - 1}
            />
          ))}
        </div>
      </section>

      {/* Update Status Section */}
      <section id="update-status" className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            {updateMatterStatusGuide.title}
          </h2>
          <p className="text-lg text-gray-600">
            {updateMatterStatusGuide.subtitle}
          </p>
        </div>

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

      {/* Edit Matter Section */}
      <section id="edit-matter" className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            {editMatterGuide.title}
          </h2>
          <p className="text-lg text-gray-600">
            {editMatterGuide.subtitle}
          </p>
        </div>

        <div className="space-y-0">
          {editMatterGuide.steps.map((step, index) => (
            <GuideStep
              key={step.number}
              {...step}
              isLast={index === editMatterGuide.steps.length - 1}
            />
          ))}
        </div>
      </section>

      {/* Bulk Upload Section */}
      <section id="bulk-upload" className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            {bulkUploadGuide.title}
          </h2>
          <p className="text-lg text-gray-600">
            {bulkUploadGuide.subtitle}
          </p>
        </div>

        <div className="space-y-0">
          {bulkUploadGuide.steps.map((step, index) => (
            <GuideStep
              key={step.number}
              {...step}
              isLast={index === bulkUploadGuide.steps.length - 1}
            />
          ))}
        </div>
      </section>

      {/* Export Section */}
      <section id="export" className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            {exportExcelGuide.title}
          </h2>
          <p className="text-lg text-gray-600">
            {exportExcelGuide.subtitle}
          </p>
        </div>

        <div className="space-y-0">
          {exportExcelGuide.steps.map((step, index) => (
            <GuideStep
              key={step.number}
              {...step}
              isLast={index === exportExcelGuide.steps.length - 1}
            />
          ))}
        </div>
      </section>

      {/* Filter Section */}
      <section id="filter-matters" className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            {filterMattersGuide.title}
          </h2>
          <p className="text-lg text-gray-600">
            {filterMattersGuide.subtitle}
          </p>
        </div>

        <div className="space-y-0">
          {filterMattersGuide.steps.map((step, index) => (
            <GuideStep
              key={step.number}
              {...step}
              isLast={index === filterMattersGuide.steps.length - 1}
            />
          ))}
        </div>

        <ProgressBanner
          title="Consolidated Practice Management"
          description="By mastering matters, you can link all cases, documents, and billings for a centralized practice management experience."
          icon="Layers"
          variant="info"
        />
      </section>

      <FeedbackSection pageId="matters" />
    </div>
  );
}
