import express from 'express';
const server = express();

server.listen(3001, () => {
  console.log('running on port 3001!');
});

server.get('/api/kittens', (req, res) => {
  res.send('lol');
});

server.get('/api/kittens/:id', (req, res) => {
  const id = +req.params.id;
  const kitten = kittens.find((k) => k.id === id);
  res.json(kitten);
  console.log(id);
});

const kittens = [
  { id: 1, name: 'Mitsi', age: 4 },
  { id: 2, name: 'Kitsi', age: 5 },
  { id: 3, name: 'Fitsi', age: 6 },
];
