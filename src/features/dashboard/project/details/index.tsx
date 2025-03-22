import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import TaskAnalytics from "./components/task-analytics";
import MemberAnalytics from "./components/member-analytics";
import useUpdateDocumentTitle from "@/hooks/use-update-document-title";

const Project = {
  projectId: 284823332670,
  name: "CodeMitra",
  description: "A modern task management tool",
  owner: {
    fullName: "John Doe",
    avatar: {
      url: "https://example.com/images/avatar.jpg",
    },
  },
} as const;

const ProjectDetails = () => {
  useUpdateDocumentTitle({
    title: `Details - ${Project?.name}`,
  });

  return (
    <div className="flex flex-col gap-4">
      <div className="bg-accent relative border p-4 rounded-lg overflow-hidden">
        <h1 className="text-lg font-medium">{Project?.name}</h1>
        <p className="text-sm mt-1 text-muted-foreground">
          {Project?.description}
        </p>
        <div className="mt-2 flex items-center justify-end">
          <Avatar className="flex items-center justify-center size-6">
            <AvatarImage
              src={Project?.owner?.avatar?.url}
              alt="owner-profile"
            />
            <AvatarFallback className="bg-foreground font-medium border text-sm text-card">
              {Project?.owner?.fullName[0].toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <span className="ml-2 text-sm font-medium text-muted-foreground">
            {Project?.owner?.fullName}
          </span>
        </div>
      </div>
      <TaskAnalytics />
      <MemberAnalytics />
    </div>
  );
};

export default ProjectDetails;
