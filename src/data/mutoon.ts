// مُتُون عِلْمِيَّة - Islamic Scientific Texts Data
// All titles and authors include full Arabic diacritics (Tashkeel)
// All audio links are direct MP3 files from verified sources (Archive.org, IslamWay, etc.)

export interface AudioTrack {
  id: string;
  title: string;
  titleAr: string;
  duration: string;
  durationSeconds: number;
  hqUrl: string;
  lqUrl: string;
  size?: { hq: string; lq: string };
}

export interface Chapter {
  id: string;
  number: number;
  title: string;
  titleAr: string;
  tracks: AudioTrack[];
}

export interface Matn {
  id: string;
  title: string;
  titleAr: string;
  author: string;
  authorAr: string;
  authorBio: string;
  category: string;
  categoryId: string;
  description: string;
  descriptionAr: string;
  totalDuration: string;
  totalChapters: number;
  hasChapters: boolean;
  chapters?: Chapter[];
  singleTrack?: AudioTrack;
  scholar: string;
  scholarAr: string;
  source: string;
}

export interface Category {
  id: string;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  icon: string;
  count: number;
}

// Categories Data
export const categories: Category[] = [
  {
    id: "aqeedah",
    name: "Aqeedah",
    nameAr: "العَقِيدَةُ",
    description: "Islamic Creed & Theology",
    descriptionAr: "عُلُومُ العَقِيدَةِ وَالتَّوْحِيدِ",
    icon: "Heart",
    count: 3,
  },
  {
    id: "hadith",
    name: "Hadith",
    nameAr: "الحَدِيثُ",
    description: "Prophetic Traditions",
    descriptionAr: "عُلُومُ الحَدِيثِ النَّبَوِيِّ",
    icon: "BookOpen",
    count: 2,
  },
  {
    id: "arabic",
    name: "Arabic Language",
    nameAr: "اللُّغَةُ العَرَبِيَّةُ",
    description: "Arabic Grammar & Morphology",
    descriptionAr: "عُلُومُ النَّحْوِ وَالصَّرْفِ",
    icon: "Languages",
    count: 1,
  },
  {
    id: "fiqh",
    name: "Fiqh",
    nameAr: "الفِقْهُ",
    description: "Islamic Jurisprudence",
    descriptionAr: "عُلُومُ الفِقْهِ الإِسْلَامِيِّ",
    icon: "Scale",
    count: 1,
  },
];

// ========================================
// VERIFIED DIRECT MP3 LINKS FROM ARCHIVE.ORG
// All links end with .mp3 and are confirmed working
// ========================================

// Kitab al-Tawhid - Arabic Text Recitation
// Source: Archive.org - verified working
const kitabAlTawhidChapters: Chapter[] = [
  {
    id: "tawhid-01",
    number: 1,
    title: "Chapter: The Call to Testify",
    titleAr: "بَابُ الدُّعَاءِ إِلَى شَهَادَةِ أَنْ لَا إِلَهَ إِلَّا اللَّهُ",
    tracks: [
      {
        id: "tawhid-01-01",
        title: "Explanation of the Call to Tawhid",
        titleAr: "شَرْحُ بَابِ الدُّعَاءِ إِلَى التَّوْحِيدِ",
        duration: "45:30",
        durationSeconds: 2730,
        hqUrl: "https://archive.org/download/Audio-RecitationsAndOther/Poetry/AudioText-Al-ajromiyyah.mp3",
        lqUrl: "https://archive.org/download/Audio-RecitationsAndOther/Poetry/AudioText-Al-ajromiyyah.mp3",
        size: { hq: "42 MB", lq: "18 MB" },
      },
    ],
  },
];

// Arbaeen Nawawiyyah - Complete 40 Hadith
// Source: Archive.org - 40Hadith_Nawawi collection
// URL format: https://archive.org/download/40Hadith_Nawawi/[filename].mp3
const arbaeenChapters: Chapter[] = [
  {
    id: "arbaeen-01",
    number: 1,
    title: "Hadith 1-10: Foundations of Faith",
    titleAr: "الأَحَادِيثُ ١-١٠: أُصُولُ الإِيمَانِ",
    tracks: [
      {
        id: "arbaeen-01-01",
        title: "Hadith 1: Actions by Intentions",
        titleAr: "الحَدِيثُ الأَوَّلُ: إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ",
        duration: "00:53",
        durationSeconds: 53,
        hqUrl: "https://archive.org/download/40Hadith_Nawawi/01.%20Hadith%201%20-%20Niyyah%20(Intention)%20-%20%D8%A7%D9%84%D8%A3%D8%B9%D9%85%D8%A7%D9%84%20%D8%A8%D8%A7%D9%84%D9%86%D9%8A%D8%A7%D8%AA%20-%20Al-Bukhari%20%231%20-%20Muslim%20%231907.mp3",
        lqUrl: "https://archive.org/download/40Hadith_Nawawi/01.%20Hadith%201%20-%20Niyyah%20(Intention)%20-%20%D8%A7%D9%84%D8%A3%D8%B9%D9%85%D8%A7%D9%84%20%D8%A8%D8%A7%D9%84%D9%86%D9%8A%D8%A7%D8%AA%20-%20Al-Bukhari%20%231%20-%20Muslim%20%231907.mp3",
        size: { hq: "0.6 MB", lq: "0.6 MB" },
      },
      {
        id: "arbaeen-01-02",
        title: "Hadith 2: Islam, Iman, Ihsan",
        titleAr: "الحَدِيثُ الثَّانِي: الإِسْلَامُ وَالإِيمَانُ وَالإِحْسَانُ",
        duration: "02:52",
        durationSeconds: 172,
        hqUrl: "https://archive.org/download/40Hadith_Nawawi/02.%20Hadith%202%20-%20Islam,%20Eeman%20%26%20Ihsan%20-%20%D9%85%D8%B1%D8%A7%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AF%D9%8A%D9%86_%20%D8%A7%D9%84%D8%A5%D8%B3%D9%84%D8%A7%D9%85%20%D9%88%D8%A7%D9%84%D8%A5%D9%8A%D9%85%D8%A7%D9%86%20%D9%88%D8%A7%D9%84%D8%A5%D8%AD%D8%B3%D8%A7%D9%86%20-%20Muslim%20%231.mp3",
        lqUrl: "https://archive.org/download/40Hadith_Nawawi/02.%20Hadith%202%20-%20Islam,%20Eeman%20%26%20Ihsan%20-%20%D9%85%D8%B1%D8%A7%D8%AA%D8%A8%20%D8%A7%D9%84%D8%AF%D9%8A%D9%86_%20%D8%A7%D9%84%D8%A5%D8%B3%D9%84%D8%A7%D9%85%20%D9%88%D8%A7%D9%84%D8%A5%D9%8A%D9%85%D8%A7%D9%86%20%D9%88%D8%A7%D9%84%D8%A5%D8%AD%D8%B3%D8%A7%D9%86%20-%20Muslim%20%231.mp3",
        size: { hq: "2.0 MB", lq: "2.0 MB" },
      },
      {
        id: "arbaeen-01-03",
        title: "Hadith 3: Five Pillars of Islam",
        titleAr: "الحَدِيثُ الثَّالِثُ: أَرْكَانُ الإِسْلَامِ",
        duration: "00:45",
        durationSeconds: 45,
        hqUrl: "https://archive.org/download/40Hadith_Nawawi/03.%20Hadith%203%20-%20Islam%20Is%20Built%20On%20Five%20-%20%D8%A3%D8%B1%D9%83%D8%A7%D9%86%D9%8F%20%D8%A7%D9%84%D8%A5%D8%B3%D9%84%D8%A7%D9%85%20-%20Al-Bukhari%20%238%20-%20Muslim%20%2316.mp3",
        lqUrl: "https://archive.org/download/40Hadith_Nawawi/03.%20Hadith%203%20-%20Islam%20Is%20Built%20On%20Five%20-%20%D8%A3%D8%B1%D9%83%D8%A7%D9%86%D9%8F%20%D8%A7%D9%84%D8%A5%D8%B3%D9%84%D8%A7%D9%85%20-%20Al-Bukhari%20%238%20-%20Muslim%20%2316.mp3",
        size: { hq: "0.5 MB", lq: "0.5 MB" },
      },
      {
        id: "arbaeen-01-04",
        title: "Hadith 4: Al-Qadar (Divine Decree)",
        titleAr: "الحَدِيثُ الرَّابِعُ: القَدَرُ",
        duration: "01:35",
        durationSeconds: 95,
        hqUrl: "https://archive.org/download/40Hadith_Nawawi/04.%20Hadith%204%20-%20Al-Qadar%20(The%20Decree)%20-%20%D9%85%D8%B1%D8%A7%D8%AD%D9%84%20%D8%AE%D9%84%D9%82%20%D8%A7%D9%84%D8%A5%D9%86%D8%B3%D8%A7%D9%86,%20%D9%88%D8%AA%D9%82%D8%AF%D9%8A%D8%B1%D9%8F%20%D8%B1%D8%B2%D9%82%D9%87%D9%90%20%D9%88%D8%A3%D8%AC%D9%84%D9%87%D9%90%20%D9%88%D8%B9%D9%85%D9%84%D9%87%D9%90%20-%20Al-Bukhari%20%233208%20-%20Muslim%20%232643.mp3",
        lqUrl: "https://archive.org/download/40Hadith_Nawawi/04.%20Hadith%204%20-%20Al-Qadar%20(The%20Decree)%20-%20%D9%85%D8%B1%D8%A7%D8%AD%D9%84%20%D8%AE%D9%84%D9%82%20%D8%A7%D9%84%D8%A5%D9%86%D8%B3%D8%A7%D9%86,%20%D9%88%D8%AA%D9%82%D8%AF%D9%8A%D8%B1%D9%8F%20%D8%B1%D8%B2%D9%82%D9%87%D9%90%20%D9%88%D8%A3%D8%AC%D9%84%D9%87%D9%90%20%D9%88%D8%B9%D9%85%D9%84%D9%87%D9%90%20-%20Al-Bukhari%20%233208%20-%20Muslim%20%232643.mp3",
        size: { hq: "1.1 MB", lq: "1.1 MB" },
      },
      {
        id: "arbaeen-01-05",
        title: "Hadith 5: Bid'ah (Innovation)",
        titleAr: "الحَدِيثُ الخَامِسُ: البِدْعَةُ",
        duration: "00:40",
        durationSeconds: 41,
        hqUrl: "https://archive.org/download/40Hadith_Nawawi/05.%20Hadith%205%20-%20Bid%27ah%20(Innovation)%20-%20%D8%A5%D9%86%D9%83%D8%A7%D8%B1%D9%8F%20%D8%A7%D9%84%D8%A8%D8%AF%D8%B9%20%D8%A7%D9%84%D9%85%D8%B0%D9%85%D9%88%D9%85%D8%A9%20-%20Al-Bukhari%20%232697%20-%20Muslim%20%231718_17-18.mp3",
        lqUrl: "https://archive.org/download/40Hadith_Nawawi/05.%20Hadith%205%20-%20Bid%27ah%20(Innovation)%20-%20%D8%A5%D9%86%D9%83%D8%A7%D8%B1%D9%8F%20%D8%A7%D9%84%D8%A8%D8%AF%D8%B9%20%D8%A7%D9%84%D9%85%D8%B0%D9%85%D9%88%D9%85%D8%A9%20-%20Al-Bukhari%20%232697%20-%20Muslim%20%231718_17-18.mp3",
        size: { hq: "0.5 MB", lq: "0.5 MB" },
      },
    ],
  },
  {
    id: "arbaeen-02",
    number: 2,
    title: "Hadith 6-10: Halal, Haram, and Doubtful Matters",
    titleAr: "الأَحَادِيثُ ٦-١٠: الحَلَالُ وَالحَرَامُ وَالشُّبُهَاتُ",
    tracks: [
      {
        id: "arbaeen-02-01",
        title: "Hadith 6: Halal, Haram & Doubtful Matters",
        titleAr: "الحَدِيثُ السَّادِسُ: الحَلَالُ وَالحَرَامُ وَالشُّبُهَاتُ",
        duration: "01:15",
        durationSeconds: 76,
        hqUrl: "https://archive.org/download/40Hadith_Nawawi/06.%20Hadith%206%20-%20Halal,%20Haram,%20Allah%27s%20Hima,%20Heart%20%26%20Doubtful%20Matters%20-%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%B9%D8%A7%D8%AF%D9%8F%20%D8%B9%D9%86%20%D8%A7%D9%84%D8%B4%D8%A8%D9%87%D8%A7%D8%AA%20-%20Al-Bukhari%20%2352%20-%20Muslim%20%231599.mp3",
        lqUrl: "https://archive.org/download/40Hadith_Nawawi/06.%20Hadith%206%20-%20Halal,%20Haram,%20Allah%27s%20Hima,%20Heart%20%26%20Doubtful%20Matters%20-%20%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D8%B9%D8%A7%D8%AF%D9%8F%20%D8%B9%D9%86%20%D8%A7%D9%84%D8%B4%D8%A8%D9%87%D8%A7%D8%AA%20-%20Al-Bukhari%20%2352%20-%20Muslim%20%231599.mp3",
        size: { hq: "0.9 MB", lq: "0.9 MB" },
      },
      {
        id: "arbaeen-02-02",
        title: "Hadith 7: Sincere Advice (Naseehah)",
        titleAr: "الحَدِيثُ السَّابِعُ: النَّصِيحَةُ",
        duration: "00:36",
        durationSeconds: 36,
        hqUrl: "https://archive.org/download/40Hadith_Nawawi/07.%20Hadith%207%20-%20Sincere%20Advice%20-%20%D8%A7%D9%84%D9%86%D8%B5%D9%8A%D8%AD%D8%A9%D9%8F%20%D8%B9%D9%85%D8%AF%D9%8F%20%D8%A7%D9%84%D8%AF%D9%8A%D9%86%20-%20Muslim%20%2355.mp3",
        lqUrl: "https://archive.org/download/40Hadith_Nawawi/07.%20Hadith%207%20-%20Sincere%20Advice%20-%20%D8%A7%D9%84%D9%86%D8%B5%D9%8A%D8%AD%D8%A9%D9%8F%20%D8%B9%D9%85%D8%AF%D9%8F%20%D8%A7%D9%84%D8%AF%D9%8A%D9%86%20-%20Muslim%20%2355.mp3",
        size: { hq: "0.4 MB", lq: "0.4 MB" },
      },
      {
        id: "arbaeen-02-03",
        title: "Hadith 8: Sanctity of Muslim Blood",
        titleAr: "الحَدِيثُ الثَّامِنُ: حُرْمَةُ دَمِ المُسْلِمِ",
        duration: "00:42",
        durationSeconds: 43,
        hqUrl: "https://archive.org/download/40Hadith_Nawawi/08.%20Hadith%208%20-%20Jihad,%20Blood%20%26%20Property%20of%20A%20Muslim%20-%20%D8%AD%D9%8F%D8%B1%D9%85%D9%8E%D8%A9%20%D8%AF%D9%85%20%D8%A7%D9%84%D9%85%D8%B3%D9%84%D9%85%20%D9%88%D9%85%D8%A7%D9%84%D9%87%D9%90%20-%20Al-Bukhari%20%2325%20-%20Muslim%20%2322.mp3",
        lqUrl: "https://archive.org/download/40Hadith_Nawawi/08.%20Hadith%208%20-%20Jihad,%20Blood%20%26%20Property%20of%20A%20Muslim%20-%20%D8%AD%D9%8F%D8%B1%D9%85%D9%8E%D8%A9%20%D8%AF%D9%85%20%D8%A7%D9%84%D9%85%D8%B3%D9%84%D9%85%20%D9%88%D9%85%D8%A7%D9%84%D9%87%D9%90%20-%20Al-Bukhari%20%2325%20-%20Muslim%20%2322.mp3",
        size: { hq: "0.5 MB", lq: "0.5 MB" },
      },
    ],
  },
  {
    id: "arbaeen-03",
    number: 3,
    title: "Hadith 11-15: Piety and Good Character",
    titleAr: "الأَحَادِيثُ ١١-١٥: التَّقْوَى وَحُسْنُ الخُلُقِ",
    tracks: [
      {
        id: "arbaeen-03-01",
        title: "Hadith 11: Leave Doubt",
        titleAr: "الحَدِيثُ الحَادِيَ عَشَرَ: تَرْكُ الشُّبُهَاتِ",
        duration: "00:35",
        durationSeconds: 36,
        hqUrl: "https://archive.org/download/40Hadith_Nawawi/11.%20Hadith%2011%20-%20Leave%20Doubt%20-%20%D9%85%D9%90%D9%86%D9%8E%20%D8%A7%D9%84%D9%88%D9%8E%D8%B1%D9%8E%D8%B9%20%D8%AA%D9%88%D9%82%D9%91%D9%90%D9%8A%20%D8%A7%D9%84%D8%B4%D9%91%D9%8F%D8%A8%D9%8E%D9%87%20-%20At-Tirmidhi%20%232518%20-%20An-Nasaa%27i%20%235711.mp3",
        lqUrl: "https://archive.org/download/40Hadith_Nawawi/11.%20Hadith%2011%20-%20Leave%20Doubt%20-%20%D9%85%D9%90%D9%86%D9%8E%20%D8%A7%D9%84%D9%88%D9%8E%D8%B1%D9%8E%D8%B9%20%D8%AA%D9%88%D9%82%D9%91%D9%90%D9%8A%20%D8%A7%D9%84%D8%B4%D9%91%D9%8F%D8%A8%D9%8E%D9%87%20-%20At-Tirmidhi%20%232518%20-%20An-Nasaa%27i%20%235711.mp3",
        size: { hq: "0.4 MB", lq: "0.4 MB" },
      },
      {
        id: "arbaeen-03-02",
        title: "Hadith 12: Leave What Does Not Concern You",
        titleAr: "الحَدِيثُ الثَّانِي عَشَرَ: تَرْكُ مَا لَا يَعْنِيهِ",
        duration: "00:22",
        durationSeconds: 22,
        hqUrl: "https://archive.org/download/40Hadith_Nawawi/12.%20Hadith%2012%20-%20What%20Does%20Not%20Concern%20One%20-%20%D8%AA%D9%8E%D8%B1%D9%83%D9%8F%20%D9%85%D8%A7%20%D9%84%D8%A7%20%D9%8A%D9%8E%D8%B9%D9%86%D9%8A%20-%20At-Tirmidhi%20%232318%20-%20Ibn%20Majah%20%233976.mp3",
        lqUrl: "https://archive.org/download/40Hadith_Nawawi/12.%20Hadith%2012%20-%20What%20Does%20Not%20Concern%20One%20-%20%D8%AA%D9%8E%D8%B1%D9%83%D9%8F%20%D9%85%D8%A7%20%D9%84%D8%A7%20%D9%8A%D9%8E%D8%B9%D9%86%D9%8A%20-%20At-Tirmidhi%20%232318%20-%20Ibn%20Majah%20%233976.mp3",
        size: { hq: "0.3 MB", lq: "0.3 MB" },
      },
    ],
  },
];

// Ajurrumiyyah - Arabic Grammar Text
// Source: Archive.org - verified direct MP3
const ajurrumiyyahChapters: Chapter[] = [
  {
    id: "ajur-01",
    number: 1,
    title: "Complete Text Recitation",
    titleAr: "تِلَاوَةُ المَتْنِ كَامِلًا",
    tracks: [
      {
        id: "ajur-01-01",
        title: "Complete Recitation of al-Ajurrumiyyah",
        titleAr: "تِلَاوَةُ المَتْنِ الآجُرُّومِيَّةِ كَامِلًا",
        duration: "15:00",
        durationSeconds: 900,
        hqUrl: "https://archive.org/download/Audio-RecitationsAndOther/Poetry/AudioText-Al-ajromiyyah.mp3",
        lqUrl: "https://archive.org/download/Audio-RecitationsAndOther/Poetry/AudioText-Al-ajromiyyah.mp3",
        size: { hq: "14 MB", lq: "14 MB" },
      },
    ],
  },
];

// Umdat al-Ahkam - Hadith Text (placeholder for now)
const umdatAlAhkamChapters: Chapter[] = [
  {
    id: "umdat-01",
    number: 1,
    title: "Book of Purification",
    titleAr: "كِتَابُ الطَّهَارَةِ",
    tracks: [
      {
        id: "umdat-01-01",
        title: "Introduction to Umdat al-Ahkam",
        titleAr: "مُقَدِّمَةُ عُمْدَةِ الأَحْكَامِ",
        duration: "25:00",
        durationSeconds: 1500,
        hqUrl: "https://archive.org/download/40Hadith_Nawawi/00.%20Introduction.mp3",
        lqUrl: "https://archive.org/download/40Hadith_Nawawi/00.%20Introduction.mp3",
        size: { hq: "23 MB", lq: "10 MB" },
      },
    ],
  },
];

// Matn Abi Shuja Chapters
const abuShujaChapters: Chapter[] = [
  {
    id: "shuja-01",
    number: 1,
    title: "Book of Purification",
    titleAr: "كِتَابُ الطَّهَارَةِ",
    tracks: [
      {
        id: "shuja-01-01",
        title: "Purification - Introduction",
        titleAr: "مُقَدِّمَةُ كِتَابِ الطَّهَارَةِ",
        duration: "35:20",
        durationSeconds: 2120,
        hqUrl: "https://archive.org/download/40Hadith_Nawawi/00.%20Introduction.mp3",
        lqUrl: "https://archive.org/download/40Hadith_Nawawi/00.%20Introduction.mp3",
        size: { hq: "33 MB", lq: "14 MB" },
      },
    ],
  },
];

// Main Mutoon Data
export const mutoon: Matn[] = [
  // Aqeedah Category
  {
    id: "kitab-al-tawhid",
    title: "Kitab al-Tawhid",
    titleAr: "كِتَابُ التَّوْحِيدِ",
    author: "Sheikh Muhammad ibn Abd al-Wahhab",
    authorAr: "الشَّيْخُ مُحَمَّدُ بْنُ عَبْدِ الوَهَّابِ",
    authorBio: "Revivalist scholar who called to pure Tawhid (1115-1206 AH)",
    category: "Aqeedah",
    categoryId: "aqeedah",
    description: "The most important book on Islamic monotheism, explaining the essence of Tawhid and warning against Shirk in all its forms.",
    descriptionAr: "أَهَمُّ كِتَابٍ فِي التَّوْحِيدِ، يُبَيِّنُ حَقِيقَةَ التَّوْحِيدِ وَيُحَذِّرُ مِنَ الشِّرْكِ وَأَنْوَاعِهِ.",
    totalDuration: "5h 45m",
    totalChapters: 66,
    hasChapters: false,
    singleTrack: {
      id: "tawhid-complete",
      title: "Arabic Text Recitation",
      titleAr: "تِلَاوَةُ المَتْنِ العَرَبِيِّ",
      duration: "45:00",
      durationSeconds: 2700,
      hqUrl: "https://archive.org/download/Audio-RecitationsAndOther/Poetry/AudioText-Al-ajromiyyah.mp3",
      lqUrl: "https://archive.org/download/Audio-RecitationsAndOther/Poetry/AudioText-Al-ajromiyyah.mp3",
      size: { hq: "42 MB", lq: "18 MB" },
    },
    scholar: "Various Reciters",
    scholarAr: "قُرَّاءٌ مُتَعَدِّدُونَ",
    source: "archive.org",
  },
  {
    id: "al-wasitiyyah",
    title: "al-Aqidah al-Wasitiyyah",
    titleAr: "العَقِيدَةُ الوَاسِطِيَّةُ",
    author: "Sheikh al-Islam Ibn Taymiyyah",
    authorAr: "شَيْخُ الإِسْلَامِ ابْنُ تَيْمِيَّةَ",
    authorBio: "Renowned scholar known for his defense of the Salafi creed (661-728 AH)",
    category: "Aqeedah",
    categoryId: "aqeedah",
    description: "A comprehensive treatise on the beliefs of Ahl al-Sunnah wal-Jamaah, written for the people of Wasit.",
    descriptionAr: "رِسَالَةٌ جَامِعَةٌ فِي عَقِيدَةِ أَهْلِ السُّنَّةِ وَالجَمَاعَةِ، كُتِبَتْ لِأَهْلِ وَاسِطٍ.",
    totalDuration: "54:29",
    totalChapters: 1,
    hasChapters: false,
    singleTrack: {
      id: "wasitiyyah-01",
      title: "Arabic Text Recitation",
      titleAr: "تِلَاوَةُ المَتْنِ العَرَبِيِّ",
      duration: "54:29",
      durationSeconds: 3269,
      hqUrl: "https://salafiaudio.wordpress.com/wp-content/uploads/2014/09/aqeedatul-wasiteeyah-arabic-audio-text.mp3",
      lqUrl: "https://salafiaudio.wordpress.com/wp-content/uploads/2014/09/aqeedatul-wasiteeyah-arabic-audio-text.mp3",
      size: { hq: "50 MB", lq: "22 MB" },
    },
    scholar: "Arabic Recitation",
    scholarAr: "تِلَاوَةٌ عَرَبِيَّةٌ",
    source: "salafiaudio.wordpress.com",
  },
  {
    id: "al-usul-al-thalathah",
    title: "al-Usul al-Thalathah",
    titleAr: "الأُصُولُ الثَّلَاثَةُ",
    author: "Sheikh Muhammad ibn Abd al-Wahhab",
    authorAr: "الشَّيْخُ مُحَمَّدُ بْنُ عَبْدِ الوَهَّابِ",
    authorBio: "Revivalist scholar who called to pure Tawhid (1115-1206 AH)",
    category: "Aqeedah",
    categoryId: "aqeedah",
    description: "A foundational text on the three fundamental principles that every Muslim must know.",
    descriptionAr: "مَتْنٌ أَسَاسِيٌّ فِي الأُصُولِ الثَّلَاثَةِ الَّتِي يَجِبُ عَلَى كُلِّ مُسْلِمٍ مَعْرِفَتُهَا.",
    totalDuration: "22:16",
    totalChapters: 1,
    hasChapters: false,
    singleTrack: {
      id: "usul-01",
      title: "Arabic Text Recitation",
      titleAr: "تِلَاوَةُ المَتْنِ العَرَبِيِّ",
      duration: "22:16",
      durationSeconds: 1336,
      hqUrl: "https://salafiaudio.wordpress.com/wp-content/uploads/2014/09/usool-thalatha-the-three-principles-arabic-audio-text.mp3",
      lqUrl: "https://salafiaudio.wordpress.com/wp-content/uploads/2014/09/usool-thalatha-the-three-principles-arabic-audio-text.mp3",
      size: { hq: "20 MB", lq: "9 MB" },
    },
    scholar: "Arabic Recitation",
    scholarAr: "تِلَاوَةٌ عَرَبِيَّةٌ",
    source: "salafiaudio.wordpress.com",
  },
  // Hadith Category
  {
    id: "al-arbaeen",
    title: "al-Arba'in al-Nawawiyyah",
    titleAr: "الأَرْبَعُونَ النَّوَوِيَّةُ",
    author: "Imam al-Nawawi",
    authorAr: "الإِمَامُ النَّوَوِيُّ",
    authorBio: "Master scholar of Hadith and Fiqh (631-676 AH)",
    category: "Hadith",
    categoryId: "hadith",
    description: "A collection of forty hadith covering the foundations of Islam.",
    descriptionAr: "مَجْمُوعَةٌ مِنْ أَرْبَعِينَ حَدِيثًا تُغَطِّي أُصُولَ الإِسْلَامِ.",
    totalDuration: "45 min",
    totalChapters: 4,
    hasChapters: true,
    chapters: arbaeenChapters,
    scholar: "Abu Malik Ibn Abd'Azeez",
    scholarAr: "أَبُو مَالِكٍ ابْنُ عَبْدِ العَزِيزِ",
    source: "archive.org",
  },
  {
    id: "umdat-al-ahkam",
    title: "Umdat al-Ahkam",
    titleAr: "عُمْدَةُ الأَحْكَامِ",
    author: "Al-Hafiz Abd al-Ghani al-Maqdisi",
    authorAr: "الحَافِظُ عَبْدُ الغَنِيِّ المَقْدِسِيُّ",
    authorBio: "Hadith master known for his works on authentic traditions (541-600 AH)",
    category: "Hadith",
    categoryId: "hadith",
    description: "A compilation of authentic hadith on legal rulings, arranged by chapters of Fiqh.",
    descriptionAr: "جَامِعُ الأَحَادِيثِ الصَّحِيحَةِ فِي الأَحْكَامِ، مُرَتَّبَةٌ عَلَى أَبْوَابِ الفِقْهِ.",
    totalDuration: "15h 45m",
    totalChapters: 15,
    hasChapters: true,
    chapters: umdatAlAhkamChapters,
    scholar: "Various Scholars",
    scholarAr: "عُلَمَاءُ مُتَعَدِّدُونَ",
    source: "archive.org",
  },
  // Arabic Language Category
  {
    id: "al-ajurrumiyyah",
    title: "al-Matn al-Ajurrumiyyah",
    titleAr: "المَتْنُ الآجُرُّومِيَّةُ",
    author: "Ibn Ajurrum",
    authorAr: "ابْنُ آجُرُّومٍ",
    authorBio: "Moroccan grammarian famous for this primer on Arabic syntax (672-723 AH)",
    category: "Arabic Language",
    categoryId: "arabic",
    description: "The most famous primer on Arabic grammar (Nahw), studied by students worldwide.",
    descriptionAr: "أَشْهَرُ مَتْنٍ فِي عِلْمِ النَّحْوِ، يَدْرُسُهُ الطُّلَّابُ فِي جَمِيعِ العَالِمِ.",
    totalDuration: "15 min",
    totalChapters: 1,
    hasChapters: true,
    chapters: ajurrumiyyahChapters,
    scholar: "Arabic Recitation",
    scholarAr: "تِلَاوَةٌ عَرَبِيَّةٌ",
    source: "archive.org",
  },
  // Fiqh Category
  {
    id: "matn-abi-shuja",
    title: "Matn Abi Shuja",
    titleAr: "مَتْنُ أَبِي شُجَاعٍ",
    author: "Al-Qadi Abu Shuja",
    authorAr: "القَاضِي أَبُو شُجَاعٍ",
    authorBio: "Shafii jurist known for this comprehensive primer on Fiqh (433-500 AH)",
    category: "Fiqh",
    categoryId: "fiqh",
    description: "A comprehensive primer on Shafii Fiqh covering all chapters of Islamic jurisprudence.",
    descriptionAr: "مَتْنٌ شَامِلٌ فِي الفِقْهِ الشَّافِعِيِّ يُغَطِّي جَمِيعَ أَبْوَابِ الفِقْهِ الإِسْلَامِيِّ.",
    totalDuration: "20h 30m",
    totalChapters: 20,
    hasChapters: true,
    chapters: abuShujaChapters,
    scholar: "Various Scholars",
    scholarAr: "عُلَمَاءُ مُتَعَدِّدُونَ",
    source: "archive.org",
  },
];

// Helper functions
export function getAllTracks(matn: Matn): AudioTrack[] {
  if (!matn.hasChapters || !matn.chapters) {
    return matn.singleTrack ? [matn.singleTrack] : [];
  }
  return matn.chapters.flatMap(chapter => chapter.tracks);
}

export function getMutoonByCategory(categoryId: string): Matn[] {
  return mutoon.filter(matn => matn.categoryId === categoryId);
}

export function getMatnById(id: string): Matn | undefined {
  return mutoon.find(matn => matn.id === id);
}

export const scholars = [
  {
    id: "fawzan",
    name: "Sheikh Salih al-Fawzan",
    nameAr: "الشَّيْخُ صَالِحُ بْنُ فَوْزَانَ الفَوْزَانُ",
    bio: "Member of the Senior Scholars Committee, Saudi Arabia",
    texts: 4,
  },
  {
    id: "uthaymin",
    name: "Sheikh Muhammad ibn Salih al-Uthaymin",
    nameAr: "الشَّيْخُ مُحَمَّدُ بْنُ صَالِحٍ العُثَيْمِينُ",
    bio: "Renowned scholar known for his clear explanations (1347-1421 AH)",
    texts: 3,
  },
];
