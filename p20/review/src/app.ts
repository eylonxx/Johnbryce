import Cat from './cat';

const firstCat = new Cat('Mitsi', -4, 'White', -20);

console.log('the age: ' + firstCat.age);
firstCat.age = 5;
firstCat.display();

console.log('price is: ' + firstCat.price);
firstCat.price = 30;
console.log('price is: ' + firstCat.price);
