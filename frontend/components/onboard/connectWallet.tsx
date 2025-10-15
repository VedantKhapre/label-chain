"use client";

import React, { useState } from "react";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { Button } from "@/components/ui/button";
import { Wallet, Loader2 } from "lucide-react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useOnboard } from "@/contexts/OnboardContext";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

interface ConnectWalletProps {
  onPrevious?: () => void;
}

export default function ConnectWallet({ onPrevious }: ConnectWalletProps) {
  const { connected, publicKey } = useWallet();
  const { data, updateData } = useOnboard();
  const createUser = useMutation(api.users.createUser);
  const { user } = useUser();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleNext = async () => {
    if (!connected || !publicKey || !user || !data.accountType) return;

    setIsLoading(true);
    setError(null);

    try {
      // Store user data in Convex
      await createUser({
        clerkId: user.id,
        name: data.name,
        dateOfBirth: data.dateOfBirth,
        accountType: data.accountType,
        walletAddress: publicKey.toString(),
        email: user.emailAddresses?.[0]?.emailAddress,
      });

      // Redirect based on account type
      if (data.accountType === "organization") {
        router.push("/studio/organization");
      } else {
        router.push("/studio/user");
      }
    } catch (error) {
      console.error("Failed to create user:", error);
      setError("Failed to complete setup. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handlePrevious = () => {
    onPrevious?.();
  };

  // Update wallet address when connected
  React.useEffect(() => {
    if (connected && publicKey) {
      updateData("walletAddress", publicKey.toString());
    }
  }, [connected, publicKey, updateData]);

  return (
    <div className="w-full max-w-5xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 text-foreground">
          Connect Your Wallet
        </h1>
        <p className="text-muted-foreground text-lg">
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
              <h3 className="text-2xl font-bold text-foreground">
                Solana Wallet
              </h3>
              {connected && publicKey ? (
                <div className="text-center space-y-2">
                  <p className="text-green-500 font-semibold">
                    ✓ Wallet Connected
                  </p>
                  <p className="text-muted-foreground text-xs px-4 font-mono">
                    {`${publicKey.toString().slice(0, 4)}...${publicKey.toString().slice(-4)}`}
                  </p>
                </div>
              ) : (
                <p className="text-muted-foreground text-sm px-4">
                  We support Phantom, Solflare, and other popular wallets
                </p>
              )}
              {error && (
                <p className="text-red-500 text-sm text-center mt-2">{error}</p>
              )}
            </div>
            <WalletMultiButton className="!bg-primary !text-primary-foreground hover:!bg-primary/90 !px-8 !py-3 !text-lg !font-semibold !rounded-lg !border-0" />
          </div>
        </CardSpotlight>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center items-center gap-4 mt-8">
        <Button
          variant="ghost"
          onClick={handlePrevious}
          className="text-muted-foreground hover:text-foreground hover:bg-transparent px-8"
        >
          Back
        </Button>

        <Button
          onClick={handleNext}
          disabled={!connected || !data.accountType || isLoading}
          className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Setting up...
            </>
          ) : (
            "Complete"
          )}
        </Button>
      </div>
    </div>
  );
}
