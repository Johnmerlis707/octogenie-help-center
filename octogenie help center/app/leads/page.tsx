"use client";

import GuideStep from "@/components/GuideStep";
import ProgressBanner from "@/components/ProgressBanner";
import FeedbackSection from "@/components/FeedbackSection";
import {
  addLeadGuide,
  searchFilterGuide,
  convertToClientGuide,
} from "@/lib/leadsGuide";

export default function LeadsPage() {
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
          <span>Leads</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          The Leads feature helps you manage potential clients from initial enquiry
          until they are converted into actual clients. Track lead details, status,
          value, and assignment in one place.
        </p>
      </div>

      {/* What is the Lead Feature Section */}
      <section id="what-is-lead" className="space-y-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            What is the Lead Feature?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            A lead is a potential client who has shown interest in your legal
            services but hasn't yet become an official client. The Leads module
            helps you:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2 ml-4">
            <li>Track all incoming enquiries</li>
            <li>Manage lead status (New, Contacted, Qualified, Converted)</li>
            <li>Assign leads to specific lawyers</li>
            <li>Monitor lead value and priority</li>
            <li>Convert qualified leads into clients</li>
          </ul>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <span className="text-2xl">💡</span>
            <div>
              <h4 className="font-semibold text-green-900 mb-1">Best Practice</h4>
              <p className="text-green-800 text-sm">
                Respond to new leads within 24 hours to maximize conversion rates.
                Use the status feature to track your follow-ups.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Add a New Lead Section */}
      <section id="add-lead" className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            How to Add a New Lead
          </h2>
          <p className="text-lg text-gray-600">
            Create and record a new potential client in the system
          </p>
        </div>

        {/* Guide Summary Card */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {addLeadGuide.title}
              </h3>
              <p className="text-gray-600">{addLeadGuide.description}</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">{addLeadGuide.estimatedTime}</div>
              <div className="text-sm text-gray-500">{addLeadGuide.totalSteps} steps</div>
            </div>
          </div>
          {/* Progress Indicator */}
          <div className="flex gap-1">
            {Array.from({ length: addLeadGuide.totalSteps }).map((_, i) => (
              <div
                key={i}
                className="h-2 flex-1 bg-primary rounded-full"
              />
            ))}
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-0">
          {addLeadGuide.steps.map((step, index) => (
            <GuideStep
              key={step.number}
              {...step}
              isLast={index === addLeadGuide.steps.length - 1}
            />
          ))}
        </div>

        {/* Completion Banner */}
        <ProgressBanner
          title="You're all set! Follow these steps to complete the process."
          description="The new lead is successfully added and ready for status tracking, follow-ups, and conversion to client."
          icon="CheckCircle2"
          variant="success"
        />
      </section>

      {/* Search and Filter Section */}
      <section id="search-filter" className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Search and Filter Leads
          </h2>
          <p className="text-lg text-gray-600">
            Quickly find specific leads in your pipeline
          </p>
        </div>

        <p className="text-gray-700">
          The Search and Filter options help you quickly find specific leads based
          on name, status, or source, making lead management easier and faster.
        </p>

        {/* Guide Summary Card */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {searchFilterGuide.title}
              </h3>
              <p className="text-gray-600">{searchFilterGuide.description}</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">
                {searchFilterGuide.estimatedTime}
              </div>
              <div className="text-sm text-gray-500">
                {searchFilterGuide.totalSteps} steps
              </div>
            </div>
          </div>
          {/* Progress Indicator */}
          <div className="flex gap-1">
            {Array.from({ length: searchFilterGuide.totalSteps }).map((_, i) => (
              <div
                key={i}
                className="h-2 flex-1 bg-primary rounded-full"
              />
            ))}
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-0">
          {searchFilterGuide.steps.map((step, index) => (
            <GuideStep
              key={step.number}
              {...step}
              isLast={index === searchFilterGuide.steps.length - 1}
            />
          ))}
        </div>

        {/* Completion Banner */}
        <ProgressBanner
          title="You're all set! Follow these steps to complete the process."
          description="Search and Filter options help to locate leads quickly, track leads by progress stage, analyze leads by source, and improve follow-up efficiency."
          icon="CheckCircle2"
          variant="success"
        />
      </section>

      {/* Convert to Client Section */}
      <section id="convert" className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Converting Lead to Client
          </h2>
          <p className="text-lg text-gray-600">
            Turn qualified leads into official clients
          </p>
        </div>

        <p className="text-gray-700">
          Once a lead confirms they want to proceed with your services, you can
          convert them to a client with just a few clicks.
        </p>

        {/* Guide Summary Card */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {convertToClientGuide.title}
              </h3>
              <p className="text-gray-600">{convertToClientGuide.description}</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">
                {convertToClientGuide.estimatedTime}
              </div>
              <div className="text-sm text-gray-500">
                {convertToClientGuide.totalSteps} steps
              </div>
            </div>
          </div>
          {/* Progress Indicator */}
          <div className="flex gap-1">
            {Array.from({ length: convertToClientGuide.totalSteps }).map((_, i) => (
              <div
                key={i}
                className="h-2 flex-1 bg-primary rounded-full"
              />
            ))}
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-0">
          {convertToClientGuide.steps.map((step, index) => (
            <GuideStep
              key={step.number}
              {...step}
              isLast={index === convertToClientGuide.steps.length - 1}
            />
          ))}
        </div>

        {/* Completion Banner */}
        <div className="space-y-4">
          <ProgressBanner
            title="You're all set! Follow these steps to complete the process."
            description="After conversion, you can create Matters and Cases for the new client and begin your legal work."
            icon="CheckCircle2"
            variant="success"
          />
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">ℹ️</span>
              <div>
                <h4 className="font-semibold text-blue-900 mb-1">
                  What Happens Next?
                </h4>
                <p className="text-blue-800 text-sm">
                  After conversion, you can create Matters and Cases for the new
                  client and begin your legal work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <FeedbackSection pageId="leads" />
    </div>
  );
}
