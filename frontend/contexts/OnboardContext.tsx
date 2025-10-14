"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";

export interface OnboardData {
  name: string;
  dateOfBirth: string;
  accountType: "individual" | "organization" | null;
  walletAddress: string;
}

interface OnboardContextType {
  data: OnboardData;
  updateData: (
    field: keyof OnboardData,
    value: string | "individual" | "organization" | null,
  ) => void;
  resetData: () => void;
}

const initialData: OnboardData = {
  name: "",
  dateOfBirth: "",
  accountType: null,
  walletAddress: "",
};

const OnboardContext = createContext<OnboardContextType | undefined>(undefined);

export function OnboardProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<OnboardData>(initialData);

  const updateData = useCallback(
    (
      field: keyof OnboardData,
      value: string | "individual" | "organization" | null,
    ) => {
      setData((prev) => ({
        ...prev,
        [field]: value,
      }));
    },
    [],
  );

  const resetData = () => {
    setData(initialData);
  };

  return (
    <OnboardContext.Provider value={{ data, updateData, resetData }}>
      {children}
    </OnboardContext.Provider>
  );
}

export function useOnboard() {
  const context = useContext(OnboardContext);
  if (context === undefined) {
    throw new Error("useOnboard must be used within an OnboardProvider");
  }
  return context;
}
