import { getServerAuthSession } from "@/config/auth";
import { selectByUserId } from "@/lib/prisma/user";
import type { User } from "@prisma/client";
import { customAlphabet } from "nanoid";

export const nanoid = customAlphabet("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", 10);

export const getServerUser = async (): Promise<User | null> => {
  const session = await getServerAuthSession();
  if (!session || !session.user) {
    return null;
  }
  return await selectByUserId(session.user.id);
};
