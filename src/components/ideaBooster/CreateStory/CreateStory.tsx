import { useState, useEffect, useMemo } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_SENTENCE, GET_SENTENCES } from "apollo/query";

import {
  Box,
  Textarea,
  FormControl,
  FormLabel,
  FormHelperText,
  Flex,
  Button,
} from "@chakra-ui/react";

interface Sentence {
  id: string;
  type: string;
  sentence: string;
}

const CreateStory: any = ({ firstWord, secondWord }) => {
  const [story, setStory] = useState<undefined | string>(
    `${firstWord} ${secondWord}`
  );
  const [addSentence] = useMutation(ADD_SENTENCE);
  const { data, loading, error } = useQuery(GET_SENTENCES);

  let dataArr = [];

  // const createDataArr = () => {
  //   data.sentences.map((sentence: any) => dataArr.push(sentence.sentence));
  //   return dataArr;
  // };
  // createDataArr();
  // useEffect((): any => {
  if (!data) return null;
  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;
  data.sentences.map((sentence: any) => dataArr.push(sentence.sentence));
  // }, [dataArr, data.sentences]);

  console.log(dataArr);

  const handleInputChange = (e: { target: { value: string } }) => {
    const inputValue = e.target.value;
    setStory(inputValue);
    // dataArr.push(story);
    // return dataArr;
  };

  return (
    <Box>
      {/* {data.sentences.map((sentence: Sentence) => (
        <li key={sentence.id}>{sentence.sentence}</li>
      ))} */}
      {dataArr.map((sentence: string, index: number) => (
        <li key={index}>{sentence}</li>
      ))}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addSentence({ variables: { sentence: story } });
          console.log(dataArr);
          dataArr.push(story);
          console.log(dataArr);
          setStory("");
          // window.location.reload();
        }}
      >
        <FormControl>
          <Flex direction="column" alignItems="center">
            <FormLabel width="280px">Create a new story</FormLabel>
            <Textarea
              width="300px"
              value={story}
              onChange={handleInputChange}
              size="lg"
            ></Textarea>
          </Flex>
          <FormHelperText my="2">
            Boost your idea by these stories
          </FormHelperText>
          <Button type="submit">Add to list</Button>
        </FormControl>
      </form>
    </Box>
  );
};

export default CreateStory;
