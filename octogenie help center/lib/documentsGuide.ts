import { GuideSection } from "@/lib/types";


export const uploadDocumentsGuide: GuideSection = {
  id: "upload-documents",
  title: "Uploading Documents",
  subtitle: "Add documents to the system",
  description: "Follow these steps to upload documents",
  estimatedTime: "3 min",
  totalSteps: 6,
  steps: [
    {
      number: 1,
      title: "Navigate to Documents Section",
      description: "Navigate to the Documents section from the left-side menu, or access documents from within a specific Case or Matter.",
      image: "",
      imageAlt: "Documents navigation",
    },
    {
      number: 2,
      title: "Click Upload Document",
      description: "Click on the 'Upload Document' or 'Add Document' button.",
      image: "",
      imageAlt: "Upload Document button",
    },
    {
      number: 3,
      title: "Select File",
      description: "Select the file from your device, or drag and drop the file into the upload area.",
      image: "",
      imageAlt: "File selection",
    },
    {
      number: 4,
      title: "Add Document Details",
      description: "Add document details such as title, description, and category (if applicable).",
      image: "",
      imageAlt: "Document details form",
    },
    {
      number: 5,
      title: "Link to Case/Matter/Client",
      description: "Link the document to a specific Case, Matter, or Client (if applicable).",
      image: "",
      imageAlt: "Link selection",
    },
    {
      number: 6,
      title: "Complete Upload",
      description: "Click 'Upload' or 'Save' to complete the upload.",
      image: "",
      imageAlt: "Save button",
      expectedOutcome: "The document is successfully uploaded and stored in the system, accessible from the Documents module or the linked Case/Matter.",
      isLast: true,
    },
  ],
};

export const linkDocumentsGuide: GuideSection = {
  id: "link-documents",
  title: "Linking Documents to Matters and Cases",
  subtitle: "Associate documents with cases and matters",
  description: "Organize documents by linking them to relevant cases and matters",
  estimatedTime: "2 min",
  totalSteps: 4,
  steps: [
    {
      number: 1,
      title: "Select Document During Upload",
      description: "When uploading a document, you can select the Case or Matter from the dropdown menu during the upload process.",
      image: "",
      imageAlt: "Link selection during upload",
    },
    {
      number: 2,
      title: "Edit Existing Document",
      description: "Alternatively, open an existing document and click 'Edit' to add or change the linked Case or Matter.",
      image: "",
      imageAlt: "Edit document",
    },
    {
      number: 3,
      title: "Link to Multiple Cases/Matters",
      description: "You can link a single document to multiple Cases or Matters if needed.",
      image: "",
      imageAlt: "Multiple links",
    },
    {
      number: 4,
      title: "Save Changes",
      description: "Save the changes. The document will now appear in the Documents tab of the linked Case or Matter.",
      image: "",
      imageAlt: "Save button",
      tips: [
        "Always link documents to the relevant Case or Matter during upload to maintain proper organization and easy retrieval.",
      ],
      expectedOutcome: "Document is successfully linked and appears in the Documents tab of the linked Case or Matter.",
      isLast: true,
    },
  ],
};
