"use client";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { UserRoundCog } from "lucide-react";
import { NavLink } from "react-router-dom";

const DashboardProfileCard = () => {
  return (
    <div>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton
            className="bg-slate-200/50 hover:bg-slate-200/50 rounded-lg"
            size="lg"
            asChild
          >
            <NavLink to={"/dashboard/profile"}>
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-black/80 text-sidebar-primary-foreground">
                <UserRoundCog className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">Narayan Mungase</span>
                <span className="truncate text-xs">
                  narayanmungase03@gmail.com
                </span>
              </div>
            </NavLink>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </div>
  );
};

export default DashboardProfileCard;
