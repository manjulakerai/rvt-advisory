
// Type definitions for YouTube Player API
interface YT {
  Player: new (
    elementId: string,
    options: {
      videoId: string;
      playerVars?: {
        autoplay?: number;
        controls?: number;
        loop?: number;
        mute?: number;
        playlist?: string;
        modestbranding?: number;
        rel?: number;
        showinfo?: number;
        enablejsapi?: number;
        start?: number;
        end?: number;
      };
      events?: {
        onReady?: (event: { target: any }) => void;
        onStateChange?: (event: { data: number; target: any }) => void;
      };
    }
  ) => void;
  PlayerState: {
    ENDED: number;
    PLAYING: number;
    PAUSED: number;
    BUFFERING: number;
    CUED: number;
  };
}

interface Window {
  YT: YT;
  onYouTubeIframeAPIReady: (() => void) | null;
}
