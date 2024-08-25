// components/ProjectSection.tsx
import React from 'react';
import { GetProjectDetailsByProjectIDRow } from '@/lib/infra/rdb/project_details_sql';

interface ProjectSectionProps {
    section: GetProjectDetailsByProjectIDRow;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ section }) => {
    return (
        <div key={section.id} className="mb-12 p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-600">{section.sectionName}</h2>
            <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-wrap">{section.content}</p>
        </div>
    );
};

export default ProjectSection;