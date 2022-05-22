import express, { Request, Response } from 'express';
import gameLogic from '../5-logic/game-logic';

const router = express.Router();

router.get('/api/games', async (req: Request, res: Response) => {
  const games = await gameLogic.getAllGames();
  res.json(games);
});

export default router;
