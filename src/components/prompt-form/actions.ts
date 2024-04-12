"use server";

import { getServerUserId, nanoid } from "@/lib/utils";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const formSchema = z.object({
  prompt: z.string().min(2, {
    message: "Prompt must be at least 2 characters.",
  }),
});

interface FormMessage {
  validatedErrors?: z.inferFlattenedErrors<typeof formSchema>["fieldErrors"] | null;
  message?: string | null;
}

export const action = async (prevState: FormMessage | undefined, formData: FormData) => {
  const rawFormData = {
    prompt: (formData.get("prompt") as string | null)?.trim().replaceAll(":", ""),
  };
  const validatedFields = formSchema.safeParse(rawFormData);
  if (!validatedFields.success) {
    return {
      validatedErrors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const userId = await getServerUserId();
  if (!userId) {
    return {
      message: "Unauthorized",
    };
  }

  const { prompt } = validatedFields.data;

  const id = nanoid();
  try {
  } catch (error) {
    console.error(error);
    return { message: "Form Action Error" };
  }
  revalidateTag("p");
  redirect(`/p/${id}`);
};
