"use client";

import React, { useMemo, memo } from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import Image from "next/image";
import CustomCursor from "@/components/CustomCursor";
// Memoized content component to prevent unnecessary re-renders
const DummyContent = memo(() => {
  const contents = useMemo(() => [
    {
      title: "AI that adapts to your workflow.",
      text: "SageIQ helps you turn complex data into clear, actionable insights — powered by adaptive intelligence designed for business growth.",
      img: "/ai-dashboard.png",
    },
    {
      title: "Smarter automation, faster results.",
      text: "Cut repetitive tasks and scale your efficiency. SageIQ automates your operations while keeping you in full control.",
      img: "/automation-preview.png",
    },
    {
      title: "Next-gen analytics you can trust.",
      text: "From predictive trends to real-time data visualization, SageIQ redefines how teams analyze and make smarter decisions.",
      img: "/analytics-insight.png",
    },
  ], []);

  return (
    <>
      {contents.map((item, index) => (
        <div
          key={"dummy-content-" + index}
          className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-12 rounded-3xl mb-4 text-center"
        >
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-2xl mx-auto leading-relaxed">
            <span className="font-bold text-neutral-700 dark:text-neutral-200 block mb-2">
              {item.title}
            </span>
            {item.text}
          </p>
          <Image
            src={item.img}
            alt={item.title}
            height={400}
            width={400}
            className="mt-6 md:w-1/2 h-auto mx-auto object-contain"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      ))}
    </>
  );
});

DummyContent.displayName = "DummyContent";

// Move data outside component to prevent recreation on every render
const data = [
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "/moreWithAi.png",
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: "/productivity.jpg",
  },
  {
    category: "AI Solutions",
    title: "Introducing SageIQ Vision — Smarter Business Insights.",
    src: "/AiImae.jpg",
  },
  {
    category: "Automation",
    title: "Seamless Data Mapping for Smarter Decisions.",
    src: "/automation.jpg",
  },
  {
    category: "Innovation",
    title: "AI-Powered Analytics That Redefine Performance.",
    src: "/innovation.jpg",
  },
  {
    category: "Training",
    title: "Join SageIQ — Now Training AI Engineers.",
    src: "/joinSageIQ.jpg",
  },
];

export default function AppleCardsCarouselDemo() {
  const cards = useMemo(
    () =>
      data.map((card, index) => (
        <div key={card.src} className="card-hover-zone">
          <Card card={{ ...card, content: <DummyContent /> }} index={index} />
        </div>
      )),
    []
  );
  return (
    <div className="w-full h-full py-20 ">
       <CustomCursor />
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl max-sm:text-3xl  relative z-30 text-white font-sans">
        Get to know <span className="text-cyan-300 font-bold">SageIQ.</span>
      </h2>
      <Carousel items={cards} />
    </div>
  );
}