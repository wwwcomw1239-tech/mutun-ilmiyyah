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
  title: "مُتُون عِلْمِيَّة | Mutūn 'Ilmiyyah - Islamic Scientific Texts",
  description: "منصة متخصصة في استضافة التسجيلات الصوتية للمتون العلمية الإسلامية وفق منهج أهل السنة والجماعة (السلفية). A dedicated platform for hosting audio recordings of famous Islamic scientific texts according to the methodology of Ahl al-Sunnah wal-Jama'ah (Salafi).",
  keywords: ["متون علمية", "Mutūn 'Ilmiyyah", "Islamic texts", "عقيدة", "Aqeedah", "فقه", "Fiqh", "حديث", "Hadith", "اللغة العربية", "Arabic Language", "تسجيلات صوتية", "Audio recordings", "أهل السنة والجماعة", "Salafi"],
  authors: [{ name: "Mutūn 'Ilmiyyah Team" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "مُتُون عِلْمِيَّة | Islamic Scientific Texts",
    description: "منصة متخصصة في استضافة التسجيلات الصوتية للمتون العلمية الإسلامية",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "مُتُون عِلْمِيَّة | Islamic Scientific Texts",
    description: "منصة متخصصة في استضافة التسجيلات الصوتية للمتون العلمية الإسلامية",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground font-[family-name:var(--font-arabic)]`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
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
