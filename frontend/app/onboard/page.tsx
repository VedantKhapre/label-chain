"use client";

import React, { useState, useEffect } from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import Details from "@/components/onboard/details";
import AccountType from "@/components/onboard/accountType";
import ConnectWallet from "@/components/onboard/connectWallet";
import { OnboardProvider } from "@/contexts/OnboardContext";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { useOnboardingGuard } from "@/hooks/useOnboardingStatus";

const steps = [
  { id: 1, component: Details, name: "Details" },
  { id: 2, component: AccountType, name: "Account Type" },
  { id: 3, component: ConnectWallet, name: "Connect Wallet" },
];

export default function OnboardPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const router = useRouter();
  const { shouldRedirectToDashboard, dashboardPath, isLoading } =
    useOnboardingGuard();

  // Check if user has already completed onboarding
  useEffect(() => {
    if (shouldRedirectToDashboard && dashboardPath) {
      router.push(dashboardPath);
    }
  }, [shouldRedirectToDashboard, dashboardPath, router]);

  const handleNext = () => {
    // Mark current step as completed
    if (!completedSteps.includes(currentStep)) {
      setCompletedSteps([...completedSteps, currentStep]);
    }

    // Move to next step
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const CurrentComponent = steps[currentStep - 1]?.component;

  // Show loading state while checking user status
  if (isLoading || shouldRedirectToDashboard) {
    return (
      <div className="min-h-screen bg-background">
        <BackgroundBeamsWithCollision className="min-h-screen flex flex-col relative">
          <div className="absolute top-4 right-4 z-50">
            <ThemeToggle />
          </div>
          <div className="flex-1 flex items-center justify-center p-6 relative z-50">
            <div className="text-center space-y-4">
              <Loader2 className="w-8 h-8 animate-spin mx-auto text-primary" />
              <p className="text-muted-foreground">
                Checking your account status...
              </p>
            </div>
          </div>
        </BackgroundBeamsWithCollision>
      </div>
    );
  }

  return (
    <OnboardProvider>
      <div className="min-h-screen bg-background">
        <BackgroundBeamsWithCollision className="min-h-screen flex flex-col relative">
          {/* Theme Toggle in top right corner */}
          <div className="absolute top-4 right-4 z-50">
            <ThemeToggle />
          </div>

          {/* Main Content with proper z-index */}
          <div className="flex-1 flex items-center justify-center p-6 relative z-50">
            {CurrentComponent && (
              <div className="w-full relative z-50">
                <CurrentComponent
                  onNext={handleNext}
                  onPrevious={handlePrevious}
                />
              </div>
            )}
          </div>
        </BackgroundBeamsWithCollision>
      </div>
    </OnboardProvider>
  );
}
