import React from 'react';
import Link from 'next/link';

interface UserCardProps {
    user: {
        id: string;
        username: string;
        email: string;
        createdAt: Date | null;
    };
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
    return (
        <Link href={`/users/${user.id}`}>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <h2 className="text-xl font-semibold mb-2">{user.username}</h2>
                <p className="text-gray-700">{user.email}</p>
                <p className="text-gray-500 text-sm mt-2">
                    {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}
                </p>
            </div>
        </Link>
    );
};

export default UserCard;
