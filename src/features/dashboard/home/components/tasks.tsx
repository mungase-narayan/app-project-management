import { ClipboardPlus, ListTodo } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const Tasks = () => {
  return (
    <>
      <Card className="w-full h-full">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Total Assigned Tasks
          </CardTitle>
          <ListTodo className="h-4 w-4 text-muted-foreground" />
        </CardHeader>

        <CardContent>
          <div className="text-2xl font-bold">02</div>
          <div className="flex sm:items-center flex-col gap-2 sm:flex-row sm:justify-between mt-2 text-xs">
            Total tasks assigned to you across all projects
          </div>
        </CardContent>
      </Card>
      <Card className="w-full h-full">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Total Created Tasks
          </CardTitle>
          <ClipboardPlus className="h-4 w-4 text-muted-foreground" />
        </CardHeader>

        <CardContent>
          <div className="text-2xl font-bold">02</div>
          <div className="flex sm:items-center flex-col gap-2 sm:flex-row sm:justify-between mt-2 text-xs">
            Total tasks created by you across all projects
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Tasks;
