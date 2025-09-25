"use client";

import { Authenticated, Unauthenticated } from "convex/react";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Blocks } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link className="mr-4 flex items-center space-x-2 lg:mr-6" href="/">
            <Blocks className="h-6 w-6" />
            <span className="font-bold text-xl">LabelChain</span>
          </Link>
          <nav className="hidden md:flex items-center gap-4 text-sm lg:gap-6">
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="#product"
            >
              Product
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="#solutions"
            >
              Solutions
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="#docs"
            >
              Learn
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="#community"
            >
              Community
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="#pricing"
            >
              Pricing
            </a>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="flex items-center space-x-2">
            <Authenticated>
              <UserButton />
              <Button variant="outline" size="sm">
                Dashboard
              </Button>
            </Authenticated>
            <Unauthenticated>
              <SignInButton mode="modal">
                <Button size="sm">Log in</Button>
              </SignInButton>
              <Button variant="outline" size="sm">
                Contact us
              </Button>
            </Unauthenticated>
          </div>
        </div>
      </div>
    </header>
  );
}
