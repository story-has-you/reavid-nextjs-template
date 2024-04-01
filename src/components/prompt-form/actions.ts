"use server";
import { redirect } from "next/navigation";
import { nanoid } from "@/lib/utils";

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
