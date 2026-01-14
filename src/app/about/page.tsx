"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { Check, Mail, User, Users, Phone, MapPin, Award, Lightbulb, Heart, Smile, Briefcase, BookOpen, GraduationCap } from "lucide-react";

interface OurStoryProps { }

const OurStory: React.FC<OurStoryProps> = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="py-24 md:py-32 container"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-[clamp(1.75rem,5vw,3.5rem)] font-bold leading-tight mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
            Our Story: Empowering Smiles, One Aligner at a Time
          </h2>
          <p className="text-[clamp(1rem,2vw,1.25rem)] text-gray-400 mb-8">
            Tooth Span was born from a simple yet powerful idea: to make quality orthodontic care accessible and affordable for everyone. Frustrated by the high costs and inconvenience of traditional braces, our founders, a team of dental professionals and tech innovators, set out to create a better solution.
          </p>
          <p className="text-[clamp(1rem,2vw,1.25rem)] text-gray-400 mb-8">
            We leverage cutting-edge technology and a streamlined process to deliver custom-made clear aligners at a fraction of the cost of traditional treatments. Our mission is to empower individuals to achieve their dream smiles, boosting their confidence and improving their overall well-being.
          </p>
          <p className="text-[clamp(1rem,2vw,1.25rem)] text-gray-400">
            From our humble beginnings to becoming a leading provider of clear aligners in Bangalore, we remain committed to our core values: affordability, quality, and customer satisfaction.
          </p>
        </div>
        <div className="overflow-hidden rounded-2xl shadow-xl shadow-gray-300">
          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.6 }}>
            <Image
              src="https://placehold.co/600x400/0a0a0a/3D5AFE/png?text=Our+Story"
              alt="Our Story"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

interface OurMissionProps { }

const OurMission: React.FC<OurMissionProps> = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="py-24 md:py-32 container"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1 overflow-hidden rounded-2xl shadow-xl shadow-gray-300">
          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.6 }}>
            <Image
              src="https://placehold.co/600x400/0a0a0a/00E5FF/png?text=Our+Mission"
              alt="Our Mission"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </motion.div>
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="text-[clamp(1.75rem,5vw,3.5rem)] font-bold leading-tight mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
            Our Mission: Transforming Lives Through Confident Smiles
          </h2>
          <p className="text-[clamp(1rem,2vw,1.25rem)] text-gray-400 mb-8">
            At Tooth Span, our mission is to empower individuals to achieve the confident smiles they deserve, without breaking the bank. We are dedicated to providing the cheapest tooth aligners in Bangalore, without compromising on quality or care.
          </p>
          <ul className="list-disc pl-5 text-[clamp(1rem,2vw,1.25rem)] text-gray-400">
            <li>Affordable: Making orthodontic treatment accessible to all.</li>
            <li>Convenient: Streamlining the process for a hassle-free experience.</li>
            <li>Effective: Delivering results with custom-designed clear aligners.</li>
            <li>Personalized: Providing expert care with a human touch.</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

interface TeamMemberProps {
  name: string;
  title: string;
  imageUrl: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, title, imageUrl }) => {
  return (
    <div className="text-center">
      <div className="overflow-hidden rounded-full w-40 h-40 mx-auto mb-4 shadow-xl shadow-gray-300">
        <Image
          src={imageUrl}
          alt={name}
          width={200}
          height={200}
          className="object-cover w-full h-full"
        />
      </div>
      <h3 className="text-lg font-semibold text-white">{name}</h3>
      <p className="text-sm text-gray-400">{title}</p>
    </div>
  );
};

interface MeetTheTeamProps { }

const MeetTheTeam: React.FC<MeetTheTeamProps> = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const teamMembers = [
    { name: "Dr. Anika Sharma", title: "Chief Orthodontist", imageUrl: "https://placehold.co/200x200/0a0a0a/FFFFFF/png?text=Anika+Sharma" },
    { name: "Rajesh Kumar", title: "Technology Lead", imageUrl: "https://placehold.co/200x200/0a0a0a/FFFFFF/png?text=Rajesh+Kumar" },
    { name: "Priya Patel", title: "Customer Success Manager", imageUrl: "https://placehold.co/200x200/0a0a0a/FFFFFF/png?text=Priya+Patel" },
  ];

  return (
    <motion.div
      ref={ref}
      className="py-24 md:py-32 container"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <h2 className="text-[clamp(1.75rem,5vw,3.5rem)] font-bold leading-tight mb-12 text-center bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
        Meet the Team: Experts Dedicated to Your Smile
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </motion.div>
  );
};

interface ValuesProps { }

const Values: React.FC<ValuesProps> = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="py-24 md:py-32 container"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <h2 className="text-[clamp(1.75rem,5vw,3.5rem)] font-bold leading-tight mb-12 text-center bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
        Our Values: Guiding Principles for a Brighter Future
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="mx-auto mb-4">
            <Lightbulb className="w-12 h-12 text-yellow-400 mx-auto" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Innovation</h3>
          <p className="text-sm text-gray-400">We constantly seek new and better ways to improve our products and services.</p>
        </div>
        <div className="text-center">
          <div className="mx-auto mb-4">
            <Heart className="w-12 h-12 text-red-400 mx-auto" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Empathy</h3>
          <p className="text-sm text-gray-400">We understand and care about our customers' needs and concerns.</p>
        </div>
        <div className="text-center">
          <div className="mx-auto mb-4">
            <Smile className="w-12 h-12 text-green-400 mx-auto" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Excellence</h3>
          <p className="text-sm text-gray-400">We strive for the highest standards in everything we do.</p>
        </div>
      </div>
    </motion.div>
  );
};

interface CertificationsProps { }

const Certifications: React.FC<CertificationsProps> = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="py-24 md:py-32 container"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <h2 className="text-[clamp(1.75rem,5vw,3.5rem)] font-bold leading-tight mb-12 text-center bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
        Certifications: Ensuring Quality and Trust
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-6 text-center">
          <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-white mb-2">ISO 9001:2015</h3>
          <p className="text-sm text-gray-400">Quality Management System</p>
        </div>
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-6 text-center">
          <Briefcase className="w-12 h-12 text-blue-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-white mb-2">Dental Board Certified</h3>
          <p className="text-sm text-gray-400">Certified Dental Professionals</p>
        </div>
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-6 text-center">
          <GraduationCap className="w-12 h-12 text-purple-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-white mb-2">Continuing Education</h3>
          <p className="text-sm text-gray-400">Ongoing training for the latest techniques</p>
        </div>
      </div>
    </motion.div>
  );
};

interface HeroProps { }

const Hero: React.FC<HeroProps> = () => {
  return (
    <div className="relative h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden">
      <Image
        src="https://placehold.co/1920x1080/0a0a0a/00FFCC/png?text=About+Us+Hero"
        alt="Hero background"
        fill
        className="object-cover absolute z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-500/20 to-orange-500/20 blur-3xl" />
      <div className="container relative z-10 text-center">
        <h1 className="text-[clamp(2.5rem,8vw,6rem)] font-bold leading-tight mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
          About Tooth Span: Your Path to a Perfect Smile
        </h1>
        <p className="text-[clamp(1rem,2vw,1.25rem)] text-gray-300 mb-8">
          Discover our mission, values, and the team behind the most affordable tooth aligners in Bangalore.
        </p>
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <div className="bg-zinc-900 text-white min-h-screen">
      <Hero />
      <OurStory />
      <OurMission />
      <MeetTheTeam />
      <Values />
      <Certifications />
    </div>
  );
};

export default Page;