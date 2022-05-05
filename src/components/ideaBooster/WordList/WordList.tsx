import { UnorderedList, Grid, ListItem } from "@chakra-ui/react";

import styles from "./WordList.module.scss";

const WordList = ({ firstWord, secondWord }) => {
  return (
    <div>
      <UnorderedList>
        <Grid className={styles.container}>
          <ListItem className={styles.firstList}>{firstWord}</ListItem>
          <ListItem className={styles.secondLists}>X</ListItem>
          <ListItem className={styles.thirdList}>{secondWord}</ListItem>
        </Grid>
      </UnorderedList>
    </div>
  );
};

export default WordList;
