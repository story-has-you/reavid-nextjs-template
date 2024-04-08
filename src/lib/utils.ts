import { getServerAuthSession } from "@/config/auth";
import { selectByUserId } from "@/lib/prisma/user";
import { User } from "@prisma/client";
import { clsx, type ClassValue } from "clsx";
import { customAlphabet } from "nanoid";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const nanoid = customAlphabet("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", 10);

export const getServerUser = async (): Promise<User | null> => {
  const user = await getServerAuthSession();
  if (!user) {
    return null;
  }
  return await selectByUserId(user.id);
};

export const getServerUserId = async (): Promise<string | null> => {
  const user = await getServerAuthSession();
  if (!user) {
    return null;
  }
  return user.id;
};

export const getClientUser = async (): Promise<User | null> => {
  const user = await getClientUser();
  if (!user) {
    return null;
  }
  return await selectByUserId(user.id);
};

export const getClientUserId = async (): Promise<string | null> => {
  const user = await getClientUser();
  if (!user) {
    return null;
  }
  return user.id;
};
