import useUpdateDocumentTitle from "../../../../hooks/use-update-document-title";
import TaskCard from "./components/task-card";
import TaskFilters from "./components/task-filters";

// import BoardView from "./components/board-view";
// import useGetTasks from "./hooks/use-get-tasks";
// import TaskFilters from "./components/task-filters";

const Project = {
  name: "CodeMitra",
};

const ProjectTasks = () => {
  useUpdateDocumentTitle({
    title: `Tasks - ${Project?.name}`,
  });

  return (
    <div className="space-y-2">
      <div className="p-2 bg-muted border flex-col sm:flex-row rounded-lg flex gap-2 sm:items-center sm:justify-between">
        <div className="flex items-center justify-center space-x-2">
          <h1 className="text-active font-medium truncate sm:w-[100px] lg:w-full">
            {Project?.name}
          </h1>
        </div>
        <TaskFilters />
      </div>
      <TaskCard />
    </div>
  );
};

export default ProjectTasks;
