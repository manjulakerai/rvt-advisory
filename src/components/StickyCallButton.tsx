
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
      href="tel:+61411524370" 
      className="fixed bottom-0 left-0 w-full z-50"
    >
      <Button 
        className="w-full rounded-none py-6 shadow-lg" 
        size="lg"
        variant="default"
      >
        <Phone className="mr-2 h-5 w-5" />
        Call Now: 0411 524 370
      </Button>
    </a>
  );
};

export default StickyCallButton;
