import { GuideSection } from "@/lib/types";

export const createInvoiceGuide: GuideSection = {
  id: "create-invoice",
  title: "Creating a New Invoice",
  subtitle: "Bill clients for your legal services",
  description: "Create, manage, track, and monitor all client invoices in one centralized place. Maintain complete visibility over billing, payment status, and outstanding amounts.",
  estimatedTime: "5 min",
  totalSteps: 6,
  steps: [
    {
      number: 1,
      title: "Navigate to Invoices",
      description: "From the left-hand menu, click on Invoices. The Invoices dashboard will open, displaying summary details like Total Invoiced, Paid, Pending, and Overdue amounts.",
      image: "/assets/invoices/Invoices%20-%20Option%20in%20the%20left%20menu.png",
      imageAlt: "Invoices dashboard navigation",
    },
    {
      number: 2,
      title: "Click on Create Invoice",
      description: "On the top-right corner of the Invoices page, click the 'Create Invoice' button.",
      image: "/assets/invoices/Invoices%20-%20Create%20Invoice.png",
      imageAlt: "Create Invoice button",
    },
    {
      number: 3,
      title: "Enter Invoice Details",
      description: "Select the Client for whom the invoice is being created. Link the invoice to a Case/Matter if applicable. Enter the Invoice Date and Due Date.",
      image: "/assets/invoices/Invoices%20-%20Enter%20Invoice%20details%20screen.png",
      imageAlt: "Invoice header details",
    },
    {
      number: 4,
      title: "Add Service Items",
      description: "Add the Invoice Amount and service details as required in the line items section. You can specify rates and quantities for each item.",
      imageAlt: "Invoice line items",
    },
    {
      number: 5,
      title: "Review Information",
      description: "Verify all entered details such as client, amount, and due date to ensure accuracy before generation.",
      imageAlt: "Reviewing invoice",
    },
    {
      number: 6,
      title: "Generate and Send",
      description: "Click on 'Create Invoice' located on the right bottom. The invoice will be recorded with a status of 'Sent'.",
      image: "/assets/invoices/Invoices%20-%20All%20Invoices.png",
      imageAlt: "Finalize invoice creation",
      expectedOutcome: "The invoice is successfully created, available for tracking, and sent to the client records.",
      isLast: true,
    },
  ],
};

export const trackInvoiceStatusGuide: GuideSection = {
  id: "track-status",
  title: "Tracking and Managing Invoices",
  subtitle: "Monitor your high-level billing performance",
  description: "Maintain complete visibility over billing, payment status, and outstanding amounts for all legal matters.",
  estimatedTime: "2 min",
  totalSteps: 3,
  steps: [
    {
      number: 1,
      title: "View Invoice Summary",
      description: "Get a quick overview of Total Invoiced amount, Paid amount, Pending amount, and Overdue invoices at the top of the dashboard.",
      image: "/assets/invoices/Invoices%20-Dashboard.png",
      imageAlt: "Invoice summary cards",
    },
    {
      number: 2,
      title: "Monitor Invoice Status",
      description: "Track invoices based on their current status: Sent, Partially Paid, Paid, or Overdue. This helps in understanding billing performance at a glance.",
      imageAlt: "Invoice status tracking",
    },
    {
      number: 3,
      title: "Review Detailed List",
      description: "Manage all invoices in a single list with details like Invoice number, date, Client name, Linked case/matter, and Amount.",
      image: "/assets/invoices/Invoices%20-%20All%20Invoices.png",
      imageAlt: "All Invoices list",
      expectedOutcome: "Stay informed about your firm's cash flow and follow up on pending payments efficiently.",
      isLast: true,
    },
  ],
};

export const searchAndFilterInvoicesGuide: GuideSection = {
  id: "search-filter",
  title: "Searching and Filtering Invoices",
  subtitle: "Find specific billing records instantly",
  description: "Use the Search and Filter options to manage large volumes of invoices quickly.",
  estimatedTime: "2 min",
  totalSteps: 3,
  steps: [
    {
      number: 1,
      title: "Use Search Invoices",
      description: "Use the Search field to find invoices using Invoice number, Client email, or Case/Matter reference.",
      image: "/assets/invoices/Invoices%20-%20Specific%20invoice%20search.png",
      imageAlt: "Search field highlighted",
    },
    {
      number: 2,
      title: "Filter by Status",
      description: "Click on the status filter dropdown. You can quickly view invoices based on: Draft, Sent, Paid, Overdue, or Partially Paid.",
      image: "/assets/invoices/Payments%20-%20Filter%20Option.png",
      imageAlt: "Status filter dropdown",
    },
    {
      number: 3,
      title: "Take Invoice Actions",
      description: "Use the three-dot menu on any invoice to perform actions such as viewing details, updating status, or recording payments.",
      image: "/assets/invoices/Invoices%20-%20All%20Invoices.png",
      imageAlt: "Actions menu",
      expectedOutcome: "Efficiently locate and manage any invoice record in your system.",
      isLast: true,
    },
  ],
};
