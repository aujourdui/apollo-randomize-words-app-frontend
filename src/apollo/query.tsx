import { gql } from "@apollo/client";

export const GET_WORDS = gql`
  query getWords {
    words {
      word
      type
    }
  }
`;

export const ADD_SENTENCE = gql`
  mutation AddSentence {
    sentences {
      sentence
    }
  }
`;
