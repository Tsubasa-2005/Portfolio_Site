// app/components/abouts/AboutMeSection.tsx
import React from 'react';
import Image from 'next/image';
import { AboutMeSectionProps } from '@/app/types/db/core';

const AboutMeSection: React.FC<AboutMeSectionProps> = ({ name, introduction, hobbies }) => {
    return (
        <section className="mb-12 bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
                {/* プロフィール画像 */}
                <Image
                    src="/profile.jpg" // プロフィール画像のパス
                    alt="Profile Picture"
                    width={80}
                    height={80}
                    className="rounded-full mr-4"
                />
                <h2 className="text-3xl font-semibold text-gray-800">Introduction</h2>
            </div>
            <p className="text-lg leading-relaxed mb-6 text-gray-700">
                Hello! I'm {name}, a web developer with a passion for building intuitive and efficient applications.
            </p>

            <div className="mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">About Me</h3>
                <p className="text-lg leading-relaxed text-gray-700">{introduction}</p>
            </div>

            <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Hobbies & Interests</h3>
                <p className="text-lg leading-relaxed text-gray-700">{hobbies}</p>
            </div>
        </section>
    );
};

export default AboutMeSection;