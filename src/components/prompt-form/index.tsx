"use client";

import { Login } from "@/components/login";
import { action } from "@/components/prompt-form/actions";
import { PendingSpinner } from "@/components/prompt-form/pending-spinner";
import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { getClientUserId } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { useForm } from "react-hook-form";

interface PromptFormProps {
  language: any;
  loginLanguage: any;
}

const initialState = {
  message: "",
};

export function PromptForm({ language, loginLanguage }: PromptFormProps) {
  const [state, formAction] = useFormState(action, initialState);
  const [userId, setUserId] = useState<string | null>(null);
  const [openModal, setOpenModal] = useState<boolean>(false);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const userId = await getClientUserId();
    if (!userId) {
      return;
    }
    setUserId(userId);
  };

  const form = useForm();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!userId) {
      e.preventDefault();
      setOpenModal(true);
    }
  };

  return (
    <div className="px-9 mx-auto">
      <Form {...form}>
        <form action={formAction} onSubmit={handleSubmit} className="space-y-8">
          <PendingSpinner />
          <FormField
            control={form.control}
            name="prompt"
            render={({ field }) => (
              <FormItem className="text-start">
                <FormLabel>Prompt</FormLabel>
                <FormControl>
                  <Textarea placeholder="cat" {...field} maxLength={6} className="h-40 w-96" required />
                </FormControl>
              </FormItem>
            )}
          />
          <Button className="mx-auto flex justify-center items-center" type="submit">
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
