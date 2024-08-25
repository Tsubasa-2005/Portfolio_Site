"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import LoginForm from '@/app/components/login/LoginForm';

const LoginPage = () => {
    const router = useRouter();
    const [error, setError] = useState<string | null>(null);

    const handleLogin = async (formData: { email: string; password: string }) => {
        setError(null);

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                router.push('/dashboard'); // ログイン成功後にリダイレクト
            } else {
                const data = await response.json();
                setError(data.error || 'Login failed');
            }
        } catch (err) {
            setError('An unexpected error occurred');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50">
            <div className="w-full max-w-lg lg:max-w-xl" style={{ aspectRatio: '1 / 1.618' }}>
                {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
                <LoginForm onSubmit={handleLogin} />
            </div>
        </div>
    );
};

export default LoginPage;
