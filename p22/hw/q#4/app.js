let newMap = new Map();
newMap.set(123, { name: 'eylon', age: 24 });
newMap.set(12513, { name: 'oded', age: 25 });
newMap.set(1213, { name: 'yuval', age: 13 });

const entries1 = newMap.entries();
const entries = newMap.keys();
const entriesV = newMap.values();

for (let entry of entries) {
  console.log(entry);
}
for (let entry of entriesV) {
  console.log(entry);
}
for (let entry of entries1) {
  console.log(entry);
}

const res = newMap.has(1213);
console.log(res);
