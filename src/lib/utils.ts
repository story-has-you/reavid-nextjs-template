import { getUser } from "@/lib/supabase";
import { type ClassValue, clsx } from "clsx";
import { getSession } from "next-auth/react";
import { twMerge } from "tailwind-merge";

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
      avatar_url: supabaseUser.user_metadata.avatar_url ?? "",
    };
  }
  return null;
};

export const getNextAuthUser = async () => {
  const session = await getSession();
  const nextAuthUser = session?.user;
  if (nextAuthUser) {
    return {
      id: nextAuthUser.id ?? "",
      email: nextAuthUser.email ?? "",
      name: nextAuthUser.name ?? "",
      avatar_url: nextAuthUser.image ?? "",
    };
  }
  return null;
};
