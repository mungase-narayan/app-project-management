import useUpdateDocumentTitle from "@/hooks/use-update-document-title";
import CreateProject from "./components/create-project";
import TableView from "./components/table-view";

const DashboardProjectPage = () => {
  useUpdateDocumentTitle({
    title: "Your Projects",
  });

  return (
    <div className="relative">
      <div className="flex items-center justify-between">
        <h1 className="text-foreground font-medium">Your Projects</h1>
        <div className="flex items-center justify-center space-x-2">
          <CreateProject />
        </div>
      </div>
      <div className="mt-4">
        <TableView />
      </div>
    </div>
  );
};

export default DashboardProjectPage;
