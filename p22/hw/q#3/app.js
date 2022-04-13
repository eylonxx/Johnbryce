let newSet = new Set();
newSet.add('hi');
newSet.add('hi8');
newSet.add('hi7');
newSet.add('hi6');
newSet.add('hi5');
newSet.add('hi4');
newSet.add('hi3');
newSet.add('hi2');
newSet.add('hi42');

console.log(newSet.size);
console.log(newSet.has('Grapes'));
newSet.forEach((item) => console.log(item));
