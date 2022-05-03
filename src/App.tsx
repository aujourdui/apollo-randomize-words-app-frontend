import React, { useState, useEffect, FC } from "react";
import axios from "axios";
import "./App.css";

// interface IWords {
//   typeOf: any;
//   map: any;
//   word: any;
// }

const App: FC = () => {
  const [words, setWords] = useState<any>();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://wordsapiv1.p.rapidapi.com/words",
        {
          headers: {
            "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
            "X-RapidAPI-Key":
              "e7bf698955msh0a7c2b723de2e5ep12bdd6jsnff909e419223",
          },
        }
      );
      const data = await response.data;
      setWords(data.word);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log(words);
  }, [words]);
  return (
    <div className="App">
      <h1>Hello</h1>
      {words}
      {/* <p>{words.word}</p> */}
      {/* {words.map((word) => (
        <li>{word.typeOf}</li>
      ))} */}
    </div>
  );
};

export default App;

// useEffect(() => {
//   axios
//     .get("https://wordsapiv1.p.rapidapi.com/words/hatchback/typeOf", {
//       headers: {
//         "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
//         "X-RapidAPI-Key":
//           "e7bf698955msh0a7c2b723de2e5ep12bdd6jsnff909e419223",
//       },
//     })
//     .then((res) => console.log(res))
//     .catch((err) => {
//       console.error(new Error(err));
//     });
// });
