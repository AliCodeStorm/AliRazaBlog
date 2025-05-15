"use client";
import React from "react";
import { DotPattern } from "@/components/magicui/dot-pattern";

function NewsLetter() {
  return (
    <div>
      <aside className="relative overflow-hidden py-10 sm:py-16 bg-gray-50 lg:py-20 dark:bg-gray-900 border-t border-b border-gray-100 dark:border-gray-700">

        <DotPattern
          className="absolute inset-0 z-0 opacity-50"
          width={40}
          height={40}
          cx={1}
          cy={1}
          cr={1}
        />

        <div className="relative z-10 px-4 mx-auto max-w-7xl">
          <h2 className="mb-4 text-2xl md:text-4xl font-bold tracking-tight text-gray-900 md:font-extrabold lg:leading-none dark:text-white md:text-center lg:mb-7">
            Sign up for our newsletter
          </h2>
          <p className="mb-4 text-base text-gray-500 md:mb-6 dark:text-gray-400 md:text-center md:text-xl lg:px-20 xl:px-56">
            Do you want to get notified when a new component is added to Flowbite?
            Sign up and you’ll be among the first to know about new features,
            versions, and tools.
          </p>

          <div className="mb-4">
            <form
              action="https://app.convertkit.com/forms/4692392/subscriptions"
              method="post"
              className="flex max-w-xl md:mx-auto"
            >
              <div className="relative w-full">
                <label htmlFor="member_email" className="sr-only">
                  Email address
                </label>
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 16"
                  >
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                  </svg>
                </div>
                <input
                  suppressHydrationWarning={true}
                  type="email"
                  name="email_address"
                  id="member_email"
                  required
                  placeholder="Enter your email"
                  className="block w-full px-3 py-4 pl-11 text-base text-gray-900 bg-white border border-gray-200 rounded-l-xl focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder:text-gray-400 dark:text-white"
                />
              </div>
              <input
                suppressHydrationWarning={true}
                type="submit"
                value="Subscribe"
                className="px-4 py-4 text-base font-medium text-white bg-blue-700 border border-blue-700 rounded-r-xl cursor-pointer hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              />
            </form>
          </div>

          <p className="text-sm text-gray-500 md:text-center dark:text-gray-400">
            By subscribing, you agree with ConvertKit’s{" "}
            <a
              href="https://convertkit.com/terms"
              className="text-blue-600 hover:underline dark:text-blue-400"
              rel="nofollow noopener noreferrer"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="https://convertkit.com/privacy"
              className="text-blue-600 hover:underline dark:text-blue-400"
              rel="nofollow noopener noreferrer"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </aside>
    </div>
  );
}

export default NewsLetter;
