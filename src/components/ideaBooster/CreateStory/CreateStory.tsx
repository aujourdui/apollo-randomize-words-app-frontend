import { useMutation } from "@apollo/client";
import { ADD_SENTENCE } from "apollo/query";

import {
  Box,
  Text,
  Textarea,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Center,
  Flex,
} from "@chakra-ui/react";

const CreateStory: any = ({ firstWord, secondWord }) => {
  const [addSentence, { data, loading, error }] = useMutation(ADD_SENTENCE);

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;
  return (
    <Box>
      <FormControl>
        <Flex direction="column" alignItems="center">
          <FormLabel width="280px">Create a new story</FormLabel>
          <Textarea
            width="300px"
            size="lg"
            defaultValue={[firstWord, secondWord]}
          ></Textarea>
        </Flex>
        <FormHelperText>Boost your idea to create a story</FormHelperText>
      </FormControl>
    </Box>
  );
};

export default CreateStory;
