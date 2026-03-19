"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  BookOpen,
  Play,
  Clock,
  User,
  Download,
  Headphones,
  Layers,
  ChevronLeft,
  Library,
  Volume2,
  Heart,
  FileText,
  Languages,
  Scale,
  Check,
  ArrowDownToLine,
  Package,
} from "lucide-react";
import { mutoon, categories, getAllTracks, type Matn, type AudioTrack } from "@/data/mutoon";

// Icon mapping for categories
const categoryIcons: Record<string, React.ElementType> = {
  aqeedah: Heart,
  hadith: BookOpen,
  arabic: Languages,
  fiqh: Scale,
};

export default function Home() {
  const [activeTab, setActiveTab] = useState("library");
  const [playingTrack, setPlayingTrack] = useState<AudioTrack | null>(null);
  const [audioQuality, setAudioQuality] = useState<"lq" | "hq">("lq"); // Default: Low Quality
  const [downloadingAll, setDownloadingAll] = useState<string | null>(null);

  const handlePlayTrack = (track: AudioTrack) => {
    setPlayingTrack(track);
  };

  // Download single track - Direct link method (no blob, instant browser download)
  const handleDownloadTrack = (track: AudioTrack) => {
    // Always use LQ (low quality) as default for downloads
    const url = track.lqUrl || track.hqUrl;
    const filename = `${track.titleAr}.mp3`;
    
    // Create hidden anchor with download attribute
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    // Alternative: use window.location.assign for direct download
    // This triggers browser's native download manager immediately
    // window.location.assign(url);
  };

  // Bulk download - opens all downloads via native browser download manager
  const handleDownloadAll = (matn: Matn) => {
    setDownloadingAll(matn.id);
    const tracks = getAllTracks(matn);
    
    // Use direct link approach - no blob, instant download
    tracks.forEach((track, index) => {
      // Always use LQ as default
      const url = track.lqUrl || track.hqUrl;
      const filename = `${track.titleAr}.mp3`;
      
      setTimeout(() => {
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        a.style.display = "none";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }, index * 300); // Stagger downloads by 300ms
    });
    
    setTimeout(() => setDownloadingAll(null), tracks.length * 300 + 500);
  };

  const formatDuration = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    if (hours > 0) {
      return `${hours}:${mins.toString().padStart(2, "0")}`;
    }
    return `${mins} د`;
  };

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] border border-[#334155] p-8 md:p-12">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#d4af37] rounded-full blur-3xl" />
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#d4af37] to-[#b8860b] flex items-center justify-center">
              <Library className="h-7 w-7 text-[#0f172a]" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold arabic-heading text-white">
                مُتُون عِلْمِيَّة
              </h1>
              <p className="text-[#d4af37] font-medium">Mutūn ʿIlmiyyah</p>
            </div>
          </div>
          <p className="text-lg text-[#94a3b8] arabic-text max-w-2xl mb-6">
            مَنَصَّةٌ مُتَخَصِّصَةٌ فِي اسْتِضَافَةِ التَّسْجِيلَاتِ الصَّوْتِيَّةِ لِلْمُتُونِ الْعِلْمِيَّةِ الْإِسْلَامِيَّةِ
            وَفْقَ مَنْهَجِ أَهْلِ السُّنَّةِ وَالْجَمَاعَةِ
          </p>
          <div className="flex flex-wrap gap-3">
            <Button size="lg" className="btn-gold gap-2">
              <Headphones className="h-5 w-5" />
              <span className="arabic-text">ابْدَأِ الاسْتِمَاعَ</span>
            </Button>
            <Button variant="outline" size="lg" className="gap-2 border-[#334155] text-[#d4af37] hover:bg-[#1e293b]">
              <Library className="h-5 w-5" />
              <span className="arabic-text">تَصَفَّحِ المَكْتَبَةَ</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "المُتُونُ", value: mutoon.length, icon: BookOpen },
          { label: "الأَبْوَابُ", value: mutoon.reduce((acc, m) => acc + m.totalChapters, 0), icon: Layers },
          { label: "الشُّيُوخُ", value: 2, icon: User },
          { label: "الأَقْسَامُ", value: categories.length, icon: Library },
        ].map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <Card key={index} className="bg-[#0f172a]/5 dark:bg-[#0f172a]/50 border-[#e2e8f0] dark:border-[#334155]">
              <CardContent className="p-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0f172a] to-[#1e293b] flex items-center justify-center">
                  <IconComponent className="h-6 w-6 text-[#d4af37]" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#0f172a] dark:text-white">{stat.value}</p>
                  <p className="text-sm text-[#64748b] arabic-text">{stat.label}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </section>

      {/* Main Content Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="bg-[#0f172a]/5 dark:bg-[#1e293b] p-1 rounded-xl">
          <TabsTrigger value="library" className="arabic-text gap-2 data-[state=active]:bg-white dark:data-[state=active]:bg-[#0f172a] data-[state=active]:text-[#d4af37]">
            <Library className="h-4 w-4" />
            المَكْتَبَةُ
          </TabsTrigger>
          <TabsTrigger value="categories" className="arabic-text gap-2 data-[state=active]:bg-white dark:data-[state=active]:bg-[#0f172a] data-[state=active]:text-[#d4af37]">
            <Layers className="h-4 w-4" />
            الأَقْسَامُ
          </TabsTrigger>
          <TabsTrigger value="scholars" className="arabic-text gap-2 data-[state=active]:bg-white dark:data-[state=active]:bg-[#0f172a] data-[state=active]:text-[#d4af37]">
            <User className="h-4 w-4" />
            الشُّيُوخُ
          </TabsTrigger>
        </TabsList>

        {/* Library Tab */}
        <TabsContent value="library" className="space-y-6">
          <div className="grid gap-6">
            {mutoon.map((matn) => {
              const IconComponent = categoryIcons[matn.categoryId] || BookOpen;
              return (
                <Card key={matn.id} className="card-hover border-[#e2e8f0] dark:border-[#334155] overflow-hidden">
                  <CardHeader className="pb-4 bg-gradient-to-l from-[#fef3c7]/20 to-transparent dark:from-[#d4af37]/10">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                          matn.categoryId === "aqeedah" ? "bg-[#fef3c7] dark:bg-[#d4af37]/20" :
                          matn.categoryId === "hadith" ? "bg-[#e2e8f0] dark:bg-[#334155]" :
                          matn.categoryId === "arabic" ? "bg-[#dbeafe] dark:bg-[#1e40af]/20" :
                          "bg-[#d1fae5] dark:bg-[#047857]/20"
                        }`}>
                          <IconComponent className={`h-7 w-7 ${
                            matn.categoryId === "aqeedah" ? "text-[#92400e] dark:text-[#d4af37]" :
                            matn.categoryId === "hadith" ? "text-[#0f172a] dark:text-[#94a3b8]" :
                            matn.categoryId === "arabic" ? "text-[#1e40af] dark:text-[#60a5fa]" :
                            "text-[#047857] dark:text-[#34d399]"
                          }`} />
                        </div>
                        <div>
                          <CardTitle className="arabic-title text-xl text-[#0f172a] dark:text-white">
                            {matn.titleAr}
                          </CardTitle>
                          <p className="text-sm text-[#64748b] arabic-text">{matn.authorAr}</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="arabic-text border-[#d4af37] text-[#92400e] dark:text-[#d4af37]">
                        {matn.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-[#475569] dark:text-[#94a3b8] arabic-text">
                      {matn.descriptionAr}
                    </p>
                    
                    <div className="flex items-center gap-6 text-sm text-[#64748b]">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-[#d4af37]" />
                        <span className="arabic-text">{matn.scholarAr}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-[#d4af37]" />
                        <span className="arabic-text">{matn.totalDuration}</span>
                      </div>
                      {matn.hasChapters && (
                        <div className="flex items-center gap-2">
                          <Layers className="h-4 w-4 text-[#d4af37]" />
                          <span className="arabic-text">{matn.totalChapters} بَابًا</span>
                        </div>
                      )}
                    </div>

                    {/* Quality Toggle */}
                    <div className="flex items-center gap-3">
                      <span className="text-sm arabic-text text-[#64748b]">جَوْدَةُ الصَّوْتِ:</span>
                      <div className="flex gap-1 p-1 bg-[#f1f5f9] dark:bg-[#1e293b] rounded-lg">
                        <Button
                          size="sm"
                          variant={audioQuality === "lq" ? "default" : "ghost"}
                          className={`arabic-text h-8 ${audioQuality === "lq" ? "bg-[#0f172a] dark:bg-[#d4af37] dark:text-[#0f172a]" : ""}`}
                          onClick={() => setAudioQuality("lq")}
                        >
                          عادية
                        </Button>
                        <Button
                          size="sm"
                          variant={audioQuality === "hq" ? "default" : "ghost"}
                          className={`arabic-text h-8 ${audioQuality === "hq" ? "bg-[#0f172a] dark:bg-[#d4af37] dark:text-[#0f172a]" : ""}`}
                          onClick={() => setAudioQuality("hq")}
                        >
                          عالية
                        </Button>
                      </div>
                    </div>

                    {/* Chapters Accordion */}
                    {matn.hasChapters && matn.chapters && (
                      <Accordion type="single" collapsible className="w-full">
                        {matn.chapters.map((chapter) => (
                          <AccordionItem key={chapter.id} value={chapter.id} className="border-[#e2e8f0] dark:border-[#334155]">
                            <AccordionTrigger className="arabic-title text-[#0f172a] dark:text-white hover:text-[#d4af37]">
                              <div className="flex items-center gap-3">
                                <Badge variant="secondary" className="bg-[#0f172a] text-white dark:bg-[#d4af37] dark:text-[#0f172a]">
                                  {chapter.number}
                                </Badge>
                                <span>{chapter.titleAr}</span>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="space-y-2 pt-2">
                                {chapter.tracks.map((track) => (
                                  <div
                                    key={track.id}
                                    className="flex items-center justify-between p-3 rounded-lg bg-[#f8fafc] dark:bg-[#0f172a] hover:bg-[#fef3c7]/30 dark:hover:bg-[#d4af37]/10 transition-colors"
                                  >
                                    <div className="flex items-center gap-3">
                                      <Button
                                        size="icon"
                                        className="h-10 w-10 rounded-full bg-[#0f172a] hover:bg-[#1e293b] dark:bg-[#d4af37] dark:hover:bg-[#b8860b]"
                                        onClick={() => handlePlayTrack(track)}
                                      >
                                        <Play className="h-4 w-4 text-white dark:text-[#0f172a]" />
                                      </Button>
                                      <div>
                                        <p className="font-medium arabic-text text-[#0f172a] dark:text-white">
                                          {track.titleAr}
                                        </p>
                                        <div className="flex items-center gap-3 text-xs text-[#64748b]">
                                          <span>{track.duration}</span>
                                          <span>{audioQuality === "lq" ? track.size?.lq : track.size?.hq}</span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <Button
                                        size="sm"
                                        variant="ghost"
                                        className="gap-1 arabic-text"
                                        onClick={() => handleDownloadTrack(track)}
                                      >
                                        <Download className="h-4 w-4" />
                                        تَحْمِيل
                                      </Button>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    )}

                    {/* Single Track */}
                    {!matn.hasChapters && matn.singleTrack && (
                      <div className="flex items-center justify-between p-4 rounded-lg bg-[#f8fafc] dark:bg-[#0f172a]">
                        <div className="flex items-center gap-3">
                          <Button
                            size="icon"
                            className="h-12 w-12 rounded-full bg-[#0f172a] hover:bg-[#1e293b] dark:bg-[#d4af37] dark:hover:bg-[#b8860b]"
                            onClick={() => handlePlayTrack(matn.singleTrack!)}
                          >
                            <Play className="h-5 w-5 text-white dark:text-[#0f172a]" />
                          </Button>
                          <div>
                            <p className="font-medium arabic-text text-[#0f172a] dark:text-white">
                              {matn.singleTrack.titleAr}
                            </p>
                            <div className="flex items-center gap-3 text-sm text-[#64748b]">
                              <span>{matn.singleTrack.duration}</span>
                              <span>{audioQuality === "lq" ? matn.singleTrack.size?.lq : matn.singleTrack.size?.hq}</span>
                            </div>
                          </div>
                        </div>
                        <Button
                          className="btn-gold gap-2"
                          onClick={() => handleDownloadTrack(matn.singleTrack!)}
                        >
                          <Download className="h-4 w-4" />
                          <span className="arabic-text">تَحْمِيل</span>
                        </Button>
                      </div>
                    )}

                    {/* Download All Button */}
                    <div className="pt-2">
                      <Button
                        variant="outline"
                        className="w-full gap-2 border-[#d4af37] text-[#92400e] dark:text-[#d4af37] hover:bg-[#fef3c7] dark:hover:bg-[#d4af37]/10"
                        onClick={() => handleDownloadAll(matn)}
                        disabled={downloadingAll === matn.id}
                      >
                        {downloadingAll === matn.id ? (
                          <>
                            <div className="h-4 w-4 border-2 border-[#d4af37] border-t-transparent rounded-full animate-spin" />
                            <span className="arabic-text">جَارِي التَّحْمِيلُ...</span>
                          </>
                        ) : (
                          <>
                            <Package className="h-4 w-4" />
                            <span className="arabic-text">تَحْمِيلُ المَتْنِ كَامِلًا</span>
                          </>
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        {/* Categories Tab */}
        <TabsContent value="categories" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {categories.map((category) => {
              const IconComponent = categoryIcons[category.id] || BookOpen;
              const categoryMutoon = mutoon.filter(m => m.categoryId === category.id);
              
              return (
                <Card key={category.id} className="card-hover border-[#e2e8f0] dark:border-[#334155]">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                        category.id === "aqeedah" ? "bg-[#fef3c7] dark:bg-[#d4af37]/20" :
                        category.id === "hadith" ? "bg-[#e2e8f0] dark:bg-[#334155]" :
                        category.id === "arabic" ? "bg-[#dbeafe] dark:bg-[#1e40af]/20" :
                        "bg-[#d1fae5] dark:bg-[#047857]/20"
                      }`}>
                        <IconComponent className={`h-8 w-8 ${
                          category.id === "aqeedah" ? "text-[#92400e] dark:text-[#d4af37]" :
                          category.id === "hadith" ? "text-[#0f172a] dark:text-[#94a3b8]" :
                          category.id === "arabic" ? "text-[#1e40af] dark:text-[#60a5fa]" :
                          "text-[#047857] dark:text-[#34d399]"
                        }`} />
                      </div>
                      <div>
                        <CardTitle className="arabic-title text-xl text-[#0f172a] dark:text-white">
                          {category.nameAr}
                        </CardTitle>
                        <p className="text-sm text-[#64748b]">{category.name}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-[#475569] dark:text-[#94a3b8] arabic-text">
                      {category.descriptionAr}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {categoryMutoon.map((matn) => (
                        <Badge key={matn.id} variant="secondary" className="arabic-text bg-[#f1f5f9] dark:bg-[#334155]">
                          {matn.titleAr}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-[#e2e8f0] dark:border-[#334155]">
                      <span className="text-sm text-[#64748b] arabic-text">
                        {categoryMutoon.length} مَتْنًا
                      </span>
                      <Button variant="ghost" size="sm" className="gap-1 text-[#d4af37]">
                        <span className="arabic-text">عَرْضُ الكُلِّ</span>
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        {/* Scholars Tab */}
        <TabsContent value="scholars" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {mutoon.reduce((acc: { id: string; nameAr: string; bio: string; mutoon: Matn[] }[], matn) => {
              const existing = acc.find(s => s.id === matn.scholar);
              if (existing) {
                existing.mutoon.push(matn);
              } else {
                acc.push({
                  id: matn.scholar,
                  nameAr: matn.scholarAr,
                  bio: matn.authorBio,
                  mutoon: [matn],
                });
              }
              return acc;
            }, []).map((scholar) => (
              <Card key={scholar.id} className="card-hover border-[#e2e8f0] dark:border-[#334155]">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0f172a] to-[#334155] flex items-center justify-center flex-shrink-0">
                      <User className="h-8 w-8 text-[#d4af37]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold arabic-title text-lg text-[#0f172a] dark:text-white">
                        {scholar.nameAr}
                      </h3>
                      <p className="text-sm text-[#64748b] arabic-text mt-1">{scholar.bio}</p>
                      <div className="flex items-center gap-4 mt-3">
                        <Badge variant="secondary" className="arabic-text bg-[#d4af37]/20 text-[#92400e] dark:text-[#d4af37]">
                          {scholar.mutoon.length} مَتْنًا
                        </Badge>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {scholar.mutoon.map((m) => (
                          <span key={m.id} className="text-xs arabic-text text-[#64748b]">
                            {m.titleAr}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
