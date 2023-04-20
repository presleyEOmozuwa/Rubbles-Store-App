import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import Movie from './Movie';

describe("Movie Component", () => {
    beforeEach(() => {
        render(<Movie directorName={"Mark Slay"}/>);
    });
    
    it("renders director's full names", () => {
        const paraElement = screen.getByTestId("director");
        expect(paraElement).toHaveTextContent("Movie Director : Mark Slay");
    });

    it("renders initial text content of 'Old Movies'", () => {
        const headElement = screen.getByRole("heading", {level: 1});
        expect(headElement).toHaveTextContent("Old Movies");
    });

    it("renders text content of 'Current Movies' after button clicked", async () => {
        const user = userEvent.setup()
        const btnElement = screen.getByRole("button", {name: "Show"});
        await act( async () => {
            await user.click(btnElement);
        });
        const headElement = screen.getByRole("heading", {level: 1});
        expect(headElement).toHaveTextContent("Current Movies");
    });
});