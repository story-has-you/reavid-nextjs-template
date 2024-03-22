"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Button, buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { ThemeToggle } from "@/components/theme-toggle";
import { MainNav } from "@/components/main-nav";
import { ChooseLanguage } from "@/components/choose-language";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Login } from "@/components/login";
import { useEffect, useState } from "react";
import { signOut } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { type LoginLanguage, type MainNavLanguage, type SiteHeaderlanguange } from "@/types/language";
import { getNextAuthUser } from "@/lib/utils";
import { User } from "next-auth";

interface Props {
  siteHeaderLanguange: SiteHeaderlanguange;
  loginLanguange: LoginLanguage;
  mainNavLanguage: MainNavLanguage;
}

export function SiteHeader({ siteHeaderLanguange, loginLanguange, mainNavLanguage }: Props) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const localUser = await getNextAuthUser();
    // const localUser = await getSupabaseUser();
    if (!localUser) {
      return;
    }
    setUser(localUser);
  };

  const logout = async () => {
    await signOut();
    setUser(null);
  };

  const UserAvatar = () => {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar>
            <AvatarImage src={user?.image!} />
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>
            {user?.name}
            <div className="truncate text-sm text-gray-500">{user?.email}</div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={logout}>{siteHeaderLanguange.logout}</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav language={mainNavLanguage} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-3">
            {/* <Dialog>
              <DialogTrigger className="border-b-2 hover:border-black w-18">{l.signUp}</DialogTrigger>
              <Signup />
            </Dialog> */}

            <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link href={siteConfig.links.twitter} target="_blank" rel="noreferrer">
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.twitter className="h-5 w-5 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
            <ThemeToggle />
            <ChooseLanguage />
            {user ? (
              <UserAvatar />
            ) : (
              <Dialog>
                <DialogTrigger asChild>
                  <Button>{siteHeaderLanguange.login}</Button>
                </DialogTrigger>
                <Login language={loginLanguange} />
              </Dialog>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
