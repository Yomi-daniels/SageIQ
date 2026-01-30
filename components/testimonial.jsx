"use client"

import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from 'lucide-react'
import { motion, useInView, useAnimation } from 'framer-motion'
import Image from 'next/image'
const Testimonial = () => {
    const testimonials = [
  {
    id: 1,
    name: "Adebayo Ogunleye",
    role: "Founder, PayLink Africa",
    content:
      "This platform completely changed how we run our operations. Everything is faster, cleaner, and easier to manage. Honestly, it just works.",
    image: "/nigerian-man-1.jpg",
  },
  {
    id: 2,
    name: "Chioma Okafor",
    role: "Product Manager, LagosTech",
    content:
      "The support team is top-tier. Any issue we had was handled quickly, and the constant updates show they truly understand the Nigerian market.",
    image: "/nigerian-woman-1.jpg",
  },
  {
    id: 3,
    name: "Sadiq Bello",
    role: "Operations Lead, Swift Logistics NG",
    content:
      "Automation alone saved us hours every week. Integrating this into our workflow was one of the best decisions we made this year.",
    image: "/nigerian-man-2.jpg",
  },
  {
    id: 4,
    name: "Blessing Eze",
    role: "CEO, Bloom Digital Agency",
    content:
      "From onboarding to daily usage, the experience has been smooth. The insights we get now help us make better business decisions.",
    image: "/nigerian-woman-2.jpg",
  },
  {
    id: 5,
    name: "Tunde Adeyemi",
    role: "CTO, FinEdge Solutions",
    content:
      "Security, performance, and scalability are solid. As a tech lead, I’m confident recommending this platform to any serious business.",
    image: "/nigerian-man-3.jpg",
  },
  {
    id: 6,
    name: "Zainab Musa",
    role: "Marketing Lead, GrowthHub NG",
    content:
      "The analytics are clear and actionable. We finally understand what’s working and what isn’t, without guessing.",
    image: "/nigerian-woman-3.jpg",
  },
]

  const directions = ["top", "left", "right", "center", "bottom"]

  const variants = {
    hidden: (i) => {
      const dir = directions[i % directions.length]
      switch (dir) {
        case 'top':
          return { opacity: 0, y: -48 }
        case 'left':
          return { opacity: 0, x: -48 }
        case 'right':
          return { opacity: 0, x: 48 }
        case 'center':
          return { opacity: 0, scale: 0.92 }
        case 'bottom':
        default:
          return { opacity: 0, y: 48 }
      }
    },
    show: (i) => ({
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: { duration: 0.6 + (i % directions.length) * 0.12, delay: (i % directions.length) * 0.06, ease: 'easeOut' },
    }),
    hide: (i) => ({ opacity: 0, transition: { duration: 0.45, ease: 'easeIn' } }),
  }

  return (
    <div>
      {/* Testimonials Section */}
      <section id="testimonials" className="max-w-6xl mx-auto px-4 py-16 ">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">Loved by thousands of users</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our customers have to say about their experience with our platform.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              custom={index}
              variants={variants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="rounded-2xl p-[2px] bg-gradient-to-r from-[#16EFFF] via-transparent to-[#16EFFF] overflow-hidden min-h-[320px]"
            >
              <Card className="bg-[#0E0C15] rounded-xl h-full">
                <CardContent className="p-6 h-full">
                  {/* Stars */}
                  <Quote className=" text-[#16EFFF]  mb-4" />

                  {/* Quote */}
                  <p className="text-[#16EFFF] mb-6 leading-relaxed">"{testimonial.content}"</p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                 <Image
  src={testimonial.image || "/placeholder.svg"}
  alt={testimonial.name}
  width={48}
  height={48}
  className="w-12 h-12 rounded-full object-cover bg-muted"
/>
                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-sm text-white/70">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Testimonial
