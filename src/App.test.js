import { render, screen } from '@testing-library/react';
import App from './App';

describe("App Component", () => {
  test('renders h1 text context', () => {
    render(<App />);
    const headElement = screen.getByRole("heading", {level: 1});
    expect(headElement).toBeInTheDocument();
  });

  test('renders p text context', () => {
    render(<App />);
    const paraElement = screen.getByText("Build and test your app");
    expect(paraElement).toBeInTheDocument();
  });
});




