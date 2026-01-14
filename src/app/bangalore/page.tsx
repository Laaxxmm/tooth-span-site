"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { Check, Mail, User, MapPin, Clock, Star, Smile, Users } from "lucide-react";

interface Location {
  name: string;
  address: string;
  hours: string;
  image: string;
}

const locationsData: Location[] = [
  {
    name: "Indiranagar Clinic",
    address: "123, CMH Road, Indiranagar, Bangalore",
    hours: "Mon-Sat: 10 AM - 8 PM",
    image: "https://placehold.co/600x400/3D5AFE/FFFFFF/png?text=Indiranagar+Clinic",
  },
  {
    name: "Jayanagar Clinic",
    address: "456, 4th Block, Jayanagar, Bangalore",
    hours: "Mon-Sat: 10 AM - 8 PM",
    image: "https://placehold.co/600x400/3D5AFE/FFFFFF/png?text=Jayanagar+Clinic",
  },
  {
    name: "Whitefield Clinic",
    address: "789, ITPL Road, Whitefield, Bangalore",
    hours: "Mon-Sat: 10 AM - 8 PM",
    image: "https://placehold.co/600x400/3D5AFE/FFFFFF/png?text=Whitefield+Clinic",
  },
];

interface Doctor {
  name: string;
  specialization: string;
  image: string;
}

const doctorsData: Doctor[] = [
  {
    name: "Dr. Smith",
    specialization: "Orthodontist",
    image: "https://placehold.co/200x200/0a0a0a/FFFFFF/png?text=Dr.+Smith",
  },
  {
    name: "Dr. Jones",
    specialization: "General Dentist",
    image: "https://placehold.co/200x200/0a0a0a/FFFFFF/png?text=Dr.+Jones",
  },
];

interface Testimonial {
  name: string;
  text: string;
  image: string;
}

const testimonialsData: Testimonial[] = [
  {
    name: "Priya Sharma",
    text: "Tooth Span aligners were a game-changer! My smile looks amazing, and the process was so convenient.",
    image: "https://placehold.co/50x50/0a0a0a/FFFFFF/png?text=Priya",
  },
  {
    name: "Rahul Verma",
    text: "I highly recommend Tooth Span. The aligners are affordable and effective. The team is very supportive.",
    image: "https://placehold.co/50x50/0a0a0a/FFFFFF/png?text=Rahul",
  },
];

const HeroSection = () => {
  return (
    <section className="relative py-24 md:py-32 min-h-[calc(100vh-80px)] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://placehold.co/1920x1080/0a0a0a/00FFCC/png?text=Bangalore+Locations"
          alt="Hero background"
          fill
          className="object-cover saturate-50"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="container relative z-10 text-white">
        <h1 className="text-[clamp(2.5rem,8vw,6rem)] font-bold leading-[0.9] tracking-tight mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
          Bangalore Locations
        </h1>
        <p className="text-[clamp(1rem,2vw,1.25rem)] mb-8">
          Find a Tooth Span clinic near you in Bangalore and start your journey to a confident smile.
        </p>
      </div>
    </section>
  );
};

interface LocationMapProps {
  locations: Location[];
}

const LocationMap: React.FC<LocationMapProps> = ({ locations }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <h2 className="text-[clamp(1.75rem,5vw,3.5rem)] font-bold text-center mb-12">
          Our Locations in Bangalore
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={ref}>
          {locations.map((location, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-6"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(30px)",
                transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) " + (index * 0.2) + "s",
              }}
            >
              <Image
                src={location.image}
                alt={location.name}
                width={600}
                height={400}
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{location.name}</h3>
              <p className="text-gray-300 mb-2">
                <MapPin className="inline-block mr-1" size={16} />
                {location.address}
              </p>
              <p className="text-gray-300">
                <Clock className="inline-block mr-1" size={16} />
                {location.hours}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface ClinicHoursProps {
  locations: Location[];
}

const ClinicHours: React.FC<ClinicHoursProps> = ({ locations }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-24 md:py-32 bg-gray-900">
      <div className="container">
        <h2 className="text-[clamp(1.75rem,5vw,3.5rem)] font-bold text-center text-white mb-12">
          Clinic Hours
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={ref}>
          {locations.map((location, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-6"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(30px)",
                transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) " + (index * 0.2) + "s",
              }}
            >
              <h3 className="text-xl font-semibold mb-2 text-white">{location.name}</h3>
              <p className="text-gray-300">
                <Clock className="inline-block mr-1" size={16} />
                {location.hours}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface MeetTheDoctorsProps {
  doctors: Doctor[];
}

const MeetTheDoctors: React.FC<MeetTheDoctorsProps> = ({ doctors }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <h2 className="text-[clamp(1.75rem,5vw,3.5rem)] font-bold text-center mb-12">
          Meet Our Doctors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={ref}>
          {doctors.map((doctor, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-6 text-center"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(30px)",
                transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) " + (index * 0.2) + "s",
              }}
            >
              <Image
                src={doctor.image}
                alt={doctor.name}
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
              <p className="text-gray-300">{doctor.specialization}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-24 md:py-32 bg-gray-900">
      <div className="container">
        <h2 className="text-[clamp(1.75rem,5vw,3.5rem)] font-bold text-center text-white mb-12">
          What Our Patients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" ref={ref}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-6"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(30px)",
                transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) " + (index * 0.2) + "s",
              }}
            >
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <h3 className="text-xl font-semibold text-white">{testimonial.name}</h3>
              </div>
              <p className="text-gray-300">{testimonial.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Page = () => {
  return (
    <main className="bg-gray-950 text-white">
      <HeroSection />
      <LocationMap locations={locationsData} />
      <ClinicHours locations={locationsData} />
      <MeetTheDoctors doctors={doctorsData} />
      <Testimonials testimonials={testimonialsData} />
    </main>
  );
};

export default Page;