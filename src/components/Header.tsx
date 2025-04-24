
import { Link } from "react-router-dom";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

const Header = () => {
  return (
    <header className="bg-brand-cream border-b border-brand-gold">
      <div className="container mx-auto py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-brand-olive hover:text-brand-green transition-colors">Renee Advisory</Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/" className={navigationMenuTriggerStyle() + " text-brand-brown hover:text-brand-green"}>
                  Home
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/about" className={navigationMenuTriggerStyle() + " text-brand-brown hover:text-brand-green"}>
                  About
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-brand-brown hover:text-brand-green">Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-brand-cream">
                    {["Policy Advice", "Strategic Advice", "Cultural Supervision", "Cultural Training", "Recruitment Guidance", "Retention Strategies", "Business Consultation"].map((service) => (
                      <li key={service}>
                        <NavigationMenuLink asChild>
                          <Link to="/services" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-brand-olive hover:text-brand-cream">
                            <div className="text-sm font-medium leading-none">{service}</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/media" className={navigationMenuTriggerStyle() + " text-brand-brown hover:text-brand-green"}>
                  Media
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/contact" className={navigationMenuTriggerStyle() + " text-brand-brown hover:text-brand-green"}>
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
