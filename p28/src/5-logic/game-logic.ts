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

async function updateFullGame(game: GameModel): Promise<GameModel> {
  const games = await dal.fetchGames();
  const gameToUpdate = games.find((g) => g.id === game.id);
  for (const prop in gameToUpdate) {
    gameToUpdate[prop] = game[prop];
  }
  await dal.saveGames(games);
  return gameToUpdate;
}

async function updatePartialGame(game: GameModel): Promise<GameModel> {
  const games = await dal.fetchGames();
  const gameToUpdate = games.find((g) => g.id === game.id);
  for (const prop in gameToUpdate) {
    if (game[prop] !== undefined) {
      gameToUpdate[prop] = game[prop];
    }
  }
  await dal.saveGames(games);
  return gameToUpdate;
}

async function deleteGame(id: number): Promise<void> {
  const games = await dal.fetchGames();
  const index = games.findIndex((g) => g.id === id);
  games.splice(index, 1);
  await dal.saveGames(games);
}

export default {
  getAllGames,
  getOneGame,
  addGame,
  updateFullGame,
  updatePartialGame,
  deleteGame,
};
