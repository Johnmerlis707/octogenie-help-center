import { GuideSection } from "@/lib/types";


export const addExpenseGuide: GuideSection = {
  id: "add-expense",
  title: "Adding an Expense",
  subtitle: "Record billable or non-billable expenses",
  description: "Follow these steps to add an expense",
  estimatedTime: "3 min",
  totalSteps: 5,
  steps: [
    {
      number: 1,
      title: "Navigate to Expenses",
      description: "From the left-hand menu, click on Expenses. The Expenses dashboard will open showing: Total Expenses, Billable Expenses, Pending Approvals.",
      image: "/assets/expenses/expenses-navigation.png",
      imageAlt: "Expenses navigation",
    },
    {
      number: 2,
      title: "Click Add Expense",
      description: "On the top-right corner of the page, click + Add Expense.",
      image: "/assets/expenses/add-expense-button.png",
      imageAlt: "Add Expense button",
    },
    {
      number: 3,
      title: "Enter Expense Details",
      description: "In the Add Expense form, fill in the required fields:",
      image: "/assets/expenses/expense-details-form.png",
      imageAlt: "Expense form",
      tips: [
        "Expense Date – Select the date of the expense",
        "Category – Choose the expense type (Travel, Filing, Internet, Telephone, etc.)",
        "Case/Matter – Select the relevant case or matter (if applicable)",
        "Amount – Enter the expense amount",
        "Client Details - Select the Client",
        "Billable – Mark whether the expense is billable or non-billable",
        "Description/Notes – Add any supporting details",
        "Upload Documents - Upload the supporting documents",
      ],
    },
    {
      number: 4,
      title: "Upload Supporting Documents (Optional)",
      description: "Attach receipts or supporting files, if required, for approval or records.",
      imageAlt: "Document upload",
    },
    {
      number: 5,
      title: "Save the Expense",
      description: "Click Save / Submit. The expense will be added successfully and appear in the Expense List.",
      imageAlt: "Save button",
      expectedOutcome: "Expense is successfully recorded and can be tracked, approved, and billed to clients if marked as billable.",
      isLast: true,
    },
  ],
};

export const linkExpenseToCaseGuide: GuideSection = {
  id: "link-case",
  title: "Linking Expense to Case",
  subtitle: "Associate expenses with cases or matters",
  description: "Link expenses to specific cases for better tracking",
  estimatedTime: "1 min",
  totalSteps: 3,
  steps: [
    {
      number: 1,
      title: "Open Expense Form",
      description: "When adding or editing an expense, locate the Case/Matter field.",
      image: "/assets/expenses/expense-details-form.png",
      imageAlt: "Expense form",
    },
    {
      number: 2,
      title: "Select Case or Matter",
      description: "From the Case/Matter dropdown, select the relevant case or matter.",
      imageAlt: "Case/Matter dropdown",
    },
    {
      number: 3,
      title: "Save Changes",
      description: "Save the expense. It will now be linked to the selected case or matter.",
      imageAlt: "Save button",
      expectedOutcome: "Expense is successfully linked to the case or matter and will appear in the case's expense list.",
      isLast: true,
    },
  ],
};
