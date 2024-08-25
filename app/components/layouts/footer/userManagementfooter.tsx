// app/components/layouts/userManagement/Footer.tsx
import React from 'react';

const UserManagementFooter = () => {
    return (
        <footer className="bg-blue-700 text-white py-8">
            <div className="container mx-auto text-center">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default UserManagementFooter;
