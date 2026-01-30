import FeedbackSection from "@/components/FeedbackSection";

export default function FAQsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">FAQs & Troubleshooting</h1>
        <p className="text-lg text-gray-600">
          Find answers to common questions and solutions to frequently encountered
          issues.
        </p>
      </div>

      <section className="space-y-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">
            Common Issues & Solutions
          </h2>

          <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Unable to edit case
              </h3>
              <p className="text-gray-700 mb-3">
                If you're unable to edit a case, try the following:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li>
                  Check if you have the necessary permissions to edit cases. Go
                  to Settings → Roles & Permissions to verify your role.
                </li>
                <li>
                  Ensure the case is not currently being edited by another user.
                </li>
                <li>
                  Verify that the case status allows editing (some closed cases
                  may have restricted editing).
                </li>
                <li>
                  Refresh the page and try again. If the issue persists, contact
                  support.
                </li>
              </ol>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Hearing reminders not received
              </h3>
              <p className="text-gray-700 mb-3">
                If you're not receiving hearing reminders:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li>
                  Check your notification settings in Settings → Notifications.
                  Ensure email notifications are enabled.
                </li>
                <li>
                  Verify that reminders are set for the hearing. Go to Calendar
                  → Open the hearing → Edit → Check reminder settings.
                </li>
                <li>
                  Check your email spam/junk folder for reminder emails.
                </li>
                <li>
                  If using Google Calendar sync, ensure notifications are enabled
                  in your Google Calendar settings.
                </li>
                <li>
                  Verify your email address is correct in your account settings.
                </li>
              </ol>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                eCourt case not fetched
              </h3>
              <p className="text-gray-700 mb-3">
                If you're unable to fetch a case from eCourt:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li>
                  Verify that the case details are available in the eCourts
                  database. The case must exist in the eCourt system.
                </li>
                <li>
                  Double-check the case number, case type, and case year you
                  entered. Ensure they match exactly with the eCourt records.
                </li>
                <li>
                  Ensure you've selected the correct court type (District Court
                  or Supreme Court).
                </li>
                <li>
                  Verify that you've selected the correct State, District, and
                  Court Complex.
                </li>
                <li>
                  Try using alternative search methods (Advocate Name, CNR
                  Number, etc.) if Case Number search doesn't work.
                </li>
                <li>
                  If the issue persists, the case may not be available in the
                  eCourt database, or there may be a temporary connectivity issue.
                  Try again later or create the case manually.
                </li>
              </ol>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Invoice mismatch
              </h3>
              <p className="text-gray-700 mb-3">
                If you notice an invoice mismatch:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li>
                  Review the invoice details carefully. Check the invoice amount,
                  due date, and linked case/matter.
                </li>
                <li>
                  Verify that all line items are correctly entered and the total
                  amount is accurate.
                </li>
                <li>
                  Check if the invoice has been partially paid. The status will
                  show "Partially Paid" if only a portion has been received.
                </li>
                <li>
                  Compare the invoice with the linked case/matter to ensure
                  billing is accurate.
                </li>
                <li>
                  If you need to correct an invoice, you may need to create a
                  credit note or adjust the invoice amount (if permitted by your
                  role).
                </li>
                <li>
                  Contact your administrator or support if you need to make
                  significant changes to an invoice.
                </li>
              </ol>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Permission issues
              </h3>
              <p className="text-gray-700 mb-3">
                If you're experiencing permission issues:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li>
                  Check your assigned role in Settings → Users & Roles. Verify
                  that your role has the necessary permissions.
                </li>
                <li>
                  Contact your administrator to review your role permissions in
                  Settings → Roles & Permissions.
                </li>
                <li>
                  Ensure you're logged in with the correct account that has
                  access to the required features.
                </li>
                <li>
                  Some features may require specific permissions (View, Create,
                  Edit, Delete, Approve). Verify that your role includes the
                  necessary permission level.
                </li>
                <li>
                  If you believe you should have access to a feature, contact
                  your administrator or support to review your permissions.
                </li>
              </ol>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Document upload issues
              </h3>
              <p className="text-gray-700 mb-3">
                If you're having trouble uploading documents:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li>
                  Check the file size. Ensure the document is within the maximum
                  file size limit.
                </li>
                <li>
                  Verify the file format is supported (PDF, DOC, DOCX, etc.).
                </li>
                <li>
                  Ensure you have a stable internet connection.
                </li>
                <li>
                  Try refreshing the page and uploading again.
                </li>
                <li>
                  Check if you have permission to upload documents for the
                  specific case/matter.
                </li>
              </ol>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Payment not reflecting
              </h3>
              <p className="text-gray-700 mb-3">
                If a payment is not reflecting in the system:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li>
                  Verify that the payment was recorded correctly. Check the
                  payment details, amount, and linked invoice.
                </li>
                <li>
                  Ensure the payment status is set to "Completed" if it's a
                  successful payment.
                </li>
                <li>
                  Check if the payment is linked to the correct invoice.
                </li>
                <li>
                  Review the invoice status to see if it has been updated to
                  "Paid" or "Partially Paid".
                </li>
                <li>
                  If the payment was recorded but not reflected, try refreshing
                  the page or contact support.
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div className="bg-primary-light border border-primary rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Still need help?
          </h3>
          <p className="text-gray-700 mb-4">
            If you couldn't find the answer to your question or are still
            experiencing issues, please contact our support team.
          </p>
          <a
            href="mailto:support@octogenie.com"
            className="inline-block px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Contact Support
          </a>
        </div>
      </section>

      <FeedbackSection pageId="faqs" />
    </div>
  );
}
