# مُتُون عِلْمِيَّة | Mutūn 'Ilmiyyah

A professional web application dedicated to hosting audio recordings of famous Islamic scientific texts (المتون العلمية) according to the methodology of Ahl al-Sunnah wal-Jama'ah (Salafi).

## Features

- **RTL Arabic Layout**: Full Right-to-Left support for Arabic text
- **Professional UI**: Clean, modern interface using shadcn/ui and Lucide icons (no emojis)
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Dark/Light Theme**: Toggle between dark and light modes
- **Audio Player**: Persistent global audio player at the bottom of the screen
- **Category Navigation**: Browse texts by category

## Categories

- **العَقِيدَة (Aqeedah)**: Islamic Creed texts
- **الفِقْه (Fiqh)**: Islamic Jurisprudence texts
- **الحَدِيث (Hadith)**: Prophetic Tradition texts
- **اللُّغَة العَرَبِيَّة (Arabic Language)**: Arabic grammar and language texts

## Featured Texts

- كِتَابُ التَّوْحِيد (Book of Monotheism) - by Shaykh Muhammad ibn Abdul-Wahhab
- العُقْدَةُ النَّفِيسَةُ - by Imam Ibn Abi Zayd al-Qayrawani
- الأَرْبَعُونَ النَّوَوِيَّةُ (The Forty Hadith) - by Imam an-Nawawi
- آجُرُّومِيَّةُ (Ajurrumiyyah) - Arabic Grammar primer
- الوَاسِطِيَّةُ (Al-Wasitiyyah) - by Shaykh al-Islam Ibn Taymiyyah
- بُلُوغُ المَرَامِ (Bulugh al-Maram) - by al-Hafiz Ibn Hajar

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 with shadcn/ui
- **Icons**: Lucide React (Professional icon library)
- **Fonts**: Noto Naskh Arabic, Amiri (Arabic fonts with Tashkeel support)

## Development

```bash
# Install dependencies
bun install

# Run development server
bun run dev

# Build for production
bun run build

# Run lint
bun run lint
```

## Project Structure

```
src/
├── app/
│   ├── globals.css       # Global styles with RTL support
│   ├── layout.tsx        # Root layout with theme provider
│   └── page.tsx          # Home page with featured texts
├── components/
│   ├── audio-player.tsx  # Global audio player component
│   ├── main-layout.tsx   # Main layout wrapper
│   ├── navbar.tsx        # Navigation bar
│   ├── sidebar.tsx       # Category navigation sidebar
│   ├── theme-provider.tsx
│   └── ui/               # shadcn/ui components
├── hooks/
└── lib/
```

## Arabic Text Support

All Arabic text includes proper diacritical marks (Tashkeel/الحركات) for accurate pronunciation:

- Fatha (فَتْحَة)
- Kasra (كَسْرَة)
- Damma (ضَمَّة)
- Sukun (سُكُون)
- Shadda (شَدَّة)
- Tanween (تَنْوِين)

## License

This project is open source and available for educational purposes.

## Repository

GitHub: [https://github.com/wwwcomw1239-tech/mutun-ilmiyyah](https://github.com/wwwcomw1239-tech/mutun-ilmiyyah)
