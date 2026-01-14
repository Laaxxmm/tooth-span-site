"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { CheckCircle, ArrowRight, User, ScanFace, Calendar, Truck, Activity } from "lucide-react";

interface ProcessItemProps {
  title: string;
  description: string;
  imageSrc: string;
  stepNumber: number;
}

const ProcessItem: React.FC<ProcessItemProps> = ({ title, description, imageSrc, stepNumber }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-8"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute top-2 left-2 text-sm font-bold text-white bg-purple-600 rounded-full px-2 py-1">{stepNumber}</div>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-white mb-2 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
};

interface HeroProps {
  title: string;
  subtitle: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle }) => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-500/20 to-orange-500/20 blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(61,90,254,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(61,90,254,0.03)_1px,transparent_1px)] bg-[length:60px_60px]" />
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h1 className="text-[clamp(3rem,10vw,8rem)] font-bold text-white leading-[0.9] mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">{subtitle}</p>
      </div>
    </section>
  );
};

interface ProcessSectionProps {}

const ProcessSection: React.FC<ProcessSectionProps> = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[clamp(1.75rem,5vw,3.5rem)] font-semibold text-white mb-12 text-center">
          Our Simple Process
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ProcessItem
            title="Consultation"
            description="Schedule a free consultation with our dental experts to assess your suitability for aligner treatment."
            imageSrc="https://placehold.co/400x400/0a0a0a/FFFFFF/png?text=Consultation"
            stepNumber={1}
          />
          <ProcessItem
            title="3D Scanning"
            description="Get a precise 3D scan of your teeth using our advanced technology, eliminating the need for messy impressions."
            imageSrc="https://placehold.co/400x400/0a0a0a/FFFFFF/png?text=3D+Scan"
            stepNumber={2}
          />
          <ProcessItem
            title="Treatment Plan"
            description="Receive a personalized treatment plan outlining the expected duration, aligner stages, and final results."
            imageSrc="https://placehold.co/400x400/0a0a0a/FFFFFF/png?text=Treatment+Plan"
            stepNumber={3}
          />
          <ProcessItem
            title="Aligner Delivery"
            description="Your custom-made aligners are delivered to your doorstep, ready to start your teeth straightening journey."
            imageSrc="https://placehold.co/400x400/0a0a0a/FFFFFF/png?text=Aligner+Delivery"
            stepNumber={4}
          />
          <ProcessItem
            title="Progress Tracking"
            description="Track your progress with regular check-ins and virtual consultations to ensure optimal results."
            imageSrc="https://placehold.co/400x400/0a0a0a/FFFFFF/png?text=Progress+Tracking"
            stepNumber={5}
          />
        </div>
      </div>
    </section>
  );
};

const Page: React.FC = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Hero
        title="The Clear Aligner Process, Simplified"
        subtitle="Straighten your teeth with our affordable and convenient clear aligner treatment."
      />
      <ProcessSection />
    </div>
  );
};

export default Page;