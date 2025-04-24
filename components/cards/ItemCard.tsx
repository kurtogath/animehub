type Props = {
    title: string;
    image: string;
    score: number;
};

export function ItemCard({ title, image, score }: Props) {
    return (
        <div className="custom-card img-card flex w-full max-w-2xl overflow-hidden rounded-xl border border-violet-500 shadow-md transition-all hover:shadow-lg">
            <div className="flex-shrink-0 basis-4/10">
                <img
                    src={image}
                    alt={title}
                    className="h-full w-full rounded-l-xl object-cover"
                />
            </div>
            <div className="flex basis-5/8 flex-col justify-center p-4">
                <h3 className="line-clamp-3 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-gray-600">⭐ {score}</p>
            </div>
        </div>
    );
}
