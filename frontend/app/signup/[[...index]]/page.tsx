"use client";

import { SignUp } from "@clerk/nextjs";
import AuthNavbar from "@/components/layout/AuthNavbar";
import { useClerkAppearance } from "@/hooks/useClerkAppearance";

export default function SignUpPage() {
  const { clerkAppearance, mounted } = useClerkAppearance();

  if (!mounted) {
    return (
      <>
        <AuthNavbar />
        <div className="min-h-screen flex items-center justify-center bg-background px-4">
          <div className="w-full max-w-md flex flex-col items-center">
            <div className="flex justify-center w-full">
              <div className="w-96 h-96 bg-muted animate-pulse rounded-lg"></div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <AuthNavbar />
      <div className="min-h-screen flex items-center justify-center bg-background px-4">
        <div className="w-full max-w-md flex flex-col items-center">
          <div className="flex justify-center w-full">
            <SignUp appearance={clerkAppearance} />
          </div>
        </div>
      </div>
    </>
  );
}
