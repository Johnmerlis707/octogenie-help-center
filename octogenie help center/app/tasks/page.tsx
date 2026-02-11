"use client";

import GuideStep from "@/components/GuideStep";
import ProgressBanner from "@/components/ProgressBanner";
import FeedbackSection from "@/components/FeedbackSection";
import { Icons } from "@/lib/icons";
import {
    createTaskGuide,
    assignTaskGuide,
    setDueDateGuide,
} from "@/lib/tasksGuide";

export default function TasksPage() {
    return (
        <div className="max-w-6xl mx-auto space-y-12">
            {/* Header Section */}
            <div className="space-y-4">
                <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                        Productivity
                    </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 flex items-center gap-3">
                    <Icons.CheckSquare className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                    <span>Tasks</span>
                </h1>
                <p className="text-lg text-gray-600 max-w-3xl">
                    Create and assign tasks related to cases, matters, or clients for effective task tracking
                    and management. Stay organized and ensure every deadline is met.
                </p>
            </div>

            {/* Create Task Section */}
            <section id="create-task" className="space-y-8">
                <div className="space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                        {createTaskGuide.title}
                    </h2>
                    <p className="text-lg text-gray-600">
                        {createTaskGuide.subtitle}
                    </p>
                </div>

                {/* Guide Summary Card */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <div className="flex items-start justify-between mb-4">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                {createTaskGuide.title}
                            </h3>
                            <p className="text-gray-600">{createTaskGuide.description}</p>
                        </div>
                        <div className="text-right">
                            <div className="text-sm text-gray-500">{createTaskGuide.estimatedTime}</div>
                            <div className="text-sm text-gray-500">{createTaskGuide.totalSteps} steps</div>
                        </div>
                    </div>
                    <div className="flex gap-1">
                        {Array.from({ length: createTaskGuide.totalSteps }).map((_, i) => (
                            <div
                                key={i}
                                className="h-2 flex-1 bg-primary rounded-full"
                            />
                        ))}
                    </div>
                </div>

                {/* Steps */}
                <div className="space-y-0">
                    {createTaskGuide.steps.map((step, index) => (
                        <GuideStep
                            key={step.number}
                            {...step}
                            isLast={index === createTaskGuide.steps.length - 1}
                        />
                    ))}
                </div>

                <ProgressBanner
                    title="Task Created Successfully"
                    description="The task is now visible in the dashboard and assigned users can begin tracking progress."
                    icon="CheckCircle2"
                    variant="success"
                />
            </section>

            {/* Assign Task Section */}
            <section id="assign-task" className="space-y-8">
                <div className="space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                        {assignTaskGuide.title}
                    </h2>
                    <p className="text-lg text-gray-600">
                        {assignTaskGuide.subtitle}
                    </p>
                </div>

                {/* Guide Summary Card */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <div className="flex items-start justify-between mb-4">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                {assignTaskGuide.title}
                            </h3>
                            <p className="text-gray-600">{assignTaskGuide.description}</p>
                        </div>
                        <div className="text-right">
                            <div className="text-sm text-gray-500">{assignTaskGuide.estimatedTime}</div>
                            <div className="text-sm text-gray-500">{assignTaskGuide.totalSteps} steps</div>
                        </div>
                    </div>
                    <div className="flex gap-1">
                        {Array.from({ length: assignTaskGuide.totalSteps }).map((_, i) => (
                            <div
                                key={i}
                                className="h-2 flex-1 bg-primary rounded-full"
                            />
                        ))}
                    </div>
                </div>

                <div className="space-y-0">
                    {assignTaskGuide.steps.map((step, index) => (
                        <GuideStep
                            key={step.number}
                            {...step}
                            isLast={index === assignTaskGuide.steps.length - 1}
                        />
                    ))}
                </div>
            </section>

            {/* Set Due Date Section */}
            <section id="set-due-date" className="space-y-8">
                <div className="space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                        {setDueDateGuide.title}
                    </h2>
                    <p className="text-lg text-gray-600">
                        {setDueDateGuide.subtitle}
                    </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <div className="flex items-start justify-between mb-4">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                {setDueDateGuide.title}
                            </h3>
                            <p className="text-gray-600">{setDueDateGuide.description}</p>
                        </div>
                        <div className="text-right">
                            <div className="text-sm text-gray-500">{setDueDateGuide.estimatedTime}</div>
                            <div className="text-sm text-gray-500">{setDueDateGuide.totalSteps} steps</div>
                        </div>
                    </div>
                    <div className="flex gap-1">
                        {Array.from({ length: setDueDateGuide.totalSteps }).map((_, i) => (
                            <div
                                key={i}
                                className="h-2 flex-1 bg-primary rounded-full"
                            />
                        ))}
                    </div>
                </div>

                <div className="space-y-0">
                    {setDueDateGuide.steps.map((step, index) => (
                        <GuideStep
                            key={step.number}
                            {...step}
                            isLast={index === setDueDateGuide.steps.length - 1}
                        />
                    ))}
                </div>
            </section>

            <FeedbackSection pageId="tasks" />
        </div>
    );
}
