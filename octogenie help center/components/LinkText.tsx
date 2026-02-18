"use client";

import Link from "next/link";
import { useMemo } from "react";

interface LinkTextProps {
  children: string;
  className?: string;
}

// Mapping of patterns to their corresponding links (ordered by priority - longer phrases first)
const linkPatterns: Array<{ pattern: RegExp; href: string }> = [
  // Multi-word phrases (must come first)
  { pattern: /\bconvert to client\b/gi, href: "/leads#convert" },
  { pattern: /\badd a lead\b/gi, href: "/leads#add-lead" },
  { pattern: /\bcreate a matter\b/gi, href: "/matters#create-matter" },
  { pattern: /\bcreate a case\b/gi, href: "/cases#manual-entry" },
  { pattern: /\bschedule hearing\b/gi, href: "/calendar#add-hearing" },
  { pattern: /\bcreate invoice\b/gi, href: "/invoices#create-invoice" },
  { pattern: /\brecord payment\b/gi, href: "/payments#record-payment" },
  { pattern: /\btime tracking\b/gi, href: "/time-tracking" },
  { pattern: /\bai assistant\b/gi, href: "/ai-assistant" },
  
  // Single words
  { pattern: /\bLeads\b/g, href: "/leads" },
  { pattern: /\bleads\b/g, href: "/leads" },
  { pattern: /\blead\b/g, href: "/leads" },
  { pattern: /\bClients\b/g, href: "/clients" },
  { pattern: /\bclients\b/g, href: "/clients" },
  { pattern: /\bclient\b/g, href: "/clients" },
  { pattern: /\bMatters\b/g, href: "/matters" },
  { pattern: /\bmatters\b/g, href: "/matters" },
  { pattern: /\bmatter\b/g, href: "/matters" },
  { pattern: /\bCases\b/g, href: "/cases" },
  { pattern: /\bcases\b/g, href: "/cases" },
  { pattern: /\bcase\b/g, href: "/cases" },
  { pattern: /\bCalendar\b/g, href: "/calendar" },
  { pattern: /\bcalendar\b/g, href: "/calendar" },
  { pattern: /\bHearings\b/g, href: "/calendar" },
  { pattern: /\bhearings\b/g, href: "/calendar" },
  { pattern: /\bhearing\b/g, href: "/calendar" },
  { pattern: /\bTasks\b/g, href: "/tasks" },
  { pattern: /\btasks\b/g, href: "/tasks" },
  { pattern: /\btask\b/g, href: "/tasks" },
  { pattern: /\bInvoices\b/g, href: "/invoices" },
  { pattern: /\binvoices\b/g, href: "/invoices" },
  { pattern: /\binvoice\b/g, href: "/invoices" },
  { pattern: /\bPayments\b/g, href: "/payments" },
  { pattern: /\bpayments\b/g, href: "/payments" },
  { pattern: /\bpayment\b/g, href: "/payments" },
  { pattern: /\bExpenses\b/g, href: "/expenses" },
  { pattern: /\bexpenses\b/g, href: "/expenses" },
  { pattern: /\bexpense\b/g, href: "/expenses" },
  { pattern: /\bDocuments\b/g, href: "/documents" },
  { pattern: /\bdocuments\b/g, href: "/documents" },
  { pattern: /\bdocument\b/g, href: "/documents" },
  { pattern: /\bSettings\b/g, href: "/settings" },
  { pattern: /\bsettings\b/g, href: "/settings" },
  { pattern: /\bFAQs\b/g, href: "/faqs" },
  { pattern: /\bfaqs\b/g, href: "/faqs" },
];

export default function LinkText({ children, className = "" }: LinkTextProps) {
  const content = useMemo(() => {
    if (!children) return null;

    const text = children;
    const matches: Array<{ start: number; end: number; href: string; text: string }> = [];

    // Find all matches and their positions
    linkPatterns.forEach(({ pattern, href }) => {
      // Create a fresh regex for each pattern to avoid state issues
      const regex = new RegExp(pattern.source, pattern.flags);
      let match;
      
      // Reset regex lastIndex to avoid issues with global flags
      regex.lastIndex = 0;
      
      while ((match = regex.exec(text)) !== null) {
        const matchStart = match.index || 0;
        const matchEnd = matchStart + match[0].length;
        
        // Check if this match overlaps with an existing match (prefer longer matches)
        const overlaps = matches.some(
          (m) =>
            (matchStart >= m.start && matchStart < m.end) ||
            (matchEnd > m.start && matchEnd <= m.end)
        );

        if (!overlaps) {
          matches.push({
            start: matchStart,
            end: matchEnd,
            href,
            text: match[0],
          });
        }
        
        // Prevent infinite loop with global regex
        if (!pattern.global) break;
        if (match.index === regex.lastIndex) {
          regex.lastIndex++;
        }
      }
    });

    // Sort matches by start position
    matches.sort((a, b) => a.start - b.start);

    // Build result array
    const result: (string | JSX.Element)[] = [];
    let lastIndex = 0;
    let keyCounter = 0;

    matches.forEach((match) => {
      // Add text before match
      if (match.start > lastIndex) {
        result.push(text.substring(lastIndex, match.start));
      }

      // Add link
      result.push(
        <Link
          key={`link-${keyCounter++}`}
          href={match.href}
          className="text-primary hover:underline font-medium transition-colors"
        >
          {match.text}
        </Link>
      );

      lastIndex = match.end;
    });

    // Add remaining text
    if (lastIndex < text.length) {
      result.push(text.substring(lastIndex));
    }

    // If no matches, return original text
    if (result.length === 0) {
      return <span className={className}>{children}</span>;
    }

    return <span className={className}>{result}</span>;
  }, [children, className]);

  return content;
}
