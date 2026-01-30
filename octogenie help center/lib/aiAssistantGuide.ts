import { GuideSection } from "@/lib/types";


export const qaGuide: GuideSection = {
  id: "qa",
  title: "Asking Legal Questions (Q&A)",
  subtitle: "Get quick answers to legal questions",
  description: "Use Q&A feature to get instant legal guidance",
  estimatedTime: "2 min",
  totalSteps: 4,
  steps: [
    {
      number: 1,
      title: "Access AI Assistant",
      description: "Log in to the OctoGenie platform. From the left-hand menu, click on AI Assistant. Click + New Chat to start a new interaction.",
      image: "/assets/ai-assistant/ai-assistant-navigation.png",
      imageAlt: "AI Assistant navigation",
    },
    {
      number: 2,
      title: "Select Q&A Option",
      description: "Click on the Q&A option available at the top-right corner of the AI Assistant screen.",
      image: "/assets/ai-assistant/qa-mode.png",
      imageAlt: "Q&A option",
    },
    {
      number: 3,
      title: "Enter Your Question",
      description: "Enter your legal question in the message box. Example: 'How can I verify if there are any litigations against a property?'",
      imageAlt: "Question input",
    },
    {
      number: 4,
      title: "Send and Review Answer",
      description: "Click the Send icon. The AI provides structured, easy-to-understand answers.",
      imageAlt: "Send button",
      expectedOutcome: "You receive instant, structured answers to your legal questions.",
      isLast: true,
    },
  ],
};

export const draftGuide: GuideSection = {
  id: "draft",
  title: "Drafting Documents with AI",
  subtitle: "Create legal documents quickly",
  description: "Use AI Assistant to draft legal documents",
  estimatedTime: "5 min",
  totalSteps: 10,
  steps: [
    {
      number: 1,
      title: "Log in to OctoGenie",
      description: "Log in to the OctoGenie platform.",
      imageAlt: "Login screen",
    },
    {
      number: 2,
      title: "Navigate to AI Assistant",
      description: "Click on AI Assistant from the left-side menu.",
      image: "/assets/ai-assistant/ai-assistant-navigation.png",
      imageAlt: "AI Assistant navigation",
    },
    {
      number: 3,
      title: "Start New Chat",
      description: "Click + New Chat.",
      image: "/assets/ai-assistant/new-chat.png",
      imageAlt: "New Chat button",
    },
    {
      number: 4,
      title: "Select Draft Option",
      description: "Select the Draft option from the top-right corner.",
      image: "/assets/ai-assistant/draft-mode.png",
      imageAlt: "Draft option",
    },
    {
      number: 5,
      title: "Enter Drafting Requirement",
      description: "Enter your drafting requirement in the message box. Example: 'Draft a legal notice for non-payment of dues.'",
      imageAlt: "Draft input",
    },
    {
      number: 6,
      title: "Send Request",
      description: "Click the Send icon.",
      imageAlt: "Send button",
    },
    {
      number: 7,
      title: "Review Generated Draft",
      description: "Review the AI-generated draft displayed on the screen.",
      imageAlt: "Generated draft",
    },
    {
      number: 8,
      title: "Listen to Draft (Optional)",
      description: "Use the Listen option to hear the drafted content.",
      imageAlt: "Listen button",
    },
    {
      number: 9,
      title: "Download PDF (Optional)",
      description: "Click Download PDF to save the draft as a PDF file.",
      imageAlt: "Download PDF button",
    },
    {
      number: 10,
      title: "Edit and Customize",
      description: "Edit or customize the draft as required before final use.",
      imageAlt: "Edit draft",
      expectedOutcome: "You have a complete legal document draft ready for review and customization.",
      isLast: true,
    },
  ],
};

export const analyzeGuide: GuideSection = {
  id: "analyze",
  title: "Analyzing Documents",
  subtitle: "Review and analyze legal documents",
  description: "Use AI to analyze documents for key points and risks",
  estimatedTime: "5 min",
  totalSteps: 6,
  steps: [
    {
      number: 1,
      title: "Access AI Assistant",
      description: "Log in to the OctoGenie platform. Click on AI Assistant from the left-side menu.",
      image: "/assets/ai-assistant/ai-assistant-navigation.png",
      imageAlt: "AI Assistant navigation",
    },
    {
      number: 2,
      title: "Start New Chat",
      description: "Click + New Chat to start a new interaction.",
      image: "/assets/ai-assistant/new-chat.png",
      imageAlt: "New Chat button",
    },
    {
      number: 3,
      title: "Select Analysis Option",
      description: "Select the Analysis option from the top-right corner.",
      image: "/assets/ai-assistant/analysis-mode.png",
      imageAlt: "Analysis option",
    },
    {
      number: 4,
      title: "Upload Document",
      description: "Upload the document you want to analyze by clicking Upload Document or dragging and dropping the file.",
      image: "/assets/ai-assistant/upload-pdf.png",
      imageAlt: "Document upload",
    },
    {
      number: 5,
      title: "Enter Analysis Request",
      description: "In the message box, enter your analysis request, such as: 'Summarize this document', 'Identify key clauses and obligations', 'Highlight potential legal risks', 'Explain important legal terms used'.",
      imageAlt: "Analysis input",
    },
    {
      number: 6,
      title: "Send and Review Insights",
      description: "Click the Send icon. The AI Assistant analyzes the uploaded document and provides structured insights such as document summary, key clauses and sections, risks or red flags, and important observations.",
      imageAlt: "Analysis results",
      expectedOutcome: "You receive comprehensive analysis of the document with key insights, risks, and important observations.",
      isLast: true,
    },
  ],
};
