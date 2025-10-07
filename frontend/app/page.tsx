"use client";

import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/landing/HeroSection";
import BentoGrid from "@/components/landing/BentoGrid";
import FAQ from "@/components/landing/FAQ";
import Pricing from "@/components/landing/Pricing";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
        <Header />
        <HeroSection />
        <BentoGrid />
        <Pricing />
        <FAQ />
        <Footer />
    </div>
  );
}

function Content() {
  const messages = useQuery(api.messages.getForCurrentUser);
  return <span>{messages?.length || 0}</span>;
}
