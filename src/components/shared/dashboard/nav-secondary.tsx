import React from "react";
import { type LucideIcon } from "lucide-react";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  useSidebar,
} from "@/components/ui/sidebar";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

export function NavSecondary({
  items,
  ...props
}: {
  items: {
    id: number;
    title: string;
    url: string;
    icon: LucideIcon;
    badge?: React.ReactNode;
  }[];
} & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
  const { open, isMobile } = useSidebar();
  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenu key={item.id}>
              <NavLink
                to={item.url}
                className={({ isActive }) =>
                  cn(
                    "flex items-center space-x-2 hover:bg-slate-200/50  p-2 rounded-lg text-foreground",
                    isActive && "bg-slate-200/50  text-active"
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
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
