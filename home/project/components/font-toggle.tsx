"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { Type } from "lucide-react";

export function FontToggle() {
  const [isDyslexicFont, setIsDyslexicFont] = React.useState(false);

  useEffect(() => {
    // Apply the font class to the document body
    if (isDyslexicFont) {
      document.documentElement.classList.add('font-dyslexic');
    } else {
      document.documentElement.classList.remove('font-dyslexic');
    }

    // Store the preference
    localStorage.setItem('useDyslexicFont', isDyslexicFont.toString());
  }, [isDyslexicFont]);

  // Load the preference on mount
  useEffect(() => {
    const savedPreference = localStorage.getItem('useDyslexicFont');
    if (savedPreference === 'true') {
      setIsDyslexicFont(true);
    }
  }, []);

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setIsDyslexicFont(!isDyslexicFont)}
      className={isDyslexicFont ? 'bg-accent text-white' : ''}
      title="Toggle OpenDyslexic font"
    >
      <Type className="h-[1.2rem] w-[1.2rem]" />
      <span className="sr-only">Toggle OpenDyslexic font</span>
    </Button>
  );
}