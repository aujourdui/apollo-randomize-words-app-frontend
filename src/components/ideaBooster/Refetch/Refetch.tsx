import { Box, Button } from "@chakra-ui/react";
import styles from "./Refetch.module.scss";

const Refetch = ({ handleRefetch }) => {
  return (
    <Box className={styles.buttonContainer}>
      <Button onClick={handleRefetch}>Refetch</Button>
    </Box>
  );
};

export default Refetch;
