"use client";

import Link from "next/link";

export default function Page() {
    return (
        <>
            <Link href="/tops/anime">
                <div className="custom-card main-page w-80 items-center rounded-xl border p-4 shadow-md transition-all hover:shadow-lg md:w-56 lg:w-60 xl:w-80">
                    <h3 className="text-center text-lg font-semibold">
                        Mejores animes
                    </h3>
                </div>
            </Link>
            <Link href="/tops/manga">
                <div className="custom-card main-page w-80 items-center rounded-xl border p-4 shadow-md transition-all hover:shadow-lg md:w-56 lg:w-60 xl:w-80">
                    <h3 className="text-center text-lg font-semibold">
                        Mejores mangas
                    </h3>
                </div>
            </Link>

            <Link href="/tops/characters">
                <div className="custom-card main-page w-80 items-center rounded-xl border p-4 shadow-md transition-all hover:shadow-lg md:w-56 lg:w-60 xl:w-80">
                    <h3 className="text-center text-lg font-semibold">
                        Personajes mas buscados
                    </h3>
                </div>
            </Link>
        </>
    );
}
