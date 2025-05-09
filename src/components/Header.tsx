
import { Link } from "react-router-dom";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import TopHeader from "./TopHeader";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const isMobile = useIsMobile();

  const LeftNavigationItems = () => (
    <NavigationMenuList className={isMobile ? "flex-col space-y-4" : "flex-row space-x-2"}>
      <NavigationMenuItem>
        <Link to="/about" className={`${navigationMenuTriggerStyle()} font-semibold text-white bg-transparent hover:bg-primary-foreground/10`}>
          About
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link to="/services" className={`${navigationMenuTriggerStyle()} font-semibold text-white bg-transparent hover:bg-primary-foreground/10`}>
          Services
        </Link>
      </NavigationMenuItem>
    </NavigationMenuList>
  );

  const RightNavigationItems = () => (
    <NavigationMenuList className={isMobile ? "flex-col space-y-4 mt-4" : "flex-row space-x-2"}>
      <NavigationMenuItem>
        <Link to="/media" className={`${navigationMenuTriggerStyle()} font-semibold text-white bg-transparent hover:bg-primary-foreground/10`}>
          Media
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link to="/contact" className={`${navigationMenuTriggerStyle()} font-semibold text-white bg-transparent hover:bg-primary-foreground/10`}>
          Contact
        </Link>
      </NavigationMenuItem>
    </NavigationMenuList>
  );

  const MobileNavigationItems = () => (
    <NavigationMenuList className="flex-col space-y-4">
      <NavigationMenuItem>
        <Link to="/" className={`${navigationMenuTriggerStyle()} font-semibold flex items-center justify-center`}>
          <img 
            src="/lovable-uploads/adb32038-1f7a-4d8a-b54e-a11f843a705a.png" 
            alt="RVT Advisory" 
            className="h-8 w-auto header-logo"
          />
          <span className="sr-only">Home</span>
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link to="/about" className={`${navigationMenuTriggerStyle()} font-semibold`}>
          About
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link to="/services" className={`${navigationMenuTriggerStyle()} font-semibold`}>
          Services
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link to="/media" className={`${navigationMenuTriggerStyle()} font-semibold`}>
          Media
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link to="/contact" className={`${navigationMenuTriggerStyle()} font-semibold`}>
          Contact
        </Link>
      </NavigationMenuItem>
    </NavigationMenuList>
  );

  return (
    <>
      <TopHeader />
      <header className="bg-primary py-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-3 items-center gap-4">
            {isMobile ? (
              <>
                <div className="flex justify-start">
                  <Link to="/" className="flex items-center">
                    <img 
                      src="/lovable-uploads/adb32038-1f7a-4d8a-b54e-a11f843a705a.png" 
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
                    <SheetContent>
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
                        <Link to="/about" className={`${navigationMenuTriggerStyle()} font-semibold text-white bg-transparent hover:bg-primary-foreground/10`}>
                          About
                        </Link>
                      </NavigationMenuItem>
                      <NavigationMenuItem>
                        <Link to="/services" className={`${navigationMenuTriggerStyle()} font-semibold text-white bg-transparent hover:bg-primary-foreground/10`}>
                          Services
                        </Link>
                      </NavigationMenuItem>
                      <NavigationMenuItem className="mx-2">
                        <Link to="/" className="flex items-center transition-transform duration-300 hover:scale-105">
                          <img 
                            src="/lovable-uploads/adb32038-1f7a-4d8a-b54e-a11f843a705a.png" 
                            alt="RVT Advisory" 
                            className="h-12 md:h-16 w-auto header-logo"
                          />
                        </Link>
                      </NavigationMenuItem>
                      <NavigationMenuItem>
                        <Link to="/media" className={`${navigationMenuTriggerStyle()} font-semibold text-white bg-transparent hover:bg-primary-foreground/10`}>
                          Media
                        </Link>
                      </NavigationMenuItem>
                      <NavigationMenuItem>
                        <Link to="/contact" className={`${navigationMenuTriggerStyle()} font-semibold text-white bg-transparent hover:bg-primary-foreground/10`}>
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
    </>
  );
};

export default Header;
