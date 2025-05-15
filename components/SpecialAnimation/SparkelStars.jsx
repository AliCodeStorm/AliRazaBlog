"use client";
import { motion } from "framer-motion";
import React from "react";

const SparkleStars = () => {
    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-10">
            {[...Array(100)].map((_, i) => (
                <motion.span
                    suppressHydrationWarning={true}
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                        opacity: [0, 0.8, 0],
                        scale: [0.8, 1.2, 0.8],
                        y: [0, 20],
                    }}
                    transition={{
                        duration: 2 + Math.random() * 2,
                        delay: Math.random() * 4,
                        repeat: Infinity,
                    }}
                    className="absolute text-yellow-500 opacity-60"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        fontSize: `${Math.random() * 8 + 6}px`,
                    }}
                >
                    ✦
                </motion.span>
            ))}
        </div>
    );
};

export default SparkleStars;
