'use client'

import Image from 'next/image'
import ServiceCard from "@/components/ServiceCard"

export default function ServicesSection() {
 const services = [
  {
    id: 1,
    title: 'Intelligent Robotics',
    image: 'https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg',
    iconColor: 'glass'
  },
  {
    id: 2,
    title: 'AI-Powered Automation',
    image: 'https://images.pexels.com/photos/5473956/pexels-photo-5473956.jpeg',
    iconColor: 'glass'
  },
  {
    id: 3,
    title: 'Machine Learning Systems',
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg',
    iconColor: 'glass'
  },
  {
    id: 4,
    title: 'Smart Industrial Solutions',
    image: 'https://images.pexels.com/photos/8294606/pexels-photo-8294606.jpeg',
    iconColor: 'glass'
  },
  {
    id: 5,
    title: 'Human–Robot Interaction',
    image: 'https://images.pexels.com/photos/8439094/pexels-photo-8439094.jpeg',
    iconColor: 'cyan'
  }
]


  return (
    <section className="py-16 px-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <p className="text-sm text-cyan-300 mb-4">/ What We Build</p>

        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
          <h2 className="text-6xl lg:text-7xl font-bold leading-tight">
            Intelligent<br />Innovation
          </h2>

          <div className="lg:max-w-md">
            <p className="text-cyan-300 mb-6">
              At SAGEIQ, we design intelligent robotics and AI-driven systems that transform how industries operate, automate, and evolve.
            </p>

            <div className="flex flex-wrap gap-6">
              <a
                href="#"
                className="text-razor-red hover:text-cyan-100 font-medium inline-flex items-center gap-2 group"
              >
                Explore Our Solutions
                <svg
                  className="w-4 h-4 transform transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              <a
                href="#"
                className="text-razor-red hover:text-cyan-100 font-medium inline-flex items-center gap-2 group"
              >
                Talk to Our Team
                <svg
                  className="w-4 h-4 transform transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            image={service.image}
            iconColor={service.iconColor}
          />
        ))}
      </div>
    </section>
  )
}
