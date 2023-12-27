export const GameOver = ({ message, onClick }) => {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      <p>{message}</p>
      <p>
        <button type="button" onClick={onClick}>
          Rematch!
        </button>
      </p>
    </div>
  );
};
