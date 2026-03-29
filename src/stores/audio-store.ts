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
  
  // Playlist for skip forward/backward
  playlist: AudioTrack[];
  
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

  // Search query (shared between navbar and page)
  searchQuery: string;
  
  // Actions
  setTrack: (track: AudioTrack, playlist?: AudioTrack[]) => void;
  setPlaylist: (playlist: AudioTrack[]) => void;
  skipForward: () => void;
  skipBackward: () => void;
  setAudioQuality: (quality: 'lq' | 'hq') => void;
  setIsPlaying: (playing: boolean) => void;
  setCurrentTime: (time: number) => void;
  setDuration: (duration: number) => void;
  setVolume: (volume: number) => void;
  toggleMute: () => void;
  toggleRepeat: () => void;
  setSearchQuery: (query: string) => void;
  
  // Get the active audio URL (LQ by default, fallback to HQ)
  getAudioUrl: () => string | null;
}

// Default empty track state
const defaultState = {
  currentTrack: null,
  playlist: [] as AudioTrack[],
  audioQuality: 'lq' as const, // ALWAYS default to LQ
  isPlaying: false,
  currentTime: 0,
  duration: 0,
  volume: 80,
  isMuted: false,
  repeatMode: 'none' as const,
  searchQuery: '',
};

export const useAudioStore = create<AudioState>((set, get) => ({
  ...defaultState,
  
  setTrack: (track, playlist?) => {
    const updates: Partial<AudioState> = {
      currentTrack: track,
      currentTime: 0,
      isPlaying: false,
    };
    if (playlist) {
      updates.playlist = playlist;
    }
    set(updates as AudioState);
  },

  setPlaylist: (playlist) => {
    set({ playlist });
  },

  skipForward: () => {
    const { currentTrack, playlist, repeatMode } = get();
    if (!currentTrack || playlist.length === 0) return;
    
    const currentIndex = playlist.findIndex(t => t.id === currentTrack.id);
    if (currentIndex === -1) return;
    
    let nextIndex = currentIndex + 1;
    if (nextIndex >= playlist.length) {
      if (repeatMode === 'all') {
        nextIndex = 0;
      } else {
        return; // End of playlist
      }
    }
    
    set({
      currentTrack: playlist[nextIndex],
      currentTime: 0,
      isPlaying: false,
    });
  },

  skipBackward: () => {
    const { currentTrack, playlist, currentTime } = get();
    if (!currentTrack || playlist.length === 0) return;
    
    // If more than 3 seconds in, restart current track
    if (currentTime > 3) {
      set({ currentTime: 0 });
      return;
    }
    
    const currentIndex = playlist.findIndex(t => t.id === currentTrack.id);
    if (currentIndex === -1) return;
    
    let prevIndex = currentIndex - 1;
    if (prevIndex < 0) {
      prevIndex = 0; // Stay at first track
    }
    
    set({
      currentTrack: playlist[prevIndex],
      currentTime: 0,
      isPlaying: false,
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

  setSearchQuery: (query) => {
    set({ searchQuery: query });
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
