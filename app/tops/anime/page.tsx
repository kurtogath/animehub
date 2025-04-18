"use client";
import { ItemCard } from "@/components/cards/ItemCard";
import { AnimeTops } from "@/types/tops";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Anime() {
    const [animes, setAnimes] = useState<AnimeTops[]>([]);

    useEffect(() => {
        axios.get("/api/tops?type=anime").then((res) => {
            setAnimes(res.data);
        });
    }, []);

    function renderAnimeCards(animes: AnimeTops[]) {
        if (animes.length === 0) return null;
        return animes.map((anime) => (
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
            {renderAnimeCards(animes)}
        </div>
    );
}
