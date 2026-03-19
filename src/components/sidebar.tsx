"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import {
  Home,
  Clock,
  Bookmark,
  TrendingUp,
  Heart,
  BookOpen,
  FileText,
  Languages,
  Scale,
  ChevronDown,
  ChevronLeft,
  Volume2,
  Star,
  Library,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { categories, mutoon } from "@/data/mutoon";

interface SidebarProps {
  onNavigate?: () => void;
}

const categoryIcons: Record<string, React.ElementType> = {
  aqeedah: Heart,
  hadith: BookOpen,
  arabic: Languages,
  fiqh: Scale,
};

const quickLinks = [
  { id: "home", name: "الرئيسية", icon: Home },
  { id: "recent", name: "المستمع مؤخراً", icon: Clock },
  { id: "saved", name: "المحفوظات", icon: Bookmark },
  { id: "popular", name: "الأكثر استماعاً", icon: TrendingUp },
];

export function Sidebar({ onNavigate }: SidebarProps) {
  const [expandedCategories, setExpandedCategories] = useState<string[]>(["aqeedah", "hadith"]);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
    onNavigate?.();
  };

  // Calculate totals
  const totalTracks = mutoon.reduce((acc, m) => {
    if (m.hasChapters && m.chapters) {
      return acc + m.chapters.reduce((cAcc, c) => cAcc + c.tracks.length, 0);
    }
    return acc + 1;
  }, 0);

  const totalChapters = mutoon.reduce((acc, m) => acc + m.totalChapters, 0);

  return (
    <div className="h-full flex flex-col bg-white dark:bg-[#1e293b] border-l border-[#e2e8f0] dark:border-[#334155]">
      <ScrollArea className="flex-1">
        <div className="p-4 space-y-6">
          {/* Quick Links Section */}
          <div className="space-y-2">
            <h3 className="text-xs font-semibold text-[#64748b] uppercase tracking-wider px-2 arabic-text">
              روابط سريعة
            </h3>
            <nav className="space-y-1">
              {quickLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <Button
                    key={link.id}
                    variant="ghost"
                    className={cn(
                      "w-full justify-start gap-3 text-right arabic-text",
                      activeCategory === link.id
                        ? "bg-[#fef3c7] dark:bg-[#d4af37]/20 text-[#92400e] dark:text-[#d4af37]"
                        : "text-[#475569] dark:text-[#94a3b8] hover:bg-[#f1f5f9] dark:hover:bg-[#334155] hover:text-[#0f172a] dark:hover:text-white"
                    )}
                    onClick={() => handleCategoryClick(link.id)}
                  >
                    <IconComponent className="h-4 w-4" />
                    <span>{link.name}</span>
                  </Button>
                );
              })}
            </nav>
          </div>

          <Separator className="bg-[#e2e8f0] dark:bg-[#334155]" />

          {/* Categories Section */}
          <div className="space-y-2">
            <h3 className="text-xs font-semibold text-[#64748b] uppercase tracking-wider px-2 arabic-text">
              الأقسام
            </h3>
            <nav className="space-y-1">
              {categories.map((category) => {
                const IconComponent = categoryIcons[category.id] || FileText;
                const categoryMutoon = mutoon.filter(m => m.categoryId === category.id);

                return (
                  <Collapsible
                    key={category.id}
                    open={expandedCategories.includes(category.id)}
                    onOpenChange={() => toggleCategory(category.id)}
                  >
                    <CollapsibleTrigger asChild>
                      <Button
                        variant="ghost"
                        className={cn(
                          "w-full justify-between text-right arabic-text",
                          activeCategory === category.id
                            ? "bg-[#fef3c7] dark:bg-[#d4af37]/20 text-[#92400e] dark:text-[#d4af37]"
                            : "text-[#475569] dark:text-[#94a3b8] hover:bg-[#f1f5f9] dark:hover:bg-[#334155] hover:text-[#0f172a] dark:hover:text-white"
                        )}
                        onClick={() => handleCategoryClick(category.id)}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-[#d4af37]">
                            <IconComponent className="h-5 w-5" />
                          </span>
                          <div className="flex flex-col items-start">
                            <span className="font-medium">{category.nameAr}</span>
                            <span className="text-xs text-[#64748b]">{category.name}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs bg-[#f1f5f9] dark:bg-[#334155] text-[#64748b] px-2 py-0.5 rounded-full">
                            {categoryMutoon.length}
                          </span>
                          <ChevronDown
                            className={cn(
                              "h-4 w-4 transition-transform duration-200",
                              expandedCategories.includes(category.id) && "rotate-180"
                            )}
                          />
                        </div>
                      </Button>
                    </CollapsibleTrigger>
                    {categoryMutoon.length > 0 && (
                      <CollapsibleContent>
                        <div className="mr-4 mt-1 space-y-1 border-r-2 border-[#d4af37]/30 pr-3">
                          {categoryMutoon.map((matn) => (
                            <Button
                              key={matn.id}
                              variant="ghost"
                              size="sm"
                              className="w-full justify-between text-right arabic-text text-[#475569] dark:text-[#94a3b8] hover:bg-[#f1f5f9] dark:hover:bg-[#334155]"
                              onClick={() => onNavigate?.()}
                            >
                              <span className="flex items-center gap-2">
                                <ChevronLeft className="h-3 w-3 text-[#d4af37]" />
                                <span className="truncate max-w-40">{matn.titleAr}</span>
                              </span>
                            </Button>
                          ))}
                        </div>
                      </CollapsibleContent>
                    )}
                  </Collapsible>
                );
              })}
            </nav>
          </div>

          <Separator className="bg-[#e2e8f0] dark:bg-[#334155]" />

          {/* Audio Statistics */}
          <div className="space-y-2">
            <h3 className="text-xs font-semibold text-[#64748b] uppercase tracking-wider px-2 arabic-text">
              إحصائيات
            </h3>
            <div className="bg-[#f8fafc] dark:bg-[#0f172a]/50 rounded-xl p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Volume2 className="h-4 w-4 text-[#d4af37]" />
                  <span className="text-sm arabic-text text-[#475569] dark:text-[#94a3b8]">التسجيلات</span>
                </div>
                <span className="text-sm font-bold text-[#0f172a] dark:text-white">{totalTracks}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Library className="h-4 w-4 text-[#d4af37]" />
                  <span className="text-sm arabic-text text-[#475569] dark:text-[#94a3b8]">المتون</span>
                </div>
                <span className="text-sm font-bold text-[#0f172a] dark:text-white">{mutoon.length}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-[#d4af37]" />
                  <span className="text-sm arabic-text text-[#475569] dark:text-[#94a3b8]">الأبواب</span>
                </div>
                <span className="text-sm font-bold text-[#0f172a] dark:text-white">{totalChapters}</span>
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
