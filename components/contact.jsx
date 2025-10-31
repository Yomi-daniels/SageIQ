import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import RadialGlow from './RadialGlow'
const Contact = () => {

      const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

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
    <div>
        {/* Contact Section */}
      <section id="contact" className="max-w-2xl mx-auto px-4 py-16 ">
        <div className="text-center mb-12 ">
          <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">Contact Us</h2>
          <p className="text-lg text-muted-foreground">
            Have a question or want to work with us? We'd love to hear from you. Send us a message and we'll respond as
            soon as possible.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-cyan-600 p-[3rem] rounded-md">
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
        {/* <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 bg-cyan-500 opacity-70 p-[1.3rem] rounded-lg">
          <div className="p-6 bg-card border border-border rounded-lg text-center">
            <h3 className="font-semibold text-black mb-2">Email</h3>
            <p className="text-black">hello@example.com</p>
          </div>
          <div className="p-6 bg-card border border-border rounded-lg text-center">
            <h3 className="font-semibold text-black mb-2">Phone</h3>
            <p className="text-black">+1 (555) 123-4567</p>
          </div>
          <div className="p-6 bg-card border border-border rounded-lg text-center">
            <h3 className="font-semibold text-black mb-2">Address</h3>
            <p className="text-black">123 Main St, City, State 12345</p>
          </div>
        </div> */}
      </section>
    </div>
  )
}

export default Contact
