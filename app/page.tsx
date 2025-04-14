"use client";

import Link from "next/link";

export default function Page() {
    return (
        <div className="grid grid-cols-1 justify-items-center gap-8 px-8 py-0 md:grid-cols-2 xl:grid-cols-3">
            <Link href="/tops/anime">
                <div className="custom-card flex w-80 overflow-hidden rounded-xl border border-violet-500 align-middle shadow-md transition-all hover:shadow-lg md:w-56 lg:w-60 xl:w-80">
                    <div className="flex flex-col justify-center p-4">
                        <h3 className="text-lg font-semibold">
                            Mejores animes
                        </h3>
                    </div>
                </div>
            </Link>
            <div className="custom-card flex w-80 overflow-hidden rounded-xl border border-violet-500 align-middle shadow-md transition-all hover:shadow-lg md:w-56 lg:w-60 xl:w-80">
                <div className="flex flex-col justify-center p-4">
                    <h3 className="text-lg font-semibold">
                        Tops mangas (en construcción)
                    </h3>
                </div>
            </div>
        </div>
    );
}
