'use client'

import React, { Fragment } from 'react'
import ReactMarkdown from 'react-markdown'
import CodeBox from './CodeBox'
import Image from 'next/image'
import { createTag } from '@/lib/tagUtils'

const processMdContent = (content) => {
  return content
    .replace(/<div class="code-box">\s*<button class="copy-button" onclick="copyCode\(this\)">Copy<\/button>\s*(```[\s\S]*?```)\s*<\/div>/g, '$1')
}

export default function MarkdownContent({ content }) {
  const processedContent = processMdContent(content)

  return (
    <div className="prose dark:prose-invert prose-lg max-w-none">
      <ReactMarkdown
        components={{
          h1: ({ node, children, ...props }) => {
            const id = createTag(String(children))
            return <h1 id={id} className="text-4xl font-bold mt-8 mb-4 text-gray-900 dark:text-white" {...props}>{children}</h1>
          },
          h2: ({ node, children, ...props }) => {
            const id = createTag(String(children))
            return <h2 id={id} className="text-3xl font-bold mt-8 mb-3 text-gray-800 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-2" {...props}>{children}</h2>
          },
          h3: ({ node, children, ...props }) => {
            const id = createTag(String(children))
            return <h3 id={id} className="text-2xl font-bold mt-6 mb-2 text-gray-800 dark:text-white" {...props}>{children}</h3>
          },
          code: ({ node, inline, className, children, ...props }) => {
            if (inline) {
              return (
                <code className="px-1.5 py-0.5 mx-0.5 bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200 rounded text-sm font-mono" {...props}>
                  {children}
                </code>
              )
            }

            const match = /language-(\w+)/.exec(className || '')
            const language = match ? match[1] : undefined

            return (
              <CodeBox language={language}>
                {String(children).replace(/\n$/, '')}
              </CodeBox>
            )
          },
          pre: ({ node, children, ...props }) => {
            const childArray = React.Children.toArray(children);
            if (childArray.length === 1 && React.isValidElement(childArray[0]) && childArray[0].type === CodeBox) {
              return childArray[0];
            }
            return <pre {...props}>{children}</pre>;
          },
          p: ({ node, children }) => {
            const childrenArray = React.Children.toArray(children);
            const hasCodeBox = childrenArray.some(child =>
              React.isValidElement(child) && child.type === CodeBox
            );

            if (hasCodeBox) {
              return (
                <Fragment>
                  {childrenArray.map((child, index) => {
                    if (React.isValidElement(child) && child.type === CodeBox) {
                      return <Fragment key={index}>{child}</Fragment>;
                    } else if (child) {
                      return <p key={index} className="my-4 text-gray-700 dark:text-gray-300 leading-7">{child}</p>;
                    }
                    return null;
                  })}
                </Fragment>
              );
            }

            return <p className="my-4 text-gray-700 dark:text-gray-300 leading-7">{children}</p>;
          },
          ul: ({ node, ...props }) => <ul className="list-disc pl-6 my-4 text-gray-700 dark:text-gray-300" {...props} />,
          ol: ({ node, ...props }) => <ol className="list-decimal pl-6 my-4 text-gray-700 dark:text-gray-300" {...props} />,
          li: ({ node, ...props }) => <li className="my-1" {...props} />,
          a: ({ node, ...props }) => <a className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline" {...props} />,
          blockquote: ({ node, ...props }) => <blockquote className="border-l-4 border-gray-300 dark:border-gray-700 pl-4 italic my-4 text-gray-600 dark:text-gray-400" {...props} />,
          table: ({ node, ...props }) => <div className="overflow-x-auto my-6"><table className="min-w-full divide-y divide-gray-300 dark:divide-gray-700" {...props} /></div>,
          thead: ({ node, ...props }) => <thead className="bg-gray-100 dark:bg-gray-800" {...props} />,
          th: ({ node, ...props }) => <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider" {...props} />,
          td: ({ node, ...props }) => <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700" {...props} />,

          img: ({ node, ...props }) => {
            const { src, alt } = props;
            if (!src) return null;

            return (
              <Image
                src={src}
                alt={alt || 'Image'}
                width={800}
                height={500}
                className="rounded-lg my-6 max-w-full h-auto"
              />
            );
          }
        }}
      >
        {processedContent}
      </ReactMarkdown>
    </div>
  )
}
