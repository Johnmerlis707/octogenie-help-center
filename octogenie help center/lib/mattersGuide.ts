import { GuideSection } from "@/lib/types";


export const createMatterGuide: GuideSection = {
  id: "create-matter",
  title: "Creating a New Matter",
  subtitle: "Organize legal work into structured matters",
  description: "Follow these steps to create a new matter",
  estimatedTime: "5 min",
  totalSteps: 7,
  steps: [
    {
      number: 1,
      title: "Log in to OctoGenie",
      description: "Log in to your OctoGenie account at partner.octogenie.com",
      imageAlt: "Login screen",
    },
    {
      number: 2,
      title: "Navigate to Matters",
      description: "From the left-hand menu, click on Matters.",
      image: "/assets/matters/matters-navigation.png",
      imageAlt: "Matters navigation",
    },
    {
      number: 3,
      title: "Click Add New Matter",
      description: "On the top-right side of the page, click the 'Add New Matter' button. This will open the 'Create New Matter' form.",
      image: "/assets/matters/add-new-matter.png",
      imageAlt: "Add New Matter button",
    },
    {
      number: 4,
      title: "Enter Matter Details",
      description: "On the Create New Matter form, click on 'Matter Details' to provide the basic information about the matter.",
      image: "/assets/matters/matter-details.png",
      imageAlt: "Matter details form",
    },
    {
      number: 5,
      title: "Add Parties & Contacts",
      description: "Click on the 'Parties & Contacts' button in the Create New Matter form to add the parties involved and their contact details.",
      imageAlt: "Parties & Contacts section",
    },
    {
      number: 6,
      title: "Set Assignment & Status",
      description: "Set the assignment, status, and additional matter details by clicking on the 'Assignment & Status' section in the Create New Matter form.",
      image: "/assets/matters/assignment-status.png",
      imageAlt: "Assignment & Status section",
    },
    {
      number: 7,
      title: "Upload Documents and Create",
      description: "Click on the 'Relevant Documents' section in the Create New Matter form to upload files related to this matter and then click on the 'Create Matter' button at the right bottom.",
      image: "/assets/matters/create-matter-button.png",
      imageAlt: "Create Matter button",
      expectedOutcome: "The matter is successfully created and appears in your Matters list.",
      isLast: true,
    },
  ],
};

export const linkClientToMatterGuide: GuideSection = {
  id: "parties",
  title: "Linking Client to Matter",
  subtitle: "Associate a client with a matter",
  description: "Connect clients to matters for better organization",
  estimatedTime: "2 min",
  totalSteps: 4,
  steps: [
    {
      number: 1,
      title: "Go to Matters Section",
      description: "Go to the Matter section from the main menu.",
      imageAlt: "Matters section",
    },
    {
      number: 2,
      title: "Open Matter",
      description: "Open the matter to which you want to add a client.",
      image: "/assets/matters/edit-matter.png",
      imageAlt: "Matter list",
    },
    {
      number: 3,
      title: "Click Assignment & Status",
      description: "Click on Assignment & Status tab.",
      image: "/assets/matters/assignment-status.png",
      imageAlt: "Assignment & Status tab",
    },
    {
      number: 4,
      title: "Select Client",
      description: "From the Add Client field, select the required client from the list.",
      imageAlt: "Client selection dropdown",
      expectedOutcome: "The client is successfully linked to the matter.",
      isLast: true,
    },
  ],
};

export const updateMatterStatusGuide: GuideSection = {
  id: "update-status",
  title: "Updating Matter Status",
  subtitle: "Change the status of a matter",
  description: "Update matter status to track progress",
  estimatedTime: "1 min",
  totalSteps: 4,
  steps: [
    {
      number: 1,
      title: "Go to Matters Section",
      description: "Go to the Matter section from the main menu.",
      imageAlt: "Matters section",
    },
    {
      number: 2,
      title: "Open Matter",
      description: "Open the matter for which you want to update the status.",
      image: "/assets/matters/edit-matter.png",
      imageAlt: "Matter details",
    },
    {
      number: 3,
      title: "Click Assignment & Status",
      description: "Click on Assignment & Status tab.",
      image: "/assets/matters/assignment-status.png",
      imageAlt: "Assignment & Status tab",
    },
    {
      number: 4,
      title: "Update Status",
      description: "Update the status from the status field dropdown.",
      image: "/assets/matters/assignment-status.png",
      imageAlt: "Status dropdown",
      expectedOutcome: "Matter status is successfully updated.",
      isLast: true,
    },
  ],
};
