import {
  CircleCheckBigIcon,
  CircleDashedIcon,
  ListTodoIcon,
  ScanEyeIcon,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import GridEffect from "../../../../components/effects/grid-effect";

const TaskStatusConstants = {
  TODO: "Todo",
  IN_PROGRESS: "In Progress",
  UNDER_REVIEW: "Under Review",
  COMPLETED: "Completed",
};
const TaskAnalyticsCards = () => {
  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="w-full relative">
          <GridEffect />
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {TaskStatusConstants.COMPLETED} Task
            </CardTitle>
            <CircleCheckBigIcon className="text-green-500" size={20} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">30</div>
          </CardContent>
        </Card>
        <Card className="w-full relative">
          <GridEffect />
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {TaskStatusConstants.IN_PROGRESS} Task
            </CardTitle>
            <CircleDashedIcon className="text-orange-500" size={20} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">06</div>
          </CardContent>
        </Card>
        <Card className="w-full relative">
          <GridEffect />
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {TaskStatusConstants.TODO} Task
            </CardTitle>
            <ListTodoIcon className="text-red-500" size={20} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">16</div>
          </CardContent>
        </Card>
        <Card className="w-full relative">
          <GridEffect />
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {TaskStatusConstants.UNDER_REVIEW} Task
            </CardTitle>
            <ScanEyeIcon className="text-blue-500" size={20} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">26</div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default TaskAnalyticsCards;
