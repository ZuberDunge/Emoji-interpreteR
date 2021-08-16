import React, { useState } from "react";
import "./styles.css";

var emojiList = {
  "🍎": "Apple",
  "🍇": "Grapes",
  "🍉": "Watermelon",
  "🍓": "Strawberry",
  "🍅": "Tomato",
  "🍍": "Pineapple",
  "🥥": "Coconut",
  "🍐": "Pear",
  "🥕": "Carrot",
  "🌽": "Corn"
};

var emojiWeHave = Object.keys(emojiList);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userinput = event.target.value;
    var meaning = emojiList[userinput];

    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiList[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 className="heading">Emoji interpreteR</h1>

      <input className="input" onChange={emojiInputHandler}></input>

      <h2>{meaning}</h2>

      <h3 className="heading2 space">Emojis We Have</h3>

      {emojiWeHave.map(function (emoji) {
        return (
          <span
            onClick={function () {
              emojiClickHandler(emoji);
            }}
            style={{ fontSize: "2rem", padding: "1rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
      <div>
        <footer className="social">
          <p>
            Made with Love 💕 by<strong> Zuber Dunge </strong>
          </p>
        </footer>
      </div>
    </div>
  );
}
