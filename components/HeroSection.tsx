"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SignInButton } from "@clerk/nextjs";
import { ArrowRight, Zap } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-[980px] text-center">
        <Badge variant="secondary" className="mb-4">
          <Zap className="mr-1 h-3 w-3" />
          Now live on Solana Mainnet
        </Badge>

        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
          The data factory{" "}
          <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
            for Web3 teams
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-[750px] text-lg text-muted-foreground sm:text-xl">
          LabelChain delivers innovative blockchain services and software to
          operate, build, or scale your modern Solana data infrastructure with
          enterprise-grade reliability.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <SignInButton mode="modal">
            <Button size="lg" className="h-12 px-8">
              Start for free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </SignInButton>
        </div>

        <p className="mt-4 text-sm text-muted-foreground">
          Free tier available. No credit card required.
        </p>
      </div>
    </section>
  );
}
