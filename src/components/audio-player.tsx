"use client";

import { useRef, useEffect, useCallback } from "react";
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
  DownloadCloud,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useAudioStore } from "@/stores/audio-store";

export function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isExpanded, setIsExpanded] = React.useState(false);
  
  // Get state from Zustand store
  const {
    currentTrack,
    audioQuality,
    isPlaying,
    currentTime,
    duration,
    volume,
    isMuted,
    repeatMode,
    setAudioQuality,
    setIsPlaying,
    setCurrentTime,
    setDuration,
    setVolume,
    toggleMute,
    toggleRepeat,
    getAudioUrl,
  } = useAudioStore();

  // Get the active audio URL (LQ by default)
  const audioUrl = getAudioUrl();

  // Format time helper
  const formatTime = (seconds: number) => {
    if (!seconds || isNaN(seconds)) return "00:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // Handle play/pause with browser auto-play policy handling
  const handlePlayPause = useCallback(async () => {
    if (!audioRef.current || !currentTrack) return;
    
    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        // Browser auto-play policy: must be triggered by user interaction
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error("Playback error:", error);
      setIsPlaying(false);
    }
  }, [isPlaying, currentTrack, setIsPlaying]);

  // Handle time update
  const handleTimeUpdate = useCallback(() => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  }, [setCurrentTime]);

  // Handle loaded metadata
  const handleLoadedMetadata = useCallback(() => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  }, [setDuration]);

  // Handle seek
  const handleTimeChange = useCallback((value: number[]) => {
    const newTime = value[0];
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  }, [setCurrentTime]);

  // Handle volume change
  const handleVolumeChange = useCallback((value: number[]) => {
    const newVolume = value[0];
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100;
    }
  }, [setVolume]);

  // Handle toggle mute
  const handleToggleMute = useCallback(() => {
    toggleMute();
    if (audioRef.current) {
      if (!isMuted) {
        audioRef.current.volume = 0;
      } else {
        audioRef.current.volume = (volume === 0 ? 50 : volume) / 100;
      }
    }
  }, [toggleMute, isMuted, volume]);

  // Handle quality toggle
  const handleQualityToggle = useCallback(() => {
    const newQuality = audioQuality === "lq" ? "hq" : "lq";
    setAudioQuality(newQuality);
    // Note: Changing quality will update audioUrl via getAudioUrl()
  }, [audioQuality, setAudioQuality]);

  // Handle download - ALWAYS use LQ
  const handleDownload = useCallback(() => {
    if (!currentTrack) return;
    
    // ALWAYS use LQ (low quality) for downloads
    const url = currentTrack.lqUrl || currentTrack.hqUrl;
    const filename = `${currentTrack.titleAr}.mp3`;
    
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }, [currentTrack]);

  // Handle track ended
  const handleEnded = useCallback(() => {
    if (repeatMode === 'one' && audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      setIsPlaying(false);
    }
  }, [repeatMode, setIsPlaying]);

  // Effect: Update audio source when track or quality changes
  useEffect(() => {
    if (audioRef.current && audioUrl) {
      const wasPlaying = isPlaying;
      
      // Update source
      audioRef.current.src = audioUrl;
      
      // If was playing, resume playback with new source
      if (wasPlaying) {
        audioRef.current.play().catch(console.error);
      }
    }
  }, [audioUrl, currentTrack?.id]);

  // Effect: Apply volume changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume / 100;
    }
  }, [volume, isMuted]);

  // Auto-play when a new track is set
  useEffect(() => {
    if (audioRef.current && currentTrack && !isPlaying) {
      // Small delay to ensure src is set
      const timer = setTimeout(() => {
        audioRef.current?.play()
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false));
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [currentTrack?.id]);

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  // No track selected - show placeholder
  if (!currentTrack) {
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-[#0f172a] to-[#1e293b] border-t border-[#334155] shadow-2xl z-40 h-24">
        <div className="h-full px-4 flex items-center justify-center">
          <div className="text-center">
            <p className="text-[#64748b] arabic-text">اخْتَرْ مَقْطَعًا لِلِاسْتِمَاعِ</p>
            <p className="text-xs text-[#475569] mt-1">Select a track to play</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 bg-gradient-to-t from-[#0f172a] to-[#1e293b] border-t border-[#334155] shadow-2xl z-40 transition-all duration-300",
        isExpanded ? "h-64" : "h-24"
      )}
    >
      {/* Audio Element - CRITICAL: preload="none" to prevent bandwidth drain */}
      <audio
        ref={audioRef}
        src={audioUrl || undefined}
        preload="none"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
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
              onClick={handleQualityToggle}
              className={cn(
                "gap-1 arabic-text h-9 px-3 text-[#94a3b8] hover:text-white hover:bg-[#334155]",
                audioQuality === "hq" && "text-[#d4af37] hover:text-[#d4af37]"
              )}
            >
              {audioQuality === "lq" ? "عادية" : "عالية"}
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
                onClick={handleToggleMute}
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
              <DownloadCloud className="h-5 w-5" />
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
                max={duration || 100}
                step={1}
                className="flex-1"
                onValueChange={handleTimeChange}
              />
              <span className="text-sm text-[#94a3b8] font-mono w-16">
                {formatTime(duration)}
              </span>
            </div>

            {/* Current Track Info */}
            <div className="bg-[#0f172a]/50 rounded-xl p-4">
              <h5 className="text-sm font-semibold arabic-text mb-3 text-[#d4af37] flex items-center gap-2">
                <ListMusic className="h-4 w-4" />
                قَائِمَةُ التَّشْغِيلِ
              </h5>
              <div className="flex items-center justify-between p-2 rounded-lg bg-[#d4af37]/20 text-[#d4af37]">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#d4af37] flex items-center justify-center">
                    <Play className="h-3 w-3 text-[#0f172a]" />
                  </div>
                  <span className="text-sm arabic-text truncate max-w-60">{currentTrack.titleAr}</span>
                </div>
                <span className="text-xs font-mono">{currentTrack.duration}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Import React for useState
import React from "react";
