"use client"

import type React from "react"
import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import Footer from "@/components/footer"

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const faqs = [
    {
      id: "item-1",
      question: "What is this platform about?",
      answer:
        "Our platform provides comprehensive solutions for managing your business efficiently. We offer tools for collaboration, analytics, and automation to help you succeed.",
    },
    {
      id: "item-2",
      question: "How do I get started?",
      answer:
        "Getting started is simple. Sign up for an account, complete your profile, and you'll have access to all our features. Our onboarding guide will walk you through everything.",
    },
    {
      id: "item-3",
      question: "What payment options do you accept?",
      answer:
        "We accept all major credit cards, PayPal, and bank transfers. We also offer flexible billing options including monthly and annual subscriptions.",
    },
    {
      id: "item-4",
      question: "Is there a free trial available?",
      answer:
        "Yes! We offer a 14-day free trial with full access to all features. No credit card required to start your trial.",
    },
    {
      id: "item-5",
      question: "How can I contact support?",
      answer:
        "You can reach our support team via email, live chat, or phone. We're available 24/7 to help you with any questions or issues.",
    },
    {
      id: "item-6",
      question: "Can I upgrade or downgrade my plan?",
      answer:
        "You can change your plan at any time. Changes take effect immediately, and we'll adjust your billing accordingly.",
    },
  ]

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

  const handleChange = () => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async () => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to submit form")
      }

      setSubmitted(true)
      setFormData({ name: "", email: "", subject: "", message: "" })
      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      setError("Failed to send message. Please try again.")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-foreground">Brand</h1>
          <div className="flex gap-6">
            <a href="#faq" className="text-foreground hover:text-primary transition">
              FAQ
            </a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition">
              Testimonials
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h2 className="text-5xl font-bold text-foreground mb-6 text-balance">Welcome to Our Platform</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Explore our features, get answers to common questions, and connect with us today.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="#faq">
            <Button>Learn More</Button>
          </a>
          <a href="#contact">
            <Button variant="outline">Get in Touch</Button>
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="max-w-3xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about our platform and services.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id} className="border border-border rounded-lg px-6">
              <AccordionTrigger className="hover:text-primary transition">
                <span className="text-lg font-semibold text-foreground text-left">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-4">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">Loved by thousands of users</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our customers have to say about their experience with our platform.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border border-border">
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

      {/* Contact Section */}
      <section id="contact" className="max-w-2xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">Contact Us</h2>
          <p className="text-lg text-muted-foreground">
            Have a question or want to work with us? We'd love to hear from you. Send us a message and we'll respond as
            soon as possible.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
              Name
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="w-full"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
              className="w-full"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
              Subject
            </label>
            <Input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              placeholder="What is this about?"
              required
              className="w-full"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message here..."
              required
              rows={6}
              className="w-full"
            />
          </div>

          {submitted && (
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
              Thank you! Your message has been sent successfully.
            </div>
          )}

          {error && <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">{error}</div>}

          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </form>

        {/* Contact Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-card border border-border rounded-lg text-center">
            <h3 className="font-semibold text-foreground mb-2">Email</h3>
            <p className="text-muted-foreground">hello@example.com</p>
          </div>
          <div className="p-6 bg-card border border-border rounded-lg text-center">
            <h3 className="font-semibold text-foreground mb-2">Phone</h3>
            <p className="text-muted-foreground">+1 (555) 123-4567</p>
          </div>
          <div className="p-6 bg-card border border-border rounded-lg text-center">
            <h3 className="font-semibold text-foreground mb-2">Address</h3>
            <p className="text-muted-foreground">123 Main St, City, State 12345</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
