/* eslint-disable @next/next/no-async-client-component */

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { db } from "@/lib/db";
import { myTable } from "@/lib/db/schema";
import Uploader from "@/components/Uploader";
import Link from "next/link";

export default async function Home() {
  const data = await db.select().from(myTable);
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <Table>
        <TableCaption>A list of uploaded ConnectCX records</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead>Link</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((data) => (
            <TableRow key={data.id}>
              <TableCell key={data.id}>{data.id}</TableCell>
              <TableCell key={data.id}>
                {data.createdAt?.toLocaleString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                  second: "numeric",
                })}
              </TableCell>

              <TableCell key={data.id}>
                <Link
                  className="hover:underline underline-offset-4 text-blue-500"
                  href={data.link || ""}
                >
                  {data.link}
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Uploader />
    </div>
  );
}
