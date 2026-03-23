// Search functionality for the help center

import { moduleGuides, navigation, workflowSteps, quickActions } from "./content";
import { SearchResult, GuideSection } from "./types";
import { allGuides, guidePathFallbackMap } from "./guidesRegistry";

function getPageUrlForGuide(guide: GuideSection): string {
  const matchesNavigation = navigation
    .flatMap((item) => item.children ?? [])
    .find((child) => child.href.endsWith(`#${guide.id}`));

  if (matchesNavigation) {
    return matchesNavigation.href.split("#")[0];
  }

  if (guidePathFallbackMap[guide.id]) {
    return guidePathFallbackMap[guide.id];
  }

  const moduleFromId = guide.id.split("-")[0];
  return `/${moduleFromId}`;
}

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
    const pageUrl = getPageUrlForGuide(guide);
    const moduleName = pageUrl.replace("/", "") || "home";

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
