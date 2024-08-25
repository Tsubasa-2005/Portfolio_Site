"use client";

import React, { useEffect, useState } from "react";

interface SkillDetail {
    id: string;
    name: string;
    description: string;
    level: number; // スキルレベルをパーセンテージで表す
    icon: string;
    url: string;  // 公式サイトのURL
}

interface SkillsSectionProps {
    skillID: string;
    userID: string;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skillID, userID }) => {
    const [skillDetails, setSkillDetails] = useState<SkillDetail[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchSkillDetails = async () => {
            try {
                const response = await fetch(`/api/${userID}/about/skillDetails/${skillID}`, {
                    cache: "no-store",
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch skill details");
                }

                const data = await response.json();
                setSkillDetails(data);
            } catch (error: any) {
                setError(error.message || "An error occurred");
            }
        };

        fetchSkillDetails();
    }, [skillID, userID]);

    if (error) {
        return <p>{error}</p>;
    }

    if (!skillDetails.length) {
        return <p>Loading...</p>;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {skillDetails.map((skill) => (
                <div key={skill.id} className="p-6 bg-white rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-2">
                        <a
                            href={skill.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black hover:text-blue-500 transition duration-300"
                        >
                            {skill.name}
                        </a>
                    </h3>
                    <p className="text-gray-700 mb-4">{skill.description}</p>
                    <div className="mb-4">
                        {/* プログレスバーとラベル */}
                        <div className="flex justify-between items-center mb-1">
                            <span className="text-sm font-medium text-gray-700">習熟度</span>
                            <span className="text-sm font-medium text-gray-700">{skill.level}%</span>
                        </div>
                        <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden">
                            <div
                                className="h-full rounded-full"
                                style={{
                                    width: `${skill.level}%`,
                                    background: `linear-gradient(90deg, #00c6ff, #0072ff)`,
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SkillsSection;
