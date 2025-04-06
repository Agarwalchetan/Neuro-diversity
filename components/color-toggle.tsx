"use client";

import * as React from "react";
import { Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const colorSchemes = {
  default: {
    name: "Default",
    colors: {
      accent: "262 83% 58%",
      success: "142 76% 36%",
    }
  },
  deuteranopia: {
    name: "Deuteranopia Friendly",
    colors: {
      accent: "230 92% 65%",
      success: "50 100% 50%",
    }
  },
  protanopia: {
    name: "Protanopia Friendly",
    colors: {
      accent: "45 93% 47%",
      success: "190 90% 50%",
    }
  },
  tritanopia: {
    name: "Tritanopia Friendly",
    colors: {
      accent: "0 85% 60%",
      success: "280 90% 50%",
    }
  },
  highContrast: {
    name: "High Contrast",
    colors: {
      accent: "271 91% 65%",
      success: "143 88% 44%",
    }
  },
};

export function ColorToggle() {
  const [activeScheme, setActiveScheme] = React.useState('default');

  const applyColorScheme = (schemeName: string) => {
    const scheme = colorSchemes[schemeName as keyof typeof colorSchemes];
    const root = document.documentElement;
    
    Object.entries(scheme.colors).forEach(([property, value]) => {
      root.style.setProperty(`--${property}`, value);
    });
    
    setActiveScheme(schemeName);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="icon"
          className={activeScheme !== 'default' ? 'bg-accent text-white' : ''}
        >
          <Palette className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle color scheme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Color Schemes</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {Object.entries(colorSchemes).map(([key, scheme]) => (
          <DropdownMenuItem
            key={key}
            onClick={() => applyColorScheme(key)}
            className={activeScheme === key ? 'bg-accent/10' : ''}
          >
            {scheme.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}