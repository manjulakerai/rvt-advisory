
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
        onStateChange?: (event: { data: number }) => void;
      };
    }
  ) => void;
}

interface Window {
  YT: YT;
  onYouTubeIframeAPIReady: (() => void) | null;
}
