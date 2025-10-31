"use client";

import { memo, useMemo } from "react";
import { AtomIcon, BotMessageSquare, Brain, Navigation, SparklesIcon } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import Image from "next/image";

// Move grid data outside component
const gridItems = [
  {
    area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
    icon: Brain,
    img: "/hover4.png",
    imgClassName: "absolute bottom-[-120px] left-[-70px] max-sm:w-[300px] max-sm:h-[300px] max-sm:bottom-[-40px] max-sm:opacity-50 w-[310px] h-[400px]",
    title: "Smarter Workflows, Faster Results",
    description: "Unlock next-gen automation tools that simplify your process and boost creativity.",
  },
  {
    area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
    icon: BotMessageSquare,
    title: "AI-Powered Code & Creativity",
    description: "Write, build, and innovate with AI tools designed to accelerate your ideas.",
    img: "/service8.png",
    imgClassName: "absolute bottom-[-10px] left-[-10px] w-[300px] h-[300px] max-sm:w-[250px] max-sm:h-[250px] max-sm:bottom-[30px] max-sm:left-[-30px] max-sm:opacity-50",
  },
  {
    area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
    icon: AtomIcon,
    img: "/serviceRobot.png",
    imgClassName: "absolute bottom-[-160px] left-[-200px] w-[600px] h-[600px] max-sm:bottom-[-110px] max-sm:left-[-65px] max-sm:w-[350px] max-sm:h-[350px] max-sm:opacity-80",
  },
  {
    area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
    icon: SparklesIcon,
    title: "Designed for Innovators",
    description: "From AI prompts to creative engines, everything you need to push boundaries.",
    img: "/services6.png",
    imgClassName: "absolute bottom-[-80px] left-[130px] w-[400px] h-[300px] max-sm:left-[-50px] max-sm:bottom-[-50px]",
  },
  {
    area: "md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]",
    icon: Navigation,
    title: "Future Tools, Today",
    description: "Stay ahead with cutting-edge AI solutions built for speed, clarity, and impact.",
    img: "/service9.png",
    imgClassName: "absolute bottom-[-60px] right-[-60px] w-[300px] h-[300px]",
  },
];

// Memoize glowing effect props
const glowingEffectProps = {
  blur: 0,
  borderWidth: 4,
  spread: 80,
  glow: true,
  disabled: false,
  proximity: 64,
  inactiveZone: 0.01,
};

const GridItem = memo(({ area, icon: Icon, title, description, img, imgClassName }) => {
  return (
 <li className={`min-h-[20rem] relative sm:min-h-[18rem] md:min-h-[14rem] list-none ${area} `}>
      <div className="relative h-full rounded-2xl border border-gray-700 p-2 md:rounded-3xl md:p-3 ">
        <GlowingEffect {...glowingEffectProps} />

        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3 ">
            
            {/* Icon */}
            <div className="w-fit rounded-lg border border-gray-600 p-2  relative">
              <Icon className="h-8 w-8 text-cyan-200" aria-hidden="true" />
            </div>

            {/* Image (only if provided) */}
            {img && (
              <div className={imgClassName}>
                <Image
                  src={img}
                  alt={title || "AI service illustration"}
                  fill
                  className="object-contain w-full h-full"
                  loading="lazy"
                  sizes="(max-width: 768px) 300px, (max-width: 1024px) 400px, 600px"
                />
              </div>
            )}

            {/* Text */}
            {(title || description) && (
              <div className="space-y-3  relative">
                {title && (
                  <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-white md:text-2xl/[1.875rem]">
                    {title}
                  </h3>
                )}
                {description && (
                  <p className="font-sans text-sm/[1.125rem] text-white md:text-base/[1.375rem] dark:text-neutral-400">
                    {description}
                  </p>
                )}
              </div>
            )}

          </div>
        </div>
      </div>
    </li>
  );
});

GridItem.displayName = "GridItem";

export function GlowingEffectDemo() {
  // Memoize grid items to prevent recreation
  const items = useMemo(
    () => gridItems.map((item, index) => (
      <GridItem
        key={`grid-item-${index}`}
        area={item.area}
        icon={item.icon}
        title={item.title}
        description={item.description}
        img={item.img}
        imgClassName={item.imgClassName}
      />
    )),
    []
  );

  return (
  <ul className="
  grid 
  grid-cols-1 
  grid-rows-none 
  gap-6 
  sm:gap-4 
  md:grid-cols-12 
  md:grid-rows-3 
  lg:gap-4 
  xl:max-h-[44rem] 
  xl:grid-rows-2 
  mx-auto 
  px-4
 
">
  {items}
</ul>

  );
}