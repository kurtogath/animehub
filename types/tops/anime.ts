import { ImgObjet } from "../globals";

export type AnimeTops = {
    // aired: {from: string, to: string, prop: {…}, string: string}
    airing: boolean;
    approved: boolean;
    background: string;
    // broadcast: {day: string, time: string, timezone: string, string: string}
    // demographics: [{…}]
    duration: string;
    episodes: number;
    // explicit_genres: []
    favorites: number;
    // genres: (3) [{…}, {…}, {…}]
    images: {
        jpg: ImgObjet;
        webp: ImgObjet;
    };
    // licensors: [{…}]
    mal_id: number;
    members: number;
    popularity: number;
    // producers: (6) [{…}, {…}, {…}, {…}, {…}, {…}]
    rank: number;
    rating: string;
    score: number; //decimales
    scored_by: number;
    season: string;
    source: string;
    status: string;
    // studios: [{…}]
    synopsis: string;
    // themes: []
    title: string;
    // title_english:string
    // title_japanese:string
    // title_synonyms: (2) [string]
    // titles: (5) [{…}, {…}, {…}, {…}, {…}]
    // trailer: {youtube_id: string, url: string, embed_url: string, images: {…}}
    type: string;
    url: string;
    year: number;
};
