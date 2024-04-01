"use client";

import { ChooseLanguage } from "@/components/choose-language";
import { Icons } from "@/components/icons";
import { Login } from "@/components/login";
import { MainNav } from "@/components/main-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button, buttonVariants } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { siteConfig } from "@/config/site";
import { HeaderLanguage, Languages } from "@/types/language";
import { User } from "next-auth";
import { signOut } from "next-auth/react";
import Link from "next/link";

interface UserAvatarProps {
  user: User | null;
  headerLanguage: HeaderLanguage;
}

interface HeaderProps {
  languages: Languages;
  user?: User | null;
}

const UserAvatar = ({ user, headerLanguage }: UserAvatarProps) => {
  const logout = async () => {
    await signOut();
  };

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
        <DropdownMenuItem onClick={logout}>{headerLanguage.logout}</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export function Header({ languages, user }: HeaderProps) {
  const { header, mainNav, login } = languages;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav language={mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-3">
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
              <UserAvatar user={user} headerLanguage={header} />
            ) : (
              <Dialog>
                <DialogTrigger asChild>
                  <Button>{header.login}</Button>
                </DialogTrigger>
                <Login language={login} />
              </Dialog>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
