import { z } from "zod/v4";

export const publicId = z
  .string("Must be a string")
  .length(21, "Must be exactly 21 characters long")
  .regex(/^[a-zA-Z0-9_-]/, "Must be a valid nanoid");
