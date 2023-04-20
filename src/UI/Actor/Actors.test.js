import { render, screen } from '@testing-library/react';
import { expect, test } from '@jest/globals';
import { act } from 'react-dom/test-utils';
import { getRequest }  from './Utils';
import Actors from './Actors';
import { server } from '../../MockServer/server';
import { rest } from 'msw';


describe("Actors Component", () => {
    test("renders heading", () => {
        render(<Actors />);
        expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    });

    test("fetches data from mock server", async () => {
        render(<Actors />);
        let res = {};
        
        let url = "https://jsonplaceholder.typicode.com/users"
        
        await act(async () => {
            res = await getRequest(url);
        });
        
        expect(res.data).toEqual([
            { id: 1, name: "Blake", username: "blake88" },
            { id: 2, name: "Eddy", username: "eddy204" },
            { id: 3, name: "Mary", username: "mary85" }
        ]);
    });

    

    test("renders list of actors", async () => {
        render(<Actors />);
        const actorElem = await screen.findAllByRole("listitem");
        expect(actorElem).toHaveLength(3);
    });



    // test("handles failed request from mock server", async () => {
    //     server.use(
    //         rest.get("https://jsonplaceholder.typicode.com/users", (req, res, ctx) => {
    //             return res(ctx.status(404));
    //         })
    //     );
    //     render(<Actors />);
    //     await expect(getRequest("https://jsonplaceholder.typicode.com/users")).rejects.toThrow("404");
    // });
});