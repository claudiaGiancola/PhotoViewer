import "@testing-library/jest-dom";
import { render } from '@testing-library/react';
import App from "./App";

describe("Elements correctly rendered on the web page", () => {
    test('renders main title React Photo Viewer', () => {
        const { getByText } = render(<App />);
        const textElement = getByText(/React Photo Viewer/i);
        expect(textElement).toBeInTheDocument();
    });
    
    test('renders main image', () => {
        const { getByTestId } = render(<App />);
        const mainImg = getByTestId("main-img");
        expect(mainImg).toBeInTheDocument();
    });

    test('renders thumbnails gallery', () => {
        const { getByTestId } = render(<App />);
        const thumbnailsGallery = getByTestId("thumbnails-gallery");
        expect(thumbnailsGallery).toBeInTheDocument();
    });
})