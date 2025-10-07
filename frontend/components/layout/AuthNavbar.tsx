"use client";

import { Button } from "@/components/ui/button";
import { Blocks } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { usePathname } from "next/navigation";

export default function AuthNavbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4">
        <div className="flex pl-2">
          <Link className="flex items-center space-x-2" href="/">
            <Blocks className="h-6 w-6" />
            <span className="font-bold text-xl">LabelChain</span>
          </Link>
        </div>
        <div className="flex items-center space-x-2 pr-2">
          {pathname !== "/login" && (
            <Link href="/login">
              <Button size="sm">Log in</Button>
            </Link>
          )}
          {pathname !== "/signup" && (
            <Link href="/signup">
              <Button size="sm">Sign up</Button>
            </Link>
          )}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
