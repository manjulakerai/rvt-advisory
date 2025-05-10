
import { Link } from "react-router-dom";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Mail } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const isMobile = useIsMobile();

  const LeftNavigationItems = () => (
    <NavigationMenuList className={isMobile ? "flex-col space-y-4" : "flex-row space-x-2"}>
      <NavigationMenuItem>
        <Link to="/about" className={`${navigationMenuTriggerStyle()} font-semibold text-white bg-transparent hover:bg-primary-foreground/10 hover:text-white`}>
          About
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link to="/services" className={`${navigationMenuTriggerStyle()} font-semibold text-white bg-transparent hover:bg-primary-foreground/10 hover:text-white`}>
          Services
        </Link>
      </NavigationMenuItem>
    </NavigationMenuList>
  );

  const RightNavigationItems = () => (
    <NavigationMenuList className={isMobile ? "flex-col space-y-4 mt-4" : "flex-row space-x-2"}>
      <NavigationMenuItem>
        <Link to="/media" className={`${navigationMenuTriggerStyle()} font-semibold text-white bg-transparent hover:bg-primary-foreground/10 hover:text-white`}>
          Media
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link to="/contact" className={`${navigationMenuTriggerStyle()} font-semibold text-white bg-transparent hover:bg-primary-foreground/10 hover:text-white`}>
          Contact
        </Link>
      </NavigationMenuItem>
    </NavigationMenuList>
  );

  const MobileNavigationItems = () => (
    <NavigationMenuList className="flex-col space-y-4">
      <NavigationMenuItem>
        <Link to="/" className={`${navigationMenuTriggerStyle()} font-semibold flex items-center justify-center text-white bg-primary hover:bg-primary/90`}>
          <img 
            src="/lovable-uploads/4b3d46a3-f88d-447d-a32f-11841fa6b7b7.png" 
            alt="RVT Advisory" 
            className="h-8 w-auto header-logo"
          />
          <span className="sr-only">Home</span>
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link to="/about" className={`${navigationMenuTriggerStyle()} font-semibold text-white bg-primary hover:bg-primary/90`}>
          About
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link to="/services" className={`${navigationMenuTriggerStyle()} font-semibold text-white bg-primary hover:bg-primary/90`}>
          Services
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link to="/media" className={`${navigationMenuTriggerStyle()} font-semibold text-white bg-primary hover:bg-primary/90`}>
          Media
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link to="/contact" className={`${navigationMenuTriggerStyle()} font-semibold text-white bg-primary hover:bg-primary/90`}>
          Contact
        </Link>
      </NavigationMenuItem>
    </NavigationMenuList>
  );

  return (
    <header className="text-white" style={{
      background: isMobile ? 'hsl(var(--primary))' : 'linear-gradient(250deg, hsl(var(--primary)) 50%, rgba(249, 246, 240, 1) 100%)'
    }}>
      {/* Contact Info Section (Previously TopHeader) */}
      <div className="container mx-auto px-4 py-2 border-b border-white/20">
        <div className="flex flex-col sm:flex-row justify-end items-center space-y-2 sm:space-y-0 sm:space-x-6">
          <a href="tel:+61411524370" className="flex items-center hover:opacity-80 transition-opacity text-xs sm:text-sm w-full sm:w-auto justify-center sm:justify-start">
            <Phone className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
            {isMobile ? "Call Us" : "0411 524 370"}
          </a>
          <a href="mailto:info@rvtadvisory.com" className="flex items-center hover:opacity-80 transition-opacity text-xs sm:text-sm w-full sm:w-auto justify-center sm:justify-start">
            <Mail className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
            {isMobile ? "Email Us" : "info@rvtadvisory.com"}
          </a>
        </div>
      </div>

      {/* Main Navigation Section */}
      <div className="container mx-auto py-4">
        <div className="grid grid-cols-3 items-center gap-4">
          {isMobile ? (
            <>
              <div className="flex justify-start">
                <Link to="/" className="flex items-center">
                  <img 
                    src="/lovable-uploads/4b3d46a3-f88d-447d-a32f-11841fa6b7b7.png" 
                    alt="RVT Advisory" 
                    className="h-8 md:h-12 w-auto header-logo"
                  />
                </Link>
              </div>
              <div className="col-span-2 flex justify-end">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-white">
                      <Menu className="h-6 w-6" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent className="bg-primary">
                    <div className="mt-8">
                      <NavigationMenu orientation="vertical" className="w-full">
                        <MobileNavigationItems />
                      </NavigationMenu>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </>
          ) : (
            <>
              <div className="col-span-3 flex justify-center items-center">
                <NavigationMenu className="flex items-center">
                  <NavigationMenuList className="flex-row space-x-2">
                    <NavigationMenuItem>
                      <Link to="/about" className={`${navigationMenuTriggerStyle()} font-semibold text-white bg-transparent hover:bg-primary-foreground/10 hover:text-white`}>
                        About
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link to="/services" className={`${navigationMenuTriggerStyle()} font-semibold text-white bg-transparent hover:bg-primary-foreground/10 hover:text-white`}>
                        Services
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="mx-2">
                      <Link to="/" className="flex items-center transition-transform duration-300 hover:scale-105">
                        <img 
                          src="/lovable-uploads/4b3d46a3-f88d-447d-a32f-11841fa6b7b7.png" 
                          alt="RVT Advisory" 
                          className="h-12 md:h-16 w-auto header-logo"
                        />
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link to="/media" className={`${navigationMenuTriggerStyle()} font-semibold text-white bg-transparent hover:bg-primary-foreground/10 hover:text-white`}>
                        Media
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link to="/contact" className={`${navigationMenuTriggerStyle()} font-semibold text-white bg-transparent hover:bg-primary-foreground/10 hover:text-white`}>
                        Contact
                      </Link>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
