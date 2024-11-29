import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
        
    return () => {
      clearInterval(timer);
    };
    
  }, []);

  return <fieldset><div style={{ backgroundColor: '#646cffaa'}}class ="useEffect">
    <h1>Useffect</h1>
    <h2>Time:{seconds} secs</h2>
    </div></fieldset>;
};

export default Timer;