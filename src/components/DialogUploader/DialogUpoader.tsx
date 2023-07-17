"use client";
import { useUploadThing } from "@/lib/uploadthing";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import React, { useState, useRef } from "react";
import { Button } from "../ui/button";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { toast } from "react-hot-toast";

const DialogUpoader = () => {
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [progress, setProgress] = React.useState(0);

  const { startUpload, isUploading } = useUploadThing("imageUploader", {
    onUploadProgress: (p) => {
      setProgress(p);

      //insert toast.progress
    },
    onClientUploadComplete: () => {
      setProgress(0);
      toast.success("Upload complete", {
        position: "top-right",
      });
    },
    onUploadError: (e) => {
      toast.error(`${e}: Upload failed`, {
        position: "top-right",
      });
    },
  });

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="default" className="ml-4">
            Upload a photo
          </Button>
        </DialogTrigger>
        <DialogContent className="w-full">
          <DialogHeader>
            <DialogTitle>Upload a photo</DialogTitle>
            <DialogDescription>
              Choose a file to upload from your computer and then click Upload.
            </DialogDescription>
          </DialogHeader>
          <div className="">
            <div className="">
              <Input
                type="file"
                ref={fileInputRef}
                // Replace with your desired file extensions
                onChange={(event: any) => {
                  const selectedFile = event.target.files?.[0];
                  setFile(selectedFile || null);
                }}
              />
            </div>
            {isUploading && <Progress value={progress} className="my-2" />}
          </div>
          <DialogFooter>
            <div>
              {file && (
                <Button onClick={() => startUpload([file])}>Upload</Button>
              )}
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DialogUpoader;
