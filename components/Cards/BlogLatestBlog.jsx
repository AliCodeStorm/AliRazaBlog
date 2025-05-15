"use client";
import React from 'react'
import Image from "next/image";
import Link from "next/link";

const blogPosts = [
    {
        id: 1,
        title: "Build a Full-Stack App with Next.js 14 and MongoDB",
        excerpt: "Learn how to create a production-ready full-stack application using the latest Next.js features with MongoDB integration...",
        date: "May 11, 2025",
        author: "Ali Raza",
        imageUrl: "/fullapp.jpg",
        category: "Full-Stack Development"
    },
    {
        id: 2,
        title: "10 Tailwind CSS Tricks Every Developer Should Know",
        excerpt: "Boost your frontend productivity with these lesser-known but powerful Tailwind CSS tricks...",
        date: "May 10, 2025",
        author: "Ali Raza",
        imageUrl: "/tailwind.jpg",
        category: "CSS"
    },
    {
        id: 3,
        title: "Unleashing the Power of JavaScript ES2025 Features",
        excerpt: "A practical guide to ES2025's newest features including pipeline operator, pattern matching, and more...",
        date: "May 8, 2025",
        author: "Ali Raza",
        imageUrl: "/js-closures.jpg",
        category: "JavaScript"
    }
];


function BlogLatestBlog() {
    return (
        <section className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Top Blogs</h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300">Latest articles and updates from our team</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <Link href={`/blog`} key={post.id}>
                            <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <div className="relative h-48 w-full">
                                    <Image
                                        src={post.imageUrl}
                                        alt={post.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="text-sm text-blue-600 dark:text-blue-400 mb-2">{post.category}</div>
                                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{post.title}</h2>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                                        <span>{post.author}</span>
                                        <span>{post.date}</span>
                                    </div>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default BlogLatestBlog
