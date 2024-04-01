"use client";

import { Login } from "@/components/login";
import { action } from "@/components/prompt-form/actions";
import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { getClientAuthUser } from "@/config/auth";
import { FormLanguage, LoginLanguage } from "@/types/language";
import { zodResolver } from "@hookform/resolvers/zod";
import { User } from "next-auth";
import React, { useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface PromptFormProps {
  language: FormLanguage;
  loginLanguage: LoginLanguage;
}

export function PromptForm({ language, loginLanguage }: PromptFormProps) {
  const [state, formAction] = useFormState(action, false);
  const [user, setUser] = useState<User | null>(null);
  const submitRef = useRef<React.ElementRef<"button">>(null);
  const [pending, setPending] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getClientAuthUser();
      if (!user) {
        return;
      }
      setUser(user);
    };
    fetchUser();
  }, []);

  const formSchema = z.object({
    prompt: z.string().min(2, {
      message: "Prompt must be at least 2 characters.",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!user) {
      e.preventDefault();
      setOpenModal(true);
      return;
    }
    setPending(true);
  };

  return (
    <div className="px-9 mx-auto">
      <Form {...form}>
        {pending && (
          <div className="absolute top-16 inset-0 w-full z-10 items-center flex justify-center bg-black opacity-50">
            <span className="loading loading-dots loading-lg"></span>
          </div>
        )}
        <form action={formAction} onSubmit={handleSubmit} className="space-y-8">
          <FormField
            control={form.control}
            name="prompt"
            render={({ field }) => (
              <FormItem className="text-start">
                <FormLabel>Prompt</FormLabel>
                <FormControl>
                  <Textarea placeholder="cat" {...field} maxLength={6} className="h-40 w-96" />
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            className="mx-auto flex justify-center items-center"
            disabled={pending}
            aria-disabled={pending}
            ref={submitRef}
          >
            {language.generate}
          </Button>
        </form>
      </Form>

      <Dialog open={openModal} onOpenChange={setOpenModal}>
        <Login language={loginLanguage} />
      </Dialog>
    </div>
  );
}
