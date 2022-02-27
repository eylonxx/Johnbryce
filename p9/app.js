const items = [];
const tshirt = { name: 'tshirt', price: 25, img: './images.jpg', color: 'green' };
const hoodie = { name: 'hoodie', price: 40, img: './hoodie.jpg', color: 'olive' };
const jeans = { name: 'jeans', price: 50, img: './jeans.jpg', color: 'blue' };
items.push(tshirt, hoodie, jeans);
console.log(items);

const cart = [];
const itemList = document.querySelector('.d-flex');

for (let i = 0; i < items.length; i++) {
  itemList.innerHTML += `<div class="card" style="width: 18rem;">
<img src="${items[i].img}" class="card-img-top" alt>
<div class="card-body">
  <p class="card-text">${items[i].name}, ${items[i].price}, ${items[i].color}</p>
  <button onclick="addItem(${i})">Buy</button>
  <button>Remove</button>
</div>
</div>`;
}
function addItem(i) {
  cart.push(items[i]);
  console.log(cart);
}
