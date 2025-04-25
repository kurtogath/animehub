import { render, screen } from "@testing-library/react";
import { ItemCard } from "../ItemCard";

describe("Item Card", () => {
    const setup = () => {
        render(
            <ItemCard title="Blue Lock" image="/public/react.svg" score={10} />,
        );
    };

    it("renders anime title", () => {
        setup();
        expect(screen.getByText("Blue Lock")).toBeInTheDocument();
    });

    it("renders anime title", () => {
        setup();
        expect(screen.getByText("⭐ 10")).toBeInTheDocument();
    });
});
