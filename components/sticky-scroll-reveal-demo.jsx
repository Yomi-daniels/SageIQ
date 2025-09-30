"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const content = [
  {
    title: "Smarter Conversations",
    description:
      "Sage IQ isn’t just a chatbot—it’s your intelligent partner. Whether it’s answering questions, drafting content, or assisting customers, Sage IQ communicates naturally and gets things done faster.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-cyan-600 to-emerald-500 text-white text-3xl font-bold">
        Smarter Conversations
      </div>
    ),
  },
  {
    title: "Real-Time Intelligence",
    description:
      "With live data analysis and instant insights, Sage IQ helps you make better decisions on the spot. From tracking metrics to generating reports, your knowledge is always up-to-date.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-black/70">
        <img
          src="/linear.webp"
          width={600}
          height={600}
          className="h-[85%] w-[85%] object-cover rounded-2xl shadow-2xl"
          alt="sage iq dashboard"
        />
      </div>
    ),
  },
  {
    title: "Seamless Integration",
    description:
      "Sage IQ connects effortlessly with your favorite platforms—WhatsApp, Slack, email, and enterprise tools—so your workflows stay smooth without switching apps.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white text-3xl font-bold">
        Seamless Integration
      </div>
    ),
  },
  {
    title: "Future-Proof Productivity",
    description:
      "Sage IQ evolves with your business, learning your preferences and scaling as you grow. It’s not just an AI tool—it’s your long-term productivity partner.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-orange-500 to-yellow-500 text-white text-3xl font-bold">
        Future-Proof Productivity
      </div>
    ),
  },
];

export default function StickyScrollRevealDemo() {
  return (
    <div className="w-full py-20 px-6">
      <StickyScroll
        content={content.map((item) => ({
          ...item,
          title: (
            <span className="text-4xl font-bold tracking-tight text-white drop-shadow-lg">
              {item.title}
            </span>
          ),
          description: (
            <p className="text-lg leading-relaxed text-gray-200 max-w-2xl">
              {item.description}
            </p>
          ),
        }))}
        contentClassName="h-96 w-[32rem]" // bigger right container
      />
    </div>
  );
}
