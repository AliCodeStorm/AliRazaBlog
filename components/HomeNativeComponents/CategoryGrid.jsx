'use client';

import { Lightbulb, Atom, Settings, Briefcase } from 'lucide-react';
import Link from 'next/link';

const categories = [
  {
    title: 'JavaScript Tips',
    icon: Lightbulb,
    href: '/categories/javascript-tips',
  },
  {
    title: 'React & Next.js',
    icon: Atom,
    href: '/categories/react-next',
  },
  {
    title: 'Dev Tools',
    icon: Settings,
    href: '/categories/dev-tools',
  },
  {
    title: 'Career & Freelancing',
    icon: Briefcase,
    href: '/categories/career',
  },
];

export default function CategoryGrid() {
  const loopItems = [...categories, ...categories]; 

  return (
    <div className="bg-gray-50 relative overflow-hidden py-12 dark:bg-gray-900">
      <div className="marquee-track">
        {loopItems.map((item, idx) => (
          <Link
            href={item.href}
            key={idx}
            className="marquee-item group"
          >
            <div className="icon-container flex justify-center items-center mb-3">
              <item.icon className="w-10 h-10 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
            </div>
            
            <p className="font-medium text-lg text-center group-hover:text-blue-600 transition-colors duration-300">
              {item.title}
            </p>
          </Link> 
        ))}
      </div>
    </div>
  );
}
