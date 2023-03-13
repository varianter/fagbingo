import * as React from "react";

function BingoPrize({ prize: prize }) {
  return (
    <article className="item prize">
      <p>{prize}</p>
    </article>
  );
}
export default BingoPrize;
