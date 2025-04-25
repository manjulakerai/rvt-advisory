
import { Link } from "react-router-dom";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
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
        <NavigationMenuTrigger className="font-semibold">Services</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
            {["Policy Advice", "Strategic Advice", "Cultural Supervision", "Cultural Training", "Recruitment Guidance", "Retention Strategies", "Business Consultation"].map((service) => (
              <li key={service}>
                <NavigationMenuLink asChild>
                  <Link to="/services" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground font-semibold">
                    <div className="text-sm font-semibold leading-none">{service}</div>
                  </Link>
                </NavigationMenuLink>
              </li>
            ))}
          </ul>
        </NavigationMenuContent>
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
                        <Button variant="default" size="lg" className="w-full font-bold text-sm">
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

              <div className="flex justify-end">
                <Link to="/contact">
                  <Button variant="default" size="lg" className="font-bold">
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
