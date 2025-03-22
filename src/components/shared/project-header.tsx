import { PanelsTopLeft, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";

import { cn } from "@/lib/utils";
import { MemberRole } from "@/types";
import { PROJECT_LINKS } from "../../constants/nav-links";
// import { useProjectContext } from "@/providers/project-provider";

const Project = {
    projectId: 284823332670,
    role: "member",
}

const ProjectHeader = () => {
  //   const { project } = useProjectContext();

  return (
    <div className="flex items-center space-x-4 border-b">
      <NavLink
        to={`/dashboard/projects`}
        className={cn("flex items-center justify-center gap-2 pb-1.5")}
      >
        <PanelsTopLeft size={15} />
        <span className="text-sm hidden sm:block">Projects</span>
      </NavLink>

      {PROJECT_LINKS.map((link) => (
        <NavLink
          key={link.id}
          to={`/dashboard/projects/${Project?.projectId}/${link.path}`}
          className={({ isActive }) =>
            cn(
              "flex items-center justify-center gap-2 pb-1.5",
              isActive && "text-active border-b-2 border-active"
            )
          }
        >
          <link.icon size={15} />
          <span className="text-sm hidden sm:block">{link.title}</span>
        </NavLink>
      ))}

      {Project?.role === MemberRole.OWNER && (
        <NavLink
          to={`/dashboard/projects/${Project?.projectId}/settings`}
          className={({ isActive }) =>
            cn(
              "flex items-center justify-center gap-2 pb-1.5",
              isActive && "text-active border-b-2 border-active"
            )
          }
        >
          <Settings size={15} />
          <span className="text-sm hidden sm:block">Settings</span>
        </NavLink>
      )}
    </div>
  );
};

export default ProjectHeader;
