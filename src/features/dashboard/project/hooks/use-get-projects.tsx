// import { useQuery } from "react-query";
// import { toast } from "../../../../hooks/use-toast";
// import useAuth from "../../../../hooks/use-auth";
// import apis from "../apis";

// const useGetProjects = () => {
//   const { authToken } = useAuth();

//   const {
//     isLoading,
//     refetch,
//     data: response,
//   } = useQuery({
//     queryFn: () => apis.getProjects({ authToken }),
//     onError: (error: any) => {
//       toast({
//         variant: "destructive",
//         title: "Error",
//         description: error?.response?.data?.message,
//       });
//     },
//     retry: false,
//   });

//   return { isLoading, refetch, projects: response?.data?.data?.projects || [] };
// };

// export default useGetProjects;
