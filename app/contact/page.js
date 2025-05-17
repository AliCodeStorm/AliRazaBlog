"use client";
import { motion } from "framer-motion";
import { TextAnimate } from "@/components/magicui/text-animate";
import { HyperText } from "@/components/magicui/hyper-text";
import { DotPattern } from "@/components/magicui/dot-pattern";
import ContactForm from "@/components/Sections/ContactForm";

export default function ContactSection() {
  return (
    <div className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900">
      {/* Background Pattern */}
      <div className="fixed inset-0 z-0 opacity-50">
        <DotPattern width={32} height={32} cx={1} cy={1} cr={1} />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={
            { opacity: 0,
               y: 20 
              }}
          animate={{
             opacity: 1,
              y: 0
             }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <HyperText className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get in Touch
          </HyperText>
          <TextAnimate
            as="p"
            className="text-lg text-gray-800 dark:text-gray-50"
            animation="fadeIn"
          >
            Have a question or want to work together?
          </TextAnimate>
        </motion.div>

        <div className="text-center mt-8">
          <a
            href="mailto:wolfhunting49@gmail.com"
            className="inline-block text-xl text-blue-600 dark:text-blue-400 hover:underline"
          >
            Send me an email
          </a>
        </div>

        <ContactForm/>
      </div>
    </div>
  );
}
