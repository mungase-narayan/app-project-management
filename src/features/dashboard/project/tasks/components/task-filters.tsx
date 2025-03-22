import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const TaskFilters = () => {
  return (
    <div className="flex items-center sm:space-x-2 flex-col sm:flex-row gap-2">
      <Input className="w-full" placeholder="Filter tasks..." />

      <div className="flex items-center justify-center gap-2 w-full">
        <div className="w-full hidden sm:block">
          <Button>Create Taks</Button>
        </div>
      </div>
    </div>
  );
};

export default TaskFilters;
