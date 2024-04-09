"use server";

import { nanoid } from "@/lib/utils";
import { redirect } from "next/navigation";

export const action = async (prevState: boolean, formData: FormData): Promise<boolean> => {
  const prompt = (formData.get("prompt") as string | null)?.trim().replaceAll(":", "");

  if (!prompt) {
    return false;
  }
  const id = nanoid();
  try {
  } catch (error) {
    console.error(error);
  }
  redirect(`/p/${id}`);
};
