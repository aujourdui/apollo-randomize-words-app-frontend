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

const CreateStory: any = ({ firstWord, secondWord }) => {
  // let input;
  const [value, setValue] = useState("");
  const [addSentence] = useMutation(ADD_SENTENCE);
  const { data, loading, error } = useQuery(GET_SENTENCES);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
  };

  if (!data) return null;
  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;
  return (
    <Box>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addSentence({ variables: { sentence: value } });
          setValue("");
        }}
      >
        <FormControl>
          <Flex direction="column" alignItems="center">
            <FormLabel width="280px">Create a new story</FormLabel>
            <p>{value}</p>
            <Textarea
              width="300px"
              value={value}
              onChange={handleInputChange}
              size="lg"
              defaultValue={[firstWord, secondWord]}
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
