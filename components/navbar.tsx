"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Brain, Menu, X } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { FontToggle } from "@/components/font-toggle";
import { ColorToggle } from "@/components/color-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { motion, AnimatePresence } from "framer-motion";

const components: { title: string; href: string }[] = [
  {
    title: "Autism & Neurodiversity",
    href: "/autism-neurodiversity",
  },
  {
    title: "Your Avatar",
    href: "/avatar",
  },
  {
    title: "Training",
    href: "/training",
  },
  {
    title: "Community",
    href: "/community",
  },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-background"
    )}>
      <div className="flex h-16 items-center px-4 container mx-auto">
        <Link 
          href="/" 
          className="flex items-center space-x-2 transition-transform hover:scale-105"
        >
          <motion.div
            initial={{ rotate: 0 }}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <Brain className="h-6 w-6 text-accent" />
          </motion.div>
          <span className="font-bold text-lg">The Neuro Impact</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="mx-6 hidden md:flex">
          <NavigationMenuList>
            {components.map((component) => (
              <NavigationMenuItem key={component.href}>
                <Link href={component.href} legacyBehavior passHref>
                  <NavigationMenuLink 
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "relative transition-colors duration-300",
                      pathname === component.href && "text-accent",
                      "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100"
                    )}
                  >
                    {component.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>

        {/* Accessibility Controls */}
        <div className="ml-auto flex items-center space-x-2">
          <div className="hidden md:flex items-center space-x-2">
            <FontToggle />
            <ColorToggle />
            <ModeToggle />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              {components.map((component) => (
                <Link 
                  key={component.href} 
                  href={component.href}
                  className={cn(
                    "block py-2 px-4 rounded-lg transition-colors",
                    pathname === component.href 
                      ? "bg-accent text-white" 
                      : "hover:bg-accent/10"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {component.title}
                </Link>
              ))}
              <div className="flex items-center space-x-2 pt-4 border-t">
                <FontToggle />
                <ColorToggle />
                <ModeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}