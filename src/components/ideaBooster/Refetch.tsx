import { Box, Button } from "@chakra-ui/react";

const Refetch = ({ handleRefetch }) => {
  return (
    <Box className="refetch-button__container">
      <Button onClick={handleRefetch}>Refetch</Button>
    </Box>
  );
};

export default Refetch;
