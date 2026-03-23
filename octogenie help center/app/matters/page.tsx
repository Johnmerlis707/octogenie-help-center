"use client";

import GuideSummaryCard from "@/components/GuideSummaryCard";
import GuideStepsList from "@/components/GuideStepsList";
import ProgressBanner from "@/components/ProgressBanner";
import FeedbackSection from "@/components/FeedbackSection";
import TableOfContents from "@/components/TableOfContents";
import {
  createMatterGuide,
  linkClientGuide,
  updateMatterStatusGuide,
  editMatterGuide,
  bulkUploadGuide,
  exportExcelGuide,
  filterMattersGuide,
} from "@/lib/mattersGuide";

const mattersPageToc = [
  { label: "What is a Matter in OctoGenie?", href: "#what-is-matter" },
  { label: "Create a Matter", href: "#create-matter" },
  { label: "Link Client to Matter", href: "#link-client" },
  { label: "Update Matter Status", href: "#update-status" },
  { label: "Edit a Matter", href: "#edit-matter" },
  { label: "Bulk Upload Matters", href: "#bulk-upload" },
  { label: "Export to Excel", href: "#export" },
  { label: "Filter Matters", href: "#filter-matters" },
];

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

      <TableOfContents links={mattersPageToc} />

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

        <GuideSummaryCard guide={createMatterGuide} />
        <GuideStepsList guide={createMatterGuide} />
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

        <GuideStepsList guide={linkClientGuide} />
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

        <GuideStepsList guide={updateMatterStatusGuide} />
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

        <GuideStepsList guide={editMatterGuide} />
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

        <GuideStepsList guide={bulkUploadGuide} />
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

        <GuideStepsList guide={exportExcelGuide} />
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

        <GuideStepsList guide={filterMattersGuide} />

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
