import express, { Request, Response } from 'express';
import gameLogic from '../5-logic/game-logic';

const router = express.Router();

router.get('/api/games', async (req: Request, res: Response) => {
  const games = await gameLogic.getAllGames();
  res.json(games);
});

router.get('/api/games/:gameId', async (req: Request, res: Response) => {
  const game = await gameLogic.getOneGame(+req.params.gameId);
  res.json(game);
});

router.post('/api/games', async (req: Request, res: Response) => {
  const game = req.body;
  const addedGame = await gameLogic.addGame(game);
  res.json(addedGame);
  res.status(201).json(addedGame);
});

router.put('/api/games/:gameId', async (req: Request, res: Response) => {
  const id = +req.params.gameId;
  req.body.id = id;
  const game = req.body;
  const updatedGame = await gameLogic.updateFullGame(game);
  res.json(updatedGame);
});

router.patch('/api/games/:gameId', async (req: Request, res: Response) => {
  const id = +req.params.gameId;
  req.body.id = id;
  const game = req.body;
  const updatedGame = await gameLogic.updatePartialGame(game);
  res.json(updatedGame);
});

router.delete('/api/games/:gameId', async (req: Request, res: Response) => {
  const id = +req.params.gameId;
  await gameLogic.deleteGame(id);
  res.sendStatus(204);
});

router.get('/api/games/search-by-min-age/:minAge', async (req: Request, res: Response) => {
  const minAge = +req.params.minAge;
  const games = await gameLogic.findByMinAge(minAge);
  res.json(games);
});

export default router;
