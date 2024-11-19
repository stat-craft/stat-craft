"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsAuthenticated(!!token);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsAuthenticated(false);
        router.push("/signin");
    };

    return (
        <nav className="bg-background border-b border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center space-x-2">
                            {/* <Scroll className="h-6 w-6 text-primary" /> */}
                            <span className="font-bold text-lg">Cthulhu Creator</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-4">
                        {isAuthenticated ? (
                            <>
                                <Link href="/characters" className="text-muted-foreground hover:text-primary transition-colors">
                                    My Characters
                                </Link>
                                <button onClick={handleLogout}>
                                    Sign Out
                                </button>
                            </>
                        ) : (
                            <>
                                <Link href="/signin">
                                    <button>Sign In</button>
                                </Link>
                                <Link href="/signup">
                                    <button>Sign Up</button>
                                </Link>
                            </>
                        )}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >

                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-border">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {isAuthenticated ? (
                            <>
                                <Link
                                    href="/characters"
                                    className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors"
                                >
                                    My Characters
                                </Link>
                                <button

                                    className="w-full mt-2"
                                    onClick={handleLogout}
                                >
                                    Sign Out
                                </button>
                            </>
                        ) : (
                            <>
                                <Link href="/signin" className="block">
                                    <button className="w-full">
                                        Sign In
                                    </button>
                                </Link>
                                <Link href="/signup" className="block mt-2">
                                    <button className="w-full">Sign Up</button>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
}