"use client";

import GuideStep from "@/components/GuideStep";
import ProgressBanner from "@/components/ProgressBanner";
import FeedbackSection from "@/components/FeedbackSection";
import {
  qaGuide,
  draftGuide,
  analyzeGuide,
} from "@/lib/aiAssistantGuide";

export default function AIAssistantPage() {
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
          <span>AI Assistant</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Get instant legal guidance, draft documents, review content, and answer
          legal queries directly within the platform.
        </p>
      </div>

      {/* What is AI Assistant Section */}
      <section id="what-is-ai" className="space-y-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            What can the AI Assistant do?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The AI Assistant in OctoGenie helps users get instant legal guidance,
            draft documents, review content, and answer legal queries directly
            within the platform, improving productivity and efficiency.
          </p>
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">
              Features & Capabilities of the AI Assistant
            </h3>
            <p className="text-gray-700 mb-2">
              The AI Assistant offers three main features:
            </p>
            <ol className="list-decimal list-inside text-gray-700 space-y-1">
              <li>
                <strong>Q&A:</strong> Used to ask questions and get instant
                answers related to legal matters, procedures, and legal terms.
              </li>
              <li>
                <strong>Draft:</strong> Used to create legal drafts such as
                notices, applications, replies, and other legal documents.
              </li>
              <li>
                <strong>Analysis:</strong> Used to review and analyze legal
                documents to identify key points, risks, and important insights.
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Q&A Section */}
      <section id="qa" className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            How to Ask Legal Questions (Q&A)
          </h2>
          <p className="text-lg text-gray-600">
            Get quick answers to legal questions
          </p>
        </div>

        {/* Guide Summary Card */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {qaGuide.title}
              </h3>
              <p className="text-gray-600">{qaGuide.description}</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">
                {qaGuide.estimatedTime}
              </div>
              <div className="text-sm text-gray-500">
                {qaGuide.totalSteps} steps
              </div>
            </div>
          </div>
          {/* Progress Indicator */}
          <div className="flex gap-1">
            {Array.from({ length: qaGuide.totalSteps }).map((_, i) => (
              <div
                key={i}
                className="h-2 flex-1 bg-primary rounded-full"
              />
            ))}
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-0">
          {qaGuide.steps.map((step, index) => (
            <GuideStep
              key={step.number}
              {...step}
              isLast={index === qaGuide.steps.length - 1}
            />
          ))}
        </div>

        {/* Completion Banner */}
        <ProgressBanner
          title="You're all set!"
          description="You receive instant, structured answers to your legal questions."
          icon="CheckCircle2"
          variant="success"
        />
      </section>

      {/* Draft Section */}
      <section id="draft" className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            How to Draft Documents with AI
          </h2>
          <p className="text-lg text-gray-600">
            Create legal documents quickly
          </p>
        </div>

        {/* Guide Summary Card */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {draftGuide.title}
              </h3>
              <p className="text-gray-600">{draftGuide.description}</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">
                {draftGuide.estimatedTime}
              </div>
              <div className="text-sm text-gray-500">
                {draftGuide.totalSteps} steps
              </div>
            </div>
          </div>
          {/* Progress Indicator */}
          <div className="flex gap-1">
            {Array.from({ length: draftGuide.totalSteps }).map((_, i) => (
              <div
                key={i}
                className="h-2 flex-1 bg-primary rounded-full"
              />
            ))}
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-0">
          {draftGuide.steps.map((step, index) => (
            <GuideStep
              key={step.number}
              {...step}
              isLast={index === draftGuide.steps.length - 1}
            />
          ))}
        </div>

        {/* Completion Banner */}
        <ProgressBanner
          title="You're all set!"
          description="You have a complete legal document draft ready for review and customization."
          icon="CheckCircle2"
          variant="success"
        />
      </section>

      {/* Analyze Section */}
      <section id="analyze" className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            How to Analyze Documents
          </h2>
          <p className="text-lg text-gray-600">
            Review and analyze legal documents
          </p>
        </div>

        {/* Guide Summary Card */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {analyzeGuide.title}
              </h3>
              <p className="text-gray-600">{analyzeGuide.description}</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">
                {analyzeGuide.estimatedTime}
              </div>
              <div className="text-sm text-gray-500">
                {analyzeGuide.totalSteps} steps
              </div>
            </div>
          </div>
          {/* Progress Indicator */}
          <div className="flex gap-1">
            {Array.from({ length: analyzeGuide.totalSteps }).map((_, i) => (
              <div
                key={i}
                className="h-2 flex-1 bg-primary rounded-full"
              />
            ))}
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-0">
          {analyzeGuide.steps.map((step, index) => (
            <GuideStep
              key={step.number}
              {...step}
              isLast={index === analyzeGuide.steps.length - 1}
            />
          ))}
        </div>

        {/* Completion Banner */}
        <ProgressBanner
          title="You're all set!"
          description="You receive comprehensive analysis of the document with key insights, risks, and important observations."
          icon="CheckCircle2"
          variant="success"
        />
      </section>

      {/* Feedback Section */}
      <FeedbackSection pageId="ai-assistant" />
    </div>
  );
}
