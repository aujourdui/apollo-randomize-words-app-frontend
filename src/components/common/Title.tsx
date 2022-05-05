import { Text } from "@chakra-ui/react";

const Title = ({ children }) => {
  return (
    <>
      <Text fontSize="5xl" fontWeight="extrabold">
        {children}
      </Text>
    </>
  );
};

export default Title;
