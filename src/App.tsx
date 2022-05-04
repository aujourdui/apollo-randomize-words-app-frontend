import React, { useState, useEffect, FC } from "react";
import axios from "axios";
import "./App.css";

const App: FC = () => {
  const [words, setWords] = useState<any>();

  const fetchData = async () => {
    try {
      const response = await axios.post("http://localhost:4000", {
        headers: {
          "Content-Type": "application/json",
        },
        query: `query{
            words {
              word
              type
            }
          }`,
      });
      const data = await response.data.data.words;
      // console.log(data);
      setWords(data);
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
      {words.map((word) => (
        <>
          <li>{word.word}</li>
          <li>{word.type}</li>
        </>
      ))}
    </div>
  );
};

export default App;
