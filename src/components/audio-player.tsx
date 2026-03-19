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
  List,
  ChevronUp,
  ChevronDown,
  X,
  Maximize2,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface AudioTrack {
  id: string;
  title: string;
  author: string;
  category: string;
  duration: number; // in seconds
  audioUrl: string;
}

const sampleTrack: AudioTrack = {
  id: "1",
  title: "كِتَابُ التَّوْحِيد",
  author: "الشَّيْخُ مُحَمَّدُ بْنُ عَبْدِ الوَهَّابِ",
  category: "العَقِيدَة",
  duration: 1847, // ~30 minutes
  audioUrl: "/audio/sample.mp3",
};

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(sampleTrack.duration);
  const [volume, setVolume] = useState(80);
  const [isMuted, setIsMuted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [repeatMode, setRepeatMode] = useState<"none" | "one" | "all">("none");
  const audioRef = useRef<HTMLAudioElement>(null);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
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

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 bg-sidebar border-t border-border shadow-lg z-40 transition-all duration-300",
        isExpanded ? "h-48" : "h-20"
      )}
    >
      {/* Audio Element */}
      <audio ref={audioRef} src={sampleTrack.audioUrl} preload="metadata" />

      {/* Progress Bar - Top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-muted">
        <Progress value={progress} className="h-1 rounded-none" />
      </div>

      <div className="h-full px-4 flex flex-col justify-center">
        {/* Main Player Bar */}
        <div className="flex items-center justify-between gap-4">
          {/* Track Info - Right */}
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <span className="text-primary text-xl arabic-title">ت</span>
            </div>
            <div className="min-w-0">
              <h4 className="font-semibold arabic-text truncate text-foreground">
                {sampleTrack.title}
              </h4>
              <p className="text-sm text-muted-foreground arabic-text truncate">
                {sampleTrack.author}
              </p>
            </div>
            <span className="hidden sm:inline-flex text-xs bg-primary/10 text-primary px-2 py-1 rounded-full arabic-text">
              {sampleTrack.category}
            </span>
          </div>

          {/* Controls - Center */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="hidden sm:flex"
              onClick={toggleRepeat}
            >
              <Repeat
                className={cn(
                  "h-4 w-4",
                  repeatMode !== "none" && "text-primary"
                )}
              />
              {repeatMode === "one" && (
                <span className="absolute text-[8px] font-bold text-primary">1</span>
              )}
            </Button>
            <Button variant="ghost" size="icon">
              <SkipBack className="h-5 w-5" />
            </Button>
            <Button
              size="icon"
              className="h-12 w-12 rounded-full bg-primary hover:bg-primary/90"
              onClick={handlePlayPause}
            >
              {isPlaying ? (
                <Pause className="h-5 w-5 text-primary-foreground" />
              ) : (
                <Play className="h-5 w-5 text-primary-foreground mr-[-2px]" />
              )}
            </Button>
            <Button variant="ghost" size="icon">
              <SkipForward className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <List className="h-4 w-4" />
            </Button>
          </div>

          {/* Time & Volume - Left */}
          <div className="flex items-center gap-4 flex-1 justify-end">
            <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
              <span className="arabic-text font-mono">{formatTime(currentTime)}</span>
              <span>/</span>
              <span className="arabic-text font-mono">{formatTime(duration)}</span>
            </div>

            {/* Volume Control */}
            <div className="hidden md:flex items-center gap-2">
              <Button variant="ghost" size="icon" onClick={toggleMute}>
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

            {/* Expand Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronUp className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="mt-4 space-y-4">
            {/* Seek Bar */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground font-mono w-12 text-right">
                {formatTime(currentTime)}
              </span>
              <Slider
                value={[currentTime]}
                max={duration}
                step={1}
                className="flex-1"
                onValueChange={handleTimeChange}
              />
              <span className="text-sm text-muted-foreground font-mono w-12">
                {formatTime(duration)}
              </span>
            </div>

            {/* Playlist Preview */}
            <div className="bg-muted/30 rounded-lg p-3">
              <h5 className="text-sm font-semibold arabic-text mb-2">
                قائمة التشغيل
              </h5>
              <div className="space-y-2 max-h-24 overflow-y-auto">
                {[
                  { title: "مُقَدِّمَةٌ فِي التَّوْحِيد", duration: "12:45" },
                  { title: "بَابُ حُكْمِ تَرْكِ الصَّلَاةِ", duration: "18:30" },
                  { title: "بَابُ مَا جَاءَ فِي السِّحْرِ", duration: "25:15" },
                ].map((track, index) => (
                  <div
                    key={index}
                    className={cn(
                      "flex items-center justify-between p-2 rounded cursor-pointer transition-colors",
                      index === 0
                        ? "bg-primary/10 text-primary"
                        : "hover:bg-muted"
                    )}
                  >
                    <span className="text-sm arabic-text">{track.title}</span>
                    <span className="text-xs text-muted-foreground font-mono">
                      {track.duration}
                    </span>
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
