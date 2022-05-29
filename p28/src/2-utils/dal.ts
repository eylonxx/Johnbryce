// DAL = Data Access Layer - the only code accessing the database

import fs from "fs/promises";
import GameModel from "../4-models/game-model";
import UserModel from "../4-models/user-model";

// When accessing files, Node.js searches the path from the root directory:
const gamesJsonPath = "./src/1-assets/db/games.json";
const usersJsonPath = "./src/1-assets/db/users.json";

async function fetchGames(): Promise<GameModel[]> {
    const content: string = await fs.readFile(gamesJsonPath, "utf8");
    const games: GameModel[] = JSON.parse(content);
    return games;
}

async function saveGames(games: GameModel[]): Promise<void> {
    const content: string = JSON.stringify(games, null, 4);
    await fs.writeFile(gamesJsonPath, content);
}

async function fetchUsers(): Promise<UserModel[]> {
    const content: string = await fs.readFile(usersJsonPath, "utf8");
    const users: UserModel[] = JSON.parse(content);
    return users;
}

async function saveUsers(users: UserModel[]): Promise<void> {
    const content: string = JSON.stringify(users, null, 4);
    await fs.writeFile(usersJsonPath, content);
}

export default {
    fetchGames,
    saveGames,
    fetchUsers,
    saveUsers
}