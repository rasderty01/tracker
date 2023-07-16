import { DataTable } from "./Data-Table";
import { History, columns } from "./Columns";
import { db } from "@/lib/db";
import { myTable } from "@/lib/db/schema";

export default async function ComponentTable() {
  const data = await db.select().from(myTable);

  const mappedData: History[] = data.map((item: any) => {
    const date = item.createdAt.toLocaleString();

    return {
      id: item.id,
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
