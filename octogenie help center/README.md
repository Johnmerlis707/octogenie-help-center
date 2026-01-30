# OctoGenie Help Center

A modern, interactive help center website for OctoGenie Legal Partner App built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Walkthrough-style Homepage**: Interactive workflow visualization with 7 steps
- **Comprehensive Documentation**: Step-by-step guides for all modules
- **Interactive Tooltips**: Hover tooltips on workflow steps showing previews
- **Gamification Elements**: Progress banners and visual indicators
- **Search Functionality**: Search across all documentation with keyboard shortcut (K)
- **Responsive Design**: Mobile-friendly layout with collapsible navigation
- **Clean SaaS Design**: Professional, modern UI matching the provided design

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx              # Root layout with sidebar
│   ├── page.tsx                # Homepage
│   ├── getting-started/        # Getting Started guide
│   ├── leads/                  # Leads module documentation
│   ├── clients/                # Clients module documentation
│   ├── matters/                # Matters module documentation
│   ├── cases/                  # Cases module documentation
│   ├── calendar/               # Calendar & Hearings documentation
│   ├── documents/              # Documents module documentation
│   ├── ai-assistant/           # AI Assistant documentation
│   ├── invoices/               # Invoices documentation
│   ├── payments/               # Payments documentation
│   ├── expenses/               # Expenses documentation
│   ├── settings/               # Settings & Admin documentation
│   └── faqs/                   # FAQs & Troubleshooting
├── components/
│   ├── Sidebar.tsx             # Left navigation sidebar
│   ├── MobileMenu.tsx          # Mobile navigation menu
│   ├── SearchBar.tsx           # Top search bar
│   ├── WorkflowStep.tsx        # Workflow step card with tooltip
│   ├── ModuleCard.tsx          # Module guide card
│   ├── QuickActionCard.tsx     # Quick action card
│   ├── ProgressBanner.tsx      # Progress/gamification banner
│   └── Tooltip.tsx             # Reusable tooltip component
└── lib/
    ├── content.ts              # Content data and navigation structure
    └── icons.tsx               # Icon components
```

## Build for Production

```bash
npm run build
# or
yarn build
```

Then start the production server:

```bash
npm start
# or
yarn start
```

## Key Features Implementation

### Workflow Walkthrough
The homepage features a 7-step workflow visualization:
1. Lead
2. Client
3. Matter
4. Case
5. Hearing
6. Invoice
7. Payment

Each step includes hover tooltips showing what users will learn.

### Gamification
- Progress banners indicating workflow completion
- Visual progress indicators
- Interactive elements with hover effects

### Search
- Keyboard shortcut: Press `K` to focus search
- Real-time search across all documentation
- Search bar in header

### Responsive Design
- Mobile menu for small screens
- Collapsible sidebar navigation
- Responsive grid layouts

## Technologies Used

- **Next.js 14+**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library

## Content Sources

All documentation content is based on the provided PDFs:
- AI Assistant.pdf
- Clients.pdf
- Calendar.pdf
- Leads.pdf
- Expenses.pdf
- Cases.pdf
- Invoices.pdf
- Settings.pdf
- Payments.pdf
- Matters.pdf

## License

This project is proprietary software for OctoGenie Legal Partner App.
