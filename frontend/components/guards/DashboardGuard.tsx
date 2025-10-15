"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { useDashboardGuard } from "@/hooks/useOnboardingStatus";

interface DashboardGuardProps {
  children: React.ReactNode;
  requiredAccountType?: "individual" | "organization";
}

/**
 * Guard component that protects dashboard routes
 * Ensures users have completed onboarding and have the correct account type
 */
export default function DashboardGuard({
  children,
  requiredAccountType,
}: DashboardGuardProps) {
  const router = useRouter();
  const {
    shouldShowDashboard,
    shouldRedirectToOnboarding,
    shouldRedirectToAuth,
    isLoading,
    userAccountType,
  } = useDashboardGuard();

  useEffect(() => {
    if (shouldRedirectToAuth) {
      router.push("/sign-in");
      return;
    }

    if (shouldRedirectToOnboarding) {
      router.push("/onboard");
      return;
    }

    // Check if user has the required account type for this dashboard
    if (
      shouldShowDashboard &&
      requiredAccountType &&
      userAccountType !== requiredAccountType
    ) {
      // Redirect to the correct dashboard based on user's account type
      if (userAccountType === "organization") {
        router.push("/studio/organization");
      } else if (userAccountType === "individual") {
        router.push("/studio/user");
      }
      return;
    }
  }, [
    shouldRedirectToAuth,
    shouldRedirectToOnboarding,
    shouldShowDashboard,
    requiredAccountType,
    userAccountType,
    router,
  ]);

  // Show loading state while checking access
  if (isLoading || shouldRedirectToAuth || shouldRedirectToOnboarding) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <Loader2 className="w-8 h-8 animate-spin mx-auto text-primary" />
          <p className="text-muted-foreground">
            {shouldRedirectToAuth
              ? "Redirecting to sign in..."
              : shouldRedirectToOnboarding
              ? "Redirecting to onboarding..."
              : "Verifying access..."}
          </p>
        </div>
      </div>
    );
  }

  // Show loading if account type doesn't match required type
  if (
    requiredAccountType &&
    userAccountType &&
    userAccountType !== requiredAccountType
  ) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <Loader2 className="w-8 h-8 animate-spin mx-auto text-primary" />
          <p className="text-muted-foreground">
            Redirecting to your dashboard...
          </p>
        </div>
      </div>
    );
  }

  // User has proper access, render the dashboard
  if (shouldShowDashboard) {
    return <>{children}</>;
  }

  // Fallback loading state
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center space-y-4">
        <Loader2 className="w-8 h-8 animate-spin mx-auto text-primary" />
        <p className="text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
}
