"use client";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import React, { useCallback, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

export function MagicCard({
  children,
  className,
  gradientSize = 200,
  gradientColor = "#262626",
  gradientOpacity = 0.8,
  gradientFrom = "#9E7AFF",
  gradientTo = "#FE8BBB"
}) {
  const cardRef = useRef(null);
  const mouseX = useMotionValue(-gradientSize);
  const mouseY = useMotionValue(-gradientSize);
  const [isMounted, setIsMounted] = useState(false);

  const handleMouseMove = useCallback((e) => {
    if (cardRef.current) {
      const { left, top } = cardRef.current.getBoundingClientRect();
      const clientX = e.clientX;
      const clientY = e.clientY;
      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }
  }, [mouseX, mouseY]);

  const handleMouseOut = useCallback((e) => {
    if (!e.relatedTarget) {
      mouseX.set(-gradientSize);
      mouseY.set(-gradientSize);
    }
  }, [mouseX, gradientSize, mouseY]);

  const handleMouseEnter = useCallback(() => {
    mouseX.set(-gradientSize);
    mouseY.set(-gradientSize);
  }, [mouseX, gradientSize, mouseY]);

  // Handle mounting state
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Handle mouse events
  useEffect(() => {
    if (!isMounted) return;

    const card = cardRef.current;
    if (!card) return;

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseout", handleMouseOut);
    card.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseout", handleMouseOut);
      card.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isMounted, handleMouseEnter, handleMouseMove, handleMouseOut]);

  useEffect(() => {
    if (!isMounted) return;
    mouseX.set(-gradientSize);
    mouseY.set(-gradientSize);
  }, [gradientSize, mouseX, mouseY, isMounted]);

  if (!isMounted) {
    return (
      <div ref={cardRef} className={cn("group relative rounded-[inherit]", className)}>
        <div className="absolute inset-px rounded-[inherit] bg-background" />
        <div className="relative">{children}</div>
      </div>
    );
  }

  return (
    <div
      ref={cardRef}
      className={cn("group relative rounded-[inherit]", className)}>
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-[inherit] bg-border duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
          radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px,
          ${gradientFrom}, 
          ${gradientTo}, 
          var(--border) 100%
          )
          `,
        }} />
      <div className="absolute inset-px rounded-[inherit] bg-background" />
      <motion.div
        className="pointer-events-none absolute inset-px rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${gradientColor}, transparent 100%)
          `,
          opacity: gradientOpacity,
        }} />
      <div className="relative">{children}</div>
    </div>
  );
}
