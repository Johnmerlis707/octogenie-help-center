export interface GuideStepData {
    number: number;
    title: string;
    description: string;
    image?: string;
    imageAlt?: string;
    actionButton?: {
        text: string;
        description?: string;
    };
    expectedOutcome?: string;
    tips?: string[];
    isLast?: boolean;
}

export interface GuideSection {
    id: string;
    title: string;
    subtitle?: string;
    description?: string;
    estimatedTime?: string;
    totalSteps: number;
    steps: GuideStepData[];
}

export interface WorkflowStep {
    number: number;
    title: string;
    description: string;
    color: string;
    icon: string;
    preview: string;
    href: string;
}

export interface ModuleGuide {
    id: string;
    title: string;
    description: string;
    icon: string;
    href: string;
}

export interface QuickAction {
    title: string;
    icon: string;
    href: string;
}

export interface NavItem {
    title: string;
    href: string;
    icon?: string;
    children?: NavItem[];
}

export interface SearchResult {
    type: "page" | "guide" | "step" | "quick-action" | "workflow";
    title: string;
    description: string;
    href: string;
    section?: string;
    module?: string;
}
