"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { Check, CheckCircle, Menu, X, ChevronRight, ArrowRight, ArrowLeft, ArrowUpRight, User, Users, Mail, Phone, MapPin, Globe, Star, Zap, Activity, BarChart, PieChart, Shield, Lock, Unlock, Eye, Search, Home, Settings, FileText, Image as ImageIcon, Play, Pause, Calendar, Clock, CreditCard, DollarSign, ShoppingCart, Tag, Filter, Grid, List, Layout, Box, Layers, Monitor, Smartphone, Briefcase, Award, PenTool, Book, BookOpen, GraduationCap, Lightbulb, Heart, ThumbsUp, Smile, Frown, MessageCircle, Share2 } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle: string;
}

const HeroSection: React.FC<HeroProps> = ({ title, subtitle }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className="relative overflow-hidden bg-gradient-to-br from-purple-900 to-blue-900 text-white py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-500/20 to-orange-500/20 blur-3xl" />
      <div className="absolute inset-0 opacity-5 mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />
      <Image
        src="https://placehold.co/1920x1080/0a0a0a/00FFCC/png?text=Hero"
        alt="Hero background"
        fill
        className="object-cover absolute inset-0 -z-10"
      />
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h1
          className="text-[clamp(3rem,10vw,8rem)] font-bold leading-[0.9] tracking-tight mb-4 bg-gradient-to-r from-purple-400 to-blue-300 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="text-[clamp(1rem,2vw,1.5rem)] max-w-2xl opacity-80"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-8"
        >
          <Link href="/pricing" className="inline-flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 transition-colors duration-300 shadow-md shadow-blue-300/50">
            Get Started <ArrowRight className="ml-2" size={20} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

interface Feature {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

interface FeaturesProps {
  features: Feature[];
}

const FeaturesSection: React.FC<FeaturesProps> = ({ features }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const featureVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[clamp(1.75rem,5vw,3.5rem)] font-bold text-gray-800 text-center mb-12">Our Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300"
              variants={featureVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: index * 0.15 }}
            >
              <div className="h-12 w-12 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center mb-4">
                <feature.icon width={24} height={24} />
              </div>
              <h3 className="text-[clamp(1.25rem,3vw,1.75rem)] font-semibold text-gray-700 mb-2">{feature.title}</h3>
              <p className="text-[clamp(1rem,2vw,1.25rem)] text-gray-500">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface HowItWorksStep {
  title: string;
  description: string;
  image: string;
}

interface HowItWorksProps {
  steps: HowItWorksStep[];
}

const HowItWorksSection: React.FC<HowItWorksProps> = ({ steps }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const stepVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[clamp(1.75rem,5vw,3.5rem)] font-bold text-gray-800 text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row items-center gap-6 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
              variants={stepVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: index * 0.15 }}
            >
              <div className="w-full md:w-1/2 overflow-hidden rounded-2xl">
                <Image
                  src={step.image}
                  alt={step.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-[clamp(1.25rem,3vw,1.75rem)] font-semibold text-gray-700 mb-2">{step.title}</h3>
                <p className="text-[clamp(1rem,2vw,1.25rem)] text-gray-500">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface Testimonial {
  name: string;
  quote: string;
  image: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const TestimonialsSection: React.FC<TestimonialsProps> = ({ testimonials }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const testimonialVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[clamp(1.75rem,5vw,3.5rem)] font-bold text-gray-800 text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300"
              variants={testimonialVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: index * 0.15 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={200}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h4 className="text-[clamp(1rem,2vw,1.5rem)] font-semibold text-gray-700">{testimonial.name}</h4>
              </div>
              <p className="text-[clamp(1rem,2vw,1.25rem)] text-gray-500 italic">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface PricingPlan {
  name: string;
  price: number;
  features: string[];
}

interface PricingProps {
  plans: PricingPlan[];
}

const PricingSection: React.FC<PricingProps> = ({ plans }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const planVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[clamp(1.75rem,5vw,3.5rem)] font-bold text-gray-800 text-center mb-12">Affordable Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300"
              variants={planVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: index * 0.15 }}
            >
              <h3 className="text-[clamp(1.25rem,3vw,1.75rem)] font-semibold text-gray-700 mb-4">{plan.name}</h3>
              <div className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold text-blue-500 mb-4">
                ${plan.price}
              </div>
              <ul className="mb-4">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-[clamp(1rem,2vw,1.25rem)] text-gray-500 mb-2">
                    <CheckCircle className="w-5 h-5 mr-2 text-blue-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 transition-colors duration-300 shadow-md shadow-blue-300/50">
                Choose Plan <ArrowRight className="ml-2" size={20} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqItems: FAQItem[];
}

const FAQSection: React.FC<FAQProps> = ({ faqItems }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const faqVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[clamp(1.75rem,5vw,3.5rem)] font-bold text-gray-800 text-center mb-12">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300"
              variants={faqVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: index * 0.15 }}
            >
              <h3 className="text-[clamp(1.25rem,3vw,1.75rem)] font-semibold text-gray-700 mb-2">{item.question}</h3>
              <p className="text-[clamp(1rem,2vw,1.25rem)] text-gray-500">{item.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Page: React.FC = () => {
  const features = [
    {
      title: "Affordable Prices",
      description: "Get the smile you've always wanted without breaking the bank. Our aligners are the cheapest on the market.",
      icon: DollarSign,
    },
    {
      title: "Convenient Treatment",
      description: "No more monthly visits to the orthodontist. Our aligners are delivered straight to your door.",
      icon: Home,
    },
    {
      title: "Expert Support",
      description: "Our team of experienced orthodontists is here to guide you every step of the way.",
      icon: Users,
    },
  ];

  const howItWorksSteps = [
    {
      title: "Consultation",
      description: "Book a free online consultation with one of our orthodontists.",
      image: "https://placehold.co/600x400/0a0a0a/3D5AFE/png?text=Consultation",
    },
    {
      title: "Impression Kit",
      description: "We'll send you an impression kit to take impressions of your teeth at home.",
      image: "https://placehold.co/600x400/0a0a0a/3D5AFE/png?text=Impression+Kit",
    },
    {
      title: "Aligner Delivery",
      description: "We'll create a custom treatment plan and deliver your aligners to your door.",
      image: "https://placehold.co/600x400/0a0a0a/3D5AFE/png?text=Aligner+Delivery",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      quote: "Tooth Span aligners were a game-changer! I never thought I could afford to straighten my teeth, but they made it possible.",
      image: "https://placehold.co/200x200/0a0a0a/FFFFFF/png?text=Priya",
    },
    {
      name: "Rahul Verma",
      quote: "I was hesitant to try aligners, but the Tooth Span team made the process so easy and convenient. I'm so happy with my new smile!",
      image: "https://placehold.co/200x200/FFFFFF/0a0a0a/png?text=Rahul",
    },
    {
      name: "Anjali Patel",
      quote: "The customer service at Tooth Span is amazing. They were always there to answer my questions and provide support. Highly recommend!",
      image: "https://placehold.co/200x200/0a0a0a/FFFFFF/png?text=Anjali",
    },
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: 999,
      features: [
        "Clear Aligners",
        "Online Consultation",
        "Impression Kit",
      ],
    },
    {
      name: "Premium",
      price: 1499,
      features: [
        "Clear Aligners",
        "Online Consultation",
        "Impression Kit",
        "Refinements Included",
      ],
    },
    {
      name: "VIP",
      price: 1999,
      features: [
        "Clear Aligners",
        "Online Consultation",
        "Impression Kit",
        "Refinements Included",
        "Premium Support",
      ],
    },
  ];

  const faqItems = [
    {
      question: "Are Tooth Span aligners right for me?",
      answer: "Our aligners are suitable for mild to moderate teeth straightening. Book a free consultation to find out if you're a good fit.",
    },
    {
      question: "How long does the treatment take?",
      answer: "Treatment time varies depending on the individual case, but most patients see results in 6-12 months.",
    },
    {
      question: "How much do Tooth Span aligners cost?",
      answer: "Our aligners are the cheapest on the market, starting at just $999. We also offer flexible payment plans.",
    },
  ];

  return (
    <div>
      <HeroSection title="Achieve Your Dream Smile Affordably" subtitle="The cheapest tooth aligners in Bangalore. Get started with a free online consultation today!" />
      <FeaturesSection features={features} />
      <HowItWorksSection steps={howItWorksSteps} />
      <TestimonialsSection testimonials={testimonials} />
      <PricingSection plans={pricingPlans} />
      <FAQSection faqItems={faqItems} />
    </div>
  );
};

export default Page;
