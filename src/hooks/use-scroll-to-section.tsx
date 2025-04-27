
import { useIsMobile } from "./use-mobile";

export const useScrollToSection = () => {
  const isMobile = useIsMobile();

  const scrollToSection = (elementId: string) => {
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
