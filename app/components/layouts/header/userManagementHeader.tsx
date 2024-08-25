"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const UserManagementHeader = () => {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    return (
        <header className="bg-blue-700 text-white shadow-md">
            <div className="container mx-auto flex justify-between items-center p-5">
                <div className="text-2xl font-bold">
                    <Link href="/">User Management</Link>
                </div>
                <nav className="flex space-x-6">
                    <Link href="/signup" className={isActive('/signup') ? 'text-yellow-500' : 'hover:text-yellow-500'}>
                        Sign Up
                    </Link>
                    <Link href="/login" className={isActive('/login') ? 'text-yellow-500' : 'hover:text-yellow-500'}>
                        Login
                    </Link>
                    <Link href="/settings" className={isActive('/settings') ? 'text-yellow-500' : 'hover:text-yellow-500'}>
                        Settings
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default UserManagementHeader;
