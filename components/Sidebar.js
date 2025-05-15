"use client"
import Link from 'next/link';
import { blogPosts } from '@/data/BlogPost';

export default function Sidebar({ currentPost }) {
  const categories = [...new Set(blogPosts.map(post => post.category))];
  
  const recentPosts = blogPosts
    .filter(post => post.slug !== currentPost.slug)
    .slice(0, 5);

  return (
    <div className="space-y-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">About the Blog</h2>
        <p className="text-gray-600 dark:text-gray-300">
          Welcome to our tech blog where we share insights about web development,
          programming, and the latest technologies.
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Categories</h2>
        <div className="space-y-2">
          {categories.map((category) => (
            <Link
              key={category}
              href={`/category/${category.toLowerCase()}`}
              className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {category}
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Recent Posts</h2>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blogPost/${post.slug}`}
              className="block group"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 flex-shrink-0">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{post.date}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Popular Tags</h2>
        <div className="flex flex-wrap gap-2">
          {currentPost.tags.map((tag) => (
            <Link
              key={tag}
              href={`/tag/${tag}`}
              className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-800 dark:hover:text-blue-100 transition-colors"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 