
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

  // Make sure the component is added to App.tsx to be visible across all pages
  if (!mounted) return null;

  // Always show on mobile, regardless of route
  if (!isMobile) return null;

  return (
    <a 
      href="tel:+61411524370" 
      className="fixed bottom-0 left-0 w-full z-[9999]"
    >
      <Button 
        className="w-full rounded-none py-8 shadow-lg bg-primary hover:bg-primary/90 text-white font-bold text-lg" 
        size="lg"
        variant="default"
      >
        <Phone className="mr-2 h-6 w-6" />
        Call Now: 0411 524 370
      </Button>
    </a>
  );
};

export default StickyCallButton;
