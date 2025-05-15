'use client'

import React, { useState, useRef, useEffect } from 'react'

export default function CodeBox({ children, language }) {
  const [copied, setCopied] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isLongCode, setIsLongCode] = useState(false)
  const codeRef = useRef(null)
  const contentRef = useRef(null)
  const MAX_VISIBLE_LINES = 15
  const LINE_HEIGHT = 24 

  useEffect(() => {
    if (codeRef.current) {
      const text = codeRef.current.textContent || ''
      const lineCount = (text.match(/\n/g) || []).length + 1
      
      const shouldCollapse = lineCount > MAX_VISIBLE_LINES
      setIsLongCode(shouldCollapse)
      
      if (shouldCollapse) {
        setIsCollapsed(true)
      }
    }
  }, [children])

  const copyToClipboard = async () => {
    if (!codeRef.current) return
    
    try {
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
    <code className="block relative my-8 rounded-lg overflow-hidden bg-gray-100 dark:bg-[#1e1e1e] border border-gray-300 dark:border-gray-700 shadow-md dark:shadow-lg">
      <span className="flex justify-between items-center px-4 py-2 bg-gray-200 dark:bg-gray-800">
        <span className="flex items-center">
          {language && (
            <span className="text-xs font-mono text-gray-600 dark:text-gray-400 mr-2">
              {language}
            </span>
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
        </span>
        <button
          onClick={copyToClipboard}
          className={`px-2 py-1 text-xs text-white border-none rounded cursor-pointer transition-all duration-200 ${
            copied ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-600 dark:bg-gray-700 hover:bg-blue-700 dark:hover:bg-gray-600'
          }`}
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </span>
      <span 
        ref={contentRef}
        className={`block relative overflow-hidden transition-all duration-300 ease-in-out`}
        style={{
          maxHeight: isCollapsed ? `${MAX_VISIBLE_LINES * LINE_HEIGHT}px` : '100000px' // Large max-height when expanded
        }}
      >
        <span 
          className="block m-0 p-4 overflow-x-auto bg-transparent whitespace-pre font-mono text-sm text-gray-800 dark:text-gray-100" 
          ref={codeRef}
        >
          {children}
        </span>
        
        {isCollapsed && isLongCode && (
          <span className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-100 dark:from-[#1e1e1e] to-transparent pointer-events-none" />
        )}
      </span>
      
      {isCollapsed && isLongCode && (
        <span 
          className="block p-2 text-center cursor-pointer bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
          onClick={toggleCollapse}
        >
          <span className="text-sm text-blue-600 dark:text-blue-400 font-medium flex items-center justify-center">
            Show more
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </span>
      )}
      
      {!isCollapsed && isLongCode && (
        <span 
          className="block p-2 text-center cursor-pointer bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
          onClick={toggleCollapse}
        >
          <span className="text-sm text-blue-600 dark:text-blue-400 font-medium flex items-center justify-center">
            Show less
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </span>
        </span>
      )}
    </code>
  )
}