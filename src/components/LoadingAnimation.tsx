
import React, { useEffect, useState } from 'react';

interface LoadingAnimationProps {
  onComplete: () => void;
}

const LoadingAnimation = ({ onComplete }: LoadingAnimationProps) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start the fade-out transition after 2 seconds
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 2000);

    // Trigger the onComplete callback once animation is done
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 2500); // Reduced from 2700ms to 2500ms for smoother transition

    return () => {
      clearTimeout(timer);
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
        src="/lovable-uploads/adb32038-1f7a-4d8a-b54e-a11f843a705a.png"
        alt="RVT Advisory"
        className="h-24 w-auto animate-pulse"
      />
    </div>
  );
};

export default LoadingAnimation;
