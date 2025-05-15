'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function TableOfContents({ content }) {
  const [headings, setHeadings] = useState([])
  const [activeId, setActiveId] = useState('')
  const router = useRouter()
  
  useEffect(() => {
    if (!content) return
    
    const headingRegex = /^(#{1,3})\s+(.+)$/gm
    const matches = [...content.matchAll(headingRegex)]
    
    const extractedHeadings = matches.map((match, index) => {
      const level = match[1].length 
      const text = match[2].trim()
      const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')
      
      return {
        id,
        text,
        level,
      }
    })
    
    setHeadings(extractedHeadings)
  }, [content])

  useEffect(() => {
    const handleScroll = () => {
      if (headings.length === 0) return
      
      const headingElements = headings.map(heading => 
        document.getElementById(heading.id)
      ).filter(Boolean)
      
      const TOP_OFFSET = 100 
      
      for (let i = headingElements.length - 1; i >= 0; i--) {
        const element = headingElements[i]
        if (element.getBoundingClientRect().top <= TOP_OFFSET) {
          setActiveId(element.id)
          break
        }
      }
      
      if (!activeId && headingElements.length > 0) {
        setActiveId(headingElements[0].id)
      }
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() 
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [headings, activeId])
  
  const scrollToHeading = (id) => {
    const element = document.getElementById(id)
    if (!element) return
    
    const TOP_OFFSET = 80 
    const elementPosition = element.getBoundingClientRect().top + window.scrollY
    
    window.scrollTo({
      top: elementPosition - TOP_OFFSET,
      behavior: 'smooth'
    })
    
    router.push(`#${id}`, { scroll: false })
    setActiveId(id)
  }
  
  if (headings.length === 0) return null
  
  return (
    <nav className="toc mb-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
      <h2 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">Table of Contents</h2>
      <ul className="space-y-2">
        {headings.map((heading) => (
          <li 
            key={heading.id}
            className={`toc-item ${heading.level > 1 ? 'pl-' + (heading.level-1)*4 : ''}`}
          >
            <a
              href={`#${heading.id}`}
              onClick={(e) => {
                e.preventDefault()
                scrollToHeading(heading.id)
              }}
              className={`block text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                activeId === heading.id 
                  ? 'text-blue-600 dark:text-blue-400 font-medium' 
                  : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
} 