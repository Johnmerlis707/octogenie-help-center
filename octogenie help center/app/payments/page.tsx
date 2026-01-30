"use client";

import GuideStep from "@/components/GuideStep";
import ProgressBanner from "@/components/ProgressBanner";
import FeedbackSection from "@/components/FeedbackSection";
import {
  recordPaymentGuide,
  filterPaymentsGuide,
} from "@/lib/paymentsGuide";

export default function PaymentsPage() {
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
          <span>Payments</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Track and record payments received from clients.
        </p>
      </div>

      {/* Benefits Section */}
      <section id="benefits" className="space-y-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            What are the key benefits of the Payment section?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Payment section is used to track and record the payments.
          </p>
          <div className="bg-gray-50 rounded-lg p-4">
            <ol className="list-decimal list-inside text-gray-700 space-y-3">
              <li>
                <strong>Centralized Payment Tracking:</strong> View all client
                payments in one place.
              </li>
              <li>
                <strong>Real-time Payment Overview:</strong> Dashboard cards show
                This Month's Collections, Pending Payments, Average Payment Time.
              </li>
              <li>
                <strong>Clear Payment Status Visibility:</strong> Each payment has
                a clear status such as: Completed, Pending, Processing.
              </li>
              <li>
                <strong>Invoice & Client Mapping:</strong> Payments are linked to
                Invoice number and Client name.
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Record Payment Section */}
      <section id="record-payment" className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            How to Record a Payment
          </h2>
          <p className="text-lg text-gray-600">
            Track payments received from clients
          </p>
        </div>

        {/* Guide Summary Card */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {recordPaymentGuide.title}
              </h3>
              <p className="text-gray-600">
                {recordPaymentGuide.description}
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">
                {recordPaymentGuide.estimatedTime}
              </div>
              <div className="text-sm text-gray-500">
                {recordPaymentGuide.totalSteps} steps
              </div>
            </div>
          </div>
          {/* Progress Indicator */}
          <div className="flex gap-1">
            {Array.from({ length: recordPaymentGuide.totalSteps }).map(
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
          {recordPaymentGuide.steps.map((step, index) => (
            <GuideStep
              key={step.number}
              {...step}
              isLast={index === recordPaymentGuide.steps.length - 1}
            />
          ))}
        </div>

        {/* Completion Banner */}
        <ProgressBanner
          title="You're all set!"
          description="Payment is successfully recorded and linked to the invoice. Invoice status is updated accordingly."
          icon="CheckCircle2"
          variant="success"
        />
      </section>

      {/* Filter Payments Section */}
      <section id="filter-payments" className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            How to Filter Payments
          </h2>
          <p className="text-lg text-gray-600">
            Find specific payments using filters
          </p>
        </div>

        {/* Guide Summary Card */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {filterPaymentsGuide.title}
              </h3>
              <p className="text-gray-600">
                {filterPaymentsGuide.description}
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">
                {filterPaymentsGuide.estimatedTime}
              </div>
              <div className="text-sm text-gray-500">
                {filterPaymentsGuide.totalSteps} steps
              </div>
            </div>
          </div>
          {/* Progress Indicator */}
          <div className="flex gap-1">
            {Array.from({ length: filterPaymentsGuide.totalSteps }).map(
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
          {filterPaymentsGuide.steps.map((step, index) => (
            <GuideStep
              key={step.number}
              {...step}
              isLast={index === filterPaymentsGuide.steps.length - 1}
            />
          ))}
        </div>
      </section>

      {/* Feedback Section */}
      <FeedbackSection pageId="payments" />
    </div>
  );
}
