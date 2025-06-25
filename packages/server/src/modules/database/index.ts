import * as rolesSchema from "@/modules/database/schema/roles";
import * as sessionsSchema from "@/modules/database/schema/sessions";
import * as usersToRolesSchema from "@/modules/database/schema/users-to-roles";
import * as usersSchema from "@/modules/database/schema/users";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const database = drizzle({
  client: new Pool({
    connectionString: process.env.DATABASE_URL!,
    ssl: true,
  }),
  schema: {
    ...rolesSchema,
    ...sessionsSchema,
    ...usersToRolesSchema,
    ...usersSchema,
  },
});

export default database;
