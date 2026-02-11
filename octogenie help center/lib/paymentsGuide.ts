import { GuideSection } from "@/lib/types";

export const recordPaymentGuide: GuideSection = {
  id: "record-payment",
  title: "Recording a Client Payment",
  subtitle: "Keep your collections tracked",
  description: "Track all client payments in one place, including completed, pending, and processing transactions. The payments dashboard provides real-time visibility into collections and cash flow.",
  estimatedTime: "5 min",
  totalSteps: 5,
  steps: [
    {
      number: 1,
      title: "Navigate to Payments",
      description: "Log in to the OctoGenie Partner Portal. From the left-hand menu, click on Payments to open the payments dashboard.",
      image: "/assets/payments/Payments%20-Option%20in%20the%20left%20menu.png",
      imageAlt: "Payments navigation",
    },
    {
      number: 2,
      title: "Click on Record Payment",
      description: "On the top-right corner of the Payments page, click the 'Record Payment' button.",
      image: "/assets/payments/Payments%20-%20Record%20Payment.png",
      imageAlt: "Record Payment button",
    },
    {
      number: 3,
      title: "Enter Payment Details",
      description: "Fill in the required fields: Client Name, Invoice Number (if applicable), Payment Amount, Payment Method (UPI, Cash, Bank Transfer, etc.), and Payment Date.",
      image: "/assets/payments/Record%20Payment%20-%20Details%20updation%20screen.png",
      imageAlt: "Payment entry form",
    },
    {
      number: 4,
      title: "Save Payment",
      description: "Review all entered details carefully and click on the 'Record Payment' button at the bottom of the form.",
      imageAlt: "Submit payment",
    },
    {
      number: 5,
      title: "Verify in Recent Payments",
      description: "The recorded payment will appear under 'Recent Payments' with details like Payment ID, Client name, Amount, Method, and Status.",
      image: "/assets/payments/Payments%20-%20Recent%20Payments.png",
      imageAlt: "Recent payments verification",
      expectedOutcome: "Payment is successfully recorded, and linked invoices are updated automatically.",
      isLast: true,
    },
  ],
};

export const filterPaymentsGuide: GuideSection = {
  id: "filter-payments",
  title: "Filtering and Searching Payments",
  subtitle: "Review your transaction history",
  description: "Narrow down results to quickly locate specific payment records based on status or search criteria.",
  estimatedTime: "2 min",
  totalSteps: 4,
  steps: [
    {
      number: 1,
      title: "Locate Filter Options",
      description: "On the Payments page, go to the top-right section above the Recent Payments list to find the Search field and Status dropdown.",
      image: "/assets/payments/Payments%20-%20Recent%20Payments.png",
      imageAlt: "Filter section",
    },
    {
      number: 2,
      title: "Filter by Payment Status",
      description: "Click on the Status dropdown and select: 'Completed' for successful payments, or 'Pending / Processing' for payments awaiting confirmation.",
      image: "/assets/payments/Payments%20-%20Filter%20Option.png",
      imageAlt: "Status dropdown",
    },
    {
      number: 3,
      title: "Use Search keyword",
      description: "Use the 'Search payments' field to find specific records using Payment ID, Client name, or Invoice number.",
      imageAlt: "Search payments field",
    },
    {
      number: 4,
      title: "View Filtered Results",
      description: "The list will update automatically to display matching records, ensuring faster access and improved operational efficiency.",
      imageAlt: "Filtered list view",
      expectedOutcome: "Effortlessly manage and monitor your firm's cash flow history.",
      isLast: true,
    },
  ],
};
