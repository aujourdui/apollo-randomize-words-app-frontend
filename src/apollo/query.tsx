import { gql } from "@apollo/client";

export const GET_WORDS = gql`
  query getWords {
    words {
      word
      type
    }
  }
`;
