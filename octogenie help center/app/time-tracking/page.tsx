"use client";

import GuideStep from "@/components/GuideStep";
import ProgressBanner from "@/components/ProgressBanner";
import FeedbackSection from "@/components/FeedbackSection";
import { Icons } from "@/lib/icons";
import {
    trackTimeTimerGuide,
    trackTimeManualGuide,
    reviewTimeGuide,
} from "@/lib/timeTrackingGuide";

export default function TimeTrackingPage() {
    return (
        <div className="max-w-6xl mx-auto space-y-12">
            {/* Header Section */}
            <div className="space-y-4">
                <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm font-medium rounded-full">
                        Financial & Productivity
                    </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 flex items-center gap-3">
                    <Icons.Clock className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                    <span>Time Tracking</span>
                </h1>
                <p className="text-lg text-gray-600 max-w-3xl">
                    Record, manage, and monitor the time spent on different activities for clients or internal work.
                    Accurate time tracking ensures transparent billing and improved productivity.
                </p>
            </div>

            {/* Timer Section */}
            <section id="track-time-timer" className="space-y-8">
                <div className="space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                        {trackTimeTimerGuide.title}
                    </h2>
                    <p className="text-lg text-gray-600">
                        {trackTimeTimerGuide.subtitle}
                    </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <div className="flex items-start justify-between mb-4">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                {trackTimeTimerGuide.title}
                            </h3>
                            <p className="text-gray-600">{trackTimeTimerGuide.description}</p>
                        </div>
                        <div className="text-right">
                            <div className="text-sm text-gray-500">{trackTimeTimerGuide.estimatedTime}</div>
                            <div className="text-sm text-gray-500">{trackTimeTimerGuide.totalSteps} steps</div>
                        </div>
                    </div>
                    <div className="flex gap-1">
                        {Array.from({ length: trackTimeTimerGuide.totalSteps }).map((_, i) => (
                            <div
                                key={i}
                                className="h-2 flex-1 bg-primary rounded-full"
                            />
                        ))}
                    </div>
                </div>

                <div className="space-y-0">
                    {trackTimeTimerGuide.steps.map((step, index) => (
                        <GuideStep
                            key={step.number}
                            {...step}
                            isLast={index === trackTimeTimerGuide.steps.length - 1}
                        />
                    ))}
                </div>
            </section>

            {/* Manual Entry Section */}
            <section id="track-time-manual" className="space-y-8">
                <div className="space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                        {trackTimeManualGuide.title}
                    </h2>
                    <p className="text-lg text-gray-600">
                        {trackTimeManualGuide.subtitle}
                    </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <div className="flex items-start justify-between mb-4">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                {trackTimeManualGuide.title}
                            </h3>
                            <p className="text-gray-600">{trackTimeManualGuide.description}</p>
                        </div>
                        <div className="text-right">
                            <div className="text-sm text-gray-500">{trackTimeManualGuide.estimatedTime}</div>
                            <div className="text-sm text-gray-500">{trackTimeManualGuide.totalSteps} steps</div>
                        </div>
                    </div>
                    <div className="flex gap-1">
                        {Array.from({ length: trackTimeManualGuide.totalSteps }).map((_, i) => (
                            <div
                                key={i}
                                className="h-2 flex-1 bg-primary rounded-full"
                            />
                        ))}
                    </div>
                </div>

                <div className="space-y-0">
                    {trackTimeManualGuide.steps.map((step, index) => (
                        <GuideStep
                            key={step.number}
                            {...step}
                            isLast={index === trackTimeManualGuide.steps.length - 1}
                        />
                    ))}
                </div>
            </section>

            {/* Review Section */}
            <section id="review-time" className="space-y-8">
                <div className="space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                        {reviewTimeGuide.title}
                    </h2>
                    <p className="text-lg text-gray-600">
                        {reviewTimeGuide.subtitle}
                    </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <div className="flex items-start justify-between mb-4">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                {reviewTimeGuide.title}
                            </h3>
                            <p className="text-gray-600">{reviewTimeGuide.description}</p>
                        </div>
                        <div className="text-right">
                            <div className="text-sm text-gray-500">{reviewTimeGuide.estimatedTime}</div>
                            <div className="text-sm text-gray-500">{reviewTimeGuide.totalSteps} steps</div>
                        </div>
                    </div>
                    <div className="flex gap-1">
                        {Array.from({ length: reviewTimeGuide.totalSteps }).map((_, i) => (
                            <div
                                key={i}
                                className="h-2 flex-1 bg-primary rounded-full"
                            />
                        ))}
                    </div>
                </div>

                <div className="space-y-0">
                    {reviewTimeGuide.steps.map((step, index) => (
                        <GuideStep
                            key={step.number}
                            {...step}
                            isLast={index === reviewTimeGuide.steps.length - 1}
                        />
                    ))}
                </div>

                <ProgressBanner
                    title="Consolidated Time Overview"
                    description="Accurately tracking hours ensures transparent billing, better time management, and reliable data for internal reporting."
                    icon="Clock"
                    variant="info"
                />
            </section>

            <FeedbackSection pageId="time-tracking" />
        </div>
    );
}
