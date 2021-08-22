import { gql } from '@apollo/client';

export const DISPLAY_BACKDROP = gql`
  query DisplayBackdrop {
    backdrop @client
  }
`;
