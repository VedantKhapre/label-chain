"use client";

import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md flex flex-col items-center">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold">Get started</h1>
          <p className="text-muted-foreground mt-2">
            Create your Label Chain account
          </p>
        </div>

        <div className="flex justify-center w-full">
          <SignUp />
        </div>
      </div>
    </div>
  );
}
