export default function Square({ onClick, value }) {
  return (
    <button className="border-2 border-white text-9xl" onClick={onClick}>
      {value}
    </button>
  );
}
