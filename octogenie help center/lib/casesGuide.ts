import { GuideSection } from "@/lib/types";


export const createCaseManualGuide: GuideSection = {
  id: "manual-entry",
  title: "Creating a Case - Manual Entry",
  subtitle: "Manually create and register a new legal case",
  description: "Follow these steps to create a case manually",
  estimatedTime: "5 min",
  totalSteps: 4,
  steps: [
    {
      number: 1,
      title: "Open Cases Module",
      description: "Log in to your OctoGenie account. From the left menu, click Cases.",
      image: "/assets/cases/cases-navigation.png",
      imageAlt: "Cases navigation",
    },
    {
      number: 2,
      title: "Start New Case Creation",
      description: "Click the ➕ Add New Case button (top-right corner). Select Manual Entry from the dropdown.",
      image: "/assets/cases/add-new-case.png",
      imageAlt: "Add New Case button",
    },
    {
      number: 3,
      title: "Select Court Type",
      description: "You will see two options: District Court – for District, State, or Lower Courts, or Supreme Court – for Supreme Court matters. Click the appropriate court type.",
      image: "/assets/cases/select-court-type.png",
      imageAlt: "Court type selection",
    },
    {
      number: 4,
      title: "Enter Case Details and Create",
      description: "Fill in the case information manually, upload documents, assign Assignee & Actions the case, click on the Next button to fill all the required information and then click on 'Create Case' to create a case.",
      image: "/assets/cases/create-case-form.png",
      imageAlt: "Case creation form",
      expectedOutcome: "The case is successfully created and appears in your Cases list.",
      isLast: true,
    },
  ],
};

export const createCaseFromECourtGuide: GuideSection = {
  id: "ecourt",
  title: "Creating a Case - From eCourt",
  subtitle: "Import a case from eCourt database",
  description: "Search and import cases from court records",
  estimatedTime: "3 min",
  totalSteps: 6,
  steps: [
    {
      number: 1,
      title: "Open Cases Module",
      description: "Log in to your OctoGenie account. From the left menu, click Cases.",
      image: "/assets/cases/cases-navigation.png",
      imageAlt: "Cases navigation",
    },
    {
      number: 2,
      title: "Click Add New Case",
      description: "Click the ➕ Add New Case button (top-right corner). Select 'From eCourt' from the dropdown.",
      image: "/assets/cases/add-new-case.png",
      imageAlt: "Add New Case button",
    },
    {
      number: 3,
      title: "Select Court Type",
      description: "Choose between District Court or Supreme Court.",
      image: "/assets/cases/select-court-type.png",
      imageAlt: "Court type selection",
    },
    {
      number: 4,
      title: "Select Location Details",
      description: "Select State, District, and Court Complex from the dropdown menus.",
      image: "/assets/cases/ecourt-search.png",
      imageAlt: "Location selection",
    },
    {
      number: 5,
      title: "Search for Case",
      description: "Enter case details (Case Number, Case Type, Case Year) or search by Advocate Name or CNR Number. Click Search.",
      image: "/assets/cases/ecourt-search.png",
      imageAlt: "Case search form",
    },
    {
      number: 6,
      title: "Import Case",
      description: "Review the search results, select the correct case, and click Import to add it to your Cases list.",
      image: "/assets/cases/ecourt-search.png",
      imageAlt: "Case import",
      expectedOutcome: "The case is successfully imported from eCourt and appears in your Cases list.",
      isLast: true,
    },
  ],
};

export const closeCaseGuide: GuideSection = {
  id: "close-case",
  title: "Closing a Case",
  subtitle: "Mark a case as closed",
  description: "Update case status to closed",
  estimatedTime: "2 min",
  totalSteps: 5,
  steps: [
    {
      number: 1,
      title: "Go to Cases Section",
      description: "Go to the cases section from the main menu.",
      image: "/assets/cases/cases-navigation.png",
      imageAlt: "Cases section",
    },
    {
      number: 2,
      title: "Select Case",
      description: "Go to the specific case you want to close.",
      image: "/assets/cases/view-case.png",
      imageAlt: "Case list",
    },
    {
      number: 3,
      title: "View Case Details",
      description: "Click on View Case to open the case details.",
      image: "/assets/cases/view-case.png",
      imageAlt: "Case details view",
    },
    {
      number: 4,
      title: "Click Edit Button",
      description: "Click the Edit button to enable editing mode.",
      image: "/assets/cases/edit-case.png",
      imageAlt: "Edit button",
    },
    {
      number: 5,
      title: "Update Status to Closed",
      description: "Update the status as 'Closed' from the 'Assignee & Actions' section.",
      image: "/assets/cases/status-update.png",
      imageAlt: "Status dropdown",
      expectedOutcome: "Case status is successfully updated to Closed.",
      isLast: true,
    },
  ],
};
