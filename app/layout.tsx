import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ".//globals.css";
import UserManagementHeader from "@/app/components/layouts/header/userManagementHeader";
import UserManagementFooter from "@/app/components/layouts/footer/userManagementfooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "User Management",
    description: "Manage and view users in the system",
};

export default function UsersLayout({
        children,
    }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja">
        <body className={inter.className}>
        <UserManagementHeader />
        <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
            {children}
        </main>
        <UserManagementFooter />
        </body>
        </html>
    );
}
