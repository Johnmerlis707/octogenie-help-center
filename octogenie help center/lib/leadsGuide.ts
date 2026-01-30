import { GuideSection } from "@/lib/types";


export const addLeadGuide: GuideSection = {
  id: "add-lead",
  title: "Adding a New Lead",
  subtitle: "Create and record a new potential client in the system",
  description: "Follow these steps to capture a potential client",
  estimatedTime: "2 min",
  totalSteps: 5,
  steps: [
    {
      number: 1,
      title: "Log in to the OctoGenie Portal",
      description: "Access the portal at partner.octogenie.com using your credentials.",
      image: "",
      imageAlt: "Login screen",
    },
    {
      number: 2,
      title: "Navigate to Leads Section",
      description: "From the left-side menu, click on Leads. The Leads Dashboard will open showing All Leads.",
      image: "/leads/sidebar-leads.png",
      imageAlt: "Leads menu item",
    },
    {
      number: 3,
      title: "Click New Lead Button",
      description: "On the top-right corner of the Leads page, locate and click the + New Lead button.",
      image: "/leads/new-lead-button.png",
      imageAlt: "+ New Lead",
    },
    {
      number: 4,
      title: "Enter Lead Details",
      description: "Fill in the required information in the form:",
      image: "/leads/lead-form.png",
      imageAlt: "Lead form",
      tips: [
        "Lead Name",
        "Contact Details (phone/email)",
        "Practice Area (type of service required)",
        "Source (how the lead found you)",
        "Status (New, Contacted, Qualified, etc.)",
      ],
    },
    {
      number: 5,
      title: "Save the Lead",
      description: "After entering all details, click 'Create Lead' to save the new lead to your system.",
      image: "",
      imageAlt: "Create Lead",
      expectedOutcome: "The new lead is successfully added and ready for status tracking, follow-ups, and conversion to client.",
      isLast: true,
    },
  ],
};

export const searchFilterGuide: GuideSection = {
  id: "search-filter",
  title: "Searching & Filtering",
  subtitle: "Quickly find specific leads in your pipeline",
  description: "Find leads quickly with powerful filters",
  estimatedTime: "1 min",
  totalSteps: 4,
  steps: [
    {
      number: 1,
      title: "Access Search & Filter",
      description: "On the All Leads page, locate the Search bar and Filter dropdowns at the top of the leads list.",
      image: "/leads/all-leads-list.png",
      imageAlt: "Leads list with filters",
    },
    {
      number: 2,
      title: "Using Search",
      description: "Type the Lead Name or Contact details (phone/email) in the search bar. The system will display matching leads instantly.",
      image: "",
      imageAlt: "Search field",
    },
    {
      number: 3,
      title: "Using Status Filter",
      description: "Click the 'All Status' dropdown and select a specific status (New, Contacted, Qualified, Converted) to filter leads.",
      image: "",
      imageAlt: "Status filter",
    },
    {
      number: 4,
      title: "Using Source Filter",
      description: "Click the 'All Sources' dropdown and select a source (Website, Referral, Advertisement, etc.) to filter leads by origin.",
      image: "",
      imageAlt: "Source filter",
      tips: [
        "Combine search with filters for more precise results.",
        "For example, search for a name and filter by 'Qualified' status to find hot leads.",
      ],
      isLast: true,
    },
  ],
};

export const convertToClientGuide: GuideSection = {
  id: "convert",
  title: "Convert Lead to Client",
  subtitle: "Turn qualified leads into official clients",
  description: "Complete the journey from lead to paying client",
  estimatedTime: "3 min",
  totalSteps: 5,
  steps: [
    {
      number: 1,
      title: "Open Lead Details",
      description: "Click on the lead you want to convert to view their complete details.",
      image: "",
      imageAlt: "Lead row",
    },
    {
      number: 2,
      title: "Review Information",
      description: "Verify all lead information is accurate and complete before conversion.",
      image: "",
      imageAlt: "Lead details",
    },
    {
      number: 3,
      title: "Action buttons",
      description: "Review the available actions for this lead.",
      image: "",
      imageAlt: "Actions",
    },
    {
      number: 4,
      title: "Click Convert to Client",
      description: "Click the 'Convert to Client' action button to begin the conversion process.",
      image: "",
      imageAlt: "Convert to Client",
    },
    {
      number: 5,
      title: "Confirm Conversion",
      description: "Click 'Confirm' to complete the conversion. The lead will now appear in your Clients section.",
      image: "",
      imageAlt: "Confirm",
      expectedOutcome: "After conversion, you can create Matters and Cases for the new client and begin your legal work.",
      isLast: true,
    },
  ],
};
