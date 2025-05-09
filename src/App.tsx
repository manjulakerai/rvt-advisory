
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Media from "./pages/Media";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import StickyCallButton from "./components/StickyCallButton";
import ComingSoon from "./pages/ComingSoon";
import LoadingAnimation from "./components/LoadingAnimation";

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);
  const [contentReady, setContentReady] = useState(false);
  
  // Prepare content before removing loading screen
  useEffect(() => {
    if (!loading && !contentReady) {
      // Short delay to ensure DOM is ready before showing content
      const timer = setTimeout(() => setContentReady(true), 100); // Doubled from 50ms to 100ms
      return () => clearTimeout(timer);
    }
  }, [loading, contentReady]);
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* Style applied to the whole app to prevent white flashes during transitions */}
        <div className="bg-primary min-h-screen">
          <Toaster />
          <Sonner />
          {loading && <LoadingAnimation onComplete={() => setLoading(false)} />}
          <div className={`transition-opacity duration-2000 ${contentReady ? 'opacity-100' : 'opacity-0'}`}>
            <BrowserRouter>
              <Routes>
                <Route path="/coming-soon" element={<ComingSoon />} />
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/media" element={<Media />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <StickyCallButton />
            </BrowserRouter>
          </div>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
