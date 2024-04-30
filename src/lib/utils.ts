import { auth } from "@/server/auth";
import { userMapper } from "@/server/mapper/user-mapper";
import { User } from "@prisma/client";
import { clsx, type ClassValue } from "clsx";
import { customAlphabet } from "nanoid";
import { getSession } from "next-auth/react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const nanoid = customAlphabet("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", 32);

export const getServerUser = async (): Promise<User | null> => {
  const userId = await getServerUserId();
  return userId ? await userMapper.selectById(userId) : null;
};

export const getServerUserId = async (): Promise<string | null> => {
  const session = await auth();
  if (!session || !session.user) {
    return null;
  }
  return session.user.id;
};

export const getClientUser = async (): Promise<User | null> => {
  const userId = await getClientUserId();
  return userId ? await userMapper.selectById(userId) : null;
};

export const getClientUserId = async (): Promise<string | null> => {
  const session = await getSession();
  if (!session || !session.user) {
    return null;
  }
  return session.user.id;
};
