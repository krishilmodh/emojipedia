import React from "react";
import Card from "./Card";
import emojipedia from "../emojipedia";

function Emojicard() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <div>
        <dl className="dictionary">
          {emojipedia.map((emojipedia) => (
            <Card
              key={emojipedia.id}
              emoji={emojipedia.emoji}
              name={emojipedia.name}
              meaning={emojipedia.meaning}
            />
          ))}
        </dl>
      </div>
    </div>
  );
}

export default Emojicard;
