import express from 'express';
const server = express();

server.listen(3001, () => {
  console.log('running on port 3001!');
});

server.get('/candies', (req, res) => {
  res.send(candies);
});

server.get('/candies/:name', (req, res) => {
  const candyName: string = req.params.name.toLowerCase();
  console.log(candyName);
  switch (candyName) {
    case 'lollipop':
      res.send(candies[0].description);
      break;
    case 'chocolatebar':
      res.send(candies[1].description);
      break;
    case 'taffies':
      res.send(candies[2].description);
      break;
    case 'gummies':
      res.send(candies[3].description);
      break;
    default:
      res.send('no such candy!');
  }
});

const candies = [
  {
    id: 1,
    name: 'Lollipop',
    description: 'A cherry flavored lollipop.',
    price: '7$',
  },
  {
    id: 2,
    name: 'Chocolatebar',
    description: 'Chocolate Milk bar.',
    price: '11$',
  },
  {
    id: 3,
    name: 'Taffies',
    description: 'Dulce de leche taffies.',
    price: '6$',
  },
  {
    id: 4,
    name: 'Gummies',
    description: 'Gummy bears and Gummy worms mix.',
    price: '17$',
  },
];
