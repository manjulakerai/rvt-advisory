
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
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
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {loading && <LoadingAnimation onComplete={() => setLoading(false)} />}
        <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
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
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
