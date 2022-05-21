import { promises as fs } from 'fs';
import { existsSync } from 'node:fs';

const savePrimes = async (fileName: string, numArray: number[]) => {
  if (!fs.existsSync('./data')) {
    await fs.mkdir('./data');
  }
  await fs.mkdir('./data');
  await fs.appendFile(`./data/${fileName}.txt`, numArray + ' ');
};

const readSavedPrimes = async (fileName: string): Promise<number[]> => {
  const content = await fs.readFile(`./data/${fileName}.txt`, 'utf8');
  const strArr = content.split(' ');
  const arr: number[] = [];
  for (const s of strArr) {
    arr.push(+s);
  }
  return arr;
};

export { savePrimes, readSavedPrimes };
