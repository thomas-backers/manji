import { identity, timestamps } from "@/modules/database/schema/columns";
import { usersToRoles } from "@/modules/database/schema/users-to-roles";
import { relations } from "drizzle-orm";
import { pgTable, varchar } from "drizzle-orm/pg-core";

export const roles = pgTable("roles", {
  ...identity,
  name: varchar("name", { length: 100 }).unique().notNull(),
  ...timestamps,
});

export const rolesRelations = relations(roles, ({ many }) => ({
  usersToRoles: many(usersToRoles),
}));

export type Role = typeof roles.$inferSelect;
