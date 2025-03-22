// import { useEffect, useState } from "react";
// import { format } from "date-fns";
// import { useForm } from "react-hook-form";
// import ReactQuill from "react-quill";
// import { useMutation } from "react-query";

// import { cn } from "@/lib/utils";
// import { Task } from "@/types";
// import { zodResolver } from "@hookform/resolvers/zod";
// import {
//   CalendarIcon,
//   Edit,
//   Loader2,
//   LoaderCircle,
//   Plus,
//   Sparkles,
// } from "lucide-react";

// import { Button, SelectField } from "@/components";
// import { Textarea } from "@/components/ui/textarea";
// import { Calendar } from "@/components/ui/calendar";
// import { Separator } from "@/components/ui/separator";
// import {
//   Sheet,
//   SheetContent,
//   SheetFooter,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import {
//   Popover,
//   PopoverTrigger,
//   PopoverContent,
// } from "@/components/ui/popover";
// import {
//   PRIORITY_OPTIONS,
//   STATUS_OPTIONS,
//   TASK_TYPE_OPTIONS,
// } from "@/constants";

// import apis from "../apis";
// import { taskShema, TaskValues } from "./task-schema";
// import useCreateTask from "../hooks/use-create-task";
// import useUpdateTask from "../hooks/use-update-task";
// import { toast, useAuth } from "@/hooks";

// interface CreateTaskProps {
//   refetchTasks: () => void;
//   projectId: string;
//   taskId?: string;
//   task?: Task;
//   forUpdate?: boolean;
// }
// const CreateUpdateTask = () => {
//   const [open, setOpen] = useState<boolean>(false);

//   return (
//     <Sheet open={open} onOpenChange={setOpen}>
//       <SheetTrigger asChild>
//           <button className="text-green-500 hover:text-green-500/80 transition-all">
//             <Edit size={15} />
//           </button>
//           <Button
//             variant="primary"
//             size="sm"
//             className="px-4 h-8 w-full rounded-full"
//             onClick={() => setOpen(true)}
//           >
//             <Plus />
//             <span>Create</span>
//           </Button>
//       </SheetTrigger>
//       <SheetContent>
//         <SheetHeader>
//         </SheetHeader>
//         <Separator className="my-3" />
//         <div className="sm:bg-active/5 sm:border sm:border-active/10 sm:p-6 sm:rounded-lg">
//           <Form {...form}>
//             <form
//               className="flex flex-col space-y-6 md:px-0"
//               onSubmit={form.handleSubmit(onSubmit)}
//             >
//               <FormField
//                 control={form.control}
//                 name="title"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel className="flex items-center justify-between w-full">
//                       <span> Title</span>
//                       {loadingResponse ? (
//                         <div className="flex items-center justify-center space-x-1">
//                           <Loader2 className="animate-spin" size={15} />
//                           <span className="text-xs">Generating...</span>
//                         </div>
//                       ) : (
//                         <button
//                           className="text-orange-500"
//                           type="button"
//                           onClick={(e) => {
//                             e.preventDefault();
//                             generate();
//                           }}
//                         >
//                           <Sparkles size={15} />
//                         </button>
//                       )}
//                     </FormLabel>
//                     <FormControl>
//                       <Textarea
//                         placeholder="Task title"
//                         className="focus-visible:ring-1"
//                         {...field}
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 control={form.control}
//                 name="description"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Description</FormLabel>
//                     <FormControl>
//                       <ReactQuill theme="snow" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <div className="gap-2 grid grid-cols-2">
//                 <FormField
//                   control={form.control}
//                   name="status"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Status</FormLabel>
//                       <FormControl>
//                         <SelectField field={field} options={STATUS_OPTIONS} />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//                 <FormField
//                   control={form.control}
//                   name="priority"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Priority</FormLabel>
//                       <FormControl>
//                         <SelectField field={field} options={PRIORITY_OPTIONS} />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//               </div>

//               <FormField
//                 control={form.control}
//                 name="dueDate"
//                 render={({ field }) => (
//                   <FormItem className="flex flex-col">
//                     <FormLabel>Due Date</FormLabel>
//                     <Popover>
//                       <PopoverTrigger asChild>
//                         <FormControl>
//                           <Button
//                             variant={"outline"}
//                             className={cn(
//                               "w-full pl-3 text-left font-normal",
//                               !field.value && "text-muted-foreground"
//                             )}
//                           >
//                             {field.value ? (
//                               format(field.value, "PPP")
//                             ) : (
//                               <span>Pick a date</span>
//                             )}
//                             <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
//                           </Button>
//                         </FormControl>
//                       </PopoverTrigger>
//                       <PopoverContent className="w-auto p-0" align="start">
//                         <Calendar
//                           mode="single"
//                           selected={
//                             field.value ? new Date(field.value) : undefined
//                           }
//                           onSelect={field.onChange}
//                           initialFocus
//                         />
//                       </PopoverContent>
//                     </Popover>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 control={form.control}
//                 name="taskType"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Task Type</FormLabel>
//                     <FormControl>
//                       <SelectField field={field} options={TASK_TYPE_OPTIONS} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <SheetFooter>
//                 <Button
//                   variant="primary"
//                   size="sm"
//                   className="px-6 rounded-full"
//                   type="submit"
//                   disabled={isLoading}
//                 >
//                   {(isLoading || loading) && (
//                     <LoaderCircle className="mr-1 size-4 animate-spin" />
//                   )}
//                   {forUpdate ? "Update" : "Create"}
//                 </Button>
//               </SheetFooter>
//             </form>
//           </Form>
//         </div>
//       </SheetContent>
//     </Sheet>
//   );
// };

// export default CreateUpdateTask;
