# Getting Started with Next.js: A Comprehensive Guide

Next.js is a powerful React framework that enables hybrid static and server rendering, route pre-fetching, and more.

It simplifies building fast, user-friendly, and SEO-optimized web applications using React.

This article covers the basics of setting up a Next.js project and why you should consider using it.
## Table of Contents
- [Introduction](#introduction)
- [Why Next.js?](#why-nextjs)
- [Project Setup](#project-setup)
- [Core Concepts](#core-concepts)
- [Routing](#routing)
- [Data Fetching](#data-fetching)
- [Styling](#styling)
- [Dark Mode](#dark-mode)
- [Enhanced Code Blocks](#enhanced-code-blocks)
- [Deployment](#deployment)

## Introduction

Next.js is a powerful React framework that enables features such as server-side rendering and static site generation. This guide will walk you through the essential concepts and best practices.

## Why Next.js?

Next.js provides several key benefits:

- **Server-Side Rendering (SSR)**: Improved performance and SEO
- **Static Site Generation (SSG)**: Fast page loads and better user experience
- **API Routes**: Build API endpoints within your Next.js application
- **File-System Based Routing**: Intuitive routing system
- **Built-in CSS Support**: Easy styling with CSS modules and more

## Project Setup

### 1. Create a New Project

<div class="code-box">
<button class="copy-button" onclick="copyCode(this)">Copy</button>
```bash
# Create a new Next.js project
npx create-next-app@latest my-blog
cd my-blog
```
</div>

### 2. Project Structure

<div class="code-box">
<button class="copy-button" onclick="copyCode(this)">Copy</button>
```plaintext
my-blog/
├── app/
│   ├── layout.js
│   ├── page.js
│   └── globals.css
├── components/
├── public/
└── package.json
```
</div>

## Core Concepts

### 1. Pages and Layouts

<div class="code-box">
<button class="copy-button" onclick="copyCode(this)">Copy</button>
```tsx
// app/layout.tsx
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

// app/page.tsx
export default function Home() {
  return <h1>Welcome to my blog!</h1>
}
```
</div>

### 2. Data Fetching

<div class="code-box">
<button class="copy-button" onclick="copyCode(this)">Copy</button>
```tsx
// app/posts/page.tsx
interface Post {
  id: number
  title: string
  content: string
}

async function getPosts(): Promise<Post[]> {
  const res = await fetch('https://api.example.com/posts')
  return res.json()
}

export default async function Posts() {
  const posts = await getPosts()
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}
```
</div>

## Routing

### 1. File-System Based Routing

<div class="code-box">
<button class="copy-button" onclick="copyCode(this)">Copy</button>
```plaintext
app/
├── page.tsx              // Home page (/)
├── about/
│   └── page.tsx         // About page (/about)
└── blog/
    ├── page.tsx         // Blog index (/blog)
    └── [slug]/
        └── page.tsx     // Dynamic blog post (/blog/post-1)
```
</div>

### 2. Dynamic Routes

<div class="code-box">
<button class="copy-button" onclick="copyCode(this)">Copy</button>
```tsx
// app/blog/[slug]/page.tsx
interface BlogPostProps {
  params: {
    slug: string
  }
}

export default function BlogPost({ params }: BlogPostProps) {
  return <h1>Post: {params.slug}</h1>
}
```
</div>

## Data Fetching

### 1. Server Components

<div class="code-box">
<button class="copy-button" onclick="copyCode(this)">Copy</button>
```tsx
// app/posts/page.tsx
interface Post {
  id: number
  title: string
  content: string
}

async function getPosts(): Promise<Post[]> {
  const res = await fetch('https://api.example.com/posts')
  return res.json()
}

export default async function Posts() {
  const posts = await getPosts()
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}
```
</div>

### 2. Client Components

<div class="code-box">
<button class="copy-button" onclick="copyCode(this)">Copy</button>
```tsx
'use client'

import { useState, useEffect } from 'react'

interface Data {
  id: number
  name: string
}

export default function ClientComponent() {
  const [data, setData] = useState<Data | null>(null)

  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(setData)
  }, [])

  return <div>{data?.name}</div>
}
```
</div>

## Styling

### 1. CSS Modules

<div class="code-box">
<button class="copy-button" onclick="copyCode(this)">Copy</button>
```css
/* styles/Button.module.css */
.button {
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  background-color: #0070f3;
  color: white;
  transition: background-color 0.2s;
}

.button:hover {
  background-color: #0051a8;
}
```
</div>

<div class="code-box">
<button class="copy-button" onclick="copyCode(this)">Copy</button>
```tsx
// components/Button.tsx
import styles from './Button.module.css'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
}

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  )
}
```
</div>

### 2. Tailwind CSS

<div class="code-box">
<button class="copy-button" onclick="copyCode(this)">Copy</button>
```tsx
// components/Card.tsx
interface CardProps {
  title: string
  description: string
}

export default function Card({ title, description }: CardProps) {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div>
        <div className="text-xl font-medium text-black">{title}</div>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  )
}
```
</div>

## Dark Mode

Implementing dark mode in a Next.js application with Tailwind CSS is straightforward. Here's how to do it:

### 1. Configure Tailwind CSS

<div class="code-box">
<button class="copy-button" onclick="copyCode(this)">Copy</button>
```js
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      // Your theme extensions
    },
  },
  plugins: [],
}
```
</div>

### 2. Create a Theme Context

<div class="code-box">
<button class="copy-button" onclick="copyCode(this)">Copy</button>
```tsx
// context/ThemeContext.tsx
'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type ThemeContextType = {
  theme: string
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    // Initialize theme on client side
    const savedTheme = localStorage.getItem('theme')
    
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.classList.toggle('dark', savedTheme === 'dark')
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
```
</div>

### 3. Create a Theme Toggle Component

<div class="code-box">
<button class="copy-button" onclick="copyCode(this)">Copy</button>
```tsx
// components/ThemeToggle.tsx
'use client'

import { useTheme } from '@/context/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button 
      onClick={toggleTheme} 
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
        </svg>
      )}
    </button>
  )
}
```
</div>

### 4. Wrap Your Application with the Theme Provider

<div class="code-box">
<button class="copy-button" onclick="copyCode(this)">Copy</button>
```tsx
// app/layout.tsx
import { ThemeProvider } from '@/context/ThemeContext'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
```
</div>

### 5. Use Dark Mode Variants in Your Components

With Tailwind CSS, you can use the `dark:` prefix to apply styles specifically for dark mode:

<div class="code-box">
<button class="copy-button" onclick="copyCode(this)">Copy</button>
```tsx
// Example component with dark mode styling
export function Card() {
  return (
    <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold">Card Title</h2>
      <p className="text-gray-600 dark:text-gray-300 mt-2">Card content goes here.</p>
      <button className="mt-4 bg-blue-500 dark:bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-600 dark:hover:bg-blue-700">
        Click Me
      </button>
    </div>
  )
}
```
</div>

By following these steps, you'll have a fully functional dark mode implementation in your Next.js application that respects user preferences and stores their selection.

## Enhanced Code Blocks

When documenting code in your Next.js applications, enhanced code blocks can significantly improve readability. Here's how to implement collapsible code blocks with syntax highlighting:

### 1. Creating a Collapsible CodeBox Component

The CodeBox component below provides collapsible functionality for long code blocks. Any code block with more than 15 lines will automatically be collapsed with a "Show more" button.

<div class="code-box">
<button class="copy-button" onclick="copyCode(this)">Copy</button>
```jsx
// components/CodeBox.jsx
'use client'

import React, { useState, useRef, useEffect } from 'react'

export default function CodeBox({ children, language }) {
  const [copied, setCopied] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isLongCode, setIsLongCode] = useState(false)
  const codeRef = useRef(null)
  const contentRef = useRef(null)
  const MAX_VISIBLE_LINES = 15
  const LINE_HEIGHT = 24 // approximate line height in pixels

  useEffect(() => {
    // Check if code is long enough to warrant collapsing
    if (codeRef.current) {
      const text = codeRef.current.textContent || ''
      const lineCount = (text.match(/\n/g) || []).length + 1
      
      const shouldCollapse = lineCount > MAX_VISIBLE_LINES
      setIsLongCode(shouldCollapse)
      
      // Only auto-collapse if it's more than 15 lines
      if (shouldCollapse) {
        setIsCollapsed(true)
      }
    }
  }, [children])

  const copyToClipboard = async () => {
    if (!codeRef.current) return
    
    try {
      // Get the text content of the code block
      const codeText = codeRef.current.textContent || ''
      await navigator.clipboard.writeText(codeText)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <div className="relative my-4 rounded-lg overflow-hidden bg-gray-100 dark:bg-[#1e1e1e] border border-gray-300 dark:border-gray-700 shadow-md dark:shadow-lg">
      <div className="flex justify-between items-center px-4 py-2 bg-gray-200 dark:bg-gray-800">
        <div className="flex items-center">
          {language && (
            <div className="text-xs font-mono text-gray-600 dark:text-gray-400 mr-2">
              {language}
            </div>
          )}
          {isLongCode && (
            <button
              onClick={toggleCollapse}
              className="text-xs px-2 py-1 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 rounded text-gray-700 dark:text-gray-300 transition-colors"
              aria-label={isCollapsed ? 'Expand code' : 'Collapse code'}
            >
              {isCollapsed ? 'Expand' : 'Collapse'}
            </button>
          )}
        </div>
        <button
          onClick={copyToClipboard}
          className={`px-2 py-1 text-xs text-white border-none rounded cursor-pointer transition-all duration-200 ${
            copied ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-600 dark:bg-gray-700 hover:bg-blue-700 dark:hover:bg-gray-600'
          }`}
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <div 
        ref={contentRef}
        className={`relative overflow-hidden transition-all duration-300 ease-in-out`}
        style={{
          maxHeight: isCollapsed ? `${MAX_VISIBLE_LINES * LINE_HEIGHT}px` : '100000px'
        }}
      >
        <div 
          className="m-0 p-4 overflow-x-auto bg-transparent whitespace-pre font-mono text-sm text-gray-800 dark:text-gray-100" 
          ref={codeRef}
        >
          {children}
        </div>
        
        {isCollapsed && isLongCode && (
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-100 dark:from-[#1e1e1e] to-transparent pointer-events-none" />
        )}
      </div>
      
      {isCollapsed && isLongCode && (
        <div 
          className="p-2 text-center cursor-pointer bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
          onClick={toggleCollapse}
        >
          <span className="text-sm text-blue-600 dark:text-blue-400 font-medium flex items-center justify-center">
            Show more
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </div>
      )}
      
      {!isCollapsed && isLongCode && (
        <div 
          className="p-2 text-center cursor-pointer bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
          onClick={toggleCollapse}
        >
          <span className="text-sm text-blue-600 dark:text-blue-400 font-medium flex items-center justify-center">
            Show less
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </span>
        </div>
      )}
    </div>
  )
}
```
</div>

### 2. Using the CodeBox Component with Markdown

When integrating the CodeBox component with markdown content, you'll need to create a custom markdown renderer:

<div class="code-box">
<button class="copy-button" onclick="copyCode(this)">Copy</button>
```jsx
// components/MarkdownContent.jsx
'use client'

import React from 'react'
import ReactMarkdown from 'react-markdown'
import CodeBox from './CodeBox'

export default function MarkdownContent({ content }) {
  return (
    <div className="prose dark:prose-invert prose-lg max-w-none">
      <ReactMarkdown
        components={{
          code: ({ node, inline, className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || '')
            const language = match ? match[1] : undefined
            
            if (inline) {
              return (
                <code className="px-1.5 py-0.5 mx-0.5 bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200 rounded text-sm font-mono" {...props}>
                  {children}
                </code>
              )
            }

            return (
              <CodeBox language={language}>
                {String(children).replace(/\n$/, '')}
              </CodeBox>
            )
          },
          // Other component overrides...
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
```
</div>

### 3. Features of the Enhanced Code Blocks

The enhanced code blocks provide several useful features:

1. **Automatic Collapsing**: 
   - Long code blocks (more than 15 lines) are automatically collapsed
   - Users can see the first 15 lines, with a gradient fade-out at the bottom
   - A "Show more" button appears at the bottom

2. **Expand/Collapse Controls**: 
   - "Expand/Collapse" button in the header
   - "Show more"/"Show less" button at the bottom
   - Smooth animation when expanding/collapsing

3. **Visual Indicators**:
   - Language indicator in the top-left corner
   - Gradient fade-out effect at the bottom of collapsed blocks
   - Clear buttons with hover states

4. **Copy Functionality**:
   - Copy button that changes to "Copied!" when clicked
   - Copies the entire code block, even when collapsed

This implementation dramatically improves both the user experience and the aesthetics of your documentation, making it easier for readers to focus on the content without being overwhelmed by long code blocks.

### 4. Avoiding Hydration Errors

One common issue when working with code blocks in React and Next.js is hydration errors. In HTML, a `<pre>` element cannot be a descendant of a `<p>` element, but markdown parsers often place code blocks inside paragraphs.

To avoid these errors, use one of these approaches:

<div class="code-box">
<button class="copy-button" onclick="copyCode(this)">Copy</button>
```jsx
// Approach 1: Use divs instead of pre/code
function CodeBox({ children, language }) {
  return (
    <div className="code-block">
      <div className="code-content whitespace-pre">
        {children}
      </div>
    </div>
  )
}

// Approach 2: Wrap code blocks in a div in the markdown renderer
function MarkdownContent({ content }) {
  return (
    <ReactMarkdown
      components={{
        code: ({ inline, children, ...props }) => {
          if (inline) return <code {...props}>{children}</code>
          
          // Wrap non-inline code in a div to prevent it being in a paragraph
          return (
            <div className="not-prose">
              <CodeBox>{children}</CodeBox>
            </div>
          )
        }
      }}
    >
      {content}
    </ReactMarkdown>
  )
}
```
</div>

Both approaches ensure that your code blocks don't trigger the "Cannot nest `<pre>` inside `<p>`" HTML validation error that causes hydration issues in Next.js.

## Deployment

### 1. Vercel Deployment

<div class="code-box">
<button class="copy-button" onclick="copyCode(this)">Copy</button>
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```
</div>

### 2. Environment Variables

<div class="code-box">
<button class="copy-button" onclick="copyCode(this)">Copy</button>
```env
# .env.local
DATABASE_URL=your_database_url
API_KEY=your_api_key
```
</div>

## Best Practices

1. **Use Server Components by Default**
   - Better performance
   - Reduced client-side JavaScript
   - Automatic code splitting

2. **Implement Error Boundaries**

<div class="code-box">
<button class="copy-button" onclick="copyCode(this)">Copy</button>
```tsx
'use client'

interface ErrorBoundaryProps {
  error: Error
  reset: () => void
}

export default function ErrorBoundary({ error, reset }: ErrorBoundaryProps) {
  return (
    <div className="p-4 bg-red-50 dark:bg-red-900 rounded-lg">
      <h2 className="text-xl font-bold text-red-800 dark:text-red-200">
        Something went wrong!
      </h2>
      <button
        onClick={reset}
        className="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Try again
      </button>
    </div>
  )
}
```
</div>

3. **Optimize Images**

<div class="code-box">
<button class="copy-button" onclick="copyCode(this)">Copy</button>
```tsx
import Image from 'next/image'

interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height
}: OptimizedImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority
      className="rounded-lg"
    />
  )
}
```
</div>

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Platform](https://vercel.com)
- [Next.js GitHub Repository](https://github.com/vercel/next.js)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

*Last updated: May 13, 2025*

