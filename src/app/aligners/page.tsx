"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { Check, CheckCircle, Menu, X, ChevronRight, ArrowRight, ArrowLeft, ArrowUpRight, User, Users, Mail, Phone, MapPin, Globe, Star, Zap, Activity, BarChart, PieChart, Shield, Lock, Unlock, Eye, Search, Home, Settings, FileText, Image as ImageIcon, Play, Pause, Calendar, Clock, CreditCard, DollarSign, ShoppingCart, Tag, Filter, Grid, List, Layout, Box, Layers, Monitor, Smartphone, Briefcase, Award, PenTool, Book, BookOpen, GraduationCap, Lightbulb, Heart, ThumbsUp, Smile, Frown, MessageCircle, Share2 } from "lucide-react";

interface ProductOverviewProps { }

const ProductOverview: React.FC<ProductOverviewProps> = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <motion.section
            ref={ref}
            className="py-24 md:py-32 bg-white"
            variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
            }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    className="text-[clamp(1.75rem,5vw,3.5rem)] font-bold text-gray-900 mb-8"
                    variants={{
                        hidden: { y: 30, opacity: 0 },
                        visible: { y: 0, opacity: 1 },
                    }}
                >
                    Our Clear Aligners: A Seamless Path to Your Dream Smile
                </motion.h2>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <motion.div
                        variants={{
                            hidden: { x: -50, opacity: 0 },
                            visible: { x: 0, opacity: 1 },
                        }}
                    >
                        <Image
                            src="https://placehold.co/600x400/FFFFFF/000000/png?text=Aligner+Image"
                            alt="Clear Aligner"
                            width={600}
                            height={400}
                            className="rounded-2xl shadow-xl"
                        />
                    </motion.div>
                    <motion.div
                        variants={{
                            hidden: { y: 30, opacity: 0 },
                            visible: { y: 0, opacity: 1 },
                        }}
                    >
                        <p className="text-[clamp(1rem,2vw,1.25rem)] text-gray-700 leading-relaxed">
                            Our clear aligners are custom-made from BPA-free, medical-grade plastic, ensuring a comfortable and discreet fit. They gently shift your teeth into the desired position, offering a nearly invisible alternative to traditional braces.
                        </p>
                        <ul className="mt-4 space-y-2">
                            <li className="flex items-center">
                                <CheckCircle className="text-green-500 mr-2" size={20} />
                                <span className="text-[clamp(0.875rem,1.5vw,1rem)] text-gray-700">
                                    Virtually invisible
                                </span>
                            </li>
                            <li className="flex items-center">
                                <CheckCircle className="text-green-500 mr-2" size={20} />
                                <span className="text-[clamp(0.875rem,1.5vw,1rem)] text-gray-700">
                                    Comfortable and custom-fit
                                </span>
                            </li>
                            <li className="flex items-center">
                                <CheckCircle className="text-green-500 mr-2" size={20} />
                                <span className="text-[clamp(0.875rem,1.5vw,1rem)] text-gray-700">
                                    Removable for eating and cleaning
                                </span>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

interface BenefitsProps { }

const Benefits: React.FC<BenefitsProps> = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <motion.section
            ref={ref}
            className="py-24 md:py-32 bg-gray-50"
            variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
            }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    className="text-[clamp(1.75rem,5vw,3.5rem)] font-bold text-gray-900 mb-8 text-center"
                    variants={{
                        hidden: { y: 30, opacity: 0 },
                        visible: { y: 0, opacity: 1 },
                    }}
                >
                    The Benefits of Choosing Our Aligners
                </motion.h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <motion.div
                        className="bg-white rounded-2xl shadow-xl p-6"
                        variants={{
                            hidden: { y: 50, opacity: 0 },
                            visible: { y: 0, opacity: 1 },
                        }}
                    >
                        <Zap className="text-purple-600 mb-4" size={48} />
                        <h3 className="text-[clamp(1.25rem,3vw,1.75rem)] font-semibold text-gray-900 mb-2">
                            Faster Treatment Times
                        </h3>
                        <p className="text-[clamp(0.875rem,1.5vw,1rem)] text-gray-700">
                            Achieve your desired smile in a fraction of the time compared to traditional braces.
                        </p>
                    </motion.div>
                    <motion.div
                        className="bg-white rounded-2xl shadow-xl p-6"
                        variants={{
                            hidden: { y: 50, opacity: 0 },
                            visible: { y: 0, opacity: 1 },
                        }}
                    >
                        <Smile className="text-green-600 mb-4" size={48} />
                        <h3 className="text-[clamp(1.25rem,3vw,1.75rem)] font-semibold text-gray-900 mb-2">
                            Improved Confidence
                        </h3>
                        <p className="text-[clamp(0.875rem,1.5vw,1rem)] text-gray-700">
                            Straighten your teeth discreetly and boost your self-esteem.
                        </p>
                    </motion.div>
                    <motion.div
                        className="bg-white rounded-2xl shadow-xl p-6"
                        variants={{
                            hidden: { y: 50, opacity: 0 },
                            visible: { y: 0, opacity: 1 },
                        }}
                    >
                        <CreditCard className="text-blue-600 mb-4" size={48} />
                        <h3 className="text-[clamp(1.25rem,3vw,1.75rem)] font-semibold text-gray-900 mb-2">
                            Affordable Solution
                        </h3>
                        <p className="text-[clamp(0.875rem,1.5vw,1rem)] text-gray-700">
                            Enjoy a cost-effective alternative to traditional orthodontic treatments.
                        </p>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

interface MaterialsProps { }

const Materials: React.FC<MaterialsProps> = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <motion.section
            ref={ref}
            className="py-24 md:py-32 bg-white"
            variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
            }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    className="text-[clamp(1.75rem,5vw,3.5rem)] font-bold text-gray-900 mb-8"
                    variants={{
                        hidden: { y: 30, opacity: 0 },
                        visible: { y: 0, opacity: 1 },
                    }}
                >
                    Premium Materials for Optimal Comfort and Safety
                </motion.h2>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <motion.div
                        variants={{
                            hidden: { y: 30, opacity: 0 },
                            visible: { y: 0, opacity: 1 },
                        }}
                    >
                        <p className="text-[clamp(1rem,2vw,1.25rem)] text-gray-700 leading-relaxed">
                            We utilize only the highest quality, BPA-free, medical-grade plastics to create our aligners. Our materials are rigorously tested to ensure biocompatibility, durability, and optimal comfort throughout your treatment.
                        </p>
                        <ul className="mt-4 space-y-2">
                            <li className="flex items-center">
                                <CheckCircle className="text-green-500 mr-2" size={20} />
                                <span className="text-[clamp(0.875rem,1.5vw,1rem)] text-gray-700">
                                    BPA-free and biocompatible
                                </span>
                            </li>
                            <li className="flex items-center">
                                <CheckCircle className="text-green-500 mr-2" size={20} />
                                <span className="text-[clamp(0.875rem,1.5vw,1rem)] text-gray-700">
                                    Durable and stain-resistant
                                </span>
                            </li>
                            <li className="flex items-center">
                                <CheckCircle className="text-green-500 mr-2" size={20} />
                                <span className="text-[clamp(0.875rem,1.5vw,1rem)] text-gray-700">
                                    Smooth and comfortable fit
                                </span>
                            </li>
                        </ul>
                    </motion.div>
                    <motion.div
                        variants={{
                            hidden: { x: 50, opacity: 0 },
                            visible: { x: 0, opacity: 1 },
                        }}
                    >
                        <Image
                            src="https://placehold.co/600x400/FFFFFF/000000/png?text=Material+Image"
                            alt="Aligner Material"
                            width={600}
                            height={400}
                            className="rounded-2xl shadow-xl"
                        />
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

interface TechnologyProps { }

const Technology: React.FC<TechnologyProps> = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <motion.section
            ref={ref}
            className="py-24 md:py-32 bg-gray-50"
            variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
            }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    className="text-[clamp(1.75rem,5vw,3.5rem)] font-bold text-gray-900 mb-8 text-center"
                    variants={{
                        hidden: { y: 30, opacity: 0 },
                        visible: { y: 0, opacity: 1 },
                    }}
                >
                    Advanced Technology for Precise Results
                </motion.h2>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <motion.div
                        variants={{
                            hidden: { x: -50, opacity: 0 },
                            visible: { x: 0, opacity: 1 },
                        }}
                    >
                        <Image
                            src="https://placehold.co/600x400/FFFFFF/000000/png?text=Technology+Image"
                            alt="3D Scanning"
                            width={600}
                            height={400}
                            className="rounded-2xl shadow-xl"
                        />
                    </motion.div>
                    <motion.div
                        variants={{
                            hidden: { y: 30, opacity: 0 },
                            visible: { y: 0, opacity: 1 },
                        }}
                    >
                        <p className="text-[clamp(1rem,2vw,1.25rem)] text-gray-700 leading-relaxed">
                            Our aligners are designed using state-of-the-art 3D scanning and printing technology. This allows us to create a precise digital model of your teeth and customize each aligner to ensure optimal fit and effectiveness.
                        </p>
                        <ul className="mt-4 space-y-2">
                            <li className="flex items-center">
                                <CheckCircle className="text-green-500 mr-2" size={20} />
                                <span className="text-[clamp(0.875rem,1.5vw,1rem)] text-gray-700">
                                    Precise 3D scanning
                                </span>
                            </li>
                            <li className="flex items-center">
                                <CheckCircle className="text-green-500 mr-2" size={20} />
                                <span className="text-[clamp(0.875rem,1.5vw,1rem)] text-gray-700">
                                    Customized treatment plans
                                </span>
                            </li>
                            <li className="flex items-center">
                                <CheckCircle className="text-green-500 mr-2" size={20} />
                                <span className="text-[clamp(0.875rem,1.5vw,1rem)] text-gray-700">
                                    Advanced printing technology
                                </span>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

interface ComparisonProps { }

const Comparison: React.FC<ComparisonProps> = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <motion.section
            ref={ref}
            className="py-24 md:py-32 bg-white"
            variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
            }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    className="text-[clamp(1.75rem,5vw,3.5rem)] font-bold text-gray-900 mb-8 text-center"
                    variants={{
                        hidden: { y: 30, opacity: 0 },
                        visible: { y: 0, opacity: 1 },
                    }}
                >
                    Aligners vs. Traditional Braces: A Clear Choice
                </motion.h2>
                <motion.div
                    className="overflow-x-auto"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 },
                    }}
                >
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Feature
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Clear Aligners
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Traditional Braces
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    Visibility
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                    Virtually Invisible
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                    Highly Visible
                                </td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    Comfort
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                    Smooth, Custom-Fit
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                    Can Cause Irritation
                                </td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    Removability
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                    Removable for Eating & Cleaning
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                    Fixed
                                </td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    Treatment Time
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                    Often Shorter
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                    Typically Longer
                                </td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    Cost
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                    More Affordable
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                    More Expensive
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </motion.div>
            </div>
        </motion.section>
    );
};

interface HeroProps { }

const Hero: React.FC<HeroProps> = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <motion.section
            ref={ref}
            className="relative py-24 md:py-32 bg-gray-100 overflow-hidden"
            variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
            }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100/20 via-pink-100/20 to-orange-100/20 blur-3xl" />
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.h1
                    className="text-[clamp(2.5rem,8vw,6rem)] font-bold text-gray-900 mb-8 leading-[0.9]"
                    variants={{
                        hidden: { y: 50, opacity: 0 },
                        visible: { y: 0, opacity: 1 },
                    }}
                >
                    The Cheapest Tooth Aligners in Bangalore.
                </motion.h1>
                <motion.p
                    className="text-[clamp(1rem,2vw,1.25rem)] text-gray-700 leading-relaxed mb-12"
                    variants={{
                        hidden: { y: 50, opacity: 0 },
                        visible: { y: 0, opacity: 1 },
                    }}
                >
                    Achieve your dream smile affordably and conveniently with our clear aligners.
                </motion.p>
                <motion.div
                    className="flex gap-4"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 },
                    }}
                >
                    <Link href="/" className="inline-flex items-center justify-center rounded-full bg-purple-600 text-white px-6 py-3 text-[clamp(0.875rem,1.5vw,1rem)] font-medium hover:bg-purple-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                        Get Started <ArrowRight className="ml-2" size={20} />
                    </Link>
                    <Link href="/" className="inline-flex items-center justify-center rounded-full bg-white text-gray-700 px-6 py-3 text-[clamp(0.875rem,1.5vw,1rem)] font-medium hover:bg-gray-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                        Learn More
                    </Link>
                </motion.div>
            </div>
            <div className="absolute inset-0">
                <Image
                    src="https://placehold.co/1920x1080/FFFFFF/000000/png?text=Hero+Background"
                    alt="Hero background"
                    fill
                    className="object-cover opacity-20"
                />
            </div>
        </motion.section>
    );
};


const Page = () => {
    return (
        <div>
            <Hero />
            <ProductOverview />
            <Benefits />
            <Materials />
            <Technology />
            <Comparison />
        </div>
    );
};

export default Page;