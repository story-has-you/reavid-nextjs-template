import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { customAlphabet } from "nanoid";
import { getServerAuthSession } from "@/config/auth";
import { selectByUserId } from "@/lib/prisma/user";
import { User } from "@prisma/client";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const nanoid = customAlphabet("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", 10);

export const getServerUser = async (): Promise<User | null> => {
  const session = await getServerAuthSession();
  if (!session || !session.user) {
    return null;
  }
  return await selectByUserId(session.user.id);
};
