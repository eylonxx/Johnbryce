import React, { useState, useEffect } from 'react';
import store from '../../../Redux/Store';

export default function TotalProducts() {
  const [count, setCount] = useState<number>();

  useEffect(() => {
    setCount(store.getState().productsState.products.length);

    const unsubscribe = store.subscribe(() => {
      //subscribe change to global state
      setCount(store.getState().productsState.products.length);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="TotalProducts">
      <span>Total Products: {count}</span>
    </div>
  );
}
