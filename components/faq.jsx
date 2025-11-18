"use client"

import React, { useRef, useEffect } from 'react'
import { Accordion } from './ui/accordion'
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion, useInView, useAnimation } from 'framer-motion'
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
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { amount: 0.35 });
  const controls = useAnimation();

  useEffect(() => {
    controls.start(inView ? "show" : "hide");
  }, [inView, controls]);

  const accordionVariants = {
    hidden: (i) => ({ opacity: 0, y: 36 }),
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 + i * 0.1, delay: i * 0.06, ease: "easeOut" },
    }),
    hide: (i) => ({ opacity: 0, y: 28, transition: { duration: Math.max(0.35, 0.4 + i * 0.05), ease: "easeIn" } }),
  };

  return (
    <div ref={sectionRef} className="w-full">
      {/* FAQ Section */}
      <section id="faq" className="max-w-3xl mx-auto px-4 py-16 w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about our platform and services.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              custom={index}
              variants={accordionVariants}
              initial="hidden"
              animate={controls}
              className="w-full"
            >
              <AccordionItem value={faq.id} className="border border-[#00D2FF] rounded-lg px-6">
              <AccordionTrigger className="hover:text-white transition">
                <span className="text-lg font-semibold text-foreground text-left">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-4">{faq.answer}</AccordionContent>
            </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </section>
    </div>
  )
}

export default faq
