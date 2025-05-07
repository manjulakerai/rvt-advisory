
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";

const HeroSection = () => {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const [playerReady, setPlayerReady] = useState(false);
  
  useEffect(() => {
    // YouTube API script loading
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    // Initialize player when API is ready
    window.onYouTubeIframeAPIReady = () => {
      new window.YT.Player('youtube-player', {
        height: '100%',
        width: '100%',
        videoId: '7z9MEn5RLpY', // The YouTube video ID
        playerVars: {
          autoplay: 1,
          loop: 1,
          mute: 1,
          controls: 0,
          showinfo: 0,
          modestbranding: 1,
          rel: 0,
          enablejsapi: 1,
          playlist: '7z9MEn5RLpY', // Required for looping
          start: 1, // Skip the first second
          end: 178, // End before the last second (assuming video is 180 seconds)
        },
        events: {
          onReady: (event) => {
            // Set the highest quality first, before starting playback
            event.target.setPlaybackQuality('hd1080');
            
            // Make the container visible before playing
            if (videoContainerRef.current) {
              videoContainerRef.current.style.opacity = '1';
              videoContainerRef.current.style.transition = 'opacity 1.5s ease';
            }
            
            // Slight delay before playing to ensure quality is set
            setTimeout(() => {
              event.target.playVideo();
              setPlayerReady(true);
            }, 100);
          },
          onStateChange: (event) => {
            // If the video ends, restart it (for smoother looping)
            if (event.data === window.YT.PlayerState.ENDED) {
              event.target.seekTo(1);
              event.target.playVideo();
            }
            
            // If video is buffering, ensure the container stays visible
            if (event.data === window.YT.PlayerState.BUFFERING) {
              if (videoContainerRef.current) {
                videoContainerRef.current.style.opacity = '1';
              }
            }
          }
        }
      });
    };

    return () => {
      // Clean up
      window.onYouTubeIframeAPIReady = null;
      delete window.onYouTubeIframeAPIReady;
    };
  }, []);

  return (
    <div className="relative min-h-[60vh] md:h-[80vh] flex items-center overflow-hidden">
      {/* Video Background Container - with initial opacity 0 and CSS controlling the fade */}
      <div 
        ref={videoContainerRef} 
        className="absolute inset-0 w-full h-full overflow-hidden opacity-0 z-0" 
        style={{ transition: 'opacity 1.5s ease-in-out' }}
      >
        <div 
          id="youtube-player" 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] md:w-full h-[150%] min-h-[100vh] aspect-video object-cover"
        ></div>
      </div>
      
      {/* Dark Overlay - Reduced opacity */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 z-10"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-20 relative py-12 md:py-0">
        <div className="max-w-3xl">
          <span className="px-4 py-1 bg-primary text-white text-xs md:text-sm uppercase tracking-wider font-bold rounded-full mb-4 inline-block">
            Strategic Advisory Services
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 leading-tight text-white">
            Transforming Organisations Through Cultural Wisdom
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-gray-200 font-medium">
            Expert policy advice, strategic guidance, and cultural competency training to empower businesses, government agencies, and Aboriginal organisations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <Link to="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full text-sm sm:text-base bg-primary hover:bg-primary/90 text-white font-bold py-3 px-4 sm:px-6">
                BOOK YOUR INCEPTION MEETING NOW
              </Button>
            </Link>
            <Link to="/about" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full text-sm sm:text-base border-white bg-white/80 hover:bg-transparent text-black hover:text-white font-bold py-3 px-4 sm:px-6 transition-colors duration-300"
              >
                Learn More About Renee
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
