import { ImgObjet } from '../globals';

export type MangaTops = {
    approved: boolean;
    // authors: (2) [{…}, {…}]
    background: string;
    chapters: number;
    // demographics: [{…}]
    // explicit_genres: []
    favorites: number;
    // genres: (3) [{…}, {…}, {…}]
    images: { jpg: ImgObjet; webp: ImgObjet };
    mal_id: number;
    members: number;
    popularity: number;
    published: { from: string; to: string; string: string };
    publishing: boolean;
    rank: number;
    score: number;
    scored: number;
    scored_by: number;
    // serializations: [{…}]
    status: string;
    synopsis: string;
    // themes: (2) [{…}, {…}]
    title: string;
    title_english: string;
    title_japanese: string;
    // title_synonyms: []
    // titles: (3) [{…}, {…}, {…}]
    type: string;
    url: string;
    volumes: number;
};
