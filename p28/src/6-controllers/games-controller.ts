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

export default router;
