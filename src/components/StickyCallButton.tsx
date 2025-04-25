
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const StickyCallButton = () => {
  const isMobile = useIsMobile();

  if (!isMobile) return null;

  return (
    <a 
      href="tel:+61420737339" 
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-md"
    >
      <Button 
        className="w-full shadow-lg" 
        size="lg"
      >
        <Phone className="mr-2 h-4 w-4" />
        Call Now: 0420 737 339
      </Button>
    </a>
  );
};

export default StickyCallButton;
