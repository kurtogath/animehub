'use client';
import { AnimeTops } from '@/types/tops';
import { renderAnimeCards } from '@/utils';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Anime() {
    const [animes, setAnimes] = useState<AnimeTops[]>([]);

    useEffect(() => {
        axios.get('/api/tops?type=anime').then((res) => {
            setAnimes(res.data);
        });
    }, []);

    return <>{renderAnimeCards(animes)}</>;
}
