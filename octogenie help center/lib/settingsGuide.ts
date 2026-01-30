import { GuideSection } from "@/lib/types";


export const navigateToSettingsGuide: GuideSection = {
  id: "navigate-settings",
  title: "Navigating to Settings",
  subtitle: "Access the Settings section",
  description: "Follow these steps to access Settings",
  estimatedTime: "1 min",
  totalSteps: 6,
  steps: [
    {
      number: 1,
      title: "Login to Portal",
      description: "Login to the OctoGenie Partner Portal using your credentials.",
      image: "",
      imageAlt: "Login screen",
    },
    {
      number: 2,
      title: "Go to Profile Icon",
      description: "After logging in, go to the top-right corner of the screen.",
      image: "",
      imageAlt: "Profile icon",
    },
    {
      number: 3,
      title: "Click Profile/Account Icon",
      description: "Click on your Profile / Account icon.",
      image: "",
      imageAlt: "Account dropdown",
    },
    {
      number: 4,
      title: "Select Settings",
      description: "From the dropdown menu, select 'Settings.'",
      image: "/settings/select-settings.png",
      imageAlt: "Settings option",
    },
    {
      number: 5,
      title: "Access Settings Page",
      description: "The Settings page will open, where you can see options like: Account, Security, Users & Roles, Roles & Permissions, Approvals, Notifications, Fee Management, Language, Appearance, Templates, Help & Support.",
      image: "/settings/account-sidebar.png",
      imageAlt: "Settings page",
    },
    {
      number: 6,
      title: "Account",
      description: "Click on Account to manage your profile and organization details.",
      image: "/settings/account-menu.png",
      imageAlt: "Account settings",
      expectedOutcome: "You can now access all settings options to manage your account and system preferences.",
      isLast: true,
    },
  ],
};

export const manageUsersGuide: GuideSection = {
  id: "users-roles",
  title: "Managing Users & Roles",
  subtitle: "Add and manage users in your organization",
  description: "Follow these steps to add new users",
  estimatedTime: "3 min",
  totalSteps: 4,
  steps: [
    {
      number: 1,
      title: "Go to Settings",
      description: "Navigate to Settings from your profile dropdown.",
      image: "",
      imageAlt: "Settings navigation",
    },
    {
      number: 2,
      title: "Click Users & Roles",
      description: "From the Settings page, click on 'Users & Roles' in the left menu.",
      image: "/settings/users-roles.png",
      imageAlt: "Users & Roles option",
    },
    {
      number: 3,
      title: "Click Invite User",
      description: "Click on the 'Invite User' button located at the top-right corner of the page.",
      image: "",
      imageAlt: "Invite User button",
    },
    {
      number: 4,
      title: "Enter User Details",
      description: "Enter the required user details (name, email, role) and submit.",
      image: "",
      imageAlt: "User form",
      tips: [
        "Users can be filtered based on their roles",
        "You can search for specific users using their name or email ID",
      ],
      expectedOutcome: "New user is successfully added and will receive an invitation email.",
      isLast: true,
    },
  ],
};

export const manageRolesPermissionsGuide: GuideSection = {
  id: "roles-permissions",
  title: "Managing Roles & Permissions",
  subtitle: "Configure user roles and their permissions",
  description: "Set up roles and assign permissions",
  estimatedTime: "5 min",
  totalSteps: 5,
  steps: [
    {
      number: 1,
      title: "Go to Settings",
      description: "Navigate to Settings from your profile dropdown.",
      image: "",
      imageAlt: "Settings navigation",
    },
    {
      number: 2,
      title: "Click Roles & Permissions",
      description: "From the Settings page, click on 'Roles & Permissions' in the left menu.",
      image: "",
      imageAlt: "Roles & Permissions option",
    },
    {
      number: 3,
      title: "Select Role",
      description: "Select the role you want to configure permissions for by clicking the 'Configure' action.",
      image: "/settings/select-role.png",
      imageAlt: "Role selection",
    },
    {
      number: 4,
      title: "Create New Role",
      description: "Click on '+ New Role' to create a new custom role for your organization.",
      image: "/settings/create-role.png",
      imageAlt: "Create role dialog",
    },
    {
      number: 5,
      title: "Configure Permissions",
      description: "Set permissions for different modules (View, Create, Edit, Delete, Approve) and save changes.",
      image: "",
      imageAlt: "Permissions configuration",
      expectedOutcome: "Role permissions are successfully configured and applied to users with that role.",
      isLast: true,
    },
  ],
};

export const manageApprovalsGuide: GuideSection = {
  id: "approvals",
  title: "Managing Approvals",
  subtitle: "Configure approval workflows for different modules",
  description: "Step-by-step guide to set up approval processes",
  estimatedTime: "3 min",
  totalSteps: 2,
  steps: [
    {
      number: 1,
      title: "Approvals",
      description: "From the Settings menu, click on 'Approvals' to configure multi-step approval processes.",
      image: "/settings/approvals-menu.png",
      imageAlt: "Approvals option",
    },
    {
      number: 2,
      title: "Configure Approval",
      description: "Choose the approval mode (No Approval, Single, Multi-Step) for modules like Expenses and save the configuration.",
      image: "/settings/configure-approval.png",
      imageAlt: "Configure approval workflow",
      expectedOutcome: "Approval workflows are successfully configured for your organization.",
      isLast: true,
    },
  ],
};
