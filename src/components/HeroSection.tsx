
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";

const HeroSection = () => {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const [playerReady, setPlayerReady] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const ytPlayerRef = useRef<any>(null);
  const apiLoadedRef = useRef<boolean>(false);

  const openCalendly = () => {
    window.open("https://calendly.com/manjulakerai/discoverymeeting", "_blank");
  };

  // Function to initialize YouTube player
  const initYouTubePlayer = () => {
    if (!window.YT || !window.YT.Player) {
      console.log("YouTube API not loaded yet");
      return;
    }

    console.log("Initializing YouTube player");
    
    // Check if there's already an iframe element with this ID
    // If so, remove it to prevent duplicate players
    const existingIframe = document.getElementById('youtube-player');
    if (existingIframe && existingIframe.tagName === 'IFRAME') {
      existingIframe.remove();
    }
    
    // Create a new div element for the player
    const playerDiv = document.createElement('div');
    playerDiv.id = 'youtube-player';
    playerDiv.className = 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] md:w-full h-auto min-h-[100vh] aspect-video object-cover';
    
    // Add the div to the container
    if (videoContainerRef.current) {
      videoContainerRef.current.appendChild(playerDiv);
    }

    // Initialize the new player
    ytPlayerRef.current = new window.YT.Player('youtube-player', {
      videoId: 'kHAWj3D4hp0',
      playerVars: {
        autoplay: 1,
        loop: 1,
        mute: 1,
        controls: 0,
        showinfo: 0,
        modestbranding: 1,
        rel: 0,
        enablejsapi: 1,
        playlist: 'kHAWj3D4hp0',
        start: 57,
        end: 68
      },
      events: {
        onReady: event => {
          event.target.setPlaybackQuality('hd1080');
          event.target.playVideo();
          setPlayerReady(true);
        },
        onStateChange: event => {
          // If the video ends, restart it (for smoother looping)
          if (event.data === window.YT.PlayerState.ENDED) {
            event.target.seekTo(57);
            event.target.playVideo();
          }
        }
      }
    });
  };

  useEffect(() => {
    // Show content with a slight delay
    const contentTimer = setTimeout(() => {
      setContentVisible(true);
    }, 300);

    // Check if YouTube API is already loaded
    if (window.YT && window.YT.Player) {
      console.log("YouTube API already loaded");
      initYouTubePlayer();
    } else if (!apiLoadedRef.current) {
      console.log("Loading YouTube API");
      apiLoadedRef.current = true;
      
      // YouTube API script loading
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

      // Initialize player when API is ready
      window.onYouTubeIframeAPIReady = () => {
        console.log("YouTube API ready");
        initYouTubePlayer();
      };
    }

    return () => {
      // Clean up
      clearTimeout(contentTimer);
      
      // Clean up YouTube player if it exists
      if (ytPlayerRef.current) {
        ytPlayerRef.current.destroy();
        ytPlayerRef.current = null;
      }
    };
  }, []);

  return (
    <div className="relative min-h-[60vh] md:h-[80vh] flex items-center overflow-hidden">
      {/* Video Background Container */}
      <div 
        ref={videoContainerRef} 
        className={`absolute inset-0 w-full h-full overflow-hidden transition-opacity duration-1000 ${playerReady ? 'opacity-100' : 'opacity-0'}`}
      >
        {/* YouTube player will be injected here */}
      </div>
      
      {/* Dark Overlay - Reduced opacity */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 z-10"></div>
      
      {/* Content */}
      <div className={`container mx-auto px-4 z-20 relative py-12 md:py-0 transition-all duration-1000 transform ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-3xl">
          <span className="px-4 py-1 bg-primary text-white text-xs md:text-sm uppercase tracking-wider font-bold rounded-full mb-4 inline-block">
            Strategic Advisory Services
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 leading-tight text-white">
            Transforming Organisations Through Cultural Wisdom
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-gray-200 font-medium">Expert policy advice, strategic guidance and cultural competency training to empower businesses, corporate, government agencies and community organisations.</p>
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <Button 
              size="lg" 
              className="w-full sm:w-auto text-sm sm:text-base bg-[#5F3873] hover:bg-[#5F3873]/90 text-white hover:text-white font-bold py-3 px-4 sm:px-6 border-0 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              onClick={openCalendly}
            >
              BOOK YOUR INCEPTION MEETING NOW
            </Button>
            <Link to="/about" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full text-sm sm:text-base border-white bg-transparent hover:bg-white/80 text-white hover:text-black font-bold py-3 px-4 sm:px-6 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
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
