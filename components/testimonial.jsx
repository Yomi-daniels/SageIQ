import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
const Testimonial = () => {
    const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO at TechCorp",
      content:
        "This platform has transformed how we manage our operations. The intuitive interface and powerful features have saved us countless hours.",
      image: "/professional-woman.png",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Product Manager at StartupXYZ",
      content:
        "Outstanding support and continuous improvements. The team really listens to feedback and implements features that matter.",
      image: "/professional-man.png",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Founder of Creative Agency",
      content:
        "The best investment we made for our business. ROI was immediate and the scalability is exactly what we needed.",
      image: "/professional-woman-2.png",
    },
    {
      id: 4,
      name: "David Park",
      role: "Operations Director",
      content:
        "Seamless integration with our existing tools. The automation features alone have reduced our workload by 40%.",
      image: "/professional-man-2.png",
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Marketing Lead at GrowthCo",
      content: "Exceptional analytics and reporting. We now have real-time insights that drive better decision-making.",
      image: "/professional-woman-3.png",
    },
    {
      id: 6,
      name: "James Wilson",
      role: "CTO at InnovateTech",
      content:
        "The technical excellence is evident in every aspect. Security, performance, and reliability are top-notch.",
      image: "/professional-man-3.jpg",
    },
  ]
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
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className=" bg-cyan-600">
              <CardContent className="p-6">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full bg-muted"
                  />
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Testimonial
