
import { useIsMobile } from "./use-mobile";
import { useNavigate } from "react-router-dom";

export const useScrollToSection = () => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  const scrollToSection = (elementId: string, currentPath?: string) => {
    // If we have a current path specified and we're not on that path,
    // navigate to that path with the hash
    if (currentPath && window.location.pathname !== currentPath) {
      navigate(`${currentPath}#${elementId}`);
      return;
    }

    const element = document.getElementById(elementId);
    if (!element) return;

    const mobileHeaderOffset = isMobile ? 80 : 0; // Approximate header height on mobile
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - mobileHeaderOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  };

  return scrollToSection;
};
