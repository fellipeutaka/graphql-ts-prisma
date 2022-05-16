import { gql } from "apollo-server";

const Mutation = gql`
  type Mutation {
    newItem(data: ItemInput!): Item!
    updateItem(data: ItemUpdateInput!): Item!
    deleteItem(data: ItemDeleteInput!): Item!
  }
`;

export default Mutation;
