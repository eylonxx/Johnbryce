import fs from 'fs/promises';
import GameModel from '../4-models/game-model';

const jsonPath = './src/1-assets/db/games.json';
async function fetchGames(): Promise<GameModel[]> {
  const content: string = await fs.readFile(jsonPath, 'utf-8');
  const games: GameModel[] = JSON.parse(content);
  return games;
}

async function saveGames(games: GameModel[]): Promise<void> {
  const content: string = JSON.stringify(games, null, 4);
  await fs.writeFile(jsonPath, content);
}
export default {
  fetchGames,
  saveGames,
};
