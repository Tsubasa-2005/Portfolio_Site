"use client";

import Link from 'next/link';
import { usePathname, useParams, useRouter } from 'next/navigation';
import React from 'react';

const Header = () => {
    const { userID } = useParams();
    const pathname = usePathname();
    const router = useRouter();

    const isActive = (path: string) => pathname === path;

    const handleTopClick = (e: React.MouseEvent) => {
        e.preventDefault();
        if (pathname === "/") {
            window.location.href = "/"; // Hard refresh the page
        } else {
            router.replace("/"); // Navigate to "/" and replace the current history entry
        }
    };

    return (
        <header className="bg-gray-900 text-white shadow-md">
            <div className="container mx-auto flex justify-between items-center p-5">
                <div className="text-2xl font-bold">
                    <Link href={`/users/${userID}`}>MyPortfolio</Link>
                </div>
                <nav className="flex space-x-6">
                    <a
                        href="/"
                        onClick={handleTopClick}
                        className={isActive("/") ? 'text-yellow-500' : 'hover:text-yellow-500'}
                    >
                        Top
                    </a>
                    <Link href={`/users/${userID}`} className={isActive(`/users/${userID}`) ? 'text-yellow-500' : 'hover:text-yellow-500'}>
                        Home
                    </Link>
                    <Link href={`/users/${userID}/about`} className={isActive(`/users/${userID}/about`) ? 'text-yellow-500' : 'hover:text-yellow-500'}>
                        About
                    </Link>
                    <Link href={`/users/${userID}/projects`} className={isActive(`/users/${userID}/projects`) ? 'text-yellow-500' : 'hover:text-yellow-500'}>
                        Projects
                    </Link>
                    <Link href={`/users/${userID}/contact`} className={isActive(`/users/${userID}/contact`) ? 'text-yellow-500' : 'hover:text-yellow-500'}>
                        Contact
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
