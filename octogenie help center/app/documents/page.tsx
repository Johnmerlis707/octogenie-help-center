"use client";

import GuideStep from "@/components/GuideStep";
import ProgressBanner from "@/components/ProgressBanner";
import FeedbackSection from "@/components/FeedbackSection";
import {
  uploadDocumentsGuide,
  linkDocumentsGuide,
} from "@/lib/documentsGuide";

export default function DocumentsPage() {
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
          <span>Documents</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Store, organize, and manage all your legal files in one place.
        </p>
      </div>

      {/* What is Documents Section */}
      <section id="what-is-documents" className="space-y-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            What is the Documents Module?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The Documents module in OctoGenie allows you to store, organize, and
            access all legal files related to your cases, matters, and clients. It
            provides a centralized location for document management, ensuring easy
            access and organization.
          </p>
        </div>
      </section>

      {/* Upload Documents Section */}
      <section id="upload-documents" className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            How to Upload Documents
          </h2>
          <p className="text-lg text-gray-600">
            Add documents to the system
          </p>
        </div>

        {/* Guide Summary Card */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {uploadDocumentsGuide.title}
              </h3>
              <p className="text-gray-600">
                {uploadDocumentsGuide.description}
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">
                {uploadDocumentsGuide.estimatedTime}
              </div>
              <div className="text-sm text-gray-500">
                {uploadDocumentsGuide.totalSteps} steps
              </div>
            </div>
          </div>
          {/* Progress Indicator */}
          <div className="flex gap-1">
            {Array.from({ length: uploadDocumentsGuide.totalSteps }).map(
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
          {uploadDocumentsGuide.steps.map((step, index) => (
            <GuideStep
              key={step.number}
              {...step}
              isLast={index === uploadDocumentsGuide.steps.length - 1}
            />
          ))}
        </div>

        {/* Completion Banner */}
        <ProgressBanner
          title="You're all set!"
          description="The document is successfully uploaded and stored in the system, accessible from the Documents module or the linked Case/Matter."
          icon="CheckCircle2"
          variant="success"
        />
      </section>

      {/* Link Documents Section */}
      <section id="link-documents" className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            How to Link Documents to Matters and Cases
          </h2>
          <p className="text-lg text-gray-600">
            Associate documents with cases and matters
          </p>
        </div>

        {/* Guide Summary Card */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {linkDocumentsGuide.title}
              </h3>
              <p className="text-gray-600">{linkDocumentsGuide.description}</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">
                {linkDocumentsGuide.estimatedTime}
              </div>
              <div className="text-sm text-gray-500">
                {linkDocumentsGuide.totalSteps} steps
              </div>
            </div>
          </div>
          {/* Progress Indicator */}
          <div className="flex gap-1">
            {Array.from({ length: linkDocumentsGuide.totalSteps }).map(
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
          {linkDocumentsGuide.steps.map((step, index) => (
            <GuideStep
              key={step.number}
              {...step}
              isLast={index === linkDocumentsGuide.steps.length - 1}
            />
          ))}
        </div>
      </section>

      {/* Feedback Section */}
      <FeedbackSection pageId="documents" />
    </div>
  );
}
