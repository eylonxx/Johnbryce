import dal from '../2-utils/dal';
import GameModel from '../4-models/game-model';

async function getAllGames(): Promise<GameModel[]> {
  const games = await dal.fetchGames();
  return games;
}

export default {
  getAllGames,
};
