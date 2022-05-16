import { Item } from "@prisma/client";
import prisma from "../lib/prisma";

type NewItemArgs = {
  data: Item;
};

type UpdateItemArgs = {
  data: Item;
};

type DeleteItemArgs = {
  data: {
    id: string;
  };
};

const Mutation = {
  newItem: async (parent, { data }: NewItemArgs) =>
    await prisma.item.create({
      data,
    }),
  updateItem: async (parent, { data }: UpdateItemArgs) =>
    await prisma.item.update({
      where: {
        id: data.id,
      },
      data,
    }),
  deleteItem: async (parent, { data: { id } }: DeleteItemArgs) =>
    await prisma.item.delete({
      where: {
        id,
      },
    }),
};

export default Mutation;
