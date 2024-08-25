import React, { useState } from 'react';

interface LoginFormProps {
    onSubmit: (formData: { email: string; password: string }) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ email, password });
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto bg-white p-10 rounded-lg shadow-lg">
            <h2 className="text-4xl font-semibold text-center mb-8">Login</h2>

            <div className="mb-6">
                <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>

            <div className="mb-6">
                <label htmlFor="password" className="block text-lg font-medium text-gray-700">
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>

            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 text-lg font-semibold"
            >
                Log In
            </button>
        </form>
    );
};

export default LoginForm;
