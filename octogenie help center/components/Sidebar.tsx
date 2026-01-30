"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icons } from "@/lib/icons";
import { navigation } from "@/lib/content";

export default function Sidebar() {
  const pathname = usePathname();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpand = (title: string) => {
    setExpandedItems((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <div className="hidden md:block w-64 bg-white border-r border-gray-200 h-screen fixed left-0 top-0 overflow-y-auto">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-2 mb-1">
          <Icons.Scale className="w-6 h-6 text-primary" />
          <span className="font-semibold text-lg text-gray-900">
            OctoGenie
          </span>
        </div>
        <p className="text-sm text-gray-500">Help Center</p>
      </div>

      <nav className="p-4 space-y-1">
        {navigation.map((item) => {
          const hasChildren = item.children && item.children.length > 0;
          const isExpanded = expandedItems.includes(item.title);
          const active = isActive(item.href);
          const IconComponent = item.icon
            ? Icons[item.icon as keyof typeof Icons]
            : null;

          return (
            <div key={item.title}>
              <div className="flex items-center">
                <Link
                  href={item.href}
                  className={`flex-1 flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    active
                      ? "bg-primary-light text-primary"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {IconComponent && (
                    <IconComponent className="w-5 h-5" />
                  )}
                  <span>{item.title}</span>
                </Link>
                {hasChildren && (
                  <button
                    onClick={() => toggleExpand(item.title)}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    {isExpanded ? (
                      <Icons.ChevronUp className="w-4 h-4 text-gray-500" />
                    ) : (
                      <Icons.ChevronDown className="w-4 h-4 text-gray-500" />
                    )}
                  </button>
                )}
              </div>
              {hasChildren && isExpanded && (
                <div className="ml-8 mt-1 space-y-1">
                  {item.children?.map((child) => (
                    <Link
                      key={child.title}
                      href={child.href}
                      className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                        pathname === child.href
                          ? "text-primary font-medium bg-primary-light"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      {child.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 bg-white">
        <p className="text-sm font-medium text-gray-700 mb-1">Need help?</p>
        <a
          href="mailto:support@octogenie.com"
          className="text-sm text-primary hover:underline"
        >
          support@octogenie.com
        </a>
      </div>
    </div>
  );
}
