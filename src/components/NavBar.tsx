"use client";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";

const NavBar = () => {
  return (
    <div className="w-full items-center justify-between font-mono text-sm lg:flex py-2 border-b-2">
      <NavigationMenu className="ml-10">
        <div className="flex items-center flex-shrink-0 mr-6 text-black">
          <span className="font-bold text-2xl tracking-tight">
            <Link href={"/"}>ConnectCX Tracker</Link>
          </span>
        </div>
        <NavigationMenuList>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} text-lg font-medium transition-all duration-300 ease-in-out`}
            >
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuList>
        <NavigationMenuList>
          <Link href="/upload" legacyBehavior passHref>
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} text-lg font-medium transition-all duration-300 ease-in-out`}
            >
              Upload
            </NavigationMenuLink>
          </Link>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default NavBar;
