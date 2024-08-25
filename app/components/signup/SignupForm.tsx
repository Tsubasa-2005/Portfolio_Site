import React, { useState } from 'react';
import FormInput from '@/app/components/form/FormInput';

interface SignupFormProps {
    onSubmit: (formData: { username: string; email: string; password: string }) => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ onSubmit }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ username, email, password });
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-12 rounded-lg shadow-md w-full max-w-2xl mx-auto">
            <h1 className="text-4xl font-semibold text-gray-800 mb-8 text-center">Sign Up</h1>

            <FormInput
                id="username"
                label="Username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />

            <FormInput
                id="email"
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />

            <FormInput
                id="password"
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />

            <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-4 px-8 rounded-lg hover:bg-indigo-700 transition-colors duration-300 text-lg"
            >
                Sign Up
            </button>
        </form>
    );
};

export default SignupForm;
