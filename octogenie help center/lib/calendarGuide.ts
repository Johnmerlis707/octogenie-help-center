import { GuideSection } from "@/lib/types";


export const addHearingGuide: GuideSection = {
  id: "add-hearing",
  title: "Adding a Hearing",
  subtitle: "Schedule and track court hearings",
  description: "Follow these steps to add a new hearing to your calendar",
  estimatedTime: "3 min",
  totalSteps: 5,
  steps: [
    {
      number: 1,
      title: "Open Calendar",
      description: "From the left-side menu, click on Calendar. The calendar view (Day / Week / Month) will open. Select Week or Day view for better time selection.",
      image: "/assets/calendar/calendar-navigation.png",
      imageAlt: "Calendar navigation",
    },
    {
      number: 2,
      title: "Click on New Event",
      description: "Click the + New Event button on the top-right corner of the calendar. A New Event / Hearing form will open.",
      image: "/assets/calendar/new-event-button.png",
      imageAlt: "New Event button",
    },
    {
      number: 3,
      title: "Enter Hearing Details",
      description: "Fill in the required information:",
      image: "/assets/calendar/new-event-hearing-form.png",
      imageAlt: "Hearing form",
      tips: [
        "Event Title",
        "Event Type: Select Hearing",
        "Date & Time: Select the hearing date, start time and end time",
        "Related Case / Matter: Select from dropdown",
        "Client Name (if applicable)",
        "Court / Location: Enter court name or hearing location",
        "Description / Notes (optional)",
      ],
    },
    {
      number: 4,
      title: "Save the Hearing",
      description: "Review all entered details. Click Save / Create Event.",
      imageAlt: "Save button",
    },
    {
      number: 5,
      title: "Verify Hearing Entry",
      description: "The hearing will now appear on the Calendar. You can click the event to view details, edit or delete if required.",
      imageAlt: "Calendar view with hearing",
      expectedOutcome: "Hearing is successfully scheduled and visible in the Calendar, linked to the relevant Case/Matter for easy tracking.",
      isLast: true,
    },
  ],
};

export const viewHearingsGuide: GuideSection = {
  id: "view-hearings",
  title: "Viewing Upcoming Hearings",
  subtitle: "Access and review scheduled hearings",
  description: "View all scheduled upcoming hearings",
  estimatedTime: "1 min",
  totalSteps: 4,
  steps: [
    {
      number: 1,
      title: "Log in to OctoGenie",
      description: "Log in to the OctoGenie platform.",
      imageAlt: "Login screen",
    },
    {
      number: 2,
      title: "Navigate to Calendar",
      description: "From the left-hand menu, click on Calendar. The calendar screen will open (default view is usually Week view).",
      image: "/assets/calendar/calendar-navigation.png",
      imageAlt: "Calendar navigation",
    },
    {
      number: 3,
      title: "Select View Type",
      description: "On the top-right of the calendar, choose Week, Month, or Agenda view to see upcoming hearings.",
      image: "/assets/calendar/day-week-month-view.png",
      imageAlt: "View selection",
    },
    {
      number: 4,
      title: "Navigate Dates",
      description: "Use the left (<) and right (>) arrow buttons to move to upcoming weeks or months. Click Today to return to current date.",
      imageAlt: "Date navigation",
      expectedOutcome: "All upcoming hearings are displayed in the selected view format.",
      isLast: true,
    },
  ],
};
