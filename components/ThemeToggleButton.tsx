"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "./ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/react-drop-down";

export function ModeToggle() {
  const { setTheme } = useTheme();
  const [position, setPosition] = React.useState("bottom");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-44">
        <DropdownMenuLabel className="flex justify-center items-center">
          Toggle theme
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem
            onClick={() => setTheme("light")}
            value="top"
            className="cursor-pointer"
          >
            Light
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            onClick={() => setTheme("dark")}
            value="middle"
            className="cursor-pointer"
          >
            Dark
          </DropdownMenuRadioItem>
          {/* <DropdownMenuRadioItem
            onClick={() => setTheme("system")}
            value="bottom"
            className="cursor-pointer"
          >
            System
          </DropdownMenuRadioItem> */}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
