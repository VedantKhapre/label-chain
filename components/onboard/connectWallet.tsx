"use client";

import React from "react";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";

interface ConnectWalletProps {
  onNext?: () => void;
  onPrevious?: () => void;
}

export default function ConnectWallet({
  onNext,
  onPrevious,
}: ConnectWalletProps) {
  const handleNext = () => {
    onNext?.();
  };

  const handlePrevious = () => {
    onPrevious?.();
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 text-white">
          Connect Your Wallet
        </h1>
        <p className="text-neutral-300 text-lg">
          Connect your Solana wallet to get started
        </p>
      </div>

      <div className="flex justify-center">
        <CardSpotlight className="h-80 w-full max-w-md cursor-pointer transition-all duration-300">
          <div className="text-center space-y-6 relative z-20 flex flex-col items-center justify-center h-full">
            <div className="p-6 rounded-full bg-purple-500/10 border border-purple-500/20 w-24 h-24 flex items-center justify-center">
              <Wallet className="w-12 h-12 text-purple-400" />
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-white">Solana Wallet</h3>
              <p className="text-neutral-300 text-sm px-4">
                We support Phantom, Solflare, and other popular wallets
              </p>
            </div>
            <Button
              size="lg"
              className="bg-white text-black hover:bg-neutral-200 px-8 py-3 text-lg font-semibold rounded-lg"
            >
              <Wallet className="w-5 h-5 mr-2" />
              Connect Wallet
            </Button>
          </div>
        </CardSpotlight>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center items-center gap-4 mt-8">
        <Button
          variant="ghost"
          onClick={handlePrevious}
          className="text-neutral-400 hover:text-white hover:bg-transparent px-8"
        >
          Back
        </Button>

        <Button
          onClick={handleNext}
          className="bg-white text-black hover:bg-neutral-200 px-8 rounded-lg"
        >
          Complete
        </Button>
      </div>
    </div>
  );
}
