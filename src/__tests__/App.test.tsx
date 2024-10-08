import { describe, expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

describe("Elements correctly rendered on the web page", () => {
    test('renders main title React Photo Viewer', () => {
        render(<App />);
        const textElement = screen.getByText(/React Photo Viewer/i);
        expect(textElement).toBeInTheDocument();
    });

    test('renders main image', () => {
        render(<App />);
        const mainImg = screen.getByTestId("main-img");
        expect(mainImg).toBeInTheDocument();
    });

    test('renders thumbnails gallery', () => {
        render(<App />);
        const thumbnailsGallery = screen.getByTestId("thumbnails-gallery");
        expect(thumbnailsGallery).toBeInTheDocument();
    });
})

describe("Images testing", () => {
    test('Default main img is correct - snapshot test', () => {
        render(<App />);

        const mainImg = screen.getByTestId("main-img");

        //do not format spacing otherwise the snapshot would result different and make the test fail
        expect(mainImg).toMatchInlineSnapshot(`
          <img
            class="main-img"
            data-testid="main-img"
            src="https://images.pexels.com/photos/3359734/pexels-photo-3359734.jpeg"
          />
        `);

    });
    test("Default main img is correct - component test", () => {
        render(<App />);

        const mainImg = screen.getByTestId("main-img");

        expect(mainImg).toHaveAttribute("src", "https://images.pexels.com/photos/3359734/pexels-photo-3359734.jpeg");
    });
    test("Selected thumbnail becomes main image", () => {
        render(<App />);

        const mainImg = screen.getByTestId("main-img");

        const selectedThumb = screen.getByTestId("selected-thumb-8");

        // proving that the src attributes are correctly updated: before the click the url differs
        // console.log(mainImg.getAttribute("src"));
        // console.log(selectedThumb.getAttribute("src"));

        fireEvent.click(selectedThumb);

        // proving that the src attributes are correctly updated: after the click the url are the same
        // console.log(mainImg.getAttribute("src"));
        // console.log(selectedThumb.getAttribute("src"));

        expect(mainImg).toHaveAttribute("src", selectedThumb.getAttribute("src"));
    });
})