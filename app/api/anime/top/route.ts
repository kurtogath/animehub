// app/api/anime/top/route.ts
import { AnimeTops } from "@/types/tops";
import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const res = await axios.get("https://api.jikan.moe/v4/top/anime");

        if (res.status !== 200 ) {
            return NextResponse.json({ error: 'Error al obtener animes' }, { status: 500 })
        }
        // Obtenemos los datos
        const resp: AnimeTops[] = res.data.data.map(
            (anime: AnimeTops) => ({
                airing: anime.airing,
                approved: anime.approved,
                background: anime.background,
                duration: anime.duration,
                episodes: anime.episodes,
                favorites: anime.favorites,
                images: {
                    jpg: anime.images.jpg,
                    webp: anime.images.webp,
                },
                mal_id: anime.mal_id,
                members: anime.members,
                popularity: anime.popularity,
                rank: anime.rank,
                rating: anime.rating,
                score: anime.score,
                scored_by: anime.scored_by,
                season: anime.season,
                source: anime.source,
                status: anime.status,
                synopsis: anime.synopsis,
                title: anime.title,
                type: anime.type,
                url: anime.url,
                year: anime.year,
            }),
        );

        return NextResponse.json(resp);
    } catch (error) {
        return NextResponse.json(
            { error: "Error del servidor" },
            { status: 500 },
        );
    }
}
