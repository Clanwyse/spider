// "use client";

// import * as React from "react";

// import { cn } from "@/lib/utils";
// import { useMediaQuery } from "@/hooks/use-media-query";
// import { Button } from "@/components/ui/button";
// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";
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

// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";

// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
//   CommandList,
// } from "@/components/ui/command";
// import { Icon } from "@iconify/react";
// import { gql, useMutation, useQuery } from "@apollo/client";
// import { toast } from "@/hooks/use-toast";
// import { nanoid } from "nanoid";
// import { useRouter } from "next/navigation";
// import { createClient } from "@/utils/supabase/client";

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

// export default function CreateClan() {
//   const [open, setOpen] = React.useState(false);
//   const isDesktop = useMediaQuery("(min-width: 768px)");

//   const title = "Create Clan";
//   const description = "Enter your clan details to get started in minutes.";

//   if (isDesktop) {
//     return (
//       <Sheet open={open} onOpenChange={setOpen}>
//         <SheetTrigger as-child>
//           <Button
//             variant="ghost"
//             className="px-0 hover:border-none hover:bg-transparent"
//           >
//             <span className="flex items-center justify-center gap-2 text-gray-900">
//               <Icon
//                 icon="solar:widget-add-bold-duotone"
//                 className="text-xl font-bold text-gray-900 dark:text-gray-300"
//               />

//               <p className="text-[0.95rem] font-medium text-gray-900 dark:text-gray-300">
//                 Create Clan
//               </p>
//             </span>
//           </Button>
//         </SheetTrigger>
//         <SheetContent className="dark:bg-darkbg">
//           <SheetHeader className="mb-3 space-y-1">
//             <SheetTitle className="text-2xl font-semibold">{title}</SheetTitle>
//             <SheetDescription> {description} </SheetDescription>
//           </SheetHeader>
//           <div>
//             <CreateClanForm />
//           </div>
//         </SheetContent>
//       </Sheet>
//     );
//   }

//   return (
//     <Drawer open={open} onOpenChange={setOpen}>
//       <DrawerTrigger asChild>
//         <Button variant="outline">
//           <span className="flex items-center justify-center gap-2 text-gray-900">
//             <Icon
//               icon="solar:widget-add-bold-duotone"
//               className="text-xl font-bold text-gray-900 dark:text-gray-300"
//             />

//             <p className="text-[0.95rem] font-medium text-gray-900 dark:text-gray-300">
//               Create Clan
//             </p>
//           </span>
//         </Button>
//       </DrawerTrigger>
//       <DrawerContent>
//         <DrawerHeader className="text-left">
//           <DrawerTitle>Edit profile</DrawerTitle>
//           <DrawerDescription>
//             <p>
//               Make changes to your profile here. Click save when you&apos;re
//               done.
//             </p>
//           </DrawerDescription>
//         </DrawerHeader>
//         <CreateClanForm className="px-4" />
//         <DrawerFooter className="pt-2">
//           <DrawerClose asChild>
//             <Button variant="outline">Cancel</Button>
//           </DrawerClose>
//         </DrawerFooter>
//       </DrawerContent>
//     </Drawer>
//   );
// }

// function CreateClanForm({ className }: React.ComponentProps<"form">) {
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
//       onCompleted(data) {
//         console.log(alert);
//         router.push(`/a/${data?.createClan?.id}/settings`);
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
//   }
//   return (
//     <Form {...form}>
//       <form
//         className={cn("grid items-start gap-0.5", className)}
//         onSubmit={form.handleSubmit(onSubmit)}
//       >
//         <FormField
//           control={form.control}
//           name="name"
//           render={({ field }) => (
//             <FormItem className="">
//               <FormLabel>Name</FormLabel>
//               <FormControl>
//                 <Input placeholder="" {...field} />
//               </FormControl>
//               <FormDescription>
//                 {/* This is your public display name. */}
//               </FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="display_name"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Display Name</FormLabel>
//               <FormControl>
//                 <Input placeholder="" {...field} />
//               </FormControl>
//               <FormDescription>
//                 This is your public display name.
//               </FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <FormField
//           control={form.control}
//           name="email"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Email</FormLabel>
//               <FormControl>
//                 <Input placeholder="" {...field} />
//               </FormControl>
//               <FormDescription>
//                 {/* This is your public display name. */}
//               </FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <FormField
//           control={form.control}
//           name="type"
//           render={({ field }) => (
//             <FormItem className="flex flex-col">
//               <FormLabel>Clan type</FormLabel>
//               <Popover>
//                 <PopoverTrigger asChild>
//                   <FormControl>
//                     <Button
//                       variant="outline"
//                       role="combobox"
//                       className={cn(
//                         "justify-between",
//                         !field.value && "text-muted-foreground"
//                       )}
//                     >
//                       {field.value
//                         ? types?.listClanTypes.find(
//                             (type: ClanType) => type.refCode === field.value
//                           )?.name
//                         : "Select type"}
//                       {/* <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" /> */}
//                       <Icon
//                         className="h-4 w-4 shrink-0 text-sm font-semibold"
//                         icon="solar:transfer-vertical-bold-duotone"
//                         aria-hidden="true"
//                       />
//                     </Button>
//                   </FormControl>
//                 </PopoverTrigger>
//                 <PopoverContent className="w-full p-0">
//                   <Command>
//                     <CommandInput
//                       placeholder="Search clan types."
//                       className="h-9"
//                     />
//                     <CommandList>
//                       <CommandEmpty>No clan type found.</CommandEmpty>
//                       <CommandGroup>
//                         {types?.listClanTypes.map((type: ClanType) => (
//                           <CommandItem
//                             value={type.name}
//                             key={type.refCode}
//                             onSelect={() => {
//                               form.setValue("type", type.refCode);
//                             }}
//                           >
//                             {type.name}

//                             <Icon
//                               className={cn(
//                                 " leading-none mt-0.5 ml-2 h-4 w-4 shrink-0 text-sm font-semibold",
//                                 type.refCode === field.value
//                                   ? "opacity-100"
//                                   : "opacity-0"
//                               )}
//                               icon="solar:check-circle-bold-duotone"
//                               aria-hidden="true"
//                             />
//                           </CommandItem>
//                         ))}
//                       </CommandGroup>
//                     </CommandList>
//                   </Command>
//                 </PopoverContent>
//               </Popover>
//               <FormDescription>
//                 The type of clan you are creating.
//               </FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <FormField
//           control={form.control}
//           name="isPublic"
//           render={({ field }) => (
//             <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
//               <FormControl>
//                 <Checkbox
//                   checked={field.value}
//                   onCheckedChange={field.onChange}
//                 />
//               </FormControl>
//               <div className="space-y-1 leading-none">
//                 <FormLabel>Make your clan public</FormLabel>
//                 <FormDescription>
//                   You can change this in settings later.{" "}
//                 </FormDescription>
//               </div>
//             </FormItem>
//           )}
//         />

//         <br />
//         <Button type="submit" className="w-full">
//           {/* <Icon
//           className="mr-3.5 shrink-0 animate-spin text-xl font-extrabold"
//           aria-hidden="true"
//           name="solar:refresh-bold-duotone"
//         /> */}
//           Submit
//         </Button>
//       </form>
//     </Form>
//   );
// }
