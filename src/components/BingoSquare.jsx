import React, { useState } from "react";

function BingoSquare({ task: task }) {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <article>
      <button
        className="item"
        type="button"
        onClick={handleClick}
        className={active ? "item prize" : "item"}
      >
        {task}
      </button>
    </article>
  );
}

export default BingoSquare;
