"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Smile, Frown, CheckCircle, User } from "lucide-react";
import Image from "next/image";

interface ContactFormProps {}

const ContactForm: React.FC<ContactFormProps> = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted", { name, email, message });
    if (formRef.current) {
      formRef.current.reset();
    }
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
      className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-6 md:p-12"
    >
      <h3 className="text-2xl font-semibold text-white mb-4">Send us a message</h3>
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-300 text-sm font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-800 border-gray-700 text-white"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-800 border-gray-700 text-white"
            placeholder="Your Email"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-300 text-sm font-bold mb-2">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-800 border-gray-700 text-white"
            placeholder="Your Message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white"
        >
          Send Message
        </button>
      </form>
    </motion.div>
  );
};

interface ContactInfoProps {}

const ContactInfo: React.FC<ContactInfoProps> = () => {
  const infoRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(infoRef, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={infoRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }}
      className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-6 md:p-12"
    >
      <h3 className="text-2xl font-semibold text-white mb-4">Contact Information</h3>
      <div className="space-y-4">
        <div className="flex items-center space-x-2 text-gray-300">
          <Mail className="h-5 w-5 text-blue-400" />
          <span>info@toothspan.com</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-300">
          <Phone className="h-5 w-5 text-blue-400" />
          <span>+91 9876543210</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-300">
          <MapPin className="h-5 w-5 text-blue-400" />
          <span>123 Tooth Street, Bangalore, India</span>
        </div>
      </div>
    </motion.div>
  );
};

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left text-gray-300"
      >
        <span className="font-medium">{question}</span>
        <svg
          className={`w-4 h-4 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="mt-2 text-gray-400"
        >
          {answer}
        </motion.div>
      )}
    </div>
  );
};

interface FAQSectionProps {}

const FAQSection: React.FC<FAQSectionProps> = () => {
  const faqRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(faqRef, { once: true, amount: 0.3 });

  const faqs = [
    {
      question: "What are clear aligners?",
      answer:
        "Clear aligners are a discreet alternative to traditional braces, designed to gradually straighten your teeth without the use of metal wires or brackets."
    },
    {
      question: "How much do Tooth Span aligners cost?",
      answer:
        "Tooth Span offers the most affordable aligner treatment in the market. Contact us for a personalized quote based on your specific needs."
    },
    {
      question: "How long does the treatment take?",
      answer:
        "Treatment duration varies depending on the complexity of your case, but most patients achieve their desired results within 6-12 months."
    },
    {
      question: "Are clear aligners suitable for everyone?",
      answer:
        "Clear aligners are effective for a wide range of orthodontic issues. A consultation with our dental professionals will determine if they are the right fit for you."
    }
  ];

  return (
    <motion.div
      ref={faqRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.6, 0.05, -0.01, 0.9] }}
      className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-6 md:p-12"
    >
      <h3 className="text-2xl font-semibold text-white mb-4">Frequently Asked Questions</h3>
      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </motion.div>
  );
};

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <div className="relative overflow-hidden min-h-[60vh] md:min-h-[75vh] lg:min-h-[90vh]">
      <Image
        src="https://placehold.co/1920x1080/0a0a0a/00E5FF/png?text=Contact+Hero"
        alt="Contact hero background"
        fill
        className="object-cover absolute z-0"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-500/20 to-orange-500/20 blur-3xl" />
      <div className="absolute inset-0 opacity-5 mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-[60vh] md:min-h-[75vh] lg:min-h-[90vh] text-center">
        <div>
          <h1 className="text-[clamp(3rem,10vw,8rem)] font-bold text-white leading-[0.9] mb-4">
            Contact <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Tooth Span</span>
          </h1>
          <p className="text-gray-300 text-[clamp(1rem,2vw,1.25rem)]">
            We're here to help. Reach out with any questions or inquiries.
          </p>
        </div>
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen py-24 md:py-32 relative">
      <Hero />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(61,90,254,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(61,90,254,0.03)_1px,transparent_1px)] bg-[length:60px_60px]" />
      <section className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        <ContactForm />
        <ContactInfo />
      </section>
      <section className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <FAQSection />
      </section>
    </div>
  );
};

export default Page;