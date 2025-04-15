type Props = {
    title: string;
    image: string;
    score: number;
};

export function ItemCard({ title, image, score }: Props) {
    return (
        <div className="custom-card img-card flex w-80 overflow-hidden rounded-xl border border-violet-500 align-middle shadow-md transition-all hover:shadow-lg md:w-56 lg:w-60 xl:w-80">
            <img
                src={image}
                alt={title}
                className="rounded-l-xl object-cover"
            />
            <div className="flex flex-col justify-center p-4">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-gray-600">⭐ {score}</p>
            </div>
        </div>
    );
}
