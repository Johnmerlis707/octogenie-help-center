"use client";

import GuideStep from "@/components/GuideStep";
import ProgressBanner from "@/components/ProgressBanner";
import FeedbackSection from "@/components/FeedbackSection";
import {
  addHearingGuide,
  viewHearingsGuide,
} from "@/lib/calendarGuide";

export default function CalendarPage() {
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
          <span>Calendar & Hearings</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Schedule hearings, set reminders, and sync with your calendar.
        </p>
      </div>

      {/* Add Hearing Section */}
      <section id="add-hearing" className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            How to Add a Hearing
          </h2>
          <p className="text-lg text-gray-600">
            Schedule and track court hearings
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
          <h4 className="font-semibold text-blue-900 mb-2">Prerequisites</h4>
          <ul className="list-disc list-inside text-blue-800 space-y-1">
            <li>You must be logged in to the OctoGenie Partner Portal</li>
            <li>The relevant Case/Matter should already be created</li>
          </ul>
        </div>

        {/* Guide Summary Card */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {addHearingGuide.title}
              </h3>
              <p className="text-gray-600">{addHearingGuide.description}</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">
                {addHearingGuide.estimatedTime}
              </div>
              <div className="text-sm text-gray-500">
                {addHearingGuide.totalSteps} steps
              </div>
            </div>
          </div>
          {/* Progress Indicator */}
          <div className="flex gap-1">
            {Array.from({ length: addHearingGuide.totalSteps }).map((_, i) => (
              <div
                key={i}
                className="h-2 flex-1 bg-primary rounded-full"
              />
            ))}
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-0">
          {addHearingGuide.steps.map((step, index) => (
            <GuideStep
              key={step.number}
              {...step}
              isLast={index === addHearingGuide.steps.length - 1}
            />
          ))}
        </div>

        {/* Completion Banner */}
        <ProgressBanner
          title="You're all set!"
          description="Hearing is successfully scheduled and visible in the Calendar, linked to the relevant Case/Matter for easy tracking."
          icon="CheckCircle2"
          variant="success"
        />
      </section>

      {/* View Hearings Section */}
      <section id="view-hearings" className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            How to View Upcoming Hearings
          </h2>
          <p className="text-lg text-gray-600">
            Access and review scheduled hearings
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
          <h4 className="font-semibold text-blue-900 mb-2">Prerequisites</h4>
          <ul className="list-disc list-inside text-blue-800 space-y-1">
            <li>User must be logged in to OctoGenie</li>
            <li>Hearings/events should already be added to the calendar</li>
          </ul>
        </div>

        {/* Guide Summary Card */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {viewHearingsGuide.title}
              </h3>
              <p className="text-gray-600">{viewHearingsGuide.description}</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">
                {viewHearingsGuide.estimatedTime}
              </div>
              <div className="text-sm text-gray-500">
                {viewHearingsGuide.totalSteps} steps
              </div>
            </div>
          </div>
          {/* Progress Indicator */}
          <div className="flex gap-1">
            {Array.from({ length: viewHearingsGuide.totalSteps }).map((_, i) => (
              <div
                key={i}
                className="h-2 flex-1 bg-primary rounded-full"
              />
            ))}
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-0">
          {viewHearingsGuide.steps.map((step, index) => (
            <GuideStep
              key={step.number}
              {...step}
              isLast={index === viewHearingsGuide.steps.length - 1}
            />
          ))}
        </div>

        {/* Completion Banner */}
        <ProgressBanner
          title="You're all set!"
          description="All upcoming hearings are displayed in the selected view format."
          icon="CheckCircle2"
          variant="success"
        />
      </section>

      {/* Feedback Section */}
      <FeedbackSection pageId="calendar" />
    </div>
  );
}
