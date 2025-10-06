"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const useClerkAppearance = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  const clerkAppearance = {
    baseTheme: undefined,
    variables: {
      colorPrimary: isDark ? "oklch(0.922 0 0)" : "oklch(0.205 0 0)",
      colorBackground: isDark ? "oklch(0.205 0 0)" : "oklch(1 0 0)",
      colorText: isDark ? "oklch(0.985 0 0)" : "oklch(0.145 0 0)",
      colorInputBackground: isDark ? "oklch(0.269 0 0)" : "oklch(0.97 0 0)",
      colorInputText: isDark ? "oklch(0.985 0 0)" : "oklch(0.145 0 0)",
      borderRadius: "0.625rem",
      fontFamily: "var(--font-geist-sans)",
    },
    elements: {
      formButtonPrimary: {
        backgroundColor: isDark ? "oklch(0.922 0 0)" : "oklch(0.205 0 0)",
        color: isDark ? "oklch(0.205 0 0)" : "oklch(0.985 0 0)",
        "&:hover": {
          backgroundColor: isDark ? "oklch(0.85 0 0)" : "oklch(0.185 0 0)",
        },
      },
      card: {
        backgroundColor: isDark ? "oklch(0.205 0 0)" : "oklch(1 0 0)",
        border: isDark
          ? "1px solid oklch(1 0 0 / 10%)"
          : "1px solid oklch(0.922 0 0)",
        boxShadow: isDark
          ? "0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)"
          : "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      },
      headerTitle: {
        color: isDark ? "oklch(0.985 0 0)" : "oklch(0.145 0 0)",
      },
      headerSubtitle: {
        color: isDark ? "oklch(0.708 0 0)" : "oklch(0.556 0 0)",
      },
      socialButtonsBlockButton: {
        backgroundColor: isDark ? "oklch(0.269 0 0)" : "oklch(0.97 0 0)",
        border: isDark
          ? "1px solid oklch(1 0 0 / 10%)"
          : "1px solid oklch(0.922 0 0)",
        color: isDark ? "oklch(0.985 0 0)" : "oklch(0.145 0 0)",
        "&:hover": {
          backgroundColor: isDark ? "oklch(0.3 0 0)" : "oklch(0.95 0 0)",
        },
      },
      formFieldInput: {
        backgroundColor: isDark ? "oklch(0.269 0 0)" : "oklch(0.97 0 0)",
        border: isDark
          ? "1px solid oklch(1 0 0 / 10%)"
          : "1px solid oklch(0.922 0 0)",
        color: isDark ? "oklch(0.985 0 0)" : "oklch(0.145 0 0)",
        "&:focus": {
          borderColor: isDark ? "oklch(0.556 0 0)" : "oklch(0.708 0 0)",
          boxShadow: isDark
            ? "0 0 0 3px oklch(0.556 0 0 / 50%)"
            : "0 0 0 3px oklch(0.708 0 0 / 50%)",
        },
      },
      formFieldLabel: {
        color: isDark ? "oklch(0.985 0 0)" : "oklch(0.145 0 0)",
      },
      footerActionLink: {
        color: isDark ? "oklch(0.922 0 0)" : "oklch(0.205 0 0)",
        "&:hover": {
          color: isDark ? "oklch(0.85 0 0)" : "oklch(0.185 0 0)",
        },
      },
      dividerLine: {
        backgroundColor: isDark ? "oklch(1 0 0 / 10%)" : "oklch(0.922 0 0)",
      },
      dividerText: {
        color: isDark ? "oklch(0.708 0 0)" : "oklch(0.556 0 0)",
      },
      identityPreviewText: {
        color: isDark ? "oklch(0.708 0 0)" : "oklch(0.556 0 0)",
      },
      identityPreviewEditButton: {
        color: isDark ? "oklch(0.922 0 0)" : "oklch(0.205 0 0)",
      },
      formResendCodeLink: {
        color: isDark ? "oklch(0.922 0 0)" : "oklch(0.205 0 0)",
        "&:hover": {
          color: isDark ? "oklch(0.85 0 0)" : "oklch(0.185 0 0)",
        },
      },
      alert: {
        backgroundColor: isDark ? "oklch(0.269 0 0)" : "oklch(0.97 0 0)",
        border: isDark
          ? "1px solid oklch(1 0 0 / 10%)"
          : "1px solid oklch(0.922 0 0)",
        color: isDark ? "oklch(0.985 0 0)" : "oklch(0.145 0 0)",
      },
      alertText: {
        color: isDark ? "oklch(0.985 0 0)" : "oklch(0.145 0 0)",
      },
    },
  };

  return { clerkAppearance, mounted, isDark };
};
