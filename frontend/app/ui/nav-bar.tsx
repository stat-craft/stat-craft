"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Example() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="text-lg font-bold">
                    <Link href="/">Call of Cthulhu</Link>
                </div>

                {/* Links for larger screens */}
                <div className="hidden md:flex space-x-6">
                    <Link href="/" className="hover:text-green-400 transition-colors">
                        Home
                    </Link>
                    <a href="#" className="hover:text-green-400 transition-colors">
                        About
                    </a>
                    <a href="#" className="hover:text-green-400 transition-colors">
                        Features
                    </a>
                    <a href="#" className="hover:text-green-400 transition-colors">
                        Contact
                    </a>
                </div>

                {/* Sign In / Sign Out Buttons */}
                <div className="hidden md:flex space-x-4">
                    <Link href="/signin">
                        <button className="px-4 py-2 bg-green-400 text-gray-900 rounded-md hover:bg-green-300">
                            Sign In
                        </button>
                    </Link>
                    <Link href="/signup">
                        <button className="px-4 py-2 bg-gray-700 rounded-md hover:bg-gray-600">
                            Sign Up
                        </button>
                    </Link>
                </div>

                {/* Hamburger menu for smaller screens */}
                <button
                    className="block md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-8 h-8"
                    >
                        <path
                            fillRule="evenodd"
                            d="M4.5 6.75a.75.75 0 000 1.5h15a.75.75 0 000-1.5h-15zm0 4.5a.75.75 0 000 1.5h15a.75.75 0 000-1.5h-15zm0 4.5a.75.75 0 000 1.5h15a.75.75 0 000-1.5h-15z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-gray-800">
                    <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-700 hover:text-green-400"
                    >
                        Home
                    </a>
                    <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-700 hover:text-green-400"
                    >
                        About
                    </a>
                    <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-700 hover:text-green-400"
                    >
                        Features
                    </a>
                    <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-700 hover:text-green-400"
                    >
                        Contact
                    </a>
                    <div className="flex flex-col space-y-2 px-4 mt-2">
                        <button className="w-full px-4 py-2 bg-green-400 text-gray-900 rounded-md hover:bg-green-300">
                            Sign In
                        </button>
                        <button className="w-full px-4 py-2 bg-gray-700 rounded-md hover:bg-gray-600">
                            Sign Out
                        </button>
                    </div>
                </div>
            )}
        </nav>
    )
}
