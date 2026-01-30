import FeedbackSection from "@/components/FeedbackSection";

export default function GettingStartedPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">Getting Started</h1>
        <p className="text-lg text-gray-600">
          Welcome to OctoGenie Help Center. Learn how to get started with the
          platform and understand the typical legal workflow.
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">
          How to Log In to the Partner Portal
        </h2>
        <div className="space-y-4">
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li>Navigate to{" "}
              <a
                href="https://partner.octogenie.com"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://partner.octogenie.com
              </a>
            </li>
            <li>Enter your registered email address and password</li>
            <li>Click on the "Log In" button</li>
            <li>You will be redirected to your dashboard</li>
          </ol>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">
          Understanding the Left-Side Navigation
        </h2>
        <p className="text-gray-700">
          The left sidebar contains all the main modules of OctoGenie:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
          <li>
            <strong>Leads:</strong> Manage potential clients who show interest
            in your services
          </li>
          <li>
            <strong>Clients:</strong> Manage official client profiles and
            information
          </li>
          <li>
            <strong>Matters:</strong> Organize legal work into structured
            matters
          </li>
          <li>
            <strong>Cases:</strong> Track court cases from filing to resolution
          </li>
          <li>
            <strong>Calendar:</strong> Schedule and manage hearings and events
          </li>
          <li>
            <strong>Documents:</strong> Store and manage legal files
          </li>
          <li>
            <strong>AI Assistant:</strong> Get legal guidance and draft
            documents
          </li>
          <li>
            <strong>Invoices:</strong> Create and track client invoices
          </li>
          <li>
            <strong>Payments:</strong> Record and track payments received
          </li>
          <li>
            <strong>Expenses:</strong> Record and manage expenses
          </li>
          <li>
            <strong>Settings:</strong> Configure your account and preferences
          </li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">
          Typical Legal Workflow
        </h2>
        <p className="text-gray-700">
          Follow this workflow to manage your legal practice efficiently:
        </p>
        <div className="bg-gray-50 rounded-lg p-6 space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold flex-shrink-0">
              1
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Lead</h3>
              <p className="text-gray-700">
                Capture potential clients who show interest in your legal
                services
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold flex-shrink-0">
              2
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Client</h3>
              <p className="text-gray-700">
                Convert qualified leads into official clients with complete
                profiles
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold flex-shrink-0">
              3
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Matter</h3>
              <p className="text-gray-700">
                Organize legal work into structured matters with parties and
                documents
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold flex-shrink-0">
              4
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Case</h3>
              <p className="text-gray-700">
                Track court cases from filing to resolution with full case
                management
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold flex-shrink-0">
              5
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Hearing</h3>
              <p className="text-gray-700">
                Schedule hearings, set reminders, and sync with your calendar
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold flex-shrink-0">
              6
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Invoice</h3>
              <p className="text-gray-700">
                Generate professional invoices and track billing for your
                services
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold flex-shrink-0">
              7
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Payment</h3>
              <p className="text-gray-700">
                Record payments, track collections, and manage your finances
              </p>
            </div>
          </div>
        </div>
      </section>

      <FeedbackSection pageId="getting-started" />
    </div>
  );
}
