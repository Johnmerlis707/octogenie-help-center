import { GuideSection } from "@/lib/types";

export const addExpenseGuide: GuideSection = {
  id: "add-expense",
  title: "Recording a New Expense",
  subtitle: "Record billable or non-billable expenses",
  description: "Record, track, review, and bill expenses related to cases or matters. This ensures better financial control, accurate client billing, and smooth approval workflows throughout the firm.",
  estimatedTime: "5 min",
  totalSteps: 5,
  steps: [
    {
      number: 1,
      title: "Navigate to Expenses",
      description: "From the left-hand menu, click on Expenses. The Expenses dashboard will open showing Total Expenses, Billable Expenses, and Pending Approvals.",
      image: "/assets/expenses/Expenses%20-%20Option%20in%20the%20left%20Menu.png",
      imageAlt: "Expenses dashboard navigation",
    },
    {
      number: 2,
      title: "Click on Add Expense",
      description: "On the top-right corner of the page, click the '+ Add Expense' button.",
      image: "/assets/expenses/Expenses%20-%20Add%20Expense.png",
      imageAlt: "Add Expense button",
    },
    {
      number: 3,
      title: "Enter Expense Details",
      description: "Fill in the required fields: Expense Date, Category (Travel, Filing, Internet, Telephone, etc.), Case/Matter, Amount, Client Details, and Billable status. Add supporting notes in the Description field.",
      image: "/assets/expenses/Expenses%20details%20updation%20screen.png",
      imageAlt: "Expense entry form",
    },
    {
      number: 4,
      title: "Upload Supporting Documents",
      description: "Attach receipts or supporting files if required for approval or records. This step is optional but recommended for faster approvals.",
      imageAlt: "Document upload section",
    },
    {
      number: 5,
      title: "Save and Submit",
      description: "Click Save / Submit. The expense will appear in the Expense List. If approval is enabled, it will show as 'Pending Approval' until reviewed.",
      image: "/assets/expenses/Expenses%20-%20Dashboard.png",
      imageAlt: "Submit button",
      expectedOutcome: "The expense is successfully recorded and visible under My Expense or Team Expense.",
      isLast: true,
    },
  ],
};

export const linkExpenseToCaseGuide: GuideSection = {
  id: "link-case",
  title: "Linking Expenses to a Case/Matter",
  subtitle: "Associate costs with specific legal work",
  description: "Ensure expenses are correctly attributed to cases for transparent billing and financial reporting.",
  estimatedTime: "2 min",
  totalSteps: 4,
  steps: [
    {
      number: 1,
      title: "Access Add Expense",
      description: "Go to Expenses and click Add Expense to open the submission form.",
      image: "/assets/expenses/Expenses%20-%20Add%20Expense.png",
      imageAlt: "Link expense form",
    },
    {
      number: 2,
      title: "Select Client",
      description: "Select the Client under the Client Details section of the form.",
      image: "/assets/expenses/Expenses%20details%20updation%20screen.png",
      imageAlt: "Client selection",
    },
    {
      number: 3,
      title: "Choose Case or Matter",
      description: "In the 'Select Type' field, choose either 'Case' or 'Matter'. Then, select the specific record from the dropdown.",
      imageAlt: "Case/Matter selection",
    },
    {
      number: 4,
      title: "Complete Submission",
      description: "Fill in the remaining fields and click 'Submit Expense'.",
      imageAlt: "Submit expense button",
      expectedOutcome: "The expense is successfully linked to the selected case or matter.",
      isLast: true,
    },
  ],
};

export const filterExpensesByStatusGuide: GuideSection = {
  id: "filter-status",
  title: "Viewing Expenses by Status",
  subtitle: "Track approvals and reimbursements",
  description: "Easily track and manage expenses by filtering them based on their current lifecycle stage.",
  estimatedTime: "2 min",
  totalSteps: 4,
  steps: [
    {
      number: 1,
      title: "Select Expense Type",
      description: "On the Expenses module, choose 'My Expense' to view your own entries or 'Team Expense' to view team-wide expenses.",
      image: "/assets/expenses/Expenses%20-%20Dashboard.png",
      imageAlt: "Expense tabs",
    },
    {
      number: 2,
      title: "Locate Status Filter",
      description: "On the Expense List section, find the 'Status' dropdown near the search bar (defaulted to 'All').",
      imageAlt: "Status filter location",
    },
    {
      number: 3,
      title: "Choose Required Status",
      description: "Click the dropdown and select the desired status: All, Pending, Approved, Rejected, Paid, Reimbursed, or Cancelled.",
      image: "/assets/expenses/Expenses%20-%20Filter%20option%20for%20status.png",
      imageAlt: "Status dropdown options",
    },
    {
      number: 4,
      title: "Review Results",
      description: "The expense list will automatically update to display only those entries matching your selected status.",
      imageAlt: "Filtered expense list",
      expectedOutcome: "Quickly identify outstanding expenses and manage approval workflows.",
      isLast: true,
    },
  ],
};
