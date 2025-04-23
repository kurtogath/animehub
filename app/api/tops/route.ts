// app/api/tops/route.ts
import { CharactersTops, MangaTops } from "@/types/tops";
import axios from "axios";
import { NextResponse } from "next/server";
import { AnimeTops } from "../../../types/tops/anime";

function parseAnimeData(res: any) {
    const resp: AnimeTops[] = res.map((anime: AnimeTops) => ({
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
    }));
    return resp;
}

function parseMangaData(res: any) {
    const resp: MangaTops[] = res.map((manga: MangaTops) => ({
        approved: manga.approved,
        background: manga.background,
        chapters: manga.chapters,
        favorites: manga.favorites,
        images: manga.images,
        mal_id: manga.mal_id,
        members: manga.members,
        popularity: manga.popularity,
        published: manga.published,
        publishing: manga.publishing,
        rank: manga.rank,
        score: manga.score,
        scored: manga.scored,
        scored_by: manga.scored_by,
        status: manga.status,
        synopsis: manga.synopsis,
        title: manga.title,
        title_english: manga.title_english,
        title_japanese: manga.title_japanese,
        type: manga.type,
        url: manga.url,
        volumes: manga.volumes,
    }));
    return resp;
}

function parseCharacterData(res: any) {
    const resp: CharactersTops[] = res.map((character: CharactersTops) => ({
        about: character.about,
        favorites: character.favorites,
        images: character.images,
        mal_id: character.mal_id,
        name: character.name,
        name_kanji: character.name_kanji,
        nicknames: character.nicknames,
        url: character.url,
    }));

    return resp
}

function parseData(res:any, type:string) {
    let data = null 
    switch (type) {
        case "anime":
            data = parseAnimeData(res);
            break;

        case "manga":
            data = parseMangaData(res);
            break;

        case "characters":
            data = parseCharacterData(res);
            break;

        default:
    break;
    } 

    return data
}

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const type = searchParams.get("type") || "anime";

    const allowedTypes = ["anime", "manga", "characters"];
    if (!allowedTypes.includes(type)) {
        return NextResponse.json(
            { error: `Tipo '${type}' no soportado.` },
            { status: 400 },
        );
    }

    try {
        const res = await axios.get(`https://api.jikan.moe/v4/top/${type}`);

        if (res.status !== 200) {
            return NextResponse.json(
                { error: "Error al obtener datos" },
                { status: 500 },
            );
        }
        const resp = parseData(res.data.data, type) 

        if (resp === null) {
            return NextResponse.json(
                { error: "Error al parsear los datos" },
                { status: 500 },
            );
        }

        return NextResponse.json(resp);
    } catch (error) {
        console.log("error => ",error)
        return NextResponse.json(
            { error: "Error del servidor" },
            { status: 500 },
        );
    }
}
