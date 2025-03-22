import useUpdateDocumentTitle from "@/hooks/use-update-document-title";
import MemberTable from "./components/member-table";
import { MemberRole } from "../../../../types/index";

const members = [
  {
    _id: "1",
    email: "john@example.com",
    role: MemberRole.ADMIN,
    invitationStatus: "ACCEPTED",
    user: {
      fullName: "John Doe",
      avatar: {
        url: "https://example.com/avatar.jpg",
      },
    },
  },
  {
    _id: "2",
    email: "jane@example.com",
    role: MemberRole.MEMBER,
    invitationStatus: "ACCEPTED",
    user: {
      fullName: "Jane Doe",
      avatar: {
        url: "https://example.com/avatar2.jpg",
      },
    },
  },
  {
    _id: "3",
    email: "emily@example.com",
    role: MemberRole.MEMBER,
    invitationStatus: "ACCEPTED",
    user: {
      fullName: "Emily Doe",
      avatar: {
        url: "https://example.com/avatar3.jpg",
      },
    },
  },
  {
    _id: "4",
    email: "sarah@example.com",
    role: MemberRole.MEMBER,
    invitationStatus: "ACCEPTED",
    user: {
      fullName: "Sarah Doe",
      avatar: {
        url: "https://example.com/avatar4.jpg",
      },
    },
  },
];

const ProjectMembers = () => {
  const Project = {
    name: "CodeMitra",
    total: 4,
  };

  useUpdateDocumentTitle({
    title: `Members - ${Project?.name}`,
  });

  return (
    <div className="space-y-2">
      <div className="p-2 bg-muted border flex-col sm:flex-row rounded-lg flex gap-2 sm:items-center sm:justify-between">
        <div>
          <span className="text-base">Project Members</span>{" "}
          <span className="text-card bg-secondary-foreground rounded-xl sm:px-2 px-4 md:px-4 text-xs md:text-sm py-1">
            {Project.total}
          </span>
        </div>
        <div className="flex items-center sm:space-x-2 flex-col sm:flex-row gap-2">
          {/* <MemberFilters refetchMembers={refetch} /> */}
        </div>
      </div>
      <MemberTable members={members} />
      <div className="pt-3">
        {/* <Pagination
          setFilters={setFilters}
          page={page}
          limit={limit}
          totalPages={totalPages}
          hasNextPage={!hasNextPage}
          hasPrevPage={!hasPrevPage}
        /> */}
      </div>
    </div>
  );
};

export default ProjectMembers;
