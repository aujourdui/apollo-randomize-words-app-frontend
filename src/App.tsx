import React, { useEffect, FC } from "react";
import axios from "axios";
import "./App.css";

const App: FC = () => {
  useEffect(() => {
    axios
      .get("https://wordsapiv1.p.rapidapi.com/words/hatchback/typeOf", {
        headers: {
          "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
          "X-RapidAPI-Key":
            "e7bf698955msh0a7c2b723de2e5ep12bdd6jsnff909e419223",
        },
      })
      .then((res) => console.log(res))
      .catch((err) => {
        console.error(new Error(err));
      });
  });
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
};

export default App;
