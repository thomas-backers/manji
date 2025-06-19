import { identity, timestamps } from "@/modules/database/schema/columns";
import { pgTable, timestamp, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  ...identity,
  username: varchar({ length: 50 }).unique().notNull(),
  email: varchar({ length: 350 }).unique().notNull(),
  password: varchar({ length: 100 }).unique().notNull(),
  verifiedAt: timestamp(),
  ...timestamps,
});

export type User = typeof users.$inferSelect;
