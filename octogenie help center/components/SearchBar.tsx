"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Icons } from "@/lib/icons";
import { search } from "@/lib/search";
import { SearchResult } from "@/lib/types";


export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Perform search when query changes
  useEffect(() => {
    if (query.trim().length > 0) {
      try {
        const searchResults = search(query);
        setResults(searchResults);
        setSelectedIndex(0);
      } catch (error) {
        console.error("Search error:", error);
        setResults([]);
      }
    } else {
      setResults([]);
    }
  }, [query]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(true);
        setTimeout(() => inputRef.current?.focus(), 0);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
        setQuery("");
        setResults([]);
        inputRef.current?.blur();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  // Handle keyboard navigation in results
  useEffect(() => {
    if (!isOpen || results.length === 0) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : prev));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
      } else if (e.key === "Enter" && results[selectedIndex]) {
        e.preventDefault();
        handleResultClick(results[selectedIndex]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, results, selectedIndex]);

  // Scroll selected result into view
  useEffect(() => {
    if (resultsRef.current && selectedIndex >= 0) {
      const selectedElement = resultsRef.current.children[selectedIndex] as HTMLElement;
      if (selectedElement) {
        selectedElement.scrollIntoView({ block: "nearest", behavior: "smooth" });
      }
    }
  }, [selectedIndex]);

  const handleResultClick = (result: SearchResult) => {
    setIsOpen(false);
    setQuery("");
    setResults([]);

    try {
      // Navigate to the result
      if (result.href.includes("#")) {
        // Link with hash - split and navigate
        const [path, hash] = result.href.split("#");
        const fullPath = path || "/";

        // Use window.location for hash navigation to ensure it works
        if (path === window.location.pathname || path === "") {
          // Same page, just scroll to hash
          window.location.hash = hash;
          setTimeout(() => {
            const element = document.querySelector(`#${hash}`);
            if (element) {
              element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }, 100);
        } else {
          // Different page, navigate first
          router.push(fullPath);
          setTimeout(() => {
            window.location.hash = hash;
            setTimeout(() => {
              const element = document.querySelector(`#${hash}`);
              if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }, 300);
          }, 100);
        }
      } else {
        // Regular link - navigate using Next.js router
        router.push(result.href);
      }
    } catch (error) {
      console.error("Navigation error:", error);
      // Fallback to window.location
      window.location.href = result.href;
    }
  };

  const getResultIcon = (type: SearchResult["type"]) => {
    switch (type) {
      case "page":
        return <Icons.FileText className="w-4 h-4" />;
      case "guide":
        return <Icons.BookOpen className="w-4 h-4" />;
      case "step":
        return <Icons.List className="w-4 h-4" />;
      case "quick-action":
        return <Icons.Zap className="w-4 h-4" />;
      case "workflow":
        return <Icons.Workflow className="w-4 h-4" />;
      default:
        return <Icons.Search className="w-4 h-4" />;
    }
  };

  const getResultTypeLabel = (type: SearchResult["type"]) => {
    switch (type) {
      case "page":
        return "Page";
      case "guide":
        return "Guide";
      case "step":
        return "Step";
      case "quick-action":
        return "Quick Action";
      case "workflow":
        return "Workflow";
      default:
        return "";
    }
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-2xl">
      <div className="relative">
        <Icons.Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search guides, steps, and pages..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
          className="w-full pl-12 pr-20 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
          {query && (
            <button
              onClick={() => {
                setQuery("");
                setResults([]);
                inputRef.current?.focus();
              }}
              className="text-gray-400 hover:text-gray-600"
            >
              <Icons.X className="w-4 h-4" />
            </button>
          )}
          <kbd className="px-2 py-1 text-xs font-semibold text-gray-500 bg-gray-100 border border-gray-300 rounded">
            ⌘K
          </kbd>
        </div>
      </div>

      {/* Search Results Dropdown */}
      {isOpen && query.trim().length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl z-50 max-h-96 overflow-y-auto">
          {results.length > 0 ? (
            <div ref={resultsRef} className="py-2">
              {results.map((result, index) => (
                <button
                  key={`${result.href}-${index}`}
                  onClick={() => handleResultClick(result)}
                  className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors ${index === selectedIndex ? "bg-gray-50" : ""
                    }`}
                  onMouseEnter={() => setSelectedIndex(index)}
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 text-gray-400">{getResultIcon(result.type)}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-gray-900 truncate">
                          {result.title}
                        </span>
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                          {getResultTypeLabel(result.type)}
                        </span>
                      </div>
                      {result.description && (
                        <p className="text-sm text-gray-600 line-clamp-1">
                          {result.description}
                        </p>
                      )}
                      {result.section && (
                        <p className="text-xs text-gray-500 mt-1">
                          {result.section}
                          {result.module && ` • ${result.module}`}
                        </p>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="px-4 py-8 text-center text-gray-500">
              <Icons.Search className="w-8 h-8 mx-auto mb-2 text-gray-400" />
              <p>No results found for "{query}"</p>
              <p className="text-sm mt-1">Try different keywords</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
