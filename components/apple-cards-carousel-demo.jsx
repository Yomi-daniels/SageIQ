"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import Image from "next/image";

export default function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Get to know <span className="text-cyan-300">Sageiq.</span>
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "/moreWithAi.png",
    content: <DummyContent />,
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: "/productivity.jpg",
    content: <DummyContent />,
  },
  {
  category: "AI Solutions",
  title: "Introducing SageIQ Vision — Smarter Business Insights.",
  src: "/AiImae.jpg",
  content: <DummyContent />,
},

{
  category: "Automation",
  title: "Seamless Data Mapping for Smarter Decisions.",
  src: "/automation.jpg",
  content: <DummyContent />,
},

{
  category: "Innovation",
  title: "AI-Powered Analytics That Redefine Performance.",
  src: "/innovation.jpg",
  content: <DummyContent />,
},

{
  category: "Training",
  title: "Join SageIQ — Now Training AI Engineers.",
  src: "/joinSageIQ.jpg",
  content: <DummyContent />,
},

];
