"use client";

import { SignUp } from "@clerk/nextjs";
import AuthNavbar from "@/components/AuthNavbar";

export default function SignUpPage() {
  return (
    <>
      <AuthNavbar />
      <div className="min-h-screen flex items-center justify-center bg-background px-4">
        <div className="w-full max-w-md flex flex-col items-center">
          <div className="flex justify-center w-full">
            <SignUp />
          </div>
        </div>
      </div>
    </>
  );
}
