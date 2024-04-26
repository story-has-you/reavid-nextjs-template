import { prisma } from "@/server/prisma";
import type { User } from "@prisma/client";

class UserMapper {
  public selectById = async (userId: string): Promise<User | null> => {
    return await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
  };

  public decrementBalance = async (userId: string) => {
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
}

export const userMapper = new UserMapper();
