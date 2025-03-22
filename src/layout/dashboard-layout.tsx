import { Outlet } from "react-router-dom";

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import DesktopDashboardSidebar from "@/components/shared/dashboard/desktop-dashboard-sidebar";

const DashboardLayout = () => {
  return (
    <SidebarProvider>
      <DesktopDashboardSidebar />
      <SidebarInset>
        <header className="flex justify-between h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className=" h-4" />
          </div>

          <div className="flex items-center px-6">
            <Avatar className="bg-black/40">
              <AvatarImage
                src="/images/Narayan-removebg-preview.png"
                alt="@shadcn"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </header>
        <Separator orientation="horizontal" />
        <div className="m-4">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardLayout;
