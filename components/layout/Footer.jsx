import React from 'react';
import Link from 'next/link';
import {
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Mail
} from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900 mt-auto">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link href="/" className="flex items-center">
                            <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                                AliRaza Blog
                            </span>
                        </Link>
                        <p className="mt-4 max-w-xs text-gray-600 dark:text-gray-400">
                            Sharing insights and knowledge about web development and technology.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Resources</h2>
                            <ul className="text-gray-600 dark:text-gray-400 space-y-4">
                                <li>
                                    <Link href="/blog" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                                        Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Follow us</h2>
                            <ul className="text-gray-600 dark:text-gray-400 space-y-4">
                                <li>
                                    <Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                                        Github
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                                        Discord
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Legal</h2>
                            <ul className="text-gray-600 dark:text-gray-400 space-y-4">
                                <li>
                                    <Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                                        Terms
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />

                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400 sm:text-center">
                        © {new Date().getFullYear()} <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">AliRaza Blog™</Link>. All Rights Reserved.
                    </span>

                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                        <Link href="#" className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-transform hover:scale-110 duration-300">
                            <Facebook className="w-5 h-5" />
                        </Link>
                        <Link href="#" className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-transform hover:scale-110 duration-300">
                            <Twitter className="w-5 h-5" />
                        </Link>
                        <Link href="#" className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-transform hover:scale-110 duration-300">
                            <Instagram className="w-5 h-5" />
                        </Link>
                        <Link href="#" className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-transform hover:scale-110 duration-300">
                            <Linkedin className="w-5 h-5" />
                        </Link>
                        <Link href="#" className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-transform hover:scale-110 duration-300">
                            <Mail className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;