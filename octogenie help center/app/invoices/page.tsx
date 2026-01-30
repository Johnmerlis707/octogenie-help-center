"use client";

import GuideStep from "@/components/GuideStep";
import ProgressBanner from "@/components/ProgressBanner";
import FeedbackSection from "@/components/FeedbackSection";
import {
  createInvoiceGuide,
  trackInvoiceStatusGuide,
} from "@/lib/invoicesGuide";

export default function InvoicesPage() {
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
          <span>Invoices</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Create, manage, track, and monitor all client invoices in one
          centralized place.
        </p>
      </div>

      {/* What is Invoices Section */}
      <section id="what-is-invoices" className="space-y-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            What is the Invoices section used for?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Invoices section is used to create, manage, track, and monitor all
            client invoices in one centralized place. It helps users keep
            complete visibility over billing, payment status, and outstanding
            amounts for cases or matters.
          </p>
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">
              How the Invoices Section is Used
            </h3>
            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              <li>
                <strong>Create Invoices:</strong> Generate invoices for clients
                against cases or matters.
              </li>
              <li>
                <strong>View Invoice Summary:</strong> Get a quick overview of
                Total Invoiced amount, Paid amount, Pending amount, Overdue
                invoices.
              </li>
              <li>
                <strong>Track Invoice Status:</strong> Monitor invoices based on
                their status such as: Sent, Partially Paid, Paid, Overdue.
              </li>
              <li>
                <strong>Manage All Invoices:</strong> View all invoices in a
                single list with details.
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Create Invoice Section */}
      <section id="create-invoice" className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            How to Create a New Invoice
          </h2>
          <p className="text-lg text-gray-600">
            Generate invoices for clients
          </p>
        </div>

        {/* Guide Summary Card */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {createInvoiceGuide.title}
              </h3>
              <p className="text-gray-600">{createInvoiceGuide.description}</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">
                {createInvoiceGuide.estimatedTime}
              </div>
              <div className="text-sm text-gray-500">
                {createInvoiceGuide.totalSteps} steps
              </div>
            </div>
          </div>
          {/* Progress Indicator */}
          <div className="flex gap-1">
            {Array.from({ length: createInvoiceGuide.totalSteps }).map(
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
          {createInvoiceGuide.steps.map((step, index) => (
            <GuideStep
              key={step.number}
              {...step}
              isLast={index === createInvoiceGuide.steps.length - 1}
            />
          ))}
        </div>

        {/* Completion Banner */}
        <ProgressBanner
          title="You're all set!"
          description="Invoice is successfully created and can be tracked for payment status."
          icon="CheckCircle2"
          variant="success"
        />
      </section>

      {/* Track Invoice Status Section */}
      <section id="track-status" className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            How to Track Invoice Status
          </h2>
          <p className="text-lg text-gray-600">
            Monitor invoice payment status
          </p>
        </div>

        {/* Guide Summary Card */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {trackInvoiceStatusGuide.title}
              </h3>
              <p className="text-gray-600">
                {trackInvoiceStatusGuide.description}
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">
                {trackInvoiceStatusGuide.estimatedTime}
              </div>
              <div className="text-sm text-gray-500">
                {trackInvoiceStatusGuide.totalSteps} steps
              </div>
            </div>
          </div>
          {/* Progress Indicator */}
          <div className="flex gap-1">
            {Array.from({ length: trackInvoiceStatusGuide.totalSteps }).map(
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
          {trackInvoiceStatusGuide.steps.map((step, index) => (
            <GuideStep
              key={step.number}
              {...step}
              isLast={index === trackInvoiceStatusGuide.steps.length - 1}
            />
          ))}
        </div>
      </section>

      {/* Feedback Section */}
      <FeedbackSection pageId="invoices" />
    </div>
  );
}
