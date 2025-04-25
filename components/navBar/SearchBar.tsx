'use client';
import { Search } from 'lucide-react';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function SearchBar() {
    const [search, setSearch] = useState<string>('');
    const router = useRouter();

    const handleSearch = () => {
        if (search.trim() === '') return;
        router.push(`/search?q=${encodeURIComponent(search.trim())}`);
        setSearch('');
    };

    const handleKeyUp = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && search.trim() !== '') {
            handleSearch();
        }
    };

    return (
        <div className="search-bar w-full max-w-sm min-w-[200px]">
            <div className="relative">
                <input
                    className="ease w-full rounded-md border border-slate-200 bg-transparent py-2 pr-28 pl-3 text-sm text-slate-700 shadow-sm transition duration-300 placeholder:text-slate-400 hover:border-slate-300 focus:border-slate-400 focus:shadow focus:outline-none"
                    placeholder="Buscar anime"
                    value={search}
                    onChange={(val) => setSearch(val.currentTarget.value)}
                    onKeyUp={handleKeyUp}
                />
                <button
                    className="absolute top-1 right-1 flex items-center rounded border border-transparent bg-slate-800 px-2.5 py-1 text-center text-sm text-white shadow-sm transition-all hover:bg-slate-700 hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    onClick={handleSearch}
                >
                    <Search size={16} /> &nbsp; Buscar
                </button>
            </div>
        </div>
    );
}
