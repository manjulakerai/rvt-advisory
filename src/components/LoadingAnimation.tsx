
import React, { useEffect, useState } from 'react';

interface LoadingAnimationProps {
  onComplete: () => void;
}

const LoadingAnimation = ({ onComplete }: LoadingAnimationProps) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [logoPosition, setLogoPosition] = useState({ top: '50%', left: '50%' });
  const [logoSize, setLogoSize] = useState({ height: '24rem', width: 'auto' }); // Start with larger logo

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

    // First render - wait for header to be available
    setTimeout(() => {
      const headerPosition = getHeaderLogoPosition();
      if (headerPosition) {
        setLogoPosition(headerPosition);
        // Shrink logo to match header logo size
        setLogoSize({ height: '3rem', width: 'auto' });
        // Start the fade-out transition after logo has moved
        setTimeout(() => {
          setFadeOut(true);
        }, 500);
      } else {
        // Fallback if header logo not found
        setFadeOut(true);
      }
    }, 1500);

    // Trigger the onComplete callback once animation is done
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 2500);

    return () => {
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 bg-primary z-50 flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <img
        src="/lovable-uploads/4b3d46a3-f88d-447d-a32f-11841fa6b7b7.png"
        alt="RVT Advisory"
        className="transition-all duration-1000"
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
