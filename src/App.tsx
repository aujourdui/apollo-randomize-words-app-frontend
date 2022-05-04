import React, { useState, useEffect, FC } from "react";
import axios from "axios";
import "./App.css";

import {
  Box,
  Grid,
  Text,
  Button,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";

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
      <Text fontSize="5xl" fontWeight="extrabold">
        Idea Booster
      </Text>
      {
        words && (
          <>
            <UnorderedList>
              <Grid className="word__container">
                <ListItem className="word__list--first">
                  {words[randomNum()].word}
                </ListItem>
                <ListItem className="word__list--middle">X</ListItem>
                <ListItem className="word__list--second">
                  {words[randomNum()].word}
                </ListItem>
              </Grid>
            </UnorderedList>
            <Box className="refetch-button__container">
              <Button onClick={handleRefetch}>Refetch</Button>
            </Box>
            <Box className="refetch-button__container">
              <Button onClick={handleRefetch}>
                Create a new story with above words
              </Button>
            </Box>
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
