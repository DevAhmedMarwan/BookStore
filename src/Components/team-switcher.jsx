"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
export function TeamSwitcher({ teams }) {
  const [activeTeam, setActiveTeam] = useState(teams[0]);
  if (!activeTeam) {
    return null;
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div size="md" className="flex items-center gap-3 !pt-5">
              <div className="!pl-6 text-lg">
                <FaBars className="flex justify-center items-center cursor-pointer" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate text-lg font-bold">
                  {activeTeam.plan}
                </span>
              </div>
            </div>
          </DropdownMenuTrigger>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
