import { InferModel } from "drizzle-orm";
import { mysqlTable, text, timestamp, int } from "drizzle-orm/mysql-core";

export const myTable = mysqlTable("myTable", {
  id: int("id").primaryKey().autoincrement(),
  link: text("link"),
  createdAt: timestamp("date").defaultNow(),
});

export type link = InferModel<typeof myTable, "select">;
export type NewLink = InferModel<typeof myTable, "insert">;
