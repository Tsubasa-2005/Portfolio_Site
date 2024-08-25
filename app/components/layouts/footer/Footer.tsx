"use client";

import Link from "next/link";
import { FaTwitter, FaGithub } from "react-icons/fa";
import { useParams, usePathname } from "next/navigation";
import React from "react";

const Footer = () => {
    const { userID } = useParams();
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between">
                {/* Left: Navigation Links */}
                <div className="mb-4 md:mb-0">
                    <h2 className="text-lg font-bold mb-2">Quick Links</h2>
                    <ul className="space-y-2 list-disc list-inside">
                        <li>
                            <Link
                                href={`/users/${userID}`}
                                className={isActive(`/users/${userID}`) ? 'text-yellow-500' : 'hover:text-yellow-500'}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={`/users/${userID}/about`}
                                className={isActive(`/users/${userID}/about`) ? 'text-yellow-500' : 'hover:text-yellow-500'}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={`/users/${userID}/projects`}
                                className={isActive(`/users/${userID}/projects`) ? 'text-yellow-500' : 'hover:text-yellow-500'}
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={`/users/${userID}/contact`}
                                className={isActive(`/users/${userID}/contact`) ? 'text-yellow-500' : 'hover:text-yellow-500'}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Center: Social Media Links */}
                <div className="mb-4 md:mb-0">
                    <h2 className="text-lg font-bold mb-2">Follow Me</h2>
                    <div className="flex space-x-4">
                        <a
                            href="https://twitter.com"
                            className="hover:text-yellow-500"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaTwitter size={24} />
                        </a>
                        <a
                            href="https://github.com"
                            className="hover:text-yellow-500"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub size={24} />
                        </a>
                    </div>
                </div>

                {/* Right: Copyright Information */}
                <div className="text-center md:text-right">
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
