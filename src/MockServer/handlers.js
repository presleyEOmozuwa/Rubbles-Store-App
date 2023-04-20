import { rest } from 'msw'
export const handlers = [
    rest.get("https://jsonplaceholder.typicode.com/users", (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json([
                {id: 1, name: "Blake", username: "blake88"},
                {id: 2, name: "Eddy", username: "eddy204"},
                {id: 3, name: "Mary", username: "mary85"}
            ])
        );
    })
];