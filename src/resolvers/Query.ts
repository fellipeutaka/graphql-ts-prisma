import prisma from "../lib/prisma";

const Query = {
  hello: () => "Hello World",
  items: async () => await prisma.item.findMany(),
};

export default Query;
