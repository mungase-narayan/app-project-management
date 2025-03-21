"use client";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ArrowUpWideNarrow } from "lucide-react";
import { NavLink } from "react-router-dom";

export function PMCNameCard() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          className="bg-slate-200/50 hover:bg-slate-200/50 rounded-lg"
          size="lg"
          asChild
        >
          <NavLink to={"/dashboard"}>
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-black/80 text-sidebar-primary-foreground">
              <ArrowUpWideNarrow />
            </div>
            <div className="grid flex-1 text-left leading-tight">
              <div className="flex items-center">
                <NavLink
                  to={"/dashboard"}
                  className="text-xl font-bold flex items-center"
                >
                  NextGen
                  <span className="text-[#f5923e] relative">
                    U
                    <span className="absolute top-1 right-0 w-1.5 h-1.5 bg-[#f5923e] rounded-full"></span>
                  </span>
                </NavLink>
              </div>
            </div>
          </NavLink>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
