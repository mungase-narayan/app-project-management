import {
  CircleDashedIcon,
  ListTodoIcon,
  ScanEyeIcon,
  CircleCheckBigIcon,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import GridEffect from "../../../../../components/effects/grid-effect";

const Task = {
  status: {
    TODO: "Todo",
    IN_PROGRESS: "In Progress",
    UNDER_REVIEW: "Under Review",
    COMPLETED: "Completed",
  },
  count: {
    TODO: 0,
    IN_PROGRESS: 0,
    UNDER_REVIEW: 0,
    COMPLETED: 0,
  },
};

const TaskAnalytics = () => {
  return (
    <div>
      <h1 className="font-medium mb-2">Your Tasks Analytics</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="w-full relative">
          <GridEffect />
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {Task.status.COMPLETED} Task
            </CardTitle>
            <CircleCheckBigIcon className="text-green-500" size={20} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{Task.count.COMPLETED}</div>
          </CardContent>
        </Card>
        <Card className="w-full relative">
          <GridEffect />
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {Task.status.UNDER_REVIEW} Task
            </CardTitle>
            <ScanEyeIcon className="text-blue-500" size={20} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{Task.count.UNDER_REVIEW}</div>
          </CardContent>
        </Card>
        <Card className="w-full relative">
          <GridEffect />
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {Task.status.TODO} Task
            </CardTitle>
            <ListTodoIcon className="text-red-500" size={20} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{Task.count.TODO}</div>
          </CardContent>
        </Card>
        <Card className="w-full relative">
          <GridEffect />
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {Task.status.IN_PROGRESS} Task
            </CardTitle>
            <CircleDashedIcon className="text-orange-500" size={20} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{Task.count.IN_PROGRESS}</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TaskAnalytics;
