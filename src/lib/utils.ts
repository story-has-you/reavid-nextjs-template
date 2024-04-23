import { getServerAuthSession } from "@/server/auth";
import { userPrisma } from "@/server/prisma/user";
import { User } from "@prisma/client";
import { clsx, type ClassValue } from "clsx";
import { customAlphabet } from "nanoid";
import { getSession } from "next-auth/react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const nanoid = customAlphabet("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", 10);

export const getServerUser = async (): Promise<User | null> => {
  const userId = await getServerUserId();
  if (!userId) {
    return null;
  }
  return await userPrisma.selectByUserId(userId);
};

export const getServerUserId = async (): Promise<string | null> => {
  const session = await getServerAuthSession();
  if (!session || !session.user) {
    return null;
  }
  return session.user.id;
};

export const getClientUser = async (): Promise<User | null> => {
  const userId = await getClientUserId();
  if (!userId) {
    return null;
  }
  return await userPrisma.selectByUserId(userId);
};

export const getClientUserId = async (): Promise<string | null> => {
  const session = await getSession();
  if (!session || !session.user) {
    return null;
  }
  return session.user.id;
};

type MapKey = string | number | symbol;
export const toMap = <T, K extends MapKey, V>(array: T[], keySelector: (item: T) => K, valueSelector: (item: T) => V): Map<K, V> => {
  return array.reduce((acc, item) => {
    const key = keySelector(item);
    const value = valueSelector(item);
    acc.set(key, value);
    return acc;
  }, new Map<K, V>());
};
