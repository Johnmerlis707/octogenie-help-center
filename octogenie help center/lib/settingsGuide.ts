import { GuideSection } from "@/lib/types";

export const navigateToSettingsGuide: GuideSection = {
  id: "navigate-settings",
  title: "Accessing Platform Settings",
  subtitle: "Configure your OctoGenie environment",
  description: "The Settings section is the central configuration suite used to manage your account, profile details, security, roles, approvals, and system preferences.",
  estimatedTime: "1 min",
  totalSteps: 5,
  steps: [
    {
      number: 1,
      title: "Login and Dashboard",
      description: "Login to the OctoGenie Partner Portal. Go to the top-right corner of your dashboard.",
      image: "/assets/settings/Settings%20-%20Option%20in%20the%20right%20top.png",
      imageAlt: "User profile menu location",
    },
    {
      number: 2,
      title: "Open Account Menu",
      description: "Click on your Profile / Account icon to see the quick actions dropdown.",
      image: "/assets/settings/settings-page2-img1.png",
      imageAlt: "Profile dropdown",
    },
    {
      number: 3,
      title: "Select Settings",
      description: "From the dropdown menu, select 'Settings'.",
    },
    {
      number: 4,
      title: "Review Options",
      description: "The Settings page will open with options like Account, Security, Users & Roles, Approvals, and more.",
      image: "/assets/settings/settings-page3-img1.png",
      imageAlt: "Settings overview page",
    },
    {
      number: 5,
      title: "Navigate to Sub-sections",
      description: "Use the left-side settings menu to switch between different configuration areas.",
      image: "/assets/settings/settings-page3-img2.png",
      imageAlt: "Settings sidebar",
      expectedOutcome: "You are now in the central configuration suite for your firm.",
      isLast: true,
    },
  ],
};

export const manageUsersGuide: GuideSection = {
  id: "users-roles",
  title: "Managing Users & Roles",
  subtitle: "Control team access and hierarchy",
  description: "Add new team members, manage existing users, and assign appropriate roles.",
  estimatedTime: "3 min",
  totalSteps: 5,
  steps: [
    {
      number: 1,
      title: "Open Users & Roles",
      description: "From the Settings sidebar, click on 'Users & Roles'.",
      image: "/assets/settings/Settings%20-%20Users%20%26%20Roles.png",
      imageAlt: "Users section",
    },
    {
      number: 2,
      title: "Invite New User",
      description: "Click on the 'Invite User' button located at the top-right corner of the page.",
      image: "/assets/settings/settings-page4-img1.png",
      imageAlt: "Invite User button",
    },
    {
      number: 3,
      title: "Enter User Details",
      description: "Fill in the required user details: Full Name, Email ID, Phone, and User Type.",
      image: "/assets/settings/settings-page5-img1.png",
      imageAlt: "Invite User form",
    },
    {
      number: 4,
      title: "Assign Role",
      description: "In the 'Role' dropdown, select the predefined role (e.g., Admin, Default Lawyer) for the new user.",
      image: "/assets/settings/settings-page5-img1.png",
      imageAlt: "Role selection dropdown",
    },
    {
      number: 5,
      title: "Send Invitation",
      description: "Click 'Invite User' to submit. The user will receive access based on the assigned role. Note that users can be searched or filtered later.",
      image: "/assets/settings/Settings%20-%20User%20%26%20Roles%20(Filter%20Option).png",
      imageAlt: "Verifying user in list",
      expectedOutcome: "Team members are successfully added with specific access levels.",
      isLast: true,
    },
  ],
};

export const manageRolesPermissionsGuide: GuideSection = {
  id: "roles-permissions",
  title: "Roles & Permissions",
  subtitle: "Granular access control for your firm",
  description: "Define exactly what each role can view, create, edit, or delete in the platform.",
  estimatedTime: "5 min",
  totalSteps: 6,
  steps: [
    {
      number: 1,
      title: "Access Roles",
      description: "From the main Settings menu, go to 'Roles & Permissions'.",
      image: "/assets/settings/Settings%20-%20Roles%20%26%20Permissions.png",
      imageAlt: "Roles list",
    },
    {
      number: 2,
      title: "Create a New Role",
      description: "Click on '+ New Role' at the top-right. Enter the Role Name and an optional Description.",
      image: "/assets/settings/Settings%20-%20Create%20New%20Role.png",
      imageAlt: "New Role button",
    },
    {
      number: 3,
      title: "Configure Hierarchy",
      description: "Navigate to the role you want to set permissions for in the list. Click 'Configure' under the Actions column.",
      image: "/assets/settings/settings-page7-img1.png",
      imageAlt: "Configure action button",
    },
    {
      number: 4,
      title: "Define Permissions",
      description: "The permissions page will show module-wise options. Select permissions like View, Create, Edit, Delete, or Approve.",
      image: "/assets/settings/settings-page8-img1.png",
      imageAlt: "Permissions checkboxes",
    },
    {
      number: 5,
      title: "Enable/Disable responsibilities",
      description: "Toggle the access levels based on the specific responsibilities of that role.",
      image: "/assets/settings/settings-page9-img1.png",
      imageAlt: "Toggling access",
    },
    {
      number: 6,
      title: "Save Configuration",
      description: "Click 'Save / Update' to apply the changes to all users assigned to this role.",
      image: "/assets/settings/Settings%20-%20Configure%20(Roles%20%26%20Permissions).png",
      imageAlt: "Saving roles",
      expectedOutcome: "Secure and organized platform access tailored to your firm's structure.",
      isLast: true,
    },
  ],
};

export const manageApprovalsGuide: GuideSection = {
  id: "approvals",
  title: "Configuring Approvals",
  subtitle: "Maintain oversight on firm activities",
  description: "Set up approval workflows for critical actions like expenses and invoices.",
  estimatedTime: "3 min",
  totalSteps: 5,
  steps: [
    {
      number: 1,
      title: "Open Approvals",
      description: "Click on 'Approvals' under the Settings section menu.",
      image: "/assets/settings/settings-page10-img1.png",
      imageAlt: "Approvals menu",
    },
    {
      number: 2,
      title: "Select Category",
      description: "Choose the action group you wish to configure (e.g., Expenses Approval).",
      image: "/assets/settings/Settings%20-%20Expenses%20Approval%20flow.png",
      imageAlt: "Choosing category",
    },
    {
      number: 3,
      title: "Choose Approval Mode",
      description: "Select between: 'No Approval' (Auto-approved), 'Single' (One designated approver), or 'Multi-Step' (Multiple approval levels).",
      image: "/assets/settings/settings-page11-img1.png",
      imageAlt: "Approval modes",
    },
    {
      number: 4,
      title: "Save Configuration",
      description: "Click 'Save Configuration' to apply the workflow changes.",
      image: "/assets/settings/settings-page11-img1.png",
      imageAlt: "Submit config button",
    },
    {
      number: 5,
      title: "Outcome",
      description: "All future submissions for that category will now follow the selected approval workflow.",
      image: "/assets/settings/Settings%20-%20Approvals%20option%20in%20the%20left%20menu.png",
      imageAlt: "Active workflow",
      expectedOutcome: "Enhanced financial control and compliance for all transactions.",
      isLast: true,
    },
  ],
};

export const otherSettingsGuide: GuideSection = {
  id: "other-settings",
  title: "Account & Profile Settings",
  subtitle: "Manage your personal information",
  description: "Update your personal and organization profile details. Keep your firm's contact information and branding up to date.",
  estimatedTime: "2 min",
  totalSteps: 4,
  steps: [
    {
      number: 1,
      title: "Access Account Settings",
      description: "From the Settings menu, click on 'Account' to view your profile information.",
      image: "/assets/settings/Settings%20-%20Account.png",
      imageAlt: "Account tab",
    },
    {
      number: 2,
      title: "Update Personal Details",
      description: "Edit your name, email, phone number, and other personal information. Ensure all contact details are current.",
      imageAlt: "Personal info fields",
    },
    {
      number: 3,
      title: "Update Organization Details",
      description: "Update your firm name, address, logo, and other organizational information that appears on documents and communications.",
      imageAlt: "Organization fields",
    },
    {
      number: 4,
      title: "Save Changes",
      description: "Click 'Save' or 'Update Profile' to apply your changes. Your updated information will be reflected across the platform.",
      imageAlt: "Save button",
      expectedOutcome: "Your profile and organization details are up to date across all modules.",
      isLast: true,
    },
  ],
};

export const notificationsGuide: GuideSection = {
  id: "notifications",
  title: "Notifications Control",
  subtitle: "Manage your alert preferences",
  description: "Configure how and when you receive notifications for system events, deadlines, approvals, and team activities. Stay informed without getting overwhelmed.",
  estimatedTime: "3 min",
  totalSteps: 5,
  steps: [
    {
      number: 1,
      title: "Open Notifications Settings",
      description: "From the Settings menu, navigate to 'Notifications' to view all notification preferences.",
      image: "/assets/settings/Settings%20-%20Remaining%20Options.png",
      imageAlt: "Notifications section",
    },
    {
      number: 2,
      title: "Configure Email Notifications",
      description: "Toggle email notifications for different events: New case assignments, Hearing reminders, Invoice approvals, Payment confirmations, and System updates.",
      imageAlt: "Email notification toggles",
    },
    {
      number: 3,
      title: "Set In-App Alerts",
      description: "Choose which activities trigger in-app notifications: Task assignments, Comments and mentions, Document uploads, Status changes, and Deadline reminders.",
      imageAlt: "In-app notification settings",
    },
    {
      number: 4,
      title: "Configure Notification Frequency",
      description: "Set how often you receive digest emails: Instant, Daily summary, or Weekly summary. This helps reduce notification fatigue.",
      imageAlt: "Frequency settings",
    },
    {
      number: 5,
      title: "Save Preferences",
      description: "Click 'Save Notification Settings' to apply your preferences. You can update these anytime based on your workflow needs.",
      imageAlt: "Save button",
      expectedOutcome: "You receive timely, relevant notifications without being overwhelmed by alerts.",
      isLast: true,
    },
  ],
};

export const feeManagementGuide: GuideSection = {
  id: "fee-management",
  title: "Fee Management Control",
  subtitle: "Configure service fees and billing rates",
  description: "Set up your firm's fee structure, hourly rates, and service charges. Define different rates for different services, lawyers, or client types.",
  estimatedTime: "5 min",
  totalSteps: 6,
  steps: [
    {
      number: 1,
      title: "Access Fee Management",
      description: "From Settings, navigate to 'Fee Management' or 'Billing Configuration' section.",
      image: "/assets/settings/Settings%20-%20Remaining%20Options.png",
      imageAlt: "Fee management section",
    },
    {
      number: 2,
      title: "Set Default Hourly Rates",
      description: "Configure standard hourly rates for different lawyer levels: Partner, Senior Associate, Associate, Junior Associate, and Paralegal.",
      imageAlt: "Hourly rates configuration",
    },
    {
      number: 3,
      title: "Define Service Fees",
      description: "Set fixed fees for common services: Consultation fees, Document drafting, Court appearance, Legal research, and Contract review.",
      imageAlt: "Service fee settings",
    },
    {
      number: 4,
      title: "Configure Tax Settings",
      description: "Set up tax rates (GST/VAT) that apply to your invoices. Configure whether taxes are included or added separately.",
      imageAlt: "Tax configuration",
    },
    {
      number: 5,
      title: "Set Payment Terms",
      description: "Define default payment terms: Due date (e.g., Net 30, Net 15), Late payment penalties, and Accepted payment methods.",
      imageAlt: "Payment terms",
    },
    {
      number: 6,
      title: "Save Fee Structure",
      description: "Review all fee settings and click 'Save Configuration'. These rates will be used as defaults when creating invoices.",
      imageAlt: "Save settings",
      expectedOutcome: "Your firm's fee structure is properly configured for accurate and consistent billing.",
      isLast: true,
    },
  ],
};

export const languageAppearanceGuide: GuideSection = {
  id: "language-appearance",
  title: "Language & Appearance",
  subtitle: "Personalize your platform experience",
  description: "Select your preferred language and customize the platform's visual appearance to match your workflow preferences.",
  estimatedTime: "2 min",
  totalSteps: 5,
  steps: [
    {
      number: 1,
      title: "Open Preferences",
      description: "From Settings, navigate to 'Preferences' or 'Appearance' section.",
      image: "/assets/settings/Settings%20-%20Remaining%20Options.png",
      imageAlt: "Preferences section",
    },
    {
      number: 2,
      title: "Select Language",
      description: "Choose your preferred language from the dropdown menu. OctoGenie supports multiple languages including English, Hindi, and regional languages.",
      imageAlt: "Language selector",
    },
    {
      number: 3,
      title: "Choose Theme",
      description: "Select between Light mode, Dark mode, or Auto (follows system preference). Dark mode reduces eye strain during extended use.",
      imageAlt: "Theme selector",
    },
    {
      number: 4,
      title: "Customize Display",
      description: "Adjust other display preferences: Font size, Density (compact/comfortable), and Date/time format.",
      imageAlt: "Display settings",
    },
    {
      number: 5,
      title: "Apply Changes",
      description: "Click 'Save Preferences'. The platform will refresh with your selected language and appearance settings.",
      imageAlt: "Apply button",
      expectedOutcome: "The platform interface is customized to your personal preferences for optimal comfort and productivity.",
      isLast: true,
    },
  ],
};

export const templatesGuide: GuideSection = {
  id: "templates",
  title: "Document Templates",
  subtitle: "Manage reusable document formats",
  description: "Create, edit, and manage templates for commonly used legal documents, emails, and communications. Save time with pre-formatted templates.",
  estimatedTime: "4 min",
  totalSteps: 6,
  steps: [
    {
      number: 1,
      title: "Access Templates",
      description: "From Settings, click on 'Templates' to view all available document templates.",
      image: "/assets/settings/Settings%20-%20Remaining%20Options.png",
      imageAlt: "Templates section",
    },
    {
      number: 2,
      title: "View Template Categories",
      description: "Browse templates by category: Legal notices, Contracts, Petitions, Letters, Email templates, and Invoice templates.",
      imageAlt: "Template categories",
    },
    {
      number: 3,
      title: "Create New Template",
      description: "Click '+ New Template' to create a custom template. Choose the template type and provide a name and description.",
      imageAlt: "New template button",
    },
    {
      number: 4,
      title: "Design Template Content",
      description: "Use the template editor to create your document format. Add placeholders for dynamic content like client name, case number, dates, etc.",
      imageAlt: "Template editor",
    },
    {
      number: 5,
      title: "Edit Existing Templates",
      description: "Select any template from the list and click 'Edit' to modify its content, formatting, or placeholders.",
      imageAlt: "Edit template",
    },
    {
      number: 6,
      title: "Save and Use",
      description: "Save your template. It will now be available when creating documents, allowing you to quickly generate formatted documents with client-specific information.",
      imageAlt: "Save template",
      expectedOutcome: "Standardized, professional document templates are ready for quick use across your practice.",
      isLast: true,
    },
  ],
};

export const helpSupportGuide: GuideSection = {
  id: "help-support",
  title: "Help & Support",
  subtitle: "Get assistance when you need it",
  description: "Access comprehensive support resources, documentation, FAQs, and direct support channels. Get help with technical issues or learn how to use platform features.",
  estimatedTime: "2 min",
  totalSteps: 5,
  steps: [
    {
      number: 1,
      title: "Access Help Center",
      description: "From Settings, click on 'Help & Support' or use the help icon (?) available in the top navigation bar.",
      image: "/assets/settings/Settings%20-%20Remaining%20Options.png",
      imageAlt: "Help section",
    },
    {
      number: 2,
      title: "Browse Documentation",
      description: "Access user guides, video tutorials, and step-by-step instructions for all platform features. Search for specific topics or browse by category.",
      imageAlt: "Documentation library",
    },
    {
      number: 3,
      title: "Check FAQs",
      description: "Review frequently asked questions covering common issues: Account management, Billing questions, Feature usage, and Troubleshooting.",
      imageAlt: "FAQ section",
    },
    {
      number: 4,
      title: "Contact Support",
      description: "If you can't find an answer, submit a support ticket or use live chat. Provide details about your issue for faster resolution.",
      imageAlt: "Contact support form",
    },
    {
      number: 5,
      title: "Track Support Tickets",
      description: "View the status of your support requests and receive updates via email. Access your ticket history to reference past issues and solutions.",
      imageAlt: "Support tickets",
      expectedOutcome: "You have access to comprehensive help resources and direct support for any platform-related questions or issues.",
      isLast: true,
    },
  ],
};
