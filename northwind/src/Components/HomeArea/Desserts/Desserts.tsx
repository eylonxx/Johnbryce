import React from 'react';

export default function Desserts() {
  const items = [
    { id: 1, name: 'Ice Cream', price: 54 },
    { id: 2, name: 'Apple Pie', price: 54 },
    { id: 3, name: 'Pavlova', price: 54 },
    { id: 4, name: 'Eclair', price: 54 },
  ];
  return (
    <div className="Desserts">
      {items.map((item) => (
        <span key={item.id}>
          {item.name}, {item.price}
        </span>
      ))}
    </div>
  );
}
