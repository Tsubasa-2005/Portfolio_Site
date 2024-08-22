import Link from "next/link";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between">
                {/* 左側: ナビゲーションリンク */}
                <div className="mb-4 md:mb-0">
                    <h2 className="text-lg font-bold mb-2">Quick Links</h2>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/" className="hover:text-yellow-500">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:text-yellow-500">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/projects" className="hover:text-yellow-500">
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-yellow-500">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* 中央: ソーシャルメディアリンク */}
                <div className="mb-4 md:mb-0">
                    <h2 className="text-lg font-bold mb-2">Follow Me</h2>
                    <div className="flex space-x-4">
                        <a
                            href="https://twitter.com"
                            className="hover:text-yellow-500"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaTwitter size={24} />
                        </a>
                        <a
                            href="https://github.com"
                            className="hover:text-yellow-500"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub size={24} />
                        </a>
                    </div>
                </div>

                {/* 右側: 著作権情報 */}
                <div className="text-center md:text-right">
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;