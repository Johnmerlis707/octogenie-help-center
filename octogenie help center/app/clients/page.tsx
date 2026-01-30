"use client";

import GuideStep from "@/components/GuideStep";
import ProgressBanner from "@/components/ProgressBanner";
import FeedbackSection from "@/components/FeedbackSection";
import {
  addClientGuide,
  editClientGuide,
  uploadClientDocumentsGuide,
} from "@/lib/clientsGuide";

export default function ClientsPage() {
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
          <span>Clients</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Manage client information, profiles, and documents in one centralized
          location.
        </p>
      </div>

      {/* Add a New Client Section */}
      <section id="add-client" className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            How to Add a New Client
          </h2>
          <p className="text-lg text-gray-600">
            Register and onboard a new client into the OctoGenie platform
          </p>
        </div>

        {/* Guide Summary Card */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {addClientGuide.title}
              </h3>
              <p className="text-gray-600">{addClientGuide.description}</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">
                {addClientGuide.estimatedTime}
              </div>
              <div className="text-sm text-gray-500">
                {addClientGuide.totalSteps} steps
              </div>
            </div>
          </div>
          {/* Progress Indicator */}
          <div className="flex gap-1">
            {Array.from({ length: addClientGuide.totalSteps }).map((_, i) => (
              <div
                key={i}
                className="h-2 flex-1 bg-primary rounded-full"
              />
            ))}
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-0">
          {addClientGuide.steps.map((step, index) => (
            <GuideStep
              key={step.number}
              {...step}
              isLast={index === addClientGuide.steps.length - 1}
            />
          ))}
        </div>

        {/* Completion Banner */}
        <ProgressBanner
          title="You're all set!"
          description="The client can now be linked to matters, assigned to cases, and used for billing and tracking."
          icon="CheckCircle2"
          variant="success"
        />
      </section>

      {/* Edit Client Section */}
      <section id="edit-client" className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            How to Edit Client Details
          </h2>
          <p className="text-lg text-gray-600">
            Update existing client information
          </p>
        </div>

        {/* Guide Summary Card */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {editClientGuide.title}
              </h3>
              <p className="text-gray-600">{editClientGuide.description}</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">
                {editClientGuide.estimatedTime}
              </div>
              <div className="text-sm text-gray-500">
                {editClientGuide.totalSteps} steps
              </div>
            </div>
          </div>
          {/* Progress Indicator */}
          <div className="flex gap-1">
            {Array.from({ length: editClientGuide.totalSteps }).map((_, i) => (
              <div
                key={i}
                className="h-2 flex-1 bg-primary rounded-full"
              />
            ))}
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-0">
          {editClientGuide.steps.map((step, index) => (
            <GuideStep
              key={step.number}
              {...step}
              isLast={index === editClientGuide.steps.length - 1}
            />
          ))}
        </div>
      </section>

      {/* Upload Documents Section */}
      <section id="upload-documents" className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Uploading Client Documents
          </h2>
          <p className="text-lg text-gray-600">
            Add documents to an existing client profile
          </p>
        </div>

        {/* Guide Summary Card */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {uploadClientDocumentsGuide.title}
              </h3>
              <p className="text-gray-600">
                {uploadClientDocumentsGuide.description}
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">
                {uploadClientDocumentsGuide.estimatedTime}
              </div>
              <div className="text-sm text-gray-500">
                {uploadClientDocumentsGuide.totalSteps} steps
              </div>
            </div>
          </div>
          {/* Progress Indicator */}
          <div className="flex gap-1">
            {Array.from({ length: uploadClientDocumentsGuide.totalSteps }).map(
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
          {uploadClientDocumentsGuide.steps.map((step, index) => (
            <GuideStep
              key={step.number}
              {...step}
              isLast={index === uploadClientDocumentsGuide.steps.length - 1}
            />
          ))}
        </div>
      </section>

      {/* Feedback Section */}
      <FeedbackSection pageId="clients" />
    </div>
  );
}
