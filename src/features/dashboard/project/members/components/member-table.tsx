import { Badge } from "@/components/ui/badge";
import { MemberRole } from "@/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Project = {
  projectId: 284823332670,
  role: "member",
};

const MemberTable = ({ members }: any) => {
  return (
    <div className="border rounded-tl-lg rounded-tr-lg overflow-auto w-full">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="min-w-[250px] text-foreground">
              Name
            </TableHead>
            <TableHead className="min-w-[200px] text-foreground">
              Email
            </TableHead>
            <TableHead className="min-w-[200px] text-foreground">
              Role
            </TableHead>
            <TableHead className="text-foreground">Status</TableHead>
            {Project?.role === MemberRole.OWNER && (
              <TableHead className="text-foreground">Actions</TableHead>
            )}
          </TableRow>
        </TableHeader>
        <TableBody>
          {members.map((member: any) => (
            <TableRow key={member._id}>
              <TableCell>
                <div className="flex items-center space-x-2">
                  <Avatar className="flex items-center justify-center size-6">
                    <AvatarImage
                      src={member?.user?.avatar?.url}
                      alt="profile-picture"
                    />
                    <AvatarFallback className="bg-foreground text-card">
                      {member.user.fullName[0].toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <span>{member.user.fullName}</span>
                </div>
              </TableCell>
              <TableCell>{member.email}</TableCell>
              <TableCell>
                <Badge className="bg-blue-500">{member.role}</Badge>
              </TableCell>
              <TableCell>
                <Badge className="bg-blue-500">{member.invitationStatus}</Badge>
              </TableCell>

              {Project?.role === MemberRole.OWNER &&
                (Project.role !== MemberRole.OWNER ? (
                  <TableCell className="text-foreground"></TableCell>
                ) : (
                  <TableCell className="text-center">-</TableCell>
                ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default MemberTable;
