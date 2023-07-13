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
import {
  SignInButton,
  UserButton,
  auth,
  currentUser,
  useAuth,
} from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { set } from "zod";

const NavBar = () => {
  const { isLoaded, userId, sessionId, getToken } = useAuth();

  console.log(sessionId);

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
        <NavigationMenuList>
          <NavigationMenuLink></NavigationMenuLink>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="mr-10 hover:underline underline-offset-4">
        {userId ? <UserButton afterSignOutUrl="/" /> : <SignInButton />}
      </div>
    </div>
  );
};

export default NavBar;
