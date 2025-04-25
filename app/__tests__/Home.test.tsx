import HomePage from "@/app/page";
import { render, screen } from "@testing-library/react";

describe("HomePage test", () => {
    const setup = () => {
        render(<HomePage />);
    };

    it("renders homepage", () => {
        setup();
        expect(screen.getByText("Mejores animes")).toBeInTheDocument();
    });
});
