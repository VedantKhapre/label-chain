"use client";

import React, { useState } from "react";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { Button } from "@/components/ui/button";
import { User, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccountTypeProps {
  onSelect?: (type: "individual" | "organization") => void;
  selectedType?: "individual" | "organization";
  onNext?: () => void;
  onPrevious?: () => void;
}

export default function AccountType({
  onSelect,
  selectedType,
  onNext,
  onPrevious,
}: AccountTypeProps) {
  const [selected, setSelected] = useState<
    "individual" | "organization" | null
  >(selectedType || null);

  const handleSelect = (type: "individual" | "organization") => {
    setSelected(type);
    onSelect?.(type);
  };

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
          Choose your platform
        </h1>
        <p className="text-neutral-300 text-lg">
          You cant Switch between platforms
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Individual User Card */}
        <CardSpotlight
          className={cn(
            "h-80 w-full cursor-pointer transition-all duration-300",
            selected === "individual" ? "ring-2 ring-blue-500" : "",
          )}
          onClick={() => handleSelect("individual")}
        >
          <div className="text-center space-y-6 relative z-20 flex flex-col items-center justify-center h-full">
            <div className="p-6 rounded-full bg-blue-500/10 border border-blue-500/20 w-24 h-24 flex items-center justify-center">
              <User className="w-12 h-12 text-blue-400" />
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-white">Individual</h3>
              <p className="text-neutral-300 text-sm px-4">
                For personal use and individual projects
              </p>
            </div>
          </div>
        </CardSpotlight>

        {/* Organization Card */}
        <CardSpotlight
          className={cn(
            "h-80 w-full cursor-pointer transition-all duration-300",
            selected === "organization" ? "ring-2 ring-green-500" : "",
          )}
          onClick={() => handleSelect("organization")}
        >
          <div className="text-center space-y-6 relative z-20 flex flex-col items-center justify-center h-full">
            <div className="p-6 rounded-full bg-green-500/10 border border-green-500/20 w-24 h-24 flex items-center justify-center">
              <Building2 className="w-12 h-12 text-green-400" />
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-white">Organization</h3>
              <p className="text-neutral-300 text-sm px-4">
                For teams and businesses with collaborative needs
              </p>
            </div>
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
          disabled={!selected}
          className="bg-white text-black hover:bg-neutral-200 px-8 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </Button>
      </div>
    </div>
  );
}
