import { useMutation } from "@apollo/client";
import { ADD_SENTENCE } from "apollo/query";

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
  const [addSentence, { data, loading, error }] = useMutation(ADD_SENTENCE);

  console.log(data);

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;
  return (
    <Box>
      <FormControl
        onSubmit={(e) => {
          e.preventDefault();
          addSentence({ variables: { text: Textarea } });
        }}
      >
        <Flex direction="column" alignItems="center">
          <FormLabel width="280px">Create a new story</FormLabel>
          <Textarea
            width="300px"
            size="lg"
            defaultValue={[firstWord, secondWord]}
          ></Textarea>
        </Flex>
        <FormHelperText my="2">
          Boost your idea to create a story
        </FormHelperText>
        <Button type="submit">Add a story</Button>
      </FormControl>
      {data}
    </Box>
  );
};

export default CreateStory;
