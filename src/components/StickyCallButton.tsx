
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useEffect, useState } from "react";

const StickyCallButton = () => {
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);
  
  // Ensure hydration mismatch doesn't occur
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render anything on the server or if not mobile
  if (!mounted || !isMobile) return null;

  return (
    <a 
      href="tel:+61420737339" 
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-md"
    >
      <Button 
        className="w-full shadow-lg" 
        size="lg"
        variant="default"
      >
        <Phone className="mr-2 h-4 w-4" />
        Call Now: 0420 737 339
      </Button>
    </a>
  );
};

export default StickyCallButton;
