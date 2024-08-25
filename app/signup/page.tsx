"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import SignupForm from '@/app/components/signup/SignupForm';

const SignupPage = () => {
    const router = useRouter();
    const [error, setError] = useState<string | null>(null);

    const handleSignup = async (formData: { username: string; email: string; password: string }) => {
        setError(null);

        try {
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                router.push('/login');
            } else {
                const data = await response.json();
                setError(data.error || 'Signup failed');
            }
        } catch (err) {
            setError('An unexpected error occurred');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen p-6 bg-gray-50">
            <div className="w-full max-w-lg lg:max-w-xl" style={{ aspectRatio: '1 / 1.618' }}>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <SignupForm onSubmit={handleSignup} />
            </div>
        </div>
    );
};

export default SignupPage;
