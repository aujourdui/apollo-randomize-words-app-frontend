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
      const response = await axios.post("http://localhost:4000", {
        headers: {
          "Content-Type": "application/json",
          // Authorization: "dummy-token",
        },
        query: `query{
            words {
              word
              type
            }
          }`,
      });
      const data = await response.data;
      console.log(data);
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
