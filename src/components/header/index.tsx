"use client";

import { ChooseLanguage } from "@/components/choose-language";
import { Icons } from "@/components/icons";
import { Login } from "@/components/login";
import { MainNav } from "@/components/main-nav";
import { siteConfig } from "@/config/site";
import { HeaderLanguage, Languages } from "@/types/language";
import type { User } from "@prisma/client";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

interface UserAvatarProps {
  user?: User | null;
  headerlanguage: HeaderLanguage;
  logout: () => Promise<void>;
}

interface HeaderProps {
  languages: Languages;
  user?: User | null;
}

const UserAvatar = ({ user, headerlanguage, logout }: UserAvatarProps) => {
  return (
    <div className="dropdown dropdown-end text-black">
      <div tabIndex={0} role="button">
        <button className="flex items-center space-x-2">
          <div className="avatar">
            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <Image src={user?.image!} height={10} width={10} alt={user?.name || ""} />
            </div>
          </div>
        </button>
      </div>
      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
        <li className="text-sm font-medium">
          <button disabled>{user?.name}</button>
        </li>
        <li className="text-sm">
          <button>{user?.email}</button>
        </li>
        <div className="divider mt-0 mb-0"></div>
        <li className="text-sm">
          <button onClick={logout}>{headerlanguage.logout}</button>
        </li>
      </ul>
    </div>
  );
};

export function Header({ languages, user }: HeaderProps) {
  const { header, mainNav, login } = languages;
  const loginModal = useRef<HTMLDialogElement>(null);

  const logout = async () => {
    await signOut();
  };

  return (
    <header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav language={mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-5">
            <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
              <Icons.gitHub className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href={siteConfig.links.twitter} target="_blank" rel="noreferrer">
              <Icons.twitter className="h-5 w-5 fill-current" />
              <span className="sr-only">Twitter</span>
            </Link>
            {/* <ThemeToggle /> */}
            <ChooseLanguage />

            {user ? (
              <UserAvatar user={user} headerlanguage={header} logout={logout} />
            ) : (
              <div>
                <button
                  className="btn btn-neutral btn-sm"
                  onClick={() => {
                    loginModal.current!.showModal();
                  }}
                >
                  {header.login}
                </button>
                <dialog className="modal" ref={loginModal}>
                  <Login language={login} />
                </dialog>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
