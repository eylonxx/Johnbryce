import dal from '../2-utils/dal';
import GameModel from '../4-models/game-model';

async function getAllGames(): Promise<GameModel[]> {
  const games = await dal.fetchGames();
  return games;
}
async function getOneGame(id: number): Promise<GameModel> {
  const games = await dal.fetchGames();
  const game = games.find((game) => game.id === id);
  return game;
}
async function addGame(game: GameModel): Promise<GameModel> {
  const games = await dal.fetchGames();
  game.id = game[games.length - 1].id + 1;
  games.push(game);
  await dal.saveGames(games);
  return game;
}
export default {
  getAllGames,
  getOneGame,
  addGame,
};
