import database from "@/modules/database";
import { type Role } from "@/modules/database/schema/roles";
import { users, type User } from "@/modules/database/schema/users";
import { eq } from "drizzle-orm";

export const getUserByEmail = async (
  email: string
): Promise<User | undefined> => {
  const user = await database.query.users.findFirst({
    where: eq(users.email, email),
  });
  return user;
};

export const getUserByUsername = async (
  username: string
): Promise<User | undefined> => {
  const user = await database.query.users.findFirst({
    where: eq(users.username, username),
  });
  return user;
};

const getUserWithRoles = async (
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
