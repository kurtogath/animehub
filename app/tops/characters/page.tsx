'use client';
import { ItemCard } from '@/components/cards/ItemCard';
import { CharactersTops } from '@/types/tops';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Characters() {
    const [characters, setCharacters] = useState<CharactersTops[]>([]);

    useEffect(() => {
        axios.get('/api/tops?type=characters').then((res) => {
            setCharacters(res.data);
        });
    }, []);

    function renderCharacterList(characters: CharactersTops[]) {
        if (characters.length === 0) return null;
        return characters.map((anime) => (
            <ItemCard
                key={anime.mal_id}
                title={anime.name}
                image={anime.images.webp.image_url}
                score={anime.favorites}
            />
        ));
    }

    return <>{renderCharacterList(characters)}</>;
}
