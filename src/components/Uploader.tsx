"use client";

import { UploadButton } from "@/lib/uploadthing";
// You need to import our styles for the button to look right. Best to import in the root /layout.tsx but this is fine
import "@uploadthing/react/styles.css";

export default function Uploader() {
  return (
    <div className="flex items-center justify-between mt-10">
      <span className="font-bold p-2 mr-2">Upload a photo: </span>
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response

          window.location.reload();
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    </div>
  );
}
