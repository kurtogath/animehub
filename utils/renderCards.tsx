import { ItemCard } from '@/components/cards/ItemCard';
import { AnimeTops } from '../types/tops/anime';

export function renderAnimeCards(animes: AnimeTops[]) {
    if (animes.length === 0) return null;
    return animes.map((anime, id) => (
        <ItemCard
            key={id}
            title={anime.title}
            image={anime.images.webp.image_url}
            score={anime.score}
        />
    ));
}
