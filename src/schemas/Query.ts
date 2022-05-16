import { gql } from "apollo-server";

const Query = gql`
  type Query {
    hello: String!
    items: [Item!]!
  }
`;

export default Query;
