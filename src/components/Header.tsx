
import { Link } from "react-router-dom";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import TopHeader from "./TopHeader";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const isMobile = useIsMobile();

  const NavigationItems = () => (
    <NavigationMenuList className={isMobile ? "flex-col space-y-4" : ""}>
      <NavigationMenuItem>
        <Link to="/" className={`${navigationMenuTriggerStyle()} font-semibold`}>
          Home
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
      <header className="container mx-auto py-4">
        <div className="grid grid-cols-3 items-center gap-4">
          <div className="flex justify-start">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/adb32038-1f7a-4d8a-b54e-a11f843a705a.png" 
                alt="RVT Advisory" 
                className="h-8 md:h-12 w-auto"
              />
            </Link>
          </div>
          
          {isMobile ? (
            <div className="col-span-2 flex justify-end">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <div className="mt-8">
                    <NavigationMenu orientation="vertical" className="w-full">
                      <NavigationItems />
                    </NavigationMenu>
                    <div className="mt-8">
                      <Link to="/contact" className="w-full">
                        <Button variant="default" size="lg" className="w-full font-bold text-sm bg-[#5F3873] hover:bg-[#5F3873]/90 border-0 transition-all duration-300 hover:scale-110 hover:shadow-lg">
                          BOOK YOUR INCEPTION MEETING
                        </Button>
                      </Link>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          ) : (
            <>
              <div className="flex justify-center">
                <NavigationMenu>
                  <NavigationItems />
                </NavigationMenu>
              </div>

              <div className="hidden xl:flex justify-end">
                <Link to="/contact">
                  <Button variant="default" size="lg" className="font-bold bg-[#5F3873] hover:bg-[#5F3873]/90 border-0 transition-all duration-300 hover:scale-110 hover:shadow-lg">
                    BOOK YOUR INCEPTION MEETING NOW
                  </Button>
                </Link>
              </div>
            </>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
