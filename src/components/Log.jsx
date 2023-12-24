export const Log = ({ logs }) => {
  let logElements = logs.map((log, index) => {
    let { rowIndex, colIndex, symbol } = log;
    let highlighted = index === 0 ? "highlighted" : "";

    return (
      <li
        key={`${rowIndex}${colIndex}`}
        className={highlighted}
      >{`${symbol} selected [ ${rowIndex} , ${colIndex} ]`}</li>
    );
  });

  console.log(logElements);

  return <ol id="log">{logElements}</ol>;
};
