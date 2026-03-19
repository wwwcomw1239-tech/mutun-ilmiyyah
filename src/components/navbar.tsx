"use client";

import { useState, useSyncExternalStore } from "react";
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
} from "lucide-react";
import { useTheme } from "next-themes";
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

// Empty subscription for SSR compatibility
const emptySubscribe = () => () => {};

export function Navbar({ onMenuClick }: NavbarProps) {
  const { theme, setTheme } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  
  // Check if we're on the client side using useSyncExternalStore
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-sidebar/95 backdrop-blur supports-[backdrop-filter]:bg-sidebar/80 border-b border-border z-50">
      <div className="h-full px-4 flex items-center justify-between gap-4">
        {/* Right Section - Logo & Menu */}
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={onMenuClick}
          >
            <Menu className="h-5 w-5" />
          </Button>

          <a href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg arabic-title">
                م
              </span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold arabic-title text-foreground">
                مُتُون عِلْمِيَّة
              </h1>
              <p className="text-xs text-muted-foreground">
                Mutūn &apos;Ilmiyyah
              </p>
            </div>
          </a>
        </div>

        {/* Center Section - Search */}
        <div className="flex-1 max-w-xl hidden md:block">
          <div className="relative">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="ابحث عن متن أو كتاب..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pr-10 pl-4 bg-background border-border focus:border-primary"
            />
          </div>
        </div>

        {/* Left Section - Actions */}
        <div className="flex items-center gap-2">
          {/* Mobile Search Button */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Search className="h-5 w-5" />
          </Button>

          {/* Theme Toggle */}
          {isClient && (
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          )}

          {/* Quick Navigation */}
          <nav className="hidden sm:flex items-center gap-1">
            <Button variant="ghost" size="sm" asChild>
              <a href="/">
                <Home className="h-4 w-4 ml-1" />
                <span className="arabic-text">الرئيسية</span>
              </a>
            </Button>
            <Button variant="ghost" size="sm">
              <Bookmark className="h-4 w-4 ml-1" />
              <span className="arabic-text">المحفوظات</span>
            </Button>
          </nav>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-primary text-primary-foreground arabic-text">
                    ط
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              <DropdownMenuItem>
                <User className="h-4 w-4 ml-2" />
                <span className="arabic-text">الملف الشخصي</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Bookmark className="h-4 w-4 ml-2" />
                <span className="arabic-text">المكتبة</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="h-4 w-4 ml-2" />
                <span className="arabic-text">الإعدادات</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <span className="arabic-text text-muted-foreground">
                  تسجيل الدخول
                </span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
