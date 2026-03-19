import { create } from 'zustand';

export interface AudioTrack {
  id: string;
  title: string;
  titleAr: string;
  duration: string;
  durationSeconds: number;
  hqUrl: string;
  lqUrl: string;
  size?: {
    lq: string;
    hq: string;
  };
}

interface AudioState {
  // Current track
  currentTrack: AudioTrack | null;
  
  // Audio quality - ALWAYS default to LQ (low quality)
  audioQuality: 'lq' | 'hq';
  
  // Playing state
  isPlaying: boolean;
  
  // Current time for persistence
  currentTime: number;
  duration: number;
  
  // Volume
  volume: number;
  isMuted: boolean;
  
  // Repeat mode
  repeatMode: 'none' | 'one' | 'all';
  
  // Actions
  setTrack: (track: AudioTrack) => void;
  setAudioQuality: (quality: 'lq' | 'hq') => void;
  setIsPlaying: (playing: boolean) => void;
  setCurrentTime: (time: number) => void;
  setDuration: (duration: number) => void;
  setVolume: (volume: number) => void;
  toggleMute: () => void;
  toggleRepeat: () => void;
  
  // Get the active audio URL (LQ by default, fallback to HQ)
  getAudioUrl: () => string | null;
}

// Default empty track state
const defaultState = {
  currentTrack: null,
  audioQuality: 'lq' as const, // ALWAYS default to LQ
  isPlaying: false,
  currentTime: 0,
  duration: 0,
  volume: 80,
  isMuted: false,
  repeatMode: 'none' as const,
};

export const useAudioStore = create<AudioState>((set, get) => ({
  ...defaultState,
  
  setTrack: (track) => {
    set({
      currentTrack: track,
      currentTime: 0,
      isPlaying: false, // Reset playing state when new track is set
    });
  },
  
  setAudioQuality: (quality) => {
    set({ audioQuality: quality });
  },
  
  setIsPlaying: (playing) => {
    set({ isPlaying: playing });
  },
  
  setCurrentTime: (time) => {
    set({ currentTime: time });
  },
  
  setDuration: (duration) => {
    set({ duration });
  },
  
  setVolume: (volume) => {
    set({ volume, isMuted: volume === 0 });
  },
  
  toggleMute: () => {
    const { isMuted, volume } = get();
    if (isMuted) {
      set({ isMuted: false, volume: volume === 0 ? 50 : volume });
    } else {
      set({ isMuted: true });
    }
  },
  
  toggleRepeat: () => {
    const modes: ('none' | 'one' | 'all')[] = ['none', 'one', 'all'];
    const { repeatMode } = get();
    const currentIndex = modes.indexOf(repeatMode);
    set({ repeatMode: modes[(currentIndex + 1) % modes.length] });
  },
  
  getAudioUrl: () => {
    const { currentTrack, audioQuality } = get();
    if (!currentTrack) return null;
    
    // ALWAYS prefer LQ, fallback to HQ only if LQ unavailable
    if (audioQuality === 'lq') {
      return currentTrack.lqUrl || currentTrack.hqUrl;
    }
    return currentTrack.hqUrl || currentTrack.lqUrl;
  },
}));
