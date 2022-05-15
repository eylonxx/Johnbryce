import React, { useEffect, useState } from 'react';
import './Clock.css';

// useEffect - run side-effects

// 1. Invoke the callback once when component ready to use:
// useEffect(() => { ... }, []);

// 2. Invoke the callback whenever array values changed:
// useEffect(() => { ... }, [obj1, obj2, obj3...]);

// 3. Invoke some function once when component is about to be destroyed:
// useEffect(() => {
// ...
// return () => {}; // <-- this function will be invoked once when component is about to be destroyed
// }, []);

function Clock(): JSX.Element {
  // State for handling the time to display:
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    // Side-Effect (cause it is window.setInterval):
    const timerId = setInterval(() => {
      const now = new Date();
      const currentTime = now.toLocaleTimeString();
      setTime(currentTime);
    }, 1000);

    // Kill timer when component is about to be destroyed:
    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="Clock Box">
      <p>{time}</p>
    </div>
  );
}

export default Clock;
