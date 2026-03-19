import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { MainLayout } from "@/components/main-layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "مُتُون عِلْمِيَّة | Mutūn ʿIlmiyyah - Islamic Scientific Texts",
  description: "مَنَصَّةٌ مُتَخَصِّصَةٌ فِي اسْتِضَافَةِ التَّسْجِيلَاتِ الصَّوْتِيَّةِ لِلْمُتُونِ الْعِلْمِيَّةِ الْإِسْلَامِيَّةِ وَفْقَ مَنْهَجِ أَهْلِ السُّنَّةِ وَالْجَمَاعَةِ. A dedicated platform for hosting audio recordings of famous Islamic scientific texts according to the methodology of Ahl al-Sunnah wal-Jama'ah.",
  keywords: ["متون علمية", "Mutūn ʿIlmiyyah", "Islamic texts", "عقيدة", "Aqeedah", "فقه", "Fiqh", "حديث", "Hadith", "اللغة العربية", "Arabic Language", "تسجيلات صوتية", "Audio recordings", "أهل السنة والجماعة", "Salafi", "Kitab al-Tawhid", "كتاب التوحيد", "al-Wasitiyyah", "الواسطية", "al-Arbaʿeen al-Nawawiyyah", "الأربعون النووية"],
  authors: [{ name: "Mutūn ʿIlmiyyah Team" }],
  icons: {
    icon: "/mutun-ilmiyyah/logo.svg",
  },
  openGraph: {
    title: "مُتُون عِلْمِيَّة | Islamic Scientific Texts",
    description: "مَنَصَّةٌ مُتَخَصِّصَةٌ فِي اسْتِضَافَةِ التَّسْجِيلَاتِ الصَّوْتِيَّةِ لِلْمُتُونِ الْعِلْمِيَّةِ الْإِسْلَامِيَّةِ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "مُتُون عِلْمِيَّة | Islamic Scientific Texts",
    description: "مَنَصَّةٌ مُتَخَصِّصَةٌ فِي اسْتِضَافَةِ التَّسْجِيلَاتِ الصَّوْتِيَّةِ لِلْمُتُونِ الْعِلْمِيَّةِ الْإِسْلَامِيَّةِ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800&family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <MainLayout>
            {children}
          </MainLayout>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
