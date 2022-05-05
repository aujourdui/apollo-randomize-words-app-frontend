import "./App.css";

import { useQuery, gql, NetworkStatus } from "@apollo/client";

import {
  Box,
  Grid,
  Text,
  Button,
  ListItem,
  UnorderedList,
  Textarea,
} from "@chakra-ui/react";

const GET_WORDS = gql`
  query getWords {
    words {
      word
      type
    }
  }
`;

const App: any = () => {
  const { loading, error, data, refetch, networkStatus } = useQuery(GET_WORDS, {
    notifyOnNetworkStatusChange: true,
  });

  if (!data) return null;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (networkStatus === NetworkStatus.refetch) return "Refetching!";
  if (loading) return null;

  const randomNum = () => {
    return Math.floor(Math.random() * 12);
  };

  const handleRefetch = () => {
    refetch();
  };

  const firstWord = data.words[randomNum()].word;

  const secondWord = data.words[randomNum()].word;

  return (
    <div className="app">
      <Text fontSize="5xl" fontWeight="extrabold">
        Idea Booster
      </Text>
      <>
        <UnorderedList>
          <Grid className="word__container">
            <ListItem className="word__list--first">{firstWord}</ListItem>
            <ListItem className="word__list--middle">X</ListItem>
            <ListItem className="word__list--second">{secondWord}</ListItem>
          </Grid>
        </UnorderedList>
        <Box className="refetch-button__container">
          <Button onClick={handleRefetch}>Refetch</Button>
        </Box>
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
      </>
    </div>
  );
};

export default App;
