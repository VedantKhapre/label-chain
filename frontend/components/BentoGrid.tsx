"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Coins,
  Users,
  Database,
  TrendingUp,
  Shield,
  Zap,
  BarChart3,
  Target,
} from "lucide-react";

export default function BentoGrid() {
  return (
    <section
      id="features"
      className="container mx-auto px-4 py-16 mb-20 scroll-mt-20"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Why Choose LabelChain?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          The future of data annotation powered by Solana blockchain technology
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-7xl mx-auto">
        <Card className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-blue-500 to-purple-600 text-white border-0 overflow-hidden relative">
          <CardContent className="p-6 h-full flex flex-col justify-between">
            <div>
              <Coins className="h-8 w-8 mb-4 opacity-90" />
              <h3 className="text-xl font-bold mb-2">Earn SOL Tokens</h3>
              <p className="text-blue-100 text-sm mb-4">
                Get rewarded instantly for quality data annotations with Solana
                fast, low-cost transactions.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Badge
                variant="secondary"
                className="bg-white/20 text-white border-0"
              >
                Live Rewards
              </Badge>
              <Zap className="h-4 w-4" />
            </div>
            <div className="absolute -bottom-4 -right-4 opacity-10">
              <Coins className="h-24 w-24" />
            </div>
          </CardContent>
        </Card>

        {/* Stats cards */}
        <Card className="md:col-span-1 bg-card hover:shadow-lg transition-shadow">
          <CardContent className="p-6 text-center">
            <Users className="h-8 w-8 mx-auto mb-3 text-blue-600" />
            <div className="text-2xl font-bold text-foreground">1.2K+</div>
            <div className="text-sm text-muted-foreground">Active Labelers</div>
          </CardContent>
        </Card>

        <Card className="md:col-span-1 bg-card hover:shadow-lg transition-shadow">
          <CardContent className="p-6 text-center">
            <Database className="h-8 w-8 mx-auto mb-3 text-green-600" />
            <div className="text-2xl font-bold text-foreground">50M+</div>
            <div className="text-sm text-muted-foreground">Labels Created</div>
          </CardContent>
        </Card>

        {/* Quality assurance card */}
        <Card className="md:col-span-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0">
          <CardContent className="p-6 flex items-center gap-4">
            <Shield className="h-10 w-10 opacity-90" />
            <div>
              <h3 className="font-bold mb-1">Quality Guaranteed</h3>
              <p className="text-green-100 text-sm">
                Multi-validator consensus ensures 99.8% accuracy
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Performance metrics */}
        <Card className="md:col-span-1 bg-card hover:shadow-lg transition-shadow">
          <CardContent className="p-6 text-center">
            <TrendingUp className="h-8 w-8 mx-auto mb-3 text-orange-600" />
            <div className="text-2xl font-bold text-foreground">0.01s</div>
            <div className="text-sm text-muted-foreground">Avg Response</div>
          </CardContent>
        </Card>

        <Card className="md:col-span-1 bg-card hover:shadow-lg transition-shadow">
          <CardContent className="p-6 text-center">
            <BarChart3 className="h-8 w-8 mx-auto mb-3 text-purple-600" />
            <div className="text-2xl font-bold text-foreground">24/7</div>
            <div className="text-sm text-muted-foreground">Uptime</div>
          </CardContent>
        </Card>

        {/* Feature highlights */}
        <Card className="md:col-span-2 bg-card border-2 border-border hover:border-blue-200 transition-colors">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Target className="h-5 w-5 text-blue-600" />
              Smart Matching
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <p className="text-muted-foreground text-sm mb-4">
              AI-powered task distribution matches your skills with the right
              projects for maximum earnings.
            </p>
            <Button variant="outline" size="sm">
              Learn More
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
