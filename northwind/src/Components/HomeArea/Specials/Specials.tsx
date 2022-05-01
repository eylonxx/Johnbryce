import React from 'react';

export default function Specials() {
  function isWeekend(): boolean {
    const now = new Date();
    const day = now.getDay() + 1; // 1=sunday
    return day >= 6;
  }

  return (
    <div className="Specials Box">
      <p>Our specials: {isWeekend() ? 'Pizza' : 'Pasta'} </p>
    </div>
  );
}
