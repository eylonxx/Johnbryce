import express, { NextFunction, Request, Response } from "express";
import logic from "../5-logic/games-logic";
import consoleLogPost from "../3-middleware/post-to-console";
import GameModel from "../4-models/game-model";
import verifyLoggedIn from "../3-middleware/verify-logged-in";
import verifyAdmin from "../3-middleware/verify-admin";

const router = express.Router(); // Capital R for the Router function!

// GET http://localhost:3001/api/games
router.get("/games", async (request: Request, response: Response, next: NextFunction) => {

    try {

        // Get all games: 
        const games = await logic.getAllGames();

        // Demo for crash:
        // const n = Math.PI.toFixed(-5);

        // Return json (status code = 200):
        response.json(games);

    }
    catch (err: any) {
        next(err);
    }

});

// GET http://localhost:3001/api/games/3
router.get("/games/:id([0-9]+)", async (request: Request, response: Response, next: NextFunction) => {

    try {

        // Take id from the route: 
        const id = +request.params.id;

        // Get suitable game: 
        const game = await logic.getOneGame(id);

        // Return json (status code = 200):
        response.json(game);

    }
    catch (err: any) {
        next(err);
    }

});

// POST http://localhost:3001/api/games
router.post("/games", verifyLoggedIn, async (request: Request, response: Response, next: NextFunction) => {

    try {

        // Take the json object sent by frontend from the body.
        // Note: we must tell express to extract json object from the request body and create the following request.body object! This is done in app.ts

        const game = new GameModel(request.body);

        // Add game to database: 
        const addedGame = await logic.addGame(game);

        // Return added game with status code 201:
        response.status(201).json(addedGame);

    }
    catch (err: any) {
        next(err);
    }

});

// PUT http://localhost:3001/api/games/3 <-- ids are always sent in the route!
router.put("/games/:id([0-9]+)", verifyLoggedIn, async (request: Request, response: Response, next: NextFunction) => {

    try {

        // Take id from the route: 
        const id = +request.params.id;

        // Enter id to request.body which not mandatory to contain id: 
        request.body.id = id;

        // Take game from the body (can contain id but not mandatory)
        const game = new GameModel(request.body);

        // Update given game: 
        const updatedGame = await logic.updateFullGame(game);

        // Return json (status code = 200):
        response.json(updatedGame);

    }
    catch (err: any) {
        next(err);
    }

});

// PATCH http://localhost:3001/api/games/3 <-- ids are always sent in the route!
router.patch("/games/:id([0-9]+)", verifyLoggedIn, async (request: Request, response: Response, next: NextFunction) => {

    try {

        // Take id from the route: 
        const id = +request.params.id;

        // Enter id to request.body which not mandatory to contain id: 
        request.body.id = id;

        // Take game from the body (can contain id but not mandatory)
        const game = new GameModel(request.body);

        // Update given game: 
        const updatedGame = await logic.updatePartialGame(game);

        // Return json (status code = 200):
        response.json(updatedGame);

    }
    catch (err: any) {
        next(err);
    }

});

// DELETE http://localhost:3001/api/games/3 <-- ids are always sent in the route!
router.delete("/games/:id([0-9]+)", verifyAdmin, async (request: Request, response: Response, next: NextFunction) => {

    try {

        // Take id from the route: 
        const id = +request.params.id;

        // Delete game: 
        await logic.deleteGame(id);

        // Return empty response:
        response.sendStatus(204); // status + send empty body

    }
    catch (err: any) {
        next(err);
    }

});


// GET http://localhost:3001/api/games/search-by-min-age/:minAge 
// Return all games with minAge lower or equal to the :minAge parameter
router.get("/games/search-by-min-age/:minAge", async (request: Request, response: Response, next: NextFunction) => {

    try {

        // Take given min age: 
        const minAge = +request.params.minAge;

        // Get all matching games: 
        const games = await logic.getGamesByMinAge(minAge);

        // Return json (status code = 200):
        response.json(games);

    }
    catch (err: any) {
        next(err);
    }

});


export default router; // Export all routes from this controller.