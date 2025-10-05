"use client";

import * as React from "react";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DetailsProps {
  onNext?: () => void;
}

function formatDate(date: Date | undefined) {
  if (!date) {
    return "";
  }

  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function isValidDate(date: Date | undefined) {
  if (!date) {
    return false;
  }
  return !isNaN(date.getTime());
}

export default function Details({ onNext }: DetailsProps) {
  const [formData, setFormData] = React.useState({
    name: "",
  });

  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  const [month, setMonth] = React.useState<Date | undefined>(date);
  const [dateValue, setDateValue] = React.useState("");

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    onNext?.();
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-6">
      {/* Title */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-1">
          Help us personalize your experience
        </h1>
      </div>

      {/* Form */}
      <div className="space-y-6">
        {/* Name Field */}
        <div className="space-y-2">
          <Label htmlFor="name" className="text-white text-sm">
            Whats your name?
          </Label>
          <Input
            id="name"
            type="text"
            placeholder="Willia"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            className="bg-transparent border-neutral-700 text-white placeholder:text-neutral-400 focus:border-white focus:ring-white rounded-lg h-12"
          />
        </div>

        {/* Date of Birth */}
        <div className="space-y-2">
          <Label htmlFor="date" className="text-white text-sm">
            Whats your date of birth?
          </Label>
          <div className="relative flex gap-2">
            <Input
              id="date"
              value={dateValue}
              placeholder="June 01, 2025"
              className="bg-transparent border-neutral-700 text-white placeholder:text-neutral-400 focus:border-white focus:ring-white rounded-lg h-12 pr-10"
              onChange={(e) => {
                const date = new Date(e.target.value);
                setDateValue(e.target.value);
                if (isValidDate(date)) {
                  setDate(date);
                  setMonth(date);
                }
              }}
              onKeyDown={(e) => {
                if (e.key === "ArrowDown") {
                  e.preventDefault();
                  setOpen(true);
                }
              }}
            />
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  id="date-picker"
                  variant="ghost"
                  className="absolute top-1/2 right-2 size-6 -translate-y-1/2 text-neutral-400 hover:text-white"
                >
                  <CalendarIcon className="size-3.5" />
                  <span className="sr-only">Select date</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className="w-auto overflow-hidden p-0"
                align="end"
                alignOffset={-8}
                sideOffset={10}
              >
                <Calendar
                  mode="single"
                  selected={date}
                  captionLayout="dropdown"
                  month={month}
                  onMonthChange={setMonth}
                  onSelect={(date) => {
                    setDate(date);
                    setDateValue(formatDate(date));
                    setOpen(false);
                  }}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center pt-4">
        <Button
          onClick={handleNext}
          className="bg-white text-black hover:bg-neutral-200 px-8 rounded-lg"
        >
          Next
        </Button>
      </div>
    </div>
  );
}
