import { z } from "zod/v4";

export const publicId = z
  .string("Must be a string")
  .length(21, "Must be exactly 21 characters long")
  .regex(/^[a-zA-Z0-9_-]+$/, "Must be a valid nanoid");

export const username = z
  .string("Must be a string")
  .min(6, "Must be at least 6 characters long")
  .max(30, "Must be at most 30 characters long");

export const email = z
  .email("Must be a valid e-mail")
  .min(6, "Must be at least 6 characters long")
  .max(320, "Must be at most 320 characters long");

export const password = z
  .string("Must be a string")
  .min(12, "Must be at least 12 characters long")
  .refine(
    (value) => new TextEncoder().encode(value).length <= 72,
    "Must be shorter"
  );
