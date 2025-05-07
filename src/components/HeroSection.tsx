
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import React, { useEffect, useRef } from "react";

const HeroSection = () => {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // YouTube API script loading
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    // Initialize player when API is ready
    window.onYouTubeIframeAPIReady = () => {
      new window.YT.Player('youtube-player', {
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
        },
        events: {
          onReady: (event) => {
            event.target.playVideo();
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
      {/* Video Background Container */}
      <div ref={videoContainerRef} className="absolute inset-0 w-full h-full overflow-hidden">
        <div id="youtube-player" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] min-w-[100vw] min-h-[100vh]"></div>
      </div>
      
      {/* Dark Overlay - Reduced opacity from 90% to 60% and from 70% to 40% */}
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
                className="w-full text-sm sm:text-base border-white hover:bg-white/20 text-white font-bold py-3 px-4 sm:px-6 transition-colors duration-300"
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
