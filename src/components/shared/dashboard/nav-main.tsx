"use client";
import { Home, type LucideIcon } from "lucide-react";
import {
  SidebarContent,
  SidebarMenu,
  useSidebar,
} from "@/components/ui/sidebar";
import { NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export function NavMain({
  items,
}: {
  items: {
    id: number;
    title: string;
    url: string;
    icon: LucideIcon;
    isActive?: boolean;
  }[];
}) {
  const { open, isMobile } = useSidebar();
  const { pathname } = useLocation();
  return (
    <SidebarContent>
      <NavLink
        to={"/dashboard"}
        className={() =>
          cn(
            "flex items-center space-x-2 hover:bg-slate-200/50  p-2 rounded-lg text-foreground",
            pathname == "/dashboard" && "bg-slate-200/50 text-active"
          )
        }
      >
        <Home className="text-blue-500" size={15} />
        <span
          className={cn(
            "text-sm text-blue-500",
            !open && !isMobile && "hidden"
          )}
        >
          Home
        </span>
      </NavLink>
      {items.map((item) => (
        <SidebarMenu key={item.id}>
          <NavLink
            to={item.url}
            className={({ isActive }) =>
              cn(
                "flex items-center space-x-2 hover:bg-slate-200/50  p-2 rounded-lg text-foreground",
                isActive && "bg-slate-200/50  text-active text-blue-500"
              )
            }
          >
            <item.icon size={15} />
            <span className={cn("text-sm", !open && !isMobile && "hidden")}>
              {item.title}
            </span>
          </NavLink>
        </SidebarMenu>
      ))}
    </SidebarContent>
  );
}
