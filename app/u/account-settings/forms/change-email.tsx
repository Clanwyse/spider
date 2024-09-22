"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  FormControl,
  FormField,
  FormItem,
  Form,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import { Profile } from "@/graphql/__generated__/graphql";

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
import { Input } from "@/components/ui/input";

type Props = {
  profile: Profile;
};
const FormSchema = z.object({
  email: z.string().email(),
});
export default function EditEmail(props: Props) {
  const { profile } = props;
  const [open, setOpen] = React.useState(false);

  const UPDATE_EMAIL = gql`
    mutation UpdateMe($input: UpdateProfileInput!) {
      updateMe(input: $input) {
        id
        email
      }
    }
  `;

  const [updateBio, { data, loading, error }] = useMutation(UPDATE_EMAIL);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    updateBio({ variables: { input: { email: data.email } } });
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
          <DialogTitle>Email</DialogTitle>
          <DialogDescription> Edit your contact details </DialogDescription>
        </DialogHeader>
        <div className="flex items-center w-full">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6 w-full"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel>Bio</FormLabel> */}
                    <FormControl>
                      <Input
                        placeholder={profile?.email ?? "jon@email.com"}
                        className="resize-none w-full"
                        {...field}
                      />
                    </FormControl>

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
