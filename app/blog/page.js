"use client"
import React from 'react'
import { promises as fs } from 'fs'
import path from 'path'
import Link from 'next/link'
import LearningLogoAnimation from '@/components/SpecialAnimation/LearningLogoAnimation'

async function getBlogPosts() {
  const contentPath = path.join(process.cwd(), 'content')
  const files = await fs.readdir(contentPath)

  const posts = await Promise.all(
    files
      .filter(file => file.endsWith('.md'))
      .map(async (file) => {
        const filePath = path.join(contentPath, file)
        const content = await fs.readFile(filePath, 'utf8')

        const titleMatch = content.match(/^#\s+(.*)$/m)
        const title = titleMatch ? titleMatch[1] : file.replace(/\.md$/, '').replace(/-/g, ' ')

        const descriptionMatch = content.match(/^#.*\n\n(.*?)(\n\n|$)/s)
        const description = descriptionMatch ? descriptionMatch[1].substring(0, 160) + '...' : ''

        return {
          slug: file.replace(/\.md$/, ''),
          title,
          description,
          date: new Date().toISOString().split('T')[0]
        }
      })
  )

  return posts
}

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8 flex flex-row">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Blogs
          </h1>
          <LearningLogoAnimation className="w-24 h-24" />
        </div>

        <div className="h-1 w-30 -mt-6 bg-blue-600 rounded mb-10"></div>{/* ?Here I will later add the animation of the underline */}

        <div className="text-center mb-16">
          <p className="text-gray-700 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our collection of in-depth articles about Next.js, React, and modern web development
          </p>
        </div>

        <div className="grid gap-8">
          {posts.map(post => (
            <Link
              href={`/blogPost/${post.slug}`}
              key={post.slug}
              className="block p-6 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-md dark:hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] group"
            >
              <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{post.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{post.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-500">{post.date}</span>
                <span className="inline-flex items-center text-blue-600 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors">
                  Read article
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
