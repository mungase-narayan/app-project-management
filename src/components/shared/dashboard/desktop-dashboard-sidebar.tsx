import React from "react";
import dashboardLinks from "../../../configs/dashboard-links";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { PMCNameCard } from "./pms-card";
import { NavMain } from "./nav-main";
import { NavSecondary } from "./nav-secondary";
import { Separator } from "@/components/ui/separator";
import DashboardProfileCard from "./dashboard-profile-card";

type DesktopDashboardSidebarProps = React.ComponentProps<typeof Sidebar>;

const DesktopDashboardSidebar: React.FC<DesktopDashboardSidebarProps> = ({
  ...props
}) => {
  return (
    <Sidebar collapsible="icon" className="border-r-0" {...props}>
      <SidebarHeader>
        <PMCNameCard />
        <Separator orientation="horizontal" className="w-full" />
        <NavMain items={dashboardLinks.navMain} />
      </SidebarHeader>
      <SidebarContent>
        <NavSecondary items={dashboardLinks.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarRail />
      <Separator orientation="horizontal" />
      <SidebarFooter>
        <DashboardProfileCard />
      </SidebarFooter>
    </Sidebar>
  );
};

export default DesktopDashboardSidebar;
