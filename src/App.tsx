import React, { useState, useEffect, FC } from "react";
import axios from "axios";
import "./App.css";

const App: FC = () => {
  const [words, setWords] = useState<any>();
  const [refetch, setRefetch] = useState<any>();

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
      setWords(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [refetch]);

  const handleRefetch = () => {
    setRefetch(!refetch);
  };

  // useEffect(() => {
  //   console.log(words);
  // }, [words]);

  const randomNum = () => {
    return Math.floor(Math.random() * 12);
  };

  return (
    <div className="app">
      <h1>Idea Booster</h1>
      {
        words && (
          <>
            <div className="word__container">
              <li className="word__list--first">{words[randomNum()].word}</li>
              <li className="word__list--middle">X</li>
              <li className="word__list--second">{words[randomNum()].word}</li>
            </div>
            <div className="refetch-button__container">
              <button onClick={handleRefetch}>Refetch</button>
            </div>
            <div className="refetch-button__container">
              <button onClick={handleRefetch}>
                Create a new story with above words
              </button>
            </div>
          </>
        )
        // words.map((word, index) => (
        //   <div key={index} className="word__container">
        //     <li className="word__list--first">{word.word}</li>
        //     <li className="word__list--second">{word.type}</li>
        //   </div>
        // ))
      }
    </div>
  );
};

export default App;
