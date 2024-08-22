"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
    const pathname = usePathname(); // 現在のパスを取得

    // 現在のページかどうかをチェックする関数
    const isActive = (path: string) => pathname === path;

    return (
        <header className="bg-gray-900 text-white shadow-md">
            <div className="container mx-auto flex justify-between items-center p-5">
                <div className="text-2xl font-bold">
                    <Link href="/">MyPortfolio</Link>
                </div>
                <nav className="flex space-x-6">
                    <Link href="/" className={isActive('/') ? 'text-yellow-500' : 'hover:text-yellow-500'}>
                        Home
                    </Link>
                    <Link href="/about" className={isActive('/about') ? 'text-yellow-500' : 'hover:text-yellow-500'}>
                        About
                    </Link>
                    <Link href="/projects" className={isActive('/projects') ? 'text-yellow-500' : 'hover:text-yellow-500'}>
                        Projects
                    </Link>
                    <Link href="/contact" className={isActive('/contact') ? 'text-yellow-500' : 'hover:text-yellow-500'}>
                        Contact
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;