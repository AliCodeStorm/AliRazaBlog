"use client";

import React from "react";
import { WarpBackground } from "../magicui/warp-background";

const Features = () => {
  return (
    <section className="relative py-16 px-4 overflow-hidden">
      <WarpBackground
        className="absolute inset-0 -z-10"
        containerClassName="max-w-7xl mx-auto"
        fill="rgba(255,255,255,0.08)"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
       
          <FeatureCard
            iconColor="blue"
            title="Technical Insights"
            text="In-depth articles about the latest technologies and development practices."
          />
         
          <FeatureCard
            iconColor="green"
            title="Tutorials"
            text="Step-by-step guides to help you master new skills and concepts."
          />
          
          <FeatureCard
            iconColor="purple"
            title="Community"
            text="Join our community of developers and share your experiences."
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ iconColor, title, text }) => {
  const iconClasses = {
    blue: "bg-blue-100 dark:bg-blue-700 text-blue-600 dark:text-blue-300",
    green: "bg-green-100 dark:bg-green-700 text-green-600 dark:text-green-300",
    purple: "bg-purple-100 dark:bg-purple-700 text-purple-600 dark:text-purple-300",
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <div className={`h-12 w-12 ${iconClasses[iconColor]} rounded-lg flex items-center justify-center mb-4`}>
        {/* Replace this with your real icons as needed */}
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{text}</p>
    </div>
  );
};

export default Features;
