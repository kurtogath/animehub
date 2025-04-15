"use client";
import { ItemCard } from "@/components/cards/ItemCard";
import { MangaTops } from "@/types/tops";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Manga() {
    const [mangas, setMangas] = useState<MangaTops[]>([]);

    useEffect(() => {
        axios.get("/api/tops?type=manga").then((res) => {
            setMangas(res.data);
        });
    }, []);

    function renderMangaTops(mangas: MangaTops[]) {
        if (mangas.length === 0) return null;
        return mangas.map((anime) => (
            <ItemCard
                key={anime.mal_id}
                title={anime.title}
                image={anime.images.webp.large_image_url}
                score={anime.score}
            />
        ));
    }

    return (
        <div className="grid grid-cols-1 justify-items-center gap-8 px-8 py-0 md:grid-cols-2 xl:grid-cols-3">
            {renderMangaTops(mangas)}
        </div>
    );
}
