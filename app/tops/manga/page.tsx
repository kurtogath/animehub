'use client';
import { ItemCard } from '@/components/cards/ItemCard';
import { MangaTops } from '@/types/tops';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Manga() {
    const [mangas, setMangas] = useState<MangaTops[]>([]);

    useEffect(() => {
        axios.get('/api/tops?type=manga').then((res) => {
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

    return <>{renderMangaTops(mangas)}</>;
}
