"use client";

import GuideSummaryCard from "@/components/GuideSummaryCard";
import GuideStepsList from "@/components/GuideStepsList";
import ProgressBanner from "@/components/ProgressBanner";
import FeedbackSection from "@/components/FeedbackSection";
import TableOfContents from "@/components/TableOfContents";
import {
  addClientGuide,
  editClientGuide,
  uploadClientDocumentsGuide,
  deleteClientGuide,
} from "@/lib/clientsGuide";

const clientsPageToc = [
  { label: "How to Add a New Client", href: "#add-client" },
  { label: "Edit Client Details", href: "#edit-client" },
  { label: "Upload Client Documents", href: "#upload-documents" },
  { label: "Delete a Client", href: "#delete-client" },
];

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

      <TableOfContents links={clientsPageToc} />

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

        <GuideSummaryCard guide={addClientGuide} />
        <GuideStepsList guide={addClientGuide} />

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

        <GuideSummaryCard guide={editClientGuide} />
        <GuideStepsList guide={editClientGuide} />
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

        <GuideSummaryCard guide={uploadClientDocumentsGuide} />
        <GuideStepsList guide={uploadClientDocumentsGuide} />
      </section>

      {/* Delete Client Section */}
      <section id="delete-client" className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            How to Delete a Client Record
          </h2>
          <p className="text-lg text-gray-600">
            Permanently remove a client from the system
          </p>
        </div>

        <GuideSummaryCard guide={deleteClientGuide} />
        <GuideStepsList guide={deleteClientGuide} />
      </section>

      {/* Feedback Section */}
      <FeedbackSection pageId="clients" />
    </div>
  );
}
