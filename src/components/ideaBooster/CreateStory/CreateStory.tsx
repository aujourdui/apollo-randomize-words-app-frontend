import { Box, Text, Textarea } from "@chakra-ui/react";

const CreateStory = ({ firstWord, secondWord }) => {
  return (
    <Box>
      <Text width="90%" fontSize="xl">
        Create a new story
      </Text>
      <Textarea
        width="300px"
        size="lg"
        defaultValue={[firstWord, secondWord]}
      ></Textarea>
    </Box>
  );
};

export default CreateStory;
