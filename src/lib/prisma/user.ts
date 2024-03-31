import { prisma } from "@/config/prisma";
import type { User } from "@prisma/client";

export const selectByUserId = async (userId: string): Promise<User | null> => {
  return await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
};

export const decreaseBalance = async (userId: string) => {
  await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      balance: {
        decrement: 1,
      },
    },
  });
};
