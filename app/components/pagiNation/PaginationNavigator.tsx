"use client";

import React from 'react';
import Link from 'next/link';

interface UserPaginationProps {
    currentPage: number;
    totalPages: number;
    limit: number;
}

const UserPagination: React.FC<UserPaginationProps> = ({ currentPage, totalPages, limit }) => {
    return (
        <div className="mt-8 flex justify-center items-center space-x-2">
            {currentPage > 1 && (
                <Link href={`?page=${currentPage - 1}&limit=${limit}`} className="px-3 py-1 border rounded">
                    Previous
                </Link>
            )}

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                <Link
                    key={pageNumber}
                    href={`?page=${pageNumber}&limit=${limit}`}
                    className={`px-3 py-1 border rounded ${pageNumber === currentPage ? 'bg-blue-500 text-white' : ''}`}
                >
                    {pageNumber}
                </Link>
            ))}

            {currentPage < totalPages && (
                <Link href={`?page=${currentPage + 1}&limit=${limit}`} className="px-3 py-1 border rounded">
                    Next
                </Link>
            )}
        </div>
    );
};

export default UserPagination;
