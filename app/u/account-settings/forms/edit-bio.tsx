"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  FormControl,
  FormField,
  FormItem,
  Form,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import type { Profile } from "@/graphql/__generated__/graphql";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { gql, useMutation } from "@apollo/client";
import React from "react";

type Props = {
  profile: Profile;
};
const FormSchema = z.object({
  bio: z
    .string()
    .min(10, {
      message: "Bio must be at least 10 characters.",
    })
    .max(160, {
      message: "Bio must not be longer than 30 characters.",
    }),
});
export default function EditBio(props: Props) {
  const { profile } = props;
  const [open, setOpen] = React.useState(false);

  const UPDATE_BIO = gql`
    mutation UpdateMe($input: UpdateProfileInput!) {
      updateMe(input: $input) {
        id
        bio
      }
    }
  `;

  const [updateBio] = useMutation(UPDATE_BIO);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      bio: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    updateBio({ variables: { input: { bio: data.bio } } });
    toast({
      title: "Updated Successfully",
      description: (
        <div className="mt-2 w-[340px] rounded-md">
          <div>You updated your profile.</div>
        </div>
      ),
    });

    setOpen(false);
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger as-child>
        <span className="hover:bg-transparent font-medium">Edit</span>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-white">
        <DialogHeader>
          <DialogTitle>Bio</DialogTitle>
          <DialogDescription> Let people know about you. </DialogDescription>
        </DialogHeader>
        <div className="flex items-center w-full">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6 w-full"
            >
              <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel>Bio</FormLabel> */}
                    <FormControl>
                      <textarea
                        placeholder={profile?.bio as string}
                        className="resize-none w-full"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      You can <span>@mention</span> other users and clans.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
