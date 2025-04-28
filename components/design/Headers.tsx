'use client';
import { User } from 'lucide-react';
import Link from 'next/link';
import { SearchBar } from '../navBar/SearchBar';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-gray-900 p-4 text-white shadow-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between">
                <Link href="/" className="text-2xl font-bold">
                    AnimeHub
                </Link>
                <nav className="flex space-x-4">
                    <SearchBar />
                    <Link
                        href="/"
                        className="flex items-center hover:text-gray-300"
                    >
                        Inicio
                    </Link>
                    <Link
                        href="/login"
                        className="flex items-center hover:text-gray-300"
                    >
                        <User />
                    </Link>
                </nav>
            </div>
        </header>
    );
}
