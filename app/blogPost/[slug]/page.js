import React from 'react'
import { promises as fs } from 'fs'
import path from 'path'
import MarkdownContent from '@/components/MarkdownContent'
// import ClientTableOfContents from '@/components/ClientTableOfContents'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export async function generateStaticParams() {
  const contentPath = path.join(process.cwd(), 'content')
  const files = await fs.readdir(contentPath)
  
  return files
    .filter(file => file.endsWith('.md'))
    .map(file => ({
      slug: file.replace(/\.md$/, '')
    }))
}

export default async function BlogPost({ params }) {
  const { slug } = params
  
  try {
    // Read the markdown file
    const markdownPath = path.join(process.cwd(), 'content', `${slug}.md`)
    const fileContent = await fs.readFile(markdownPath, 'utf8')
    
    // Extract title from first line (# Title)
    const titleMatch = fileContent.match(/^#\s+(.*)$/m)
    const title = titleMatch ? titleMatch[1] : slug.replace(/-/g, ' ')
    
    return (
      <div className="min-h-screen bg-white dark:bg-gray-950 pb-16 transition-colors duration-200">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <Link href="/blog" className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 transition-colors">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              Back to all posts
            </Link>
          </div>
          
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{title}</h1>
            <div className="h-1 w-24 bg-blue-600 rounded"></div>
          </div>
          
          {/* Table of Contents */}
          {/* <ClientTableOfContents content={fileContent} /> */}
          
          <article className="bg-white dark:bg-gray-900 rounded-lg shadow-md dark:shadow-xl p-6 border border-gray-200 dark:border-gray-800">
            <MarkdownContent content={fileContent} />
          </article>
        </div>
      </div>
    )
  } catch (error) {
    console.error(`Error loading blog post: ${error.message}`)
    notFound()
  }
}
