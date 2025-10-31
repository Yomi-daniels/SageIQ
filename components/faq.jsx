import React from 'react'
import { Accordion } from './ui/accordion'
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
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

const faq = () => {
  return (
    <div>
      {/* FAQ Section */}
      <section id="faq" className="max-w-3xl mx-auto px-4 py-16 ">
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
    </div>
  )
}

export default faq
