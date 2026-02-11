import { GuideSection } from "@/lib/types";

export const addLeadGuide: GuideSection = {
  id: "add-lead",
  title: "Adding a New Lead",
  subtitle: "Capture potential client interest",
  description: "Create and record a new potential client (lead) in the system for tracking and follow-up.",
  estimatedTime: "3 min",
  totalSteps: 5,
  steps: [
    {
      number: 1,
      title: "Login",
      description: "Log in to the OctoGenie Portal using your credentials.",
    },
    {
      number: 2,
      title: "Go to Leads Section",
      description: "From the left-side menu, click on Leads. The Leads Dashboard will open showing All Leads.",
      image: "/assets/leads/Leads%20-%20Option%20in%20the%20left%20menu.png",
      imageAlt: "Leads navigation",
    },
    {
      number: 3,
      title: "Click New Lead",
      description: "On the top-right corner, click + New Lead button.",
      image: "/assets/leads/Leads%20-%20New%20Lead.png",
      imageAlt: "Add New Lead button",
    },
    {
      number: 4,
      title: "Enter Lead Details",
      description: "Fill in the required information: Lead Name, Contact Details (phone/email), Practice Area (type of service required), Source (where the lead came from), Estimated Value, and Assign To.",
      image: "/assets/leads/Leads%20-%20New%20Lead%20details.png",
      imageAlt: "Lead entry form",
    },
    {
      number: 5,
      title: "Save the Lead",
      description: "After entering all details, click 'Create Lead'.",
      imageAlt: "Create Lead button",
      expectedOutcome: "The new lead is successfully recorded and ready for status tracking, follow-ups, and conversion to client.",
      isLast: true,
    },
  ],
};

export const searchFilterGuide: GuideSection = {
  id: "search-filter",
  title: "Searching and Filtering Leads",
  subtitle: "Manage your pipeline efficiently",
  description: "Quickly find specific leads based on name, status, or source.",
  estimatedTime: "2 min",
  totalSteps: 3,
  steps: [
    {
      number: 1,
      title: "Access Search & Filter",
      description: "On the All Leads page, the Search bar and Filter dropdowns are available at the top of the list.",
      imageAlt: "Search and filter bars",
    },
    {
      number: 2,
      title: "Using the Search Option",
      description: "Locate the Search leads… bar and type Lead Name or Contact details. Matching leads display instantly.",
      image: "/assets/leads/Leads%20-%20All%20Leads%20Section.png",
      imageAlt: "Search results",
    },
    {
      number: 3,
      title: "Using the Filter Options",
      description: "Use the 'All Status' dropdown to select lead stages (e.g., New, In Progress) or 'All Sources' dropdown (e.g., Website, Referral). You can combine Search and Filters.",
      imageAlt: "Filter options",
      expectedOutcome: "Locate leads quickly, track progress stages, and analyze sources with ease.",
      isLast: true,
    },
  ],
};

export const convertToClientGuide: GuideSection = {
  id: "convert",
  title: "Converting Lead to Client",
  subtitle: "Seamlessly transition qualified prospects",
  description: "Learn how to turn qualified leads into official clients.",
  estimatedTime: "2 min",
  totalSteps: 2,
  steps: [
    {
      number: 1,
      title: "Open Lead Profile",
      description: "Click on the lead you wish to convert from the All Leads list.",
      imageAlt: "Lead details",
    },
    {
      number: 2,
      title: "Convert to Client",
      description: "Leads can be converted into clients by connecting with them and clicking the conversion option. This migrates relevant data to the Clients module.",
      imageAlt: "Conversion button",
      expectedOutcome: "The lead is successfully converted into a client profile.",
      isLast: true,
    },
  ],
};
