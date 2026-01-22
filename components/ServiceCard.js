'use client'

import Image from 'next/image'

export default function ServiceCard({ title, image, iconColor }) {
  const isGlass = iconColor === 'glass'
  const bgClass = isGlass ? '' : 'bg-cyan-400'

  return (
    <div className="group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer">
      <div className="relative w-full h-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
      </div>

      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
        <h3 className="text-white font-medium text-sm leading-tight max-w-[60%]">
          {title}
        </h3>

        {/* ICON — design untouched */}
        <div
          className={`
            ${isGlass
              ? 'bg-white/10 backdrop-blur-md border border-white/20'
              : bgClass}
            rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0
            group-hover:scale-110 transition-transform
          `}
        >
          <svg
            className={`w-5 h-5 transform rotate-45 ${
              isGlass ? 'text-black' : 'text-white'
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
