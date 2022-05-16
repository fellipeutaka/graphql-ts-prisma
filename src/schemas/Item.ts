import { gql } from "apollo-server";

const Item = gql`
  type Item {
    id: ID
    name: String
    category: Category
    description: String
    local: String
    date: Date
  }

  enum Category {
    material
    eletronico
  }

  scalar Date

  input ItemInput {
    name: String!
    category: Category!
    description: String!
    local: String!
  }

  input ItemUpdateInput {
    name: String
    category: Category
    description: String
    local: String
    id: ID!
  }

  input ItemDeleteInput {
    id: ID!
  }
`;

export default Item;
