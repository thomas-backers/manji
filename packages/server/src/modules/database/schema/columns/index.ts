import { integer, varchar, timestamp } from "drizzle-orm/pg-core";

export const identity = {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  publicId: varchar({ length: 30 }).unique().notNull(),
};

export const timestamps = {
  createdAt: timestamp().notNull().defaultNow(),
  updatedAt: timestamp(),
};
