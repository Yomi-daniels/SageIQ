"use client";

import React, { useMemo, memo } from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import Image from "next/image";
import CustomCursor from "@/components/CustomCursor";

// Enhanced blog-style content component
const DummyContent = memo(({ cardIndex }) => {
const allContents = useMemo(() => [
  // Card 1 contents
  [
    {
      category: "Artificial Intelligence",
      title: "AI that adapts to your workflow",
      text: "SageIQ helps you turn complex data into clear, actionable insights — powered by adaptive intelligence designed for business growth. Our AI learns from your patterns and preferences, delivering personalized recommendations that evolve with your needs.",
      img: "/moreWithAi.png",
      type: "image",
    },
    {
      category: "Machine Learning",
      title: "Train models that understand your business",
      text: "Our platform enables you to build and deploy machine learning models without extensive coding knowledge. Leverage pre-trained models or create custom solutions that address your specific business challenges with unprecedented accuracy.",
      img: "/AiImae.jpg", 
      type: "image",
    },
  ],

  // Card 2 contents
  [
    {
      category: "Productivity",
      title: "Smarter automation, faster results",
      text: "Cut repetitive tasks and scale your efficiency. SageIQ automates your operations while keeping you in full control. From data entry to complex workflows, our platform handles the heavy lifting so you can focus on strategic decisions.",
      img: "/productivity.jpg", 
      type: "image",
    },
    {
      category: "Workflow Optimization",
      title: "Streamline your entire operation",
      text: "Transform manual processes into intelligent automated workflows. Our visual workflow builder lets you connect apps, trigger actions, and orchestrate complex business logic without writing a single line of code.",
      img: "/automation.jpg", 
      type: "image",
    },
    {
      category: "Time Management",
      title: "Reclaim hours every week",
      text: "Let AI handle your calendar management and task prioritization. SageIQ analyzes your work patterns and suggests optimal schedules, ensuring you spend time on what matters most.",
      img: "/innovation.jpg", 
      type: "image",
    },
  ],

  // Card 3 contents
  [
    {
      category: "Analytics",
      title: "Next-gen analytics you can trust",
      text: "From predictive trends to real-time data visualization, SageIQ redefines how teams analyze and make smarter decisions. Our advanced algorithms surface hidden patterns and opportunities, giving you the confidence to act quickly in dynamic markets.",
      img: "/joinSageIQ.jpg", 
      type: "image",
    },
    {
      category: "Business Intelligence",
      title: "Data-driven decisions at scale",
      text: "Unify data from across your organization into actionable insights. Our BI platform combines traditional reporting with AI-powered recommendations, helping leadership make informed decisions based on comprehensive, real-time data.",
      img: "/automation.jpg", 
      type: "image",
    },
  ],
], []);


  const contents = allContents[cardIndex % allContents.length];

  return (
    <>
      {contents.map((item, index) => (
        <div
          key={"dummy-content-" + index}
          className="bg-white dark:bg-neutral-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 mb-4"
        >
          {/* Media Section - Image or Video */}
          <div className="relative h-48 md:h-64 overflow-hidden bg-neutral-100 dark:bg-neutral-800">
            {item.type === 'video' ? (
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={item.img} type="video/mp4" />
              </video>
            ) : (
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            )}
            <div className="absolute top-3 left-3 bg-cyan-500 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
              {item.category}
            </div>
          </div>

          {/* Content */}
          <div className="p-5 md:p-6">
            <h3 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white mb-2 leading-tight">
              {item.title}
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {item.text}
            </p>
          </div>
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
        <div key={card.src} className="card-hover-zone relative">
          {/* <CustomCursor /> */}
          <Card card={{ ...card, content: <DummyContent cardIndex={index} /> }} index={index} />
        </div>
      )),
    []
  );
  return (
    <div className="w-full h-full py-20  ">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl max-sm:text-3xl  relative z-30 text-white font-sans">
        Get to know <span className="text-cyan-300 font-bold">SageIQ.</span>
      </h2>
      <Carousel items={cards} />
    </div>
  );
}