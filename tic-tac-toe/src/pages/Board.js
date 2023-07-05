import Square from "./Square";

export default function Board({ squares, onClick }) {
  return (
    <div className="w-96 h-96 grid grid-rows-3 grid-cols-3">
      {squares.map((square, i) => (
        <Square key={i} value={square} onClick={() => onClick(i)} />
      ))}
    </div>
  );
}
