import { GuideSection } from "./types";
import { addLeadGuide, searchFilterGuide, convertToClientGuide } from "./leadsGuide";
import {
  addClientGuide,
  editClientGuide,
  uploadClientDocumentsGuide,
  deleteClientGuide,
} from "./clientsGuide";
import {
  createMatterGuide,
  linkClientGuide,
  updateMatterStatusGuide,
  editMatterGuide,
  bulkUploadGuide,
  exportExcelGuide,
  filterMattersGuide,
} from "./mattersGuide";
import {
  createCaseManualGuide,
  createCaseFromECourtGuide,
  editCaseGuide,
  closeCaseGuide,
} from "./casesGuide";
import {
  addHearingGuide,
  viewHearingsGuide,
  rescheduleHearingGuide,
  remindersGuide,
} from "./calendarGuide";
import { uploadDocumentsGuide, linkDocumentsGuide } from "./documentsGuide";
import { qaGuide, draftGuide, analyzeGuide, securityGuide } from "./aiAssistantGuide";
import {
  createInvoiceGuide,
  trackInvoiceStatusGuide,
  searchAndFilterInvoicesGuide,
} from "./invoicesGuide";
import { recordPaymentGuide, filterPaymentsGuide } from "./paymentsGuide";
import {
  addExpenseGuide,
  linkExpenseToCaseGuide,
  filterExpensesByStatusGuide,
  searchAndFilterExpensesGuide,
} from "./expensesGuide";
import { createTaskGuide, assignTaskGuide, setDueDateGuide } from "./tasksGuide";
import {
  trackTimeTimerGuide,
  trackTimeManualGuide,
  reviewTimeGuide,
} from "./timeTrackingGuide";
import {
  navigateToSettingsGuide,
  manageUsersGuide,
  manageRolesPermissionsGuide,
  manageApprovalsGuide,
  otherSettingsGuide,
  notificationsGuide,
  feeManagementGuide,
  languageAppearanceGuide,
  templatesGuide,
  helpSupportGuide,
} from "./settingsGuide";

export const allGuides: GuideSection[] = [
  addLeadGuide,
  searchFilterGuide,
  convertToClientGuide,
  addClientGuide,
  editClientGuide,
  uploadClientDocumentsGuide,
  deleteClientGuide,
  createMatterGuide,
  linkClientGuide,
  updateMatterStatusGuide,
  editMatterGuide,
  bulkUploadGuide,
  exportExcelGuide,
  filterMattersGuide,
  createCaseManualGuide,
  createCaseFromECourtGuide,
  editCaseGuide,
  closeCaseGuide,
  addHearingGuide,
  viewHearingsGuide,
  rescheduleHearingGuide,
  remindersGuide,
  uploadDocumentsGuide,
  linkDocumentsGuide,
  qaGuide,
  draftGuide,
  analyzeGuide,
  securityGuide,
  createInvoiceGuide,
  trackInvoiceStatusGuide,
  searchAndFilterInvoicesGuide,
  recordPaymentGuide,
  filterPaymentsGuide,
  addExpenseGuide,
  linkExpenseToCaseGuide,
  filterExpensesByStatusGuide,
  searchAndFilterExpensesGuide,
  createTaskGuide,
  assignTaskGuide,
  setDueDateGuide,
  trackTimeTimerGuide,
  trackTimeManualGuide,
  reviewTimeGuide,
  navigateToSettingsGuide,
  manageUsersGuide,
  manageRolesPermissionsGuide,
  manageApprovalsGuide,
  otherSettingsGuide,
  notificationsGuide,
  feeManagementGuide,
  languageAppearanceGuide,
  templatesGuide,
  helpSupportGuide,
];

// Fallback paths for guides not represented in navigation children.
export const guidePathFallbackMap: Record<string, string> = {
  "edit-case": "/cases",
  "edit-matter": "/matters",
  "filter-matters": "/matters",
  "search-filter-invoices": "/invoices",
  "filter-status": "/expenses",
  "search-filter-expenses": "/expenses",
  security: "/ai-assistant",
  notifications: "/settings",
  "fee-management": "/settings",
  "language-appearance": "/settings",
  templates: "/settings",
  "help-support": "/settings",
};
