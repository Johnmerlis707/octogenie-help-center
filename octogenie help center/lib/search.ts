// Search functionality for the help center

import { moduleGuides, navigation, workflowSteps, quickActions } from "./content";
import { SearchResult, GuideSection } from "./types";


// Import all guide data
import { addLeadGuide, searchFilterGuide, convertToClientGuide } from "./leadsGuide";
import { addClientGuide, editClientGuide, uploadClientDocumentsGuide } from "./clientsGuide";
import { createMatterGuide, linkClientToMatterGuide, updateMatterStatusGuide } from "./mattersGuide";
import { createCaseManualGuide, createCaseFromECourtGuide, closeCaseGuide } from "./casesGuide";
import { addHearingGuide, viewHearingsGuide } from "./calendarGuide";
import { uploadDocumentsGuide, linkDocumentsGuide } from "./documentsGuide";

import { qaGuide, draftGuide, analyzeGuide } from "./aiAssistantGuide";
import { createInvoiceGuide, trackInvoiceStatusGuide } from "./invoicesGuide";
import { recordPaymentGuide, filterPaymentsGuide } from "./paymentsGuide";
import { addExpenseGuide, linkExpenseToCaseGuide } from "./expensesGuide";
import { navigateToSettingsGuide, manageUsersGuide, manageRolesPermissionsGuide } from "./settingsGuide";




// Collect all guides
const allGuides: GuideSection[] = [
  addLeadGuide,
  searchFilterGuide,
  convertToClientGuide,
  addClientGuide,
  editClientGuide,
  uploadClientDocumentsGuide,
  createMatterGuide,
  linkClientToMatterGuide,
  updateMatterStatusGuide,
  createCaseManualGuide,
  createCaseFromECourtGuide,
  closeCaseGuide,
  addHearingGuide,
  viewHearingsGuide,
  uploadDocumentsGuide,
  linkDocumentsGuide,

  qaGuide,
  draftGuide,
  analyzeGuide,
  createInvoiceGuide,
  trackInvoiceStatusGuide,
  recordPaymentGuide,
  filterPaymentsGuide,
  addExpenseGuide,
  linkExpenseToCaseGuide,
  navigateToSettingsGuide,
  manageUsersGuide,
  manageRolesPermissionsGuide,
];

// Build search index
function buildSearchIndex(): SearchResult[] {
  const results: SearchResult[] = [];

  // Add module guides
  moduleGuides.forEach((guide) => {
    results.push({
      type: "page",
      title: guide.title,
      description: guide.description,
      href: guide.href,
      module: guide.id,
    });
  });

  // Add workflow steps
  workflowSteps.forEach((step) => {
    results.push({
      type: "workflow",
      title: step.title,
      description: step.description,
      href: step.href,
    });
  });

  // Add quick actions
  quickActions.forEach((action) => {
    results.push({
      type: "quick-action",
      title: action.title,
      description: "",
      href: action.href,
    });
  });

  // Add navigation items
  navigation.forEach((item) => {
    if (item.children) {
      item.children.forEach((child) => {
        results.push({
          type: "page",
          title: child.title,
          description: item.title,
          href: child.href,
          section: item.title,
        });
      });
    } else {
      results.push({
        type: "page",
        title: item.title,
        description: "",
        href: item.href,
      });
    }
  });

  // Add guides and their steps
  allGuides.forEach((guide) => {
    // Determine the page URL based on guide ID
    const moduleMap: Record<string, string> = {
      "add-lead": "/leads",
      "search-filter": "/leads",
      "convert": "/leads",
      "add-client": "/clients",
      "edit-client": "/clients",
      "upload-documents": "/clients",
      "create-matter": "/matters",
      "parties": "/matters",
      "link-client": "/matters",
      "update-status": "/matters",
      "bulk-upload": "/matters",
      "export": "/matters",
      "manual-entry": "/cases",
      "ecourt": "/cases",
      "close-case": "/cases",
      "add-hearing": "/calendar",
      "view-hearings": "/calendar",
      "reschedule": "/calendar",
      "reminders": "/calendar",
      "upload-document": "/documents",
      "link-document": "/documents",
      "qa": "/ai-assistant",
      "draft": "/ai-assistant",
      "analyze": "/ai-assistant",
      "create-invoice": "/invoices",
      "track-status": "/invoices",
      "record-payment": "/payments",
      "filter-payments": "/payments",
      "add-expense": "/expenses",
      "link-case": "/expenses",
      "navigate-settings": "/settings",
      "manage-users": "/settings",
      "roles-permissions": "/settings",
    };

    // Find module from guide ID
    const moduleName = guide.id.split("-")[0];
    const pageUrl = moduleMap[guide.id] || `/${moduleName}` || "/";

    // Add guide itself
    results.push({
      type: "guide",
      title: guide.title,
      description: guide.description || guide.subtitle || "",
      href: `${pageUrl}#${guide.id}`,
      module: moduleName,
    });

    // Add guide steps
    guide.steps.forEach((step) => {
      results.push({
        type: "step",
        title: step.title,
        description: step.description,
        href: `${pageUrl}#${guide.id}`,
        section: guide.title,
        module: moduleName,
      });
    });
  });

  return results;
}

// Search function
export function search(query: string): SearchResult[] {
  if (!query || query.trim().length === 0) {
    return [];
  }

  try {
    const searchIndex = buildSearchIndex();
    const queryLower = query.toLowerCase().trim();
    const queryTerms = queryLower.split(/\s+/).filter((term) => term.length > 0);

    if (queryTerms.length === 0) {
      return [];
    }

    // Score and filter results
    const scoredResults = searchIndex
      .map((result) => {
        const titleLower = result.title.toLowerCase();
        const descLower = result.description.toLowerCase();
        const sectionLower = result.section?.toLowerCase() || "";
        const moduleLower = result.module?.toLowerCase() || "";

        let score = 0;

        // Exact title match gets highest score
        if (titleLower === queryLower) {
          score += 100;
        } else if (titleLower.startsWith(queryLower)) {
          score += 50;
        } else if (titleLower.includes(queryLower)) {
          score += 30;
        }

        // Check if any query terms are present (more flexible)
        const matchingTerms = queryTerms.filter(
          (term) =>
            titleLower.includes(term) ||
            descLower.includes(term) ||
            sectionLower.includes(term) ||
            moduleLower.includes(term)
        );

        // If at least one term matches, include the result
        if (matchingTerms.length > 0) {
          // Count how many terms match in title (higher weight)
          const titleMatches = queryTerms.filter((term) => titleLower.includes(term)).length;
          score += titleMatches * 20;

          // Count how many terms match in description
          const descMatches = queryTerms.filter((term) => descLower.includes(term)).length;
          score += descMatches * 10;

          // Bonus for matching all terms
          if (matchingTerms.length === queryTerms.length) {
            score += 15;
          }

          // Type-based scoring
          if (result.type === "page") score += 5;
          if (result.type === "guide") score += 3;
          if (result.type === "step") score += 1;
        } else {
          score = 0; // Don't include if no terms match
        }

        return { result, score };
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 20) // Limit to top 20 results
      .map((item) => item.result);

    return scoredResults;
  } catch (error) {
    console.error("Search error:", error);
    return [];
  }
}
