import { GuideSection } from "@/lib/types";

export const addHearingGuide: GuideSection = {
  id: "add-hearing",
  title: "How do I add a hearing?",
  subtitle: "Schedule and track court hearings in OctoGenie",
  description: "Schedule markers for your cases or matters to ensure you never miss a court appearance. Track every hearing from initial scheduling through to completion.",
  estimatedTime: "5 min",
  totalSteps: 5,
  steps: [
    {
      number: 1,
      title: "Open Calendar",
      description: "From the left-hand menu, click on 'Calendar'. The calendar view (Day/Week/Month) will open.",
      image: "/assets/calendar/Calendar%20-%20Option%20in%20the%20left%20menu.png",
      imageAlt: "Calendar navigation link",
    },
    {
      number: 2,
      title: "Select View and Click New Event",
      description: "Select 'Week' or 'Day' view for better time selection. Click the '+ New Event' button on the top-right corner of the calendar.",
      image: "/assets/calendar/Calendar%20-Day%20Week%20Month.png",
      imageAlt: "Calendar view and add button",
    },
    {
      number: 3,
      title: "Enter Hearing Details",
      description: "In the 'New Event / Hearing' form, enter the Event Title and select 'Hearing' as the Event Type. Fill in the Hearing Date along with Start and End times.",
      image: "/assets/calendar/Calendar%20-%20New%20Event%20and%20Hearing%20form.png",
      imageAlt: "Hearing details form",
    },
    {
      number: 4,
      title: "Link Case/Matter and Location",
      description: "Select the relevant Case or Matter from the dropdown. Link the associated Client. Enter the court name or hearing location in the Court/Location field.",
      image: "/assets/calendar/Calendar%20-%20New%20Event%20and%20Hearing%20form.png",
      imageAlt: "Linking case and client",
    },
    {
      number: 5,
      title: "Save and Verify",
      description: "Add an optional description/purpose. Review all details and click 'Save / Create Event'. The hearing will now appear on your calendar.",
      image: "/assets/calendar/Calendar%20-%20New%20Event.png",
      imageAlt: "Save hearing button",
      expectedOutcome: "Hearing is successfully scheduled and linked to the relevant Case/Matter for easy tracking.",
      isLast: true,
    },
  ],
};

export const viewHearingsGuide: GuideSection = {
  id: "view-hearings",
  title: "How do I view upcoming hearings?",
  subtitle: "Manage and monitor your legal schedule",
  description: "Quickly access and review all scheduled hearings for future dates. Use various views like Agenda for a quick summary of upcoming commitments.",
  estimatedTime: "2 min",
  totalSteps: 5,
  steps: [
    {
      number: 1,
      title: "Navigation",
      description: "From the left-hand menu, click on 'Calendar' to open your schedule.",
      image: "/assets/calendar/Calendar%20-%20Option%20in%20the%20left%20menu.png",
      imageAlt: "Calendar menu",
    },
    {
      number: 2,
      title: "Select Appropriate View",
      description: "On the top-right, choose: 'Week' for current week, 'Month' for full month, or 'Agenda' for a quick list-style view of all upcoming items.",
      image: "/assets/calendar/Calendar%20-Day%20Week%20Month.png",
      imageAlt: "View toggles",
    },
    {
      number: 3,
      title: "Navigate Date Range",
      description: "Use the left (<) and right (>) arrow buttons near the month/year to move to future dates. Click 'Today' to return instantly.",
      imageAlt: "Date navigation",
    },
    {
      number: 4,
      title: "Identify Events",
      description: "Upcoming hearings appear as events on the calendar grid. Click on any event to view its summary: title, date/time, and linked matter.",
      imageAlt: "Calendar event identification",
    },
    {
      number: 5,
      title: "Expected Outcome",
      description: "Users can successfully view and plan for all upcoming hearings. Use 'Agenda view' for a consolidated quick list.",
      expectedOutcome: "Full visibility of the firm's court commitments.",
      isLast: true,
    },
  ],
};

export const rescheduleHearingGuide: GuideSection = {
  id: "reschedule",
  title: "How do I reschedule a hearing?",
  subtitle: "Update existing hearing dates and times",
  description: "Learn how to change the schedule of an already created hearing event.",
  estimatedTime: "3 min",
  totalSteps: 6,
  steps: [
    {
      number: 1,
      title: "Locate the Hearing",
      description: "Open the Calendar. Use navigation arrows to move to the correct date and identify the hearing you want to reschedule.",
    },
    {
      number: 2,
      title: "Open Details",
      description: "Click on the hearing event on the calendar to open the details pop-up window.",
      imageAlt: "Opening event details",
    },
    {
      number: 3,
      title: "Enter Edit Mode",
      description: "Click on the Edit (✏️) icon or 'Edit' button in the hearing details window.",
      image: "/assets/calendar/Calendar%20-%20New%20Event%20and%20Hearing%20form.png",
      imageAlt: "Edit hearing",
    },
    {
      number: 4,
      title: "Update Date and Time",
      description: "Modify the Hearing Date, Start Time, or End Time. Update notes or remarks for the rescheduling reason if necessary.",
      image: "/assets/calendar/Calendar%20-%20New%20Event%20and%20Hearing%20form.png",
      imageAlt: "Updating schedule fields",
    },
    {
      number: 5,
      title: "Save Changes",
      description: "Click on 'Update / Save'. The hearing will move to the new selected date and time in the calendar view.",
      image: "/assets/calendar/Calendar%20-%20New%20Event.png",
      imageAlt: "Save button",
    },
    {
      number: 6,
      title: "Verify Results",
      description: "The hearing is successfully rescheduled and appears on the new date/time while all linked case/matter details remain unchanged.",
      expectedOutcome: "Hearing records are accurately updated with zero data loss on linked entities.",
      isLast: true,
    },
  ],
};

export const remindersGuide: GuideSection = {
  id: "reminders",
  title: "How do I get hearing reminders?",
  subtitle: "Receive timely alerts for important events",
  description: "Set up notifications to ensure no court dates or critical legal events are missed.",
  estimatedTime: "3 min",
  totalSteps: 5,
  steps: [
    {
      number: 1,
      title: "Open Hearing Event",
      description: "Navigate to the date of the scheduled hearing and click on the event to open details.",
      imageAlt: "Targeting event",
    },
    {
      number: 2,
      title: "Enable Notification",
      description: "Click the Edit (✏️) option. In the hearing form, locate the 'Reminder / Notification' section.",
      imageAlt: "Reminder section",
    },
    {
      number: 3,
      title: "Select Timing",
      description: "Choose when to receive the reminder: 10 minutes before, 30 minutes before, 1 hour before, or 1 day before.",
      image: "/assets/calendar/Calendar%20-%20New%20Event%20and%20Hearing%20form.png",
      imageAlt: "Timing selection",
    },
    {
      number: 4,
      title: "Save Settings",
      description: "Click on 'Save / Update' to apply the reminder settings. You will receive in-app alerts before the hearing.",
      image: "/assets/calendar/Calendar%20-%20New%20Event.png",
      imageAlt: "Applying reminders",
    },
    {
      number: 5,
      title: "Google Calendar Sync",
      description: "If the calendar is synced with Google (check for Google icon near calendar name), ensure notifications are enabled in Google Calendar for mobile alerts.",
      expectedOutcome: "The user receives multi-channel alerts/reminders before every scheduled hearing time.",
      isLast: true,
    },
  ],
};
