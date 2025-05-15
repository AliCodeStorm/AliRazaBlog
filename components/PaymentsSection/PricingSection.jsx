"use client";

import React from "react";
import { useState } from "react";
import { ShimmerButton } from "../Buttons/ShimmerButton";
import { TextAnimate } from "../magicui/text-animate";
import SparkleStars from "../SpecialAnimation/SparkelStars";

const starterPlan = {
  title: "Starter",
  description: "Perfect for solo devs and hobbyists just getting started with tech blogging.",
  price: "$0",
  duration: "/month",
  features: [
    "Access to all blog tutorials",
    "Comment and discuss",
    "Bookmark your favorite posts",
    "Email newsletter (monthly)",
  ],
};

const proPlan = {
  title: "Pro",
  description: "For freelance developers and content creators who want more visibility and tools.",
  price: "$9",
  duration: "/month",
  features: [
    "Everything in Starter",
    "Early access to premium articles",
    "Monthly dev resource bundle",
    "Priority comment support",
  ],
};

const enterprisePlan = {
  title: "Enterprise",
  description: "Ideal for teams, startups, or companies building dev-focused platforms.",
  price: "$49",
  duration: "/month",
  features: [
    "Everything in Pro",
    "Team access for 5 users",
    "Priority feature requests",
    "Private Q&A sessions",
  ],
};

const plans = [starterPlan, proPlan, enterprisePlan];

const PricingSection = () => {
  return (
    <section className="relative bg-white dark:bg-gray-900">
      <SparkleStars />

      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Designed for developers & teams like yours
          </h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Whether you're an individual or a team, our plans help you learn, share, and grow in the dev world with powerful resources and community support.
          </p>
        </div>

        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="relative overflow-hidden flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white transition-transform transform hover:translate-y-[-10px] hover:shadow-lg"
            >
              <TextAnimate animation="blurIn" as="h3">
                {plan.title}
              </TextAnimate>

              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                {plan.description}
              </p>

              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">
                  {plan.price}
                </span>
                <span className="text-gray-500 dark:text-gray-400">
                  {plan.duration}
                </span>
              </div>

              <ul className="mb-8 space-y-4 text-left">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <ShimmerButton
                onClick={() => window.location.href="/paymentform"}
                className="text-white"
              >
                Get Started
              </ShimmerButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
