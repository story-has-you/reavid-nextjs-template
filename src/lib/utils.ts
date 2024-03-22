import { getUser } from "@/lib/supabase";
import { type ClassValue, clsx } from "clsx";
import { getSession } from "next-auth/react";
import { twMerge } from "tailwind-merge";
import { customAlphabet } from "nanoid";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getSupabaseUser = async () => {
  const { user: supabaseUser } = await getUser();
  if (supabaseUser) {
    return {
      id: supabaseUser.id ?? "",
      email: supabaseUser.email ?? "",
      name: supabaseUser.user_metadata.name ?? "",
      image: supabaseUser.user_metadata.avatar_url ?? "",
    };
  }
  return null;
};

export const getNextAuthUser = async () => {
  const session = await getSession();
  return session?.user ?? null;
};

export const nanoid = customAlphabet("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", 10);
