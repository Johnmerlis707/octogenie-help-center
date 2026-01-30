import { GuideSection } from "@/lib/types";


export const createInvoiceGuide: GuideSection = {
  id: "create-invoice",
  title: "Creating a New Invoice",
  subtitle: "Generate invoices for clients",
  description: "Follow these steps to create and send an invoice",
  estimatedTime: "5 min",
  totalSteps: 6,
  steps: [
    {
      number: 1,
      title: "Navigate to Invoices Section",
      description: "From the left-hand menu, click on Invoices. The Invoices dashboard will open, displaying all existing invoices and summary details.",
      image: "/invoices/sidebar-invoices.png",
      imageAlt: "Invoices navigation",
    },
    {
      number: 2,
      title: "Click Create Invoice",
      description: "On the top-right corner of the Invoices page, click the Create Invoice button.",
      image: "/invoices/create-invoice-button.png",
      imageAlt: "Create Invoice button",
    },
    {
      number: 3,
      title: "Enter Invoice Details",
      description: "Fill in the required information:",
      image: "/invoices/invoice-form.png",
      imageAlt: "Invoice form",
      tips: [
        "Select the Client for whom the invoice is being created",
        "Link the invoice to a Case/Matter if applicable",
        "Enter Invoice Amount",
        "Set Due Date",
        "Add line items and descriptions",
        "Add any additional notes or terms",
      ],
    },
    {
      number: 4,
      title: "Review Invoice Details",
      description: "Review all entered information to ensure accuracy.",
      image: "",
      imageAlt: "Invoice review",
    },
    {
      number: 5,
      title: "Save Invoice",
      description: "Click Save or Create Invoice to save the invoice.",
      image: "",
      imageAlt: "Save button",
    },
    {
      number: 6,
      title: "Send Invoice (Optional)",
      description: "After creating, you can send the invoice to the client via email or download it as PDF.",
      image: "",
      imageAlt: "Send invoice",
      expectedOutcome: "Invoice is successfully created and can be tracked for payment status.",
      isLast: true,
    },
  ],
};

export const trackInvoiceStatusGuide: GuideSection = {
  id: "track-status",
  title: "Tracking Invoice Status",
  subtitle: "Monitor invoice payment status",
  description: "View and track invoice status",
  estimatedTime: "1 min",
  totalSteps: 3,
  steps: [
    {
      number: 1,
      title: "Go to Invoices Section",
      description: "Navigate to the Invoices section from the left-hand menu.",
      image: "/invoices/sidebar-invoices.png",
      imageAlt: "Invoices section",
    },
    {
      number: 2,
      title: "View Invoice List",
      description: "View all invoices with their status: Sent, Partially Paid, Paid, Overdue.",
      image: "/invoices/invoice-list.png",
      imageAlt: "Invoice list",
    },
    {
      number: 3,
      title: "Filter by Status",
      description: "Use the filter options to view invoices by specific status or search for a particular invoice.",
      image: "/invoices/search-invoice.png",
      imageAlt: "Status filter",
      expectedOutcome: "You can easily track all invoices and their payment status.",
      isLast: true,
    },
  ],
};
