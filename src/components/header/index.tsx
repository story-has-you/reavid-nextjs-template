"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Icons } from "@/components/icons";
import { ThemeToggle } from "@/components/theme-toggle";
import { MainNav } from "@/components/main-nav";
import { ChooseLanguage } from "@/components/choose-language";
import { Login } from "@/components/login";
import { useEffect, useRef, useState } from "react";
import { signOut } from "next-auth/react";
import { Languages, SiteHeaderLanguage } from "@/types/language";
import { User } from "next-auth";
import { getClientAuthUser } from "@/config/auth";
import Image from "next/image";

interface UserAvatarProps {
  user: User | null;
  siteHeaderlanguage: SiteHeaderLanguage;
  logout: () => Promise<void>;
}

const UserAvatar = ({ user, siteHeaderlanguage, logout }: UserAvatarProps) => {
  return (
    <div className="dropdown dropdown-end">
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
          <button onClick={logout}>{siteHeaderlanguage.logout}</button>
        </li>
      </ul>
    </div>
  );
};

export function Header(languages: Languages) {
  const { siteHeader, mainNav, login } = languages;
  const [user, setUser] = useState<User | null>(null);
  const loginModal = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const localUser = await getClientAuthUser();
    if (!localUser) {
      return;
    }
    setUser(localUser);
  };

  const logout = async () => {
    await signOut();
    setUser(null);
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
              <UserAvatar user={user} siteHeaderlanguage={siteHeader} logout={logout} />
            ) : (
              <div>
                <button
                  className="btn btn-neutral btn-sm"
                  onClick={() => {
                    loginModal.current!.showModal();
                  }}
                >
                  {siteHeader.login}
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
