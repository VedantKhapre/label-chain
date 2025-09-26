"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is LabelChain and how does it work?",
    answer:
      "LabelChain is a decentralized data annotation platform built on Solana blockchain. Users earn SOL tokens by providing high-quality data labels, which are verified through our multi-validator consensus system to ensure accuracy and reliability.",
  },
  {
    question: "How do I start earning SOL tokens?",
    answer:
      "Simply connect your Solana wallet, complete our quick onboarding process, and start labeling data. You'll earn SOL tokens immediately upon successful completion and validation of each task. No minimum payout required!",
  },
  {
    question: "What types of data can I label?",
    answer:
      "We offer various labeling tasks including image classification, text annotation, audio transcription, sentiment analysis, and object detection. Our AI matching system will recommend tasks based on your skills and experience.",
  },
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <section id="faq" className="container mx-auto px-4 py-16 mb-16 pt-24">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <HelpCircle className="h-8 w-8 text-blue-600" />
          <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Everything you need to know about earning with LabelChain
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-3">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-200 hover:shadow-md"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
            >
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <HelpCircle className="h-4 w-4 text-gray-500" />
                </div>
                <span className="text-lg font-medium text-gray-900 pr-4">
                  {item.question}
                </span>
              </div>
              <div className="flex-shrink-0">
                {openItems.includes(index) ? (
                  <ChevronUp className="h-5 w-5 text-gray-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                )}
              </div>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openItems.includes(index)
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 pb-6">
                <div className="pl-12">
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
