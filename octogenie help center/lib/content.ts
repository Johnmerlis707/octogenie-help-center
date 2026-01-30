import { WorkflowStep, ModuleGuide, QuickAction, NavItem } from "./types";


export const workflowSteps: WorkflowStep[] = [
  {
    number: 1,
    title: "Lead",
    description: "Capture potential clients who show interest in your legal services",
    color: "blue-light",
    icon: "Users",
    preview: "Learn how to add new leads, track potential clients, use search and filters, and convert qualified leads into clients.",
    href: "/leads",
  },
  {
    number: 2,
    title: "Client",
    description: "Convert qualified leads into official clients with complete profiles",
    color: "purple-light",
    icon: "Users",
    preview: "Discover how to create complete client profiles, edit client details, upload documents, and link clients to matters and cases.",
    href: "/clients",
  },
  {
    number: 3,
    title: "Matter",
    description: "Organize legal work into structured matters with parties and documents",
    color: "purple-light",
    icon: "Briefcase",
    preview: "Master creating matters, adding parties and contacts, setting assignments and status, attaching documents, and using bulk upload and export.",
    href: "/matters",
  },
  {
    number: 4,
    title: "Case",
    description: "Track court cases from filing to resolution with full case management",
    color: "green-light",
    icon: "Scale",
    preview: "Learn to create cases manually or from eCourts, edit case details, assign advocates, upload documents, and close completed cases.",
    href: "/cases",
  },
  {
    number: 5,
    title: "Hearing",
    description: "Schedule hearings, set reminders, and sync with your calendar",
    color: "teal-light",
    icon: "Calendar",
    preview: "Understand how to add hearings, link them to matters and cases, view upcoming hearings, reschedule, set reminders, and sync with Google Calendar.",
    href: "/calendar",
  },
  {
    number: 6,
    title: "Invoice",
    description: "Generate professional invoices and track billing for your services",
    color: "orange-light",
    icon: "DollarSign",
    preview: "Create professional invoices, link them to matters or cases, send them to clients, and track invoice status from draft to paid.",
    href: "/invoices",
  },
  {
    number: 7,
    title: "Payment",
    description: "Record payments, track collections, and manage your finances",
    color: "green-light",
    icon: "CreditCard",
    preview: "Record client payments against invoices, track pending and completed collections, and review payment history by status.",
    href: "/payments",
  },
];

export const moduleGuides: ModuleGuide[] = [
  {
    id: "leads",
    title: "Leads",
    description: "Manage potential clients",
    icon: "Users",
    href: "/leads",
  },
  {
    id: "clients",
    title: "Clients",
    description: "Client information",
    icon: "Users",
    href: "/clients",
  },
  {
    id: "matters",
    title: "Matters",
    description: "Track legal matters",
    icon: "Briefcase",
    href: "/matters",
  },
  {
    id: "cases",
    title: "Cases",
    description: "Manage court cases",
    icon: "Scale",
    href: "/cases",
  },
  {
    id: "calendar",
    title: "Calendar",
    description: "Schedule hearings",
    icon: "Calendar",
    href: "/calendar",
  },
  {
    id: "documents",
    title: "Documents",
    description: "Store legal files",
    icon: "FileText",
    href: "/documents",
  },
  {
    id: "ai-assistant",
    title: "AI Assistant",
    description: "Draft & analyze",
    icon: "Bot",
    href: "/ai-assistant",
  },
  {
    id: "invoices",
    title: "Invoices",
    description: "Bill clients",
    icon: "DollarSign",
    href: "/invoices",
  },
  {
    id: "payments",
    title: "Payments",
    description: "Track collections",
    icon: "CreditCard",
    href: "/payments",
  },
  {
    id: "expenses",
    title: "Expenses",
    description: "Record costs",
    icon: "Wallet",
    href: "/expenses",
  },
  {
    id: "settings",
    title: "Settings",
    description: "Configure system",
    icon: "Settings",
    href: "/settings",
  },
  {
    id: "faqs",
    title: "FAQs",
    description: "Get answers",
    icon: "HelpCircle",
    href: "/faqs",
  },
];

export const quickActions: QuickAction[] = [
  {
    title: "Add a Lead",
    icon: "Users",
    href: "/leads#add-lead",
  },
  {
    title: "Create a Matter",
    icon: "Briefcase",
    href: "/matters#create-matter",
  },
  {
    title: "Create a Case",
    icon: "Scale",
    href: "/cases#create-case",
  },
  {
    title: "Schedule Hearing",
    icon: "Calendar",
    href: "/calendar#add-hearing",
  },
  {
    title: "Generate Invoice",
    icon: "DollarSign",
    href: "/invoices#create-invoice",
  },
];




export const navigation: NavItem[] = [
  { title: "Home", href: "/", icon: "Home" },
  { title: "Getting Started", href: "/getting-started", icon: "Rocket" },
  {
    title: "Leads",
    href: "/leads",
    icon: "Users",
    children: [
      { title: "Add a Lead", href: "/leads#add-lead" },
      { title: "Search & Filter", href: "/leads#search-filter" },
      { title: "Convert to Client", href: "/leads#convert" },
    ],
  },
  {
    title: "Clients",
    href: "/clients",
    icon: "Users",
    children: [
      { title: "Add a Client", href: "/clients#add-client" },
      { title: "Edit Client", href: "/clients#edit-client" },
      { title: "Upload Documents", href: "/clients#upload-documents" },
    ],
  },
  {
    title: "Matters",
    href: "/matters",
    icon: "Briefcase",
    children: [
      { title: "Create Matter", href: "/matters#create-matter" },
      { title: "Parties & Contacts", href: "/matters#parties" },
      { title: "Bulk Upload", href: "/matters#bulk-upload" },
      { title: "Export to Excel", href: "/matters#export" },
    ],
  },
  {
    title: "Cases",
    href: "/cases",
    icon: "Scale",
    children: [
      { title: "Manual Entry", href: "/cases#manual-entry" },
      { title: "From eCourt", href: "/cases#ecourt" },
      { title: "Close a Case", href: "/cases#close-case" },
    ],
  },
  {
    title: "Calendar",
    href: "/calendar",
    icon: "Calendar",
    children: [
      { title: "Add Hearing", href: "/calendar#add-hearing" },
      { title: "View Hearings", href: "/calendar#view-hearings" },
      { title: "Reschedule", href: "/calendar#reschedule" },
      { title: "Reminders", href: "/calendar#reminders" },
    ],
  },
  { title: "Documents", href: "/documents", icon: "FileText" },
  {
    title: "AI Assistant",
    href: "/ai-assistant",
    icon: "Bot",
    children: [
      { title: "Q&A", href: "/ai-assistant#qa" },
      { title: "Draft Documents", href: "/ai-assistant#draft" },
      { title: "Analyze", href: "/ai-assistant#analyze" },
    ],
  },
  {
    title: "Invoices",
    href: "/invoices",
    icon: "DollarSign",
    children: [
      { title: "Create Invoice", href: "/invoices#create-invoice" },
      { title: "Track Status", href: "/invoices#track-status" },
    ],
  },
  {
    title: "Payments",
    href: "/payments",
    icon: "CreditCard",
    children: [
      { title: "Record Payment", href: "/payments#record-payment" },
      { title: "Filter Payments", href: "/payments#filter-payments" },
    ],
  },
  {
    title: "Expenses",
    href: "/expenses",
    icon: "Wallet",
    children: [
      { title: "Add Expense", href: "/expenses#add-expense" },
      { title: "Link to Case", href: "/expenses#link-case" },
    ],
  },
  { title: "Settings", href: "/settings", icon: "Settings" },
  { title: "FAQs", href: "/faqs", icon: "HelpCircle" },
];
