"use client";

import { useQuery } from "convex/react";
import { useUser } from "@clerk/nextjs";
import { api } from "@/convex/_generated/api";

export interface OnboardingStatus {
  isLoading: boolean;
  isAuthenticated: boolean;
  hasCompletedOnboarding: boolean;
  userAccountType: "individual" | "organization" | null;
  shouldRedirectToOnboarding: boolean;
  shouldRedirectToDashboard: boolean;
  dashboardPath: string | null;
}

/**
 * Custom hook to check user's onboarding status
 * Returns comprehensive information about user's authentication and onboarding state
 */
export function useOnboardingStatus(): OnboardingStatus {
  const { user, isLoaded } = useUser();
  const existingUser = useQuery(api.users.getCurrentUser);

  // Loading state: waiting for Clerk or Convex data
  const isLoading = !isLoaded || existingUser === undefined;

  // User is authenticated if Clerk has loaded and user exists
  const isAuthenticated = isLoaded && !!user;

  // User has completed onboarding if they exist in our database
  const hasCompletedOnboarding = !!existingUser;

  // Get user's account type if they exist
  const userAccountType = existingUser?.accountType || null;

  // Determine appropriate dashboard path
  const dashboardPath = userAccountType === "organization"
    ? "/studio/organization"
    : userAccountType === "individual"
    ? "/studio/user"
    : null;

  // Should redirect to onboarding if authenticated but not onboarded
  const shouldRedirectToOnboarding = isAuthenticated && !hasCompletedOnboarding;

  // Should redirect to dashboard if authenticated and onboarded
  const shouldRedirectToDashboard = isAuthenticated && hasCompletedOnboarding;

  return {
    isLoading,
    isAuthenticated,
    hasCompletedOnboarding,
    userAccountType,
    shouldRedirectToOnboarding,
    shouldRedirectToDashboard,
    dashboardPath,
  };
}

/**
 * Hook specifically for protecting onboarding routes
 * Returns whether the onboarding page should be accessible
 */
export function useOnboardingGuard() {
  const status = useOnboardingStatus();

  return {
    shouldShowOnboarding: status.isAuthenticated && !status.hasCompletedOnboarding,
    shouldRedirectToDashboard: status.shouldRedirectToDashboard,
    dashboardPath: status.dashboardPath,
    isLoading: status.isLoading,
  };
}

/**
 * Hook for protecting dashboard routes
 * Returns whether dashboard pages should be accessible
 */
export function useDashboardGuard() {
  const status = useOnboardingStatus();

  return {
    shouldShowDashboard: status.hasCompletedOnboarding,
    shouldRedirectToOnboarding: status.shouldRedirectToOnboarding,
    shouldRedirectToAuth: !status.isAuthenticated && !status.isLoading,
    isLoading: status.isLoading,
    userAccountType: status.userAccountType,
  };
}
