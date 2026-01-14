"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { Check, Mail, User, CreditCard, Tag, Shield, ArrowRight, Percent, Calculator, FileText, Info, Wallet } from "lucide-react";

interface PackageProps {
  name: string;
  price: number;
  duration: string;
  features: string[];
  isPopular?: boolean;
}

const Package: React.FC<PackageProps> = ({ name, price, duration, features, isPopular = false }) => {
  const packageRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(packageRef, { once: true, amount: 0.2 });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
  };

  return (
    <motion.div
      ref={packageRef}
      className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-6 md:p-8 relative"
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {isPopular && (
        <div className="absolute top-0 right-0 bg-green-500 text-white text-sm px-3 py-1 rounded-bl-3xl rounded-tr-3xl">
          Popular
        </div>
      )}
      <h3 className="text-2xl font-semibold text-white mb-4">{name}</h3>
      <div className="text-gray-300 mb-4">
        <span className="text-4xl font-bold text-white">${price}</span> / {duration}
      </div>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <Check className="w-4 h-4 mr-2 text-green-500" />
            {feature}
          </li>
        ))}
      </ul>
      <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-300 w-full">
        Get Started
      </button>
    </motion.div>
  );
};

interface PackagesSectionProps {
  packages: PackageProps[];
}

const PackagesSection: React.FC<PackagesSectionProps> = ({ packages }) => {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[clamp(1.75rem,5vw,3.5rem)] font-bold text-white mb-12 text-center">
          Our Clear Aligner Packages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Package key={index} {...pkg} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface FinancingOptionProps {
  title: string;
  description: string;
  icon: React.FC;
}

const FinancingOption: React.FC<FinancingOptionProps> = ({ title, description, icon: Icon }) => {
  const optionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(optionRef, { once: true, amount: 0.2 });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
  };

  return (
    <motion.div
      ref={optionRef}
      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-lg p-6 md:p-8 flex flex-col items-center text-center"
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="w-16 h-16 rounded-full bg-purple-700/20 flex items-center justify-center mb-4">
        <div className="w-8 h-8 text-white">
         <Icon />
        </div>
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
};

const FinancingOptionsSection: React.FC = () => {
  const options = [
    { title: "Easy Monthly Installments", description: "Spread the cost of your treatment with our flexible monthly payment plans.", icon: CreditCard },
    { title: "Affordable Loans", description: "We partner with leading lenders to offer competitive loan options.", icon: Calculator },
    { title: "In-House Financing", description: "Enjoy direct financing options with manageable payment schedules.", icon: Wallet },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[clamp(1.75rem,5vw,3.5rem)] font-bold text-white mb-12 text-center">
          Flexible Financing Options
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {options.map((option, index) => (
            <FinancingOption key={index} {...option} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface DiscountProps {
  title: string;
  description: string;
  code: string;
}

const DiscountCard: React.FC<DiscountProps> = ({ title, description, code }) => {
  const discountRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(discountRef, { once: true, amount: 0.2 });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
  };

  return (
    <motion.div
      ref={discountRef}
      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-lg p-6 md:p-8 flex flex-col"
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="bg-gray-800 rounded-xl py-2 px-4 text-white font-mono text-sm flex items-center justify-between">
        <span>{code}</span>
        <button className="bg-purple-600 hover:bg-purple-500 py-1 px-3 rounded-md text-xs">Copy</button>
      </div>
    </motion.div>
  );
};

const DiscountsSection: React.FC = () => {
  const discounts = [
    { title: "New Customer Discount", description: "Get 10% off your first aligner treatment.", code: "NEW10" },
    { title: "Referral Bonus", description: "Refer a friend and you both get $50 off.", code: "REFER50" },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[clamp(1.75rem,5vw,3.5rem)] font-bold text-white mb-12 text-center">
          Exclusive Discounts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {discounts.map((discount, index) => (
            <DiscountCard key={index} {...discount} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface InsuranceInfoProps {
  title: string;
  description: string;
  listItems: string[];
}

const InsuranceInfo: React.FC<InsuranceInfoProps> = ({ title, description, listItems }) => {
  const insuranceRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(insuranceRef, { once: true, amount: 0.2 });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
  };

  return (
    <motion.div
      ref={insuranceRef}
      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-lg p-6 md:p-8"
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <ul className="list-disc list-inside text-gray-300">
        {listItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </motion.div>
  );
};

const InsuranceSection: React.FC = () => {
  const insuranceInfo = {
    title: "Insurance Coverage",
    description: "We accept most major dental insurance plans. Check if your insurance covers clear aligner treatment.",
    listItems: [
      "Verify your insurance benefits online",
      "Submit your insurance information during consultation",
      "Our team will assist with claims processing",
    ],
  };

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[clamp(1.75rem,5vw,3.5rem)] font-bold text-white mb-12 text-center">
          Understanding Insurance
        </h2>
        <InsuranceInfo {...insuranceInfo} />
      </div>
    </section>
  );
};

interface PaymentPlanProps {
  title: string;
  description: string;
  features: string[];
}

const PaymentPlanCard: React.FC<PaymentPlanProps> = ({ title, description, features }) => {
  const planRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(planRef, { once: true, amount: 0.2 });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
  };

  return (
    <motion.div
      ref={planRef}
      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-lg p-6 md:p-8"
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <ul className="list-disc list-inside text-gray-300">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </motion.div>
  );
};

const PaymentPlansSection: React.FC = () => {
  const paymentPlans = [
    {
      title: "Standard Plan",
      description: "Pay upfront and enjoy the full benefits of our clear aligner treatment.",
      features: ["One-time payment", "Includes all aligners", "Free consultation"],
    },
    {
      title: "Monthly Plan",
      description: "Spread the cost over several months with our convenient monthly payment plan.",
      features: ["Fixed monthly payments", "Interest-free options", "Easy to manage"],
    },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[clamp(1.75rem,5vw,3.5rem)] font-bold text-white mb-12 text-center">
          Simple Payment Plans
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {paymentPlans.map((plan, index) => (
            <PaymentPlanCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[calc(70vh-80px)] md:h-[calc(80vh-80px)] lg:h-[calc(90vh-80px)] flex items-center justify-center overflow-hidden">
      <Image
        src="https://placehold.co/1920x1080/0a0a0a/00FFCC/png?text=ToothSpan+Pricing+Hero"
        alt="Hero background"
        fill
        className="object-cover absolute inset-0 -z-10"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-500/20 to-orange-500/20 blur-3xl -z-10" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-[clamp(3rem,10vw,8rem)] font-bold text-white leading-[0.9] mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
          Clear Pricing, Confident Smiles
        </h1>
        <p className="text-[clamp(1rem,2vw,1.25rem)] text-gray-300 mb-8">
          Get the smile you've always wanted with our affordable and transparent pricing options.
        </p>
        <Link href="/book-consultation" className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-400 hover:to-teal-400 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-300 shadow-md shadow-blue-500/30">
          Book a Free Consultation
        </Link>
      </div>
    </section>
  );
};

const Page: React.FC = () => {
  const packagesData = [
    {
      name: "Lite Package",
      price: 1899,
      duration: "6-9 months",
      features: [
        "Mild to moderate corrections",
        "Includes refinement aligners",
        "Virtual check-ins",
      ],
    },
    {
      name: "Pro Package",
      price: 2499,
      duration: "9-12 months",
      features: [
        "Comprehensive corrections",
        "Includes refinement aligners",
        "Virtual & in-office check-ins",
        "Free teeth whitening",
      ],
      isPopular: true,
    },
    {
      name: "Premium Package",
      price: 2999,
      duration: "12+ months",
      features: [
        "Complex corrections",
        "Includes refinement aligners",
        "Unlimited check-ins",
        "Premium whitening kit",
        "Retainers included",
      ],
    },
  ];

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <HeroSection />
      <PackagesSection packages={packagesData} />
      <FinancingOptionsSection />
      <InsuranceSection />
      <PaymentPlansSection />
      <DiscountsSection />
    </div>
  );
};

export default Page;
