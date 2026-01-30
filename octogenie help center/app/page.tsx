"use client";

import Link from "next/link";
import { Icons } from "@/lib/icons";
import WorkflowStep from "@/components/WorkflowStep";
import ModuleCard from "@/components/ModuleCard";
import QuickActionCard from "@/components/QuickActionCard";
import ProgressBanner from "@/components/ProgressBanner";
import FeedbackSection from "@/components/FeedbackSection";
import {
  workflowSteps,
  moduleGuides,
  quickActions,
} from "@/lib/content";

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto space-y-12">
      {/* Hero Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
          <Icons.Sparkles className="w-4 h-4" />
          <span>OctoGenie Help Center</span>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
          Everything you need to manage{" "}
          <span className="text-primary">your legal practice</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          Self-serve tutorials and step-by-step guides for lawyers and legal
          teams. No external training required.
        </p>
        <div className="flex flex-wrap gap-4 mt-6">
          <Link
            href="/getting-started"
            className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center gap-2"
          >
            <Icons.FileCheck className="w-5 h-5" />
            Get Started
          </Link>
          <Link
            href="/leads#add-lead"
            className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center gap-2"
          >
            <Icons.Sparkles className="w-5 h-5" />
            Create Your First Lead
          </Link>
          <Link
            href="#legal-workflow"
            className="px-6 py-3 text-primary border border-primary rounded-lg font-medium hover:bg-primary-light transition-colors flex items-center gap-2"
          >
            View Legal Workflow →
          </Link>
        </div>
      </div>

      {/* The Legal Workflow Section */}
      <div id="legal-workflow" className="space-y-8 scroll-mt-8 bg-gray-50/50 rounded-2xl p-6 md:p-12 border border-gray-100">
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            The Legal Workflow
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Follow this path from initial enquiry to final payment
          </p>
        </div>
        <div className="space-y-6 md:space-y-8">
          {workflowSteps.map((step, index) => (
            <WorkflowStep
              key={step.number}
              {...step}
              isLast={index === workflowSteps.length - 1}
            />
          ))}
        </div>
        {/* Completion Banner */}
        <div className="pt-4">
          <ProgressBanner
            title="Complete workflow!"
            description="Master each step to streamline your legal practice."
            icon="CheckCircle2"
            variant="success"
          />
        </div>
      </div>

      {/* All Guides Section */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">All Guides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {moduleGuides.map((guide) => (
            <ModuleCard key={guide.id} {...guide} />
          ))}
        </div>
      </div>

      {/* Quick Start Actions Section */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">Quick Start Actions</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {quickActions.map((action, index) => (
            <QuickActionCard key={index} {...action} />
          ))}
        </div>
      </div>

      {/* Feedback Section */}
      <FeedbackSection pageId="home" />

      {/* Footer */}
      <footer className="border-t border-gray-200 pt-8 mt-12">
        <div className="flex justify-between items-center text-sm text-gray-500">
          <p>© 2026 OctoGenie Legal Partner</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-primary">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-primary">
              Terms
            </Link>
            <Link href="/faqs" className="hover:text-primary">
              Support
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
