"use client";

import dynamic from 'next/dynamic';
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Lottie = dynamic(() => import('lottie-react'), {
    ssr: false
});

export default function LearningLogoAnimation({ className }) {
    const [isClient, setIsClient] = useState(false);
    const [animationData, setAnimationData] = useState(null);

    useEffect(() => {
        setIsClient(true);
        import("./LogoAnimation.json").then(data => {
            setAnimationData(data.default);
        });
    }, []);

    if (!isClient || !animationData) {
        return (
            <div className={cn("w-100 h-100", className)}>
                <div className="w-full h-full bg-gray-800 rounded-lg animate-pulse" />
            </div>
        );
    }

    return (
        <div className={cn("w-100 h-100", className)}>
            <Lottie animationData={animationData} loop autoplay />
        </div>
    );
}
