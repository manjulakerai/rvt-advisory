
import React, { useEffect, useState } from 'react';

interface LoadingAnimationProps {
  onComplete: () => void;
}

const LoadingAnimation = ({ onComplete }: LoadingAnimationProps) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [logoPosition, setLogoPosition] = useState({ top: '50%', left: '50%' });
  const [logoSize, setLogoSize] = useState({ height: '8rem', width: 'auto' }); // Smaller initial logo size

  useEffect(() => {
    // Get the position of the header logo for seamless transition
    const getHeaderLogoPosition = () => {
      const headerLogo = document.querySelector('.header-logo');
      if (headerLogo) {
        const rect = headerLogo.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const viewportWidth = window.innerWidth;
        
        // Calculate position as percentage for responsiveness
        const topPercentage = (rect.top + rect.height / 2) / viewportHeight * 100;
        const leftPercentage = (rect.left + rect.width / 2) / viewportWidth * 100;
        
        return { top: `${topPercentage}%`, left: `${leftPercentage}%` };
      }
      return null;
    };

    // First render - wait for header to be available (double the original time)
    setTimeout(() => {
      const headerPosition = getHeaderLogoPosition();
      if (headerPosition) {
        setLogoPosition(headerPosition);
        // Shrink logo to match header logo size
        setLogoSize({ height: '3rem', width: 'auto' });
        // Start the fade-out transition after logo has moved (double the original time)
        setTimeout(() => {
          setFadeOut(true);
        }, 1000); // Increased from original 500ms
      } else {
        // Fallback if header logo not found
        setFadeOut(true);
      }
    }, 3000); // Increased from original 1500ms

    // Trigger the onComplete callback once animation is done (double the original time)
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 5000); // Increased from original 2500ms

    return () => {
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 bg-primary z-50 flex items-center justify-center transition-opacity duration-2000 ease-in-out ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <img
        src="/lovable-uploads/4b3d46a3-f88d-447d-a32f-11841fa6b7b7.png"
        alt="RVT Advisory"
        className="transition-all duration-2000"
        style={{
          position: 'absolute',
          top: logoPosition.top,
          left: logoPosition.left,
          transform: 'translate(-50%, -50%)',
          height: logoSize.height,
          width: logoSize.width,
        }}
      />
    </div>
  );
};

export default LoadingAnimation;
