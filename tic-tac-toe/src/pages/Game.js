import { useState } from "react";
import Board from "./Board";

export default function Game() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board);

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  const handleClick = (i) => {
    const boardCopy = [...board];
    if (winner || boardCopy[i]) return;
    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  };

  const startGame = () => {
    return (
      <button
        className="border border-white m-2.5 p-2.5 rounded-lg"
        onClick={() => setBoard(Array(9).fill(null))}
      >
        Start Game
      </button>
    );
  };

  return (
    <div>
      <Board squares={board} onClick={handleClick} />
      <div className="flex flex-col justify-center items-center">
        <p className="m-2.5">
          {winner
            ? "Winner: " + winner
            : "Next Player: " + (xIsNext ? "X" : "O")}
        </p>
        {startGame()}
      </div>
    </div>
  );
}
