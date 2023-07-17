import { InferModel } from "drizzle-orm";
import { mysqlTable, text, timestamp, int } from "drizzle-orm/mysql-core";

export const Users = mysqlTable("Users", {
  id: int("id").primaryKey().autoincrement(),
  userid: text("userid"),
  fileKey: text("fileKey"),
  link: text("link"),
  createdAt: timestamp("date").defaultNow(),
});

export type link = InferModel<typeof Users, "select">;
export type NewLink = InferModel<typeof Users, "insert">;
