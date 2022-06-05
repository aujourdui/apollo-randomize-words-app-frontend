import { gql } from "@apollo/client";

export const GET_WORDS = gql`
  query getWords {
    words {
      id
      word
      type
    }
  }
`;

export const GET_SENTENCES = gql`
  query getSentences {
    sentences {
      id
      sentence
    }
  }
`;

export const ADD_SENTENCE = gql`
  mutation AddSentence($sentence: String!) {
    addSentence(sentence: $sentence)
  }
`;
