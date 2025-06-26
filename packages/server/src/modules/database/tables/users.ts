import database from "@/modules/database";
import { type Role } from "@/modules/database/schema/roles";
import { users, type User } from "@/modules/database/schema/users";
import { generatePublicId } from "@/modules/helper";
import { eq } from "drizzle-orm";

export const addUser = async (
  username: string,
  email: string,
  passwordHash: string
): Promise<User | undefined> => {
  const user: User | undefined = await database
    .insert(users)
    .values({
      publicId: generatePublicId(),
      username,
      email,
      password: passwordHash,
    })
    .returning()
    .then((rows) => rows[0]);
  return user;
};

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
