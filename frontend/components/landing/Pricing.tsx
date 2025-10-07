"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Blocks } from "lucide-react";
import {
  Check,
  Star,
  Zap,
  Shield,
  Clock,
  BarChart3,
  Bell,
  Package,
} from "lucide-react";

interface PricingTier {
  name: string;
  description: string;
  price: string;
  images: string;
  popular?: boolean;
  premium?: boolean;
  features: string[];
  buttonText: string;
  icon: React.ReactNode;
}

const pricingTiers: PricingTier[] = [
  {
    name: "Standard",
    description: "Perfect for data labeling projects",
    price: "1 SOL",
    images: "1,000 Images",
    features: [
      "All image classification types",
      "2.5M+ Images labeled",
      "Priority support",
      "Advanced analytics dashboard",
    ],
    buttonText: "Get Started",
    icon: <Star className="h-5 w-5" />,
  },
];

const featureIcons = [
  {
    icon: <Zap className="h-6 w-6" />,
    color:
      "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    color:
      "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    color:
      "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
  },
  {
    icon: <Bell className="h-6 w-6" />,
    color: "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400",
  },
  {
    icon: <Package className="h-6 w-6" />,
    color:
      "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="container mx-auto px-4 py-20 mb-20 pt-32">
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="text-4xl font-semibold text-blue-600 uppercase tracking-wider">
            Pricing
          </span>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        {pricingTiers.map((tier, index) => (
          <div
            key={index}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 auto-rows-fr"
          >
            {/* Main pricing card */}
            <Card className="lg:col-span-4 lg:row-span-2 relative overflow-hidden transition-all duration-300 hover:shadow-xl border border-border hover:border-blue-300 bg-gradient-to-br from-muted/50 to-card">
              <CardHeader className="text-center pb-4 pt-8">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="w-16 h-16 flex items-center justify-center text-foreground">
                    <Blocks className="h-12 w-12" />
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold">
                  {tier.name}
                </CardTitle>
                <p className="text-muted-foreground">{tier.description}</p>
              </CardHeader>

              <CardContent className="text-center px-8">
                <div className="mb-8">
                  <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {tier.price}
                  </div>
                  <div className="text-xl text-muted-foreground mb-2">
                    {tier.images}
                  </div>
                  <div className="text-sm text-muted-foreground/70">
                    per labeling package
                  </div>
                </div>
                <Button className="w-full mb-6 text-primary-foreground py-3 text-lg ">
                  {tier.buttonText}
                </Button>
              </CardContent>
            </Card>

            {/* Feature cards in bento layout */}
            {tier.features.map((feature, featureIndex) => (
              <Card
                key={featureIndex}
                className={`${
                  featureIndex === 0
                    ? "lg:col-span-5"
                    : featureIndex === 1
                      ? "lg:col-span-3"
                      : featureIndex === 2
                        ? "lg:col-span-3"
                        : featureIndex === 3
                          ? "lg:col-span-5"
                          : featureIndex === 4
                            ? "lg:col-span-4"
                            : "lg:col-span-4"
                } ${
                  featureIndex % 2 === 0 ? "lg:row-span-1" : "lg:row-span-1"
                } relative overflow-hidden transition-all duration-300 hover:shadow-lg border border-border hover:border-border/80 bg-card group cursor-pointer`}
              >
                <CardContent className="p-6 h-full flex flex-col justify-between">
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${featureIcons[featureIndex]?.color || "bg-muted text-muted-foreground"}`}
                    >
                      {featureIcons[featureIndex]?.icon || (
                        <Check className="h-6 w-6" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-2 group-hover:text-blue-600 transition-colors">
                        {feature}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {featureIndex === 0 &&
                          "Support for object detection, image segmentation, and classification tasks with AI assistance."}
                        {featureIndex === 1 &&
                          "Trusted dataset with over 2.5 million professionally labeled images across various categories."}
                        {featureIndex === 2 &&
                          "24/7 dedicated support team with average response time under 2 hours."}
                        {featureIndex === 3 &&
                          "Comprehensive insights with performance metrics, progress tracking, and export tools."}
                      </p>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-blue-50 dark:from-blue-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
