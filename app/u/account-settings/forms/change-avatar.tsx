"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { gql, useMutation } from "@apollo/client";
import React from "react";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { createClient } from "@/utils/supabase/client";
import { nanoid } from "nanoid";

export default function ChangeAvatar() {
  const [open, setOpen] = React.useState(false);
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
  const [uploaded, setUploaded] = React.useState<string | null>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);
  console.log(uploaded);
  const supabase = createClient();

  const UPDATE_AVATAR = gql`
    mutation UpdateMe($input: UpdateProfileInput!) {
      updateMe(input: $input) {
        id
        photoUrl
      }
    }
  `;

  const [updateAvatar] = useMutation(UPDATE_AVATAR);

  const handleUpload = async () => {
    console.log(selectedFile);

    if (selectedFile) {
      console.log(selectedFile);
      const filename = nanoid();

      const { data, error } = await supabase.storage
        .from("avatars")
        .upload(
          `${filename}.${selectedFile.name.split(".").pop()}`,
          selectedFile,
          {
            cacheControl: "3600",
            upsert: false,
          }
        );

      if (error) {
        console.error("Error uploading file:", error.message);
      } else {
        const { data: file } = await supabase.storage
          .from("avatars")
          .getPublicUrl(data?.path || "");
        console.log(file);
        if (file?.publicUrl) {
          setUploaded(file.publicUrl);
          updateAvatar({
            variables: {
              input: {
                photoUrl: file.publicUrl,
              },
            },
          });
        }
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <span className="hover:bg-transparent font-medium  cursor-pointer">
          Change
        </span>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-white">
        <DialogHeader>
          <DialogTitle>Profile Picture</DialogTitle>
          <DialogDescription> Let people see you. </DialogDescription>
        </DialogHeader>
        <div className="flex items-center w-full">
          <div className="grid w-full items-center gap-1.5">
            <Input
              ref={inputRef}
              id="picture"
              type="file"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                if (e.target.files && e.target.files.length > 0) {
                  setSelectedFile(e.target.files[0]);
                }
              }}
            />
          </div>
        </div>
        <Button
          className="mt-1 text-white px-4 py-2 duration-200 w-full"
          type="button"
          onClick={handleUpload}
        >
          Upload File
        </Button>
      </DialogContent>
    </Dialog>
  );
}
