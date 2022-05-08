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
  let input;
  const [addSentence] = useMutation(ADD_SENTENCE);
  const { data, loading, error } = useQuery(GET_SENTENCES);

  if (!data) return null;
  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;
  return (
    <Box>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // addSentence({ variables: { text: Textarea } });
          addSentence({ variables: { sentence: input.value } });
          input.value = "";
          window.location.reload();
        }}
      >
        <FormControl>
          <Flex direction="column" alignItems="center">
            <FormLabel width="280px">Create a new story</FormLabel>
            <input
              type="text"
              ref={(node) => {
                input = node;
              }}
            />
            {/* <Textarea
            width="300px"
            size="lg"
            defaultValue={[firstWord, secondWord]}
          ></Textarea> */}
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
