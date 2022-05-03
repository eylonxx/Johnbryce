import React from 'react';
import ColorsService from '../ColorsService/ColorsService';

export default function Beautiful() {
  function paint(): void {
    const obj = new ColorsService();
    alert(obj.getRandomColor());
  }
  return (
    <div>
      <button onClick={paint}>aa</button>
    </div>
  );
}
