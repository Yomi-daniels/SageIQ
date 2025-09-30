"use client";;
import { AtomIcon, Bot, BotIcon, BotMessageSquare, Box, Brain, Lock, Navigation, Search, SearchCheckIcon, Settings, Sparkles, SparklesIcon, WholeWord, WholeWordIcon } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import Image from "next/image";

export function GlowingEffectDemo() {
  return (
    <ul
  className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[44rem] xl:grid-rows-2 mx-auto"
>
  {/* Card 1 */}
  <GridItem
    area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
    icon={<Brain className="relative z-10 h-8 w-8 text-cyan-200 " />}
    img="/hover4.png"
      imgClassName="absolute bottom-[-120px] left-[-70px] w-[310px] h-[400px] "
    title="Smarter Workflows, Faster Results"
    description="Unlock next-gen automation tools that simplify your process and boost creativity."
  />

  {/* Card 2 */}
  <GridItem
    area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
    icon={<BotMessageSquare className="h-8 w-8 text-cyan-200 " />}
    title="AI-Powered Code & Creativity"
    description="Write, build, and innovate with AI tools designed to accelerate your ideas."
    img="/service8.png"
    imgClassName="absolute bottom-[-10px] left-[-10px] w-[300px] h-[300px]"
  />

  {/* Card 3 */}
  <GridItem
    area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
    icon={<AtomIcon className="h-8 w-8 text-cyan-200 " />}
    img="/serviceRobot.png"
    imgClassName="absolute bottom-[-160px] left-[-200px] w-[600px] h-[600px]"

  />

  {/* Card 4 */}
  <GridItem
    area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
    icon={<SparklesIcon className=" h-8 w-8 text-cyan-200 " />}
    title="Designed for Innovators"
    description="From AI prompts to creative engines, everything you need to push boundaries."
    img="/services6.png"
        imgClassName="absolute bottom-[-80px] left-[130px] w-[400px] h-[300px]"
  />

  {/* Card 5 */}
  <GridItem
    area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
    icon={<Navigation className="h-8 w-8 text-cyan-200 " />}
    title="Future Tools, Today"
    description="Stay ahead with cutting-edge AI solutions built for speed, clarity, and impact."
    img="/service9.png"
    imgClassName="absolute bottom-[-60px] right-[-60px] w-[300px] h-[300px]"
  />
</ul>

  );
}

const GridItem = ({
  area,
  icon,
  title,
  description,
  img,
  imgClassName
}) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border border-gray-700 p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          blur={0}
          borderWidth={4}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />

        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            
            {/* Icon */}
            <div className="w-fit rounded-lg border border-gray-600 p-2 z-10 relative">
              {icon}
            </div>

            {/* Image (only if provided) */}
            {img && (
              <div className={imgClassName}>
                <Image
                  src={img}
                  alt={title || "AI"}
                  fill
                  className="object-contain w-full h-full"
                  priority
                />
              </div>
            )}

            {/* Text */}
            <div className="space-y-3 z-10 relative">
              {title && (
                <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-white md:text-2xl/[1.875rem]">
                  {title}
                </h3>
              )}
              {description && (
                <h2 className="font-sans text-sm/[1.125rem] text-white md:text-base/[1.375rem] dark:text-neutral-400">
                  {description}
                </h2>
              )}
            </div>

          </div>
        </div>
      </div>
    </li>
  );
};

