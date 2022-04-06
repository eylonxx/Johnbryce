import Guitar from './Guitar';
import Drums from './Drums';
import Piano from './Piano';
import GrandPiano from './GrandPiano';
import Instrument from './Instrument';

const myGuitar = new Guitar('J200', 'Gibson', 'Orange', 6);
const myDrums = new Drums('FP-10', 'Roland', 'White', 60);
const myPiano = new Piano('K-21', 'Steinway', 'Black', 88);
const myGrandPiano = new GrandPiano('Model-D', 'Steinway', 'Black', 88, 170);

let randNum = Math.floor(Math.random() * 4 + 1);
let choice: Instrument;
switch (randNum) {
  case 1:
    choice = myGuitar;
    break;
  case 2:
    choice = myDrums;
    break;
  case 3:
    choice = myPiano;
    break;
  case 4:
    choice = myGrandPiano;
    break;
  default:
    console.log('bug');
}
choice.display();
if (choice instanceof Piano || choice instanceof GrandPiano) {
  console.log(choice.keysNum);
}
