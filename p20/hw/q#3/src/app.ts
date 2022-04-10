import Square from './Square';
import Rectangle from './Rectangle';
import Circle from './Circle';
import Shape from './Shape';

const ribua = new Square('black', 5);
// ribua.display();

const malben = new Rectangle('green', 5, 10);
// malben.display();

const igul = new Circle('yellow', 4);
// igul.display();

let choice: Shape;
let rand = Math.floor(Math.random() * 3 + 1);
switch (rand) {
  case 1:
    choice = ribua;
    break;
  case 2:
    choice = malben;
    break;
  case 3:
    choice = igul;
    break;
  default:
    console.log('haha');
    break;
}
// choice.display();

let arr: Shape[] = [];
const randInfo = (): number => {
  return Math.floor(Math.random() * 20);
};
for (let i = 0; i < 20; i++) {
  let rand = Math.floor(Math.random() * 3 + 1);
  let chosenShape: Shape;
  if (rand === 1) chosenShape = new Square('orange', randInfo());
  if (rand === 2) chosenShape = new Rectangle('orange', randInfo(), randInfo());
  if (rand === 3) chosenShape = new Circle('orange', randInfo());
  arr.push(chosenShape);
}

arr.forEach((shape) => shape.display());
