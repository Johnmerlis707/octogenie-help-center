import { GuideSection } from "@/lib/types";


export const recordPaymentGuide: GuideSection = {
  id: "record-payment",
  title: "Recording a Payment",
  subtitle: "Track payments received from clients",
  description: "Follow these steps to record a payment",
  estimatedTime: "3 min",
  totalSteps: 6,
  steps: [
    {
      number: 1,
      title: "Login to the Portal",
      description: "Log in to the OctoGenie Partner Portal.",
      imageAlt: "Login screen",
    },
    {
      number: 2,
      title: "Go to Payments",
      description: "From the left-hand menu, click on Payments.",
      image: "/assets/payments/payments-navigation.png",
      imageAlt: "Payments navigation",
    },
    {
      number: 3,
      title: "Click Record Payment",
      description: "On the top-right corner of the Payments page, click the ₹ Record Payment button.",
      image: "/assets/payments/record-payment-button.png",
      imageAlt: "Record Payment button",
    },
    {
      number: 4,
      title: "Enter Payment Details",
      description: "Fill in the required fields:",
      image: "/assets/payments/payment-details-form.png",
      imageAlt: "Payment form",
      tips: [
        "Client Name",
        "Invoice Number (if applicable)",
        "Payment Amount",
        "Payment Method (UPI, Cash, Bank Transfer, etc.)",
        "Payment Date",
        "Notes/Remarks (optional)",
      ],
    },
    {
      number: 5,
      title: "Confirm the Payment",
      description: "Review all entered details carefully. Click on 'Record Payment' button.",
      imageAlt: "Confirm button",
    },
    {
      number: 6,
      title: "Verify in Recent Payments",
      description: "The recorded payment will appear under Recent Payments with: Payment ID, Client name, Amount, Method, Status.",
      image: "/assets/payments/recent-payments.png",
      imageAlt: "Payment list",
      expectedOutcome: "Payment is successfully recorded and linked to the invoice. Invoice status is updated accordingly.",
      isLast: true,
    },
  ],
};

export const filterPaymentsGuide: GuideSection = {
  id: "filter-payments",
  title: "Filtering Payments",
  subtitle: "Find specific payments using filters",
  description: "Use filters to view payments by status or criteria",
  estimatedTime: "1 min",
  totalSteps: 3,
  steps: [
    {
      number: 1,
      title: "Go to Payments Section",
      description: "Navigate to the Payments section from the left-hand menu.",
      image: "/assets/payments/payments-navigation.png",
      imageAlt: "Payments section",
    },
    {
      number: 2,
      title: "Click Filter",
      description: "Click on the Filter option to open filter criteria.",
      image: "/assets/payments/filter-option.png",
      imageAlt: "Filter button",
    },
    {
      number: 3,
      title: "Select Filter Criteria",
      description: "Select payment status (Completed, Pending, Processing) or other criteria. The payment list will update accordingly.",
      image: "/assets/payments/filter-option.png",
      imageAlt: "Filter options",
      expectedOutcome: "Payments are filtered based on your selected criteria.",
      isLast: true,
    },
  ],
};
