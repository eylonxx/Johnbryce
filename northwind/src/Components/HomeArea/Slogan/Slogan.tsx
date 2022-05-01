import React from 'react';

interface sloganProps {
  sentence: string;
  color: string;
  font: string;
}

export default function Slogan(props: sloganProps): JSX.Element {
  return <div style={{ color: props.color, fontFamily: props.font }}>{props.sentence}</div>;
}
