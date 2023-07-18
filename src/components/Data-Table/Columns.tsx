"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Checkbox } from "../ui/checkbox";
import { DataTableColumnHeader } from "../reusable/reusable";

import { Button } from "../ui/button";
import {
  DropdownMenuContent,
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type History = {
  id: number;
  user: string;
  filekey: string;
  createdAt: string;
  link: string;
};

export const columns: ColumnDef<History>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <div className="text-center transition-all ease-in-out duration-300">
        <Checkbox
          className="transition-all ease-in-out duration-500"
          checked={table.getIsAllPageRowsSelected()}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      </div>
    ),

    cell: ({ row }) => (
      <Checkbox
        className="transition-all ease-in-out duration-500"
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: "id",
    header: () => <div className="text-center">ID</div>,
    cell: ({ row }) => {
      const { link } = row.original;

      return (
        <Link
          href={link}
          className=" underline underline-offset-4 text-blue-500 py-2 px-4 rounded transition-all ease-in-out duration-300"
          target="_blank"
        >
          {row.original.id}
        </Link>
      );
    },
  },
  {
    accessorKey: "user",
    header: () => <div className="text-center">User</div>,
    cell: ({ row }) => {
      const { user } = row.original;

      return <div className="text-center">{user}</div>;
    },
  },
  {
    accessorKey: "link",
    header: () => (
      <div className="text-center flex flex-col items-center">Link</div>
    ),
    cell: ({ row }) => {
      const { link } = row.original;

      return (
        <Link
          href={link}
          className=" text-blue-500 hover:underline underline-offset-4 py-2 px-4 rounded transition-all ease-in-out duration-300"
          target="_blank"
        >
          {row.original.filekey}
        </Link>
      );
    },
  },

  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <div className="text-center flex flex-col items-center">
        <DataTableColumnHeader column={column} title="Upload Date" />
      </div>
    ),
    cell: ({ row }) => {
      const { createdAt } = row.original;

      return <div className="text-center">{createdAt}</div>;
    },
  },

  {
    id: "actions",
    cell: ({ row }) => {
      const paymentID = row.original.id;

      function deleteInvoice() {
        if (confirm("Are you sure you want to delete this invoice?")) {
          fetch("", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              invoice: paymentID,
            }),
          }).then(() => {
            setTimeout(() => {
              alert("Invoice Deleted");
              window.location.reload();
            }, 2000);
          });
        }
      }

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="default" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="bg-white">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="hover:bg-slate-400"
              onClick={deleteInvoice}
            >
              Delete Entry
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
