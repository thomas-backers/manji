import database from "@/modules/database";
import { type Role } from "@/modules/database/schema/roles";
import { users, type User } from "@/modules/database/schema/users";
import { eq } from "drizzle-orm";

const selectUserWithRoles = async (
  publicId: string
): Promise<(User & { usersToRoles: { role: Role }[] }) | undefined> => {
  const user = await database.query.users.findFirst({
    where: eq(users.publicId, publicId),
    with: {
      usersToRoles: {
        columns: {
          userId: false,
          roleId: false,
        },
        with: {
          role: true,
        },
      },
    },
  });
  return user;
};
