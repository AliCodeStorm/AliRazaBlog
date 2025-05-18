'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Sidebar from '@/components/Sidebar';
import { Inter } from 'next/font/google';
import { convertMarkdownToHtml } from '@/utils/markdown';

const inter = Inter({ subsets: ['latin'] });

export default function BlogPostContent({ post, content }) {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    const html = convertMarkdownToHtml(content);
    setHtmlContent(html);
  }, [content]);

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200 ${inter.className}`}>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <main className="lg:w-2/3 bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <article className="prose dark:prose-invert prose-lg max-w-none">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{post.title}</h1>
              <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300 mb-8">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.author}</span>
                <span>•</span>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-3 py-1 rounded-full text-sm">
                  {post.category}
                </span>
              </div>

              <div className="relative w-full h-64 mb-8 rounded-lg overflow-hidden">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div
                className="markdown-content prose-headings:font-bold prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline prose-pre:bg-gray-100 dark:prose-pre:bg-gray-800 prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto prose-code:text-sm prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:px-2 prose-code:py-1 prose-code:rounded"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />

              <div className="mt-8 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </article>
          </main>

          {/* Sidebar */}
          <aside className="lg:w-1/3">
            <Sidebar currentPost={post} />
          </aside>
        </div>
      </div>
    </div>
  );
}
