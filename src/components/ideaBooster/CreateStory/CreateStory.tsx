import { useState } from "react";
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
  const [value, setValue] = useState(`${firstWord} ${secondWord}`);
  const [addSentence] = useMutation(ADD_SENTENCE);
  const { data, loading, error } = useQuery(GET_SENTENCES);

  const handleInputChange = (e: { target: { value: string } }) => {
    const inputValue = e.target.value;
    setValue(inputValue);
  };

  if (!data) return null;
  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;

  return (
    <Box>
      {data.sentences.map((sentence: Sentence, index: number) => (
        <li key={index}>{sentence.sentence}</li>
      ))}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addSentence({ variables: { sentence: value } });
          setValue("");
          window.location.reload();
        }}
      >
        <FormControl>
          <Flex direction="column" alignItems="center">
            <FormLabel width="280px">Create a new story</FormLabel>
            <Textarea
              width="300px"
              value={value}
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
