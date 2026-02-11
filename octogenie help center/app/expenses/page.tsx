"use client";

import GuideStep from "@/components/GuideStep";
import ProgressBanner from "@/components/ProgressBanner";
import FeedbackSection from "@/components/FeedbackSection";
import {
  addExpenseGuide,
  linkExpenseToCaseGuide,
  filterExpensesByStatusGuide,
  searchAndFilterExpensesGuide,
} from "@/lib/expensesGuide";

export default function ExpensesPage() {
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
          <span>Expenses</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Record, track, review, and bill expenses related to cases or matters.
        </p>
      </div>

      {/* What is Expenses Section */}
      <section id="what-is-expenses" className="space-y-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            How does the Expenses feature help?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Expenses feature helps users record, track, review, and bill
            expenses related to cases or matters. It ensures better financial
            control, accurate client billing, and smooth approval workflows.
          </p>
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">
              How the Expenses Feature Helps
            </h3>
            <p className="text-gray-700 mb-2">
              <strong>1. Track All Expenses in One Place:</strong>
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>Users can record billable and non-billable expenses.</li>
              <li>
                Expenses are organized under My Expense and Team Expense tabs.
              </li>
              <li>
                Helps maintain transparency and avoid missing expense entries.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Add Expense Section */}
      <section id="add-expense" className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            How to Add an Expense
          </h2>
          <p className="text-lg text-gray-600">
            Record billable or non-billable expenses
          </p>
        </div>

        {/* Guide Summary Card */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {addExpenseGuide.title}
              </h3>
              <p className="text-gray-600">{addExpenseGuide.description}</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">
                {addExpenseGuide.estimatedTime}
              </div>
              <div className="text-sm text-gray-500">
                {addExpenseGuide.totalSteps} steps
              </div>
            </div>
          </div>
          {/* Progress Indicator */}
          <div className="flex gap-1">
            {Array.from({ length: addExpenseGuide.totalSteps }).map((_, i) => (
              <div
                key={i}
                className="h-2 flex-1 bg-primary rounded-full"
              />
            ))}
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-0">
          {addExpenseGuide.steps.map((step, index) => (
            <GuideStep
              key={step.number}
              {...step}
              isLast={index === addExpenseGuide.steps.length - 1}
            />
          ))}
        </div>

        {/* Completion Banner */}
        <ProgressBanner
          title="You're all set!"
          description="Expense is successfully recorded and can be tracked, approved, and billed to clients if marked as billable."
          icon="CheckCircle2"
          variant="success"
        />
      </section>

      {/* Link Expense to Case Section */}
      <section id="link-case" className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            How to Link Expense to Case
          </h2>
          <p className="text-lg text-gray-600">
            Associate expenses with cases or matters
          </p>
        </div>

        {/* Guide Summary Card */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {linkExpenseToCaseGuide.title}
              </h3>
              <p className="text-gray-600">
                {linkExpenseToCaseGuide.description}
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">
                {linkExpenseToCaseGuide.estimatedTime}
              </div>
              <div className="text-sm text-gray-500">
                {linkExpenseToCaseGuide.totalSteps} steps
              </div>
            </div>
          </div>
          {/* Progress Indicator */}
          <div className="flex gap-1">
            {Array.from({ length: linkExpenseToCaseGuide.totalSteps }).map(
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
          {linkExpenseToCaseGuide.steps.map((step, index) => (
            <GuideStep
              key={step.number}
              {...step}
              isLast={index === linkExpenseToCaseGuide.steps.length - 1}
            />
          ))}
        </div>
      </section>

      {/* Filter Section */}
      <section id="filter-status" className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            {filterExpensesByStatusGuide.title}
          </h2>
          <p className="text-lg text-gray-600">
            {filterExpensesByStatusGuide.subtitle}
          </p>
        </div>

        <div className="space-y-0">
          {filterExpensesByStatusGuide.steps.map((step, index) => (
            <GuideStep
              key={step.number}
              {...step}
              isLast={index === filterExpensesByStatusGuide.steps.length - 1}
            />
          ))}
        </div>
      </section>

      {/* Search and Filter Section */}
      <section id="search-filter" className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            {searchAndFilterExpensesGuide.title}
          </h2>
          <p className="text-lg text-gray-600">
            {searchAndFilterExpensesGuide.subtitle}
          </p>
        </div>

        <div className="space-y-0">
          {searchAndFilterExpensesGuide.steps.map((step, index) => (
            <GuideStep
              key={step.number}
              {...step}
              isLast={index === searchAndFilterExpensesGuide.steps.length - 1}
            />
          ))}
        </div>

        <ProgressBanner
          title="Expense Management Finalized"
          description="Efficiently track, categorize, and approve all firm-wide expenses for better financial oversight."
          icon="Wallet"
          variant="success"
        />
      </section>

      {/* Feedback Section */}
      <FeedbackSection pageId="expenses" />
    </div>
  );
}
