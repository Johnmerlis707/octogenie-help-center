"use client";

import GuideSummaryCard from "@/components/GuideSummaryCard";
import GuideStepsList from "@/components/GuideStepsList";
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

        <GuideSummaryCard guide={createCaseManualGuide} />
        <GuideStepsList guide={createCaseManualGuide} />
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

        <GuideSummaryCard guide={createCaseFromECourtGuide} />
        <GuideStepsList guide={createCaseFromECourtGuide} />
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

        <GuideStepsList guide={editCaseGuide} />
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

        <GuideStepsList guide={closeCaseGuide} />

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
