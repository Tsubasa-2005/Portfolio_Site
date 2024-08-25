"use client";

import React, { useEffect, useState } from 'react';
import UserCard from '@/app/components/userCard/UserCard';
import UserPagination from "@/app/components/pagiNation/PaginationNavigator";

interface User {
    id: string;
    username: string;
    email: string;
    createdAt: Date | null;
    updatedAt: Date | null;
}

interface UsersPageProps {
    searchParams: { page?: string; limit?: string };
}

const UsersPage = ({ searchParams }: UsersPageProps) => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const page = parseInt(searchParams.page || '1', 10);
    const limit = parseInt(searchParams.limit || '8', 10);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users?page=${page}&limit=${limit}`, {
                    cache: 'no-store',
                });

                if (response.ok) {
                    const { users } = await response.json();
                    setUsers(users);
                } else {
                    setError('Failed to fetch users');
                }
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError('An unknown error occurred');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchUsers(); // Call the async function
    }, [page, limit]);

    if (loading) {
        return (
            <div className="container mx-auto py-12 px-6">
                <h1 className="text-4xl font-bold mb-8 text-center">User List</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {Array.from({ length: limit }).map((_, index) => (
                        <div
                            key={index}
                            className="animate-pulse bg-gray-200 rounded-lg p-6 h-48"
                        >
                            <div className="h-32 bg-gray-300 rounded-md mb-4"></div>
                            <div className="h-6 bg-gray-300 rounded"></div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container mx-auto py-12 px-6 text-center">
                <h1 className="text-4xl font-bold mb-8">User List</h1>
                <p className="text-red-500">Error: {error}</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto py-12 px-6">
            <h1 className="text-4xl font-bold mb-8 text-center">User List</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {users.map((user: User) => (
                    <UserCard key={user.id} user={user} />
                ))}
            </div>
            {/* Set totalPages dynamically if available */}
            <UserPagination currentPage={page} totalPages={2} limit={limit} />
        </div>
    );
};

export default UsersPage;
