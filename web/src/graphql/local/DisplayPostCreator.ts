import { gql } from '@apollo/client';

export const DISPLAY_POST_CREATOR = gql`
  query DisplayPostCreator {
    displayPostCreator @client
  }
`;
