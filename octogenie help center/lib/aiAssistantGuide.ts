import { GuideSection } from "@/lib/types";

export const qaGuide: GuideSection = {
  id: "qa",
  title: "Asking Legal Questions (Q&A)",
  subtitle: "Get quick answers to legal questions",
  description: "The Q&A feature in the OctoGenie AI Assistant is used to get quick answers to legal questions related to matters, procedures, and terms.",
  estimatedTime: "2 min",
  totalSteps: 5,
  steps: [
    {
      number: 1,
      title: "Access AI Assistant",
      description: "Log in to the OctoGenie platform. From the left-hand menu, click on 'AI Assistant'.",
      image: "/assets/ai-assistant/AI%20Assistant%20-%20Option%20in%20the%20left%20menu.png",
      imageAlt: "AI Assistant navigation",
    },
    {
      number: 2,
      title: "Start New Chat",
      description: "Click '+ New Chat' to start a new interaction session.",
      image: "/assets/ai-assistant/AI%20Assistant%20-%20New%20Chat.png",
      imageAlt: "New Chat button",
    },
    {
      number: 3,
      title: "Select Q&A Mode",
      description: "Click on the 'Q&A' option available at the top-right corner of the AI Assistant screen.",
      image: "/assets/ai-assistant/AI%20Assistant%20-%20QA.png",
      imageAlt: "Q&A mode toggle",
    },
    {
      number: 4,
      title: "Enter Your Question",
      description: "Type your legal query in the message box. Example: 'How can I verify if there are any litigations against a property?'",
      imageAlt: "Question input",
    },
    {
      number: 5,
      title: "Review Answer",
      description: "Click the Send icon. The AI provides structured, easy-to-understand answers instantly.",
      imageAlt: "AI response",
      expectedOutcome: "You receive instant, structured legal guidance and procedural answers.",
      isLast: true,
    },
  ],
};

export const draftGuide: GuideSection = {
  id: "draft",
  title: "Drafting Documents with AI",
  subtitle: "Create legal documents quickly",
  description: "Use the Draft feature to create legal drafts such as notices, applications, and letters efficiently.",
  estimatedTime: "5 min",
  totalSteps: 7,
  steps: [
    {
      number: 1,
      title: "Navigate and Start",
      description: "Go to AI Assistant and click '+ New Chat'. Select the 'Draft' option from the top-right corner filters.",
      image: "/assets/ai-assistant/AI%20Assistant%20-%20Draft.png",
      imageAlt: "Draft mode selection",
    },
    {
      number: 2,
      title: "Enter Drafting Requirement",
      description: "State what document you need. Example: 'Draft a legal notice for non-payment of dues.'",
      imageAlt: "Drafting prompt",
    },
    {
      number: 3,
      title: "Generate Draft",
      description: "Click the Send icon and review the AI-generated draft displayed on your screen.",
      imageAlt: "Generated draft view",
    },
    {
      number: 4,
      title: "Listen to Content",
      description: "Use the 'Listen' option on the bottom-left side to hear the drafted content read aloud.",
      imageAlt: "Listen toggle",
    },
    {
      number: 5,
      title: "Download as PDF",
      description: "Click 'Download PDF' (available on the bottom-left) to save the draft for offline sharing or record-keeping.",
      imageAlt: "Download button",
    },
    {
      number: 6,
      title: "Edit Requirement",
      description: "You can draft various types: Legal notices, Contracts, Petitions, Replies, or Explanations.",
      imageAlt: "Draft types",
    },
    {
      number: 7,
      title: "Finalize and Use",
      description: "Edit or customize the draft as required before final use in your practice.",
      imageAlt: "Completion",
      expectedOutcome: "A complete legal document ready for professional review and customization.",
      isLast: true,
    },
  ],
};

export const analyzeGuide: GuideSection = {
  id: "analyze",
  title: "Analyzing Documents (Analysis)",
  subtitle: "Extract insights from legal files",
  description: "Identify key points, risks, and observations in PDF documents accurately and quickly.",
  estimatedTime: "5 min",
  totalSteps: 7,
  steps: [
    {
      number: 1,
      title: "Enter Analysis Mode",
      description: "In the AI Assistant module, click '+ New Chat' and select the 'Analysis' tab at the top-right.",
      image: "/assets/ai-assistant/AI%20Assistant%20-%20Analysis.png",
      imageAlt: "Analysis mode toggle",
    },
    {
      number: 2,
      title: "Upload PDF",
      description: "Click 'Upload PDF' and select the document you want to analyze from your system.",
      image: "/assets/ai-assistant/AI%20Assistant%20-%20Upload%20PDF%20(Analysis).png",
      imageAlt: "PDF upload button",
    },
    {
      number: 3,
      title: "Enter Analysis Request",
      description: "Type your request: 'Summarize this document', 'Identify key clauses', or 'Explain legal terms used'.",
      imageAlt: "Analysis prompt",
    },
    {
      number: 4,
      title: "Generate Insights",
      description: "Click Send. The AI Assistant analyzes the document for summaries, key clauses, and risks.",
      imageAlt: "AI insights feedback",
    },
    {
      number: 5,
      title: "Review Results",
      description: "Review structured insights: Document summary, Key clauses/sections, and Risks or red flags.",
      imageAlt: "Insight summary view",
    },
    {
      number: 6,
      title: "Refine Analysis",
      description: "Ask follow-up questions for deeper insights or compare clauses to support decision-making.",
      imageAlt: "Iterative analysis",
    },
    {
      number: 7,
      title: "Final Result",
      description: "Benefit from reduced manual effort and improved accuracy in document review.",
      imageAlt: "Final analysis result",
      expectedOutcome: "Comprehensive understanding of complex legal texts with highlighted risks.",
      isLast: true,
    },
  ],
};

export const securityGuide: GuideSection = {
  id: "security",
  title: "AI Data Safety & Privacy",
  subtitle: "Secure legal assistance",
  description: "OctoGenie prioritizes user privacy and confidentiality in all AI interactions.",
  estimatedTime: "1 min",
  totalSteps: 1,
  steps: [
    {
      number: 1,
      title: "Is my data safe?",
      description: "Yes, your data is completely safe. OctoGenie prioritizes user privacy, data security, and confidentiality while delivering AI-powered assistance. Documents and chat histories are protected within a secure environment.",
      image: "/assets/ai-assistant/AI%20Assistant%20-%20Option%20in%20the%20left%20menu.png",
      imageAlt: "Privacy and security indicator",
      expectedOutcome: "Confident use of AI tools for sensitive legal work.",
      isLast: true,
    },
  ],
};
