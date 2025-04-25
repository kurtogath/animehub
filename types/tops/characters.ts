import { ImgObjet } from '../globals';

export type CharactersTops = {
    about: string;
    favorites: number;
    images: {
        jpg: ImgObjet;
        webp: ImgObjet;
    };
    mal_id: number;
    name: string;
    name_kanji: string;
    nicknames: string[];
    url: string;
};
