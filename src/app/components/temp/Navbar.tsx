"use client";
import React, { act, useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/app/utils/cn";
 
function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">Home </HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Event">
        <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/Event">Events</HoveredLink>
            <HoveredLink href="https://vibhavkhare01.github.io/yhills/">Register for Event</HoveredLink>
           
        </div>
        </MenuItem>

        
        <MenuItem setActive={setActive} active={active} item="Abut us">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/instructer">Instructers</HoveredLink>
            <HoveredLink href="/about">About us</HoveredLink>
           
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Navbar