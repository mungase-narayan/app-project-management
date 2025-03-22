import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

const MemberRole = {
  ADMIN: "Admin",
  MEMBER: "Member",
  OWNER: "Owner",
};
const MEMBER_ROLE_COLORS = {
  [MemberRole.OWNER]: "text-orange-500 bg-orange-100",
  [MemberRole.ADMIN]: "text-red-500 bg-red-100",
  [MemberRole.MEMBER]: "text-blue-500 bg-blue-100",
};
const Project = {
  id: 284823332670,
  name: "CodeMitra",
  description: "Frontend project",
  role: "member",
  owner: {
    fullName: "Narayan Mungase",
    avatar: {
      url: "/images/Narayan-removebg-preview.png",
    },
  },
};
const TableView = () => {
  return (
    <div className="border rounded-tl-lg rounded-tr-lg overflow-auto w-full">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="min-w-[200px] text-foreground">
              Name
            </TableHead>
            <TableHead className="min-w-[200px] text-foreground">
              Description
            </TableHead>
            <TableHead className="min-w-[250px] text-foreground">
              Owner
            </TableHead>
            <TableHead className="text-foreground">Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow key={Project.id}>
            <TableCell className="font-medium">
              <Link
                to={`/dashboard/projects/${Project.id}/details`}
                className="text-active hover:text-active/80"
              >
                {Project.name}
              </Link>
            </TableCell>
            <TableCell>{Project.description}</TableCell>
            <TableCell>
              <div className="flex items-center space-x-2">
                <Avatar className="flex items-center justify-center size-6">
                  <AvatarImage
                    src={Project?.owner?.avatar?.url}
                    alt="profile-picture"
                  />
                  <AvatarFallback className="bg-foreground text-card">
                    {Project.owner.fullName[0].toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <span>{Project.owner.fullName}</span>
              </div>
            </TableCell>
            <TableCell>
              <Badge
                className={cn(
                  MEMBER_ROLE_COLORS[Project.role],
                  "w-[100px] flex items-center justify-center"
                )}
              >
                {Project.role}
              </Badge>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default TableView;
