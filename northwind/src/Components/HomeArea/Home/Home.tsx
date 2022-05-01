import React from 'react';
import Discount from '../Discount/Discount';
import Slogan from '../Slogan/Slogan';
import Specials from '../Specials/Specials';

export default function Home(): JSX.Element {
  return (
    <div className="Home">
      <Discount />
      <Specials />
      <Slogan sentence="hi" font="monospace" color="black" />
    </div>
  );
}
