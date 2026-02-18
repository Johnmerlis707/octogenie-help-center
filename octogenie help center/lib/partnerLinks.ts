/**
 * Maps Help Center guide steps to partner website URLs
 * This ensures users can click through directly to the relevant page
 */

const PARTNER_BASE_URL = "https://partner.octogenie.com";

export interface StepLink {
  url: string;
  label: string;
}

/**
 * Generate partner website URL based on step content
 */
export function getPartnerLinkForStep(
  stepTitle: string,
  stepDescription: string,
  pageId?: string
): StepLink | null {
  const title = stepTitle.toLowerCase();
  const desc = stepDescription.toLowerCase();

  // Login/Authentication steps
  if (title.includes("login") || title.includes("sign in") || desc.includes("log in")) {
    return {
      url: `${PARTNER_BASE_URL}/`,
      label: "Go to Login",
    };
  }

  // Leads module
  if (title.includes("lead") || desc.includes("lead")) {
    if (title.includes("new lead") || title.includes("add lead") || desc.includes("new lead") || desc.includes("+ new lead")) {
      return {
        url: `${PARTNER_BASE_URL}/leads/new`,
        label: "Add New Lead",
      };
    }
    if (title.includes("search") || title.includes("filter") || desc.includes("search") || desc.includes("filter")) {
      return {
        url: `${PARTNER_BASE_URL}/leads`,
        label: "Search & Filter Leads",
      };
    }
    if (title.includes("convert") || desc.includes("convert")) {
      return {
        url: `${PARTNER_BASE_URL}/leads`,
        label: "Convert Lead to Client",
      };
    }
    return {
      url: `${PARTNER_BASE_URL}/leads`,
      label: "Go to Leads",
    };
  }

  // Clients module
  if (title.includes("client") || desc.includes("client")) {
    if (title.includes("new client") || title.includes("add client") || desc.includes("new client") || desc.includes("add client")) {
      return {
        url: `${PARTNER_BASE_URL}/clients/new`,
        label: "Add New Client",
      };
    }
    if (title.includes("edit") || desc.includes("edit client")) {
      return {
        url: `${PARTNER_BASE_URL}/clients`,
        label: "Edit Client",
      };
    }
    if (title.includes("document") || desc.includes("upload document")) {
      return {
        url: `${PARTNER_BASE_URL}/clients`,
        label: "Upload Documents",
      };
    }
    return {
      url: `${PARTNER_BASE_URL}/clients`,
      label: "Go to Clients",
    };
  }

  // Matters module
  if (title.includes("matter") || desc.includes("matter")) {
    if (title.includes("create matter") || title.includes("new matter") || desc.includes("create matter")) {
      return {
        url: `${PARTNER_BASE_URL}/matters/new`,
        label: "Create Matter",
      };
    }
    if (title.includes("link client") || desc.includes("link client")) {
      return {
        url: `${PARTNER_BASE_URL}/matters`,
        label: "Link Client to Matter",
      };
    }
    if (title.includes("status") || desc.includes("update status")) {
      return {
        url: `${PARTNER_BASE_URL}/matters`,
        label: "Update Matter Status",
      };
    }
    if (title.includes("bulk") || desc.includes("bulk upload")) {
      return {
        url: `${PARTNER_BASE_URL}/matters`,
        label: "Bulk Upload Matters",
      };
    }
    if (title.includes("export") || desc.includes("export")) {
      return {
        url: `${PARTNER_BASE_URL}/matters`,
        label: "Export to Excel",
      };
    }
    return {
      url: `${PARTNER_BASE_URL}/matters`,
      label: "Go to Matters",
    };
  }

  // Cases module
  if (title.includes("case") || desc.includes("case")) {
    if (title.includes("create case") || title.includes("new case") || desc.includes("create case")) {
      return {
        url: `${PARTNER_BASE_URL}/cases/new`,
        label: "Create Case",
      };
    }
    if (title.includes("ecourt") || desc.includes("ecourt")) {
      return {
        url: `${PARTNER_BASE_URL}/cases/new?source=ecourt`,
        label: "Create from eCourt",
      };
    }
    if (title.includes("close") || desc.includes("close case")) {
      return {
        url: `${PARTNER_BASE_URL}/cases`,
        label: "Close Case",
      };
    }
    return {
      url: `${PARTNER_BASE_URL}/cases`,
      label: "Go to Cases",
    };
  }

  // Calendar/Hearings module
  if (title.includes("hearing") || title.includes("calendar") || desc.includes("hearing") || desc.includes("calendar")) {
    if (title.includes("new hearing") || title.includes("add hearing") || title.includes("schedule") || desc.includes("new hearing") || desc.includes("schedule")) {
      return {
        url: `${PARTNER_BASE_URL}/calendar/new`,
        label: "Schedule Hearing",
      };
    }
    if (title.includes("view") || desc.includes("view hearing")) {
      return {
        url: `${PARTNER_BASE_URL}/calendar`,
        label: "View Hearings",
      };
    }
    if (title.includes("reschedule") || desc.includes("reschedule")) {
      return {
        url: `${PARTNER_BASE_URL}/calendar`,
        label: "Reschedule Hearing",
      };
    }
    return {
      url: `${PARTNER_BASE_URL}/calendar`,
      label: "Go to Calendar",
    };
  }

  // Tasks module
  if (title.includes("task") || desc.includes("task")) {
    if (title.includes("create task") || title.includes("new task") || desc.includes("create task")) {
      return {
        url: `${PARTNER_BASE_URL}/tasks/new`,
        label: "Create Task",
      };
    }
    if (title.includes("assign") || desc.includes("assign task")) {
      return {
        url: `${PARTNER_BASE_URL}/tasks`,
        label: "Assign Task",
      };
    }
    if (title.includes("due date") || desc.includes("due date")) {
      return {
        url: `${PARTNER_BASE_URL}/tasks`,
        label: "Set Due Date",
      };
    }
    return {
      url: `${PARTNER_BASE_URL}/tasks`,
      label: "Go to Tasks",
    };
  }

  // Time Tracking module
  if (title.includes("time") || desc.includes("time tracking") || desc.includes("timer")) {
    if (title.includes("timer") || desc.includes("start timer")) {
      return {
        url: `${PARTNER_BASE_URL}/time-tracking`,
        label: "Start Timer",
      };
    }
    if (title.includes("manual") || desc.includes("manual entry")) {
      return {
        url: `${PARTNER_BASE_URL}/time-tracking/new`,
        label: "Manual Time Entry",
      };
    }
    if (title.includes("review") || desc.includes("review time")) {
      return {
        url: `${PARTNER_BASE_URL}/time-tracking`,
        label: "Review Time Logs",
      };
    }
    return {
      url: `${PARTNER_BASE_URL}/time-tracking`,
      label: "Go to Time Tracking",
    };
  }

  // Invoices module
  if (title.includes("invoice") || desc.includes("invoice")) {
    if (title.includes("create invoice") || title.includes("new invoice") || desc.includes("create invoice")) {
      return {
        url: `${PARTNER_BASE_URL}/invoices/new`,
        label: "Create Invoice",
      };
    }
    if (title.includes("track") || desc.includes("track status")) {
      return {
        url: `${PARTNER_BASE_URL}/invoices`,
        label: "Track Invoice Status",
      };
    }
    return {
      url: `${PARTNER_BASE_URL}/invoices`,
      label: "Go to Invoices",
    };
  }

  // Payments module
  if (title.includes("payment") || desc.includes("payment")) {
    if (title.includes("record payment") || desc.includes("record payment")) {
      return {
        url: `${PARTNER_BASE_URL}/payments/new`,
        label: "Record Payment",
      };
    }
    if (title.includes("filter") || desc.includes("filter payment")) {
      return {
        url: `${PARTNER_BASE_URL}/payments`,
        label: "Filter Payments",
      };
    }
    return {
      url: `${PARTNER_BASE_URL}/payments`,
      label: "Go to Payments",
    };
  }

  // Expenses module
  if (title.includes("expense") || desc.includes("expense")) {
    if (title.includes("add expense") || title.includes("new expense") || desc.includes("add expense")) {
      return {
        url: `${PARTNER_BASE_URL}/expenses/new`,
        label: "Add Expense",
      };
    }
    if (title.includes("link") || desc.includes("link to case")) {
      return {
        url: `${PARTNER_BASE_URL}/expenses`,
        label: "Link Expense to Case",
      };
    }
    return {
      url: `${PARTNER_BASE_URL}/expenses`,
      label: "Go to Expenses",
    };
  }

  // Documents module
  if (title.includes("document") || desc.includes("document")) {
    if (title.includes("upload") || desc.includes("upload document")) {
      return {
        url: `${PARTNER_BASE_URL}/documents/upload`,
        label: "Upload Document",
      };
    }
    if (title.includes("link") || desc.includes("link document")) {
      return {
        url: `${PARTNER_BASE_URL}/documents`,
        label: "Link Document",
      };
    }
    return {
      url: `${PARTNER_BASE_URL}/documents`,
      label: "Go to Documents",
    };
  }

  // AI Assistant module
  if (title.includes("ai") || title.includes("assistant") || desc.includes("ai assistant")) {
    if (title.includes("draft") || desc.includes("draft document")) {
      return {
        url: `${PARTNER_BASE_URL}/ai-assistant/draft`,
        label: "Draft Document",
      };
    }
    if (title.includes("analyze") || desc.includes("analyze")) {
      return {
        url: `${PARTNER_BASE_URL}/ai-assistant/analyze`,
        label: "Analyze Document",
      };
    }
    return {
      url: `${PARTNER_BASE_URL}/ai-assistant`,
      label: "Go to AI Assistant",
    };
  }

  // Settings module
  if (title.includes("setting") || desc.includes("setting")) {
    if (title.includes("user") || desc.includes("manage user")) {
      return {
        url: `${PARTNER_BASE_URL}/settings/users`,
        label: "Manage Users",
      };
    }
    if (title.includes("role") || desc.includes("role") || desc.includes("permission")) {
      return {
        url: `${PARTNER_BASE_URL}/settings/roles`,
        label: "Manage Roles & Permissions",
      };
    }
    return {
      url: `${PARTNER_BASE_URL}/settings`,
      label: "Go to Settings",
    };
  }

  // Default: try to infer from pageId
  if (pageId) {
    const moduleMap: Record<string, string> = {
      leads: "/leads",
      clients: "/clients",
      matters: "/matters",
      cases: "/cases",
      calendar: "/calendar",
      tasks: "/tasks",
      "time-tracking": "/time-tracking",
      invoices: "/invoices",
      payments: "/payments",
      expenses: "/expenses",
      documents: "/documents",
      "ai-assistant": "/ai-assistant",
      settings: "/settings",
    };

    const modulePath = moduleMap[pageId];
    if (modulePath) {
      return {
        url: `${PARTNER_BASE_URL}${modulePath}`,
        label: `Go to ${pageId.charAt(0).toUpperCase() + pageId.slice(1)}`,
      };
    }
  }

  return null;
}
