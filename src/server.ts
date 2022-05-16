import { ApolloServer } from "apollo-server";
import resolvers from "./resolvers";
import typeDefs from "./schemas";

const server = new ApolloServer({ typeDefs, resolvers });

server
  .listen(3333)
  .then(({ url }) => console.log(`Server is running at ${url}`));
