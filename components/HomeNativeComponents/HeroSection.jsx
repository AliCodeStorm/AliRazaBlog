"use client";

import Image from "next/image";
import Link from "next/link";
import Lottie from "lottie-react";
import codingAnimation from "../SpecialAnimation/AnimationHeroSection.json";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { InteractiveHoverButton } from "../Buttons/InteractiveHoverButton";
import { HyperText } from "@/components/magicui/hyper-text";

const rotatingWords = ["Technology", "Development", "Innovation", "Growth"];

export default function HeroSection() {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % rotatingWords.length);
    }, 2500); 
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[80vh] bg-gray-900 dark:bg-gray-800 flex items-center justify-center">
     
      <div className="absolute inset-0 z-0">
        <Image
          src="/star.jpg"
          alt="Hero background"
          fill
          className="object-cover opacity-40"
          priority
        />
      </div>

      
      <div className="z-10 relative px-4 max-w-screen-xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="text-white text-center md:text-left flex-1">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Welcome to
            <HyperText className="font-bold text-4xl" startOnView={true}>AliRaza</HyperText>
            DevBlog
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Explore the latest in{" "}
            <motion.span
              key={currentWord}
              className="text-primary-400"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {rotatingWords[currentWord]}
            </motion.span>
          </motion.p>

          <Link href="/blog">
            <InteractiveHoverButton>
              Read Our Articles
            </InteractiveHoverButton>
          </Link>
        </div>

        <div className="flex-1 hidden md:block">
          <Lottie
            animationData={codingAnimation}
            loop
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
