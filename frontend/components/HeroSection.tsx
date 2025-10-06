"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-[980px] text-center">
        <Badge variant="secondary" className="mb-4 text-base px-2 py-1">
          <Zap className="mr-1 h-4 w-4 text-green-500" />
          Live on Solana Mainnet
        </Badge>

        <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
          <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
            Solana-based{" "}
          </span>
          Crowdsourcing Data Annotation Platform
        </h1>

        <p className="mx-auto mt-6 max-w-[750px] text-lg text-muted-foreground sm:text-xl">
          Label datasets and earn Solana tokens. Organizations get quality data
          labels while contributors earn crypto for their work.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link href="/signup">
            <Button size="lg" className="h-12 px-8">
              Start Free Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
