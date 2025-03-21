import DesktopDashboardSidebar from "./desktop-dashboard-sidebar";

const DashboardSidebar = () => {
  return (
    <div className="w-[60px] lg:w-[250px]">
      <div className="bg-primary h-full py-8 w-full">
        <DesktopDashboardSidebar />
      </div>
    </div>
  );
};

export default DashboardSidebar;
