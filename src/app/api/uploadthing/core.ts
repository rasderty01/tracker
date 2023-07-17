import { db } from "@/lib/db";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { Users, NewLink } from "@/lib/db/schema";

import { currentUser } from "@clerk/nextjs";

const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({ image: { maxFileSize: "8MB" } })
    // Set permissions and file types for this FileRoute
    .middleware(async ({ req }) => {
      // This code runs on your server before upload

      console.log("middleware", req);

      const user = await currentUser();

      // If you throw, the user will not be able to upload
      if (!user)
        throw new Error("You must be logged in to upload a profile picture");

      // Whatever is returned here is accessible in onUploadComplete as `metadata`
      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      const userid = metadata.userId;

      console.log(file.key);
      const link: NewLink = {
        fileKey: file.key,
        userid: userid,
        link: file.url,
        createdAt: new Date(),
      };

      const res = await db.insert(Users).values(link);

      console.log(res);
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
