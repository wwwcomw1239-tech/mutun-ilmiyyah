// مُتُون عِلْمِيَّة - Islamic Scientific Texts Data
// All titles and authors include full Arabic diacritics (Tashkeel)

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

// Kitab al-Tawhid Chapters
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
        hqUrl: "https://ia800300.us.archive.org/20/items/KitaabAtTawhid_SheikhSalihAlFawzan/01.mp3",
        lqUrl: "https://ia800300.us.archive.org/20/items/KitaabAtTawhid_SheikhSalihAlFawzan/01.mp3",
        size: { hq: "42 MB", lq: "18 MB" },
      },
    ],
  },
  {
    id: "tawhid-02",
    number: 2,
    title: "Chapter: Tawhid and Its Virtues",
    titleAr: "بَابُ التَّوْحِيدِ وَفَضْلِهِ",
    tracks: [
      {
        id: "tawhid-02-01",
        title: "The Virtues of Tawhid",
        titleAr: "فَضَائِلُ التَّوْحِيدِ",
        duration: "52:15",
        durationSeconds: 3135,
        hqUrl: "https://ia800300.us.archive.org/20/items/KitaabAtTawhid_SheikhSalihAlFawzan/02.mp3",
        lqUrl: "https://ia800300.us.archive.org/20/items/KitaabAtTawhid_SheikhSalihAlFawzan/02.mp3",
        size: { hq: "48 MB", lq: "21 MB" },
      },
    ],
  },
  {
    id: "tawhid-03",
    number: 3,
    title: "Chapter: Purifying Tawhid",
    titleAr: "بَابُ تَخْلِيصِ التَّوْحِيدِ",
    tracks: [
      {
        id: "tawhid-03-01",
        title: "Purifying Tawhid from Shirk",
        titleAr: "تَخْلِيصُ التَّوْحِيدِ مِنَ الشِّرْكِ",
        duration: "38:45",
        durationSeconds: 2325,
        hqUrl: "https://ia800300.us.archive.org/20/items/KitaabAtTawhid_SheikhSalihAlFawzan/03.mp3",
        lqUrl: "https://ia800300.us.archive.org/20/items/KitaabAtTawhid_SheikhSalihAlFawzan/03.mp3",
        size: { hq: "36 MB", lq: "16 MB" },
      },
    ],
  },
  {
    id: "tawhid-04",
    number: 4,
    title: "Chapter: Fear of Shirk",
    titleAr: "بَابُ الخَوْفِ مِنَ الشِّرْكِ",
    tracks: [
      {
        id: "tawhid-04-01",
        title: "The Danger of Shirk",
        titleAr: "خَطَرُ الشِّرْكِ وَالعِظَةُ مِنْهُ",
        duration: "41:20",
        durationSeconds: 2480,
        hqUrl: "https://ia800300.us.archive.org/20/items/KitaabAtTawhid_SheikhSalihAlFawzan/04.mp3",
        lqUrl: "https://ia800300.us.archive.org/20/items/KitaabAtTawhid_SheikhSalihAlFawzan/04.mp3",
        size: { hq: "38 MB", lq: "17 MB" },
      },
    ],
  },
  {
    id: "tawhid-05",
    number: 5,
    title: "Chapter: Call to Testimony",
    titleAr: "بَابُ الدُّعَاءِ إِلَى شَهَادَةِ التَّوْحِيدِ",
    tracks: [
      {
        id: "tawhid-05-01",
        title: "Calling to the Testimony of Faith",
        titleAr: "الدُّعَاءُ إِلَى الشَّهَادَتَيْنِ",
        duration: "35:50",
        durationSeconds: 2150,
        hqUrl: "https://ia800300.us.archive.org/20/items/KitaabAtTawhid_SheikhSalihAlFawzan/05.mp3",
        lqUrl: "https://ia800300.us.archive.org/20/items/KitaabAtTawhid_SheikhSalihAlFawzan/05.mp3",
        size: { hq: "33 MB", lq: "15 MB" },
      },
    ],
  },
  {
    id: "tawhid-06",
    number: 6,
    title: "Chapter: Explanation of Tawhid",
    titleAr: "بَابُ تَفْسِيرِ التَّوْحِيدِ",
    tracks: [
      {
        id: "tawhid-06-01",
        title: "Explanation of Tawhid",
        titleAr: "تَفْسِيرُ التَّوْحِيدِ",
        duration: "48:10",
        durationSeconds: 2890,
        hqUrl: "https://ia800300.us.archive.org/20/items/KitaabAtTawhid_SheikhSalihAlFawzan/06.mp3",
        lqUrl: "https://ia800300.us.archive.org/20/items/KitaabAtTawhid_SheikhSalihAlFawzan/06.mp3",
        size: { hq: "44 MB", lq: "19 MB" },
      },
    ],
  },
];

// Arbaeen Nawawiyyah Chapters
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
        duration: "28:15",
        durationSeconds: 1695,
        hqUrl: "https://archive.org/download/AlArbaeenAlNawawiyyah/01.mp3",
        lqUrl: "https://archive.org/download/AlArbaeenAlNawawiyyah/01.mp3",
        size: { hq: "26 MB", lq: "12 MB" },
      },
      {
        id: "arbaeen-01-02",
        title: "Hadith 2: Islam, Iman, Ihsan",
        titleAr: "الحَدِيثُ الثَّانِي: الإِسْلَامُ وَالإِيمَانُ وَالإِحْسَانُ",
        duration: "35:40",
        durationSeconds: 2140,
        hqUrl: "https://archive.org/download/AlArbaeenAlNawawiyyah/02.mp3",
        lqUrl: "https://archive.org/download/AlArbaeenAlNawawiyyah/02.mp3",
        size: { hq: "33 MB", lq: "14 MB" },
      },
    ],
  },
  {
    id: "arbaeen-02",
    number: 2,
    title: "Hadith 11-20: Acts of Worship",
    titleAr: "الأَحَادِيثُ ١١-٢٠: أَعْمَالُ العِبَادَةِ",
    tracks: [
      {
        id: "arbaeen-02-01",
        title: "Hadith 11: Avoiding Doubtful Matters",
        titleAr: "الحَدِيثُ الحَادِيَ عَشَرَ: تَرْكُ الشُّبُهَاتِ",
        duration: "32:25",
        durationSeconds: 1945,
        hqUrl: "https://archive.org/download/AlArbaeenAlNawawiyyah/11.mp3",
        lqUrl: "https://archive.org/download/AlArbaeenAlNawawiyyah/11.mp3",
        size: { hq: "30 MB", lq: "13 MB" },
      },
    ],
  },
];

// Umdat al-Ahkam Chapters
const umdatAlAhkamChapters: Chapter[] = [
  {
    id: "umdat-01",
    number: 1,
    title: "Book of Purification",
    titleAr: "كِتَابُ الطَّهَارَةِ",
    tracks: [
      {
        id: "umdat-01-01",
        title: "Chapter on Water",
        titleAr: "بَابُ المِيَاهِ",
        duration: "42:30",
        durationSeconds: 2550,
        hqUrl: "https://archive.org/download/UmdatAlAhkam/01.mp3",
        lqUrl: "https://archive.org/download/UmdatAlAhkam/01.mp3",
        size: { hq: "39 MB", lq: "17 MB" },
      },
      {
        id: "umdat-01-02",
        title: "Chapter on Wudu",
        titleAr: "بَابُ الوُضُوءِ",
        duration: "55:15",
        durationSeconds: 3315,
        hqUrl: "https://archive.org/download/UmdatAlAhkam/02.mp3",
        lqUrl: "https://archive.org/download/UmdatAlAhkam/02.mp3",
        size: { hq: "51 MB", lq: "22 MB" },
      },
    ],
  },
  {
    id: "umdat-02",
    number: 2,
    title: "Book of Prayer",
    titleAr: "كِتَابُ الصَّلَاةِ",
    tracks: [
      {
        id: "umdat-02-01",
        title: "Chapter on Times of Prayer",
        titleAr: "بَابُ مَوَاقِيتِ الصَّلَاةِ",
        duration: "48:45",
        durationSeconds: 2925,
        hqUrl: "https://archive.org/download/UmdatAlAhkam/03.mp3",
        lqUrl: "https://archive.org/download/UmdatAlAhkam/03.mp3",
        size: { hq: "45 MB", lq: "20 MB" },
      },
    ],
  },
];

// Ajurrumiyyah Chapters
const ajurrumiyyahChapters: Chapter[] = [
  {
    id: "ajur-01",
    number: 1,
    title: "Types of Speech",
    titleAr: "أَنْوَاعُ الكَلَامِ",
    tracks: [
      {
        id: "ajur-01-01",
        title: "Introduction to Arabic Grammar",
        titleAr: "مُقَدِّمَةٌ فِي عِلْمِ النَّحْوِ",
        duration: "25:30",
        durationSeconds: 1530,
        hqUrl: "https://archive.org/download/AlAjurrumiyyah/01.mp3",
        lqUrl: "https://archive.org/download/AlAjurrumiyyah/01.mp3",
        size: { hq: "23 MB", lq: "10 MB" },
      },
    ],
  },
  {
    id: "ajur-02",
    number: 2,
    title: "Noun, Verb and Particle",
    titleAr: "الاِسْمُ وَالفِعْلُ وَالحَرْفُ",
    tracks: [
      {
        id: "ajur-02-01",
        title: "Parts of Speech in Arabic",
        titleAr: "أَقْسَامُ الكَلَامِ العَرَبِيِّ",
        duration: "32:15",
        durationSeconds: 1935,
        hqUrl: "https://archive.org/download/AlAjurrumiyyah/02.mp3",
        lqUrl: "https://archive.org/download/AlAjurrumiyyah/02.mp3",
        size: { hq: "30 MB", lq: "13 MB" },
      },
    ],
  },
  {
    id: "ajur-03",
    number: 3,
    title: "Signs of I'rab",
    titleAr: "عَلَامَاتُ الإِعْرَابِ",
    tracks: [
      {
        id: "ajur-03-01",
        title: "Grammatical Inflection",
        titleAr: "عَلَامَاتُ رَفْعِ الاِسْمِ",
        duration: "38:45",
        durationSeconds: 2325,
        hqUrl: "https://archive.org/download/AlAjurrumiyyah/03.mp3",
        lqUrl: "https://archive.org/download/AlAjurrumiyyah/03.mp3",
        size: { hq: "36 MB", lq: "16 MB" },
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
        hqUrl: "https://archive.org/download/MatnAbiShuja/01.mp3",
        lqUrl: "https://archive.org/download/MatnAbiShuja/01.mp3",
        size: { hq: "33 MB", lq: "14 MB" },
      },
    ],
  },
  {
    id: "shuja-02",
    number: 2,
    title: "Book of Prayer",
    titleAr: "كِتَابُ الصَّلَاةِ",
    tracks: [
      {
        id: "shuja-02-01",
        title: "Prayer - Its Rulings",
        titleAr: "أَحْكَامُ الصَّلَاةِ",
        duration: "45:15",
        durationSeconds: 2715,
        hqUrl: "https://archive.org/download/MatnAbiShuja/02.mp3",
        lqUrl: "https://archive.org/download/MatnAbiShuja/02.mp3",
        size: { hq: "42 MB", lq: "18 MB" },
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
    hasChapters: true,
    chapters: kitabAlTawhidChapters,
    scholar: "Sheikh Salih al-Fawzan",
    scholarAr: "الشَّيْخُ صَالِحُ بْنُ فَوْزَانَ الفَوْزَانُ",
    source: "al-bayan.net",
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
    totalDuration: "4h 20m",
    totalChapters: 1,
    hasChapters: false,
    singleTrack: {
      id: "wasitiyyah-01",
      title: "Complete Explanation of al-Wasitiyyah",
      titleAr: "شَرْحُ العَقِيدَةِ الوَاسِطِيَّةِ كَامِلًا",
      duration: "4:20:00",
      durationSeconds: 15600,
      hqUrl: "https://archive.org/download/AlWasitiyyah/complete.mp3",
      lqUrl: "https://archive.org/download/AlWasitiyyah/complete.mp3",
      size: { hq: "180 MB", lq: "78 MB" },
    },
    scholar: "Sheikh Muhammad ibn Salih al-Uthaymin",
    scholarAr: "الشَّيْخُ مُحَمَّدُ بْنُ صَالِحٍ العُثَيْمِينُ",
    source: "al-bayan.net",
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
    totalDuration: "2h 15m",
    totalChapters: 1,
    hasChapters: false,
    singleTrack: {
      id: "usul-01",
      title: "Complete Explanation of al-Usul al-Thalathah",
      titleAr: "شَرْحُ الأُصُولِ الثَّلَاثَةِ كَامِلًا",
      duration: "2:15:00",
      durationSeconds: 8100,
      hqUrl: "https://archive.org/download/AlUsulAlThalathah/complete.mp3",
      lqUrl: "https://archive.org/download/AlUsulAlThalathah/complete.mp3",
      size: { hq: "95 MB", lq: "42 MB" },
    },
    scholar: "Sheikh Salih al-Fawzan",
    scholarAr: "الشَّيْخُ صَالِحُ بْنُ فَوْزَانَ الفَوْزَانُ",
    source: "al-bayan.net",
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
    totalDuration: "8h 30m",
    totalChapters: 4,
    hasChapters: true,
    chapters: arbaeenChapters,
    scholar: "Sheikh Salih al-Fawzan",
    scholarAr: "الشَّيْخُ صَالِحُ بْنُ فَوْزَانَ الفَوْزَانُ",
    source: "al-bayan.net",
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
    scholar: "Sheikh Muhammad ibn Salih al-Uthaymin",
    scholarAr: "الشَّيْخُ مُحَمَّدُ بْنُ صَالِحٍ العُثَيْمِينُ",
    source: "al-bayan.net",
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
    totalDuration: "6h 20m",
    totalChapters: 12,
    hasChapters: true,
    chapters: ajurrumiyyahChapters,
    scholar: "Sheikh Muhammad ibn Salih al-Uthaymin",
    scholarAr: "الشَّيْخُ مُحَمَّدُ بْنُ صَالِحٍ العُثَيْمِينُ",
    source: "al-bayan.net",
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
    scholar: "Sheikh Salih al-Fawzan",
    scholarAr: "الشَّيْخُ صَالِحُ بْنُ فَوْزَانَ الفَوْزَانُ",
    source: "al-bayan.net",
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
