import "@testing-library/jest-dom";
import { render } from '@testing-library/react';
import App from "./App";

test('renders Hello world text', () => {
    const { getByText } = render(<App />);
    const textElement = getByText(/React Photo Viewer/i);
    expect(textElement).toBeInTheDocument();
});