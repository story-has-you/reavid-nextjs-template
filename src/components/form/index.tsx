"use client";

import { action } from "@/components/form/actions";
import { Login } from "@/components/login";
import { Button } from "@/components/ui/button";
import { getClientAuthUser } from "@/config/auth";
import { FormLanguage, LoginLanguage } from "@/types/language";
import { User } from "next-auth";
import React, { useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";

export function Form({ language, loginLanguage }: { language: FormLanguage; loginLanguage: LoginLanguage }) {
  const [state, formAction] = useFormState(action, false);
  const [user, setUser] = useState<User | null>(null);
  const submitRef = useRef<React.ElementRef<"button">>(null);
  const [pending, setPending] = useState<boolean>(false);
  const loginModal = useRef<HTMLDialogElement>(null);

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!user) {
      e.preventDefault();
      loginModal.current?.showModal();
      return;
    }
    setPending(true);
  };

  return (
    <div className="max-w-[80%] md:max-w-2xl px-9 mx-auto">
      <form action={formAction} onSubmit={handleSubmit}>
        {pending && (
          <div className="absolute top-16 inset-0 w-full z-10 items-center flex justify-center bg-black opacity-50">
            <span className="loading loading-dots loading-lg"></span>
          </div>
        )}
        <div className="col-span-full mb-4">
          <div className="mt-2">
            <textarea
              id="prompt"
              name="prompt"
              className="rounded-lg block w-full text-gray-900 placeholder:text-gray-400 text-lg p-4 pl-4"
            />
          </div>
        </div>

        <div className="mt-5 flex justify-start items-center">
          <Button
            className="mx-auto flex justify-center items-center"
            disabled={pending}
            aria-disabled={pending}
            ref={submitRef}
          >
            {language.generate}
          </Button>
        </div>
      </form>

      <dialog className="modal" ref={loginModal}>
        <Login language={loginLanguage} />
      </dialog>
    </div>
  );
}
