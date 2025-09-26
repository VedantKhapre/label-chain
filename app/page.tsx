"use client";

import { Authenticated, Unauthenticated } from "convex/react";
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BentoGrid from "@/components/BentoGrid";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <Unauthenticated>
        <HeroSection />
        <BentoGrid />
        <Pricing />
        <FAQ />
        <Footer />
      </Unauthenticated>

      <Authenticated>
        <div className="container mx-auto px-4 py-16">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">
              Welcome to your Dashboard
            </h1>
            <p className="text-muted-foreground">
              Manage your Solana data infrastructure
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  Messages
                  <Badge variant="secondary">
                    <Content />
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Your message count and activity
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        <Footer />
      </Authenticated>
    </div>
  );
}

function Content() {
  const messages = useQuery(api.messages.getForCurrentUser);
  return <span>{messages?.length || 0}</span>;
}
