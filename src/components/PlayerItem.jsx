import React, { useState } from "react";

export const PlayerItem = ({ initialName, symbol }) => {
  const [name, setName] = useState(initialName);
  const [input, setInput] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing((prevState) => !prevState);
  };

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSave = () => {
    setName(input);
    setIsEditing((prevState) => !prevState);
  };

  const playerNameElement = isEditing ? (
    <input type="text" value={input} onChange={handleChange} required />
  ) : (
    <span className="player-name">{name}</span>
  );

  return (
    <li>
      <span className="player">
        {playerNameElement}
        <span className="player-symbol">{symbol}</span>
      </span>
      {isEditing ? (
        <>
          <button onClick={handleSave}>Save</button>
          <button onClick={handleEdit}>Cancel</button>
        </>
      ) : (
        <button onClick={handleEdit}>Edit</button>
      )}
    </li>
  );
};
