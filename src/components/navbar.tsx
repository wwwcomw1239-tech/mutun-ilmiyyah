"use client";

import { useSyncExternalStore } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Menu,
  Search,
  Moon,
  Sun,
  Home,
  Bookmark,
  Settings,
  User,
  Library,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useAudioStore } from "@/stores/audio-store";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback } from "./ui/avatar";

interface NavbarProps {
  onMenuClick: () => void;
}

const emptySubscribe = () => () => {};

export function Navbar({ onMenuClick }: NavbarProps) {
  const { theme, setTheme } = useTheme();
  const { searchQuery, setSearchQuery } = useAudioStore();

  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white/95 dark:bg-[#1e293b]/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 dark:supports-[backdrop-filter]:bg-[#1e293b]/80 border-b border-[#e2e8f0] dark:border-[#334155] z-50">
      <div className="h-full px-4 flex items-center justify-between gap-4">
        {/* Right Section - Logo & Menu */}
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-[#64748b] dark:text-[#94a3b8] hover:bg-[#f1f5f9] dark:hover:bg-[#334155]"
            onClick={onMenuClick}
          >
            <Menu className="h-5 w-5" />
          </Button>

          <a href="/" className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#d4af37] to-[#b8860b] flex items-center justify-center">
              <Library className="h-6 w-6 text-[#0f172a]" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold arabic-title text-[#0f172a] dark:text-white">
                مُتُون عِلْمِيَّة
              </h1>
              <p className="text-xs text-[#d4af37] font-medium">
                Mutūn ʿIlmiyyah
              </p>
            </div>
          </a>
        </div>

        {/* Center Section - Search */}
        <div className="flex-1 max-w-xl hidden md:block">
          <div className="relative">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#64748b]" />
            <Input
              type="text"
              placeholder="ابْحَثْ عَنْ مَتْنٍ أَوْ كِتَابٍ..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pr-10 pl-4 bg-[#f8fafc] dark:bg-[#0f172a] border-[#e2e8f0] dark:border-[#334155] focus:border-[#d4af37] dark:focus:border-[#d4af37] text-[#0f172a] dark:text-white placeholder:text-[#94a3b8] arabic-text"
            />
          </div>
        </div>

        {/* Left Section - Actions */}
        <div className="flex items-center gap-2">
          {/* Mobile Search Button */}
          <Button variant="ghost" size="icon" className="md:hidden text-[#64748b] dark:text-[#94a3b8]">
            <Search className="h-5 w-5" />
          </Button>

          {/* Theme Toggle */}
          {isClient && (
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-[#64748b] dark:text-[#94a3b8] hover:bg-[#f1f5f9] dark:hover:bg-[#334155]"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-[#d4af37]" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          )}

          {/* Quick Navigation */}
          <nav className="hidden sm:flex items-center gap-1">
            <Button variant="ghost" size="sm" asChild className="gap-1.5 text-[#475569] dark:text-[#94a3b8] hover:bg-[#f1f5f9] dark:hover:bg-[#334155]">
              <a href="/">
                <Home className="h-4 w-4" />
                <span className="arabic-text">الرئيسية</span>
              </a>
            </Button>
            <Button variant="ghost" size="sm" className="gap-1.5 text-[#475569] dark:text-[#94a3b8] hover:bg-[#f1f5f9] dark:hover:bg-[#334155]">
              <Bookmark className="h-4 w-4" />
              <span className="arabic-text">المحفوظات</span>
            </Button>
          </nav>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-[#f1f5f9] dark:hover:bg-[#334155]">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-gradient-to-br from-[#0f172a] to-[#334155] text-[#d4af37] arabic-text">
                    ط
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48 bg-white dark:bg-[#1e293b] border-[#e2e8f0] dark:border-[#334155]">
              <DropdownMenuItem className="arabic-text text-[#475569] dark:text-[#94a3b8] focus:bg-[#f1f5f9] dark:focus:bg-[#334155]">
                <User className="h-4 w-4 ml-2 text-[#d4af37]" />
                الملف الشخصي
              </DropdownMenuItem>
              <DropdownMenuItem className="arabic-text text-[#475569] dark:text-[#94a3b8] focus:bg-[#f1f5f9] dark:focus:bg-[#334155]">
                <Bookmark className="h-4 w-4 ml-2 text-[#d4af37]" />
                المكتبة
              </DropdownMenuItem>
              <DropdownMenuItem className="arabic-text text-[#475569] dark:text-[#94a3b8] focus:bg-[#f1f5f9] dark:focus:bg-[#334155]">
                <Settings className="h-4 w-4 ml-2 text-[#d4af37]" />
                الإعدادات
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-[#e2e8f0] dark:bg-[#334155]" />
              <DropdownMenuItem className="arabic-text text-muted-foreground focus:bg-[#f1f5f9] dark:focus:bg-[#334155]">
                تسجيل الدخول
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
