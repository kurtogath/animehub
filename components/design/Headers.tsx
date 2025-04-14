"use client";
import Link from "next/link";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-gray-900 p-4 text-white shadow-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between">
                <Link href="/" className="text-2xl font-bold">
                    AnimeHub
                </Link>
                <nav className="space-x-4">
                    <Link href="/" className="hover:text-gray-300">
                        Inicio
                    </Link>
                </nav>
            </div>
        </header>
    );
}
