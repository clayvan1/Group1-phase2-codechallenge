import React, { useState, useEffect } from 'react';

function TurnManager({ players, currentPlayerIndex, setCurrentPlayerIndex, onTurnEnd, onPass, onSwap }) {
  const [timeRemaining, setTimeRemaining] = useState(60);

  useEffect(() => {
    if (timeRemaining === 0) {
      onTurnEnd();
      setTimeRemaining(60);
    }
  }, [timeRemaining, onTurnEnd]);

  useEffect(() => {
    if (timeRemaining !== 60) {
      setTimeRemaining(60);
    }
  }, [currentPlayerIndex]);

  useEffect(() => {
    if (timeRemaining > 0) {
      const timer = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [timeRemaining]);

  const handlePass = () => {
    setTimeRemaining(0);
    onPass();
  };

  const handleSwap = (tile) => {
    onSwap(tile);
    setTimeRemaining(0);
  };

  return (
    <div style={{ border: '2px solid blue', padding: '10px', margin: '5px' }}>
      <h3>{players[currentPlayerIndex].name}'s Turn</h3>
      <p>Time Remaining: {timeRemaining} seconds</p>
      <button onClick={handlePass}>Pass</button>
      <button onClick={() => handleSwap()}>Swap Tiles</button>
    </div>
  );
}

export default TurnManager;