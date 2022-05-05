import { UnorderedList, Grid, ListItem } from "@chakra-ui/react";

const WordList = ({ firstWord, secondWord }) => {
  return (
    <div>
      <UnorderedList>
        <Grid className="word__container">
          <ListItem className="word__list--first">{firstWord}</ListItem>
          <ListItem className="word__list--middle">X</ListItem>
          <ListItem className="word__list--second">{secondWord}</ListItem>
        </Grid>
      </UnorderedList>
    </div>
  );
};

export default WordList;
