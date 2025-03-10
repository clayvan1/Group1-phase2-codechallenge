import React from 'react';

function GameStatus({ players, currentPlayerIndex, gameOver, determineWinner }) {
  if (gameOver) {
    const winner = determineWinner();
    return (
      <div>
        <h2>Game Over!</h2>
        <p>Winner: {winner}</p>
        <p>Final Scores:</p>
        <ul>
          {players.map((player) => (
            <li key={player.name}>
              {player.name}: {player.score}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', padding: '10px', borderBottom: '1px solid #ccc' }}>
      {players.map((player, index) => (
        <div
          key={player.name}
          style={{
            border: index === currentPlayerIndex ? '2px solid blue' : '1px solid gray',
            padding: '10px',
            borderRadius: '5px',
            textAlign: 'center',
          }}
        >
          <h3>{player.name}</h3>
          <p>Score: {player.score}</p>
        </div>
      ))}
    </div>
  );
}

export default GameStatus;