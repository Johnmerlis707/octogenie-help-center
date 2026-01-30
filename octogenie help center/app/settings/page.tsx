"use client";

import GuideStep from "@/components/GuideStep";
import ProgressBanner from "@/components/ProgressBanner";
import FeedbackSection from "@/components/FeedbackSection";
import {
  navigateToSettingsGuide,
  manageUsersGuide,
  manageRolesPermissionsGuide,
  manageApprovalsGuide,
} from "@/lib/settingsGuide";

export default function SettingsPage() {
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
          <span>Settings & Admin</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Manage your account, profile details, organization information,
          security, users, roles, and system preferences.
        </p>
      </div>

      {/* What is Settings Section */}
      <section id="what-is-settings" className="space-y-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            What is the Settings section used for?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The Settings section is used to manage your account, profile details,
            organization information, security, users, roles, system preferences,
            and other platform configurations.
          </p>
        </div>
      </section>

      {/* Navigate to Settings Section */}
      <section id="navigate-settings" className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            How to Navigate to Settings
          </h2>
          <p className="text-lg text-gray-600">
            Access the Settings section
          </p>
        </div>

        {/* Guide Summary Card */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {navigateToSettingsGuide.title}
              </h3>
              <p className="text-gray-600">
                {navigateToSettingsGuide.description}
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">
                {navigateToSettingsGuide.estimatedTime}
              </div>
              <div className="text-sm text-gray-500">
                {navigateToSettingsGuide.totalSteps} steps
              </div>
            </div>
          </div>
          {/* Progress Indicator */}
          <div className="flex gap-1">
            {Array.from({ length: navigateToSettingsGuide.totalSteps }).map(
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
          {navigateToSettingsGuide.steps.map((step, index) => (
            <GuideStep
              key={step.number}
              {...step}
              isLast={index === navigateToSettingsGuide.steps.length - 1}
            />
          ))}
        </div>

        {/* Completion Banner */}
        <ProgressBanner
          title="You're all set!"
          description="You can now access all settings options to manage your account and system preferences."
          icon="CheckCircle2"
          variant="success"
        />
      </section>

      {/* Manage Users Section */}
      <section id="users-roles" className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            How to Manage Users & Roles
          </h2>
          <p className="text-lg text-gray-600">
            Add and manage users in your organization
          </p>
        </div>

        {/* Guide Summary Card */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {manageUsersGuide.title}
              </h3>
              <p className="text-gray-600">{manageUsersGuide.description}</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">
                {manageUsersGuide.estimatedTime}
              </div>
              <div className="text-sm text-gray-500">
                {manageUsersGuide.totalSteps} steps
              </div>
            </div>
          </div>
          {/* Progress Indicator */}
          <div className="flex gap-1">
            {Array.from({ length: manageUsersGuide.totalSteps }).map((_, i) => (
              <div
                key={i}
                className="h-2 flex-1 bg-primary rounded-full"
              />
            ))}
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-0">
          {manageUsersGuide.steps.map((step, index) => (
            <GuideStep
              key={step.number}
              {...step}
              isLast={index === manageUsersGuide.steps.length - 1}
            />
          ))}
        </div>

        {/* Completion Banner */}
        <ProgressBanner
          title="You're all set!"
          description="New user is successfully added and will receive an invitation email."
          icon="CheckCircle2"
          variant="success"
        />
      </section>

      {/* Manage Roles & Permissions Section */}
      <section id="roles-permissions" className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            How to Manage Roles & Permissions
          </h2>
          <p className="text-lg text-gray-600">
            Configure user roles and their permissions
          </p>
        </div>

        {/* Guide Summary Card */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {manageRolesPermissionsGuide.title}
              </h3>
              <p className="text-gray-600">
                {manageRolesPermissionsGuide.description}
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">
                {manageRolesPermissionsGuide.estimatedTime}
              </div>
              <div className="text-sm text-gray-500">
                {manageRolesPermissionsGuide.totalSteps} steps
              </div>
            </div>
          </div>
          {/* Progress Indicator */}
          <div className="flex gap-1">
            {Array.from({ length: manageRolesPermissionsGuide.totalSteps }).map(
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
          {manageRolesPermissionsGuide.steps.map((step, index) => (
            <GuideStep
              key={step.number}
              {...step}
              isLast={
                index === manageRolesPermissionsGuide.steps.length - 1
              }
            />
          ))}
        </div>

        {/* Completion Banner */}
        <ProgressBanner
          title="You're all set!"
          description="Role permissions are successfully configured and applied to users with that role."
          icon="CheckCircle2"
          variant="success"
        />
      </section>

      {/* Manage Approvals Section */}
      <section id="approvals" className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            How to Manage Approvals
          </h2>
          <p className="text-lg text-gray-600">
            Configure approval workflows for different modules
          </p>
        </div>

        {/* Guide Summary Card */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {manageApprovalsGuide.title}
              </h3>
              <p className="text-gray-600">
                {manageApprovalsGuide.description}
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">
                {manageApprovalsGuide.estimatedTime}
              </div>
              <div className="text-sm text-gray-500">
                {manageApprovalsGuide.totalSteps} steps
              </div>
            </div>
          </div>
          {/* Progress Indicator */}
          <div className="flex gap-1">
            {Array.from({ length: manageApprovalsGuide.totalSteps }).map(
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
          {manageApprovalsGuide.steps.map((step, index) => (
            <GuideStep
              key={step.number}
              {...step}
              isLast={
                index === manageApprovalsGuide.steps.length - 1
              }
            />
          ))}
        </div>

        {/* Completion Banner */}
        <ProgressBanner
          title="You're all set!"
          description="Approval workflows are successfully configured for your organization."
          icon="CheckCircle2"
          variant="success"
        />
      </section>

      {/* Feedback Section */}
      <FeedbackSection pageId="settings" />
    </div>
  );
}
