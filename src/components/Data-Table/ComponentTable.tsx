import { DataTable } from "./Data-Table";
import { History, columns } from "./Columns";
import { db } from "@/lib/db";
import { Users } from "@/lib/db/schema";

export default async function ComponentTable() {
  const data = await db.select().from(Users);

  const mappedData: History[] = data.map((item: any) => {
    const date = item.createdAt.toLocaleString();

    return {
      id: item.id,
      user: item.userid,
      filekey: item.fileKey,
      createdAt: date,
      link: item.link,
    };
  });

  console.log(mappedData);

  return (
    <div className="p-5">
      <DataTable columns={columns} data={mappedData} />
    </div>
  );
}
