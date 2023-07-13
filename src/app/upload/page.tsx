"use client";

import { UploadButton } from "@/lib/uploadthing";
// You need to import our styles for the button to look right. Best to import in the root /layout.tsx but this is fine

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <span className="font-bold p-2 mr-2">Upload a photo: </span>
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res: any) => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    </main>
  );
}
