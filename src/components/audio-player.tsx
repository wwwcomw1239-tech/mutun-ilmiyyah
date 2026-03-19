"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { Slider } from "./ui/slider";
import { Progress } from "./ui/progress";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Repeat,
  ListMusic,
  ChevronUp,
  ChevronDown,
  Download,
  Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface AudioTrack {
  id: string;
  title: string;
  titleAr: string;
  duration: string;
  durationSeconds: number;
  hqUrl: string;
  lqUrl: string;
}

interface AudioPlayerProps {
  currentTrack?: AudioTrack;
  audioQuality?: "lq" | "hq";
  onQualityChange?: (quality: "lq" | "hq") => void;
}

const sampleTrack: AudioTrack = {
  id: "sample-1",
  title: "Hadith 1: Actions by Intentions",
  titleAr: "الحَدِيثُ الأَوَّلُ: إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ",
  duration: "00:53",
  durationSeconds: 53,
  hqUrl: "https://archive.org/download/40Hadith_Nawawi/01.%20Hadith%201%20-%20Niyyah%20(Intention)%20-%20%D8%A7%D9%84%D8%A3%D8%B9%D9%85%D8%A7%D9%84%20%D8%A8%D8%A7%D9%84%D9%86%D9%8A%D8%A7%D8%AA%20-%20Al-Bukhari%20%231%20-%20Muslim%20%231907.mp3",
  lqUrl: "https://archive.org/download/40Hadith_Nawawi/01.%20Hadith%201%20-%20Niyyah%20(Intention)%20-%20%D8%A7%D9%84%D8%A3%D8%B9%D9%85%D8%A7%D9%84%20%D8%A8%D8%A7%D9%84%D9%86%D9%8A%D8%A7%D8%AA%20-%20Al-Bukhari%20%231%20-%20Muslim%20%231907.mp3",
};

export function AudioPlayer({
  currentTrack = sampleTrack,
  audioQuality = "lq",
  onQualityChange,
}: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(currentTrack.durationSeconds);
  const [volume, setVolume] = useState(80);
  const [isMuted, setIsMuted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [quality, setQuality] = useState<"lq" | "hq">(audioQuality);
  const [repeatMode, setRepeatMode] = useState<"none" | "one" | "all">("none");
  const audioRef = useRef<HTMLAudioElement>(null);

  const audioUrl = quality === "lq" ? currentTrack.lqUrl : currentTrack.hqUrl;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleTimeChange = (value: number[]) => {
    setCurrentTime(value[0]);
    if (audioRef.current) {
      audioRef.current.currentTime = value[0];
    }
  };

  const handleVolumeChange = (value: number[]) => {
    setVolume(value[0]);
    setIsMuted(value[0] === 0);
    if (audioRef.current) {
      audioRef.current.volume = value[0] / 100;
    }
  };

  const toggleMute = () => {
    if (isMuted) {
      setIsMuted(false);
      setVolume(volume === 0 ? 50 : volume);
    } else {
      setIsMuted(true);
    }
  };

  const toggleRepeat = () => {
    const modes: ("none" | "one" | "all")[] = ["none", "one", "all"];
    const currentIndex = modes.indexOf(repeatMode);
    setRepeatMode(modes[(currentIndex + 1) % modes.length]);
  };

  const toggleQuality = () => {
    const newQuality = quality === "lq" ? "hq" : "lq";
    setQuality(newQuality);
    onQualityChange?.(newQuality);
  };

  // Download function - Direct link method (instant browser download, no blob)
  const handleDownload = () => {
    // Always use LQ (low quality) as default for downloads
    const url = currentTrack.lqUrl || currentTrack.hqUrl;
    const filename = `${currentTrack.titleAr}.mp3`;
    
    // Create hidden anchor with download attribute
    // This triggers browser's native download manager immediately
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 bg-gradient-to-t from-[#0f172a] to-[#1e293b] border-t border-[#334155] shadow-2xl z-40 transition-all duration-300",
        isExpanded ? "h-64" : "h-24"
      )}
    >
      {/* Audio Element */}
      <audio
        ref={audioRef}
        src={audioUrl}
        preload="metadata"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
      />

      {/* Progress Bar - Top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#334155]">
        <Progress value={progress} className="h-1 rounded-none bg-[#334155]" />
      </div>

      <div className="h-full px-4 flex flex-col justify-center">
        {/* Main Player Bar */}
        <div className="flex items-center justify-between gap-4">
          {/* Track Info - Right */}
          <div className="flex items-center gap-4 flex-1 min-w-0">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#d4af37] to-[#b8860b] flex items-center justify-center flex-shrink-0">
              <span className="text-[#0f172a] text-xl font-bold">م</span>
            </div>
            <div className="min-w-0">
              <h4 className="font-semibold arabic-text truncate text-white text-lg">
                {currentTrack.titleAr}
              </h4>
              <div className="flex items-center gap-3 text-sm text-[#94a3b8]">
                <span className="arabic-text font-mono">{formatTime(currentTime)}</span>
                <span>/</span>
                <span className="arabic-text font-mono">{formatTime(duration)}</span>
              </div>
            </div>
          </div>

          {/* Controls - Center */}
          <div className="flex items-center gap-3">
            {/* Quality Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleQuality}
              className={cn(
                "gap-1 arabic-text h-9 px-3 text-[#94a3b8] hover:text-white hover:bg-[#334155]",
                quality === "hq" && "text-[#d4af37] hover:text-[#d4af37]"
              )}
            >
              {quality === "lq" ? "عادية" : "عالية"}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="hidden sm:flex text-[#94a3b8] hover:text-white hover:bg-[#334155]"
              onClick={toggleRepeat}
            >
              <Repeat
                className={cn(
                  "h-4 w-4",
                  repeatMode !== "none" && "text-[#d4af37]"
                )}
              />
            </Button>
            <Button variant="ghost" size="icon" className="text-[#94a3b8] hover:text-white hover:bg-[#334155]">
              <SkipBack className="h-5 w-5" />
            </Button>
            <Button
              size="icon"
              className="h-14 w-14 rounded-full bg-gradient-to-br from-[#d4af37] to-[#b8860b] hover:from-[#b8860b] hover:to-[#d4af37] shadow-lg"
              onClick={handlePlayPause}
            >
              {isPlaying ? (
                <Pause className="h-6 w-6 text-[#0f172a]" />
              ) : (
                <Play className="h-6 w-6 text-[#0f172a] ml-[-2px]" />
              )}
            </Button>
            <Button variant="ghost" size="icon" className="text-[#94a3b8] hover:text-white hover:bg-[#334155]">
              <SkipForward className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden sm:flex text-[#94a3b8] hover:text-white hover:bg-[#334155]">
              <ListMusic className="h-4 w-4" />
            </Button>
          </div>

          {/* Volume & Actions - Left */}
          <div className="flex items-center gap-4 flex-1 justify-end">
            {/* Volume Control */}
            <div className="hidden md:flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMute}
                className="text-[#94a3b8] hover:text-white hover:bg-[#334155]"
              >
                {isMuted || volume === 0 ? (
                  <VolumeX className="h-4 w-4" />
                ) : (
                  <Volume2 className="h-4 w-4" />
                )}
              </Button>
              <Slider
                value={[isMuted ? 0 : volume]}
                max={100}
                step={1}
                className="w-24"
                onValueChange={handleVolumeChange}
              />
            </div>

            {/* Download Button */}
            <Button
              variant="ghost"
              size="icon"
              className="text-[#d4af37] hover:text-[#d4af37] hover:bg-[#d4af37]/10"
              onClick={handleDownload}
            >
              <Download className="h-5 w-5" />
            </Button>

            {/* Expand Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-[#94a3b8] hover:text-white hover:bg-[#334155]"
            >
              {isExpanded ? (
                <ChevronDown className="h-5 w-5" />
              ) : (
                <ChevronUp className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="mt-6 space-y-4">
            {/* Full Seek Bar */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-[#94a3b8] font-mono w-16 text-right">
                {formatTime(currentTime)}
              </span>
              <Slider
                value={[currentTime]}
                max={duration}
                step={1}
                className="flex-1"
                onValueChange={handleTimeChange}
              />
              <span className="text-sm text-[#94a3b8] font-mono w-16">
                {formatTime(duration)}
              </span>
            </div>

            {/* Playlist Preview */}
            <div className="bg-[#0f172a]/50 rounded-xl p-4">
              <h5 className="text-sm font-semibold arabic-text mb-3 text-[#d4af37] flex items-center gap-2">
                <ListMusic className="h-4 w-4" />
                قَائِمَةُ التَّشْغِيلِ
              </h5>
              <div className="space-y-2 max-h-20 overflow-y-auto">
                {[
                  { title: "مُقَدِّمَةٌ فِي التَّوْحِيدِ", duration: "30:45", active: true },
                  { title: "فَضَائِلُ التَّوْحِيدِ", duration: "45:30", active: false },
                  { title: "شُرُوطُ لَا إِلَهَ إِلَّا اللَّهُ", duration: "28:15", active: false },
                ].map((track, index) => (
                  <div
                    key={index}
                    className={cn(
                      "flex items-center justify-between p-2 rounded-lg cursor-pointer transition-colors",
                      track.active
                        ? "bg-[#d4af37]/20 text-[#d4af37]"
                        : "hover:bg-[#334155] text-[#94a3b8]"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      {track.active ? (
                        <div className="w-6 h-6 rounded-full bg-[#d4af37] flex items-center justify-center">
                          <Play className="h-3 w-3 text-[#0f172a]" />
                        </div>
                      ) : (
                        <span className="w-6 h-6 flex items-center justify-center text-sm">
                          {index + 1}
                        </span>
                      )}
                      <span className="text-sm arabic-text">{track.title}</span>
                    </div>
                    <span className="text-xs font-mono">{track.duration}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
