// "use client";

// import * as React from "react";

// import { cn } from "@/lib/utils";
// import { useMediaQuery } from "@/hooks/use-media-query";
// import { Button } from "@/components/ui/button";

// import {
//   Drawer,
//   DrawerClose,
//   DrawerContent,
//   DrawerDescription,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerTitle,
//   DrawerTrigger,
// } from "@/components/ui/drawer";
// import { Checkbox } from "@/components/ui/checkbox";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";

// import { Badge } from "@/components/ui/badge";

// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";

// const permissions = [
//   {
//     permission: "Clan Management",
//     value: "Read & Write",
//   },
//   {
//     permission: "Money Movement",
//     value: "Can approve",
//   },
//   {
//     permission: "Accounts",
//     value: "Read & Write",
//   },
//   {
//     permission: "Collections",
//     value: "Read & Write",
//   },
//   {
//     permission: "Spaces",
//     value: "Read & Write",
//   },
//   {
//     permission: "Logs and Events",
//     value: "Read & Write",
//   },
// ];
// import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
// import { gql, useMutation, useQuery } from "@apollo/client";
// import { toast } from "../ui/use-toast";
// import { nanoid } from "nanoid";
// import { useRouter } from "next/navigation";
// import { createClient } from "@/utils/supabase/client";
// import { ClanType } from "@/utils/types";

// const formSchema = z.object({
//   name: z
//     .string()
//     .min(2, {
//       message: "Clan name must be at least 2 characters.",
//     })
//     .max(50),
//   display_name: z.string().min(2).max(50),
//   email: z.string().min(2).max(50),
//   //   slug: z.string().min(2).max(50),
//   type: z.string(),
//   isPublic: z.boolean(),
// });

// export default function InviteMembers({
//   children, // will be a page or nested layout
// }: {
//   children?: React.ReactNode;
// }) {
//   const [open, setOpen] = React.useState(false);
//   const isDesktop = useMediaQuery("(min-width: 768px)");

//   const title = "Invite Members";
//   const description = "Send invites to members along with their access rights.";

//   return (
//     <Drawer open={open} onOpenChange={setOpen}>
//       <DrawerTrigger asChild>{children}</DrawerTrigger>
//       <DrawerContent>
//         <DrawerHeader className="text-left">
//           <DrawerTitle className="text-2xl font-semibold">{title}</DrawerTitle>
//           <DrawerDescription>{description}</DrawerDescription>
//         </DrawerHeader>
//         <InviteMembersForm className="" />
//       </DrawerContent>
//     </Drawer>
//   );
// }

// function InviteMembersForm({ className }: React.ComponentProps<"form">) {
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       isPublic: false,
//     },
//   });
//   const [processing, setProcessing] = React.useState(false);
//   const supabase = createClient();
//   const router = useRouter();

//   const query = gql`
//     query ListClanTypes {
//       listClanTypes {
//         description
//         name
//         refCode
//       }
//     }
//   `;

//   const {
//     data: types,
//     error: type_err,
//     loading: ld,
//   } = useQuery(query, {
//     fetchPolicy: "cache-first",
//   });

//   console.log(types);
//   console.log(type_err?.message);

//   const UPDATE_BIO = gql`
//     mutation CreateClan($input: CreateClanInput!) {
//       createClan(input: $input) {
//         id
//       }
//     }
//   `;

//   const [createClan, { data, loading, error }] = useMutation(UPDATE_BIO);
//   console.log(data);
//   console.log(error);

//   // 2. Define a submit handler.
//   function onSubmit(values: z.infer<typeof formSchema>) {
//     console.log(values);

//     setProcessing(true);
//     toast({
//       title: "You created a clan!",
//       description: (
//         <div className="mt-2 w-[340px] rounded-md">
//           <div>
//             Redirecting to settings now so you can configure your clan.{" "}
//             {JSON.stringify(values)}
//           </div>
//         </div>
//       ),
//     });
//     // Do something with the form values.
//     // ✅ This will be type-safe and validated.
//     createClan({
//       variables: {
//         input: {
//           name: values.name,
//           display_name: values.display_name,
//           email: values.email,
//           slug: nanoid(15),
//           clanType: values.type,
//           is_public: values.isPublic,
//         },
//       },
//     });
//     if (error?.message) {
//       toast({
//         title: "You created a clan!",
//         description: (
//           <div className="mt-2 w-[340px] rounded-md">
//             <div>
//               Redirecting to settings now so you can configure your clan.
//             </div>
//           </div>
//         ),
//       });
//     }

//     setProcessing(false);
//     router.push(`/a/${data.createClan?.id}/settings`);
//   }
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-5 px-4">
//       <Form {...form}>
//         <form
//           className={cn("grid items-start gap-0.5", className)}
//           onSubmit={form.handleSubmit(onSubmit)}
//         >
//           <FormField
//             control={form.control}
//             name="email"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Email</FormLabel>
//                 <FormControl>
//                   <Input placeholder="" {...field} />
//                 </FormControl>
//                 <FormDescription>
//                   {/* This is your public display name. */}
//                 </FormDescription>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <br />
//           <Button type="submit" className="w-full">
//             {/* <Icon
//           className="mr-3.5 shrink-0 animate-spin text-xl font-extrabold"
//           aria-hidden="true"
//           name="solar:refresh-bold-duotone"
//         /> */}
//             Submit
//           </Button>
//         </form>
//       </Form>

//       <div className="col-span-2">
//         <div>
//           <div>
//             <h2 className="text-xl font-medium">Administrator</h2>
//             <p className="text-gray-500 mt-1.5 text-sm">
//               Administrators are able to perform some actions on all blocks
//               including transfers, member management and so on. Owners are given
//               admin rights by default but this can be changed by another admin.
//               There&apos;s currently no limit to the number of administrators a
//               clan can have but we advise catiously providing access.
//             </p>
//           </div>
//         </div>
//         <Table className="mt-7 mb-10">
//           <TableHeader>
//             <TableRow>
//               <TableHead className="font-medium text-lg text-gray-950 px-0">
//                 Permissions
//               </TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {permissions.map((p, i) => (
//               <TableRow key={i}>
//                 <TableCell className="font-medium px-0 text-gray-500">
//                   {p.permission}
//                 </TableCell>

//                 <TableCell className="text-right">
//                   <Badge
//                     variant="secondary"
//                     className="text-green-600 bg-green-200"
//                   >
//                     {p.value}
//                   </Badge>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </div>
//     </div>
//   );
// }
