"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BookOpen,
  Play,
  Clock,
  User,
  Star,
  TrendingUp,
  Heart,
  FileText,
  Languages,
  Moon,
  Volume2,
  ChevronLeft,
  Headphones,
} from "lucide-react";

interface TextItem {
  id: string;
  title: string;
  author: string;
  category: string;
  categoryId: string;
  duration: string;
  lessons: number;
  description: string;
  rating: number;
  listeners: number;
}

const featuredTexts: TextItem[] = [
  {
    id: "1",
    title: "كِتَابُ التَّوْحِيد",
    author: "الشَّيْخُ مُحَمَّدُ بْنُ عَبْدِ الوَهَّابِ",
    category: "العَقِيدَة",
    categoryId: "aqeedah",
    duration: "30:45",
    lessons: 25,
    description: "كتاب عظيم في باب التوحيد، يُعَدُّ من أهم المتون في بيان عقيدة أهل السنة والجماعة",
    rating: 4.9,
    listeners: 15420,
  },
  {
    id: "2",
    title: "العُقْدَةُ النَّفِيسَةُ",
    author: "الإِمَامُ ابْنُ أَبِي زَيْدٍ القَيْرَوَانِيُّ",
    category: "الفِقْه",
    categoryId: "fiqh",
    duration: "45:30",
    lessons: 40,
    description: "متن فقهي مالكي شامل لأبواب الفقه الإسلامي على مذهب الإمام مالك",
    rating: 4.8,
    listeners: 12350,
  },
  {
    id: "3",
    title: "الأَرْبَعُونَ النَّوَوِيَّةُ",
    author: "الإِمَامُ النَّوَوِيُّ",
    category: "الحَدِيث",
    categoryId: "hadith",
    duration: "25:15",
    lessons: 42,
    description: "مجموعة من الأحاديث النبوية الشريفة في أصول الدين وقواعد الإسلام",
    rating: 5.0,
    listeners: 28900,
  },
  {
    id: "4",
    title: "آجُرُّومِيَّةُ",
    author: "الشَّيْخُ مُحَمَّدُ بْنُ آجُرُّومٍ",
    category: "اللُّغَة العَرَبِيَّة",
    categoryId: "arabic",
    duration: "20:00",
    lessons: 30,
    description: "متن مختصر في علم النحو، يُعَدُّ من أهم المتون للمبتدئين في علم العربية",
    rating: 4.7,
    listeners: 18900,
  },
  {
    id: "5",
    title: "الوَاسِطِيَّةُ",
    author: "شَيْخُ الإِسْلَامِ ابْنُ تَيْمِيَّةَ",
    category: "العَقِيدَة",
    categoryId: "aqeedah",
    duration: "35:20",
    lessons: 20,
    description: "رسالة جامعة في بيان عقيدة أهل السنة والجماعة، من أهم مصنفات شيخ الإسلام",
    rating: 4.9,
    listeners: 16780,
  },
  {
    id: "6",
    title: "بُلُوغُ المَرَامِ",
    author: "الحَافِظُ ابْنُ حَجَرٍ العَسْقَلَانِيُّ",
    category: "الحَدِيث",
    categoryId: "hadith",
    duration: "55:45",
    lessons: 80,
    description: "كتاب جامع في أحاديث الأحكام، مرتب على أبواب الفقه",
    rating: 4.9,
    listeners: 22100,
  },
];

const categories = [
  {
    id: "aqeedah",
    name: "العَقِيدَة",
    nameEn: "Aqeedah",
    icon: Heart,
    count: 45,
    color: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
  },
  {
    id: "fiqh",
    name: "الفِقْه",
    nameEn: "Fiqh",
    icon: BookOpen,
    count: 68,
    color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  },
  {
    id: "hadith",
    name: "الحَدِيث",
    nameEn: "Hadith",
    icon: FileText,
    count: 32,
    color: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  },
  {
    id: "arabic",
    name: "اللُّغَة العَرَبِيَّة",
    nameEn: "Arabic Language",
    icon: Languages,
    count: 28,
    color: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
  },
];

const scholars = [
  {
    id: "1",
    name: "الشَّيْخُ عَبْدُ العَزِيزِ بْنُ بَازٍ",
    texts: 25,
    listeners: 45000,
  },
  {
    id: "2",
    name: "الشَّيْخُ مُحَمَّدُ بْنُ صَالِحٍ العُثَيْمِينُ",
    texts: 32,
    listeners: 52000,
  },
  {
    id: "3",
    name: "الشَّيْخُ صَالِحُ بْنُ فَوْزَانَ الفَوْزَانُ",
    texts: 18,
    listeners: 35000,
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("featured");

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 p-8 md:p-12">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold arabic-title text-foreground mb-4">
            مَرْحَباً بِكُمْ فِي مُتُونٍ عِلْمِيَّةٍ
          </h1>
          <p className="text-lg text-muted-foreground arabic-text max-w-2xl mb-6">
            مَنَصَّةٌ مُتَخَصِّصَةٌ فِي اسْتِضَافَةِ التَّسْجِيلَاتِ الصَّوْتِيَّةِ لِلْمُتُونِ الْعِلْمِيَّةِ الْإِسْلَامِيَّةِ
            وَفْقَ مَنْهَجِ أَهْلِ السُّنَّةِ وَالْجَمَاعَةِ
          </p>
          <div className="flex flex-wrap gap-3">
            <Button size="lg" className="gap-2">
              <Headphones className="h-5 w-5" />
              <span className="arabic-text">ابْدَأِ الاسْتِمَاعَ</span>
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <BookOpen className="h-5 w-5" />
              <span className="arabic-text">تَصَفَّحِ الْمُتُونَ</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold arabic-title">الأَقْسَام</h2>
          <Button variant="ghost" className="gap-1">
            <span className="arabic-text">الْكُلُّ</span>
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={category.id}
                className="card-hover cursor-pointer group"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 rounded-2xl ${category.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold arabic-title text-lg mb-1">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {category.nameEn}
                  </p>
                  <Badge variant="secondary" className="arabic-text">
                    {category.count} مَتْنًا
                  </Badge>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="space-y-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3 max-w-md">
            <TabsTrigger value="featured" className="arabic-text">
              الْمُمَيَّزَة
            </TabsTrigger>
            <TabsTrigger value="recent" className="arabic-text">
              الْجَدِيدَة
            </TabsTrigger>
            <TabsTrigger value="popular" className="arabic-text">
              الْأَكْثَرُ شُهْرَةً
            </TabsTrigger>
          </TabsList>

          <TabsContent value="featured" className="mt-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {featuredTexts.map((text) => (
                <Card key={text.id} className="card-hover group">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <Badge variant="outline" className="arabic-text">
                        {text.category}
                      </Badge>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Star className="h-4 w-4" />
                      </Button>
                    </div>
                    <CardTitle className="arabic-title text-lg leading-relaxed">
                      {text.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground arabic-text line-clamp-2">
                      {text.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="h-4 w-4" />
                      <span className="arabic-text truncate">{text.author}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>{text.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Volume2 className="h-4 w-4 text-muted-foreground" />
                          <span className="arabic-text">{text.lessons} دُرُوسٍ</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-primary">
                        <Star className="h-4 w-4 fill-current" />
                        <span>{text.rating}</span>
                      </div>
                    </div>
                    <Button className="w-full gap-2">
                      <Play className="h-4 w-4" />
                      <span className="arabic-text">اسْتَمِعِ الآنَ</span>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="recent" className="mt-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {featuredTexts.slice(0, 4).map((text) => (
                <Card key={text.id} className="card-hover group">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <Badge variant="outline" className="arabic-text">
                        {text.category}
                      </Badge>
                      <Badge className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 arabic-text">
                        جَدِيد
                      </Badge>
                    </div>
                    <CardTitle className="arabic-title text-lg leading-relaxed">
                      {text.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="h-4 w-4" />
                      <span className="arabic-text truncate">{text.author}</span>
                    </div>
                    <Button className="w-full gap-2">
                      <Play className="h-4 w-4" />
                      <span className="arabic-text">اسْتَمِعِ الآنَ</span>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="popular" className="mt-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {featuredTexts
                .sort((a, b) => b.listeners - a.listeners)
                .slice(0, 6)
                .map((text, index) => (
                  <Card key={text.id} className="card-hover group">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <Badge variant="outline" className="arabic-text">
                          {text.category}
                        </Badge>
                        <div className="flex items-center gap-1 text-primary font-bold">
                          <TrendingUp className="h-4 w-4" />
                          <span>#{index + 1}</span>
                        </div>
                      </div>
                      <CardTitle className="arabic-title text-lg leading-relaxed">
                        {text.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <User className="h-4 w-4" />
                        <span className="arabic-text truncate">{text.author}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-1">
                          <Headphones className="h-4 w-4 text-muted-foreground" />
                          <span className="arabic-text">
                            {(text.listeners / 1000).toFixed(1)}k مُسْتَمِعٍ
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-primary">
                          <Star className="h-4 w-4 fill-current" />
                          <span>{text.rating}</span>
                        </div>
                      </div>
                      <Button className="w-full gap-2">
                        <Play className="h-4 w-4" />
                        <span className="arabic-text">اسْتَمِعِ الآنَ</span>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Scholars Section */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold arabic-title">الشُّيُوخُ</h2>
          <Button variant="ghost" className="gap-1">
            <span className="arabic-text">الْكُلُّ</span>
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {scholars.map((scholar) => (
            <Card key={scholar.id} className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <User className="h-7 w-7 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold arabic-title truncate">
                      {scholar.name}
                    </h3>
                    <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                      <span className="arabic-text">{scholar.texts} مَتْنًا</span>
                      <span className="arabic-text">
                        {(scholar.listeners / 1000).toFixed(0)}k مُسْتَمِعٍ
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "المُتُونُ", value: "48", icon: BookOpen },
          { label: "التَّسْجِيلَاتُ", value: "213", icon: Volume2 },
          { label: "الشُّيُوخُ", value: "12", icon: User },
          { label: "الْمُسْتَمِعُونَ", value: "150K+", icon: Headphones },
        ].map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <Card key={index} className="bg-muted/30">
              <CardContent className="p-6 text-center">
                <IconComponent className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground arabic-text">
                  {stat.label}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </section>
    </div>
  );
}
