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
  BookOpen,
  ChevronDown,
  ChevronLeft,
  Heart,
  Moon,
  Star,
  FileText,
  Languages,
  Volume2,
  Home,
  Bookmark,
  Clock,
  TrendingUp,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  onNavigate?: () => void;
}

interface CategoryItem {
  id: string;
  name: string;
  nameEn: string;
  count: number;
  icon: React.ReactNode;
  subcategories?: {
    id: string;
    name: string;
    count: number;
  }[];
}

const categories: CategoryItem[] = [
  {
    id: "aqeedah",
    name: "العَقِيدَة",
    nameEn: "Aqeedah",
    count: 45,
    icon: <Heart className="h-5 w-5" />,
    subcategories: [
      { id: "tawheed", name: "التَّوْحِيد", count: 15 },
      { id: "imaan", name: "الإِيمَان", count: 12 },
      { id: "nubuwwah", name: "النُّبُوَّة", count: 10 },
      { id: "qadar", name: "القَدَر", count: 8 },
    ],
  },
  {
    id: "fiqh",
    name: "الفِقْه",
    nameEn: "Fiqh",
    count: 68,
    icon: <BookOpen className="h-5 w-5" />,
    subcategories: [
      { id: "taharah", name: "الطَّهَارَة", count: 12 },
      { id: "salah", name: "الصَّلَاة", count: 18 },
      { id: "zakah", name: "الزَّكَاة", count: 10 },
      { id: "sawm", name: "الصِّيَام", count: 14 },
      { id: "hajj", name: "الحَجّ", count: 14 },
    ],
  },
  {
    id: "hadith",
    name: "الحَدِيث",
    nameEn: "Hadith",
    count: 32,
    icon: <FileText className="h-5 w-5" />,
    subcategories: [
      { id: "mustalah", name: "المُصْطَلَح", count: 12 },
      { id: "arbaeen", name: "الأَرْبَعُونَ", count: 10 },
      { id: "bulugh", name: "بُلُوغ المَرَام", count: 10 },
    ],
  },
  {
    id: "arabic",
    name: "اللُّغَة العَرَبِيَّة",
    nameEn: "Arabic Language",
    count: 28,
    icon: <Languages className="h-5 w-5" />,
    subcategories: [
      { id: "nahw", name: "النَّحْو", count: 12 },
      { id: "sarf", name: "الصَّرْف", count: 8 },
      { id: "balaghah", name: "البَلَاغَة", count: 8 },
    ],
  },
  {
    id: "seerah",
    name: "السِّيرَة",
    nameEn: "Seerah",
    count: 18,
    icon: <Moon className="h-5 w-5" />,
  },
  {
    id: "tafsir",
    name: "التَّفْسِير",
    nameEn: "Tafsir",
    count: 22,
    icon: <Star className="h-5 w-5" />,
  },
];

const quickLinks = [
  { id: "home", name: "الرئيسية", icon: <Home className="h-4 w-4" /> },
  { id: "recent", name: "المستمع مؤخراً", icon: <Clock className="h-4 w-4" /> },
  { id: "saved", name: "المحفوظات", icon: <Bookmark className="h-4 w-4" /> },
  { id: "popular", name: "الأكثر استماعاً", icon: <TrendingUp className="h-4 w-4" /> },
];

export function Sidebar({ onNavigate }: SidebarProps) {
  const [expandedCategories, setExpandedCategories] = useState<string[]>(["aqeedah", "fiqh"]);
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

  return (
    <div className="h-full flex flex-col bg-sidebar">
      <ScrollArea className="flex-1">
        <div className="p-4 space-y-6">
          {/* Quick Links Section */}
          <div className="space-y-2">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-2">
              روابط سريعة
            </h3>
            <nav className="space-y-1">
              {quickLinks.map((link) => (
                <Button
                  key={link.id}
                  variant="ghost"
                  className={cn(
                    "w-full justify-start gap-3 text-right arabic-text",
                    activeCategory === link.id && "bg-accent text-accent-foreground"
                  )}
                  onClick={() => handleCategoryClick(link.id)}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </Button>
              ))}
            </nav>
          </div>

          <Separator />

          {/* Categories Section */}
          <div className="space-y-2">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-2">
              الأقسام
            </h3>
            <nav className="space-y-1">
              {categories.map((category) => (
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
                        activeCategory === category.id && "bg-accent text-accent-foreground"
                      )}
                      onClick={() => handleCategoryClick(category.id)}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-primary">{category.icon}</span>
                        <div className="flex flex-col items-start">
                          <span className="font-medium">{category.name}</span>
                          <span className="text-xs text-muted-foreground">
                            {category.nameEn}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full">
                          {category.count}
                        </span>
                        {category.subcategories && (
                          <ChevronDown
                            className={cn(
                              "h-4 w-4 transition-transform duration-200",
                              expandedCategories.includes(category.id) && "rotate-180"
                            )}
                          />
                        )}
                      </div>
                    </Button>
                  </CollapsibleTrigger>
                  {category.subcategories && (
                    <CollapsibleContent>
                      <div className="mr-4 mt-1 space-y-1 border-r-2 border-border pr-3">
                        {category.subcategories.map((sub) => (
                          <Button
                            key={sub.id}
                            variant="ghost"
                            size="sm"
                            className="w-full justify-between text-right arabic-text"
                            onClick={() => onNavigate?.()}
                          >
                            <span className="flex items-center gap-2">
                              <ChevronLeft className="h-3 w-3 text-muted-foreground" />
                              {sub.name}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {sub.count}
                            </span>
                          </Button>
                        ))}
                      </div>
                    </CollapsibleContent>
                  )}
                </Collapsible>
              ))}
            </nav>
          </div>

          <Separator />

          {/* Audio Statistics */}
          <div className="space-y-2">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-2">
              إحصائيات
            </h3>
            <div className="bg-muted/50 rounded-lg p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Volume2 className="h-4 w-4 text-primary" />
                  <span className="text-sm arabic-text">التسجيلات</span>
                </div>
                <span className="text-sm font-bold">213</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-primary" />
                  <span className="text-sm arabic-text">المتون</span>
                </div>
                <span className="text-sm font-bold">48</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-primary" />
                  <span className="text-sm arabic-text">الشيوخ</span>
                </div>
                <span className="text-sm font-bold">12</span>
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
