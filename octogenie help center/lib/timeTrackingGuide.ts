import { GuideSection } from "@/lib/types";

export const trackTimeTimerGuide: GuideSection = {
    id: "track-time-timer",
    title: "Track Time Using Start Timer (Real-Time)",
    subtitle: "Capture billable time exactly as you work",
    description: "Use the real-time timer to capture every minute spent on client work. The feature supports both billable and non-billable hours for accurate firm-wide tracking.",
    estimatedTime: "5 min",
    totalSteps: 5,
    steps: [
        {
            number: 1,
            title: "Navigate to Time Tracking",
            description: "Log in to the OctoGenie portal and click on 'Time Tracking' from the left-side menu. The dashboard will show Total Hours, Billable/Non-Billable hours, and a Weekly Overview.",
            image: "/assets/time-tracking/Time%20Tracking%20-%20Option%20in%20the%20left%20menu.png",
            imageAlt: "Time tracking menu",
        },
        {
            number: 2,
            title: "Start the Timer",
            description: "Click on the 'Start Timer' button located at the top right of the dashboard.",
            image: "/assets/time-tracking/Time%20Tracking%20-%20Start%20Timer.png",
            imageAlt: "Start Timer button",
        },
        {
            number: 3,
            title: "Provide Activity Details",
            description: "Select the Activity Type (e.g., Client Consultation, Court Appearance, Document Drafting). Link to a Client or Matter if applicable, and toggle the Billable/Non-Billable option.",
            image: "/assets/time-tracking/Time%20Tracking%20-%20Start%20timer%20details%20updation.png",
            imageAlt: "Timer configuration",
        },
        {
            number: 4,
            title: "Begin Tracking",
            description: "Click 'Start Timer' to begin recording. The timer will run in the background as you perform your legal work.",
            image: "/assets/time-tracking/Time%20Tracking%20-%20Dashboard.png",
            imageAlt: "Active timer",
        },
        {
            number: 5,
            title: "Stop and Save",
            description: "Once the task is completed, click 'Stop Timer'. The time entry will be automatically saved and reflected in your Total Hours and Weekly Overview.",
            image: "/assets/time-tracking/Time%20Tracking%20-%20Weekly%20Overview.png",
            imageAlt: "Timer stop button",
            expectedOutcome: "Precise, real-time billable records are logged without manual guesswork.",
            isLast: true,
        },
    ],
};

export const trackTimeManualGuide: GuideSection = {
    id: "track-time-manual",
    title: "Track Time Using Manual Entry",
    subtitle: "Log hours after work completion",
    description: "Manually record time for past legal work or activities. This ensures all hours are accounted for, whether they are billable to a client or internal work.",
    estimatedTime: "3 min",
    totalSteps: 4,
    steps: [
        {
            number: 1,
            title: "Access Manual Entry",
            description: "Click on the '+ Manual Entry' button in the top right of the Time Tracking dashboard.",
            image: "/assets/time-tracking/Time%20Tracking%20-%20Manual%20Entry.png",
            imageAlt: "Manual entry button",
        },
        {
            number: 2,
            title: "Enter Time Details",
            description: "Fill in the required details: Date, Activity, Client (if applicable), Duration (hours/minutes), Billable/Non-Billable status, and an optional Description.",
            image: "/assets/time-tracking/Time%20Tracking%20-%20Details%20Updation%20(Manual%20Entry).png",
            imageAlt: "Manual entry form",
        },
        {
            number: 3,
            title: "Save the Entry",
            description: "Review your inputs and click 'Save'.",
            imageAlt: "Save button",
        },
        {
            number: 4,
            title: "Verify Log",
            description: "The entry will appear in the time log list with its current status. Ensure all details correctly represent the work performed.",
            image: "/assets/time-tracking/Time%20Tracking%20-%20Time%20tracking%20details%20%20table.png",
            imageAlt: "Time logs list",
            expectedOutcome: "Past work hours are accurately recorded for billing and reporting.",
            isLast: true,
        },
    ],
};

export const reviewTimeGuide: GuideSection = {
    id: "review-time",
    title: "Reviewing and Monitoring Time Logs",
    subtitle: "Analyze productivity and billing readiness",
    description: "Use the dashboard and logs to review weekly progress and ensure accurate data for invoicing.",
    estimatedTime: "2 min",
    totalSteps: 4,
    steps: [
        {
            number: 1,
            title: "Monitor Weekly Summary",
            description: "Refer to the 'Weekly Overview' section to view hours logged per day, Week Total, and Billable hours summary.",
            image: "/assets/time-tracking/Time%20Tracking%20-%20Weekly%20Overview.png",
            imageAlt: "Weekly overview chart",
        },
        {
            number: 2,
            title: "Review Time Table",
            description: "Scroll down to view the Time Entries Table. Check columns like Date, Activity, Description, Client, Duration, and Status.",
            image: "/assets/time-tracking/Time%20Tracking%20-%20Time%20tracking%20details%20%20table.png",
            imageAlt: "Time entries table",
        },
        {
            number: 3,
            title: "Use Filter and Search",
            description: "Find specific entries using Statuses (Approved, Rejected, etc.), Types, or Activities filters.",
            image: "/assets/time-tracking/Time%20Tracking%20-%20Filter%20%26%20Search%20options.png",
            imageAlt: "Time search and filters",
        },
        {
            number: 4,
            title: "Check Approval Status",
            description: "Each entry has a status (e.g., Approved, Rejected, Non-Billable). Ensure accountability and review before final billing.",
            imageAlt: "Approval status column",
            expectedOutcome: "Reliable time data is ready for invoicing and firm-wide productivity analysis.",
            isLast: true,
        },
    ],
};
